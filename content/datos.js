/**
 * Datos que se repiten en varias paginas y que ademas alimentan los datos
 * estructurados: la historia, los bloques de la sala, los eventos y las
 * preguntas. Viven aqui una sola vez para que la pagina y el JSON-LD nunca
 * se contradigan.
 */
import { t } from './site.js'

/* ---------------------------------------------------------------- *
 * Quince anos, contados. Solo hechos que se pueden sostener: fechas,
 * aperturas y cifras de cosas que existen. Nada de metricas de impacto
 * que no podamos documentar.
 * ---------------------------------------------------------------- */
export const historia = [
  {
    ano: '2011',
    titulo: t('Doce personas y una sala prestada', 'Twelve people and a borrowed room'),
    texto: t(
      'Empezamos con una reunión de oración los viernes en la sala de una casa en el norte de Quito. Sin equipo de sonido y sin nombre.',
      'We started with a Friday prayer meeting in the living room of a house in northern Quito. No sound system, no name.'
    ),
  },
  {
    ano: '2014',
    titulo: t('Primera semana continua', 'First continuous week'),
    texto: t(
      'Cubrimos 168 horas seguidas de oración con adoración por primera vez. Salió de ahí el calendario de turnos que todavía usamos.',
      'We covered 168 straight hours of prayer with worship for the first time. The rota we still use came out of that week.'
    ),
  },
  {
    ano: '2017',
    titulo: t('Sede propia y sala permanente', 'Our own building, a permanent room'),
    texto: t(
      'Abrimos la sala de oración en su dirección actual y pasamos de reuniones a turnos fijos, con equipos de músicos e intercesores.',
      'We opened the prayer room at its current address and moved from meetings to fixed watches, with teams of musicians and intercessors.'
    ),
  },
  {
    ano: '2019',
    titulo: t('Escuela de formación', 'Training school'),
    texto: t(
      'Primer internado de seis meses. Doce alumnos, una sola aula y el compromiso de que nadie pagara por no poder pagar.',
      'First six-month internship. Twelve students, one classroom, and a commitment that nobody would be left out for lack of money.'
    ),
  },
  {
    ano: '2021',
    titulo: t('La sala no cerró', 'The room did not close'),
    texto: t(
      'Durante la pandemia mantuvimos la oración en línea sin interrumpirla y abrimos la línea telefónica de oración 24/7, que sigue activa.',
      'Through the pandemic we kept prayer going online without a break and opened the 24/7 prayer phone line, still running today.'
    ),
  },
  {
    ano: '2023',
    titulo: t('Misiones en cinco provincias', 'Outreach in five provinces'),
    texto: t(
      'Equipos semanales de compasión en Quito y salidas mensuales a Pichincha, Guayas, Azuay, Tungurahua y Santo Domingo.',
      'Weekly compassion teams in Quito and monthly trips to Pichincha, Guayas, Azuay, Tungurahua and Santo Domingo.'
    ),
  },
  {
    ano: '2026',
    titulo: t('Quince años y la sala sigue encendida', 'Fifteen years and the room is still lit'),
    texto: t(
      'Doce bloques diarios, equipos de las tres ciudades y una meta declarada: oración continua sin interrupción, todos los días del año.',
      'Twelve daily watches, teams from three cities and one stated goal: continuous prayer, unbroken, every day of the year.'
    ),
  },
]

/* Los doce bloques de dos horas. Es el mismo dato que dibuja la tabla de la
   pagina y el que se publica como horario en los datos estructurados. */
export const bloques = [
  { hora: '00:00', tipo: t('Vigilia', 'Night watch'), equipo: t('Intercesión', 'Intercession') },
  { hora: '02:00', tipo: t('Vigilia', 'Night watch'), equipo: t('Adoración', 'Worship') },
  { hora: '04:00', tipo: t('Vigilia', 'Night watch'), equipo: t('Salmos', 'Psalms') },
  { hora: '06:00', tipo: t('Mañana', 'Morning'), equipo: t('Devocional', 'Devotional') },
  { hora: '08:00', tipo: t('Mañana', 'Morning'), equipo: t('Intercesión por Ecuador', 'Intercession for Ecuador') },
  { hora: '10:00', tipo: t('Mañana', 'Morning'), equipo: t('Adoración', 'Worship') },
  { hora: '12:00', tipo: t('Mediodía', 'Midday'), equipo: t('Oración por los enfermos', 'Prayer for the sick') },
  { hora: '14:00', tipo: t('Tarde', 'Afternoon'), equipo: t('Escuela en vivo', 'School live') },
  { hora: '16:00', tipo: t('Tarde', 'Afternoon'), equipo: t('Intercesión por la ciudad', 'Intercession for the city') },
  { hora: '18:00', tipo: t('Noche', 'Evening'), equipo: t('Adoración abierta', 'Open worship') },
  { hora: '20:00', tipo: t('Noche', 'Evening'), equipo: t('Oración por familias', 'Prayer for families') },
  { hora: '22:00', tipo: t('Noche', 'Evening'), equipo: t('Intercesión por misiones', 'Intercession for missions') },
]

/* Eventos. Cada uno se publica como Event en JSON-LD, asi que las fechas van
   en ISO y el lugar es el real. Editar aqui actualiza pagina, listado,
   sitemap y datos estructurados a la vez.
   TODO ECO1516: revisar fechas cada trimestre; un Event vencido en el
   marcado resta credibilidad. */
export const eventos = [
  {
    slug: 'vigilia-nacional',
    nombre: t('Vigilia nacional por Ecuador', 'National vigil for Ecuador'),
    inicio: '2026-10-17T19:00:00-05:00',
    fin: '2026-10-18T06:00:00-05:00',
    modalidad: 'mixto',
    precio: 0,
    resumen: t(
      'Once horas de oración con adoración por el país, con equipos de Quito, Guayaquil y Cuenca. Entrada libre, también en transmisión.',
      'Eleven hours of prayer with worship for the country, with teams from Quito, Guayaquil and Cuenca. Free entry, also streamed.'
    ),
  },
  {
    slug: 'conferencia-quince-anos',
    nombre: t('Conferencia 15 años', 'Fifteen years conference'),
    inicio: '2026-11-20T09:00:00-05:00',
    fin: '2026-11-22T21:00:00-05:00',
    modalidad: 'presencial',
    precio: 0,
    resumen: t(
      'Tres días de enseñanza, adoración y envío de equipos, en el aniversario de la casa. Aporte voluntario.',
      'Three days of teaching, worship and sending out teams, on the house anniversary. Voluntary offering.'
    ),
  },
  {
    slug: 'internado-enero',
    nombre: t('Internado de seis meses — cohorte de enero', 'Six-month internship — January cohort'),
    inicio: '2027-01-12T08:00:00-05:00',
    fin: '2027-07-09T18:00:00-05:00',
    modalidad: 'presencial',
    precio: 0,
    resumen: t(
      'Formación en oración, adoración, estudio bíblico y misión urbana. Postulaciones abiertas hasta el 30 de noviembre.',
      'Training in prayer, worship, Bible study and urban mission. Applications open until 30 November.'
    ),
  },
]

/* Preguntas. Son la materia prima de AEO: cada respuesta abre con la frase
   que responde, en menos de 40 palabras, y despues amplia. Ese primer parrafo
   es lo que se cita en un resumen de IA o en un fragmento destacado. */
export const preguntas = [
  {
    q: t('¿Qué es la Ecuador Casa de Oración?', 'What is Ecuador Casa de Oración?'),
    a: t(
      'Ecuador Casa de Oración es una casa de oración con adoración las 24 horas en Quito, fundada en 2011. Reúne equipos de músicos e intercesores en doce bloques diarios de dos horas, y atiende una línea de oración abierta todo el día.',
      'Ecuador Casa de Oración is a 24-hour house of prayer with worship in Quito, founded in 2011. It gathers teams of musicians and intercessors in twelve daily two-hour watches and runs a prayer line open around the clock.'
    ),
  },
  {
    q: t('¿Cómo pido oración urgente?', 'How do I ask for urgent prayer?'),
    a: t(
      'Llama a la línea de oración 24/7, escribe por WhatsApp o envía el formulario de la página de ayuda. Un intercesor responde en menos de treinta minutos a cualquier hora, todos los días del año, sin costo.',
      'Call the 24/7 prayer line, send a WhatsApp message or submit the form on the help page. An intercessor replies within thirty minutes at any hour, every day of the year, free of charge.'
    ),
  },
  {
    q: t('¿Cuánto cuesta pedir oración o visitar la sala?', 'Does prayer or visiting the room cost anything?'),
    a: t(
      'Nada. La oración, la visita a la sala y el acompañamiento son gratuitos y no requieren registro. La casa se sostiene con donaciones voluntarias y nunca condiciona la ayuda a un aporte.',
      'Nothing. Prayer, visiting the room and pastoral accompaniment are free and require no registration. The house is sustained by voluntary giving and never conditions help on a donation.'
    ),
  },
  {
    q: t('¿Dónde queda y cómo llego?', 'Where is it and how do I get there?'),
    a: t(
      'La sala está en el sector La Carolina, norte de Quito, sobre la Av. Amazonas, a pocos minutos de la parada del Ecovía y con parqueo en la calle. Está abierta día y noche, también de madrugada.',
      'The room is in La Carolina, northern Quito, on Av. Amazonas, minutes from the Ecovía stop, with street parking. It is open day and night, including the small hours.'
    ),
  },
  {
    q: t('¿Tengo que pertenecer a una iglesia para entrar?', 'Do I need to belong to a church to come in?'),
    a: t(
      'No. La sala está abierta a cualquier persona, de cualquier iglesia o de ninguna. No se pide membresía, ni ofrenda, ni datos personales para entrar y quedarse el tiempo que quieras.',
      'No. The room is open to anyone, from any church or none. No membership, offering or personal data is required to come in and stay as long as you like.'
    ),
  },
  {
    q: t('¿Puedo servir aunque no sea músico?', 'Can I serve if I am not a musician?'),
    a: t(
      'Sí. Los equipos necesitan intercesores, anfitriones de sala, sonido, transmisión, cocina y logística de misiones. El único requisito es sostener un turno fijo a la semana durante tres meses.',
      'Yes. Teams need intercessors, room hosts, sound, streaming, kitchen and outreach logistics. The only requirement is holding one fixed weekly watch for three months.'
    ),
  },
  {
    q: t('¿Cómo se usa lo que dono?', 'How is my giving used?'),
    a: t(
      'El 100 % sostiene tres cosas: los equipos de la sala 24/7, las becas del internado y la ayuda directa en misiones. Publicamos un informe de uso de fondos cada semestre.',
      'All of it sustains three things: the 24/7 room teams, internship scholarships and direct aid in outreach. We publish a use-of-funds report every six months.'
    ),
  },
  {
    q: t('¿Atienden fuera de Quito?', 'Do you serve outside Quito?'),
    a: t(
      'Sí. La línea de oración y la transmisión llegan a todo Ecuador, y hay equipos y salidas mensuales en Pichincha, Guayas, Azuay, Tungurahua y Santo Domingo de los Tsáchilas.',
      'Yes. The prayer line and the stream reach all of Ecuador, and there are teams and monthly trips in Pichincha, Guayas, Azuay, Tungurahua and Santo Domingo de los Tsáchilas.'
    ),
  },
]
