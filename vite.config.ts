import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Configuration pour GitHub Pages
  base: "/my-portfolio-1.0/",

  build: {
    outDir: "dist",
    sourcemap: true,
    // Optimisations pour le déploiement
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },

  // Configuration pour le mode preview local
  preview: {
    port: 4173,
    host: true,
  },
})
