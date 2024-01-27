import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react(), svgr()],
  build: {
    rollupOptions: {
      external: (id) => {
        if (id.includes('/node_modules')) {
          return true
        }
        if (id.includes('/src')) {
          return true
        }
      },
    },
  },
})
