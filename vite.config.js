import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vuetify()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
