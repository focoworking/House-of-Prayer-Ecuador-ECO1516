/**
 * Genera las imágenes del sitio.
 *
 * Son piezas originales, dibujadas por código: no hay banco de imágenes
 * detrás, no hay licencia que renovar y ninguna persona real aparece en
 * fotos que no autorizó. Cada una es determinista —misma semilla, mismo
 * archivo— y se regenera con `npm run img`.
 *
 * El registro es el amanecer, no la noche: el proyecto anuncia luz y las
 * imágenes tienen que decir lo mismo que el texto. Todas se resuelven en la
 * mitad clara de la escala, se funden con el papel blanco de la página por
 * los bordes y dejan el tercio izquierdo casi vacío, que es donde cae el
 * titular.
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { crear, pngPaleta, fractal, azar, hex } from './lib/lienzo.mjs'
import { marca } from '../content/site.js'

const PAPEL = marca.papel
const piezas = []

const guardar = async (nombre, lienzo) => {
  await writeFile(resolve(process.cwd(), 'public/img', nombre), pngPaleta(lienzo, 128))
  piezas.push(`public/img/${nombre} ${lienzo.ancho}x${lienzo.alto}`)
}

/** Mezcla dos colores hex y devuelve el trío RGB. */
const entre = (a, b, t) => {
  const ca = hex(a)
  const cb = hex(b)
  return [0, 1, 2].map((i) => ca[i] + (cb[i] - ca[i]) * t)
}

/* La escala de la marca, aclarada. Son los mismos morados del logotipo
   mezclados con papel: la cordillera se dibuja con luz reflejada, no con
   tinta plana. */
const bruma = '#E7E0F2'
const lavandaClara = '#CFC2E4'
const lavanda = '#B4A2D2'
const lavandaHonda = '#8E7BB2'
const alba = '#FFF1E2'

/* ================================================================== *
 * 1. Amanecer — la cordillera al alba.                                *
 *    Es la portada. El sol sale por la derecha y deja el lado          *
 *    izquierdo en papel casi puro para que el titular se lea sin       *
 *    ningún velo encima.                                              *
 * ================================================================== */
{
  const L = crear(2000, 1125)
  const neblina = fractal(11, 5)

  /* Cielo: papel arriba, lavanda tenue en la franja media y el calor del
     alba justo sobre el horizonte. */
  L.cada((x, y, u, v) => {
    const cielo = entre(PAPEL, lavandaClara, Math.min(1, (v / 0.62) ** 1.4 * 0.85))
    const calor = Math.max(0, (v - 0.3) / 0.35) ** 2 * 0.55 * Math.min(1, 0.35 + u)
    L.pixel(x, y, [0, 1, 2].map((i) => cielo[i] + (hex(alba)[i] - cielo[i]) * calor), 1)
  })

  /* El sol: bajo, a la derecha, apenas por encima de la cresta. Se dibuja
     tiñendo hacia el blanco cálido, no sumando luz sobre blanco. */
  const solX = L.ancho * 0.72
  const solY = L.alto * 0.58
  L.tinte(solX, solY, L.ancho * 0.36, alba, 0.75, 2.4)
  L.tinte(solX, solY, L.ancho * 0.07, '#FFFFFF', 1, 1.3)

  /* Cuatro cordilleras. La más lejana es casi bruma y la más cercana es la
     única con peso: así se lee distancia sin oscurecer la imagen. */
  const sierras = [
    { base: 0.6, amplitud: 0.09, cono: [0.74, 0.22], color: bruma, semilla: 3 },
    { base: 0.7, amplitud: 0.11, cono: [0.24, 0.17], color: lavandaClara, semilla: 5 },
    { base: 0.81, amplitud: 0.09, cono: [0.52, 0.11], color: lavanda, semilla: 9 },
    { base: 0.95, amplitud: 0.07, cono: [0.86, 0.09], color: lavandaHonda, semilla: 17 },
  ]
  for (const sierra of sierras) {
    const rs = azar(sierra.semilla)
    const fases = [rs() * 6.28, rs() * 6.28, rs() * 6.28]
    const [conoX, conoAlto] = sierra.cono
    for (let x = 0; x < L.ancho; x++) {
      const u = x / L.ancho
      /* Senos plegados con valor absoluto: el pliegue crea aristas en vez de
         lomas, que es la diferencia entre una duna y una cordillera. */
      const onda =
        (0.5 - Math.abs(Math.sin(u * 6.1 + fases[0]))) * 0.7 +
        (0.5 - Math.abs(Math.sin(u * 14.3 + fases[1]))) * 0.42 +
        (0.5 - Math.abs(Math.sin(u * 31.7 + fases[2]))) * 0.2
      const pico = conoAlto * Math.exp(-((Math.abs(u - conoX) / 0.075) ** 1.35))
      const horizonte = (sierra.base + onda * sierra.amplitud - pico) * L.alto
      for (let y = Math.floor(horizonte); y < L.alto; y++) {
        /* La ladera que mira al sol se aclara: un degradado suave hacia la
           derecha basta para que la montaña tenga volumen. */
        const luzLadera = Math.max(0, 0.35 - Math.abs(u - 0.72) * 0.6)
        L.pixel(x, y, entre(sierra.color, alba, luzLadera), 1)
      }
    }
  }

  /* Neblina en los valles: es lo que separa una cresta de la siguiente. */
  L.cada((x, y, u, v) => {
    if (v < 0.58) return
    const n = neblina(u * 6, v * 10)
    const franja = Math.max(0, 1 - Math.abs(v - 0.74) / 0.16)
    L.pixel(x, y, hex(PAPEL), Math.max(0, n - 0.42) * franja * 0.85)
  })

  L.halo(0.22, PAPEL)
  L.grano(2.5, 31)
  await guardar('amanecer.png', L)
}

/* ================================================================== *
 * 2. Incienso — la oración que sube.                                  *
 *    "Copas de oro llenas de incienso, que son las oraciones de los   *
 *    santos". Humo claro sobre papel, sin objeto reconocible: la      *
 *    oración no tiene forma y la imagen no debe fingir que la tiene.  *
 * ================================================================== */
{
  const L = crear(1500, 1125)
  const humo = fractal(41, 6)

  L.cada((x, y, u, v) => L.pixel(x, y, entre(PAPEL, bruma, v * 0.6), 1))

  /* Dos columnas que se cruzan. El ruido se desplaza con la altura para que
     las volutas se tuerzan en vez de subir rectas. */
  for (const [cx, semilla, color, escala] of [
    [0.4, 0, lavanda, 1],
    [0.6, 33, marca.celeste, 1.3],
  ]) {
    L.cada((x, y, u, v) => {
      const subida = (1 - v) ** 1.4
      const deriva = Math.sin((1 - v) * 4.4 + semilla) * 0.15 * (1 - v)
      const d = Math.abs(u - (cx + deriva)) / (0.06 + (1 - v) * 0.24)
      if (d > 1.6) return
      const n = humo((u * 5 + semilla) * escala, (v * 4 - (1 - v) * 1.4) * escala)
      L.pixel(x, y, hex(color), Math.max(0, n - 0.44) * Math.exp(-d * d * 1.7) * subida * 0.85)
    })
  }

  /* La brasa: el punto del que sale todo, abajo y fuera de cuadro. */
  L.tinte(L.ancho * 0.5, L.alto * 1.04, L.alto * 0.4, marca.celeste, 0.3, 2.8)

  L.halo(0.6, PAPEL)
  L.grano(2.5, 12)
  await guardar('incienso.png', L)
}

/* ================================================================== *
 * 3. Ciudad — Quito al amanecer, vista desde el cerro.                *
 *    Bloques abstractos en lavanda sobre cielo de papel: la ciudad    *
 *    por la que se ora, no una postal.                                *
 * ================================================================== */
{
  const L = crear(1500, 1125)
  const r = azar(77)
  const neblina = fractal(5, 5)

  L.cada((x, y, u, v) => {
    const cielo = entre(PAPEL, lavandaClara, Math.min(1, (v / 0.5) ** 1.5 * 0.7))
    const calor = Math.max(0, 1 - Math.abs(v - 0.46) / 0.2) ** 2 * 0.6
    L.pixel(x, y, [0, 1, 2].map((i) => cielo[i] + (hex(alba)[i] - cielo[i]) * calor), 1)
  })

  /* El Pichincha detrás, insinuado. */
  for (let x = 0; x < L.ancho; x++) {
    const u = x / L.ancho
    const h = (0.44 + Math.sin(u * 3.1) * 0.05 + Math.sin(u * 8.7) * 0.02) * L.alto
    for (let y = Math.floor(h); y < L.alto; y++) L.pixel(x, y, hex(bruma), 1)
  }

  /* Los bloques, de atrás hacia adelante: más cerca, más contraste. Las
     ventanas son huecos algo más oscuros, no puntos encendidos: de día la
     luz está fuera, no dentro. */
  for (const capa of [
    { y: 0.52, alto: [0.1, 0.22], color: lavandaClara, ventana: 0.22, n: 34 },
    { y: 0.65, alto: [0.14, 0.3], color: lavanda, ventana: 0.3, n: 26 },
    { y: 0.82, alto: [0.18, 0.4], color: lavandaHonda, ventana: 0.34, n: 18 },
  ]) {
    let x = -40
    for (let i = 0; i < capa.n; i++) {
      const ancho = 30 + r() * 88
      const alto = (capa.alto[0] + r() * (capa.alto[1] - capa.alto[0])) * L.alto
      const arriba = capa.y * L.alto - alto
      for (let py = Math.floor(arriba); py < L.alto; py++) {
        for (let px = Math.floor(x); px < x + ancho; px++) L.pixel(px, py, hex(capa.color), 1)
      }
      for (let vy = arriba + 10; vy < L.alto - 6; vy += 14) {
        for (let vx = x + 8; vx < x + ancho - 8; vx += 12) {
          if (r() > 0.5) continue
          const tono = r() > 0.85 ? marca.celeste : marca.moradoOscuro
          for (let py = 0; py < 5; py++) {
            for (let px = 0; px < 5; px++) L.pixel(vx + px, vy + py, hex(tono), capa.ventana)
          }
        }
      }
      x += ancho + 6 + r() * 24
      if (x > L.ancho) break
    }
  }

  /* Bruma baja: ata la ciudad al cerro y aclara la base. */
  L.cada((x, y, u, v) => {
    if (v < 0.55) return
    L.pixel(x, y, hex(PAPEL), Math.max(0, neblina(u * 6, v * 8) - 0.45) * (v - 0.55) * 1.2)
  })

  L.halo(0.5, PAPEL)
  L.grano(2.5, 5)
  await guardar('ciudad.png', L)
}

/* ================================================================== *
 * 4. Altar — la llama del logotipo, sola.                             *
 *    Cierra la página de la sala y sirve de imagen cuadrada.          *
 * ================================================================== */
{
  const L = crear(1200, 1200)
  const humo = fractal(91, 5)

  L.cada((x, y, u, v) => {
    const d = Math.hypot(u - 0.5, v - 0.56)
    L.pixel(x, y, entre(bruma, PAPEL, Math.min(1, d * 1.7)), 1)
  })

  /* Anillos concéntricos finos: el eco del clamor, dibujado con una línea de
     un píxel y no con un resplandor. */
  const cx = L.ancho * 0.5
  const cy = L.alto * 0.56
  for (let anillo = 1; anillo <= 6; anillo++) {
    const radio = anillo * L.ancho * 0.084
    const alfa = 0.3 / anillo ** 0.5
    for (let a = 0; a < 6.2832; a += 0.0009) {
      L.pixel(cx + Math.cos(a) * radio, cy + Math.sin(a) * radio, hex(lavanda), alfa)
    }
  }

  /* El halo y la llama. La llama no es una silueta rellena: tiene el borde
     difuso y un corazón casi blanco, que es lo que la distingue de una gota
     de agua. */
  L.tinte(cx, cy, L.ancho * 0.3, marca.celeste, 0.16, 2.4)
  const r = L.ancho * 0.082
  const alto = r * 3.1
  const celeste = hex(marca.celeste)
  const claro = hex('#7FD6ED')
  const blanco = [255, 255, 255]
  for (let y = Math.floor(cy - alto - 2); y <= Math.ceil(cy + r + 2); y++) {
    for (let x = Math.floor(cx - r - 2); x <= Math.ceil(cx + r + 2); x++) {
      const dy = y - cy
      const dx = x - cx
      const radio = dy >= 0 ? r * Math.sqrt(Math.max(0, 1 - (dy / r) ** 2)) : r * Math.max(0, 1 - (-dy / alto) ** 1.9)
      if (radio <= 0) continue
      const borde = Math.max(0, Math.min(1, (radio - Math.abs(dx)) / (radio * 0.4)))
      if (borde <= 0) continue
      const centro = Math.max(0, 1 - Math.abs(dx) / radio) ** 2.4
      /* El corazón está en el tercio bajo: una llama es más caliente abajo. */
      const caliente = centro * Math.max(0, 1 - Math.abs(dy - r * 0.25) / (alto * 0.55))
      const color = [0, 1, 2].map(
        (i) => celeste[i] + (claro[i] - celeste[i]) * centro * 0.85 + (blanco[i] - claro[i]) * caliente * 0.7
      )
      L.pixel(x, y, color, borde)
    }
  }

  /* Un hilo de humo saliendo de la punta. */
  L.cada((x, y, u, v) => {
    const cabeza = (cy - alto) / L.alto
    if (v > cabeza) return
    const deriva = Math.sin((cabeza - v) * 9) * 0.05
    const d = Math.abs(u - (0.5 + deriva)) / (0.02 + (cabeza - v) * 0.5)
    if (d > 1.5) return
    L.pixel(x, y, hex(lavanda), Math.max(0, humo(u * 9, v * 6 + 3) - 0.46) * Math.exp(-d * d * 2) * 0.8)
  })

  L.halo(0.55, PAPEL)
  L.grano(2.5, 63)
  await guardar('altar.png', L)
}

await mkdir(resolve(process.cwd(), 'public/img'), { recursive: true })
console.log(piezas.join('\n'))
