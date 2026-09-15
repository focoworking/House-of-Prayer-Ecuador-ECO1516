/**
 * Nosotros, formacion, misiones, eventos, dar, recursos, contacto,
 * preguntas y privacidad.
 */
import { t, site, emergencia } from './site.js'
import { historia, preguntas } from './datos.js'

export const nosotros = {
  slug: { es: 'nosotros', en: 'about' },
  title: t(
    'Quiénes somos — quince años de oración continua en Ecuador',
    'About us — fifteen years of continuous prayer in Ecuador'
  ),
  description: t(
    'Nació en 2011 en una sala prestada en Quito y hoy sostiene oración con adoración 24 horas, una escuela y equipos de misión en cinco provincias. La historia, fechada.',
    'It began in 2011 in a borrowed living room in Quito and today sustains 24-hour prayer with worship, a school and outreach teams in five provinces. The story, dated.'
  ),
  priority: 0.8,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Desde 2011', 'Since 2011'),
      title: t('Un proyecto joven con quince años encima', 'A young project with fifteen years behind it'),
      lead: t(
        'No llegamos de afuera ni copiamos un modelo. Empezamos con doce personas, aprendimos a sostener turnos y crecimos despacio hasta cubrir el día entero. Esto es lo que hay y lo que no hay.',
        'We did not arrive from outside or copy a model. We started with twelve people, learned to hold watches and grew slowly until the whole day was covered. Here is what exists and what does not.'
      ),
    },
    {
      type: 'lead',
      title: t('Qué somos', 'What we are'),
      text: t(
        'Somos una casa de oración: un lugar donde se ora con música en vivo sin interrupción, y desde donde salen equipos a ayudar en la ciudad. No somos una denominación y no pedimos que nadie deje su iglesia. Trabajamos con iglesias de tradiciones distintas y sostenemos una sola cosa en común: la sala encendida.',
        'We are a house of prayer: a place where prayer goes on with live music without interruption, and from which teams go out to help across the city. We are not a denomination and we do not ask anyone to leave their church. We work with churches from different traditions and hold one thing in common: keeping the room lit.'
      ),
    },
    {
      type: 'rows',
      title: t('Lo que sostenemos', 'What we hold to'),
      items: [
        {
          title: t('La oración es el trabajo, no la preparación del trabajo', 'Prayer is the work, not the warm-up'),
          text: t(
            'Los doce bloques diarios no son antesala de otra cosa. Todo lo demás —escuela, misiones, congregación— sale de ahí.',
            'The twelve daily watches are not a preamble to something else. Everything else — school, outreach, congregation — comes out of them.'
          ),
        },
        {
          title: t('La ayuda no se condiciona', 'Help is never conditional'),
          text: t(
            'Nadie tiene que creer, dar ni asistir a nada para recibir oración, alimento o acompañamiento.',
            'Nobody has to believe, give or attend anything to receive prayer, food or accompaniment.'
          ),
        },
        {
          title: t('Las cuentas se publican', 'The books are published'),
          text: t(
            'Informe de uso de fondos cada semestre, con el desglose por área. Si algo no se puede explicar, no se hace.',
            'A use-of-funds report every six months, broken down by area. If something cannot be explained, it is not done.'
          ),
        },
        {
          title: t('Nadie sirve solo', 'Nobody serves alone'),
          text: t(
            'Todo turno tiene dos personas como mínimo y todo equipo de misión sale acompañado. También en la línea telefónica.',
            'Every watch has at least two people and every outreach team goes out accompanied. The phone line too.'
          ),
        },
      ],
    },
    { type: 'timeline', title: t('Quince años, fechados', 'Fifteen years, dated'), items: historia },
    {
      type: 'checklist',
      title: t('Lo que no hacemos', 'What we do not do'),
      items: [
        t('No cobramos por oración, por acompañamiento ni por entrar a la sala.', 'We do not charge for prayer, accompaniment or entry to the room.'),
        t('No prometemos sanidad, milagros ni resultados a cambio de una ofrenda.', 'We do not promise healing, miracles or results in exchange for an offering.'),
        t('No publicamos peticiones de oración ni nombres sin permiso explícito.', 'We do not publish prayer requests or names without explicit permission.'),
        t('No reemplazamos atención médica, psicológica ni servicios de emergencia.', 'We do not replace medical care, psychological care or emergency services.'),
      ],
    },
    {
      type: 'cta',
      title: t('Ven a verlo', 'Come and see'),
      text: t('La forma más rápida de saber si esto es real es entrar a la sala una madrugada.', 'The fastest way to know if this is real is to walk into the room at 3am.'),
      actions: [
        { label: t('Cómo llegar', 'How to get here'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' },
        { label: t('Ver la sala', 'See the room'), href: { es: '/oracion', en: '/en/prayer-room' }, kind: 'ghost' },
      ],
    },
  ],
}

export const formacion = {
  slug: { es: 'formacion', en: 'training' },
  title: t(
    'Formación — internado y escuela de adoración en Quito',
    'Training — six-month internship and worship school in Quito'
  ),
  description: t(
    'Internado presencial de seis meses en oración, adoración, estudio bíblico y misión urbana en Quito, con becas para quien no puede pagar.',
    'A six-month residential internship in prayer, worship, Bible study and urban mission in Quito, with scholarships for those who cannot pay.'
  ),
  priority: 0.8,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Escuela', 'School'),
      title: t('Seis meses que cambian el ritmo de una vida', 'Six months that change the rhythm of a life'),
      lead: t(
        'El internado combina turnos reales en la sala, clases de estudio bíblico, formación musical y salidas semanales de misión urbana. No es un retiro: se sirve desde el primer día.',
        'The internship combines real watches in the room, Bible study classes, musical training and weekly urban outreach. It is not a retreat: you serve from day one.'
      ),
      actions: [
        { label: t('Postular', 'Apply'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' },
        { label: t('Ver fechas', 'See dates'), href: { es: '/eventos', en: '/en/events' }, kind: 'ghost' },
      ],
    },
    {
      type: 'cards',
      title: t('Tres programas', 'Three programmes'),
      items: [
        {
          title: t('Internado de seis meses', 'Six-month internship'),
          text: t(
            'Presencial en Quito, dos cohortes al año (enero y julio). Veinte horas semanales entre sala, aula y misión. Con becas completas y parciales.',
            'Residential in Quito, two cohorts a year (January and July). Twenty weekly hours across room, classroom and outreach. Full and partial scholarships available.'
          ),
        },
        {
          title: t('Escuela de adoración', 'Worship school'),
          text: t(
            'Doce semanas para músicos y cantantes que quieren sostener turnos: repertorio, dinámica de equipo, sonido y liderazgo desde el instrumento.',
            'Twelve weeks for musicians and singers who want to hold watches: repertoire, team dynamics, sound and leading from the instrument.'
          ),
        },
        {
          title: t('Turnos abiertos', 'Open watches'),
          text: t(
            'Sin aula y sin costo: tomas un turno fijo a la semana durante tres meses y aprendes sirviendo, acompañado por un equipo.',
            'No classroom, no cost: you take one fixed weekly watch for three months and learn by serving, alongside a team.'
          ),
        },
      ],
    },
    {
      type: 'steps',
      title: t('Cómo se postula', 'How to apply'),
      items: [
        { title: t('Escribes', 'You write'), text: t('Un correo o un WhatsApp contando quién eres y por qué. Sin formularios de diez páginas.', 'An email or a WhatsApp saying who you are and why. No ten-page forms.') },
        { title: t('Conversamos', 'We talk'), text: t('Una conversación de una hora, presencial o en línea, con dos personas del equipo.', 'A one-hour conversation, in person or online, with two people from the team.') },
        { title: t('Visitas una semana', 'You visit for a week'), text: t('Antes de decidir, haces una semana completa de turnos. Si no encaja, no pasa nada.', 'Before deciding, you do a full week of watches. If it does not fit, that is fine.') },
        { title: t('Entras a la cohorte', 'You join the cohort'), text: t('Con beca si la necesitas. El dinero nunca es el filtro.', 'With a scholarship if you need one. Money is never the filter.') },
      ],
    },
    {
      type: 'faq',
      title: t('Sobre la formación', 'About the training'),
      items: [
        {
          q: t('¿Cuánto cuesta el internado?', 'How much does the internship cost?'),
          a: t(
            'El internado tiene un costo de sostenimiento mensual, y existe beca completa o parcial para quien no puede cubrirlo. Nadie queda fuera por dinero: se postula igual y se resuelve en la conversación.',
            'The internship has a monthly sustaining cost, with full or partial scholarships for those who cannot cover it. Nobody is left out over money: you apply the same way and it is resolved in the conversation.'
          ),
        },
        {
          q: t('¿Necesito saber tocar un instrumento?', 'Do I need to play an instrument?'),
          a: t(
            'No para el internado. La escuela de adoración sí pide nivel intermedio en tu instrumento o en voz, porque se entra directo a sostener turnos con el equipo.',
            'Not for the internship. The worship school does require intermediate level on your instrument or voice, because you go straight into holding watches with the team.'
          ),
        },
        {
          q: t('¿Hay alojamiento?', 'Is housing available?'),
          a: t(
            'Hay casas de estudiantes con cupos limitados cerca de la sede, en el norte de Quito, y ayudamos a coordinar alojamiento compartido para quienes vienen de otras provincias.',
            'There are student houses with limited places near the base, in northern Quito, and we help arrange shared housing for those coming from other provinces.'
          ),
        },
      ],
      schema: true,
    },
  ],
}

export const misiones = {
  slug: { es: 'misiones', en: 'outreach' },
  title: t(
    'Misiones y compasión — equipos en cinco provincias del Ecuador',
    'Outreach and compassion — teams in five provinces of Ecuador'
  ),
  description: t(
    'Equipos semanales de compasión en Quito y salidas mensuales a cinco provincias: alimentos, acompañamiento a familias y oración en la calle.',
    'Weekly compassion teams in Quito and monthly trips to Pichincha, Guayas, Azuay, Tungurahua and Santo Domingo: food, family accompaniment and prayer on the street.'
  ),
  priority: 0.8,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Misiones', 'Outreach'),
      title: t('Lo que se ora en la sala se camina en la calle', 'What is prayed in the room is walked in the street'),
      lead: t(
        'Cada semana salen equipos de la sala a entregar alimentos, acompañar familias y orar con quien lo pida, en barrios de Quito y una vez al mes en otras provincias.',
        'Every week teams go out from the room to deliver food, walk with families and pray with whoever asks, in Quito neighbourhoods and once a month in other provinces.'
      ),
      actions: [
        { label: t('Sumarme a un equipo', 'Join a team'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' },
        { label: t('Sostener una salida', 'Fund a trip'), href: { es: '/dar', en: '/en/give' }, kind: 'ghost' },
      ],
    },
    {
      type: 'cards',
      title: t('Qué hacen los equipos', 'What the teams do'),
      items: [
        { title: t('Alimentos', 'Food'), text: t('Entrega semanal de raciones y canastas en barrios del sur y del noroccidente de Quito.', 'Weekly delivery of meals and food baskets in southern and north-western Quito neighbourhoods.') },
        { title: t('Acompañamiento a familias', 'Family accompaniment'), text: t('Visitas periódicas a familias en crisis: escuchar, orar y conectar con servicios públicos cuando hace falta.', 'Regular visits to families in crisis: listening, praying and connecting them to public services when needed.') },
        { title: t('Hospitales y casas de acogida', 'Hospitals and shelters'), text: t('Visitas coordinadas con capellanía y con las instituciones, nunca por sorpresa.', 'Visits coordinated with chaplaincy and the institutions, never unannounced.') },
        { title: t('Salidas a provincias', 'Trips to the provinces'), text: t('Una salida al mes con una iglesia local que recibe y coordina: el equipo apoya, no dirige.', 'One trip a month with a host local church that coordinates: the team supports, it does not take over.') },
      ],
    },
    {
      type: 'stats',
      items: [
        { value: '5', label: t('Provincias con salidas mensuales', 'Provinces with monthly trips') },
        { value: '52', label: t('Salidas al año en Quito', 'Trips a year in Quito') },
        { value: '0', label: t('Costo para quien recibe', 'Cost to those who receive') },
      ],
    },
    {
      type: 'split',
      title: t('Cómo trabajamos con iglesias locales', 'How we work with local churches'),
      text: t(
        'No abrimos sedes. Cuando una iglesia de otra provincia quiere sostener turnos o recibir un equipo, la iglesia local dirige y nosotros aportamos formación, calendario y músicos. El vínculo con la gente queda ahí, no con nosotros.',
        'We do not plant branches. When a church in another province wants to hold watches or host a team, the local church leads and we contribute training, calendar and musicians. The relationship with people stays there, not with us.'
      ),
      items: [
        t('Formación de equipo en dos fines de semana', 'Team training over two weekends'),
        t('Calendario de turnos compartido con la sala', 'Watch calendar shared with the room'),
        t('Acompañamiento mensual durante el primer año', 'Monthly accompaniment through the first year'),
      ],
      action: { label: t('Hablar con el equipo', 'Talk to the team'), href: { es: '/contacto', en: '/en/contact' } },
    },
  ],
}

export const eventos = {
  slug: { es: 'eventos', en: 'events' },
  title: t('Eventos y conferencias — Ecuador Casa de Oración', 'Events and conferences — Ecuador Casa de Oración'),
  description: t(
    'Vigilias, conferencias y cohortes del internado en Quito. Entrada libre o aporte voluntario, con transmisión en vivo para el resto de Ecuador.',
    'Vigils, conferences and internship cohorts in Quito. Free entry or voluntary offering, streamed live for the rest of Ecuador.'
  ),
  priority: 0.7,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Agenda', 'Calendar'),
      title: t('Lo que viene', 'What is coming'),
      lead: t(
        'Además de los doce bloques diarios, hay vigilias, conferencias y cohortes con fecha fija. Todo entra por la misma puerta: sin costo o con aporte voluntario.',
        'Beyond the twelve daily watches there are vigils, conferences and cohorts with fixed dates. Everything comes through the same door: free, or by voluntary offering.'
      ),
    },
    { type: 'events', title: t('Próximos eventos', 'Upcoming events'), schema: true },
    {
      type: 'cta',
      title: t('¿Vienes de otra ciudad?', 'Coming from another city?'),
      text: t(
        'Ayudamos a coordinar alojamiento compartido para equipos que viajan a una vigilia o conferencia. Avísanos con dos semanas.',
        'We help arrange shared housing for teams travelling to a vigil or conference. Give us two weeks’ notice.'
      ),
      actions: [{ label: t('Escribir', 'Write'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' }],
    },
  ],
}

export const dar = {
  slug: { es: 'dar', en: 'give' },
  title: t('Dar — sostén la sala, las becas y la ayuda directa', 'Give — sustain the room, the scholarships and direct aid'),
  description: t(
    'Tu donación sostiene tres cosas: los equipos de la sala 24/7, las becas del internado y la ayuda directa en misiones. Publicamos el uso de fondos cada semestre.',
    'Your giving sustains three things: the 24/7 room teams, internship scholarships and direct aid in outreach. We publish the use of funds every six months.'
  ),
  priority: 0.7,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Dar', 'Give'),
      title: t('Lo que das mantiene la sala encendida', 'What you give keeps the room lit'),
      lead: t(
        'No hay publicidad, no hay patrocinadores y no se cobra por nada de lo que hacemos. La casa se sostiene con donaciones de personas, la mayoría pequeñas y mensuales.',
        'There is no advertising, no sponsors and nothing we do is charged for. The house is sustained by people’s giving, mostly small and monthly.'
      ),
      actions: [{ label: t('Donar ahora', 'Give now'), href: { es: '/contacto', en: '/en/contact' }, kind: 'primary' }],
    },
    {
      type: 'rows',
      title: t('A dónde va, exactamente', 'Where it goes, exactly'),
      items: [
        { title: t('Equipos de la sala', 'Room teams'), text: t('Sostenimiento de músicos e intercesores de tiempo completo, sonido, transmisión y servicios del edificio.', 'Support for full-time musicians and intercessors, sound, streaming and building costs.') },
        { title: t('Becas del internado', 'Internship scholarships'), text: t('Cubren el costo mensual de quienes no pueden pagarlo. Es la línea que más crece y la que más falta hace.', 'They cover the monthly cost for those who cannot pay it. This is the fastest-growing line and the one most needed.') },
        { title: t('Ayuda directa', 'Direct aid'), text: t('Alimentos, transporte y gastos concretos de familias acompañadas por los equipos de compasión.', 'Food, transport and concrete expenses of families walked with by the compassion teams.') },
      ],
    },
    {
      type: 'checklist',
      title: t('Nuestro compromiso con quien da', 'Our commitment to those who give'),
      items: [
        t('Informe de uso de fondos publicado cada semestre, con desglose por área.', 'Use-of-funds report published every six months, broken down by area.'),
        t('Ninguna donación cambia el acceso a oración, formación o ayuda.', 'No donation changes anyone’s access to prayer, training or help.'),
        t('No vendemos, cedemos ni intercambiamos datos de donantes.', 'We do not sell, share or trade donor data.'),
        t('Puedes cancelar un aporte mensual con un mensaje, sin preguntas.', 'You can cancel a monthly gift with one message, no questions asked.'),
      ],
    },
    {
      type: 'faq',
      title: t('Sobre dar', 'About giving'),
      items: [preguntas[6]],
      schema: true,
    },
  ],
}

export const recursos = {
  slug: { es: 'recursos', en: 'resources' },
  title: t('Recursos — enseñanzas, guías de oración y música', 'Resources — teaching, prayer guides and music'),
  description: t(
    'Enseñanzas en audio y video, guías para sostener un turno de oración y el repertorio de la sala. Todo gratuito y descargable, sin registro.',
    'Audio and video teaching, guides for holding a prayer watch and the room’s repertoire. All free and downloadable, no sign-up.'
  ),
  priority: 0.6,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Recursos', 'Resources'),
      title: t('Todo abierto, sin registro', 'Everything open, no sign-up'),
      lead: t(
        'Publicamos lo que usamos: guías de turno, enseñanzas y el repertorio de la sala. Puedes usarlo en tu iglesia o en tu casa sin pedir permiso y sin pagar.',
        'We publish what we use: watch guides, teaching and the room’s repertoire. Use it in your church or at home without asking permission and without paying.'
      ),
    },
    {
      type: 'links',
      title: t('Empieza por aquí', 'Start here'),
      items: [
        { label: t('Cómo sostener un turno de dos horas', 'How to hold a two-hour watch'), note: t('Guía en PDF, 12 páginas', 'PDF guide, 12 pages'), href: { es: '/contacto', en: '/en/contact' } },
        { label: t('Transmisión en vivo de la sala', 'Live stream of the room'), note: t('24 horas, YouTube', '24 hours, YouTube'), href: site.streamUrl, external: true },
        { label: t('Enseñanzas en audio', 'Audio teaching'), note: t('Podcast semanal', 'Weekly podcast'), href: site.social.find((s) => s.label === 'Spotify').url, external: true },
        { label: t('Preguntas frecuentes', 'Frequently asked questions'), note: t('Respuestas cortas', 'Short answers'), href: { es: '/preguntas', en: '/en/faq' } },
      ],
    },
  ],
}

export const contacto = {
  slug: { es: 'contacto', en: 'contact' },
  title: t('Contacto y cómo llegar — Ecuador Casa de Oración, Quito', 'Contact and directions — Ecuador Casa de Oración, Quito'),
  description: t(
    'Dirección, teléfonos y cómo llegar a la sala de oración en La Carolina, norte de Quito. Línea de oración 24/7 y WhatsApp siempre atendidos.',
    'Address, phone numbers and directions to the prayer room in La Carolina, northern Quito. The 24/7 prayer line and WhatsApp are always answered.'
  ),
  priority: 0.7,
  sections: [
    {
      type: 'hero',
      eyebrow: t('Contacto', 'Contact'),
      title: t('Dónde estamos y cómo se nos encuentra', 'Where we are and how to reach us'),
      lead: t(
        'La sala está en el sector La Carolina, norte de Quito. Abierta las 24 horas, todos los días del año. La oficina atiende en horario laboral; la línea de oración, siempre.',
        'The room is in La Carolina, northern Quito. Open 24 hours, every day of the year. The office keeps business hours; the prayer line never closes.'
      ),
      actions: [
        { label: t('Abrir en el mapa', 'Open in maps'), href: 'https://www.google.com/maps/search/?api=1&query=-0.180653,-78.467834', kind: 'primary', external: true },
        { label: t('Llamar a la línea 24/7', 'Call the 24/7 line'), href: `tel:${site.prayerLine}`, kind: 'ghost' },
      ],
    },
    { type: 'contact' },
    {
      type: 'rows',
      title: t('Cómo llegar', 'How to get here'),
      items: [
        { title: t('En transporte público', 'By public transport'), text: t('Parada del Ecovía a cinco minutos caminando; varias líneas de bus sobre la Av. Amazonas.', 'Ecovía stop five minutes on foot; several bus lines along Av. Amazonas.') },
        { title: t('En carro', 'By car'), text: t('Parqueo en la calle y un parqueadero público a media cuadra. De noche el acceso es por la puerta lateral.', 'Street parking and a public car park half a block away. At night access is through the side door.') },
        { title: t('De madrugada', 'In the small hours'), text: t('La puerta lateral tiene timbre y siempre hay un anfitrión. Si vienes solo y quieres avisar antes, escríbenos por WhatsApp.', 'The side door has a bell and there is always a host. If you are coming alone and want to let us know first, message us on WhatsApp.') },
        { title: t('Accesibilidad', 'Accessibility'), text: t('Acceso a nivel de calle, sin escalones, y baño accesible. Escríbenos si necesitas apoyo adicional.', 'Step-free access from the street and an accessible toilet. Write to us if you need further support.') },
      ],
    },
  ],
}

export const paginaPreguntas = {
  slug: { es: 'preguntas', en: 'faq' },
  title: t('Preguntas frecuentes — Ecuador Casa de Oración', 'Frequently asked questions — Ecuador Casa de Oración'),
  description: t(
    'Respuestas cortas y directas sobre la sala de oración 24/7, cómo pedir oración urgente, costos, ubicación, formación y uso de las donaciones.',
    'Short, direct answers about the 24/7 prayer room, how to ask for urgent prayer, costs, location, training and how giving is used.'
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
  noindexHint: false,
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
              'Las peticiones que llegan por formulario, WhatsApp, teléfono o correo las lee únicamente el equipo de intercesión de turno. No se publican, no se leen en voz alta con nombre y apellido sin permiso, y no se comparten con terceros.',
              'Requests arriving by form, WhatsApp, phone or email are read only by the intercession team on duty. They are not published, not read aloud with full names without permission, and not shared with third parties.'
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
