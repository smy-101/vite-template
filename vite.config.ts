import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import viteSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteSvgr(),react()],
  resolve:{
    alias: {
      // 设置public目录的别名为@public
      '@assets': path.join(__dirname, 'src/assets'),
      '@': path.join(__dirname, 'src')
    }
  },
  build:{
    target: 'modules', // 浏览器兼容目标,modules为默认值
    outDir: 'dist', // 打包输出路径，dist为默认值
    assetsDir: 'assets', // 静态资源存放路径,指定生成静态资源的存放路径（相对于 build.outDir）,在 库模式 下不能使用，assets为默认值
    cssCodeSplit: true, // 允许 css 代码拆分，true为默认值
    sourcemap: false, // 不生成 sourceMap 文件，false为默认值
  }
})
