import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs', // Указываем папку "docs" вместо "dist"
  },
  base: '/currency-collection/',
})
