/**
 * Lo mínimo, y solo lo que mejora algo real.
 *
 * El sitio funciona entero sin JavaScript: el HTML sale del generador ya
 * completo. Aquí solo hay dos cosas que el servidor no puede saber —qué hora
 * es donde está el visitante y si prefiere menos movimiento— y una tercera
 * que es cortesía: marcar en la tabla el bloque que se está orando ahora.
 */

import { marcarTurnoActual } from './modules/turno-actual.js'
import { revelar } from './modules/revelar.js'

marcarTurnoActual()
revelar()
