/**
 * Inicio, ayuda y oración 24/7.
 *
 * Todo el contenido de estas páginas sale del documento «INFORMACIÓN PARA
 * PÁGINA WEB ECO» —ver content/eco.js—, y donde el documento no dice nada,
 * la página no afirma nada.
 *
 * Dos registros conviven a propósito. El de la casa es profético: habla de
 * altar, de sacerdocio real y de las naciones, porque eso es lo que el
 * movimiento cree y sostiene. El de /ayuda es llano: quien llega ahí en una
 * crisis no necesita vocabulario, necesita a alguien que conteste.
 *
 * Las citas conservan la versión que usa el documento de la casa: RVR1960
 * salvo donde dice NVI, y entonces se marca NVI.
 */
import { t, site } from './site.js'
import { queEs, objetivos, temasIntercesion, proyecto } from './eco.js'
import { preguntas } from './datos.js'

const wa = (texto) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`

export const inicio = {
  slug: { es: 'index', en: 'index' },
  title: t(
    'ECO Ecuador Casa de Oración — movimiento de oración 24/7',
    'ECO Ecuador Casa de Oración — a 24/7 prayer movement'
  ),
  description: t(
    'Pastores y congregaciones de distintas denominaciones de Ecuador sostienen adoración e intercesión 24/7 cada semana. Pide oración o suma a tu iglesia.',
    'Pastors and congregations from different denominations in Ecuador sustain 24/7 worship and intercession each week. Ask for prayer or bring your church in.'
  ),
  priority: 1.0,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Ecuador · oración 24/7', 'Ecuador · 24/7 prayer'),
      title: t('Una Iglesia que no deja de orar.', 'A Church that never stops praying.'),
      lead: t(
        'ECO reúne a pastores, congregaciones y ministerios de diferentes denominaciones que oran juntos día y noche cada semana, por el establecimiento del Reino de Dios y el retorno de Jesucristo, Rey Eterno de las Naciones.',
        'ECO gathers pastors, congregations and ministries from different denominations who pray together day and night each week, for the establishing of God’s Kingdom and the return of Jesus Christ, Eternal King of the Nations.'
      ),
      image: {
        src: '/img/amanecer.png',
        w: 2000,
        h: 1125,
        alt: t(
          'Amanecer sobre la cordillera andina: cuatro cadenas de montañas en lavanda, cada vez más claras hacia el fondo, bajo un cielo que se enciende.',
          'Dawn over the Andean cordillera: four ranges in lavender, each paler towards the horizon, under a sky beginning to glow.'
        ),
      },
      actions: [
        { label: t('Pide oración', 'Ask for prayer'), href: { es: '/ayuda', en: '/en/help' }, kind: 'primary' },
        { label: t('Súmate a la oración 24/7', 'Join the 24/7 prayer'), href: { es: '/oracion', en: '/en/prayer-24-7' }, kind: 'ghost' },
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
        { value: '24/7', label: t('Adoración e intercesión, cada semana', 'Worship and intercession, every week') },
        { value: '200 m²', label: t('El cuarto de oración, en construcción', 'The prayer room, under construction') },
        { value: '4', label: t('Objetivos que sostienen el movimiento', 'Aims that hold the movement together') },
        { value: '6', label: t('Temas de la intercesión corporativa', 'Themes of corporate intercession') },
      ],
    },
    {
      type: 'lead',
      title: t('Qué es ECO', 'What ECO is'),
      text: queEs,
    },
    {
      type: 'scripture',
      text: t(
        'Y los envió a predicar el reino de Dios, y a sanar a los enfermos.',
        'And he sent them to preach the kingdom of God, and to heal the sick.'
      ),
      ref: 'Lucas 9:2',
    },
    {
      type: 'cards',
      title: t('Por dónde entrar', 'Where to start'),
      lead: t(
        'Tres puertas, y ninguna te pide dejar tu congregación ni dar nada.',
        'Three doors, and none of them asks you to leave your congregation or to give anything.'
      ),
      items: [
        {
          title: t('Necesito oración', 'I need prayer'),
          text: t(
            'Cuéntanos qué está pasando. Tu petición la lee el equipo de intercesión y se lleva a la oración corporativa. Confidencial y gratuita.',
            'Tell us what is happening. Your request is read by the intercession team and carried into corporate prayer. Confidential and free.'
          ),
          href: { es: '/ayuda', en: '/en/help' },
          cta: t('Pedir oración', 'Ask for prayer'),
        },
        {
          title: t('Quiero orar con ustedes', 'I want to pray with you'),
          text: t(
            'Tu congregación puede tomar un turno de la semana de oración, o puedes sumarte a los turnos que ya están cubiertos.',
            'Your congregation can take a shift in the week of prayer, or you can join shifts already covered.'
          ),
          href: { es: '/oracion', en: '/en/prayer-24-7' },
          cta: t('Ver la oración 24/7', 'See the 24/7 prayer'),
        },
        {
          title: t('Quiero sostener el cuarto de oración', 'I want to help build the prayer room'),
          text: t(
            'El lugar permanente para la oración 24/7 se levanta al norte de Quito, en tres fases. Se puede sembrar en cualquiera de ellas.',
            'The permanent place for 24/7 prayer is being built in northern Quito, in three phases. You can give towards any of them.'
          ),
          href: { es: '/proyecto', en: '/en/prayer-room-project' },
          cta: t('Ver el proyecto', 'See the project'),
        },
      ],
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
      type: 'split',
      title: t('Lo que se ora', 'What is prayed'),
      text: t(
        'La intercesión corporativa no improvisa: hay temas que el movimiento sostiene semana tras semana, por acuerdo entre las congregaciones. El pueblo de Dios unido para interceder por las cosas que están en el corazón de Dios, como una expresión de la unidad de la Iglesia.',
        'Corporate intercession does not improvise: there are themes the movement holds week after week, by agreement between the congregations. God’s people united to intercede for what is on God’s heart, as an expression of the unity of the Church.'
      ),
      items: temasIntercesion.slice(0, 4),
      image: {
        src: '/img/incienso.png',
        w: 1500,
        h: 1125,
        alt: t(
          'Dos columnas de humo de incienso que suben sobre fondo claro, una lavanda y otra celeste.',
          'Two columns of incense smoke rising against a pale ground, one lavender and one cyan.'
        ),
      },
      action: { label: t('Ver los seis temas', 'See all six themes'), href: { es: '/oracion', en: '/en/prayer-24-7' } },
    },
    {
      type: 'cards',
      title: t('Lo que hacemos', 'What we do'),
      items: [
        {
          title: t('Oración profética desde los montes', 'Prophetic prayer from the mountains'),
          text: t(
            'Movilizamos a la Iglesia a las alturas para proclamar a las naciones el mensaje del Reino y levantar sus banderas.',
            'We mobilise the Church to the heights to proclaim the message of the Kingdom to the nations and raise their flags.'
          ),
          href: { es: '/montes', en: '/en/mountains' },
          cta: t('Ver', 'See'),
        },
        {
          title: t('Actos de justicia', 'Acts of justice'),
          text: t(
            'Vivienda solidaria, restauración familiar y misiones integrales para las personas más vulnerables del país.',
            'Solidarity housing, family restoration and integral missions for the country’s most vulnerable.'
          ),
          href: { es: '/justicia', en: '/en/justice' },
          cta: t('Ver', 'See'),
        },
        {
          title: t('Entrenamientos y conferencias', 'Training and conferences'),
          text: t(
            'Presenciales y en línea, en Ecuador y en otros países, para restaurar y establecer la oración 24/7.',
            'In person and online, in Ecuador and other countries, to restore and establish 24/7 prayer.'
          ),
          href: { es: '/formacion', en: '/en/training' },
          cta: t('Ver', 'See'),
        },
      ],
    },
    {
      type: 'scripture',
      text: t(
        '«Yo soy el Alfa y la Omega —dice el Señor Dios—, el que es y que era y que ha de venir, el Todopoderoso.»',
        '“I am the Alpha and the Omega, saith the Lord God, which is, and which was, and which is to come, the Almighty.”'
      ),
      ref: 'Apocalipsis 1:8',
    },
    { type: 'faq', title: t('Preguntas frecuentes', 'Frequently asked questions'), items: preguntas.slice(0, 5), schema: true },
    {
      type: 'cta',
      title: t('Ora con nosotros esta semana', 'Pray with us this week'),
      text: t(
        'Si tu congregación quiere tomar un turno, si necesitas oración o si quieres sembrar en el cuarto de oración, escríbenos.',
        'If your congregation wants to take a shift, if you need prayer, or if you want to give towards the prayer room, write to us.'
      ),
      actions: [
        { label: t('Escribir por WhatsApp', 'Message on WhatsApp'), href: wa('Hola, quiero orar con ECO.'), kind: 'primary', external: true },
        { label: t('Sembrar en el cuarto de oración', 'Give towards the prayer room'), href: site.giveUrl, kind: 'ghost', external: true },
      ],
    },
  ],
}

export const ayuda = {
  slug: { es: 'ayuda', en: 'help' },
  title: t('Pide oración — ECO Ecuador Casa de Oración', 'Ask for prayer — ECO Ecuador Casa de Oración'),
  description: t(
    'Pide oración: escribe por WhatsApp, llama o envía el formulario. Tu petición la lee el equipo de intercesión y entra en la oración corporativa. Gratis.',
    'Ask for prayer: message on WhatsApp, call, or send the form. Your request is read by the intercession team and carried into corporate prayer. Free and confidential.'
  ),
  priority: 0.9,
  sections: [
    {
      type: 'hero',
      variant: 'urgent',
      eyebrow: t('Pedir oración', 'Ask for prayer'),
      title: t('Cuéntanos qué pasa. Oramos contigo.', 'Tell us what is happening. We pray with you.'),
      lead: t(
        'Te responde una persona, no un robot. Es gratuito, es confidencial y no tienes que pertenecer a ninguna iglesia ni saber qué decir. Tu petición se lleva a la oración corporativa de la semana.',
        'A person answers, not a bot. It is free, it is confidential and you do not have to belong to any church or know what to say. Your request is carried into the week’s corporate prayer.'
      ),
      actions: [
        { label: t('Escribir por WhatsApp', 'Message on WhatsApp'), href: wa('Hola, necesito oración.'), kind: 'primary', external: true },
        { label: t('Llamar', 'Call'), href: `tel:${site.prayerLine}`, kind: 'ghost' },
      ],
      verse: {
        text: t(
          '«Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.»',
          '“Come unto me, all ye that labour and are heavy laden, and I will give you rest.”'
        ),
        ref: 'Mateo 11:28',
      },
    },
    { type: 'emergency' },
    {
      type: 'steps',
      title: t('Qué pasa cuando escribes', 'What happens when you write'),
      lead: t(
        'Tres pasos, sin trámites. Nadie te va a pedir dinero ni datos que no quieras dar.',
        'Three steps, no paperwork. Nobody will ask you for money or for data you would rather not give.'
      ),
      items: [
        {
          title: t('Escribes o llamas', 'You write or call'),
          text: t(
            'Una línea basta. No necesitas explicar todo ni usar palabras religiosas.',
            'One line is enough. You do not need to explain everything or use religious words.'
          ),
        },
        {
          title: t('Un intercesor responde', 'An intercessor replies'),
          text: t(
            'Ora contigo por teléfono, por audio o por escrito, como prefieras, y te acompaña si lo pides.',
            'They pray with you by phone, by voice note or in writing, as you prefer, and walk with you if you ask.'
          ),
        },
        {
          title: t('Tu petición entra en la oración de la semana', 'Your request enters the week’s prayer'),
          text: t(
            'Con el nombre solo si tú lo autorizas. La intercesión corporativa la sostienen equipos de varias congregaciones.',
            'With your name only if you allow it. Corporate intercession is sustained by teams from several congregations.'
          ),
        },
      ],
    },
    {
      type: 'form',
      title: t('Formulario de petición de oración', 'Prayer request form'),
      lead: t(
        'Si prefieres escribir sin hablar con nadie todavía, este formulario llega al mismo equipo. Puedes dejarlo anónimo.',
        'If you would rather write without talking to anyone yet, this form reaches the same team. You can leave it anonymous.'
      ),
      action: `mailto:${site.prayerEmail}`,
      fields: [
        { name: 'nombre', label: t('Nombre (o cómo quieres que te llamemos)', 'Name (or what we should call you)'), type: 'text', required: false },
        { name: 'contacto', label: t('Teléfono, WhatsApp o correo', 'Phone, WhatsApp or email'), type: 'text', required: true },
        { name: 'ciudad', label: t('Ciudad', 'City'), type: 'text', required: false },
        { name: 'peticion', label: t('¿Por qué oramos?', 'What shall we pray for?'), type: 'textarea', required: true },
      ],
      submit: t('Enviar petición', 'Send request'),
      note: t(
        'Tu petición la lee únicamente el equipo de intercesión. No se publica, no se comparte, no se lee en voz alta con tu nombre sin permiso y no se usa para enviarte promociones.',
        'Your request is read only by the intercession team. It is not published, not shared, never read aloud with your name without permission, and not used to send you promotions.'
      ),
    },
    {
      type: 'scripture',
      text: t(
        'Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.',
        'The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.'
      ),
      ref: 'Salmos 34:18',
    },
    {
      type: 'cards',
      title: t('Otras formas de ayuda', 'Other kinds of help'),
      items: [
        {
          title: t('Ayuda material y acompañamiento', 'Material help and accompaniment'),
          text: t(
            'Los programas de Actos de Justicia atienden a familias en riesgo con vivienda, alimentos, útiles escolares y medicinas.',
            'The Acts of Justice programmes serve families at risk with housing, food, school supplies and medicine.'
          ),
          href: { es: '/justicia', en: '/en/justice' },
          cta: t('Ver actos de justicia', 'See acts of justice'),
        },
        {
          title: t('Orientación familiar y legal', 'Family and legal guidance'),
          text: t(
            'Restauración Familiar ofrece talleres de orientación familiar y relaciones, discipulado y orientación legal.',
            'Family Restoration offers family and relationship workshops, discipleship and legal guidance.'
          ),
          href: { es: '/justicia', en: '/en/justice' },
          cta: t('Ver el programa', 'See the programme'),
        },
        {
          title: t('Oración por tu congregación', 'Prayer for your congregation'),
          text: t(
            'Si tu iglesia quiere sostener un turno de la semana de oración o recibir entrenamiento, escríbenos.',
            'If your church wants to hold a shift of the week of prayer or receive training, write to us.'
          ),
          href: { es: '/contacto', en: '/en/contact' },
          cta: t('Escribir', 'Write'),
        },
      ],
    },
    { type: 'faq', title: t('Antes de escribir', 'Before you write'), items: preguntas.slice(1, 6), schema: true },
  ],
}

export const oracion = {
  slug: { es: 'oracion', en: 'prayer-24-7' },
  title: t('Oración 24/7 — cómo se sostiene y cómo sumarse', '24/7 prayer — how it is sustained and how to join'),
  description: t(
    'Adoración e intercesión 24/7 sostenidas cada semana por congregaciones de distintas denominaciones en Ecuador. Estos son los temas que se oran y cómo tomar un turno.',
    '24/7 worship and intercession sustained each week by congregations from different denominations in Ecuador. These are the themes prayed and how to take a shift.'
  ),
  priority: 0.9,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Oración 24/7', '24/7 prayer'),
      title: t('Día y noche, cada semana.', 'Day and night, every week.'),
      lead: t(
        'Varios pastores, líderes y hermanos ministran juntos la oración y la adoración en Ecuador Casa de Oración, sosteniendo 24/7 cada semana. La gracia de Dios une cada vez a más pastores y hermanos a este movimiento.',
        'Pastors, leaders and brothers and sisters minister prayer and worship together in Ecuador Casa de Oración, sustaining 24/7 each week. God’s grace keeps joining more of them to this movement.'
      ),
      actions: [
        { label: t('Tomar un turno', 'Take a shift'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' },
        { label: t('Pedir oración', 'Ask for prayer'), href: { es: '/ayuda', en: '/en/help' }, kind: 'ghost' },
      ],
      verse: {
        text: t(
          '«Sobre tus muros, oh Jerusalén, he puesto guardas; todo el día y toda la noche no callarán jamás.»',
          '“I have set watchmen upon thy walls, O Jerusalem, which shall never hold their peace day nor night.”'
        ),
        ref: 'Isaías 62:6',
      },
    },
    {
      type: 'lead',
      title: t('Intercesión corporativa y adoración profética', 'Corporate intercession and prophetic worship'),
      text: t(
        'Trabajamos en relación con el resto del cuerpo de Cristo dentro y fuera del país, a fin de establecer la intercesión corporativa y la adoración profética 24/7 en el espíritu de la intercesión celestial (Ap. 5:8-9) en cada ciudad.',
        'We work alongside the rest of the body of Christ inside and outside the country, to establish corporate intercession and prophetic worship 24/7 in the spirit of heavenly intercession (Rev. 5:8-9) in every city.'
      ),
    },
    {
      type: 'rows',
      title: t('Los temas de la intercesión corporativa', 'The themes of corporate intercession'),
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
      type: 'scripture',
      text: t(
        'Y cuando hubo tomado el libro, los cuatro seres vivientes y los veinticuatro ancianos se postraron delante del Cordero; todos tenían arpas, y copas de oro llenas de incienso, que son las oraciones de los santos.',
        'And when he had taken the book, the four beasts and four and twenty elders fell down before the Lamb, having every one of them harps, and golden vials full of odours, which are the prayers of saints.'
      ),
      ref: 'Apocalipsis 5:8',
    },
    {
      type: 'split',
      title: t('Cómo suma una congregación', 'How a congregation joins'),
      text: t(
        'No hay que pertenecer a ECO ni firmar nada: una congregación toma un turno de la semana y lo sostiene con su propio equipo. Coordinamos el calendario, acompañamos al equipo y damos el entrenamiento, presencial o en línea. El vínculo con la gente se queda en su iglesia local.',
        'There is no membership and nothing to sign: a congregation takes a shift of the week and holds it with its own team. We coordinate the calendar, walk with the team and provide the training, in person or online. People’s ties stay with their local church.'
      ),
      items: [
        t('Un turno fijo a la semana, sostenido por tu propio equipo', 'One fixed weekly shift, held by your own team'),
        t('Entrenamiento presencial o en línea para el equipo', 'In-person or online training for the team'),
        t('Calendario compartido entre las congregaciones del movimiento', 'A calendar shared across the congregations of the movement'),
      ],
      action: { label: t('Hablar con el equipo', 'Talk to the team'), href: { es: '/contacto', en: '/en/contact' } },
    },
    {
      type: 'figure',
      src: '/img/altar.png',
      w: 1200,
      h: 1200,
      alt: t(
        'Una llama celeste encendida sobre fondo claro, rodeada de anillos concéntricos finos.',
        'A cyan flame burning against a pale ground, surrounded by fine concentric rings.'
      ),
      caption: t(
        'La llama del logotipo: el fuego que, según Levítico 6:13, arde continuamente sobre el altar y nunca se apaga.',
        'The flame in the logo: the fire that, in Leviticus 6:13, burns continually on the altar and never goes out.'
      ),
    },
    {
      type: 'cta',
      title: t('El lugar para que no se apague', 'A place so it never goes out'),
      text: t(
        `El cuarto de oración —${proyecto.superficie} m² en dos plantas al norte de Quito— es lo que permitirá sostener la oración 24/7 en un solo lugar, todos los días.`,
        `The prayer room — ${proyecto.superficie} m² over two floors in northern Quito — is what will make it possible to sustain 24/7 prayer in one place, every day.`
      ),
      actions: [
        { label: t('Ver el proyecto', 'See the project'), href: { es: '/proyecto', en: '/en/prayer-room-project' }, kind: 'primary' },
      ],
    },
  ],
}
