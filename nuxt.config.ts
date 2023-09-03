// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/ET_App/',
        head: {
          title: 'ET - Ear Trainer',

          meta: [
            { name: 'description', content: 'Wieso noch eine weitere Gehörbildungs-App? Diese ist anders!' },
            { name: 'keywords', content: 'et, et - ear trainer, ear trainer, ear training, music theory, music' },
            { name: 'msapplication-TileColor', content: '#da532' },
            { name: 'theme-color', content: '#da532' }
          ],
          link: [
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/ET_App/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/ET_App/favicon-16x16.png' },
            { rel: 'manifest', href: '/ET_App/site.webmanifest'},
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/ET_App/apple-touch-icon.png' },
            { rel: 'mask-icon', href: '/ET_App/safari-pinned-tab.svg', color: '#da532c'},

            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Round' }
          ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        '@nuxt/content'
    ],
    css: [
        '~/assets/scss/index.scss',
    ],
    components: {
      global: true,
      dirs: ['~/components']
    },
    runtimeConfig: {
      public: {
        baseURL: process.env.BASE_URL,
      }
    },
    i18n: {
      locales: [
          {
            code: 'en',
            file: 'en.json',
            iso: 'en-US'
          },
          {
            code: 'de',
            file: 'de.json',
            iso: 'de-DE'
          }
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        baseUrl: process.env.BASE_URL
    }
});
