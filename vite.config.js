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

/* La pagina de error no esta en el modelo de contenido —no va al sitemap ni
   a la navegacion— pero si tiene que salir en dist/. */
input['404'] = resolve(process.cwd(), '404.html')

export default defineConfig({
  appType: 'mpa',
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    rollupOptions: { input },
  },
})
