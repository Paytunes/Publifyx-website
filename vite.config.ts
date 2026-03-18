import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { sitemapPlugin } from "./plugins/vite-sitemap";
import { asyncCssPlugin } from "./plugins/vite-async-css";
import { heroPreloadPlugin } from "./plugins/vite-hero-preload";
import { netlifyPreloadPlugin } from "./plugins/vite-netlify-preload";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), sitemapPlugin(), asyncCssPlugin(), heroPreloadPlugin(), netlifyPreloadPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Replace framer-motion (119 KB) with a lightweight shim (~1 KB)
      "framer-motion": path.resolve(__dirname, "./src/lib/motion-shim.ts"),
    },
  },
  build: {
    // CSS is split per JS chunk so each lazy route only loads what it needs
    cssCodeSplit: true,
    // Increase warning limit to avoid noise from intentional large vendor chunks
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core + router — smallest possible critical-path chunk
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Lucide icons — used across many pages
          lucide: ["lucide-react"],
        },
      },
    },
  },
}));
