import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://vtube-95sj.onrender.com/api/v1'
    }
  }
})
