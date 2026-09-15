/**
 * Inicio, ayuda inmediata y sala de oracion. Son las tres paginas que
 * sostienen la promesa del proyecto, y por eso llevan la mayor densidad de
 * respuesta directa: cada seccion empieza contestando.
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
    'Oración con adoración 24 horas en Quito desde 2011. Pide oración ahora por teléfono o WhatsApp: un intercesor responde en menos de treinta minutos, gratis.',
    '24-hour house of prayer with worship in Quito since 2011. Ask for prayer now by phone or WhatsApp: an intercessor replies within thirty minutes, free, at any hour.'
  ),
  priority: 1.0,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Quito · desde 2011 · 15 años', 'Quito · since 2011 · 15 years'),
      title: t('La sala no se apaga. La línea tampoco.', 'The room never goes dark. Neither does the line.'),
      lead: t(
        'Somos una casa de oración con adoración las 24 horas en Quito. Si necesitas oración ahora mismo, escribe o llama: un intercesor te responde en menos de treinta minutos, a cualquier hora, sin costo.',
        'We are a 24-hour house of prayer with worship in Quito. If you need prayer right now, write or call: an intercessor answers within thirty minutes, at any hour, free of charge.'
      ),
      actions: [
        { label: t('Pide oración ahora', 'Ask for prayer now'), href: { es: '/ayuda', en: '/en/help' }, kind: 'primary' },
        { label: t('Ver la sala en vivo', 'Watch the room live'), href: site.streamUrl, kind: 'ghost', external: true },
      ],
      note: t(
        'Línea 24/7 · WhatsApp · presencial en La Carolina, norte de Quito',
        '24/7 line · WhatsApp · in person in La Carolina, northern Quito'
      ),
      live: true,
    },
    {
      type: 'stats',
      items: [
        { value: '24/7', label: t('Oración con adoración, todos los días', 'Prayer with worship, every day') },
        { value: '15', label: t('Años sosteniendo la sala', 'Years sustaining the room') },
        { value: '12', label: t('Bloques diarios de dos horas', 'Daily two-hour watches') },
        { value: '5', label: t('Provincias con equipos de misión', 'Provinces with outreach teams') },
      ],
    },
    {
      type: 'cards',
      title: t('Empieza por donde estás', 'Start where you are'),
      lead: t(
        'Tres puertas, y ninguna pide que seas de una iglesia ni que des nada.',
        'Three doors, and none of them asks you to belong to a church or to give anything.'
      ),
      items: [
        {
          title: t('Necesito oración hoy', 'I need prayer today'),
          text: t(
            'Cuéntanos qué pasa y un intercesor ora contigo por teléfono, por WhatsApp o en persona. Confidencial y gratuito.',
            'Tell us what is going on and an intercessor prays with you by phone, WhatsApp or in person. Confidential and free.'
          ),
          href: { es: '/ayuda', en: '/en/help' },
          cta: t('Ir a ayuda inmediata', 'Go to immediate help'),
        },
        {
          title: t('Quiero orar con ustedes', 'I want to pray with you'),
          text: t(
            'La sala está abierta día y noche. Entras, te sientas y te quedas el tiempo que quieras. También se transmite en vivo.',
            'The room is open day and night. Come in, sit down and stay as long as you like. It is streamed live too.'
          ),
          href: { es: '/oracion', en: '/en/prayer-room' },
          cta: t('Ver horarios y la sala', 'See the watches and the room'),
        },
        {
          title: t('Quiero formarme o servir', 'I want training, or to serve'),
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
      title: t('Quince años, sin trucos', 'Fifteen years, no tricks'),
      text: t(
        'Empezamos en 2011 con doce personas en una sala prestada. Hoy sostenemos doce bloques diarios de oración con adoración, una escuela, equipos de compasión en cinco provincias y una línea telefónica que no cuelga. El crecimiento fue lento y es verificable: está fechado abajo.',
        'We started in 2011 with twelve people in a borrowed living room. Today we sustain twelve daily watches of prayer with worship, a school, compassion teams in five provinces and a phone line that never hangs up. The growth was slow and it is verifiable: it is dated below.'
      ),
      items: [
        t('Sala abierta las 24 horas, todos los días del año', 'Room open 24 hours, every day of the year'),
        t('Línea de oración atendida por intercesores, no por un contestador', 'Prayer line answered by intercessors, not a machine'),
        t('Informe de uso de fondos publicado cada semestre', 'Use-of-funds report published every six months'),
      ],
      action: { label: t('Conoce la casa', 'Get to know the house'), href: { es: '/nosotros', en: '/en/about' } },
    },
    { type: 'timeline', title: t('La línea de tiempo', 'The timeline'), items: historia },
    {
      type: 'schedule',
      title: t('Los doce bloques de hoy', 'Today’s twelve watches'),
      lead: t(
        'Cada bloque dura dos horas y lo sostiene un equipo distinto. Puedes entrar en cualquiera, sin avisar.',
        'Each watch lasts two hours and a different team holds it. You can walk into any of them, unannounced.'
      ),
      items: bloques,
      action: { label: t('Cómo funciona la sala', 'How the room works'), href: { es: '/oracion', en: '/en/prayer-room' } },
    },
    {
      type: 'quote',
      text: t(
        '«Mi casa será llamada casa de oración para todos los pueblos.»',
        '“My house shall be called a house of prayer for all peoples.”'
      ),
      author: t('Isaías 56:7', 'Isaiah 56:7'),
    },
    { type: 'faq', title: t('Preguntas frecuentes', 'Frequently asked questions'), items: preguntas.slice(0, 5), schema: true },
    {
      type: 'cta',
      title: t('¿Hablamos ahora?', 'Shall we talk now?'),
      text: t(
        'No hace falta cita, ni formulario largo, ni explicar demasiado. Escribe una línea y alguien ora contigo.',
        'No appointment, no long form, no need to explain too much. Write one line and someone prays with you.'
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
    'Ask for prayer right now: call, WhatsApp us or fill the form. An intercessor replies within thirty minutes, at any hour, free and confidential. Ecuador, 24/7.'
  ),
  priority: 0.9,
  sections: [
    {
      type: 'hero',
      variant: 'urgent',
      eyebrow: t('Ayuda inmediata · 24 horas', 'Immediate help · 24 hours'),
      title: t('Cuéntanos qué pasa. Oramos contigo hoy.', 'Tell us what is happening. We pray with you today.'),
      lead: t(
        'Contesta una persona, no un robot, a cualquier hora del día o de la noche. Es gratuito, es confidencial y no tienes que pertenecer a ninguna iglesia. Tiempo de respuesta habitual: menos de treinta minutos.',
        'A person answers, not a bot, at any hour of the day or night. It is free, it is confidential and you do not have to belong to any church. Usual response time: under thirty minutes.'
      ),
      actions: [
        { label: t('Llamar ahora', 'Call now'), href: `tel:${site.prayerLine}`, kind: 'primary' },
        { label: t('Escribir por WhatsApp', 'Message on WhatsApp'), href: wa('Hola, necesito oración.'), kind: 'ghost', external: true },
      ],
      note: t(`Línea de oración ${site.prayerLineDisplay} · atendida siempre`, `Prayer line ${site.prayerLineDisplay} · always answered`),
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
          title: t('Seguimos en contacto si quieres', 'We stay in touch if you want'),
          text: t(
            'Te podemos acompañar por semanas, conectarte con la sala o con un equipo cerca de donde vives. Solo si tú lo pides.',
            'We can walk with you for weeks, connect you with the room or with a team near where you live. Only if you ask.'
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
        'Tu petición la lee únicamente el equipo de intercesión. No se publica, no se comparte y no se usa para enviarte promociones.',
        'Your request is read only by the intercession team. It is not published, not shared and not used to send you promotions.'
      ),
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
          title: t('Oración por enfermos', 'Prayer for the sick'),
          text: t(
            'El bloque del mediodía se dedica a orar por enfermos por nombre. Envía el nombre y oramos ese mismo día.',
            'The midday watch is set aside to pray for the sick by name. Send the name and we pray that same day.'
          ),
        },
        {
          title: t('Oración por tu ciudad o tu iglesia', 'Prayer for your city or church'),
          text: t(
            'Coordinamos turnos con iglesias de otras provincias. Si quieres sumar tu equipo a la cobertura, escríbenos.',
            'We coordinate watches with churches in other provinces. To add your team to the coverage, write to us.'
          ),
          href: { es: '/contacto', en: '/en/contact' },
          cta: t('Escribir', 'Write'),
        },
      ],
    },
    {
      type: 'faq',
      title: t('Antes de escribir', 'Before you write'),
      items: preguntas.slice(1, 6),
      schema: true,
    },
  ],
}

export const oracion = {
  slug: { es: 'oracion', en: 'prayer-room' },
  title: t(
    'Sala de oración 24/7 en Quito — horarios y transmisión en vivo',
    '24/7 prayer room in Quito — watches and live stream'
  ),
  description: t(
    'Sala de oración con adoración abierta 24 horas en La Carolina, norte de Quito. Doce bloques diarios de dos horas, entrada libre y transmisión en vivo.',
    'The prayer room with worship is open 24 hours in La Carolina, northern Quito. Twelve daily two-hour watches, free entry and a live stream for all Ecuador.'
  ),
  priority: 0.9,
  sections: [
    {
      type: 'hero',
      eyebrow: t('La sala', 'The room'),
      title: t('Abierta las 24 horas. Sin registro, sin ofrenda.', 'Open 24 hours. No registration, no offering.'),
      lead: t(
        'Un equipo de músicos e intercesores sostiene la oración con adoración en bloques de dos horas, día y noche. Puedes entrar en cualquier momento, quedarte lo que quieras y salir sin avisar.',
        'A team of musicians and intercessors sustains prayer with worship in two-hour watches, day and night. You can walk in at any time, stay as long as you like and leave without a word.'
      ),
      actions: [
        { label: t('Ver en vivo', 'Watch live'), href: site.streamUrl, kind: 'primary', external: true },
        { label: t('Cómo llegar', 'How to get here'), href: { es: '/contacto', en: '/en/contact' }, kind: 'ghost' },
      ],
      live: true,
    },
    {
      type: 'schedule',
      title: t('Los doce bloques', 'The twelve watches'),
      lead: t(
        'El mismo calendario todos los días del año, incluidos feriados. Cada bloque tiene un enfoque y un equipo.',
        'The same calendar every day of the year, holidays included. Each watch has its own focus and team.'
      ),
      items: bloques,
      note: t(
        'Los bloques de madrugada son los más silenciosos: si vienes por primera vez y te incomoda la gente, ese es tu momento.',
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
            'No hay predicación dirigida a los visitantes, ni llamados al frente, ni momentos incómodos. La sala ora, tú decides qué haces.',
            'There is no preaching aimed at visitors, no altar calls, no awkward moments. The room prays; you decide what you do.'
          ),
        },
        {
          title: t('Puedes pedir oración en el momento', 'You can ask for prayer on the spot'),
          text: t(
            'En cada bloque hay dos personas disponibles para orar contigo aparte, en voz baja, cuando lo pidas.',
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
      type: 'split',
      title: t('Si no estás en Quito', 'If you are not in Quito'),
      text: t(
        'La transmisión funciona las 24 horas y llega a todo Ecuador y al exterior. Muchos equipos de Guayaquil, Cuenca y Ambato sostienen su propio turno conectados a la sala, con el mismo calendario.',
        'The stream runs 24 hours and reaches all of Ecuador and beyond. Teams in Guayaquil, Cuenca and Ambato hold their own watch connected to the room, on the same calendar.'
      ),
      items: [
        t('Transmisión continua, sin cortes entre bloques', 'Continuous stream, no gaps between watches'),
        t('Turnos remotos coordinados con tu iglesia local', 'Remote watches coordinated with your local church'),
        t('Línea de oración con cobertura nacional', 'Prayer line with nationwide coverage'),
      ],
      action: { label: t('Sumar a mi equipo', 'Add my team'), href: { es: '/contacto', en: '/en/contact' } },
    },
    {
      type: 'cta',
      title: t('Ven esta noche', 'Come tonight'),
      text: t(
        'La sala está encendida ahora mismo. Si estás leyendo esto de madrugada, es literal.',
        'The room is lit right now. If you are reading this at 3am, that is literal.'
      ),
      actions: [
        { label: t('Cómo llegar', 'How to get here'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' },
        { label: t('Pedir oración', 'Ask for prayer'), href: { es: '/ayuda', en: '/en/help' }, kind: 'ghost' },
      ],
    },
  ],
}
