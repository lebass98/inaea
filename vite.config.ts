import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '',           // 절대 경로 제거
  build: {
    outDir: 'dist',          // 기본값
    assetsDir: 'assets',     // 기본값
  },
})