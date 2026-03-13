import type { Plugin } from "vite";

/**
 * Injects a <link rel="preload"> for the LCP hero image into index.html.
 * Vite content-hashes asset filenames, so we locate the final hashed name
 * from the bundle and inject the preload tag in the <head>.
 */
export function heroPreloadPlugin(): Plugin {
  return {
    name: "vite-hero-preload",
    enforce: "post",
    transformIndexHtml: {
      order: "post",
      handler(_html, ctx) {
        // Only inject during build (ctx.bundle exists)
        const bundle = ctx.bundle;
        if (!bundle) return [];

        // Find the hashed hero image asset
        for (const [fileName] of Object.entries(bundle)) {
          if (fileName.includes("hero-woman-phone") && fileName.endsWith(".webp")) {
            return [
              {
                tag: "link",
                attrs: {
                  rel: "preload",
                  as: "image",
                  href: `/${fileName}`,
                  type: "image/webp",
                  fetchpriority: "high",
                },
                injectTo: "head",
              },
            ];
          }
        }

        return [];
      },
    },
  };
}
