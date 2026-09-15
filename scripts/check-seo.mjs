/**
 * Revisión automática de lo que se rompe callado.
 *
 * Un título que crece tres palabras, una descripción que se queda corta o un
 * JSON-LD con una coma de más no fallan el build ni se ven en pantalla: se
 * notan meses después, cuando el fragmento deja de salir. Esto los caza en
 * cada publicación.
 *
 * Salida: lista de avisos y código 1 si hay errores (los avisos no fallan).
 */
import { readFile } from 'node:fs/promises'
import { LANGUAGES } from '../content/site.js'
import { pages, fileOf, pathOf } from '../content/pages.js'

const LARGO_TITULO = [25, 65]
const LARGO_DESCRIPCION = [70, 165]

const errores = []
const avisos = []

const uno = (html, re) => html.match(re)?.[1]

for (const page of pages) {
  for (const lang of LANGUAGES) {
    const archivo = fileOf(page, lang)
    const ruta = `${archivo} (${pathOf(page, lang)})`
    let html
    try {
      html = await readFile(archivo, 'utf8')
    } catch {
      errores.push(`${ruta}: no existe. ¿Corriste "npm run pages"?`)
      continue
    }

    const titulo = uno(html, /<title>([^<]*)<\/title>/)
    const descripcion = uno(html, /<meta name="description" content="([^"]*)"/)
    const canonica = uno(html, /<link rel="canonical" href="([^"]*)"/)

    if (!titulo) errores.push(`${ruta}: sin <title>`)
    else if (titulo.length < LARGO_TITULO[0] || titulo.length > LARGO_TITULO[1])
      avisos.push(`${ruta}: título de ${titulo.length} caracteres (ideal ${LARGO_TITULO.join('-')})`)

    if (!descripcion) errores.push(`${ruta}: sin meta description`)
    else if (descripcion.length < LARGO_DESCRIPCION[0] || descripcion.length > LARGO_DESCRIPCION[1])
      avisos.push(`${ruta}: descripción de ${descripcion.length} caracteres (ideal ${LARGO_DESCRIPCION.join('-')})`)

    if (!canonica) errores.push(`${ruta}: sin canonical`)

    /* Un solo h1 por página: si hay dos, ninguno pesa. */
    const h1 = html.match(/<h1\b/g)?.length ?? 0
    if (h1 !== 1) errores.push(`${ruta}: ${h1} elementos h1 (debe haber exactamente uno)`)

    /* Los cuatro hreflang, incluido x-default. */
    for (const etiqueta of ['es-EC', 'es', 'en', 'x-default']) {
      if (!html.includes(`hreflang="${etiqueta}"`)) errores.push(`${ruta}: falta hreflang ${etiqueta}`)
    }

    /* El grafo tiene que ser JSON válido y tener organización y página. */
    const bruto = uno(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
    if (!bruto) errores.push(`${ruta}: sin JSON-LD`)
    else {
      try {
        const grafo = JSON.parse(bruto)['@graph']
        const tipos = grafo.flatMap((n) => (Array.isArray(n['@type']) ? n['@type'] : [n['@type']]))
        if (!tipos.includes('Church')) errores.push(`${ruta}: el grafo no declara la organización`)
        if (!tipos.includes('WebPage')) errores.push(`${ruta}: el grafo no declara la página`)
      } catch (e) {
        errores.push(`${ruta}: JSON-LD inválido — ${e.message}`)
      }
    }

    /* Toda imagen necesita alt; una sin alt es una barrera y una señal mala. */
    for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
      if (!/\balt=/.test(img)) errores.push(`${ruta}: <img> sin alt`)
    }

    /* La promesa del sitio: el teléfono 24/7 en todas las páginas. */
    if (!html.includes('tel:')) errores.push(`${ruta}: no aparece la línea de oración`)
  }
}

for (const a of avisos) console.log(`aviso   ${a}`)
for (const e of errores) console.log(`ERROR   ${e}`)
console.log(
  `\n${pages.length * LANGUAGES.length} páginas revisadas · ${errores.length} errores · ${avisos.length} avisos`
)
process.exit(errores.length ? 1 : 0)
