import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Αυτό είναι για να δουλέψει το relative path κατά τη διάρκεια του build

})
