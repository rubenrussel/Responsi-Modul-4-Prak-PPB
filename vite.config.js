import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  // --- INI PERBAIKAN UNTUK 'npm run dev' ---
  server: {
    headers: {
      // Memberi izin server dev untuk memuat gambar dari domain ini
      'Content-Security-Policy': "img-src 'self' data: https://image.tmdb.org;"
    }
  },
  // --- AKHIR PERBAIKAN 'dev' ---

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Katalog Film',
        short_name: 'KatalogFilm',
        description: 'Aplikasi katalog film pribadi.',
        theme_color: '#10B981', 
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'https://placehold.co/192x192/10B981/FFFFFF?text=PWA',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://placehold.co/512x512/10B981/FFFFFF?text=PWA',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,webp}'],
        cleanupOutdatedCaches: true,
      }
    })
  ],

  // --- INI PERBAIKAN UNTUK 'npm run preview' ---
  preview: {
    headers: {
      // Memberi izin server preview untuk memuat gambar dari domain ini
      'Content-Security-Policy': "img-src 'self' data: https://image.tmdb.org;"
    }
  }
  // --- AKHIR PERBAIKAN 'preview' ---
})