import { defineConfig } from 'vite'
import { resolve } from 'node:path'

import { LANGUAGES } from './content/site.js'
import { pages, fileOf } from './content/pages.js'

/**
 * Las entradas del build se derivan del modelo de contenido: añadir una
 * página en content/ la incorpora al sitio sin tocar esta configuración.
 * Los .html son salida de scripts/build-pages.mjs, que corre antes del build.
 */
const input = Object.fromEntries(
  LANGUAGES.flatMap((lang) =>
    pages.map((page) => [`${lang}-${page.slug[lang]}`, resolve(process.cwd(), fileOf(page, lang))])
  )
)

export default defineConfig({
  appType: 'mpa',
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    rollupOptions: { input },
  },
})
