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
            colors: {
                'et-blue-dark': '#2F2B8C',
                'et-blue-mid': '#215BA6',
                'et-blue-light': '#019DE1'
            }
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