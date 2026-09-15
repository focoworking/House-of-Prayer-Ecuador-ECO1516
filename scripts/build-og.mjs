/**
 * Genera la imagen para compartir (1200x630) sin dependencias.
 *
 * Por qué a mano: una imagen de Open Graph es lo que se ve cuando el enlace
 * se pega en WhatsApp, y en Ecuador el enlace se pega en WhatsApp. No merece
 * arrastrar un navegador headless al build. El lienzo y el PNG salen de
 * scripts/lib/lienzo.mjs, el mismo que dibuja el arte del sitio.
 *
 * La tipografía es un mapa de bits de 5x7 escalado: no compite con una fuente
 * real, pero es nítida, pesa cero y no depende de la red.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

import { crear, png, linea as trazo, hex } from './lib/lienzo.mjs'
import { marca, site } from '../content/site.js'

const ANCHO = 1200
const ALTO = 630

/* ---------------------------------------------------------------- */
/* Lienzo                                                            */
/* ---------------------------------------------------------------- */

const L = crear(ANCHO, ALTO)
const pixel = (x, y, color, alfa = 1) => L.pixel(x, y, color, alfa)
const linea = (x1, y1, x2, y2, grosor, color) => trazo(L, x1, y1, x2, y2, grosor, color)

/** Degradado en diagonal, el mismo que usa el hero de urgencia. */
const fondo = (desde, hasta) => {
  const a = hex(desde)
  const b = hex(hasta)
  L.cada((x, y, u, v) => {
    const t = Math.min(1, u * 0.45 + v * 0.75)
    pixel(x, y, [0, 1, 2].map((i) => a[i] + (b[i] - a[i]) * t))
  })
}

/** La llama: disco abajo y punta arriba. */
const llama = (cx, cy, r, color) => {
  const c = hex(color)
  const alto = r * 2.6
  for (let y = Math.floor(cy - alto - 2); y <= Math.ceil(cy + r + 2); y++) {
    for (let x = Math.floor(cx - r - 2); x <= Math.ceil(cx + r + 2); x++) {
      const dy = y - cy
      const dx = x - cx
      const radio = dy >= 0 ? r * Math.sqrt(Math.max(0, 1 - (dy / r) ** 2)) : r * Math.max(0, 1 - (-dy / alto) ** 1.9)
      const alfa = Math.max(0, Math.min(1, radio - Math.abs(dx) + 0.5))
      if (alfa > 0) pixel(x, y, c, alfa)
    }
  }
}

/* ---------------------------------------------------------------- */
/* Tipografía de mapa de bits                                        */
/* ---------------------------------------------------------------- */

const GLIFOS = {
  A: '01110,10001,10001,11111,10001,10001,10001',
  C: '01110,10001,10000,10000,10000,10001,01110',
  D: '11110,10001,10001,10001,10001,10001,11110',
  E: '11111,10000,10000,11110,10000,10000,11111',
  G: '01110,10001,10000,10111,10001,10001,01110',
  I: '11111,00100,00100,00100,00100,00100,11111',
  N: '10001,11001,10101,10101,10011,10001,10001',
  O: '01110,10001,10001,10001,10001,10001,01110',
  Q: '01110,10001,10001,10001,10101,10011,01111',
  R: '11110,10001,10001,11110,10100,10010,10001',
  S: '01111,10000,10000,01110,00001,00001,11110',
  T: '11111,00100,00100,00100,00100,00100,00100',
  U: '10001,10001,10001,10001,10001,10001,01110',
  0: '01110,10011,10011,10101,11001,11001,01110',
  1: '00100,01100,00100,00100,00100,00100,01110',
  2: '01110,10001,00001,00010,00100,01000,11111',
  4: '00010,00110,01010,10010,11111,00010,00010',
  5: '11111,10000,11110,00001,00001,10001,01110',
  6: '00110,01000,10000,11110,10001,10001,01110',
  7: '11111,00001,00010,00100,01000,01000,01000',
  '.': '00000,00000,00000,00000,00000,01100,01100',
  '/': '00001,00001,00010,00100,01000,10000,10000',
  '·': '00000,00000,00000,01100,01100,00000,00000',
  ' ': '00000,00000,00000,00000,00000,00000,00000',
}

const anchoTexto = (texto, escala, espaciado) => texto.length * (5 * escala + espaciado) - espaciado

/** Escribe ajustando la escala para no rebasar `maxAncho`. Una imagen de
 *  Open Graph recortada es peor que una con la letra un punto mas chica. */
const textoAjustado = (cadena, x, y, maxAncho, escalaMax, color) => {
  let escala = escalaMax
  while (escala > 1 && anchoTexto(cadena, escala, Math.round(escala * 1.3)) > maxAncho) escala -= 1
  const espaciado = Math.round(escala * 1.3)
  texto(cadena, x, y, escala, color, espaciado)
  return { escala, ancho: anchoTexto(cadena, escala, espaciado), alto: escala * 7 }
}

const texto = (cadena, x, y, escala, color, espaciado = escala * 2) => {
  const c = hex(color)
  let cursor = x
  for (const caracter of cadena.toUpperCase()) {
    const glifo = GLIFOS[caracter] ?? GLIFOS[' ']
    glifo.split(',').forEach((fila, gy) => {
      ;[...fila].forEach((punto, gx) => {
        if (punto !== '1') return
        for (let dy = 0; dy < escala; dy++) {
          for (let dx = 0; dx < escala; dx++) pixel(cursor + gx * escala + dx, y + gy * escala + dy, c)
        }
      })
    })
    cursor += 5 * escala + espaciado
  }
}

/* ---------------------------------------------------------------- */
/* Composición                                                       */
/* ---------------------------------------------------------------- */

/* El mismo papel que el sitio: la tarjeta que se pega en WhatsApp tiene que
   parecerse a la página que abre. */
fondo(marca.papel, marca.papelAlto)

/* El emblema, a la izquierda: manos abiertas, techo y llama. Los dedos
   arrancan por fuera del techo para que las dos formas se lean separadas. */
const cx = 215
const cy = 300
for (const [i, alto] of [96, 128, 138, 118].entries()) {
  const x = 78 + i * 28
  linea(x, cy + 66, x, cy + 66 - alto, 15, marca.morado)
  linea(2 * cx - x, cy + 66, 2 * cx - x, cy + 66 - alto, 15, marca.morado)
}
linea(78, cy + 60, 120, cy + 126, 15, marca.morado)
linea(2 * cx - 78, cy + 60, 2 * cx - 120, cy + 126, 15, marca.morado)
linea(cx - 74, cy - 6, cx, cy - 86, 19, marca.morado)
linea(cx, cy - 86, cx + 74, cy - 6, 19, marca.morado)
linea(cx - 130, cy + 158, cx + 130, cy + 158, 7, marca.morado)
llama(cx, cy + 32, 42, marca.celeste)

/* El texto, a la derecha, dentro de un ancho fijo: si una linea creciera,
   se encoge sola en vez de salirse del lienzo. */
const X = 430
const ANCHO_TEXTO = ANCHO - X - 70

const l1 = textoAjustado('ECUADOR', X, 190, ANCHO_TEXTO, 10, marca.tinta)
const l2 = textoAjustado('CASA DE ORACION', X, 190 + l1.alto + 26, ANCHO_TEXTO, 10, marca.tinta)
const reglaY = 190 + l1.alto + 26 + l2.alto + 30
linea(X, reglaY, X + l2.ancho, reglaY, 4, marca.celeste)
textoAjustado('ORACION 24/7 · QUITO · DESDE 2011', X, reglaY + 32, ANCHO_TEXTO, 5, marca.morado)
textoAjustado('ECO1516.ORG', X, reglaY + 100, ANCHO_TEXTO, 5, marca.tinta)

const destino = resolve(process.cwd(), 'public/og/eco1516.png')
await mkdir(dirname(destino), { recursive: true })
await writeFile(destino, png(L))
console.log(`public/og/eco1516.png (${ANCHO}x${ALTO}) — ${site.name}`)
