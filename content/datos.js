/**
 * Preguntas frecuentes.
 *
 * Aquí vivían además una línea de tiempo, una tabla de doce vigilias diarias
 * y tres eventos con fecha. Se retiraron: eran material de encargo, no datos
 * de la casa, y el documento «INFORMACIÓN PARA PÁGINA WEB ECO» no los
 * sostiene. Un `Event` con fecha inventada o un horario que no se cumple
 * hacen más daño que una sección de menos, porque el sitio los publica
 * también como datos estructurados y alguien se presenta.
 *
 * TODO ECO1516: cuando la casa entregue el calendario real de la semana de
 * oración y sus próximas convocatorias, vuelven aquí como `bloques` y
 * `eventos`, y las secciones `schedule` y `events` del renderizador —que
 * siguen funcionando— las dibujan sin más trabajo.
 *
 * Regla de las respuestas: cada una abre contestando, en menos de cuarenta
 * palabras, y después amplía. Ese primer párrafo es lo que se cita en un
 * resumen de IA o en un fragmento destacado.
 */
import { t } from './site.js'

/* Vacíos a propósito, no olvidados: el renderizador y los datos
   estructurados siguen sabiendo dibujar vigilias y eventos, y en cuanto la
   casa entregue los reales basta con llenarlos aquí. Mientras estén vacíos,
   ninguna página los muestra y el JSON-LD no publica ningún Event. */
export const bloques = []
export const eventos = []

export const preguntas = [
  {
    q: t('¿Qué es ECO, Ecuador Casa de Oración?', 'What is ECO, Ecuador Casa de Oración?'),
    a: t(
      'ECO es un movimiento de oración de la Iglesia de Ecuador que reúne a pastores, congregaciones y ministerios de distintas denominaciones para sostener adoración e intercesión 24/7 cada semana. No es una denominación ni una iglesia más.',
      'ECO is a prayer movement of the Church of Ecuador that gathers pastors, congregations and ministries from different denominations to sustain 24/7 worship and intercession each week. It is not a denomination or another church.'
    ),
  },
  {
    q: t('¿Tengo que dejar mi iglesia para participar?', 'Do I have to leave my church to take part?'),
    a: t(
      'No. ECO existe para servir a la Iglesia, no para reemplazarla: los que oran juntos vienen de congregaciones distintas y siguen en ellas. Participar no cambia dónde te congregas ni a quién rindes cuentas.',
      'No. ECO exists to serve the Church, not to replace it: those who pray together come from different congregations and remain in them. Taking part changes neither where you gather nor to whom you are accountable.'
    ),
  },
  {
    q: t('¿Cómo pido oración?', 'How do I ask for prayer?'),
    a: t(
      'Escribe por WhatsApp, llama a la línea de oración o envía el formulario de la página de ayuda. Tu petición la lee el equipo de intercesión y se lleva a la oración corporativa. Es gratuito y confidencial.',
      'Send a WhatsApp message, call the prayer line or submit the form on the help page. Your request is read by the intercession team and carried into corporate prayer. It is free and confidential.'
    ),
  },
  {
    q: t('¿Qué significa «oración 24/7»?', 'What does “24/7 prayer” mean?'),
    a: t(
      'Significa adoración e intercesión sin interrupción, cubiertas por turnos entre las congregaciones del movimiento. Hoy se sostiene 24/7 cada semana, y el propósito declarado es que llegue a ser continua, todos los días del año.',
      'It means worship and intercession without interruption, covered in shifts across the congregations of the movement. Today it is sustained 24/7 each week, and the stated aim is for it to become continuous, every day of the year.'
    ),
  },
  {
    q: t('¿Dónde se reúnen?', 'Where do you meet?'),
    a: t(
      'Hoy la oración se sostiene en las congregaciones que forman el movimiento, en Quito y en otras ciudades. El cuarto de oración propio —un lugar permanente para la oración 24/7— está en construcción al norte de Quito.',
      'Today prayer is sustained in the congregations that make up the movement, in Quito and other cities. Our own prayer room — a permanent place for 24/7 prayer — is being built in northern Quito.'
    ),
  },
  {
    q: t('¿Cuánto cuesta participar?', 'What does it cost to take part?'),
    a: t(
      'Nada. La oración, los entrenamientos en línea y la ayuda de los programas de justicia no se cobran ni se condicionan a una ofrenda. El movimiento se sostiene con donaciones voluntarias.',
      'Nothing. Prayer, the online training and the help given through the justice programmes are never charged for or made conditional on an offering. The movement is sustained by voluntary giving.'
    ),
  },
  {
    q: t('¿En qué se usa lo que dono?', 'What is my giving used for?'),
    a: t(
      'Hoy, principalmente en la construcción del cuarto de oración al norte de Quito, dividida en tres fases: obra gris, terminados y amoblamiento. Lo demás sostiene los entrenamientos y los programas de Actos de Justicia.',
      'Today, mainly in building the prayer room in northern Quito, in three phases: shell, finishes and furnishing. The rest sustains the training and the Acts of Justice programmes.'
    ),
  },
  {
    q: t('¿Trabajan fuera de Ecuador?', 'Do you work outside Ecuador?'),
    a: t(
      'Sí. ECO sirve a la Iglesia con entrenamientos presenciales y en línea, y con conferencias en diferentes países, en relación con el resto del cuerpo de Cristo dentro y fuera del país.',
      'Yes. ECO serves the Church with in-person and online training, and with conferences in different countries, working alongside the rest of the body of Christ inside and outside Ecuador.'
    ),
  },
]
