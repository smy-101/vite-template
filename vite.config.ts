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
      '@assets': path.join(__dirname, 'src/assets')
    }
  }
})
