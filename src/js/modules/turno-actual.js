/**
 * Marca en la tabla de turnos el bloque que se está orando en este momento,
 * en hora de Ecuador (America/Guayaquil), no en la del visitante: la sala
 * está en Quito y alguien que mira desde Madrid quiere saber qué se ora allí.
 *
 * Si no hay tabla en la página, no hace nada y no falla.
 */

const ZONA = 'America/Guayaquil'

/** La hora de Quito ahora mismo, en minutos desde medianoche. */
const minutosEnQuito = () => {
  const partes = new Intl.DateTimeFormat('es-EC', {
    timeZone: ZONA,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(new Date())
  const valor = (tipo) => Number(partes.find((p) => p.type === tipo)?.value ?? 0)
  return (valor('hour') % 24) * 60 + valor('minute')
}

export const marcarTurnoActual = () => {
  const tablas = document.querySelectorAll('.turnos tbody')
  if (!tablas.length) return

  const ahora = minutosEnQuito()

  for (const cuerpo of tablas) {
    const filas = [...cuerpo.rows]
    const inicios = filas.map((fila) => {
      const [h, m] = (fila.querySelector('time')?.textContent ?? '0:0').split(':').map(Number)
      return h * 60 + m
    })

    /* El bloque vigente es el último cuyo inicio ya pasó. Antes de las 00:00
       no hay ninguno anterior, así que se envuelve al último de la lista. */
    let indice = inicios.findLastIndex((inicio) => inicio <= ahora)
    if (indice < 0) indice = filas.length - 1

    const fila = filas[indice]
    fila.classList.add('turnos__ahora')
    const celda = fila.querySelector('th')
    if (celda && !celda.querySelector('.ahora')) {
      const etiqueta = document.createElement('span')
      etiqueta.className = 'ahora'
      etiqueta.textContent = document.documentElement.lang.startsWith('es') ? 'ahora' : 'now'
      celda.append(' ', etiqueta)
    }
  }
}
