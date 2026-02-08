export default defineNuxtConfig({
  compatibilityDate: '2025-03-22',
  app: {
    head: {
      title: 'ET - Ear Trainer',

      meta: [
        { name: 'description', content: 'Wieso noch eine weitere Gehörbildungs-App? Diese ist anders!' },
        { name: 'keywords', content: 'et, et - ear trainer, ear trainer, ear training, music theory, music' },
        { name: 'msapplication-TileColor', content: '#da532' },
        { name: 'theme-color', content: '#da532' },
      ],
      link: [
        {
          rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png',
        },
        {
          rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#da532c' },

        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Round' },
      ],
      script: [
        { innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'AW-11538783518');` },
        { src: 'https://www.googletagmanager.com/gtag/js?id=AW-11538783518', async: true },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxtjs/turnstile',
    '@nuxtjs/seo',
  ],
  css: [
    '~/assets/scss/index.scss',
  ],
  scripts: {
    registry: {
      matomoAnalytics: {
        disableCookies: true,
      },
    },
  },
  runtimeConfig: {
    public: {
      scripts: {
        matomoAnalytics: {
          matomoUrl: '',
          siteId: 0,
        },
      },
    },
    contact: {
      email: '',
      token: '',
      url: ''
    }
  },
  site: {
    name: 'ET - Ear Trainer',
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json',
        language: 'en-US',
      },
      {
        code: 'de',
        file: 'de.json',
        language: 'de-DE',
      },
    ],
    lazy: true,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  build: {
    // transpile module to prevent issue in builds
    transpile: ['vue-countup-v3'],
  },
  content: {
    experimental: { sqliteConnector: 'native' },
  },
});