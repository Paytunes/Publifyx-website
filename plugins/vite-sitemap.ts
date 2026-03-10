/**
 * Vite plugin that generates sitemap.xml and blog/rss.xml
 * - In dev: serves them via middleware
 * - In build: writes them to dist/
 */
import type { Plugin } from "vite";
import { generateSitemap, generateRSS } from "../scripts/generate-sitemap";
import fs from "fs";
import path from "path";

export function sitemapPlugin(): Plugin {
  return {
    name: "vite-plugin-sitemap",

    // Dev server — serve dynamically
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/sitemap.xml") {
          res.setHeader("Content-Type", "application/xml; charset=utf-8");
          res.end(generateSitemap());
          return;
        }
        if (req.url === "/blog/rss.xml") {
          res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
          res.end(generateRSS());
          return;
        }
        next();
      });
    },

    // Build — write files to dist/
    closeBundle() {
      const outDir = path.resolve(process.cwd(), "dist");
      if (!fs.existsSync(outDir)) return;

      // Write sitemap.xml
      fs.writeFileSync(path.join(outDir, "sitemap.xml"), generateSitemap(), "utf-8");

      // Write blog/rss.xml
      const blogDir = path.join(outDir, "blog");
      if (!fs.existsSync(blogDir)) {
        fs.mkdirSync(blogDir, { recursive: true });
      }
      fs.writeFileSync(path.join(blogDir, "rss.xml"), generateRSS(), "utf-8");

      console.log("✅ Generated sitemap.xml and blog/rss.xml");
    },
  };
}
