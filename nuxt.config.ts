import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  ssr: false,
  css: [
    '@/assets/css/tailwind.css',
  ],
  app: {
    head: {              
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Playfair+Display:wght@400;700&display=swap',
          crossorigin: ''
        }
      ]
    }
  }
  ,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
