import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { sitemapPlugin } from "./plugins/vite-sitemap";
import { asyncCssPlugin } from "./plugins/vite-async-css";
import { netlifyPreloadPlugin } from "./plugins/vite-netlify-preload";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), sitemapPlugin(), asyncCssPlugin(), netlifyPreloadPlugin()].filter(Boolean),
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
        manualChunks(id: string) {
          // Heavy animation library — only needed on animated pages
          if (id.includes("node_modules/framer-motion")) return "framer-motion";
          // React core + router — smallest possible critical-path chunk
          if (
            id.includes("node_modules/react-router-dom") ||
            id.includes("node_modules/react-dom") ||
            id.includes("node_modules/react/") ||
            id.includes("node_modules/scheduler")
          )
            return "react-vendor";
          // Tanstack query separate chunk
          if (id.includes("node_modules/@tanstack/react-query")) return "query";
          // Lucide icons — large icon set
          if (id.includes("node_modules/lucide-react")) return "lucide";
          // Radix UI split by usage frequency:
          // radix-nav: always loaded (Header uses DropdownMenu)
          if (id.includes("node_modules/@radix-ui/react-dropdown-menu")) return "radix-nav";
          // radix-globals: always loaded (Toaster + Tooltip in App.tsx)
          if (
            id.includes("node_modules/@radix-ui/react-toast") ||
            id.includes("node_modules/@radix-ui/react-tooltip")
          )
            return "radix-globals";
          // radix-forms: only needed on Contact page
          if (
            id.includes("node_modules/@radix-ui/react-label") ||
            id.includes("node_modules/@radix-ui/react-select") ||
            id.includes("node_modules/@radix-ui/react-slot")
          )
            return "radix-forms";
          // radix-overlay: only needed on pages with FAQ/dialog/accordion
          if (
            id.includes("node_modules/@radix-ui/react-accordion") ||
            id.includes("node_modules/@radix-ui/react-dialog") ||
            id.includes("node_modules/@radix-ui/react-popover") ||
            id.includes("node_modules/@radix-ui/react-separator")
          )
            return "radix-overlay";
          // Page-specific chunks for statically-imported landing pages
          // These allow Vite to emit <link rel="modulepreload"> for them
          if (id.includes("/pages/OTTAdvertising") || id.includes("/sections/ottAdvertising/"))
            return "page-ott";
          if (id.includes("/pages/WhiteLabelDSP") || id.includes("/sections/whiteLabelDSP/"))
            return "page-wl-dsp";
          if (id.includes("/pages/CTVAdvertisingNew") || id.includes("/sections/connectedTV/"))
            return "page-ctv";
          if (
            id.includes("/pages/ProgrammaticDisplayAdvertising") ||
            id.includes("/sections/displayAdvertising/")
          )
            return "page-display";
        },
      },
    },
  },
}));
