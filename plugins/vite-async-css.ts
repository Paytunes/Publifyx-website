/**
 * Vite plugin: vite-async-css
 *
 * Transforms render-blocking <link rel="stylesheet"> tags in the generated
 * HTML to non-blocking preload + onload pattern (Filament Group LoadCSS).
 *
 * Before:
 *   <link rel="stylesheet" crossorigin href="/assets/index-xxx.css">
 *
 * After:
 *   <link rel="preload" as="style" href="/assets/index-xxx.css"
 *         onload="this.onload=null;this.rel='stylesheet'">
 *   <noscript><link rel="stylesheet" href="/assets/index-xxx.css"></noscript>
 *
 * The inline critical CSS in index.html covers above-the-fold rendering.
 * By the time React hydrates and paints, the async CSS is already fetched.
 */
import type { Plugin } from "vite";

export function asyncCssPlugin(): Plugin {
  return {
    name: "vite-async-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
          (_, href) =>
            `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
            `<noscript><link rel="stylesheet" href="${href}"></noscript>`,
        );
      },
    },
  };
}
