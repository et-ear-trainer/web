# ET - Ear Trainer

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

An environment file (.env) needs to be setup before starting the project.
Create an .env file in the project root and configure it with the following values:
```env
NUXT_PUBLIC_I18N_BASE_URL=http://localhost:3000
NUXT_SITE_ENV=development
NUXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000BB
NUXT_TURNSTILE_SECRET_KEY=1x0000000000000000000000000000000AA
```

### Extensions
- Tailwind CSS IntelliSense: Facilitates development with tailwind
- Vue Language Feature (Volar): Language support for Vue 3
- MDC: Syntax highlighting for Nuxt Content
- ESLint: ESLint support

## Translations

The translations for the application can be found in `i18n/locales/{lang}.json` (non-content translations) and `content/{lang}/{page}.md` (content translations).

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```