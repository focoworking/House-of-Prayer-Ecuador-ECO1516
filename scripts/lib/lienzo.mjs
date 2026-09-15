/**
 * Un lienzo de píxeles y un codificador PNG, sin dependencias.
 *
 * Por qué a mano: el sitio necesita imágenes propias —de la vigilia, de la
 * ciudad, de la llama— y arrastrar un navegador headless o una librería de
 * imagen al build por cuatro archivos que cambian una vez al año sale caro.
 * Con esto el build sigue siendo `node` y nada más.
 *
 * Todo es determinista: la misma semilla da el mismo archivo, así que una
 * publicación no ensucia el diff con ruido distinto cada vez.
 */
import { deflateSync } from 'node:zlib'

/* ------------------------------------------------------------------ */
/* Azar reproducible y ruido                                           */
/* ------------------------------------------------------------------ */

/** Mulberry32: pequeño, rápido y suficiente para grano y estrellas. */
export const azar = (semilla) => () => {
  semilla = (semilla + 0x6d2b79f5) | 0
  let t = semilla
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

const suave = (t) => t * t * (3 - 2 * t)

/**
 * Ruido de valor en dos dimensiones: una rejilla de valores aleatorios
 * interpolada suavemente. Es la base de las nubes, el humo y la niebla.
 */
export const ruido = (semilla = 1) => {
  const tabla = new Float32Array(256 * 256)
  const r = azar(semilla)
  for (let i = 0; i < tabla.length; i++) tabla[i] = r()
  const valor = (x, y) => tabla[((y & 255) << 8) | (x & 255)]

  return (x, y) => {
    const xi = Math.floor(x)
    const yi = Math.floor(y)
    const tx = suave(x - xi)
    const ty = suave(y - yi)
    const a = valor(xi, yi)
    const b = valor(xi + 1, yi)
    const c = valor(xi, yi + 1)
    const d = valor(xi + 1, yi + 1)
    return a + (b - a) * tx + (c - a) * ty + (a - b - c + d) * tx * ty
  }
}

/** Ruido fractal: varias octavas del anterior, cada una más fina y más
 *  tenue. Es lo que convierte una mancha en humo. */
export const fractal = (semilla = 1, octavas = 5) => {
  const base = ruido(semilla)
  return (x, y) => {
    let suma = 0
    let amplitud = 1
    let total = 0
    let frecuencia = 1
    for (let o = 0; o < octavas; o++) {
      suma += base(x * frecuencia, y * frecuencia) * amplitud
      total += amplitud
      amplitud *= 0.5
      frecuencia *= 2
    }
    return suma / total
  }
}

/* ------------------------------------------------------------------ */
/* Lienzo                                                              */
/* ------------------------------------------------------------------ */

export const hex = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16))

export const crear = (ancho, alto) => {
  const datos = new Float32Array(ancho * alto * 3)

  const pixel = (x, y, color, alfa = 1) => {
    const xi = x | 0
    const yi = y | 0
    if (xi < 0 || yi < 0 || xi >= ancho || yi >= alto || alfa <= 0) return
    const i = (yi * ancho + xi) * 3
    datos[i] += (color[0] - datos[i]) * alfa
    datos[i + 1] += (color[1] - datos[i + 1]) * alfa
    datos[i + 2] += (color[2] - datos[i + 2]) * alfa
  }

  /** Suma luz en vez de sustituirla: para halos, haces y estrellas. */
  const luz = (x, y, color, intensidad) => {
    const xi = x | 0
    const yi = y | 0
    if (xi < 0 || yi < 0 || xi >= ancho || yi >= alto || intensidad <= 0) return
    const i = (yi * ancho + xi) * 3
    datos[i] = Math.min(255, datos[i] + color[0] * intensidad)
    datos[i + 1] = Math.min(255, datos[i + 1] + color[1] * intensidad)
    datos[i + 2] = Math.min(255, datos[i + 2] + color[2] * intensidad)
  }

  /** Recorre cada píxel con (x, y, u, v) donde u y v van de 0 a 1. */
  const cada = (fn) => {
    for (let y = 0; y < alto; y++) {
      for (let x = 0; x < ancho; x++) fn(x, y, x / (ancho - 1), y / (alto - 1))
    }
  }

  const disco = (cx, cy, radio, color, intensidad = 1, caida = 2.2) => {
    const c = hex(color)
    for (let y = Math.floor(cy - radio); y <= Math.ceil(cy + radio); y++) {
      for (let x = Math.floor(cx - radio); x <= Math.ceil(cx + radio); x++) {
        const d = Math.hypot(x - cx, y - cy) / radio
        if (d >= 1) continue
        luz(x, y, c, intensidad * (1 - d) ** caida)
      }
    }
  }

  const grano = (cantidad, semilla = 7) => {
    const r = azar(semilla)
    for (let i = 0; i < datos.length; i += 3) {
      const g = (r() - 0.5) * cantidad
      datos[i] = Math.max(0, Math.min(255, datos[i] + g))
      datos[i + 1] = Math.max(0, Math.min(255, datos[i + 1] + g))
      datos[i + 2] = Math.max(0, Math.min(255, datos[i + 2] + g))
    }
  }

  /** Viñeta: oscurece las esquinas para que el texto encima respire. */
  const vinieta = (fuerza = 0.55) => {
    cada((x, y, u, v) => {
      const d = Math.hypot(u - 0.5, v - 0.5) / Math.SQRT1_2
      const k = 1 - fuerza * d ** 2
      const i = (y * ancho + x) * 3
      datos[i] *= k
      datos[i + 1] *= k
      datos[i + 2] *= k
    })
  }

  return { ancho, alto, datos, pixel, luz, cada, disco, grano, vinieta }
}

/* ------------------------------------------------------------------ */
/* PNG                                                                 */
/* ------------------------------------------------------------------ */

const TABLA_CRC = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})

const crc32 = (buf) => {
  let c = 0xffffffff
  for (const byte of buf) c = TABLA_CRC[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

const chunk = (tipo, datos) => {
  const largo = Buffer.alloc(4)
  largo.writeUInt32BE(datos.length)
  const cuerpo = Buffer.concat([Buffer.from(tipo, 'ascii'), datos])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(cuerpo))
  return Buffer.concat([largo, cuerpo, crc])
}

/** Codifica el lienzo como PNG de 8 bits por canal, filtro Paeth por fila:
 *  en imágenes de degradado ahorra la mitad del peso frente a filtro cero. */
export const png = ({ ancho, alto, datos }) => {
  const bytesFila = ancho * 3
  const filas = Buffer.alloc((bytesFila + 1) * alto)
  const actual = Buffer.alloc(bytesFila)
  const anterior = Buffer.alloc(bytesFila)

  for (let y = 0; y < alto; y++) {
    for (let i = 0; i < bytesFila; i++) {
      actual[i] = Math.max(0, Math.min(255, Math.round(datos[y * bytesFila + i])))
    }
    const destino = y * (bytesFila + 1)
    filas[destino] = 4 // Paeth
    for (let i = 0; i < bytesFila; i++) {
      const a = i >= 3 ? actual[i - 3] : 0
      const b = anterior[i]
      const c = i >= 3 ? anterior[i - 3] : 0
      const p = a + b - c
      const pa = Math.abs(p - a)
      const pb = Math.abs(p - b)
      const pc = Math.abs(p - c)
      const prediccion = pa <= pb && pa <= pc ? a : pb <= pc ? b : c
      filas[destino + 1 + i] = (actual[i] - prediccion) & 0xff
    }
    actual.copy(anterior)
  }

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(ancho, 0)
  ihdr.writeUInt32BE(alto, 4)
  ihdr[8] = 8
  ihdr[9] = 2
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(filas, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/**
 * PNG de paleta: cuantiza a 256 colores con corte mediano y difunde el error
 * con Floyd-Steinberg.
 *
 * Por qué importa: estas imágenes son degradados oscuros con grano, y un PNG
 * de color verdadero con grano no comprime —el archivo se va a tres megas y
 * el Largest Contentful Paint con él—. En una paleta de 256 tonos, con el
 * error difundido, la banda no se ve y el archivo baja cerca de un octavo.
 */
export const pngPaleta = ({ ancho, alto, datos }, colores = 256) => {
  const n = ancho * alto

  /* Corte mediano: se parte la caja por su eje más largo, siempre la que más
     píxeles tiene, hasta llegar al número de colores pedido. */
  const indices = new Uint32Array(n)
  for (let i = 0; i < n; i++) indices[i] = i
  let cajas = [{ desde: 0, hasta: n }]

  const rango = (caja) => {
    const min = [255, 255, 255]
    const max = [0, 0, 0]
    for (let i = caja.desde; i < caja.hasta; i++) {
      const p = indices[i] * 3
      for (let c = 0; c < 3; c++) {
        const v = datos[p + c]
        if (v < min[c]) min[c] = v
        if (v > max[c]) max[c] = v
      }
    }
    return [0, 1, 2].map((c) => max[c] - min[c])
  }

  while (cajas.length < colores) {
    let mejor = -1
    let mejorPeso = 1
    for (const [i, caja] of cajas.entries()) {
      const largo = caja.hasta - caja.desde
      if (largo <= 1) continue
      const peso = largo * Math.max(...rango(caja))
      if (peso > mejorPeso) {
        mejorPeso = peso
        mejor = i
      }
    }
    if (mejor < 0) break

    const caja = cajas[mejor]
    const r = rango(caja)
    const eje = r.indexOf(Math.max(...r))
    const trozo = Array.from(indices.subarray(caja.desde, caja.hasta))
    trozo.sort((a, b) => datos[a * 3 + eje] - datos[b * 3 + eje])
    indices.set(trozo, caja.desde)
    const medio = caja.desde + (trozo.length >> 1)
    cajas.splice(mejor, 1, { desde: caja.desde, hasta: medio }, { desde: medio, hasta: caja.hasta })
  }

  /* Cada caja aporta su color medio. */
  const paleta = cajas.map((caja) => {
    const suma = [0, 0, 0]
    for (let i = caja.desde; i < caja.hasta; i++) {
      const p = indices[i] * 3
      for (let c = 0; c < 3; c++) suma[c] += datos[p + c]
    }
    const total = Math.max(1, caja.hasta - caja.desde)
    return suma.map((v) => Math.max(0, Math.min(255, Math.round(v / total))))
  })

  /* Buscar el color más cercano es lo único caro de todo esto: un millón de
     píxeles por doscientos cincuenta y seis colores. Una caché indexada por
     los cinco bits altos de cada canal lo deja en una lectura casi siempre. */
  const cache = new Int16Array(32768).fill(-1)
  const cercano = (r, g, b) => {
    const ri = r < 0 ? 0 : r > 255 ? 255 : r
    const gi = g < 0 ? 0 : g > 255 ? 255 : g
    const bi = b < 0 ? 0 : b > 255 ? 255 : b
    const clave = ((ri >> 3) << 10) | ((gi >> 3) << 5) | (bi >> 3)
    const guardado = cache[clave]
    if (guardado >= 0) return guardado
    let mejor = 0
    let mejorD = Infinity
    for (let i = 0; i < paleta.length; i++) {
      const p = paleta[i]
      const d = (p[0] - ri) ** 2 + (p[1] - gi) ** 2 + (p[2] - bi) ** 2
      if (d < mejorD) {
        mejorD = d
        mejor = i
      }
    }
    cache[clave] = mejor
    return mejor
  }

  /* Floyd-Steinberg sobre una copia, para no tocar el lienzo original. */
  const trabajo = Float32Array.from(datos)
  const salida = Buffer.alloc((ancho + 1) * alto)
  for (let y = 0; y < alto; y++) {
    salida[y * (ancho + 1)] = 0
    for (let x = 0; x < ancho; x++) {
      const i = (y * ancho + x) * 3
      const indice = cercano(trabajo[i], trabajo[i + 1], trabajo[i + 2])
      salida[y * (ancho + 1) + 1 + x] = indice
      const p = paleta[indice]
      for (let c = 0; c < 3; c++) {
        const error = trabajo[i + c] - p[c]
        const reparte = (dx, dy, k) => {
          const nx = x + dx
          const ny = y + dy
          if (nx < 0 || nx >= ancho || ny >= alto) return
          trabajo[(ny * ancho + nx) * 3 + c] += error * k
        }
        reparte(1, 0, 7 / 16)
        reparte(-1, 1, 3 / 16)
        reparte(0, 1, 5 / 16)
        reparte(1, 1, 1 / 16)
      }
    }
  }

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(ancho, 0)
  ihdr.writeUInt32BE(alto, 4)
  ihdr[8] = 8
  ihdr[9] = 3 // color: paleta
  const plte = Buffer.from(paleta.flat())
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('PLTE', plte),
    chunk('IDAT', deflateSync(salida, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

/* ------------------------------------------------------------------ */
/* Trazos                                                              */
/* ------------------------------------------------------------------ */

/** Segmento con grosor y bordes suaves: la distancia punto-segmento decide
 *  la opacidad, que es antialiasing de pobre y se ve bien. */
export const linea = (lienzo, x1, y1, x2, y2, grosor, color) => {
  const c = hex(color)
  const dx = x2 - x1
  const dy = y2 - y1
  const largo2 = dx * dx + dy * dy || 1
  const r = grosor / 2
  for (let y = Math.floor(Math.min(y1, y2) - r - 1); y <= Math.ceil(Math.max(y1, y2) + r + 1); y++) {
    for (let x = Math.floor(Math.min(x1, x2) - r - 1); x <= Math.ceil(Math.max(x1, x2) + r + 1); x++) {
      const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / largo2))
      const d = Math.hypot(x - (x1 + t * dx), y - (y1 + t * dy))
      const alfa = Math.max(0, Math.min(1, r - d + 0.5))
      if (alfa > 0) lienzo.pixel(x, y, c, alfa)
    }
  }
}
