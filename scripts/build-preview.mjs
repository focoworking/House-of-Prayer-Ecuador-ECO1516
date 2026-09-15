/**
 * Copia dist/ a preview/ reescribiendo los enlaces internos a rutas
 * relativas con extension .html.
 *
 * El sitio publicado vive en la raiz de un dominio, asi que los enlaces son
 * absolutos (/ayuda). Una previsualizacion vive dentro de una carpeta ajena,
 * donde /ayuda apunta fuera del sitio. Esto es solo para revisar: el build de
 * produccion no se toca.
 */
import { cp, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join, relative, dirname, posix } from 'node:path'

import { LANGUAGES } from '../content/site.js'
import { pages, pathOf, fileOf } from '../content/pages.js'

const ORIGEN = 'dist'
const DESTINO = 'preview'

/* Mapa ruta publica -> archivo en disco, derivado del modelo de contenido. */
const rutas = new Map(
  pages.flatMap((page) => LANGUAGES.map((lang) => [pathOf(page, lang), fileOf(page, lang)]))
)

const htmls = async (dir) => {
  const entradas = await readdir(dir, { withFileTypes: true })
  const salida = []
  for (const entrada of entradas) {
    const ruta = join(dir, entrada.name)
    if (entrada.isDirectory()) salida.push(...(await htmls(ruta)))
    else if (entrada.name.endsWith('.html')) salida.push(ruta)
  }
  return salida
}

await rm(DESTINO, { recursive: true, force: true })
await cp(ORIGEN, DESTINO, { recursive: true })

for (const archivo of await htmls(DESTINO)) {
  /* Cuantos niveles hay que subir desde este archivo hasta la raiz. */
  const subir = relative(dirname(archivo), DESTINO).split(/[\\/]/).filter(Boolean)
  const prefijo = subir.length ? `${subir.join('/')}/` : ''

  const html = await readFile(archivo, 'utf8')
  const reescrito = html.replace(/\b(href|src)="\/([^"/][^"]*)?"/g, (todo, atributo, resto) => {
    const ruta = `/${resto ?? ''}`
    const destino = rutas.get(ruta) ?? rutas.get(ruta.replace(/\/$/, '')) ?? resto ?? 'index.html'
    return `${atributo}="${prefijo}${posix.normalize(destino)}"`
  })

  await writeFile(archivo, reescrito, 'utf8')
}

console.log(`preview/ listo — ${rutas.size} rutas reescritas a relativas`)
