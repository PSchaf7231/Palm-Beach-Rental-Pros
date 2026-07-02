import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  plugins: [
    react(),
    tanstackRouterVite(),
    componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // This is the part that fixes the Nitro/Vercel build
  ssr: {
    noExternal: true,
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
