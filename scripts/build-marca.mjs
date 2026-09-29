/**
 * Escribe el isotipo como archivo suelto, para usarlo fuera del sitio
 * —presentaciones, redes, imprenta— y como `logo` en los datos estructurados.
 * Dentro del sitio, la cabecera y el pie usan la versión inline, que hereda
 * el color del texto.
 */
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { isotipo } from './lib/isotipo.mjs'
import { site } from '../content/site.js'

const destino = resolve(process.cwd(), 'public/marca/eco1516-isotipo.svg')
await writeFile(destino, `${isotipo({ modo: 'archivo', titulo: site.name })}\n`, 'utf8')
console.log('public/marca/eco1516-isotipo.svg')
