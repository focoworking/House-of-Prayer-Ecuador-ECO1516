/**
 * Inicio, ayuda inmediata y sala de oración. Son las tres páginas que
 * sostienen la promesa del proyecto.
 *
 * Dos registros conviven a propósito. El de la casa es profético: habla de
 * altar, de guardas sobre los muros y de visitación, porque eso es lo que
 * la congregación cree y sostiene. El de /ayuda es llano: quien llega ahí a
 * las tres de la mañana no necesita vocabulario, necesita un teléfono.
 *
 * Toda cita bíblica es Reina-Valera 1960, textual, con su referencia. Una
 * Escritura mal citada le cuesta a esta casa más que un titular flojo.
 */
import { t, site } from './site.js'
import { historia, bloques, preguntas } from './datos.js'

const wa = (texto) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`

export const inicio = {
  slug: { es: 'index', en: 'index' },
  title: t(
    'Ecuador Casa de Oración — oración 24/7 y ayuda inmediata en Quito',
    'Ecuador Casa de Oración — 24/7 prayer and immediate help in Quito'
  ),
  description: t(
    'Altar de oración con adoración 24 horas en Quito desde 2011. Pide oración ahora por teléfono o WhatsApp: un intercesor responde en menos de treinta minutos, gratis.',
    '24-hour altar of prayer with worship in Quito since 2011. Ask for prayer now by phone or WhatsApp: an intercessor replies within thirty minutes, free.'
  ),
  priority: 1.0,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Quito · desde 2011 · 15 años de clamor', 'Quito · since 2011 · 15 years of crying out'),
      title: t('El altar no se apaga. La línea tampoco.', 'The altar never goes out. Neither does the line.'),
      lead: t(
        'Somos guardas puestos sobre los muros de Ecuador: oración con adoración las 24 horas en Quito. Si necesitas que alguien clame contigo ahora mismo, escribe o llama. Un intercesor responde en menos de treinta minutos, a cualquier hora, sin costo.',
        'We are watchmen set on the walls of Ecuador: prayer with worship 24 hours a day in Quito. If you need someone to cry out with you right now, write or call. An intercessor answers within thirty minutes, at any hour, at no cost.'
      ),
      image: {
        src: '/img/vigilia.png',
        w: 2000,
        h: 1125,
        alt: t(
          'Noche andina: la cordillera en silueta bajo un cielo estrellado y una columna de luz que sube desde el valle.',
          'Andean night: the cordillera in silhouette under a starry sky, with a column of light rising from the valley.'
        ),
      },
      actions: [
        { label: t('Pide oración ahora', 'Ask for prayer now'), href: { es: '/ayuda', en: '/en/help' }, kind: 'primary' },
        { label: t('Ver la sala en vivo', 'Watch the room live'), href: site.streamUrl, kind: 'ghost', external: true },
      ],
      note: t(
        'Línea 24/7 · WhatsApp · presencial en La Carolina, norte de Quito',
        '24/7 line · WhatsApp · in person in La Carolina, northern Quito'
      ),
      live: true,
      verse: {
        text: t(
          '«Sobre tus muros, oh Jerusalén, he puesto guardas; todo el día y toda la noche no callarán jamás.»',
          '“On your walls, O Jerusalem, I have set watchmen; all the day and all the night they shall never be silent.”'
        ),
        ref: 'Isaías 62:6',
      },
    },
    {
      type: 'stats',
      items: [
        { value: '24/7', label: t('Oración con adoración, todos los días', 'Prayer with worship, every day') },
        { value: '15', label: t('Años sosteniendo el altar', 'Years sustaining the altar') },
        { value: '12', label: t('Vigilias diarias de dos horas', 'Daily two-hour watches') },
        { value: '5', label: t('Provincias con equipos enviados', 'Provinces with teams sent out') },
      ],
    },
    {
      type: 'scripture',
      text: t(
        'Porque mi casa será llamada casa de oración para todos los pueblos.',
        'For my house shall be called a house of prayer for all peoples.'
      ),
      ref: 'Isaías 56:7',
    },
    {
      type: 'cards',
      title: t('Empieza por donde estás', 'Start where you are'),
      lead: t(
        'Tres puertas, y ninguna te pide que seas de una iglesia ni que des nada.',
        'Three doors, and none of them asks you to belong to a church or to give anything.'
      ),
      items: [
        {
          title: t('Necesito oración hoy', 'I need prayer today'),
          text: t(
            'Cuéntanos qué está pasando y un intercesor clama contigo por teléfono, por WhatsApp o en persona. Confidencial y gratuito.',
            'Tell us what is happening and an intercessor cries out with you by phone, WhatsApp or in person. Confidential and free.'
          ),
          href: { es: '/ayuda', en: '/en/help' },
          cta: t('Ir a ayuda inmediata', 'Go to immediate help'),
        },
        {
          title: t('Quiero orar con ustedes', 'I want to pray with you'),
          text: t(
            'La sala está abierta día y noche. Entras, te sientas delante del Señor y te quedas el tiempo que quieras. También se transmite en vivo.',
            'The room is open day and night. Come in, sit before the Lord and stay as long as you like. It is streamed live too.'
          ),
          href: { es: '/oracion', en: '/en/prayer-room' },
          cta: t('Ver las vigilias y la sala', 'See the watches and the room'),
        },
        {
          title: t('Quiero ser formado y enviado', 'I want to be trained and sent'),
          text: t(
            'Internados de seis meses, escuela de adoración y equipos de misión urbana. Con becas para quien no puede pagar.',
            'Six-month internships, a worship school and urban outreach teams. With scholarships for those who cannot pay.'
          ),
          href: { es: '/formacion', en: '/en/training' },
          cta: t('Ver la formación', 'See the training'),
        },
      ],
    },
    {
      type: 'split',
      title: t('Quince años, sin atajos', 'Fifteen years, no shortcuts'),
      text: t(
        'Empezamos en 2011 con doce personas en una sala prestada. Hoy sostenemos doce vigilias diarias de oración con adoración, una escuela, equipos de compasión en cinco provincias y una línea telefónica que no cuelga. El Señor lo hizo despacio y lo hizo verificable: está fechado abajo.',
        'We began in 2011 with twelve people in a borrowed living room. Today we sustain twelve daily watches of prayer with worship, a school, compassion teams in five provinces and a phone line that never hangs up. The Lord did it slowly and He did it verifiably: it is dated below.'
      ),
      items: [
        t('El altar encendido las 24 horas, todos los días del año', 'The altar lit 24 hours, every day of the year'),
        t('La línea la atienden intercesores, no un contestador', 'The line is answered by intercessors, not a machine'),
        t('Informe de uso de fondos publicado cada semestre', 'Use-of-funds report published every six months'),
      ],
      image: {
        src: '/img/clamor.png',
        w: 1600,
        h: 1200,
        alt: t(
          'Dos columnas de humo de incienso que suben en la oscuridad, una morada y otra celeste.',
          'Two columns of incense smoke rising in the dark, one violet and one cyan.'
        ),
      },
      action: { label: t('Conoce la casa', 'Get to know the house'), href: { es: '/nosotros', en: '/en/about' } },
    },
    { type: 'timeline', title: t('La línea de tiempo', 'The timeline'), items: historia },
    {
      type: 'schedule',
      title: t('Las doce vigilias de hoy', 'Today’s twelve watches'),
      lead: t(
        'Cada vigilia dura dos horas y la sostiene un equipo distinto. Puedes entrar en cualquiera, sin avisar.',
        'Each watch lasts two hours and a different team holds it. You can walk into any of them, unannounced.'
      ),
      items: bloques,
      action: { label: t('Cómo funciona la sala', 'How the room works'), href: { es: '/oracion', en: '/en/prayer-room' } },
    },
    {
      type: 'scripture',
      text: t(
        '¿Y acaso Dios no hará justicia a sus escogidos, que claman a él día y noche? ¿Se tardará en responderles?',
        'And shall not God avenge his own elect, which cry day and night unto him, though he bear long with them?'
      ),
      ref: 'Lucas 18:7',
    },
    { type: 'faq', title: t('Preguntas frecuentes', 'Frequently asked questions'), items: preguntas.slice(0, 5), schema: true },
    {
      type: 'cta',
      title: t('¿Clamamos juntos ahora?', 'Shall we cry out together now?'),
      text: t(
        'No hace falta cita, ni formulario largo, ni saber cómo se ora. Escribe una línea y alguien se pone de acuerdo contigo delante del Señor.',
        'No appointment, no long form, no need to know how to pray. Write one line and someone will agree with you before the Lord.'
      ),
      actions: [
        { label: t('Escribir por WhatsApp', 'Message on WhatsApp'), href: wa('Hola, necesito oración.'), kind: 'primary', external: true },
        { label: t('Llamar a la línea 24/7', 'Call the 24/7 line'), href: `tel:${site.prayerLine}`, kind: 'ghost' },
      ],
    },
  ],
}

export const ayuda = {
  slug: { es: 'ayuda', en: 'help' },
  title: t(
    'Pide oración ahora — ayuda inmediata 24/7 en Ecuador',
    'Ask for prayer now — immediate 24/7 help in Ecuador'
  ),
  description: t(
    'Pide oración ahora: llama, escribe por WhatsApp o llena el formulario. Un intercesor responde en menos de treinta minutos, gratis y confidencial. Ecuador, 24/7.',
    'Ask for prayer now: call, WhatsApp us or fill the form. An intercessor replies within thirty minutes, free and confidential. Ecuador, 24/7.'
  ),
  priority: 0.9,
  sections: [
    {
      type: 'hero',
      variant: 'urgent',
      eyebrow: t('Ayuda inmediata · 24 horas', 'Immediate help · 24 hours'),
      title: t('Cuéntanos qué pasa. Oramos contigo hoy.', 'Tell us what is happening. We pray with you today.'),
      lead: t(
        'Contesta una persona, no un robot, a cualquier hora del día o de la noche. Es gratuito, es confidencial y no tienes que pertenecer a ninguna iglesia ni saber qué decir. Tiempo de respuesta habitual: menos de treinta minutos.',
        'A person answers, not a bot, at any hour of the day or night. It is free, it is confidential, and you do not have to belong to any church or know what to say. Usual response time: under thirty minutes.'
      ),
      actions: [
        { label: t('Llamar ahora', 'Call now'), href: `tel:${site.prayerLine}`, kind: 'primary' },
        { label: t('Escribir por WhatsApp', 'Message on WhatsApp'), href: wa('Hola, necesito oración.'), kind: 'ghost', external: true },
      ],
      note: t(`Línea de oración ${site.prayerLineDisplay} · atendida siempre`, `Prayer line ${site.prayerLineDisplay} · always answered`),
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
            'En menos de treinta minutos, a la hora que sea. Ora contigo por teléfono, por audio o por escrito, como prefieras.',
            'Within thirty minutes, whatever the hour. They pray with you by phone, by voice note or in writing, as you prefer.'
          ),
        },
        {
          title: t('Seguimos contigo si quieres', 'We stay with you if you want'),
          text: t(
            'Te podemos acompañar por semanas, llevar tu nombre a la vigilia del mediodía o conectarte con un equipo cerca de donde vives. Solo si tú lo pides.',
            'We can walk with you for weeks, carry your name into the midday watch, or connect you with a team near where you live. Only if you ask.'
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
        'Tu petición la lee únicamente el equipo de intercesión. No se publica, no se comparte, no se lee en voz alta con tu nombre y no se usa para enviarte promociones.',
        'Your request is read only by the intercession team. It is not published, not shared, never read aloud with your name, and not used to send you promotions.'
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
      title: t('Otras formas de ayuda que damos', 'Other kinds of help we give'),
      items: [
        {
          title: t('Acompañamiento pastoral', 'Pastoral accompaniment'),
          text: t(
            'Conversaciones periódicas con una persona del equipo, presenciales o en línea, sin costo.',
            'Regular conversations with someone from the team, in person or online, at no cost.'
          ),
        },
        {
          title: t('Ayuda práctica y alimentos', 'Practical help and food'),
          text: t(
            'Los equipos de compasión entregan alimentos y acompañan a familias en Quito cada semana. Cuéntanos tu caso.',
            'Compassion teams deliver food and walk with families in Quito every week. Tell us your situation.'
          ),
          href: { es: '/misiones', en: '/en/outreach' },
          cta: t('Ver misiones', 'See outreach'),
        },
        {
          title: t('Oración por los enfermos', 'Prayer for the sick'),
          text: t(
            'La vigilia del mediodía se dedica a orar por enfermos por nombre. Envía el nombre y clamamos ese mismo día.',
            'The midday watch is set apart to pray for the sick by name. Send the name and we cry out that same day.'
          ),
        },
        {
          title: t('Oración por tu ciudad o tu iglesia', 'Prayer for your city or church'),
          text: t(
            'Coordinamos vigilias con iglesias de otras provincias. Si quieres sumar tu equipo a la cobertura, escríbenos.',
            'We coordinate watches with churches in other provinces. To add your team to the coverage, write to us.'
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
  slug: { es: 'oracion', en: 'prayer-room' },
  title: t(
    'Sala de oración 24/7 en Quito — vigilias y transmisión en vivo',
    '24/7 prayer room in Quito — watches and live stream'
  ),
  description: t(
    'Sala de oración con adoración abierta 24 horas en La Carolina, norte de Quito. Doce vigilias diarias de dos horas, entrada libre y transmisión en vivo.',
    'Prayer room with worship open 24 hours in La Carolina, northern Quito. Twelve daily two-hour watches, free entry and a live stream.'
  ),
  priority: 0.9,
  sections: [
    {
      type: 'hero',
      eyebrow: t('La sala', 'The room'),
      title: t('Abierta las 24 horas. Sin registro, sin ofrenda.', 'Open 24 hours. No registration, no offering.'),
      lead: t(
        'Un equipo de músicos e intercesores sostiene la oración con adoración en vigilias de dos horas, día y noche. Puedes entrar en cualquier momento, quedarte lo que quieras y salir sin avisar.',
        'A team of musicians and intercessors sustains prayer with worship in two-hour watches, day and night. You can walk in at any time, stay as long as you like and leave without a word.'
      ),
      actions: [
        { label: t('Ver en vivo', 'Watch live'), href: site.streamUrl, kind: 'primary', external: true },
        { label: t('Cómo llegar', 'How to get here'), href: { es: '/contacto', en: '/en/contact' }, kind: 'ghost' },
      ],
      live: true,
      verse: {
        text: t(
          '«Mirad, bendecid a Jehová, vosotros todos los siervos de Jehová, los que en la casa de Jehová estáis por las noches.»',
          '“Behold, bless ye the LORD, all ye servants of the LORD, which by night stand in the house of the LORD.”'
        ),
        ref: 'Salmos 134:1',
      },
    },
    {
      type: 'schedule',
      title: t('Las doce vigilias', 'The twelve watches'),
      lead: t(
        'El mismo calendario todos los días del año, incluidos feriados. Cada vigilia tiene un enfoque y un equipo.',
        'The same calendar every day of the year, holidays included. Each watch has its own focus and team.'
      ),
      items: bloques,
      note: t(
        'Las vigilias de madrugada son las más silenciosas: si vienes por primera vez y te incomoda la gente, ese es tu momento.',
        'The night watches are the quietest: if this is your first time and crowds make you uneasy, that is your moment.'
      ),
    },
    {
      type: 'rows',
      title: t('Cómo funciona, en concreto', 'How it works, concretely'),
      items: [
        {
          title: t('Entras y te sientas', 'You come in and sit down'),
          text: t(
            'Hay un anfitrión en la puerta que te dice dónde sentarte y nada más. No se pasa lista ni se pide el nombre.',
            'A host at the door shows you where to sit and nothing else. No roll call, no names asked.'
          ),
        },
        {
          title: t('Nadie te va a señalar', 'Nobody will single you out'),
          text: t(
            'No hay predicación dirigida a los visitantes, ni llamados al frente, ni momentos incómodos. La sala adora, tú decides qué haces.',
            'There is no preaching aimed at visitors, no altar calls, no awkward moments. The room worships; you decide what you do.'
          ),
        },
        {
          title: t('Puedes pedir oración en el momento', 'You can ask for prayer on the spot'),
          text: t(
            'En cada vigilia hay dos personas disponibles para orar contigo aparte, en voz baja, cuando lo pidas.',
            'In every watch two people are free to pray with you separately, quietly, whenever you ask.'
          ),
        },
        {
          title: t('Se transmite, pero no se graba a la gente', 'It is streamed, but people are not filmed'),
          text: t(
            'La cámara apunta al escenario. Quien está en la sala no aparece en la transmisión.',
            'The camera points at the stage. Whoever is in the room does not appear on the stream.'
          ),
        },
      ],
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
      title: t('Si no estás en Quito', 'If you are not in Quito'),
      text: t(
        'La transmisión funciona las 24 horas y llega a todo Ecuador y al exterior. Equipos de Guayaquil, Cuenca y Ambato sostienen su propia vigilia conectados a la sala, con el mismo calendario. El altar no es un edificio: es un pueblo que no calla.',
        'The stream runs 24 hours and reaches all of Ecuador and beyond. Teams in Guayaquil, Cuenca and Ambato hold their own watch connected to the room, on the same calendar. The altar is not a building: it is a people that will not keep silent.'
      ),
      items: [
        t('Transmisión continua, sin cortes entre vigilias', 'Continuous stream, no gaps between watches'),
        t('Vigilias remotas coordinadas con tu iglesia local', 'Remote watches coordinated with your local church'),
        t('Línea de oración con cobertura nacional', 'Prayer line with nationwide coverage'),
      ],
      action: { label: t('Sumar a mi equipo', 'Add my team'), href: { es: '/contacto', en: '/en/contact' } },
    },
    {
      type: 'figure',
      src: '/img/altar.png',
      w: 1400,
      h: 1400,
      alt: t(
        'Una llama celeste encendida en la oscuridad, rodeada de anillos de luz concéntricos.',
        'A cyan flame burning in the dark, surrounded by concentric rings of light.'
      ),
      caption: t(
        'La llama del logotipo: el fuego que, según Levítico 6:13, arde continuamente sobre el altar y nunca se apaga.',
        'The flame in the logo: the fire that, in Leviticus 6:13, burns continually on the altar and never goes out.'
      ),
    },
    {
      type: 'cta',
      title: t('Ven esta noche', 'Come tonight'),
      text: t(
        'El altar está encendido ahora mismo. Si estás leyendo esto de madrugada, es literal.',
        'The altar is lit right now. If you are reading this at 3am, that is literal.'
      ),
      actions: [
        { label: t('Cómo llegar', 'How to get here'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' },
        { label: t('Pedir oración', 'Ask for prayer'), href: { es: '/ayuda', en: '/en/help' }, kind: 'ghost' },
      ],
    },
  ],
}
