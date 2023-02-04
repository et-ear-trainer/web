module.exports = {
    content: [
        './assets/**/*.scss',
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}'
    ],
    theme: {
        extend: {
            /* @todo setup styling */
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    tailwindcss: {
        configPath: '~/tailwind.config.js'
    },
    plugins: []
};