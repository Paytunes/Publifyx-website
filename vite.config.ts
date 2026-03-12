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
          // Radix UI — split by usage frequency to avoid loading unused packages
          // Header (statically imported) uses DropdownMenu → always loads
          "radix-nav": ["@radix-ui/react-dropdown-menu"],
          // App.tsx (statically imported) uses Toaster + TooltipProvider → always loads
          "radix-globals": [
            "@radix-ui/react-toast",
            "@radix-ui/react-tooltip",
          ],
          // Heavy form/overlay primitives — only load with lazy Contact/modal pages
          "radix-forms": [
            "@radix-ui/react-label",
            "@radix-ui/react-select",
            "@radix-ui/react-slot",
          ],
          // Dialog/popover/accordion — load only with pages that render them
          "radix-overlay": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-popover",
            "@radix-ui/react-separator",
          ],
        },
      },
    },
  },
}));
