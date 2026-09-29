/**
 * La campaña: metas, niveles de siembra y las cifras del país con las que se
 * sostiene el caso.
 *
 * Dos decisiones de fondo, explicadas en CASO.md, que este archivo hace
 * cumplir por diseño:
 *
 *  1. **La meta pública es la fase uno, no el proyecto entero.** $200.000 no
 *     es una petición, es un muro: nadie escribe ese cheque y quien podría dar
 *     cien dólares siente que no mueve nada. $85.000 se puede cumplir, y una
 *     meta cumplida genera el impulso de la siguiente.
 *
 *  2. **El contador no se publica en cero.** `recaudado` empieza en `null` y
 *     mientras lo esté, la página muestra la meta y las fases pero ninguna
 *     barra. Un contador en cero dice «esto no arranca» y es el error que más
 *     campañas pequeñas entierra. Se llena cuando la fase silenciosa haya
 *     comprometido entre la mitad y dos tercios.
 */
import { t } from './site.js'
import { proyecto } from './eco.js'

export const campana = {
  /** La fase que está abierta al público ahora mismo. */
  faseActual: 0,
  meta: proyecto.fases[0].costo,

  /* TODO ECO1516: poner aquí el total comprometido cuando la fase silenciosa
     pase del 50 %, y actualizarlo cada mes. Mientras sea `null` no se dibuja
     ninguna barra, que es lo correcto. */
  recaudado: null,

  /** Cuándo se actualizó la cifra de arriba. Se publica junto a la barra: un
   *  contador sin fecha no dice nada. */
  actualizado: null,

  moneda: 'USD',
}

/**
 * Los niveles de siembra. El metro cuadrado a mil dólares no es un invento de
 * campaña: sale de los propios números del proyecto —200 m² por $1.000 el
 * metro— y por eso se cuenta solo. Doscientas familias y el edificio está
 * pagado.
 */
export const niveles = [
  {
    monto: 25,
    nombre: t('Un saco de cemento', 'A bag of cement'),
    texto: t('Lo puede dar un estudiante. Suma con los demás.', 'A student can give this. It adds up with the rest.'),
  },
  {
    monto: 100,
    nombre: t('Un día de obra', 'A day of work'),
    texto: t('Una jornada completa en la construcción.', 'One full day on the building site.'),
  },
  {
    monto: 1000,
    nombre: t('Un metro cuadrado', 'One square metre'),
    texto: t(
      'Con tu nombre, o el de tu familia, en el registro de fundadores del cuarto de oración.',
      'With your name, or your family’s, in the founders’ register of the prayer room.'
    ),
    destacado: true,
  },
  {
    monto: 5000,
    nombre: t('Cinco metros', 'Five square metres'),
    texto: t('Una esquina entera del salón de oración.', 'A whole corner of the prayer hall.'),
  },
  {
    monto: 25000,
    nombre: t('El amoblamiento', 'The furnishing'),
    texto: t('La tercera fase completa del proyecto.', 'The entire third phase of the project.'),
  },
  {
    monto: 85000,
    nombre: t('La obra gris', 'The structural shell'),
    texto: t('La primera fase entera: cimientos y paredes.', 'The whole first phase: foundations and walls.'),
  },
]

/**
 * El contexto del país, con fuente.
 *
 * Regla: cada cifra lleva su enlace y ninguna va acompañada de fotos de
 * víctimas. La dignidad de quien sufre no es material de campaña, y una cifra
 * que no resiste una pregunta cuesta más que todo lo que recaudó.
 */
export const contexto = [
  {
    valor: '9.216',
    label: t(
      'homicidios en Ecuador en 2025, el año más violento de su historia',
      'homicides in Ecuador in 2025, the most violent year in its history'
    ),
    fuente: 'https://www.primicias.ec/seguridad/ecuador-homicidios-asesinatos-violencia-crimen-organizado-2025-114304/',
  },
  {
    valor: '504',
    label: t(
      'niños y adolescentes asesinados entre enero y junio de 2025, un 68 % más que el año anterior',
      'children and adolescents killed between January and June 2025, up 68 % on the year before'
    ),
    fuente: 'https://www.hrw.org/es/world-report/2026/country-chapters/ecuador',
  },
  {
    valor: '13 %',
    label: t(
      'de evangélicos en Ecuador, desde el 3,28 % de 1985, creciendo sobre todo en los barrios marginales',
      'evangelicals in Ecuador, up from 3.28 % in 1985, growing above all in marginalised neighbourhoods'
    ),
    fuente: 'https://protestantedigital.com/internacional/22517/explosivo-crecimiento-de-los-cristianos-evangelicos-en-ecuador',
  },
]

/** Las remesas, que son la razón por la que hay una página para la diáspora. */
export const remesas = {
  total2025: 7729,
  proyeccion2026: 8020,
  desdeEstadosUnidos: 6010,
  desdeEspana: 1087,
  porcentajePib: 5.9,
  fuente: 'https://www.primicias.ec/economia/remesas-migrantes-ecuatorianos-banco-central-informe-pib2025-119625/',
}
