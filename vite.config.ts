import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
// 引入自动导入插件
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置自动导入，dts配置需要重新运行才可以在src中生成auto-import.d.ts文件
    AutoImport({
      // 组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      dirs: ['./src/api'],
      dts: 'src/auto-import.d.ts'
    })
  ],
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