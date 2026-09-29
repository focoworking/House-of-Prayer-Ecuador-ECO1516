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

/**
 * Las preguntas que hace quien va a dar, y que casi ningún sitio de iglesia
 * responde. Son incómodas a propósito: la confianza se gana contestando lo
 * que cuesta, y en un país donde la desconfianza institucional es la norma,
 * responderlas **es** la ventaja frente a quien no lo hace.
 *
 * TODO ECO1516: tres de estas respuestas esperan un dato que solo tiene la
 * casa —figura legal y registro, si hay vía deducible en EE. UU. o España, y
 * quién revisa las cuentas—. Están escritas para no prometer nada que no se
 * pueda sostener; cuando llegue el dato, se sustituyen por el hecho concreto.
 */
export const preguntasDonante = [
  {
    q: t('¿Cómo doy desde fuera de Ecuador?', 'How do I give from outside Ecuador?'),
    a: t(
      'Por el mismo enlace que usa quien da desde Ecuador: abre la plataforma de recaudación del Banco Pichincha y acepta tarjeta. Si desde tu país no carga o prefieres una transferencia, escríbenos y lo coordinamos contigo.',
      'Through the same link used from inside Ecuador: it opens Banco Pichincha’s collection platform and takes cards. If it does not load from your country, or you prefer a transfer, write to us and we will arrange it.'
    ),
  },
  {
    q: t('¿Cómo sé que mi donación llegó a donde dice?', 'How do I know my gift went where you say?'),
    a: t(
      'Publicamos un informe de uso de fondos cada semestre, con el desglose por área, y el avance de la construcción mes a mes, incluidos los meses en que no entra nada. Si quieres el detalle de tu propia donación, escríbenos y te lo damos.',
      'We publish a use-of-funds report every six months, broken down by area, and the building’s progress month by month — including the months when nothing comes in. If you want the detail of your own gift, write to us and we will give it to you.'
    ),
  },
  {
    q: t('¿Mi donación es deducible de impuestos?', 'Is my gift tax-deductible?'),
    a: t(
      'Depende del país desde el que das y de tu situación fiscal. Escríbenos antes de dar y te decimos con exactitud qué comprobante podemos emitirte y para qué sirve, sin prometer un beneficio que no podamos respaldar.',
      'It depends on the country you give from and on your tax situation. Write to us before giving and we will tell you exactly what receipt we can issue and what it is good for, without promising a benefit we cannot back up.'
    ),
  },
  {
    q: t('¿Puedo dar solo a una parte del proyecto?', 'Can I give to one part of the project only?'),
    a: t(
      'Sí. Puedes dirigir tu donación a una fase concreta de la construcción, a las becas de entrenamiento o a los programas de Actos de Justicia. Dínoslo al dar y se registra así.',
      'Yes. You can direct your gift to a specific phase of the building, to training scholarships, or to the Acts of Justice programmes. Tell us when you give and it is recorded that way.'
    ),
  },
  {
    q: t('¿Qué pasa si el proyecto no reúne todo el dinero?', 'What if the project does not raise all the money?'),
    a: t(
      'La construcción está dividida en tres fases justamente por eso: cada fase se ejecuta cuando está cubierta, y lo recaudado no se gasta en otra cosa. Si un proyecto se detuviera, lo decimos y acordamos con quienes dieron a dónde va lo suyo.',
      'The building is split into three phases precisely for that: each phase is carried out once it is covered, and what is raised is not spent on anything else. If a project were halted, we say so and agree with those who gave where their gift goes.'
    ),
  },
  {
    q: t('¿Reciben algún beneficio quienes dan más?', 'Do those who give more receive anything?'),
    a: t(
      'Ninguno. No hay placas, ni nombres en la pared, ni menciones públicas, ni acceso distinto a la oración, al entrenamiento o a la ayuda. «Cuando tú des limosna, no sepa tu izquierda lo que hace tu derecha» (Mt. 6:3): lo que das queda entre tú y Dios, y nosotros lo guardamos así.',
      'None. There are no plaques, no names on the wall, no public mentions, and no different access to prayer, training or help. “When thou doest alms, let not thy left hand know what thy right hand doeth” (Mt. 6:3): what you give stays between you and God, and we keep it that way.'
    ),
  },
]
