import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  },
  server: {
    port: 8002,
    open: true,
    proxy: {
      '/api': 'https://api.imooc.zcwytd.com'
    },
    cors: true
  }
})

