# ET - Ear Trainer

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

An environment file (.env) needs to be setup before starting the project.
Create a .env file in the project root and configure it with the following values:
```env
BASE_URL=http://localhost:3000/ET_App
```

### Extensions
- Tailwind CSS IntelliSense: Facilitates development with tailwind
- Vue Language Feature (Volar): Language support for Vue 3
- MDC: Syntax highlighting for Nuxt Content
- ESLint: ESLint support

## Translations
The translations for the application can be found in `lang/{lang}.json` (non-content translations) and `content/{lang}/{page}.md` (content translations).

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```