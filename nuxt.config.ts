// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/ET_App/'
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],
    css: [
        '~/assets/scss/index.scss'
    ],
});
