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
    // Merge all CSS into a single file injected directly in HTML <head>
    // This breaks the JS→CSS critical chain flagged by PageSpeed
    cssCodeSplit: false,
    // Increase warning limit to avoid noise from intentional large vendor chunks
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Isolate framer-motion — it's 300KB+ and only needed for animations
          "framer-motion": ["framer-motion"],
          // React core + router kept lean and fast
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // Tanstack query separate chunk
          "query": ["@tanstack/react-query"],
          // Lucide icons — large icon set
          "lucide": ["lucide-react"],
        },
      },
    },
  },
}));
