import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'http://localhost:6006',
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
})