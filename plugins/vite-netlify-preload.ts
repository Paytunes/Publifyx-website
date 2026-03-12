/**
 * vite-netlify-preload
 *
 * Two jobs, both targeting the Netlify dist/_headers file:
 *
 * 1. GLOBAL modulepreload — for every route.
 *    Reads the <link rel="modulepreload"> hints Vite injects into dist/index.html
 *    and re-emits them as HTTP Link response headers.
 *    Effect: CDN sends the entry JS + vendor chunks in the response headers,
 *    so the browser starts fetching them before it even reads a byte of HTML.
 *
 * 2. ROUTE-SPECIFIC modulepreload — for key landing pages.
 *    Identifies the lazy page chunks (and their heavy dependencies) from the
 *    Rollup bundle, then adds Link headers for those specific routes.
 *    Effect: when a user lands directly on /programmatic-display-advertising,
 *    the browser fetches the page chunk + framer-motion + radix-overlay in
 *    parallel with the HTML instead of waiting for React to boot and lazy-import.
 *
 * This collapses the sequential chain:
 *   HTML → entry JS → React lazy → page chunk → framer-motion chunk → render
 * into parallel downloads, reducing LCP render delay.
 */

import type { Plugin } from "vite";
import type { NormalizedOutputOptions, OutputBundle } from "rollup";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

// Pages we want to prefetch for their canonical URL.
// key = page source path fragment, value = Netlify route pattern
const ROUTE_PAGE_MAP: Record<string, string> = {
  ProgrammaticDisplayAdvertising: "/programmatic-display-advertising",
  CTVAdvertisingNew: "/ctv-advertising",
  OTTAdvertising: "/ott-advertising",
  ProgrammaticAudioAdvertising: "/programmatic-audio-advertising",
  WhiteLabelDSP: "/white-label-dsp",
};

// manualChunk names whose files should ALSO be preloaded alongside page chunks
// (these are the heavy deps that lazy page chunks import at runtime)
const PAGE_DEP_CHUNK_NAMES = ["framer-motion", "radix-overlay", "radix-forms", "lucide"];

export function netlifyPreloadPlugin(): Plugin {
  // Collected in generateBundle, consumed in closeBundle
  const routeChunks: Map<string, string[]> = new Map(); // route → ["/assets/foo.js", ...]
  let depChunkFiles: string[] = []; // files for PAGE_DEP_CHUNK_NAMES

  return {
    name: "vite-netlify-preload",
    apply: "build",

    generateBundle(_opts: NormalizedOutputOptions, bundle: OutputBundle) {
      // Build map: manualChunk-name → output filename
      const chunksByName: Record<string, string> = {};
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === "chunk" && chunk.name) {
          chunksByName[chunk.name] = chunk.fileName;
        }
      }

      // Collect dep chunk files (framer-motion, radix-overlay, etc.)
      depChunkFiles = PAGE_DEP_CHUNK_NAMES.flatMap((name) =>
        chunksByName[name] ? [`/${chunksByName[name]}`] : [],
      );

      // Map each landing page source fragment → its output chunk filename
      for (const chunk of Object.values(bundle)) {
        if (chunk.type !== "chunk") continue;
        for (const [srcFragment, route] of Object.entries(ROUTE_PAGE_MAP)) {
          if (
            (chunk.facadeModuleId ?? "").includes(srcFragment) ||
            (chunk.name ?? "").includes(srcFragment)
          ) {
            const existing = routeChunks.get(route) ?? [];
            existing.push(`/${chunk.fileName}`);
            routeChunks.set(route, existing);
          }
        }
      }
    },

    closeBundle() {
      const outDir = join(process.cwd(), "dist");
      const htmlPath = join(outDir, "index.html");
      if (!existsSync(htmlPath)) return;

      const html = readFileSync(htmlPath, "utf-8");

      // ── 1. Global modulepreload hints from Vite's <head> ──────────────────
      const globalHrefs: string[] = [];
      const re = /<link rel="modulepreload"[^>]*href="([^"]+)"/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(html)) !== null) {
        globalHrefs.push(m[1]);
      }

      const lines: string[] = [
        "",
        "# ── Vite modulepreload Link headers (injected by vite-netlify-preload) ──────",
        "# Sent with the HTML response so browsers fetch critical JS before",
        "# HTML is fully parsed — breaks the sequential chain.",
      ];

      if (globalHrefs.length > 0) {
        const globalLink = globalHrefs
          .map((h) => `<${h}>; rel=modulepreload; crossorigin`)
          .join(", ");
        lines.push("/", `  Link: ${globalLink}`, "", "/*.html", `  Link: ${globalLink}`);
      }

      // ── 2. Route-specific hints for lazy landing pages ─────────────────────
      if (routeChunks.size > 0) {
        lines.push(
          "",
          "# ── Route-specific preloads for lazy landing pages ──────────────────────────",
          "# Page chunk + heavy deps start downloading in parallel with HTML,",
          "# eliminating the React.lazy() network roundtrip on direct URL visits.",
        );

        for (const [route, pageFiles] of routeChunks) {
          // page chunk(s) + shared dep chunks (framer-motion, radix-overlay, etc.)
          const allFiles = [...new Set([...pageFiles, ...depChunkFiles])];
          const linkValue = allFiles
            .map((f) => `<${f}>; rel=modulepreload; crossorigin`)
            .join(", ");
          lines.push("", route, `  Link: ${linkValue}`);
        }
      }

      lines.push("");

      // Append to dist/_headers (which was already copied from public/_headers)
      const headersPath = join(outDir, "_headers");
      const existing = existsSync(headersPath) ? readFileSync(headersPath, "utf-8") : "";
      writeFileSync(headersPath, existing + lines.join("\n"), "utf-8");
    },
  };
}
