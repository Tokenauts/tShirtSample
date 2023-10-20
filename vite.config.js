import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://front-git-test-way2pay.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
