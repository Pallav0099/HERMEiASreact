import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: ['bet-conspiracy-salmon-tf.trycloudflare.com', 'pallav0099.github.io/HERMEiASreact/'],
  },
})
