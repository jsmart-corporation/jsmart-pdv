import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    host: '192.168.18.99', // O endereço IP padrão é 'localhost'
    port: 5173, 
  }
})
