/**
 * Datos comunes a todo el sitio: marca, NAP, navegacion, pie y textos de
 * interfaz. Cada cadena traducible es un objeto { es, en }.
 *
 * El sitio se publica en dos idiomas reales, con URLs propias y hreflang
 * cruzado: el espanol vive en la raiz (el pais es Ecuador) y el ingles bajo
 * /en/. No hay un cambiador que reescriba el DOM.
 */

export const LANGUAGES = ['es', 'en']
export const DEFAULT_LANGUAGE = 'es'

/** Azucar para declarar las dos versiones juntas y que ninguna se quede atras. */
export const t = (es, en) => ({ es, en })

export const site = {
  /* Nombre legal y de marca. `name` es el que va en los titulos, en los datos
     estructurados y en og:site_name. `wordmark` es la firma corta de la
     cabecera. `code` es el codigo interno del proyecto. */
  name: 'Ecuador Casa de Oración',
  wordmark: 'ECO',
  legalName: 'Ecuador Casa de Oración',
  code: 'ECO1516',
  /* Los nombres con los que la gente la busca y con los que un modelo la
     puede citar. Van al JSON-LD como alternateName: son la misma entidad. */
  alternateNames: [
    'ECO1516',
    'ECO Ecuador Casa de Oración',
    'Ecuador Casa de Oración',
    'House of Prayer Ecuador',
    'Casa de Oración 24/7 Quito',
  ],
  /* La frase de la organizacion, tal como la sostiene desde el principio. */
  mission: t(
    'Establecer la oración como cultura de la Iglesia ecuatoriana y como el medio del gobierno de Dios en Ecuador.',
    'To establish prayer as the culture of the Ecuadorian Church and as the means of God’s government in Ecuador.'
  ),
  tagline: t(
    'Oración con adoración día y noche en Ecuador',
    'Night-and-day prayer with worship in Ecuador'
  ),
  founded: 2011,
  origin: 'https://www.eco1516.org',

  /* ------------------------------------------------------------------ *
   * NAP (Name, Address, Phone). Es el dato que mas pesa en busqueda local
   * y en las respuestas de los asistentes: tiene que ser IDENTICO aqui, en
   * Google Business Profile, en Apple Business Connect, en Bing Places y en
   * cada directorio. Se edita en este archivo y en ningun otro sitio.
   * TODO ECO1516: sustituir por la direccion y los telefonos reales antes
   * de publicar. Los valores de abajo son marcadores de posicion.
   * ------------------------------------------------------------------ */
  address: {
    street: 'Av. Amazonas N34-451 y Av. Atahualpa',
    district: 'La Carolina',
    city: 'Quito',
    region: 'Pichincha',
    postalCode: '170102',
    country: 'EC',
    countryName: t('Ecuador', 'Ecuador'),
  },
  geo: { lat: -0.180653, lon: -78.467834 },

  phone: '+59322000000',
  phoneDisplay: '(02) 200 0000',
  /* La linea de oracion es la promesa central del sitio: atiende 24/7 y es
     el unico numero que aparece en la barra de accion fija. */
  prayerLine: '+593999000000',
  prayerLineDisplay: '099 900 0000',
  whatsapp: '593999000000',
  email: 'hola@eco1516.org',
  prayerEmail: 'oracion@eco1516.org',

  /* Horario de la sala: la sala esta abierta siempre, y eso se declara tal
     cual en los datos estructurados (Mo-Su 00:00-23:59). La oficina no. */
  officeHours: t('Lunes a viernes, 09:00 a 18:00', 'Monday to Friday, 9am to 6pm'),

  /* GEO: el area que servimos, enumerada. "Ecuador" no le dice a un motor que
     Sangolqui entra; la lista si. Va de dentro hacia fuera, con los nombres
     oficiales, que es como los busca la gente y como los cita un modelo. */
  areaServed: t('Quito, Pichincha y todo Ecuador', 'Quito, Pichincha and all of Ecuador'),
  areaServedPlaces: [
    'Quito, Pichincha, Ecuador',
    'Cumbayá, Quito, Ecuador',
    'Valle de los Chillos, Quito, Ecuador',
    'Sangolquí, Rumiñahui, Ecuador',
    'Calderón, Quito, Ecuador',
    'Pichincha, Ecuador',
    'Guayaquil, Guayas, Ecuador',
    'Cuenca, Azuay, Ecuador',
    'Ambato, Tungurahua, Ecuador',
    'Santo Domingo de los Tsáchilas, Ecuador',
    'Ecuador',
  ],

  streamUrl: 'https://www.youtube.com/@eco1516/live',
  giveUrl: '/dar',

  social: [
    { label: 'YouTube', icon: 'youtube', url: 'https://www.youtube.com/@eco1516' },
    { label: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/ecuadorcasadeoracion' },
    { label: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/EcuadorCasaDeOracion' },
    { label: 'Spotify', icon: 'spotify', url: 'https://open.spotify.com/show/eco1516' },
  ],
}

/** Recursos publicos de emergencia en Ecuador. Verificados, no inventados:
 *  van con su fuente para que cualquiera pueda comprobarlos. */
/**
 * La paleta sale del logotipo: manos moradas que forman una casa y una llama
 * celeste en el centro. El morado es la estructura y el celeste es la llama,
 * asi que el celeste se reserva para lo que enciende una accion —nunca para
 * texto corrido— y el morado sostiene titulares, bordes y fondos.
 * Estos valores los escribe scripts/build-pages.mjs en src/styles/marca.css,
 * para que el CSS y los metadatos (theme-color, OG) no puedan discrepar.
 */
export const marca = {
  morado: '#7B57A6',
  moradoOscuro: '#4A2F6B',
  moradoClaro: '#A98BCB',
  celeste: '#2DB6DC',
  celesteClaro: '#7FD6ED',
  tinta: '#241633',
  papel: '#FBFAFD',
}

export const emergencia = [
  {
    nombre: 'ECU 911',
    numero: '911',
    href: 'tel:911',
    horario: t('24 horas, todos los días', '24 hours, every day'),
    nota: t(
      'Emergencias médicas, riesgo de vida e intento de suicidio.',
      'Medical emergencies, risk to life and suicide attempts.'
    ),
    fuente: 'https://www.ecu911.gob.ec/',
  },
  {
    nombre: t('Línea 171, opción 6 — Salud mental (MSP)', 'Line 171, option 6 — Mental health (MSP)'),
    numero: '171',
    href: 'tel:171',
    horario: t('Todos los días, 07:00 a 20:00', 'Every day, 7am to 8pm'),
    nota: t(
      'Primeros auxilios psicológicos gratuitos del Ministerio de Salud Pública.',
      'Free psychological first aid from the Ministry of Public Health.'
    ),
    fuente: 'https://www.salud.gob.ec/a-traves-de-la-linea-171-msp-ofrece-atencion-en-salud-mental/',
  },
  {
    nombre: t('Línea 1800-DELITO', 'Line 1800-DELITO'),
    numero: '1800 335 486',
    href: 'tel:1800335486',
    horario: t('24 horas', '24 hours'),
    nota: t(
      'Denuncia anónima de violencia y delitos.',
      'Anonymous reporting of violence and crime.'
    ),
    fuente: 'https://www.ministeriodelinterior.gob.ec/',
  },
]

export const ui = {
  skip: t('Saltar al contenido', 'Skip to content'),
  home: t('Ecuador Casa de Oración, ir al inicio', 'Ecuador Casa de Oración, back to home'),
  mainNav: t('Navegación principal', 'Main navigation'),
  menu: t('Abrir menú', 'Open menu'),
  close: t('Cerrar menú', 'Close menu'),
  languageLabel: t('Read in English', 'Leer en español'),
  languageShort: t('EN', 'ES'),
  prayNow: t('Pide oración ahora', 'Ask for prayer now'),
  callNow: t('Llamar a la línea 24/7', 'Call the 24/7 line'),
  whatsapp: t('Escribir por WhatsApp', 'Message us on WhatsApp'),
  watchLive: t('Ver la sala en vivo', 'Watch the room live'),
  give: t('Dar', 'Give'),
  breadcrumb: t('Ruta de navegación', 'Breadcrumb'),
  onThisPage: t('En esta página', 'On this page'),
  updated: t('Actualizado', 'Updated'),
  followUs: t('Síguenos', 'Follow us'),
  writeUs: t('Escríbenos', 'Write to us'),
  findUs: t('Dónde estamos', 'Where we are'),
  privacy: t('Privacidad', 'Privacy'),
  rights: t('Todos los derechos reservados', 'All rights reserved'),
  emergencyTitle: t('Si es una emergencia', 'If this is an emergency'),
  emergencyLead: t(
    'Oramos contigo a cualquier hora, pero no reemplazamos a los servicios de emergencia. Si hay riesgo de vida, llama primero a estas líneas públicas y gratuitas.',
    'We pray with you at any hour, but we do not replace emergency services. If there is a risk to life, call these free public lines first.'
  ),
}

/** Navegacion principal. El orden es la jerarquia: la ayuda va primero
 *  porque es la promesa del sitio, no un pie de pagina. */
export const nav = [
  { slug: 'ayuda', label: t('Ayuda ahora', 'Help now'), highlight: true },
  { slug: 'oracion', label: t('Sala 24/7', 'Prayer room') },
  { slug: 'nosotros', label: t('Quiénes somos', 'About') },
  { slug: 'formacion', label: t('Formación', 'Training') },
  { slug: 'misiones', label: t('Misiones', 'Outreach') },
  { slug: 'eventos', label: t('Eventos', 'Events') },
  { slug: 'dar', label: t('Dar', 'Give') },
]

export const footerNav = [
  { slug: 'recursos', label: t('Recursos', 'Resources') },
  { slug: 'preguntas', label: t('Preguntas frecuentes', 'FAQ') },
  { slug: 'contacto', label: t('Contacto', 'Contact') },
  { slug: 'privacidad', label: t('Privacidad', 'Privacy') },
]
