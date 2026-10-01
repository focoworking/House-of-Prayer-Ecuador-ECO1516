/**
 * Escribe el sitio: veinticuatro paginas (doce por idioma), mas sitemap,
 * robots, llms.txt, llms-full.txt, ai.txt y las variables de marca en CSS.
 *
 * Los .html son salida de build y estan en .gitignore: se edita content/,
 * nunca el HTML.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

import { site, ui, nav, footerNav, marca, fuentes, t, LANGUAGES } from '../content/site.js'
import { pages, pathOf, fileOf } from '../content/pages.js'
import { renderSections, T, esc } from './render.mjs'
import { metaTags, jsonLd, sitemap, robots, llms, llmsFull, aiTxt } from './seo.mjs'

const raiz = process.cwd()
const escribir = async (rel, contenido) => {
  const destino = resolve(raiz, rel)
  await mkdir(dirname(destino), { recursive: true })
  await writeFile(destino, contenido, 'utf8')
  return rel
}

/* ------------------------------------------------------------------ */
/* Piezas de la plantilla                                              */
/* ------------------------------------------------------------------ */

/* El isotipo es el logotipo real de la casa, recortado de su lámina y con el
   fondo quitado (scripts/recorta-isotipo.py). Antes aquí había una
   reconstrucción vectorial: por cuidada que estuviera, no era el logotipo de
   nadie. El `alt` va vacío a propósito, porque el nombre de la marca está
   escrito al lado en texto y repetirlo haría que un lector de pantalla lo
   dijera dos veces. */
const logo = `<img class="logo" src="/marca/eco1516-isotipo.png" alt="" width="638" height="312" />`

const iconos = {
  youtube: 'M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2Z',
  instagram: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.4a6.4 6.4 0 1 0 0 12.8 6.4 6.4 0 0 0 0-12.8Zm0 10.6a4.2 4.2 0 1 1 0-8.4 4.2 4.2 0 0 1 0 8.4Zm6.6-10.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
  facebook: 'M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.5V14h2.9v8Z',
  spotify: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.4a.8.8 0 0 1-1.1.3c-3-1.8-6.7-2.2-11.1-1.2a.8.8 0 1 1-.3-1.5c4.8-1.1 9-.6 12.3 1.4.4.2.5.7.2 1Zm1.2-2.8a1 1 0 0 1-1.3.3c-3.4-2.1-8.5-2.7-12.5-1.5a1 1 0 0 1-.6-1.9c4.6-1.4 10.2-.7 14.1 1.7.5.3.6.9.3 1.4Zm.1-2.9C14 8.4 7.7 8.2 4.2 9.3a1.2 1.2 0 1 1-.7-2.3C7.6 5.8 14.5 6 18.9 8.6a1.2 1.2 0 1 1-1.2 2.1Z',
}

const redes = () =>
  `<ul class="redes">${site.social
    .map(
      (s) =>
        `<li><a href="${esc(s.url)}" target="_blank" rel="noopener me" aria-label="${esc(s.label)}">
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${iconos[s.icon]}" fill="currentColor"/></svg>
    </a></li>`
    )
    .join('')}</ul>`

const paginaPorSlug = (slug) => pages.find((p) => p.slug.es === slug)

const enlaceNav = (item, lang, actual, { secundario = false } = {}) => {
  const page = paginaPorSlug(item.slug)
  const ruta = pathOf(page, lang)
  const esActual = page === actual
  const clases = [item.highlight && 'nav__destacado', secundario && 'nav__secundario'].filter(Boolean)
  const clase = clases.length ? ` class="${clases.join(' ')}"` : ''
  return `<li${secundario ? ' class="nav__item--secundario"' : ''}><a href="${ruta}"${clase}${
    esActual ? ' aria-current="page"' : ''
  }>${esc(T(item.label, lang))}</a></li>`
}

const cabecera = (page, lang) => {
  const otro = lang === 'es' ? 'en' : 'es'
  return `<header class="cabecera">
  <a class="marca" href="${lang === 'es' ? '/' : '/en/'}" aria-label="${esc(T(ui.home, lang))}">
    ${logo}
    <span class="marca__texto"><strong>${esc(site.wordmark)}</strong><small>${esc(site.name)}</small></span>
  </a>
  <button class="menu" type="button" aria-expanded="false" aria-controls="menu-principal">
    <span class="menu__lineas" aria-hidden="true"></span>
    <span class="visualmente-oculto">${esc(T(ui.menu, lang))}</span>
  </button>
  <nav class="nav" id="menu-principal" aria-label="${esc(T(ui.mainNav, lang))}">
    <ul>
      ${nav.map((i) => enlaceNav(i, lang, page)).join('')}
      ${footerNav.map((i) => enlaceNav(i, lang, page, { secundario: true })).join('')}
    </ul>
  </nav>
  <a class="idioma" href="${pathOf(page, otro)}" hreflang="${otro}" lang="${otro}" title="${esc(
    T(ui.languageLabel, lang)
  )}">${esc(T(ui.languageShort, lang))}</a>
</header>`
}

/* La barra fija. Es la pieza que convierte el sitio en "ayuda inmediata":
   este a donde este el visitante, la linea 24/7 esta a un toque. En movil se
   ancla abajo, que es donde llega el pulgar. */
const barraAccion = (lang) => `<div class="barra-accion">
  <a class="barra-accion__principal" href="https://wa.me/${esc(site.whatsapp)}" target="_blank" rel="noopener">
    ${esc(T(ui.prayNow, lang))}
  </a>
  <a class="barra-accion__secundario" href="tel:${esc(site.prayerLine)}">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" class="barra-accion__icono">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1z"
        fill="currentColor" />
    </svg>
    ${esc(site.prayerLineDisplay)}
  </a>
</div>`

const pie = (page, lang) => {
  const a = site.address
  return `<footer class="pie">
  <div class="pie__marca">
    ${logo}
    <p class="pie__nombre">${esc(site.name)}</p>
    <p class="pie__lema">${esc(T(site.tagline, lang))}</p>
  </div>
  <div class="pie__bloque">
    <h2>${esc(T(ui.findUs, lang))}</h2>
    <address>${esc(a.street)}<br />${esc(a.district)}, ${esc(a.city)}<br />${esc(a.region)}, ${esc(
      T(a.countryName, lang)
    )}</address>
  </div>
  <div class="pie__bloque">
    <h2>${esc(T(ui.writeUs, lang))}</h2>
    <p><a href="tel:${esc(site.prayerLine)}">${esc(site.prayerLineDisplay)}</a> · ${esc(
      T({ es: 'oración 24/7', en: 'prayer 24/7' }, lang)
    )}</p>
    <p><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
    ${redes()}
  </div>
  <div class="pie__bloque">
    <h2>${esc(T({ es: 'Más', en: 'More' }, lang))}</h2>
    <ul class="pie__enlaces">
      ${footerNav.map((i) => enlaceNav(i, lang, page)).join('')}
    </ul>
  </div>
  <p class="pie__legal">© ${new Date().getFullYear()} ${esc(site.name)} · ${esc(site.code)} · ${esc(
    T(ui.rights, lang)
  )}</p>
</footer>`
}

/* ------------------------------------------------------------------ */
/* Plantilla                                                           */
/* ------------------------------------------------------------------ */

/* Si la pagina abre con imagen, el navegador tiene que empezar a bajarla
   antes de leer el CSS: es el elemento mas grande de la pantalla y de el
   depende el Largest Contentful Paint. */
const precargaHero = (page) => {
  const hero = page.sections.find((s) => s.type === 'hero' && s.image)
  return hero ? `<link rel="preload" as="image" href="${hero.image.src}" fetchpriority="high" />` : ''
}

const documento = (page, lang) => `<!doctype html>
<html lang="${lang === 'es' ? 'es-EC' : 'en'}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="${marca.moradoOscuro}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/favicon.svg" />

    <!-- Las fuentes llegan de Google Fonts, el unico host externo del sitio.
         El preconnect ahorra el viaje de DNS y TLS del segundo dominio, que
         es el que sirve los .woff2 y el que retrasa la primera letra. -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="${fuentes.enlace}" />
    ${metaTags(page, lang)}
    ${precargaHero(page)}
    <script type="application/ld+json">${JSON.stringify(jsonLd(page, lang))}</script>
    <link rel="stylesheet" href="/src/styles/main.css" />
  </head>
  <body>
    <a class="saltar" href="#contenido">${esc(T(ui.skip, lang))}</a>
    ${cabecera(page, lang)}
    <main id="contenido">
${renderSections(page.sections, lang)}
    </main>
    ${pie(page, lang)}
    ${barraAccion(lang)}
    <script type="module" src="/src/js/main.js"></script>
  </body>
</html>
`

/* ------------------------------------------------------------------ */
/* Texto plano para llms-full.txt                                      */
/* ------------------------------------------------------------------ */

/** Convierte una pagina a texto: los titulares en markdown y el resto en
 *  parrafos. Es lo que lee un modelo cuando quiere la fuente entera. */
const aTexto = (page, lang) =>
  renderSections(page.sections, lang)
    .replace(/<h1[^>]*>/g, '\n# ')
    .replace(/<h2[^>]*>/g, '\n## ')
    .replace(/<h3[^>]*>/g, '\n### ')
    .replace(/<\/(h1|h2|h3|p|li|dd|dt|td|th|address|figcaption)>/g, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .join('\n')

/* ------------------------------------------------------------------ */
/* Marca en CSS                                                        */
/* ------------------------------------------------------------------ */

/** Los colores viven en content/site.js y se escriben aqui: asi el
 *  theme-color del <head> y el CSS no pueden discrepar nunca. */
const marcaCss = () => `/* Generado por scripts/build-pages.mjs desde content/site.js. No editar. */
:root {
  --morado: ${marca.morado};
  --morado-oscuro: ${marca.moradoOscuro};
  --morado-claro: ${marca.moradoClaro};
  --celeste: ${marca.celeste};
  --celeste-claro: ${marca.celesteClaro};
  --tinta: ${marca.tinta};
  --tinta-suave: ${marca.tintaSuave};
  --papel: ${marca.papel};
  --papel-alto: ${marca.papelAlto};
  --display: ${fuentes.display};
  --texto: ${fuentes.texto};
}
`

/* ------------------------------------------------------------------ */

/**
 * La página de error. No entra en `pages` porque no debe salir en el sitemap,
 * ni en la navegación, ni en llms.txt: es la que ve alguien que se equivocó de
 * dirección, y lo único que tiene que hacer es devolverlo al sitio. Reutiliza
 * la plantilla completa para que no parezca de otro sitio web.
 */
const paginaError = {
  slug: { es: '404', en: '404' },
  title: t('Página no encontrada', 'Page not found'),
  description: t('La dirección que buscas no existe en este sitio.', 'The address you are looking for does not exist on this site.'),
  sections: [
    {
      type: 'hero',
      eyebrow: t('Error 404', 'Error 404'),
      title: t('Esta página no existe.', 'This page does not exist.'),
      lead: t(
        'Puede que la dirección esté mal escrita o que la página haya cambiado de sitio. Si buscabas pedir oración, la puerta está aquí al lado.',
        'The address may be mistyped, or the page may have moved. If you came to ask for prayer, that door is right here.'
      ),
      actions: [
        { label: t('Pide oración', 'Ask for prayer'), href: { es: '/ayuda', en: '/en/help' }, kind: 'primary' },
        { label: t('Ir al inicio', 'Go to the home page'), href: { es: '/', en: '/en/' }, kind: 'ghost' },
      ],
    },
  ],
}

const main = async () => {
  const escritos = []

  for (const page of pages) {
    for (const lang of LANGUAGES) {
      escritos.push(await escribir(fileOf(page, lang), documento(page, lang)))
    }
  }

  /* El 404 se sirve desde la raíz para cualquier ruta fallida, así que va en
     español, que es el idioma por defecto del sitio. */
  escritos.push(await escribir('404.html', documento(paginaError, 'es')))

  escritos.push(await escribir('src/styles/marca.css', marcaCss()))
  escritos.push(await escribir('public/sitemap.xml', sitemap()))
  escritos.push(await escribir('public/robots.txt', robots()))
  escritos.push(await escribir('public/llms.txt', llms('es')))
  escritos.push(await escribir('public/llms-full.txt', llmsFull(aTexto)))
  escritos.push(await escribir('public/ai.txt', aiTxt()))

  console.log(`${escritos.length} archivos escritos (${pages.length} páginas x ${LANGUAGES.length} idiomas + raíz)`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
