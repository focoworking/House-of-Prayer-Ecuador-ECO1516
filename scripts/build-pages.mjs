/**
 * Escribe el sitio: veinticuatro paginas (doce por idioma), mas sitemap,
 * robots, llms.txt, llms-full.txt, ai.txt y las variables de marca en CSS.
 *
 * Los .html son salida de build y estan en .gitignore: se edita content/,
 * nunca el HTML.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

import { site, ui, nav, footerNav, marca, fuentes, LANGUAGES } from '../content/site.js'
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

const logo = `<svg class="logo" viewBox="0 0 120 132" aria-hidden="true" focusable="false">
  <g fill="none" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M38 62 L60 40 L82 62" stroke-width="6.5" />
    <path d="M22 76 V50" /><path d="M30 76 V42" /><path d="M14 78 V58" /><path d="M14 76 q2 18 18 22" />
    <path d="M98 76 V50" /><path d="M90 76 V42" /><path d="M106 78 V58" /><path d="M106 76 q-2 18 -18 22" />
    <path d="M10 104 q50 -9 100 0" stroke-width="4" />
  </g>
  <path d="M60 52 c7 9 13 15 13 24 a13 13 0 0 1 -26 0 c0 -7 4 -11 7 -15 c1 4 3 6 5 7 c-2 -6 -1 -12 1 -16 z" fill="var(--celeste)" />
</svg>`

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

const enlaceNav = (item, lang, actual) => {
  const page = paginaPorSlug(item.slug)
  const ruta = pathOf(page, lang)
  const esActual = page === actual
  const clase = item.highlight ? ' class="nav__destacado"' : ''
  return `<li><a href="${ruta}"${clase}${esActual ? ' aria-current="page"' : ''}>${esc(T(item.label, lang))}</a></li>`
}

const cabecera = (page, lang) => {
  const otro = lang === 'es' ? 'en' : 'es'
  return `<header class="cabecera">
  <a class="marca" href="${lang === 'es' ? '/' : '/en/'}" aria-label="${esc(T(ui.home, lang))}">
    ${logo}
    <span class="marca__texto"><strong>${esc(site.wordmark)}</strong><small>${esc(site.name)}</small></span>
  </a>
  <nav class="nav" aria-label="${esc(T(ui.mainNav, lang))}">
    <ul>${nav.map((i) => enlaceNav(i, lang, page)).join('')}</ul>
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
    <span aria-hidden="true">☎</span> ${esc(site.prayerLineDisplay)}
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

const main = async () => {
  const escritos = []

  for (const page of pages) {
    for (const lang of LANGUAGES) {
      escritos.push(await escribir(fileOf(page, lang), documento(page, lang)))
    }
  }

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
