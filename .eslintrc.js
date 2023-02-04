module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended'
    ],
    parserOptions: {
        'ecmaVersion': 2020,
        'sourceType': 'module',
        'parser': '@typescript-eslint/parser'
    },
    rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single', {
            'avoidEscape': true,
            'allowTemplateLiterals': true
        }],
        'vue/multi-word-component-names': 'off'
    }
};