import { defineConfig } from '@tanstack/start-config'

export default defineConfig({
  server: {
    preset: 'cloudflare-workers',
  },
  vite: {
    build: {
      target: 'esnext',
    },
  },
})
