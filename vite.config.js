import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '192.168.1.1' // Remplacez par l'adresse IP de votre machine sur le réseau
  // }
})
