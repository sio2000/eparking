import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/eparking/', // Για GitHub Pages, το repo είναι στο φάκελο /eparking/

})
