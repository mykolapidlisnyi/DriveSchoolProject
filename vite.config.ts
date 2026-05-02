import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Додайте цей рядок

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- Додайте виклик плагіна сюди
  ],
})