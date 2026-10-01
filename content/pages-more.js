/**
 * Nosotros, el proyecto del cuarto de oración, los montes, actos de
 * justicia, formación, dar, recursos, contacto, preguntas y privacidad.
 *
 * Todo sale del documento «INFORMACIÓN PARA PÁGINA WEB ECO» —ver
 * content/eco.js—. Las citas conservan la versión que usa ese documento:
 * RVR1960 salvo donde dice NVI, y entonces se marca NVI.
 */
import { t, site, emergencia } from './site.js'
import { queEs, objetivos, temasIntercesion, proyecto, actosDeJusticia, beneficiarios, montes as montesTexto } from './eco.js'
import { preguntas, preguntasDonante } from './datos.js'
import { campana, remesas } from './campana.js'
import { areas } from './obra.js'

const dolares = (n) => `$${n.toLocaleString('en-US')}`

export const nosotros = {
  slug: { es: 'nosotros', en: 'about' },
  title: t('Quiénes somos — ECO, movimiento de oración de Ecuador', 'About us — ECO, a prayer movement of Ecuador'),
  description: t(
    'ECO reúne a pastores, congregaciones y ministerios de distintas denominaciones de Ecuador en adoración e intercesión 24/7. Estos son sus cuatro objetivos.',
    'ECO gathers pastors, congregations and ministries from different denominations in Ecuador in 24/7 worship and intercession. These are its aims and what it holds to.'
  ),
  priority: 0.8,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Quiénes somos', 'About us'),
      title: t('Un movimiento, no una denominación.', 'A movement, not a denomination.'),
      lead: t(
        'ECO no es una iglesia más ni pide que nadie deje la suya. Es la Iglesia de Ecuador orando junta: pastores, congregaciones y ministerios de tradiciones distintas que sostienen un mismo altar.',
        'ECO is not another church and asks no one to leave theirs. It is the Church of Ecuador praying together: pastors, congregations and ministries from different traditions holding one altar.'
      ),
      verse: {
        text: t(
          '«Después de esto volveré y reedificaré el tabernáculo de David, que está caído; y repararé sus ruinas, y lo volveré a levantar.»',
          '“After this I will return, and will build again the tabernacle of David, which is fallen down; and I will build again the ruins thereof, and I will set it up.”'
        ),
        ref: 'Hechos 15:16',
      },
    },
    { type: 'lead', title: t('Qué es ECO', 'What ECO is'), text: queEs },
    {
      type: 'split',
      title: t('Cómo empezó', 'How it began'),
      text: t(
        `ECO nació en ${site.foundedMonth.es} en Quito. Hernán y Janeth Robalino, pastores fundadores de la congregación El Sendero de la Vida Cristiana, recibieron del Señor la carga por el llamado sacerdotal de la Iglesia y por la oración unida del pueblo de Dios como su medio de gobierno. De ahí salió el movimiento, y de ahí sale su forma: no una obra propia, sino congregaciones distintas sosteniendo un mismo altar.`,
        `ECO began in ${site.foundedMonth.en} in Quito. Hernán and Janeth Robalino, founding pastors of the congregation El Sendero de la Vida Cristiana, received from the Lord a burden for the priestly calling of the Church and for the united prayer of God’s people as His means of government. The movement came out of that, and so did its shape: not a work of its own, but different congregations holding one altar.`
      ),
      items: [
        t('Pastores fundadores: Hernán y Janeth Robalino', 'Founding pastors: Hernán and Janeth Robalino'),
        t('Congregación de origen: El Sendero de la Vida Cristiana, Quito', 'Home congregation: El Sendero de la Vida Cristiana, Quito'),
        t('Desde octubre de 2012, creciendo con más pastores cada año', 'Since October 2012, growing with more pastors each year'),
      ],
      action: { label: t('Sitio de los pastores', 'The pastors’ site'), href: site.founderSite, external: true },
    },
    {
      type: 'rows',
      title: t('Los cuatro objetivos', 'The four aims'),
      items: objetivos.map((texto, i) => ({
        title: [
          t('Oración 24/7 como cultura', '24/7 prayer as culture'),
          t('Equipar a la Iglesia', 'Equipping the Church'),
          t('Preparar a la Novia', 'Preparing the Bride'),
          t('Una generación de discípulos íntimos', 'A generation of intimate disciples'),
        ][i],
        text: texto,
      })),
    },
    {
      type: 'lead',
      title: t('La Gran Comisión', 'The Great Commission'),
      text: t(
        'ECO promueve la Gran Comisión y la predicación del Evangelio del Reino de Dios con sanidades y milagros, movilizando a familias, pequeños y grandes, para salir a las calles en busca de los perdidos.',
        'ECO promotes the Great Commission and the preaching of the Gospel of the Kingdom with healings and miracles, mobilising families, young and old, to go out to the streets in search of the lost.'
      ),
    },
    {
      type: 'checklist',
      title: t('Lo que no hacemos', 'What we do not do'),
      items: [
        t('No cobramos por oración, por entrenamiento ni por la ayuda de los programas de justicia.', 'We do not charge for prayer, training, or the help given through the justice programmes.'),
        t('No vendemos sanidad, milagros ni profecía: creemos que Dios sana, y no lo condicionamos a una ofrenda.', 'We do not sell healing, miracles or prophecy: we believe God heals, and we never make it conditional on an offering.'),
        t('No pedimos a nadie que deje su congregación ni que rinda cuentas a ECO en lugar de a su pastor.', 'We do not ask anyone to leave their congregation or to be accountable to ECO instead of their pastor.'),
        t('No publicamos peticiones de oración ni nombres sin permiso explícito.', 'We do not publish prayer requests or names without explicit permission.'),
        t('No reemplazamos atención médica, psicológica ni servicios de emergencia.', 'We do not replace medical care, psychological care or emergency services.'),
      ],
    },
    {
      type: 'scripture',
      text: t(
        'Porque la tierra será llena del conocimiento de la gloria de Jehová, como las aguas cubren el mar.',
        'For the earth shall be filled with the knowledge of the glory of the LORD, as the waters cover the sea.'
      ),
      ref: 'Habacuc 2:14',
    },
    {
      type: 'lead',
      title: t('La restauración del tabernáculo de David', 'The restoration of David’s tabernacle'),
      text: t(
        'Una de las profecías para los últimos tiempos es la restauración del Tabernáculo de David (Hch. 15:16-17). Creemos que vivimos en el tiempo de la generación en la cual el Señor regresará. ECO busca preparar a esta generación de creyentes con un corazón conforme al de Dios: creyentes que adoren, sirvan y amen a Dios con todo el corazón, con una pasión santa. Estableceremos la oración incesante día y noche hasta que la gloria y el conocimiento de Dios alcancen los confines de la tierra.',
        'One of the prophecies for the last days is the restoration of the Tabernacle of David (Acts 15:16-17). We believe we live in the time of the generation in which the Lord will return. ECO seeks to prepare this generation of believers with a heart after God’s own: believers who worship, serve and love God with all their heart, with a holy passion. We will establish unceasing prayer day and night until the glory and knowledge of God reach the ends of the earth.'
      ),
    },
    {
      type: 'cta',
      title: t('Ora con nosotros', 'Pray with us'),
      text: t('La forma más rápida de conocer este movimiento es tomar un turno de la semana de oración.', 'The fastest way to know this movement is to take a shift in the week of prayer.'),
      actions: [
        { label: t('Ver la oración 24/7', 'See the 24/7 prayer'), href: { es: '/oracion', en: '/en/prayer-24-7' }, kind: 'primary' },
        { label: t('Escribirnos', 'Write to us'), href: { es: '/contacto', en: '/en/contact' }, kind: 'ghost' },
      ],
    },
  ],
}

export const proyectoPagina = {
  slug: { es: 'proyecto', en: 'prayer-room-project' },
  title: t(
    'El Cuarto de Oración — proyecto de construcción en Quito',
    'The Prayer Room — a building project in Quito'
  ),
  description: t(
    'Un lugar físico para la oración 24/7 al norte de Quito: 200 m² en dos plantas y tres fases, con un costo aproximado de $200.000.',
    'A physical place for 24/7 prayer in northern Quito: 200 m² over two floors, in three phases, at an approximate cost of $200,000. You can give towards any of them.'
  ),
  priority: 0.85,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Proyecto', 'Project'),
      title: t('El lugar de reposo de Dios', 'The resting place of God'),
      lead: t(
        `El terreno ya está donado. ${proyecto.descripcion.es}`,
        `The land is already donated. ${proyecto.descripcion.en}`
      ),
      actions: [
        { label: t('Dar al proyecto', 'Give towards the project'), href: site.giveUrl, kind: 'primary', external: true },
        { label: t('Hablar con el equipo', 'Talk to the team'), href: { es: '/contacto', en: '/en/contact' }, kind: 'ghost' },
      ],
      verse: {
        text: t(
          '«Mi casa, casa de oración será llamada.»',
          '“My house shall be called the house of prayer.”'
        ),
        ref: 'Mateo 21:13',
      },
    },
    {
      type: 'stats',
      items: [
        { value: `${proyecto.superficie} m²`, label: t('En dos plantas, sobre terreno ya donado', 'Over two floors, on land already donated') },
        { value: dolares(proyecto.costoTotal), label: t('Costo aproximado del proyecto', 'Approximate cost of the project') },
        { value: '3', label: t('Fases, y se puede aportar a cualquiera', 'Phases — you can give towards any of them') },
      ],
    },
    {
      type: 'galeria',
      title: t('Así va a quedar', 'This is how it will look'),
      lead: t(
        'Renders del proyecto arquitectónico. El terreno está donado y la obra ya empezó: esto no es una idea, es un plano en ejecución.',
        'Renders of the architectural project. The land is donated and the build has started: this is not an idea, it is a drawing being executed.'
      ),
      items: [
        {
          src: '/img/obra/render-exterior.jpg',
          w: 975,
          h: 960,
          alt: t(
            'Render del edificio terminado: dos plantas, escalera exterior de hormigón, ventanales y volumen de madera en la planta alta.',
            'Render of the finished building: two floors, an external concrete stair, large windows and a timber-clad volume on the upper floor.'
          ),
          caption: t('El edificio desde la calle.', 'The building from the street.'),
        },
        {
          src: '/img/obra/render-salon.jpg',
          w: 1600,
          h: 900,
          alt: t(
            'Render del salón de oración: sillas dispuestas frente a un frente de madera con púlpito, ventanal a la calle y jardines verticales.',
            'Render of the prayer hall: chairs facing a timber wall with a lectern, a window onto the street and vertical gardens.'
          ),
          caption: t(
            'El salón de la planta baja: el lugar de la oración 24/7.',
            'The ground-floor hall: the place of 24/7 prayer.'
          ),
        },
        {
          src: '/img/obra/render-oficina.jpg',
          w: 1600,
          h: 900,
          alt: t(
            'Render de la sala de reuniones de la planta alta, con mesa larga y piso de madera.',
            'Render of the upper-floor meeting room, with a long table and wooden floor.'
          ),
          caption: t(
            'Arriba: oficinas y el aula de entrenamiento para la Iglesia.',
            'Upstairs: offices and the training room for the Church.'
          ),
        },
      ],
    },
    {
      type: 'rows',
      title: t('Qué se construye', 'What is being built'),
      items: proyecto.programa.map((texto, i) => ({
        title: [t('Primer piso', 'Ground floor'), t('Segundo piso', 'First floor')][i],
        text: texto,
      })),
    },
    {
      type: 'cards',
      title: t('Las tres fases', 'The three phases'),
      lead: t(
        `Tomando como referencia el costo de construcción en Quito, ${dolares(proyecto.costoMetro)} por metro cuadrado con acabados medios.`,
        `Based on construction costs in Quito, ${dolares(proyecto.costoMetro)} per square metre with mid-range finishes.`
      ),
      items: proyecto.fases.map((fase) => ({
        title: fase.nombre,
        text: t(
          `${fase.detalle.es} Costo aproximado: ${dolares(fase.costo)} dólares americanos.`,
          `${fase.detalle.en} Approximate cost: ${dolares(fase.costo)} US dollars.`
        ),
      })),
    },
    {
      type: 'lead',
      title: t('El primer paso ya está dado', 'The first step is already taken'),
      text: t(
        'El terreno donde va el cuarto de oración fue donado. No pedimos para comprar un lote: pedimos para levantar lo que va encima. Y una parte del presupuesto ya está reunida.',
        'The land where the prayer room will stand was donated. We are not asking to buy a plot: we are asking to raise what goes on top of it. And part of the budget has already been gathered.'
      ),
    },
    {
      type: 'meta',
      title: t('Lo que estamos pidiendo ahora', 'What we are asking for now'),
      lead: t(
        'No pedimos los $200.000 de golpe: pedimos la primera fase. Cada fase se construye cuando está cubierta, y lo recaudado para una no se gasta en otra.',
        'We are not asking for the full $200,000 at once: we are asking for the first phase. Each phase is built once it is covered, and what is raised for one is not spent on another.'
      ),
      action: { label: t('Dar a la primera fase', 'Give towards the first phase'), href: site.giveUrl },
    },
    {
      type: 'niveles',
      title: t('Doscientos metros, doscientas familias', 'Two hundred metres, two hundred families'),
      lead: t(
        'Un metro cuadrado son mil dólares. Esa es la cuenta entera del edificio, y cabe en una frase.',
        'One square metre is a thousand dollars. That is the whole sum of the building, and it fits in one sentence.'
      ),
    },
    {
      type: 'lead',
      title: t('Por qué un lugar físico', 'Why a physical place'),
      text: t(
        'La Palabra identifica a la Iglesia como Templo de Oración y medio del gobierno de Dios en las naciones. Un lugar propio permite que pastores y creyentes de todas las congregaciones se reúnan para la oración 24/7 sin depender de agendas prestadas ni de salones compartidos.',
        'Scripture identifies the Church as a Temple of Prayer and the means of God’s government in the nations. A place of our own lets pastors and believers from every congregation gather for 24/7 prayer without depending on borrowed schedules or shared halls.'
      ),
    },
    {
      type: 'cta',
      title: t('Te invitamos a ser parte de este proyecto', 'We invite you to be part of this project'),
      text: t('Agradecemos tus donaciones y tus oraciones.', 'We are grateful for your giving and your prayers.'),
      actions: [
        { label: t('Dar ahora', 'Give now'), href: site.giveUrl, kind: 'primary', external: true },
        { label: t('Aportar mi oficio', 'Contribute my trade'), href: { es: '/construir', en: '/en/build' }, kind: 'ghost' },
      ],
    },
  ],
}

export const montes = {
  slug: { es: 'montes', en: 'mountains' },
  title: t('Oración profética desde los montes', 'Prophetic prayer from the mountains'),
  description: t(
    'Movilizamos a la Iglesia a los montes para proclamar desde las alturas el mensaje del Reino a las naciones, alzando sus banderas con oraciones y cánticos proféticos.',
    'We mobilise the Church to the mountains to proclaim the message of the Kingdom to the nations from the heights, raising their flags with prayers and prophetic songs.'
  ),
  priority: 0.7,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Desde las alturas', 'From the heights'),
      title: t('Oración profética desde los montes', 'Prophetic prayer from the mountains'),
      lead: montesTexto.texto,
      verse: {
        text: t(
          '«Portadora de buenas noticias a Sión, súbete a una alta montaña. Portadora de buenas noticias a Jerusalén, alza con fuerza tu voz.»',
          '“You who bring good news to Zion, go up on a high mountain. You who bring good news to Jerusalem, lift up your voice with a shout.”'
        ),
        ref: 'Isaías 40:9 (NVI)',
      },
    },
    {
      type: 'figure',
      src: '/img/amanecer.png',
      w: 2000,
      h: 1125,
      alt: t(
        'Amanecer sobre la cordillera andina, con las cadenas de montañas cada vez más claras hacia el horizonte.',
        'Dawn over the Andean cordillera, ranges growing paler towards the horizon.'
      ),
      caption: t(
        'Los montes del Ecuador, desde donde se proclama el mensaje del Reino a las naciones.',
        'The mountains of Ecuador, from which the message of the Kingdom is proclaimed to the nations.'
      ),
    },
    {
      type: 'lead',
      title: t('Las banderas de las naciones', 'The flags of the nations'),
      text: montesTexto.banderas,
    },
    {
      type: 'scripture',
      text: t(
        '«Álzala, no temas; di a las ciudades de Judá: “¡Aquí está su Dios!”. Miren, el Señor y Dios llega con poder y con su brazo gobierna. Su galardón lo acompaña; su recompensa lo precede.»',
        '“Lift it up, do not be afraid; say to the towns of Judah, ‘Here is your God!’ See, the Sovereign LORD comes with power, and he rules with a mighty arm. See, his reward is with him, and his recompense accompanies him.”'
      ),
      ref: 'Isaías 40:9-10 (NVI)',
    },
    {
      type: 'cta',
      title: t('Sube con nosotros', 'Come up with us'),
      text: t(
        'Escríbenos para saber cuándo es la próxima subida y cómo prepararte.',
        'Write to us to find out when the next climb is and how to prepare.'
      ),
      actions: [{ label: t('Escribir', 'Write'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' }],
    },
  ],
}

export const justicia = {
  slug: { es: 'justicia', en: 'justice' },
  title: t('Actos de justicia — vivienda, familia y misiones integrales', 'Acts of justice — housing, family and integral missions'),
  description: t(
    'Vivienda solidaria, restauración familiar y misiones integrales para niños, madres solteras, personas enfermas, adultos mayores y familias vulnerables en Ecuador.',
    'Solidarity housing, family restoration and integral missions for children, single mothers, the sick, the elderly and vulnerable families in Ecuador.'
  ),
  priority: 0.8,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Actos de justicia', 'Acts of justice'),
      title: t('El amor al prójimo se demuestra haciendo.', 'Love of neighbour is shown by doing.'),
      lead: t(
        'Nuestra pasión por Dios y el amor al prójimo nos conmueve a realizar actos de justicia en favor de las personas más vulnerables. Por esta razón la ayuda a los más necesitados forma parte de nuestro estilo de vida y servicio.',
        'Our passion for God and love for our neighbour moves us to acts of justice for the most vulnerable. That is why helping those in greatest need is part of our way of life and service.'
      ),
      actions: [
        { label: t('Quiero ayudar', 'I want to help'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' },
        { label: t('Necesito ayuda', 'I need help'), href: { es: '/ayuda', en: '/en/help' }, kind: 'ghost' },
      ],
      verse: {
        text: t(
          '«Sólo nos pidieron que nos acordáramos de los pobres, y eso es precisamente lo que he venido haciendo con esmero.»',
          '“All they asked was that we should continue to remember the poor, the very thing I had been eager to do all along.”'
        ),
        ref: 'Gálatas 2:10 (NVI)',
      },
    },
    {
      type: 'cards',
      title: t('Los tres programas', 'The three programmes'),
      items: actosDeJusticia.map((programa) => ({ title: programa.nombre, text: programa.texto })),
    },
    {
      type: 'figure',
      src: '/img/ciudad.png',
      w: 1500,
      h: 1125,
      alt: t(
        'Quito al amanecer vista desde el cerro: torres en lavanda recortadas sobre un cielo claro.',
        'Quito at dawn seen from the hillside: towers in lavender against a pale sky.'
      ),
      caption: t(
        'Los barrios marginados de las ciudades grandes y las comunidades del campo son donde trabajan los programas.',
        'The marginalised neighbourhoods of the large cities and the rural communities are where the programmes work.'
      ),
    },
    {
      type: 'lead',
      title: t('A quiénes benefician', 'Who they serve'),
      text: beneficiarios,
    },
    {
      type: 'lead',
      title: t('No podemos solos', 'We cannot do it alone'),
      text: t(
        'La necesidad está más allá de nuestras posibilidades y solos no la podemos sobrellevar. Le invitamos a unirse a esta noble causa apoyándonos de la manera que sea posible.',
        'The need is beyond our means and we cannot carry it alone. We invite you to join this noble cause, supporting us in whatever way you can.'
      ),
    },
    {
      type: 'cta',
      title: t('Súmate como puedas', 'Join in however you can'),
      text: t(
        'Con tiempo, con materiales, con tu oficio o con dinero. Cuéntanos qué puedes aportar y lo encajamos donde más falta hace.',
        'With time, materials, a trade or a gift. Tell us what you can offer and we will put it where it is most needed.'
      ),
      actions: [
        { label: t('Escribir', 'Write'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' },
        { label: t('Dar', 'Give'), href: site.giveUrl, kind: 'ghost', external: true },
      ],
    },
  ],
}

export const formacion = {
  slug: { es: 'formacion', en: 'training' },
  title: t('Entrenamientos y conferencias — ECO', 'Training and conferences — ECO'),
  description: t(
    'Entrenamientos presenciales y en línea y conferencias en diferentes países, para restaurar y establecer la oración 24/7 en la Iglesia.',
    'In-person and online training and conferences in different countries, to restore and establish 24/7 prayer in the Church.'
  ),
  priority: 0.75,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Formación', 'Training'),
      title: t('Equipar a la Iglesia para sostener el altar.', 'Equipping the Church to hold the altar.'),
      lead: t(
        'ECO sirve a la Iglesia de Cristo con entrenamientos presenciales y en línea, y con conferencias en diferentes países, con el firme propósito de establecer la oración como la Cultura de la Iglesia y el medio del gobierno de Dios en la tierra.',
        'ECO serves the Church of Christ with in-person and online training, and with conferences in different countries, with the firm purpose of establishing prayer as the Culture of the Church and the means of God’s government on the earth.'
      ),
      actions: [{ label: t('Pedir información', 'Ask for details'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' }],
      verse: {
        text: t(
          '«Y después de esto derramaré mi Espíritu sobre toda carne, y profetizarán vuestros hijos y vuestras hijas.»',
          '“And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy.”'
        ),
        ref: 'Joel 2:28',
      },
    },
    {
      type: 'cards',
      title: t('Tres formas de recibirlo', 'Three ways to receive it'),
      items: [
        {
          title: t('Entrenamiento presencial', 'In-person training'),
          text: t(
            'Para el equipo de una congregación que va a tomar un turno de la semana de oración: intercesión corporativa, adoración profética y cómo se sostiene un turno.',
            'For the team of a congregation about to take a shift in the week of prayer: corporate intercession, prophetic worship, and how a shift is held.'
          ),
        },
        {
          title: t('Entrenamiento en línea', 'Online training'),
          text: t(
            'El mismo contenido para equipos de otras ciudades y de otros países, sin que nadie tenga que viajar.',
            'The same content for teams in other cities and countries, with nobody having to travel.'
          ),
        },
        {
          title: t('Conferencias', 'Conferences'),
          text: t(
            'En Ecuador y en diferentes países, en relación con el resto del cuerpo de Cristo dentro y fuera del país.',
            'In Ecuador and in different countries, alongside the rest of the body of Christ inside and outside the country.'
          ),
        },
      ],
    },
    {
      type: 'lead',
      title: t('Para qué', 'What it is for'),
      text: objetivos[1],
    },
    {
      type: 'cta',
      title: t('Pide el entrenamiento para tu equipo', 'Request the training for your team'),
      text: t(
        'Cuéntanos de qué congregación vienen, cuántos son y si lo quieren presencial o en línea.',
        'Tell us which congregation you come from, how many you are, and whether you want it in person or online.'
      ),
      actions: [{ label: t('Escribir', 'Write'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' }],
    },
  ],
}

export const dar = {
  slug: { es: 'dar', en: 'give' },
  title: t('Dar — construir el cuarto de oración', 'Give — building the prayer room'),
  description: t(
    'Aporta a la primera fase del cuarto de oración: $85.000 para cimientos y paredes. Desde $25, o un metro cuadrado completo por $1.000.',
    'Give towards the first phase of the prayer room: $85,000 for foundations and walls. From $25, or a whole square metre for $1,000.'
  ),
  priority: 0.85,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Dar', 'Give'),
      title: t('Doscientas familias, y el altar tiene casa.', 'Two hundred families, and the altar has a home.'),
      lead: t(
        'El cuarto de oración son 200 metros cuadrados a mil dólares el metro. Esa es la cuenta entera: doscientos metros, doscientas familias. Empezamos por la primera fase, los cimientos y las paredes.',
        'The prayer room is 200 square metres at a thousand dollars each. That is the whole sum: two hundred metres, two hundred families. We begin with the first phase, the foundations and the walls.'
      ),
      actions: [
        { label: t('Dar ahora', 'Give now'), href: site.giveUrl, kind: 'primary', external: true },
        { label: t('Ver el proyecto', 'See the project'), href: { es: '/proyecto', en: '/en/prayer-room-project' }, kind: 'ghost' },
      ],
    },
    {
      type: 'meta',
      title: t('La meta abierta hoy', 'The goal open today'),
      lead: t(
        'No pedimos los $200.000 del proyecto entero: pedimos la primera fase. Es una cifra que se puede cumplir, y cada fase se ejecuta cuando está cubierta.',
        'We are not asking for the project’s full $200,000: we are asking for the first phase. It is a figure that can be met, and each phase is built once it is covered.'
      ),
      action: { label: t('Dar a la primera fase', 'Give towards the first phase'), href: site.giveUrl },
    },
    {
      type: 'niveles',
      title: t('Cuánto quieres dar', 'How much you want to give'),
      lead: t(
        'Cada cantidad dice para qué alcanza, porque «veinticinco dólares» no significa nada y «un saco de cemento» sí.',
        'Each amount says what it covers, because “twenty-five dollars” means nothing and “a bag of cement” does.'
      ),
      note: t(
        'El enlace abre la plataforma de recaudación del Banco Pichincha, donde escribes el monto. Puedes dar una vez o volver cuando quieras: no queda ninguna suscripción activa.',
        'The link opens Banco Pichincha’s collection platform, where you enter the amount. You can give once or come back whenever you want: no subscription is left running.'
      ),
    },
    {
      type: 'rows',
      title: t('A dónde va', 'Where it goes'),
      items: [
        {
          title: t('El cuarto de oración', 'The prayer room'),
          text: t(
            `La construcción al norte de Quito: ${proyecto.superficie} m² en dos plantas, ${dolares(proyecto.costoTotal)} en tres fases. Es la línea que más hace falta hoy.`,
            `The building in northern Quito: ${proyecto.superficie} m² over two floors, ${dolares(proyecto.costoTotal)} in three phases. This is the line most needed today.`
          ),
        },
        {
          title: t('Los entrenamientos', 'The training'),
          text: t(
            'Presenciales y en línea, para que cada congregación que quiera sostener un turno pueda hacerlo bien.',
            'In person and online, so every congregation that wants to hold a shift can do it well.'
          ),
        },
        {
          title: t('Actos de justicia', 'Acts of justice'),
          text: t(
            'Vivienda solidaria, restauración familiar y misiones integrales: materiales, alimentos, útiles escolares y medicinas.',
            'Solidarity housing, family restoration and integral missions: materials, food, school supplies and medicine.'
          ),
        },
      ],
    },
    {
      type: 'checklist',
      title: t('Nuestro compromiso con quien da', 'Our commitment to those who give'),
      items: [
        t('Publicamos el uso de fondos cada semestre y el avance de obra cada mes, también los meses en que no entra nada.', 'We publish the use of funds every six months and the building’s progress monthly — including the months when nothing comes in.'),
        t('Cada fase se ejecuta cuando está cubierta. Lo recaudado no se gasta en otra cosa.', 'Each phase is built once it is covered. What is raised is not spent on anything else.'),
        t('Ninguna donación cambia el acceso de nadie a la oración, al entrenamiento o a la ayuda.', 'No donation changes anyone’s access to prayer, training or help.'),
        t('No hay placas, ni nombres en la pared, ni menciones públicas por dar: «no sepa tu izquierda lo que hace tu derecha» (Mt. 6:3).', 'There are no plaques, names on the wall or public mentions for giving: “let not thy left hand know what thy right hand doeth” (Mt. 6:3).'),
        t('No vendemos, cedemos ni intercambiamos datos de donantes.', 'We do not sell, share or trade donor data.'),
        t('Las cifras del proyecto son aproximadas y se revisan: si cambian, se publican aquí.', 'The project figures are approximate and reviewed: if they change, they are published here.'),
      ],
    },
    {
      type: 'faq',
      title: t('Lo que se pregunta antes de dar', 'What people ask before giving'),
      lead: t(
        'Las preguntas incómodas, contestadas. Si falta la tuya, escríbenos.',
        'The uncomfortable questions, answered. If yours is missing, write to us.'
      ),
      items: preguntasDonante,
      schema: true,
    },
    {
      type: 'cta',
      title: t('Da hoy', 'Give today'),
      text: t(
        '¿Prefieres coordinarlo con alguien, dirigirlo a una fase concreta o dar desde el exterior? Escríbenos y lo resolvemos contigo.',
        'Would you rather arrange it with someone, direct it to a specific phase, or give from abroad? Write to us and we will sort it out with you.'
      ),
      actions: [
        { label: t('Dar por Banco Pichincha', 'Give via Banco Pichincha'), href: site.giveUrl, kind: 'primary', external: true },
        { label: t('Doy desde el exterior', 'I am giving from abroad'), href: { es: '/desde-el-exterior', en: '/en/from-abroad' }, kind: 'ghost' },
      ],
    },
  ],
}


/**
 * El mercado de la obra.
 *
 * Es la página que convierte «necesitamos dinero» en «necesitamos lo que tú
 * sabes hacer». Un arquitecto que dona los planos aporta varios miles de
 * dólares sin sacar un centavo, un ferretero aporta el hierro, un contador
 * revisa las cuentas. Y todos ellos, además, se vuelven donantes y
 * embajadores de una forma que no ocurre cuando solo se pide plata.
 *
 * El terreno ya está donado, y eso se dice en el titular: es lo primero que
 * pregunta cualquiera que haya donado alguna vez a una construcción, y es la
 * prueba de que esto ya arrancó.
 */
export const construir = {
  slug: { es: 'construir', en: 'build' },
  title: t(
    'Construye con nosotros — aporta tu oficio al cuarto de oración',
    'Build with us — bring your trade to the prayer room'
  ),
  description: t(
    'El terreno ya está donado. Ahora hacen falta planos, cálculo estructural, instalaciones, materiales y manos. Encuentra tu área y aporta lo que sabes hacer.',
    'The land is already donated. Now we need drawings, structural calculations, installations, materials and hands. Find your area and bring what you know how to do.'
  ),
  priority: 0.85,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Construir', 'Build'),
      title: t('El terreno ya es nuestro. Ahora hay que levantarlo.', 'The land is already ours. Now it has to be built.'),
      lead: t(
        'Alguien donó el terreno donde va el cuarto de oración. Ese paso ya está dado. Lo que falta es todo lo que va encima, y buena parte de eso no se compra con dinero: se aporta con lo que cada uno sabe hacer.',
        'Someone donated the land where the prayer room will stand. That step is done. What is missing is everything that goes on top of it, and much of that is not bought with money: it is contributed with what each person knows how to do.'
      ),
      actions: [
        { label: t('Ver dónde puedo aportar', 'See where I can help'), href: { es: '/construir#areas', en: '/en/build#areas' }, kind: 'primary' },
        { label: t('Ver el proyecto', 'See the project'), href: { es: '/proyecto', en: '/en/prayer-room-project' }, kind: 'ghost' },
      ],
      verse: {
        text: t(
          '«Y todo varón de corazón generoso trajo ofrenda... para toda la obra del servicio.»',
          '“And every man with a willing heart brought an offering... for all the work of the service.”'
        ),
        ref: 'Éxodo 35:21',
      },
    },
    {
      type: 'figure',
      src: '/img/obra/obra-actual.jpg',
      w: 1280,
      h: 766,
      alt: t(
        'Interior del cuarto de oración en construcción: paredes enlucidas, ventanas instaladas con rejas, cables eléctricos a la vista y escombros en el piso.',
        'Interior of the prayer room under construction: plastered walls, windows fitted with grilles, exposed wiring and rubble on the floor.'
      ),
      caption: t(
        'La obra hoy. No es una maqueta ni un plano: es lo que hay en el terreno ahora mismo, y lo que falta es lo que estamos pidiendo.',
        'The site today. Not a model or a drawing: this is what is on the ground right now, and what is missing is what we are asking for.'
      ),
    },
    {
      type: 'lead',
      title: t('Por qué tu oficio vale más que tu billetera', 'Why your trade is worth more than your wallet'),
      text: t(
        'Un arquitecto que entrega los planos aporta varios miles de dólares sin sacar un centavo del bolsillo. Un ingeniero que firma el cálculo estructural desbloquea el permiso municipal. Un ferretero que pone el hierro mueve la primera fase más que veinte donaciones pequeñas. Y todos ellos terminan ligados a la obra de una manera que no ocurre cuando solo se da plata.',
        'An architect who hands over the drawings contributes several thousand dollars without spending a cent. An engineer who signs off the structural calculations unlocks the municipal permit. A hardware supplier who provides the steel moves the first phase more than twenty small gifts. And all of them end up tied to the work in a way that giving money alone never achieves.'
      ),
    },
    {
      type: 'oficios',
      title: t('Dónde hace falta lo que tú sabes', 'Where what you know is needed'),
      lead: t(
        'Ordenado como avanza una obra. Cada área dice qué hace falta en concreto, para que en cinco segundos sepas si esto es para ti.',
        'Ordered the way a build advances. Each area says exactly what is needed, so that in five seconds you know whether this is for you.'
      ),
      href: { es: '/construir#postular', en: '/en/build#postular' },
    },
    {
      type: 'steps',
      title: t('Cómo funciona', 'How it works'),
      lead: t(
        'Sin trámites largos, pero con orden: una obra donde cada quien hace lo que se le ocurre se atrasa más que una sin voluntarios.',
        'No long paperwork, but with order: a site where everyone does as they please falls further behind than one with no volunteers at all.'
      ),
      items: [
        {
          title: t('Nos escribes', 'You write to us'),
          text: t(
            'Dices tu oficio, en qué área puedes aportar y de cuánto tiempo dispones. Nada más.',
            'You tell us your trade, which area you can help with and how much time you have. Nothing else.'
          ),
        },
        {
          title: t('Te responde el residente de obra', 'The site manager replies'),
          text: t(
            'En menos de 48 horas, siempre. Te dice si tu aporte hace falta ahora o más adelante, y en qué fase encaja.',
            'Within 48 hours, always. They tell you whether your contribution is needed now or later, and which phase it fits.'
          ),
        },
        {
          title: t('Se acuerda por escrito', 'It is agreed in writing'),
          text: t(
            'Qué entregas, para cuándo y con qué alcance. Un correo basta, pero queda escrito: así nadie queda mal ni la obra se para esperando algo que nunca llegó.',
            'What you deliver, by when and with what scope. An email is enough, but it is written down: that way nobody is left hanging and the build does not stall waiting for something that never came.'
          ),
        },
      ],
    },
    {
      type: 'checklist',
      title: t('Las reglas de la obra', 'The rules of the site'),
      items: [
        t('Todo aporte pasa por el residente de obra. Nadie entra a trabajar por su cuenta.', 'Every contribution goes through the site manager. Nobody starts working on their own.'),
        t('Quien trabaje en obra va con equipo de protección y bajo el plan de seguridad. Sin excepciones y sin importar quién sea.', 'Anyone working on site wears protective equipment under the safety plan. No exceptions, whoever they are.'),
        t('La mano de obra en altura y de riesgo se contrata y se asegura: ahí el voluntariado no es un ahorro, es una responsabilidad.', 'High-risk and working-at-height labour is contracted and insured: there, volunteering is not a saving, it is a liability.'),
        t('Los aportes profesionales se entregan firmados por quien tiene la competencia legal para firmarlos.', 'Professional contributions are delivered signed by whoever is legally qualified to sign them.'),
        t('Ningún aporte da derecho a decidir sobre el uso del lugar ni sobre la casa.', 'No contribution grants any right to decide over the use of the place or over the house.'),
      ],
    },
    {
      type: 'form',
      title: t('Postula tu aporte', 'Offer your contribution'),
      lead: t(
        'Llega directo al residente de obra. Te responde en menos de 48 horas, aunque sea para decirte que tu área todavía no está abierta.',
        'It reaches the site manager directly. They reply within 48 hours, even if only to say your area is not open yet.'
      ),
      action: `mailto:${site.email}`,
      fields: [
        { name: 'nombre', label: t('Nombre', 'Name'), type: 'text', required: true },
        { name: 'profesion', label: t('Profesión, oficio o empresa', 'Profession, trade or company'), type: 'text', required: true },
        {
          name: 'area',
          label: t('¿En qué área quieres aportar?', 'Which area do you want to help with?'),
          type: 'select',
          required: true,
          options: areas.map((a) => a.nombre),
        },
        {
          name: 'como',
          label: t('¿Cómo aportas?', 'How are you contributing?'),
          type: 'select',
          required: true,
          options: [
            t('Mi trabajo profesional', 'My professional work'),
            t('Materiales o equipo', 'Materials or equipment'),
            t('Trabajo en obra', 'Work on site'),
            t('Puedo conectarlos con quien lo tiene', 'I can connect you with someone who has it'),
          ],
        },
        { name: 'ciudad', label: t('Ciudad y país', 'City and country'), type: 'text', required: true },
        { name: 'detalle', label: t('Cuéntanos en una línea qué puedes aportar', 'Tell us in one line what you can contribute'), type: 'textarea', required: true },
      ],
      submit: t('Enviar mi postulación', 'Send my offer'),
      note: t(
        'Tus datos se usan solo para coordinar tu aporte. No se publican, no se comparten y no entran en ninguna lista de correo.',
        'Your details are used only to coordinate your contribution. They are not published, not shared, and go into no mailing list.'
      ),
    },
    {
      type: 'cta',
      title: t('¿No es lo tuyo, pero conoces a quien sí?', 'Not your field, but you know someone whose it is?'),
      text: t(
        'Un contacto bien hecho vale tanto como un aporte. Pásanos el nombre y nosotros escribimos.',
        'A good introduction is worth as much as a contribution. Send us the name and we will write.'
      ),
      actions: [
        { label: t('Pasar un contacto', 'Send us a name'), href: `https://wa.me/${site.whatsapp}`, kind: 'primary', external: true },
        { label: t('Dar', 'Give'), href: site.giveUrl, kind: 'ghost', external: true },
      ],
    },
  ],
}

/**
 * La página de la diáspora.
 *
 * Es la apuesta con más recorrido de toda la captación y está explicada en
 * CASO.md: Ecuador recibió 7.729 millones de dólares en remesas en 2025, el
 * 78 % desde Estados Unidos. El donante natural de este proyecto no vive en
 * Quito, ya manda dinero a casa todos los meses y nadie le ha pedido nunca
 * que parte de eso sostenga un altar.
 *
 * No es la traducción de la página de dar: le habla a otra persona, con otra
 * objeción —la distancia— y otro gesto ya aprendido, el del envío.
 */
export const desdeElExterior = {
  slug: { es: 'desde-el-exterior', en: 'from-abroad' },
  title: t('Dar desde el exterior — para ecuatorianos fuera del país', 'Giving from abroad — for Ecuadorians outside the country'),
  description: t(
    'Si estás fuera de Ecuador y mandas dinero a casa cada mes, este es el mismo gesto con otro destino: el primer cuarto de oración 24/7 del país.',
    'If you live outside Ecuador and send money home each month, this is the same gesture with another destination: the country’s first 24/7 prayer room.'
  ),
  priority: 0.8,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Desde el exterior', 'From abroad'),
      title: t('Tu familia está allá. El altar también.', 'Your family is there. So is the altar.'),
      lead: t(
        'Si vives en Estados Unidos, España, Italia o donde sea que te llevó el camino, ya sabes hacer esto: entras a un enlace, pones un monto y llega a Ecuador. Es el mismo gesto de todos los meses, con un destino más.',
        'If you live in the United States, Spain, Italy or wherever the road took you, you already know how to do this: you open a link, enter an amount and it reaches Ecuador. It is the same gesture as every month, with one more destination.'
      ),
      actions: [
        { label: t('Dar desde donde estás', 'Give from where you are'), href: site.giveUrl, kind: 'primary', external: true },
        { label: t('Ver el proyecto', 'See the project'), href: { es: '/proyecto', en: '/en/prayer-room-project' }, kind: 'ghost' },
      ],
      verse: {
        text: t(
          '«Y procurad la paz de la ciudad a la cual os hice transportar, y rogad por ella a Jehová; porque en su paz tendréis vosotros paz.»',
          '“And seek the peace of the city whither I have caused you to be carried away captives, and pray unto the LORD for it: for in the peace thereof shall ye have peace.”'
        ),
        ref: 'Jeremías 29:7',
      },
    },
    {
      type: 'lead',
      title: t('Por qué te lo pedimos a ti', 'Why we are asking you'),
      text: t(
        `En 2025 los ecuatorianos que viven fuera enviaron ${remesas.total2025.toLocaleString('es-EC')} millones de dólares a sus casas: cerca del ${remesas.porcentajePib} % de todo lo que produce el país, más de lo que entra por inversión extranjera. Ese dinero sostiene familias enteras y lo manda gente que trabaja lejos de los suyos. Nadie conoce mejor que tú lo que está pasando en Ecuador, y nadie tiene más razones para querer que algo ahí no se apague.`,
        `In 2025 Ecuadorians living abroad sent home ${remesas.total2025.toLocaleString('en-US')} million dollars: close to ${remesas.porcentajePib} % of everything the country produces, more than it receives in foreign investment. That money sustains whole families and it is sent by people working far from their own. Nobody knows better than you what is happening in Ecuador, and nobody has more reason to want something there to stay lit.`
      ),
    },
    { type: 'contexto', title: t('Lo que está pasando en casa', 'What is happening back home') },
    {
      type: 'lead',
      title: t('Lo que ya existe', 'What already exists'),
      text: t(
        'Desde octubre de 2012, pastores de denominaciones distintas sostienen oración y adoración 24/7 cada semana, y equipos que salen a los barrios con vivienda, alimento y acompañamiento. No pedimos dinero para empezar algo: pedimos para que no se detenga.',
        'Since October 2012, pastors from different denominations have sustained 24/7 prayer and worship each week, with teams going out into the neighbourhoods with housing, food and accompaniment. We are not asking for money to start something: we are asking so it does not stop.'
      ),
    },
    {
      type: 'niveles',
      title: t('Un metro cuadrado desde donde estés', 'One square metre, from wherever you are'),
      lead: t(
        'El cuarto de oración son 200 metros a mil dólares cada uno. No hay placas ni nombres en la pared: lo que das queda entre tú y Dios, como enseña Mateo 6:3-4.',
        'The prayer room is 200 metres at a thousand dollars each. There are no plaques and no names on the wall: what you give stays between you and God, as Matthew 6:3-4 teaches.'
      ),
      note: t(
        'El enlace abre la plataforma del Banco Pichincha y acepta tarjeta desde el exterior. Si desde tu país no carga, escríbenos por WhatsApp y lo resolvemos.',
        'The link opens Banco Pichincha’s platform and takes cards from abroad. If it does not load from your country, message us on WhatsApp and we will sort it out.'
      ),
    },
    {
      type: 'faq',
      title: t('Antes de dar desde fuera', 'Before giving from abroad'),
      items: preguntasDonante.slice(0, 4),
      schema: true,
    },
    {
      type: 'cta',
      title: t('Cuando vuelvas, va a estar en pie', 'When you come back, it will be standing'),
      text: t(
        'Vas a poder entrar y quedarte el tiempo que quieras en un lugar que ayudaste a levantar desde lejos, sin que nadie sepa que fuiste tú.',
        'You will be able to walk in and stay as long as you like in a place you helped build from far away, with nobody knowing it was you.'
      ),
      actions: [
        { label: t('Dar un metro', 'Give a square metre'), href: site.giveUrl, kind: 'primary', external: true },
        { label: t('Escribir por WhatsApp', 'Message on WhatsApp'), href: `https://wa.me/${site.whatsapp}`, kind: 'ghost', external: true },
      ],
    },
  ],
}

export const recursos = {
  slug: { es: 'recursos', en: 'resources' },
  title: t('Recursos — enseñanzas y guías de oración', 'Resources — teaching and prayer guides'),
  description: t(
    'Enseñanzas, guías para sostener un turno de oración y los temas de la intercesión corporativa. Todo gratuito, sin registro.',
    'Teaching, guides for holding a prayer shift, and the themes of corporate intercession. All free, no sign-up.'
  ),
  priority: 0.6,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Recursos', 'Resources'),
      title: t('Todo abierto, sin registro', 'Everything open, no sign-up'),
      lead: t(
        'Publicamos lo que usamos: los temas de la intercesión corporativa, guías de turno y enseñanzas. Puedes usarlo en tu congregación sin pedir permiso y sin pagar.',
        'We publish what we use: the themes of corporate intercession, shift guides and teaching. Use it in your congregation without asking permission and without paying.'
      ),
    },
    {
      type: 'rows',
      title: t('Los temas de la intercesión corporativa', 'The themes of corporate intercession'),
      lead: t(
        'Esta es la lista con la que se ora. Sirve igual para un turno de dos horas que para una reunión de tu iglesia.',
        'This is the list prayed through. It works as well for a two-hour shift as for a meeting in your own church.'
      ),
      items: temasIntercesion.map((texto, i) => ({
        title: [
          t('El Evangelio del Reino', 'The Gospel of the Kingdom'),
          t('El sacerdocio real', 'The royal priesthood'),
          t('El Pacto', 'The Covenant'),
          t('El gobierno de Dios en las naciones', 'God’s government in the nations'),
          t('La Palabra en poder', 'The Word in power'),
          t('La unidad de la Iglesia', 'The unity of the Church'),
        ][i],
        text: texto,
      })),
    },
    {
      type: 'links',
      title: t('Más', 'More'),
      items: [
        { label: t('Preguntas frecuentes', 'Frequently asked questions'), note: t('Respuestas cortas', 'Short answers'), href: { es: '/preguntas', en: '/en/faq' } },
        { label: t('El proyecto del cuarto de oración', 'The prayer room project'), note: t('Fases y costos', 'Phases and costs'), href: { es: '/proyecto', en: '/en/prayer-room-project' } },
        /* El canal solo se enlaza si existe: ver content/site.js. */
        ...(site.streamUrl
          ? [{ label: t('Canal de YouTube', 'YouTube channel'), note: t('Transmisiones y enseñanzas', 'Streams and teaching'), href: site.streamUrl, external: true }]
          : []),
        {
          label: t('hernanrobalino.com', 'hernanrobalino.com'),
          note: t('El sitio de los pastores fundadores', 'The founding pastors’ site'),
          href: site.founderSite,
          external: true,
        },
      ],
    },
  ],
}

export const contacto = {
  slug: { es: 'contacto', en: 'contact' },
  title: t('Contacto — ECO Ecuador Casa de Oración, Quito', 'Contact — ECO Ecuador Casa de Oración, Quito'),
  description: t(
    'Escríbenos para pedir oración, tomar un turno de la semana de oración, recibir entrenamiento o dar para el cuarto de oración. Quito, Ecuador.',
    'Write to us to ask for prayer, take a shift in the week of prayer, receive training or give towards the prayer room. Quito, Ecuador.'
  ),
  priority: 0.7,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Contacto', 'Contact'),
      title: t('Escríbenos', 'Write to us'),
      lead: t(
        'Estamos en Quito y trabajamos con congregaciones de todo Ecuador. Dinos qué necesitas —oración, un turno, entrenamiento o cómo dar— y te respondemos.',
        'We are in Quito and work with congregations across Ecuador. Tell us what you need — prayer, a shift, training or how to give — and we will reply.'
      ),
      actions: [
        { label: t('Escribir por WhatsApp', 'Message on WhatsApp'), href: `https://wa.me/${site.whatsapp}`, kind: 'primary', external: true },
      ],
    },
    { type: 'contact' },
    {
      type: 'rows',
      title: t('Según lo que necesites', 'Depending on what you need'),
      items: [
        {
          title: t('Pedir oración', 'To ask for prayer'),
          text: t('Usa la página de ayuda o escribe por WhatsApp: llega directo al equipo de intercesión.', 'Use the help page or message on WhatsApp: it reaches the intercession team directly.'),
        },
        {
          title: t('Tomar un turno con tu congregación', 'To take a shift with your congregation'),
          text: t('Escríbenos con el nombre de la iglesia, la ciudad y cuántos son en el equipo.', 'Write to us with the church name, the city and how many are on the team.'),
        },
        {
          title: t('Pedir entrenamiento o una conferencia', 'To request training or a conference'),
          text: t('Dinos si lo quieren presencial o en línea y para cuántas personas.', 'Tell us whether you want it in person or online, and for how many people.'),
        },
        {
          title: t('Dar al cuarto de oración', 'To give towards the prayer room'),
          text: t('Escríbenos y te indicamos la fase en la que más falta hace y cómo hacerlo.', 'Write to us and we will point you to the phase most in need and how to give.'),
        },
      ],
    },
  ],
}

export const paginaPreguntas = {
  slug: { es: 'preguntas', en: 'faq' },
  title: t('Preguntas frecuentes — ECO Ecuador Casa de Oración', 'Frequently asked questions — ECO Ecuador Casa de Oración'),
  description: t(
    'Qué es ECO, qué significa oración 24/7, cómo pedir oración, dónde se reúnen, qué cuesta participar y en qué se usa lo que se dona.',
    'What ECO is, what 24/7 prayer means, how to ask for prayer, where they meet, what it costs to take part and how giving is used.'
  ),
  priority: 0.7,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Preguntas', 'Questions'),
      title: t('Respuestas cortas', 'Short answers'),
      lead: t(
        'Cada respuesta empieza contestando. Si falta la tuya, escríbenos y la añadimos.',
        'Every answer starts by answering. If yours is missing, write to us and we will add it.'
      ),
    },
    { type: 'faq', title: t('Todas las preguntas', 'All questions'), items: preguntas, schema: true },
    {
      type: 'scripture',
      text: t(
        'Levántate, resplandece; porque ha venido tu luz, y la gloria de Jehová ha nacido sobre ti.',
        'Arise, shine; for thy light is come, and the glory of the LORD is risen upon thee.'
      ),
      ref: 'Isaías 60:1',
    },
    { type: 'emergency' },
  ],
}

export const privacidad = {
  slug: { es: 'privacidad', en: 'privacy' },
  title: t('Privacidad y trato de las peticiones de oración', 'Privacy and how prayer requests are handled'),
  description: t(
    'Qué hacemos con lo que nos cuentas: las peticiones de oración las lee solo el equipo de intercesión, no se publican, no se comparten y puedes pedir que se borren.',
    'What we do with what you tell us: prayer requests are read only by the intercession team, never published, never shared, and you can ask for them to be deleted.'
  ),
  priority: 0.3,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Privacidad', 'Privacy'),
      title: t('Lo que nos cuentas se queda aquí', 'What you tell us stays here'),
      lead: t(
        'Esta página explica en lenguaje llano qué datos recogemos, quién los ve y cómo pedir que los borremos.',
        'This page explains in plain language what data we collect, who sees it and how to ask us to delete it.'
      ),
    },
    {
      type: 'prose',
      blocks: [
        {
          h: t('Peticiones de oración', 'Prayer requests'),
          p: [
            t(
              'Las peticiones que llegan por formulario, WhatsApp, teléfono o correo las lee únicamente el equipo de intercesión. No se publican, no se leen en voz alta con nombre y apellido sin permiso, y no se comparten con terceros.',
              'Requests arriving by form, WhatsApp, phone or email are read only by the intercession team. They are not published, not read aloud with full names without permission, and not shared with third parties.'
            ),
            t(
              'Puedes pedir en cualquier momento que borremos tu petición y tus datos escribiendo a nuestro correo. Lo hacemos en un plazo máximo de siete días y te confirmamos.',
              'You can ask us at any time to delete your request and your data by writing to our email. We do it within seven days and confirm back to you.'
            ),
          ],
        },
        {
          h: t('Datos de contacto y donaciones', 'Contact and giving data'),
          p: [
            t(
              'Guardamos el mínimo necesario para responderte o emitir un comprobante. No vendemos, cedemos ni intercambiamos datos con nadie, y no enviamos correos promocionales a quien no los pidió.',
              'We keep the minimum needed to reply to you or issue a receipt. We do not sell, share or trade data with anyone, and we do not send promotional email to people who did not ask for it.'
            ),
          ],
        },
        {
          h: t('Sitio web', 'Website'),
          p: [
            t(
              'El sitio no usa cookies de publicidad ni de seguimiento de terceros. Si en algún momento medimos visitas, será con una herramienta que no crea perfiles ni identifica personas, y se dirá aquí.',
              'The site uses no advertising or third-party tracking cookies. If we ever measure visits, it will be with a tool that builds no profiles and identifies no individuals, and it will be stated here.'
            ),
          ],
        },
        {
          h: t('Menores y situaciones de riesgo', 'Minors and situations of risk'),
          p: [
            t(
              'Si una petición revela riesgo inminente para la vida de una persona, la prioridad es su seguridad: te acompañamos a contactar a los servicios de emergencia. Los teléfonos públicos están listados abajo.',
              'If a request reveals imminent risk to someone’s life, their safety comes first: we help you contact emergency services. The public numbers are listed below.'
            ),
          ],
        },
      ],
    },
    { type: 'emergency' },
  ],
}

export { emergencia }
