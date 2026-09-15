/**
 * Dibuja las secciones. Cada bloque de contenido declara su `type` y aqui
 * hay una funcion que sabe convertirlo en HTML.
 *
 * Dos reglas que no se rompen:
 *  1. El HTML es semantico primero. Cada seccion es <section> con su
 *     encabezado real, porque de eso viven el lector de pantalla, el
 *     fragmento destacado y el resumen de un modelo.
 *  2. Nada de texto suelto sin escapar: todo lo que venga de content/ pasa
 *     por `esc`.
 */
import { site, ui, emergencia } from '../content/site.js'
import { eventos as eventosData } from '../content/datos.js'
import { pathOf, pages } from '../content/pages.js'

/* ------------------------------------------------------------------ */
/* Utilidades                                                          */
/* ------------------------------------------------------------------ */

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** Resuelve un { es, en } al idioma actual; si ya es cadena, la devuelve. */
export const T = (value, lang) =>
  value && typeof value === 'object' && !Array.isArray(value) && ('es' in value || 'en' in value)
    ? value[lang] ?? value.es
    : value

/** Los href del contenido pueden ser { es, en } (rutas internas) o cadena. */
const href = (h, lang) => T(h, lang)

const attrs = (o) =>
  Object.entries(o)
    .filter(([, v]) => v !== false && v != null && v !== '')
    .map(([k, v]) => (v === true ? ` ${k}` : ` ${k}="${esc(v)}"`))
    .join('')

/** Un id estable para colgar el enlace de cada seccion. */
const slugify = (s) =>
  String(s)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const button = (action, lang) => {
  const clase = action.kind === 'ghost' ? 'boton boton--fantasma' : 'boton'
  const externo = action.external ? { target: '_blank', rel: 'noopener' } : {}
  return `<a class="${clase}"${attrs({ href: href(action.href, lang), ...externo })}>${esc(T(action.label, lang))}</a>`
}

const actions = (list, lang) =>
  !list?.length ? '' : `<p class="acciones">${list.map((a) => button(a, lang)).join('')}</p>`

const head = (titulo, lead, lang, { nivel = 'h2' } = {}) => {
  if (!titulo) return ''
  const id = slugify(T(titulo, lang))
  return (
    `<${nivel} class="seccion__titulo" id="${id}">${esc(T(titulo, lang))}</${nivel}>` +
    (lead ? `<p class="seccion__lead">${esc(T(lead, lang))}</p>` : '')
  )
}

/** Envoltorio comun: <section> con id propio para poder enlazarla. */
const wrap = (tipo, titulo, inner, lang, extra = '') => {
  const id = titulo ? slugify(T(titulo, lang)) : tipo
  return `<section class="seccion seccion--${tipo}"${extra} aria-labelledby="${id}">${inner}</section>`
}

/* ------------------------------------------------------------------ */
/* Secciones                                                           */
/* ------------------------------------------------------------------ */

const bloques = {
  hero(s, lang) {
    const clase = s.variant ? ` hero--${s.variant}` : ''
    const vivo = s.live
      ? `<p class="hero__vivo"><span class="punto" aria-hidden="true"></span>${esc(
          T({ es: 'La sala está orando ahora mismo', en: 'The room is praying right now' }, lang)
        )}</p>`
      : ''
    /* La imagen va detras del texto, no al lado: el titular tiene que caer
       sobre la noche. El degradado encima no es decoracion, es lo que
       mantiene el contraste del texto por encima de 7:1. */
    const fondo = s.image
      ? `<img class="hero__fondo" src="${esc(s.image.src)}" alt="${esc(T(s.image.alt, lang))}"
           width="${s.image.w}" height="${s.image.h}" fetchpriority="high" decoding="async" />`
      : ''
    const versiculo = s.verse
      ? `<p class="hero__versiculo"><span>${esc(T(s.verse.text, lang))}</span>
         <cite>${esc(s.verse.ref)}</cite></p>`
      : ''
    return `<section class="hero${clase}${s.image ? ' hero--imagen' : ''}" aria-labelledby="titulo-principal">
      ${fondo}
      <div class="hero__cuerpo">
        ${s.eyebrow ? `<p class="hero__eyebrow">${esc(T(s.eyebrow, lang))}</p>` : ''}
        <h1 class="hero__titulo" id="titulo-principal">${esc(T(s.title, lang))}</h1>
        ${s.lead ? `<p class="hero__lead">${esc(T(s.lead, lang))}</p>` : ''}
        ${actions(s.actions, lang)}
        ${vivo}
        ${s.note ? `<p class="hero__nota">${esc(T(s.note, lang))}</p>` : ''}
        ${versiculo}
      </div>
    </section>`
  },

  /* La Escritura no es un adorno al pie de una seccion: se presenta como lo
     que es, con su referencia y la version citada, en Reina-Valera 1960. */
  scripture(s, lang) {
    return `<section class="seccion seccion--escritura">
      <figure class="escritura">
        <blockquote cite="${esc(s.url ?? '')}"><p>${esc(T(s.text, lang))}</p></blockquote>
        <figcaption><strong>${esc(s.ref)}</strong> <span>Reina-Valera 1960</span></figcaption>
      </figure>
    </section>`
  },

  figure(s, lang) {
    return `<section class="seccion seccion--figura">
      <figure class="figura">
        <img src="${esc(s.src)}" alt="${esc(T(s.alt, lang))}" width="${s.w}" height="${s.h}" loading="lazy" decoding="async" />
        ${s.caption ? `<figcaption>${esc(T(s.caption, lang))}</figcaption>` : ''}
      </figure>
    </section>`
  },

  lead(s, lang) {
    return wrap('lead', s.title, `${head(s.title, null, lang)}<p class="texto-grande">${esc(T(s.text, lang))}</p>`, lang)
  },

  statement(s, lang) {
    return `<section class="seccion seccion--statement"><p class="statement">${esc(T(s.text, lang))}</p></section>`
  },

  quote(s, lang) {
    return `<section class="seccion seccion--cita"><figure class="cita">
      <blockquote><p>${esc(T(s.text, lang))}</p></blockquote>
      <figcaption>${esc(T(s.author, lang))}</figcaption>
    </figure></section>`
  },

  stats(s, lang) {
    const items = s.items
      .map(
        (i) => `<div class="dato"><dt class="dato__valor">${esc(T(i.value, lang))}</dt>
          <dd class="dato__label">${esc(T(i.label, lang))}</dd></div>`
      )
      .join('')
    return `<section class="seccion seccion--datos"><dl class="datos">${items}</dl></section>`
  },

  cards(s, lang) {
    const items = s.items
      .map((i) => {
        const enlace = i.href
          ? `<p class="tarjeta__cta"><a href="${esc(href(i.href, lang))}">${esc(
              T(i.cta ?? { es: 'Ver más', en: 'See more' }, lang)
            )}</a></p>`
          : ''
        return `<li class="tarjeta"><h3 class="tarjeta__titulo">${esc(T(i.title, lang))}</h3>
          <p>${esc(T(i.text, lang))}</p>${enlace}</li>`
      })
      .join('')
    return wrap('tarjetas', s.title, `${head(s.title, s.lead, lang)}<ul class="tarjetas">${items}</ul>`, lang)
  },

  rows(s, lang) {
    const items = s.items
      .map(
        (i, n) => `<li class="fila"><span class="fila__n" aria-hidden="true">${String(n + 1).padStart(2, '0')}</span>
          <div><h3 class="fila__titulo">${esc(T(i.title, lang))}</h3><p>${esc(T(i.text, lang))}</p></div></li>`
      )
      .join('')
    return wrap('filas', s.title, `${head(s.title, s.lead, lang)}<ul class="filas">${items}</ul>`, lang)
  },

  steps(s, lang) {
    const items = s.items
      .map(
        (i, n) => `<li class="paso"><span class="paso__n" aria-hidden="true">${n + 1}</span>
          <h3 class="paso__titulo">${esc(T(i.title, lang))}</h3><p>${esc(T(i.text, lang))}</p></li>`
      )
      .join('')
    return wrap('pasos', s.title, `${head(s.title, s.lead, lang)}<ol class="pasos">${items}</ol>`, lang)
  },

  split(s, lang) {
    const items = s.items?.length
      ? `<ul class="marcas">${s.items.map((i) => `<li>${esc(T(i, lang))}</li>`).join('')}</ul>`
      : ''
    const imagen = s.image
      ? `<img class="split__imagen" src="${esc(s.image.src)}" alt="${esc(T(s.image.alt, lang))}"
           width="${s.image.w}" height="${s.image.h}" loading="lazy" decoding="async" />`
      : ''
    return wrap(
      'split',
      s.title,
      `<div class="split${s.image ? ' split--con-imagen' : ''}">
        <div>${head(s.title, null, lang)}${imagen}</div>
        <div><p>${esc(T(s.text, lang))}</p>${items}${s.action ? actions([{ ...s.action, kind: 'ghost' }], lang) : ''}</div>
      </div>`,
      lang
    )
  },

  checklist(s, lang) {
    const items = s.items.map((i) => `<li>${esc(T(i, lang))}</li>`).join('')
    return wrap('lista', s.title, `${head(s.title, s.lead, lang)}<ul class="lista-marcada">${items}</ul>`, lang)
  },

  timeline(s, lang) {
    const items = s.items
      .map(
        (i) => `<li class="hito"><p class="hito__ano">${esc(i.ano)}</p>
          <h3 class="hito__titulo">${esc(T(i.titulo, lang))}</h3>
          <p class="hito__texto">${esc(T(i.texto, lang))}</p></li>`
      )
      .join('')
    return wrap('historia', s.title, `${head(s.title, s.lead, lang)}<ol class="historia">${items}</ol>`, lang)
  },

  /* La tabla de turnos es una tabla de verdad: doce filas de datos con
     encabezados. Asi la lee un lector de pantalla y asi la entiende un
     modelo al resumir "a que hora puedo ir". */
  schedule(s, lang) {
    const filas = s.items
      .map(
        (b) => `<tr><th scope="row"><time>${esc(b.hora)}</time></th>
          <td>${esc(T(b.tipo, lang))}</td><td>${esc(T(b.equipo, lang))}</td></tr>`
      )
      .join('')
    const cabecera = [
      T({ es: 'Hora', en: 'Time' }, lang),
      T({ es: 'Franja', en: 'Part of day' }, lang),
      T({ es: 'Enfoque del bloque', en: 'Focus of the watch' }, lang),
    ]
    return wrap(
      'turnos',
      s.title,
      `${head(s.title, s.lead, lang)}
      <div class="tabla-scroll"><table class="turnos">
        <caption class="visualmente-oculto">${esc(
          T({ es: 'Los doce bloques diarios de oración', en: 'The twelve daily prayer watches' }, lang)
        )}</caption>
        <thead><tr>${cabecera.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead>
        <tbody>${filas}</tbody>
      </table></div>
      ${s.note ? `<p class="nota">${esc(T(s.note, lang))}</p>` : ''}
      ${s.action ? actions([{ ...s.action, kind: 'ghost' }], lang) : ''}`,
      lang
    )
  },

  events(s, lang) {
    const fmt = new Intl.DateTimeFormat(lang === 'es' ? 'es-EC' : 'en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'America/Guayaquil',
    })
    const items = eventosData
      .map((e) => {
        const inicio = new Date(e.inicio)
        const fin = new Date(e.fin)
        const mismoDia = inicio.toDateString() === fin.toDateString()
        const fecha = mismoDia ? fmt.format(inicio) : `${fmt.format(inicio)} — ${fmt.format(fin)}`
        const precio =
          e.precio === 0
            ? T({ es: 'Entrada libre', en: 'Free entry' }, lang)
            : T({ es: 'Aporte voluntario', en: 'Voluntary offering' }, lang)
        return `<li class="evento">
          <p class="evento__fecha"><time datetime="${esc(e.inicio)}">${esc(fecha)}</time></p>
          <h3 class="evento__titulo">${esc(T(e.nombre, lang))}</h3>
          <p>${esc(T(e.resumen, lang))}</p>
          <p class="evento__meta">${esc(precio)} · ${esc(
            e.modalidad === 'presencial'
              ? T({ es: 'Presencial en Quito', en: 'In person in Quito' }, lang)
              : T({ es: 'Presencial y en línea', en: 'In person and online' }, lang)
          )}</p>
        </li>`
      })
      .join('')
    return wrap('eventos', s.title, `${head(s.title, s.lead, lang)}<ul class="eventos">${items}</ul>`, lang)
  },

  /* AEO: pregunta como encabezado real y respuesta como parrafo visible.
     No va dentro de un <details> cerrado a proposito —lo que esta plegado se
     indexa peor y se cita menos. */
  faq(s, lang) {
    const items = s.items
      .map(
        (i) => `<div class="pregunta"><h3 class="pregunta__q">${esc(T(i.q, lang))}</h3>
          <p class="pregunta__a">${esc(T(i.a, lang))}</p></div>`
      )
      .join('')
    return wrap('preguntas', s.title, `${head(s.title, s.lead, lang)}<div class="preguntas">${items}</div>`, lang)
  },

  links(s, lang) {
    const items = s.items
      .map((i) => {
        const externo = i.external ? ' target="_blank" rel="noopener"' : ''
        return `<li><a href="${esc(href(i.href, lang))}"${externo}><span>${esc(T(i.label, lang))}</span>
          ${i.note ? `<small>${esc(T(i.note, lang))}</small>` : ''}</a></li>`
      })
      .join('')
    return wrap('enlaces', s.title, `${head(s.title, s.lead, lang)}<ul class="enlaces">${items}</ul>`, lang)
  },

  prose(s, lang) {
    const inner = s.blocks
      .map(
        (b) =>
          (b.h ? `<h2 class="prosa__titulo" id="${slugify(T(b.h, lang))}">${esc(T(b.h, lang))}</h2>` : '') +
          b.p.map((p) => `<p>${esc(T(p, lang))}</p>`).join('')
      )
      .join('')
    return `<section class="seccion seccion--prosa"><div class="prosa">${inner}</div></section>`
  },

  form(s, lang) {
    const campos = s.fields
      .map((f) => {
        const id = `campo-${f.name}`
        const control =
          f.type === 'textarea'
            ? `<textarea id="${id}" name="${esc(f.name)}" rows="5"${f.required ? ' required' : ''}></textarea>`
            : `<input id="${id}" name="${esc(f.name)}" type="${esc(f.type)}"${f.required ? ' required' : ''} />`
        return `<p class="campo"><label for="${id}">${esc(T(f.label, lang))}${
          f.required ? ' <span aria-hidden="true">*</span>' : ''
        }</label>${control}</p>`
      })
      .join('')
    return wrap(
      'formulario',
      s.title,
      `${head(s.title, s.lead, lang)}
      <form class="formulario" action="${esc(s.action)}" method="post" enctype="text/plain">
        ${campos}
        <p class="campo campo--envio"><button class="boton" type="submit">${esc(T(s.submit, lang))}</button></p>
      </form>
      ${s.note ? `<p class="nota">${esc(T(s.note, lang))}</p>` : ''}`,
      lang
    )
  },

  /* Bloque de emergencia. Va en ayuda, en preguntas y en privacidad porque es
     donde alguien en crisis puede aterrizar desde un buscador. Los numeros
     son publicos y verificados; cada uno lleva su fuente. */
  emergency(s, lang) {
    const items = emergencia
      .map(
        (e) => `<li class="linea">
          <p class="linea__nombre">${esc(T(e.nombre, lang))}</p>
          <p class="linea__numero"><a href="${esc(e.href)}">${esc(e.numero)}</a></p>
          <p class="linea__horario">${esc(T(e.horario, lang))}</p>
          <p class="linea__nota">${esc(T(e.nota, lang))}</p>
        </li>`
      )
      .join('')
    return `<section class="seccion seccion--emergencia" aria-labelledby="emergencia">
      <h2 class="seccion__titulo" id="emergencia">${esc(T(ui.emergencyTitle, lang))}</h2>
      <p class="seccion__lead">${esc(T(ui.emergencyLead, lang))}</p>
      <ul class="lineas">${items}</ul>
    </section>`
  },

  /* Ficha de contacto: es el NAP visible. Tiene que coincidir letra por letra
     con el JSON-LD y con las fichas de Google y Apple. */
  contact(s, lang) {
    const a = site.address
    return `<section class="seccion seccion--contacto" aria-labelledby="datos-de-contacto">
      <h2 class="seccion__titulo" id="datos-de-contacto">${esc(
        T({ es: 'Datos de contacto', en: 'Contact details' }, lang)
      )}</h2>
      <div class="ficha">
        <div class="ficha__bloque">
          <h3>${esc(T(ui.findUs, lang))}</h3>
          <address>${esc(a.street)}<br />${esc(a.district)}, ${esc(a.city)}<br />${esc(a.region)}, ${esc(
            T(a.countryName, lang)
          )}</address>
          <p class="nota">${esc(
            T({ es: 'Sala abierta las 24 horas, todos los días.', en: 'Room open 24 hours, every day.' }, lang)
          )}</p>
        </div>
        <div class="ficha__bloque">
          <h3>${esc(T({ es: 'Línea de oración 24/7', en: '24/7 prayer line' }, lang))}</h3>
          <p class="ficha__destacado"><a href="tel:${esc(site.prayerLine)}">${esc(site.prayerLineDisplay)}</a></p>
          <p><a href="https://wa.me/${esc(site.whatsapp)}" target="_blank" rel="noopener">${esc(
            T(ui.whatsapp, lang)
          )}</a></p>
        </div>
        <div class="ficha__bloque">
          <h3>${esc(T({ es: 'Oficina', en: 'Office' }, lang))}</h3>
          <p><a href="tel:${esc(site.phone)}">${esc(site.phoneDisplay)}</a></p>
          <p><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
          <p class="nota">${esc(T(site.officeHours, lang))}</p>
        </div>
      </div>
    </section>`
  },

  cta(s, lang) {
    return `<section class="seccion seccion--cta" aria-labelledby="${slugify(T(s.title, lang))}">
      <div class="cta">
        <h2 class="cta__titulo" id="${slugify(T(s.title, lang))}">${esc(T(s.title, lang))}</h2>
        ${s.text ? `<p>${esc(T(s.text, lang))}</p>` : ''}
        ${actions(s.actions, lang)}
      </div>
    </section>`
  },
}

export const renderSection = (section, lang) => {
  const fn = bloques[section.type]
  if (!fn) throw new Error(`Tipo de seccion desconocido: ${section.type}`)
  return fn(section, lang)
}

export const renderSections = (sections, lang) => sections.map((s) => renderSection(s, lang)).join('\n')

export { slugify, pathOf, pages }
