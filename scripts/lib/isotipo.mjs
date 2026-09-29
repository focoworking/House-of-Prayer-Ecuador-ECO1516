/**
 * El isotipo: dos manos abiertas que sostienen el techo de una casa, con la
 * llama en el centro.
 *
 * Está calculado, no escrito a mano. Una mano abierta es un contorno con
 * cinco puntas y cuatro valles, y acertar ese contorno a ojo en coordenadas
 * SVG cuesta muchas más iteraciones que declarar los cinco dedos —ángulo,
 * largo y grosor— y dejar que el trazo salga de ahí. Cambiar la apertura de
 * la mano es cambiar un número, no redibujar.
 *
 * La mano derecha se calcula y la izquierda es su espejo, como en el
 * logotipo original.
 */
import { marca } from '../../content/site.js'

/* Lienzo del isotipo. El centro en x es 100 y el eje de simetría. */
const VB = 200
const EJE = 100

/* El pivote es la muñeca: el punto del que irradian los cinco dedos. */
const PIVOTE = { x: 128, y: 160 }
const ESCALA = 92

/**
 * Los cinco dedos de la mano derecha. `angulo` va en grados desde la
 * vertical, positivo hacia afuera; `largo` y `grosor` son fracciones de
 * ESCALA. El pulgar es el primero: más corto, más grueso y vuelto hacia el
 * centro, que es lo que hace que la mano se lea como mano.
 */
const DEDOS = [
  { angulo: -21, largo: 0.58, grosor: 0.095 },
  { angulo: -7, largo: 0.95, grosor: 0.082 },
  { angulo: 3, largo: 1.0, grosor: 0.082 },
  { angulo: 13, largo: 0.94, grosor: 0.079 },
  { angulo: 24, largo: 0.8, grosor: 0.073 },
]

/* Hasta dónde baja el valle entre dos dedos, en fracción del largo del más
   corto de los dos: si baja demasiado la mano se abre como una estrella. */
const VALLE = 0.5

const rad = (grados) => ((grados - 90) * Math.PI) / 180
const punto = (x, y) => `${x.toFixed(1)} ${y.toFixed(1)}`

/** Eje y perpendicular de un dedo, y sus puntos clave. */
const geometria = (dedo) => {
  const a = rad(dedo.angulo)
  const eje = { x: Math.cos(a), y: Math.sin(a) }
  const perp = { x: -eje.y, y: eje.x }
  const largo = dedo.largo * ESCALA
  const r = dedo.grosor * ESCALA
  const centro = { x: PIVOTE.x + eje.x * (largo - r), y: PIVOTE.y + eje.y * (largo - r) }
  return {
    r,
    eje,
    /* Las dos esquinas de la punta, a un radio del eje. Entre ellas va el
       arco semicircular que redondea el dedo. */
    interior: { x: centro.x - perp.x * r, y: centro.y - perp.y * r },
    exterior: { x: centro.x + perp.x * r, y: centro.y + perp.y * r },
  }
}

/** El fondo del valle entre dos dedos, sobre la bisectriz de ambos. */
const valle = (a, b) => {
  const media = rad((a.angulo + b.angulo) / 2)
  const d = Math.min(a.largo, b.largo) * ESCALA * VALLE
  return { x: PIVOTE.x + Math.cos(media) * d, y: PIVOTE.y + Math.sin(media) * d }
}

/**
 * El contorno de la mano derecha: sube por el borde interior del pulgar,
 * recorre los cinco dedos —punta redondeada, valle, punta— y cierra por la
 * muñeca.
 */
const manoDerecha = () => {
  const g = DEDOS.map(geometria)
  const partes = [`M ${punto(g[0].interior.x, g[0].interior.y)}`]

  for (const [i, dedo] of g.entries()) {
    /* El arco de la punta: media vuelta del radio del dedo, en el sentido de
       las agujas del reloj vistas en pantalla. */
    partes.push(`A ${dedo.r.toFixed(1)} ${dedo.r.toFixed(1)} 0 0 1 ${punto(dedo.exterior.x, dedo.exterior.y)}`)

    const siguiente = g[i + 1]
    if (!siguiente) break

    /* Del borde externo de este dedo al fondo del valle y de ahí al borde
       interno del siguiente, con una curva suave: el valle de una mano es
       redondo, no un pico. */
    const v = valle(DEDOS[i], DEDOS[i + 1])
    partes.push(`Q ${punto(v.x, v.y)} ${punto(siguiente.interior.x, siguiente.interior.y)}`)
  }

  /* La muñeca: del borde externo del meñique baja al canto de la palma y
     vuelve al pulgar cerrando por debajo. */
  const meñique = g.at(-1)
  partes.push(
    `Q ${punto(meñique.exterior.x, PIVOTE.y - 14)} ${punto(PIVOTE.x + 6, PIVOTE.y)}`,
    `L ${punto(PIVOTE.x - 10, PIVOTE.y)}`,
    `Q ${punto(PIVOTE.x - 20, PIVOTE.y - 14)} ${punto(g[0].interior.x, g[0].interior.y)}`,
    'Z'
  )
  return partes.join(' ')
}

/** Las rayas que separan los dedos dentro de la palma. En el logotipo cada
 *  dedo sigue dibujado hacia abajo un tramo, y eso es lo que impide que la
 *  mano parezca un guante. */
const surcos = () =>
  DEDOS.slice(1)
    .map((dedo, i) => {
      const a = rad((dedo.angulo + DEDOS[i].angulo) / 2)
      const desde = 0.16 * ESCALA
      const hasta = Math.min(dedo.largo, DEDOS[i].largo) * ESCALA * (VALLE + 0.14)
      return `M ${punto(PIVOTE.x + Math.cos(a) * desde, PIVOTE.y + Math.sin(a) * desde)} L ${punto(
        PIVOTE.x + Math.cos(a) * hasta,
        PIVOTE.y + Math.sin(a) * hasta
      )}`
    })
    .join(' ')

/* El techo: un chevron con alero, detrás de las manos. */
const TECHO = 'M 52 122 L 100 56 L 148 122 L 134 122 L 100 75 L 66 122 Z'

/* La llama: cuerpo de gota con la muesca del logotipo en el lado izquierdo,
   que es lo que la hace fuego y no lágrima. */
const LLAMA =
  'M 101 92 c 10 13 18 21 18 32 a 18 18 0 0 1 -36 0 c 0 -9 5 -15 10 -20 c 1.4 5.5 3.6 8.2 6.8 10 c -2.7 -8.2 -1.4 -15.5 1.2 -22 z'

/* El suelo: el arco bajo las manos. */
const SUELO = 'M 18 176 q 82 -14 164 0 q -82 -6 -164 0 Z'

/**
 * El markup. `modo: 'inline'` hereda `currentColor` para el trazo, que es
 * como vive en la cabecera y en el pie; `modo: 'archivo'` fija los colores
 * de marca para el SVG suelto.
 */
/**
 * El markup.
 *
 * `modo: 'inline'` es la versión reducida, la que vive en la cabecera a unos
 * cuarenta píxeles: hereda `currentColor`, engorda el trazo y **quita los
 * surcos de los dedos**. A ese tamaño el detalle fino no se lee, se
 * emborrona, y un logotipo emborronado se ve peor que uno simple. El archivo
 * suelto conserva el dibujo completo, que es el que se usa en grande.
 *
 * El recuadro se recorta a la altura del dibujo —entre el pico del techo y
 * el suelo— para que el isotipo llene su caja en vez de flotar en medio de
 * un cuadrado con aire.
 */
export const isotipo = ({ modo = 'archivo', titulo = '' } = {}) => {
  const reducido = modo === 'inline'
  const trazo = reducido ? 'currentColor' : marca.morado
  const llama = reducido ? 'var(--celeste, #1B9EC4)' : marca.celeste
  /* Las manos van rellenas también en la cabecera: si fueran transparentes,
     el techo se vería a través de ellas y el dibujo perdería sus capas. */
  const relleno = reducido ? 'var(--papel, #fff)' : marca.papel
  const mano = manoDerecha()

  const caja = reducido ? '10 44 180 146' : `0 0 ${VB} ${VB}`
  const etiquetas = reducido
    ? 'aria-hidden="true" focusable="false"'
    : 'role="img" aria-labelledby="iso-titulo"'

  const espejo = (d, ancho) => `<path d="${d}" transform="translate(${EJE * 2} 0) scale(-1 1)"${ancho} />`

  return `<svg class="logo" viewBox="${caja}" ${etiquetas}>
  ${!reducido && titulo ? `<title id="iso-titulo">${titulo}</title>` : ''}
  <g fill="none" stroke="${trazo}" stroke-width="${reducido ? 6 : 4.6}" stroke-linecap="round" stroke-linejoin="round">
    <path d="${TECHO}" fill="${trazo}" stroke-width="${reducido ? 4 : 3}" />
    <g fill="${relleno}">
      <path d="${mano}" />
      ${espejo(mano, '')}
    </g>
    ${
      reducido
        ? ''
        : `<g stroke-width="3.2" opacity="0.85">
      <path d="${surcos()}" />
      ${espejo(surcos(), '')}
    </g>`
    }
    <path d="${SUELO}" fill="${trazo}" stroke-width="${reducido ? 4 : 3}" />
  </g>
  <path d="${LLAMA}" fill="${llama}" />
</svg>`
}
