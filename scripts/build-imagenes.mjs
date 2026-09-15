/**
 * Genera las imágenes del sitio.
 *
 * Son piezas originales, dibujadas por código: no hay banco de imágenes
 * detrás, no hay licencia que renovar y ninguna persona real aparece en
 * fotos que no autorizó. Cada una es determinista —misma semilla, mismo
 * archivo— y se regenera con `npm run img`.
 *
 * El registro visual es el mismo de la casa: noche andina, luz que sube,
 * morado de la estructura y celeste de la llama.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { crear, pngPaleta, fractal, azar, hex } from './lib/lienzo.mjs'
import { marca } from '../content/site.js'

const NEGRO = '#0B0713'
const piezas = []

const guardar = async (nombre, lienzo) => {
  const destino = resolve(process.cwd(), 'public/img', nombre)
  await writeFile(destino, pngPaleta(lienzo, 128))
  piezas.push(`${nombre} ${lienzo.ancho}x${lienzo.alto}`)
}

/* La difusión de error del PNG de paleta ya deja una textura fina, así que
   el grano se queda en lo justo: subirlo solo engorda el archivo. */

/** Mezcla dos colores hex y devuelve el trío RGB. */
const entre = (a, b, t) => {
  const ca = hex(a)
  const cb = hex(b)
  return [0, 1, 2].map((i) => ca[i] + (cb[i] - ca[i]) * t)
}

/* ================================================================== *
 * 1. Vigilia — la noche andina y la columna de luz.                   *
 *    Es la imagen de portada: cielo profundo, cordillera y una luz    *
 *    que sube del valle. Sitio para el titular en el tercio superior  *
 *    izquierdo, por eso la luz está descentrada a la derecha.         *
 * ================================================================== */
{
  const L = crear(2000, 1125)
  const humo = fractal(11, 6)
  const r = azar(23)

  /* Cielo: del negro violáceo de arriba al morado del horizonte, con una
     insinuación de celeste justo sobre las montañas —el amanecer que
     todavía no llega. */
  L.cada((x, y, u, v) => {
    const cielo = entre(NEGRO, marca.moradoOscuro, Math.min(1, v * 1.35))
    const alba = Math.max(0, (v - 0.52) / 0.28) ** 2 * 0.55
    const color = [0, 1, 2].map((i) => cielo[i] + (entre(marca.morado, marca.celeste, 0.35)[i] - cielo[i]) * alba)
    L.pixel(x, y, color, 1)
  })

  /* Nubes altas: ruido fractal muy estirado en horizontal, tenue. */
  const nube = hex(marca.moradoClaro)
  L.cada((x, y, u, v) => {
    if (v > 0.62) return
    const n = humo(u * 5, v * 9)
    const intensidad = Math.max(0, n - 0.55) * 0.5 * (1 - v / 0.62)
    L.luz(x, y, nube, intensidad)
  })

  /* Estrellas: pocas, pequeñas y solo en la mitad alta. */
  for (let i = 0; i < 420; i++) {
    const x = r() * L.ancho
    const y = r() * L.alto * 0.55
    L.disco(x, y, 1 + r() * 2.6, i % 9 === 0 ? marca.celesteClaro : '#FFFFFF', 0.5 + r() * 0.5, 1.6)
  }

  /* La columna de luz. Sube desde el valle, se abre y se desvanece: es una
     gaussiana horizontal cuyo ancho crece con la altura. */
  const columna = L.ancho * 0.68
  const luzColumna = hex(marca.celeste)
  L.cada((x, y, u, v) => {
    const altura = Math.max(0, 1 - v / 0.92)
    const ancho = 40 + (1 - v) * 260
    const d = (x - columna) / ancho
    const intensidad = Math.exp(-d * d) * altura ** 1.8 * 0.5
    if (intensidad > 0.002) L.luz(x, y, luzColumna, intensidad)
  })

  /* Tres cordilleras, de la más lejana a la más cercana. Cada una es una
     suma de senos más un cono: la silueta de un volcán sin dibujarlo. */
  const sierras = [
    { base: 0.68, amplitud: 0.1, cono: [0.76, 0.24], color: '#2A1B3D', semilla: 3 },
    { base: 0.78, amplitud: 0.12, cono: [0.26, 0.18], color: '#1B1128', semilla: 5 },
    { base: 0.9, amplitud: 0.08, cono: [0.52, 0.1], color: NEGRO, semilla: 9 },
  ]
  for (const sierra of sierras) {
    const rs = azar(sierra.semilla)
    const fases = [rs() * 6.28, rs() * 6.28, rs() * 6.28]
    const color = hex(sierra.color)
    const [conoX, conoAlto] = sierra.cono
    for (let x = 0; x < L.ancho; x++) {
      const u = x / L.ancho
      /* Senos plegados con valor absoluto: el pliegue crea aristas en vez
         de lomas, que es la diferencia entre una duna y una cordillera. */
      const onda =
        (0.5 - Math.abs(Math.sin(u * 6.1 + fases[0]))) * 0.7 +
        (0.5 - Math.abs(Math.sin(u * 14.3 + fases[1]))) * 0.42 +
        (0.5 - Math.abs(Math.sin(u * 31.7 + fases[2]))) * 0.2
      /* El cono: una campana estrecha centrada en conoX. */
      const pico = conoAlto * Math.exp(-((Math.abs(u - conoX) / 0.075) ** 1.35))
      const horizonte = (sierra.base + onda * sierra.amplitud - pico) * L.alto
      for (let y = Math.floor(horizonte); y < L.alto; y++) {
        /* Un filo más claro en la cresta: separa una cordillera de la otra. */
        const filo = y - horizonte < 2.5 ? 0.45 : 0
        L.pixel(x, y, filo ? entre(sierra.color, marca.moradoClaro, filo) : color, 1)
      }
    }
  }

  /* Neblina en el valle, justo sobre la cordillera más cercana. */
  L.cada((x, y, u, v) => {
    if (v < 0.76 || v > 0.95) return
    const n = humo(u * 7 + 20, v * 14)
    const centro = 1 - Math.abs(v - 0.855) / 0.095
    L.luz(x, y, hex(marca.morado), Math.max(0, n - 0.5) * centro * 0.5)
  })

  L.vinieta(0.5)
  L.grano(3, 31)
  await guardar('vigilia.png', L)
}

/* ================================================================== *
 * 2. Clamor — el incienso que sube.                                   *
 *    "Copas de oro llenas de incienso, que son las oraciones de los   *
 *    santos". Humo ascendente, sin objeto reconocible: la oración no  *
 *    tiene forma y la imagen tampoco debe fingir que la tiene.        *
 * ================================================================== */
{
  const L = crear(1600, 1200)
  const humo = fractal(41, 6)

  L.cada((x, y, u, v) => L.pixel(x, y, entre(NEGRO, '#17102A', v), 1))

  /* Dos columnas de humo que se cruzan. El ruido se desplaza con la altura
     para que las volutas se tuerzan en vez de subir rectas. */
  for (const [cx, semilla, color, escala] of [
    [0.38, 0, marca.morado, 1],
    [0.62, 33, marca.celeste, 1.3],
  ]) {
    L.cada((x, y, u, v) => {
      const subida = (1 - v) ** 1.5
      const deriva = Math.sin((1 - v) * 4.4 + semilla) * 0.16 * (1 - v)
      const d = Math.abs(u - (cx + deriva)) / (0.07 + (1 - v) * 0.26)
      if (d > 1.6) return
      const n = humo((u * 5 + semilla) * escala, (v * 4 - (1 - v) * 1.4) * escala)
      const intensidad = Math.max(0, n - 0.42) * Math.exp(-d * d * 1.6) * subida * 1.5
      L.luz(x, y, hex(color), intensidad)
    })
  }

  /* La brasa de abajo: el punto del que sale todo. */
  L.disco(L.ancho * 0.5, L.alto * 1.02, L.alto * 0.42, marca.celeste, 0.5, 2.6)

  L.vinieta(0.62)
  L.grano(3, 12)
  await guardar('clamor.png', L)
}

/* ================================================================== *
 * 3. Ciudad — Quito de noche, vista desde arriba.                     *
 *    Bloques abstractos con ventanas encendidas y una línea de alba   *
 *    en el horizonte: la ciudad por la que se ora, no una postal.     *
 * ================================================================== */
{
  const L = crear(1600, 1200)
  const r = azar(77)
  const humo = fractal(5, 5)

  L.cada((x, y, u, v) => {
    const cielo = entre(NEGRO, marca.moradoOscuro, Math.min(1, v * 2))
    const alba = Math.max(0, 1 - Math.abs(v - 0.44) / 0.14) ** 3 * 0.5
    L.pixel(x, y, [0, 1, 2].map((i) => cielo[i] + (hex(marca.celeste)[i] - cielo[i]) * alba), 1)
  })

  /* Cerro de fondo: el Pichincha, insinuado. */
  for (let x = 0; x < L.ancho; x++) {
    const u = x / L.ancho
    const h = (0.46 + Math.sin(u * 3.1) * 0.05 + Math.sin(u * 8.7) * 0.02) * L.alto
    for (let y = Math.floor(h); y < L.alto; y++) L.pixel(x, y, hex('#1A1129'), 1)
  }

  /* Los bloques. Se dibujan de atrás hacia adelante, más altos y más
     oscuros conforme se acercan, con ventanas encendidas al azar. */
  for (const capa of [
    { y: 0.5, alto: [0.1, 0.22], color: '#241735', luz: 0.35, n: 34 },
    { y: 0.62, alto: [0.14, 0.3], color: '#170F24', luz: 0.55, n: 26 },
    { y: 0.78, alto: [0.18, 0.4], color: NEGRO, luz: 0.8, n: 18 },
  ]) {
    let x = -40
    for (let i = 0; i < capa.n; i++) {
      const ancho = 30 + r() * 90
      const alto = (capa.alto[0] + r() * (capa.alto[1] - capa.alto[0])) * L.alto
      const arriba = capa.y * L.alto - alto
      for (let py = Math.floor(arriba); py < L.alto; py++) {
        for (let px = Math.floor(x); px < x + ancho; px++) L.pixel(px, py, hex(capa.color), 1)
      }
      /* Ventanas: una rejilla con huecos, no todas encendidas. */
      for (let vy = arriba + 10; vy < L.alto - 6; vy += 14) {
        for (let vx = x + 8; vx < x + ancho - 8; vx += 12) {
          if (r() > 0.42) continue
          const tono = r() > 0.78 ? marca.celesteClaro : '#E8D9A8'
          for (let py = 0; py < 5; py++) for (let px = 0; px < 5; px++) L.pixel(vx + px, vy + py, hex(tono), capa.luz)
          L.disco(vx + 2, vy + 2, 9, tono, capa.luz * 0.22, 2.4)
        }
      }
      x += ancho + 6 + r() * 26
      if (x > L.ancho) break
    }
  }

  /* Bruma baja sobre la ciudad: la ata al fondo. */
  L.cada((x, y, u, v) => {
    if (v < 0.55) return
    L.luz(x, y, hex(marca.morado), Math.max(0, humo(u * 6, v * 8) - 0.5) * (v - 0.55) * 0.9)
  })

  L.vinieta(0.55)
  L.grano(3, 5)
  await guardar('ciudad.png', L)
}

/* ================================================================== *
 * 4. Altar — la llama del logotipo, sola, con su halo.                *
 *    Sirve de cierre y de imagen cuadrada para redes.                 *
 * ================================================================== */
{
  const L = crear(1400, 1400)
  const humo = fractal(91, 5)

  L.cada((x, y, u, v) => {
    const d = Math.hypot(u - 0.5, v - 0.55)
    L.pixel(x, y, entre('#1A1029', NEGRO, Math.min(1, d * 1.8)), 1)
  })

  /* Anillos concéntricos muy tenues: el eco del clamor. */
  const cx = L.ancho * 0.5
  const cy = L.alto * 0.56
  for (let anillo = 1; anillo <= 6; anillo++) {
    const radio = anillo * L.ancho * 0.082
    const grosor = 1.6
    const intensidad = 0.2 / anillo ** 0.6
    for (let a = 0; a < 6.2832; a += 0.0012) {
      const x = cx + Math.cos(a) * radio
      const y = cy + Math.sin(a) * radio
      for (let g = -grosor; g <= grosor; g += 0.5) {
        L.luz(x + Math.cos(a) * g, y + Math.sin(a) * g, hex(marca.moradoClaro), intensidad * 0.18)
      }
    }
  }

  /* El halo y la llama. La llama no es una silueta rellena: es un cuerpo
     con borde difuso y un corazón casi blanco, que es lo que la distingue
     de una gota de agua. */
  L.disco(cx, cy, L.ancho * 0.42, marca.celeste, 0.5, 2.6)
  L.disco(cx, cy - L.ancho * 0.03, L.ancho * 0.16, marca.celesteClaro, 0.55, 2)
  const r = L.ancho * 0.072
  const alto = r * 3.1
  const celeste = hex(marca.celeste)
  const claro = hex(marca.celesteClaro)
  const blanco = [255, 255, 255]
  for (let y = Math.floor(cy - alto - 2); y <= Math.ceil(cy + r + 2); y++) {
    for (let x = Math.floor(cx - r - 2); x <= Math.ceil(cx + r + 2); x++) {
      const dy = y - cy
      const dx = x - cx
      const radio = dy >= 0 ? r * Math.sqrt(Math.max(0, 1 - (dy / r) ** 2)) : r * Math.max(0, 1 - (-dy / alto) ** 1.9)
      if (radio <= 0) continue
      /* El borde se apaga en el último tercio del ancho, no en un píxel. */
      const borde = Math.max(0, Math.min(1, (radio - Math.abs(dx)) / (radio * 0.42)))
      if (borde <= 0) continue
      const centro = Math.max(0, 1 - Math.abs(dx) / radio) ** 2.4
      /* El corazón está en el tercio bajo: una llama es más caliente abajo. */
      const caliente = centro * Math.max(0, 1 - Math.abs(dy - r * 0.25) / (alto * 0.55))
      const color = [0, 1, 2].map(
        (i) => celeste[i] + (claro[i] - celeste[i]) * centro * 0.9 + (blanco[i] - claro[i]) * caliente * 0.75
      )
      L.pixel(x, y, color, borde)
      L.luz(x, y, claro, borde * caliente * 0.35)
    }
  }

  /* Un hilo de humo saliendo de la punta. */
  L.cada((x, y, u, v) => {
    const cabeza = (cy - alto) / L.alto
    if (v > cabeza) return
    const deriva = Math.sin((cabeza - v) * 9) * 0.05
    const d = Math.abs(u - (0.5 + deriva)) / (0.02 + (cabeza - v) * 0.5)
    if (d > 1.5) return
    const n = humo(u * 9, v * 6 + 3)
    L.luz(x, y, claro, Math.max(0, n - 0.46) * Math.exp(-d * d * 2) * 0.7)
  })

  L.vinieta(0.5)
  L.grano(3, 63)
  await guardar('altar.png', L)
}

await mkdir(resolve(process.cwd(), 'public/img'), { recursive: true })
console.log(piezas.map((p) => `public/img/${p}`).join('\n'))
