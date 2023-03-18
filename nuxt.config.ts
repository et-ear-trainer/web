// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/ET_App/'
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
    ],
    css: [
        '~/assets/scss/index.scss'
    ],
    i18n: {
        locales: [
            {
              code: 'en',
              file: 'en.json'
            },
            {
              code: 'de',
              file: 'de.json'
            }
          ],
          lazy: true,
          langDir: 'lang',
          defaultLocale: 'en'
    }
});
