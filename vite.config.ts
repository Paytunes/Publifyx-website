import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { sitemapPlugin } from "./plugins/vite-sitemap";
import { asyncCssPlugin } from "./plugins/vite-async-css";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), sitemapPlugin(), asyncCssPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
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
          // Isolate framer-motion — it's 300KB+ and only needed for animations
          "framer-motion": ["framer-motion"],
          // React core + router — smallest possible critical-path chunk
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Tanstack query separate chunk
          query: ["@tanstack/react-query"],
          // Lucide icons — large icon set
          lucide: ["lucide-react"],
          // Radix UI primitives (used by shadcn/ui) — kept out of the main entry
          // chunk so pages that don't use dialogs/selects don't pay the cost
          "radix-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-label",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slot",
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
}));
