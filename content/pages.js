/**
 * Ensambla el sitio. El orden de este array es el orden del sitemap y el de
 * llms.txt: lo primero es lo que queremos que se lea primero, tanto una
 * persona como un rastreador.
 */
import { inicio, ayuda, oracion } from './pages-core.js'
import {
  nosotros,
  formacion,
  misiones,
  eventos,
  dar,
  recursos,
  contacto,
  paginaPreguntas,
  privacidad,
} from './pages-more.js'

export const pages = [
  inicio,
  ayuda,
  oracion,
  nosotros,
  formacion,
  misiones,
  eventos,
  dar,
  recursos,
  contacto,
  paginaPreguntas,
  privacidad,
]

/** La URL de una pagina en un idioma. El espanol vive en la raiz porque el
 *  pais es Ecuador; el ingles cuelga de /en/. */
export const pathOf = (page, lang) => {
  const slug = page.slug[lang]
  if (slug === 'index') return lang === 'es' ? '/' : '/en/'
  return lang === 'es' ? `/${slug}` : `/en/${slug}`
}

/** El archivo que se escribe en disco para esa misma pagina. */
export const fileOf = (page, lang) => {
  const slug = page.slug[lang]
  return lang === 'es' ? `${slug}.html` : `en/${slug}.html`
}
