import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), 
    dts({ include: ["lib"]}), 
    tailwindcss()
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/components/main.ts'),
      formats: ['es'],
      fileName: (format) => `crowemi-ts-utils.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'tailwindcss', '@types/react'],
      output: {
        assetFileNames: 'crowemi-ts-utils.css'
      }
    }
  }
})