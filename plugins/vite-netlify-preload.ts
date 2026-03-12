/**
 * vite-netlify-preload
 *
 * Reads the modulepreload hints that Vite injects into dist/index.html and
 * re-emits them as HTTP `Link:` response headers in dist/_headers.
 *
 * Why this helps:
 *   Vite's <link rel="modulepreload"> hints live inside the HTML <head>, so
 *   the browser only discovers them after receiving the full HTML response.
 *   An HTTP Link header is sent *with* the response headers — before any HTML
 *   byte is received — so the CDN/browser can start fetching the critical JS
 *   chunks in parallel with the HTML body, collapsing the sequential chain
 *   into a parallel download.
 */

import type { Plugin } from "vite";
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

export function netlifyPreloadPlugin(): Plugin {
  return {
    name: "vite-netlify-preload",
    apply: "build",
    closeBundle() {
      const outDir = join(process.cwd(), "dist");
      const htmlPath = join(outDir, "index.html");

      if (!existsSync(htmlPath)) return;

      const html = readFileSync(htmlPath, "utf-8");

      // Collect every href that Vite marked as modulepreload.
      // Vite only marks the entry chunk and its statically-reachable
      // dependencies — exactly the chunks needed for first render.
      const hrefs: string[] = [];
      const re = /<link rel="modulepreload"[^>]*href="([^"]+)"/g;
      let m: RegExpExecArray | null;
      while ((m = re.exec(html)) !== null) {
        hrefs.push(m[1]);
      }

      if (hrefs.length === 0) return;

      // Comma-joined value is valid per RFC 8288 and Netlify _headers spec
      const linkValue = hrefs
        .map((href) => `<${href}>; rel=modulepreload; crossorigin`)
        .join(", ");

      const block = [
        "",
        "# modulepreload Link headers — injected at build time by vite-netlify-preload",
        "# Sent with the HTML response so browsers fetch critical JS before HTML is fully parsed.",
        "/",
        `  Link: ${linkValue}`,
        "",
        "/*.html",
        `  Link: ${linkValue}`,
        "",
      ].join("\n");

      const headersPath = join(outDir, "_headers");
      const existing = existsSync(headersPath)
        ? readFileSync(headersPath, "utf-8")
        : "";

      writeFileSync(headersPath, existing + block, "utf-8");
    },
  };
}
