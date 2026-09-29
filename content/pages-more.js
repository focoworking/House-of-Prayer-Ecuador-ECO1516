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
import { preguntas } from './datos.js'

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
      lead: proyecto.descripcion,
      actions: [
        { label: t('Sembrar en el proyecto', 'Give towards the project'), href: site.giveUrl, kind: 'primary', external: true },
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
        { value: `${proyecto.superficie} m²`, label: t('En dos plantas, al norte de Quito', 'Over two floors, in northern Quito') },
        { value: dolares(proyecto.costoTotal), label: t('Costo aproximado del proyecto', 'Approximate cost of the project') },
        { value: '3', label: t('Fases, y se puede sembrar en cualquiera', 'Phases — you can give towards any of them') },
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
        { label: t('Ver a dónde va', 'See where it goes'), href: { es: '/dar', en: '/en/give' }, kind: 'ghost' },
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
        'Con tiempo, con materiales, con oficio o con una siembra. Cuéntanos qué puedes aportar y lo encajamos donde más falta hace.',
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
  title: t('Dar — sostén el cuarto de oración y los actos de justicia', 'Give — sustain the prayer room and the acts of justice'),
  description: t(
    'Tu siembra sostiene tres cosas: la construcción del cuarto de oración al norte de Quito, los entrenamientos para la Iglesia y los programas de Actos de Justicia.',
    'Your giving sustains three things: building the prayer room in northern Quito, training for the Church, and the Acts of Justice programmes.'
  ),
  priority: 0.8,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Dar', 'Give'),
      title: t('Te invitamos a ser parte de este proyecto.', 'We invite you to be part of this project.'),
      lead: t(
        'Nada de lo que hacemos se cobra: ni la oración, ni los entrenamientos, ni la ayuda de los programas de justicia. El movimiento se sostiene con la siembra de personas e iglesias. Nadie compra un lugar delante de Dios: lo que das sostiene a los que sirven, no tu acceso a Él.',
        'Nothing we do is charged for: not prayer, not the training, not the help given through the justice programmes. The movement is sustained by the giving of people and churches. Nobody buys a place before God: what you give sustains those who serve, not your access to Him.'
      ),
      actions: [
        { label: t('Dar ahora', 'Give now'), href: site.giveUrl, kind: 'primary', external: true },
        { label: t('Hablar con el equipo', 'Talk to the team'), href: { es: '/contacto', en: '/en/contact' }, kind: 'ghost' },
      ],
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
      type: 'cards',
      title: t('Las tres fases del cuarto de oración', 'The three phases of the prayer room'),
      items: proyecto.fases.map((fase) => ({
        title: fase.nombre,
        text: t(`${fase.detalle.es} ${dolares(fase.costo)} aproximadamente.`, `${fase.detalle.en} Around ${dolares(fase.costo)}.`),
      })),
    },
    {
      type: 'checklist',
      title: t('Nuestro compromiso con quien siembra', 'Our commitment to those who give'),
      items: [
        t('Ninguna donación cambia el acceso de nadie a la oración, al entrenamiento o a la ayuda.', 'No donation changes anyone’s access to prayer, training or help.'),
        t('No vendemos, cedemos ni intercambiamos datos de donantes.', 'We do not sell, share or trade donor data.'),
        t('Puedes cancelar un aporte periódico con un mensaje, sin preguntas.', 'You can cancel a recurring gift with one message, no questions asked.'),
        t('Las cifras del proyecto son aproximadas y se revisan: si cambian, se publican aquí.', 'The project figures are approximate and reviewed: if they change, they are published here.'),
      ],
    },
    {
      type: 'cta',
      title: t('Dar ahora', 'Give now'),
      text: t(
        'El enlace abre la plataforma de recaudación del Banco Pichincha. Puedes dar una vez o repetirlo cuando quieras; no queda ninguna suscripción activa.',
        'The link opens Banco Pichincha’s collection platform. You can give once or come back whenever you want; no subscription is left running.'
      ),
      actions: [
        { label: t('Dar por Banco Pichincha', 'Give via Banco Pichincha'), href: site.giveUrl, kind: 'primary', external: true },
        { label: t('Prefiero coordinarlo con alguien', 'I would rather arrange it with someone'), href: { es: '/contacto', en: '/en/contact' }, kind: 'ghost' },
      ],
    },
    { type: 'faq', title: t('Sobre dar', 'About giving'), items: [preguntas[6]], schema: true },
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
        { label: t('Canal de YouTube', 'YouTube channel'), note: t('Transmisiones y enseñanzas', 'Streams and teaching'), href: site.streamUrl, external: true },
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
    'Escríbenos para pedir oración, tomar un turno de la semana de oración, recibir entrenamiento o sembrar en el cuarto de oración. Quito, Ecuador.',
    'Write to us to ask for prayer, take a shift in the week of prayer, receive training or give towards the prayer room. Quito, Ecuador.'
  ),
  priority: 0.7,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Contacto', 'Contact'),
      title: t('Escríbenos', 'Write to us'),
      lead: t(
        'Estamos en Quito y trabajamos con congregaciones de todo Ecuador. Dinos qué necesitas —oración, un turno, entrenamiento o cómo sembrar— y te respondemos.',
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
          title: t('Sembrar en el cuarto de oración', 'To give towards the prayer room'),
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
