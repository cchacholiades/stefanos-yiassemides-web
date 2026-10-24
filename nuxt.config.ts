// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-23',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  // Avoid dev-only SPA loading SSE route hitting Vue Router (/_loading/sse warnings)
  spaLoadingTemplate: false,

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Skips nuxt:module-preload-polyfill transform (and its sourcemap WARN on generate)
      modulePreload: { polyfill: false },
    },
    optimizeDeps: {
      include: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-brands-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },

  site: {
    url: 'https://stefanosyiassemides.com',
    name: 'Stefanos Yiassemides',
  },

  app: {
    head: {
      title: 'Music Composer for Film & Media | Stefanos Yiassemides',
      htmlAttrs: {
        lang: 'en',
        class: 'antialiased bg-black text-white scrollbar-hide font-sans',
      },
      bodyAttrs: {
        class: 'antialiased bg-black text-white scrollbar-hide font-sans',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'geo.region', content: 'GB' },
        { name: 'geo.placename', content: 'United Kingdom' },
        {
          name: 'description',
          content:
            "Stefanos Yiassemides is a Music Composer for Film, TV, Games & Animation — with credits including PAW Patrol, Gecko's Garage, Pocoyo, Little Baby Bum, LEGO, and Moonbug Entertainment.",
        },
        {
          name: 'keywords',
          content:
            'music composer, sound designer, film composer, tv composer, game composer, animation music, netflix composer, youtube music, film score, soundtrack, audio design, sound effects, music production, entertainment composer, stefanos yiassemides',
        },
        { name: 'copyright', content: 'Stefanos Yiassemides' },
        { name: 'reply-to', content: 'info@stefanosyiassemides.com' },
        { name: 'theme-color', content: '#000' },
        { name: 'author', content: 'Stefanos Yiassemides' },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
        },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: 'https://stefanosyiassemides.com/' },
        {
          name: 'twitter:title',
          content: 'Music Composer for Film & Media | Stefanos Yiassemides',
        },
        {
          name: 'twitter:description',
          content:
            "Stefanos Yiassemides is a Music Composer for Film, TV, Games & Animation — with credits including PAW Patrol, Gecko's Garage, Pocoyo, Little Baby Bum, LEGO, and Moonbug Entertainment.",
        },
        { name: 'twitter:image', content: '/about.png' },
        {
          name: 'twitter:image:alt',
          content: 'Stefanos Yiassemides - Music Composer',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://stefanosyiassemides.com/' },
        { property: 'og:image', content: '/about.png' },
        { property: 'og:image:width', content: '1672' },
        { property: 'og:image:height', content: '941' },
        {
          property: 'og:image:alt',
          content: 'Stefanos Yiassemides - Music Composer',
        },
        {
          property: 'og:description',
          content:
            "Stefanos Yiassemides is a Music Composer for Film, TV, Games & Animation — with credits including PAW Patrol, Gecko's Garage, Pocoyo, Little Baby Bum, LEGO, and Moonbug Entertainment.",
        },
        {
          property: 'og:title',
          content: 'Stefanos Yiassemides – Music Composer for Film & Media',
        },
        {
          property: 'og:site_name',
          content: 'Music Composer for Film & Media | Stefanos Yiassemides',
        },
        { property: 'fb:app_id', content: '1849135811851242' },
      ],
      link: [
        { rel: 'canonical', href: 'https://stefanosyiassemides.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Stefanos Yiassemides',
            jobTitle: 'Music Composer',
            description:
              'Award-winning Music Composer for Film, TV, Games & Animation',
            url: 'https://stefanosyiassemides.com',
            sameAs: [
              'https://soundcloud.com/stefanos-yiassemides',
              'https://www.linkedin.com/in/stefanos-yiassemides-99870579',
              'https://www.instagram.com/stefyiassemides.music',
              'https://www.imdb.com/name/nm9390509/',
              'https://twitter.com/Stef_Yia_Music',
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'Freelance Music Composer',
            },
            knowsAbout: [
              'Music Composition',
              'Sound Design',
              'Film Scoring',
              'Game Audio',
              'Animation Music',
              'Soundtrack Production',
            ],
          }),
        },
      ],
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@vite-pwa/nuxt',
  ],

  nitro: {
    preset: 'static',
    routeRules: {
      '/_nuxt/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/works/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/css/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/icons/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/fonts/**': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/*.webp': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/*.png': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/*.jpg': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/*.jpeg': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/*.svg': {
        headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
      },
      '/sw.js': {
        headers: { 'Cache-Control': 'public, max-age=0, must-revalidate' },
      },
    },
  },

  image: {
    screens: {
      xs: 375,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    quality: 80,
  },

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
    display: 'swap',
    download: true,
    inject: true,
    prefetch: true,
    preconnect: true,
  },

  sitemap: {
    xsl: false,
    zeroRuntime: true,
    images: false,
    urls: [
      {
        loc: '/',
        changefreq: 'weekly',
        priority: 1,
        lastmod: new Date().toISOString(),
      },
    ],
    defaults: {
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      lang: 'en',
      name: 'Stefanos Yiassemides - Music Composer',
      short_name: 'Stefanos Yiassemides',
      description: 'Music Composer for Film & Media',
      theme_color: '#000000',
      background_color: '#000000',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: null,
    },
    client: {
      installPrompt: false,
    },
    devOptions: {
      enabled: false,
    },
  },

  imports: {
    dirs: ['composables', 'composables/**'],
  },
})
