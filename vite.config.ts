import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Increase warning limit to avoid noise from intentional large vendor chunks
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Isolate framer-motion — it's 300KB+ and only needed for animations
          "framer-motion": ["framer-motion"],
          // All Radix UI primitives grouped together — loaded async
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
          // React core + router kept lean and fast
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Tanstack query separate chunk
          "query": ["@tanstack/react-query"],
          // Recharts — only used on AdInsights page
          "recharts": ["recharts"],
          // Lucide icons — large icon set
          "lucide": ["lucide-react"],
        },
      },
    },
  },
}));
