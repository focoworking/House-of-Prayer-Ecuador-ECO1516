/**
 * La parrilla de la semana: quién cubre cada hora.
 *
 * Es el corazón operativo de una casa de oración y, de paso, su mejor
 * instrumento de reclutamiento. «Únete a orar» no mueve a nadie. Una
 * cuadrícula donde se ve que el jueves a las 3 de la madrugada no hay nadie
 * mueve muchísimo: el hueco pide, y pide por sí solo.
 *
 * Funciona al revés que el contador de la campaña. Allí lo que llama es lo
 * que ya está lleno; aquí lo que llama es lo que falta.
 *
 * **La parrilla empieza vacía a propósito.** Publicar horarios inventados en
 * la página de una casa de oración es peor que no publicar ninguno: alguien
 * se presenta un martes a las once y no hay nadie. Mientras `cobertura` esté
 * vacío, la sección no se dibuja.
 *
 * TODO ECO1516: volcar aquí la parrilla real. Sale de donde esté hoy —una
 * hoja de cálculo, un grupo de WhatsApp o la cabeza del coordinador— y una
 * vez volcada se mantiene sola: cada cambio es una línea.
 */
import { t } from './site.js'

/** De lunes a domingo. El índice 0 es lunes, que es como se arma una semana
 *  de turnos, no como la dibuja un calendario de escritorio. */
export const dias = [
  t('Lunes', 'Monday'),
  t('Martes', 'Tuesday'),
  t('Miércoles', 'Wednesday'),
  t('Jueves', 'Thursday'),
  t('Viernes', 'Friday'),
  t('Sábado', 'Saturday'),
  t('Domingo', 'Sunday'),
]

/**
 * Cada hora cubierta es una línea: día (0 = lunes), hora (0 a 23) y quién la
 * sostiene. Una hora que no aparece aquí está libre, y así es como el sitio
 * sabe qué pedir.
 *
 * Ejemplo de una línea, para cuando llegue el dato real:
 *   { dia: 0, hora: 6, equipo: 'Sendero de la Vida Cristiana', ciudad: 'Quito' }
 */
export const cobertura = []

/** El texto que explica el modelo de la semana. Se publica junto a la
 *  parrilla, porque una cuadrícula sin explicación se malinterpreta. */
export const modeloSemana = t(
  'Cada hora la sostiene un equipo de una congregación del movimiento. Tomar una hora significa sostenerla cada semana, no una sola vez: eso es lo que hace que la oración no se interrumpa.',
  'Each hour is held by a team from one of the movement’s congregations. Taking an hour means holding it every week, not once: that is what keeps the prayer from breaking.'
)

export const TOTAL_HORAS = 7 * 24
