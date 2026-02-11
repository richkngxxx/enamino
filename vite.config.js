import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allow access from network
    port: 5173,
    strictPort: false,  // Try next port if 5173 is taken
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1000KB to suppress warning
  },
})
