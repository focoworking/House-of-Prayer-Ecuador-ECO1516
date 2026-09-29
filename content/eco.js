/**
 * Lo que la organización dice de sí misma, tomado del documento
 * «INFORMACIÓN PARA PÁGINA WEB ECO» que entregó la casa.
 *
 * Esta es la fuente de autoridad del sitio: donde este archivo y el resto
 * del contenido no coincidan, manda este archivo. Las citas bíblicas
 * conservan la versión que usa el documento —RVR1960 o NVI— y no se
 * uniforman: cambiar la versión de una cita es cambiar el texto.
 */
import { t } from './site.js'

/** La definición, en las palabras del documento. */
export const queEs = t(
  'ECO es un movimiento de oración de la Iglesia de Ecuador. Se basa en la restauración del real sacerdocio en unidad con el Cuerpo de Cristo a través de la adoración e intercesión 24/7, conforme al propósito eterno de Jesucristo de que «su casa, sea casa de oración» (Mt. 21:13). ECO reúne a varios Pastores, Congregaciones y Ministerios de diferentes denominaciones en Ecuador quienes oran juntos día y noche cada semana, con un enfoque en el establecimiento del Reino de Dios y el retorno de Jesucristo el Rey Eterno de las Naciones.',
  'ECO is a prayer movement of the Church of Ecuador. It rests on the restoration of the royal priesthood in unity with the Body of Christ through 24/7 worship and intercession, according to the eternal purpose of Jesus Christ that “his house be a house of prayer” (Mt. 21:13). ECO gathers Pastors, Congregations and Ministries from different denominations in Ecuador who pray together day and night each week, focused on the establishing of the Kingdom of God and the return of Jesus Christ, Eternal King of the Nations.'
)

export const objetivos = [
  t(
    'Establecer la Oración 24/7 como la cultura de la Iglesia de Jesucristo en Ecuador y en las naciones, trayendo como resultado el gobierno justo de Jesucristo en cada nación y su pronta venida.',
    'To establish 24/7 prayer as the culture of the Church of Jesus Christ in Ecuador and in the nations, bringing as a result the just government of Jesus Christ in every nation and His soon coming.'
  ),
  t(
    'Equipar y apoyar a la Iglesia para restaurar y establecer la oración 24/7, como la base fundamental de toda actividad ministerial.',
    'To equip and support the Church to restore and establish 24/7 prayer as the foundation of all ministry.'
  ),
  t(
    'Preparar a la Iglesia, la Novia de Cristo, para recibir a Jesucristo el Novio. Restaurar el primer y segundo mandamiento. Recibir un mayor entendimiento del amor de Dios, despertando la pasión de los hijos de Dios por Jesús y la compasión por los perdidos.',
    'To prepare the Church, the Bride of Christ, to receive Jesus Christ the Bridegroom. To restore the first and second commandment. To receive a greater understanding of the love of God, awakening God’s children to passion for Jesus and compassion for the lost.'
  ),
  t(
    'Preparar una generación de discípulos íntimos de Dios en quienes Dios habite y se manifieste a través de ellos a esta generación.',
    'To prepare a generation of disciples intimate with God, in whom God dwells and through whom He is revealed to this generation.'
  ),
]

/** Los temas de la intercesión corporativa, tal como los enumera el documento. */
export const temasIntercesion = [
  t('La predicación del Evangelio del Reino de Jesucristo.', 'The preaching of the Gospel of the Kingdom of Jesus Christ.'),
  t(
    'La restauración del sacerdocio real en la Iglesia: los creyentes ejerciendo su llamado sacerdotal.',
    'The restoration of the royal priesthood in the Church: believers walking in their priestly calling.'
  ),
  t(
    'La restauración del Pacto en la Iglesia: primer y segundo mandamiento.',
    'The restoration of the Covenant in the Church: the first and second commandment.'
  ),
  t(
    'La manifestación y el establecimiento del gobierno de Dios en las naciones, y su justicia en las naciones que ya fueron entregadas por el Padre al Hijo mediante decreto divino (Salmo 2).',
    'The manifestation and establishing of God’s government in the nations, and His justice in the nations already given by the Father to the Son by divine decree (Psalm 2).'
  ),
  t(
    'La predicación ungida de la Palabra en el poder del Espíritu Santo, acompañada de toda clase de señales, milagros y sanidades (Hechos 4).',
    'The anointed preaching of the Word in the power of the Holy Spirit, with signs, wonders and healings (Acts 4).'
  ),
  t('La unidad de la Iglesia en las naciones.', 'The unity of the Church in the nations.'),
]

/**
 * El proyecto del cuarto de oración. Las cifras son las del documento y hay
 * que revisarlas antes de cada campaña: publicar un costo desactualizado en
 * una página de donaciones erosiona la confianza que la página necesita.
 */
export const proyecto = {
  nombre: t('Construcción del Cuarto de Oración', 'Building the Prayer Room'),
  subtitulo: t('El lugar de reposo de Dios', 'The resting place of God'),
  ubicacion: t('Norte de Quito', 'Northern Quito'),
  superficie: 200,
  plantas: 2,
  costoTotal: 200000,
  costoMetro: 1000,
  descripcion: t(
    'La Palabra identifica a la Iglesia como Templo de Oración y medio del gobierno de Dios en las naciones. Por ello tenemos la necesidad de construir un lugar físico, el cuarto de oración, donde pastores y creyentes de todas las congregaciones se reúnan para la Oración 24/7.',
    'Scripture identifies the Church as a Temple of Prayer and the means of God’s government in the nations. Hence the need to build a physical place — the prayer room — where pastors and believers from every congregation gather for 24/7 prayer.'
  ),
  programa: [
    t('Primer piso: un salón, lugar de Oración 24/7.', 'Ground floor: a hall, the place of 24/7 prayer.'),
    t(
      'Segundo piso: el área para oficinas y un salón de entrenamientos sobre el movimiento de oración.',
      'First floor: offices and a training hall for the prayer movement.'
    ),
  ],
  fases: [
    {
      nombre: t('Primera fase — obra gris', 'Phase one — shell'),
      costo: 85000,
      detalle: t(
        'Construcción de los cimientos y paredes en obra gris.',
        'Foundations and walls, structural shell.'
      ),
    },
    {
      nombre: t('Segunda fase — terminados', 'Phase two — finishes'),
      costo: 90000,
      detalle: t('Los terminados de la construcción.', 'Construction finishes.'),
    },
    {
      nombre: t('Tercera fase — amoblamiento', 'Phase three — furnishing'),
      costo: 25000,
      detalle: t('El amoblamiento del cuarto de oración.', 'Furnishing the prayer room.'),
    },
  ],
}

/** Los programas de Actos de Justicia. */
export const actosDeJusticia = [
  {
    nombre: t('Proyectos de Vivienda Solidaria', 'Solidarity Housing Projects'),
    texto: t(
      'Buscar recursos materiales, económicos y técnicos para ayudar a construir casas a familias pobres y madres solteras en el campo o en barrios marginados de las ciudades grandes de Ecuador.',
      'Gathering material, financial and technical resources to help build homes for poor families and single mothers in the countryside and in marginalised neighbourhoods of Ecuador’s large cities.'
    ),
  },
  {
    nombre: t('Restauración Familiar', 'Family Restoration'),
    texto: t(
      'Conferencias, talleres de orientación familiar y relaciones interpersonales, discipulado y orientación legal.',
      'Conferences, family-guidance and relationship workshops, discipleship and legal guidance.'
    ),
  },
  {
    nombre: t('Misiones Integrales', 'Integral Missions'),
    texto: t(
      'Llevamos ropa nueva o usada en buen estado, alimentos, útiles escolares, medicinas y juguetes a los más pobres en las comunidades indígenas del país.',
      'We take new or good-condition clothing, food, school supplies, medicine and toys to the poorest in the country’s indigenous communities.'
    ),
  },
]

export const beneficiarios = t(
  'Niños y niñas, madres solteras, mujeres embarazadas, personas con problemas de salud, personas de la tercera edad y familias de escasos recursos o en estado de vulnerabilidad.',
  'Children, single mothers, pregnant women, people facing illness, the elderly, and families with scarce resources or in vulnerable situations.'
)

/** Oración profética desde los montes. */
export const montes = {
  texto: t(
    'En obediencia a la Palabra, movilizamos a la Iglesia a los montes para proclamar desde las alturas a las naciones el mensaje del Reino de Jesucristo y su gobierno eterno sobre ellas.',
    'In obedience to the Word, we mobilise the Church to the mountains to proclaim from the heights to the nations the message of the Kingdom of Jesus Christ and His eternal government over them.'
  ),
  banderas: t(
    'Desde los montes alzamos la bandera del Reino de Dios en las naciones; y mientras elevamos las banderas de las naciones, con oraciones y cánticos proféticos llamamos a los pueblos al arrepentimiento y a la preparación para recibir a Jesucristo el Rey Eterno.',
    'From the mountains we raise the banner of God’s Kingdom over the nations; and as we lift the flags of the nations, with prayers and prophetic songs we call the peoples to repentance and to prepare to receive Jesus Christ the Eternal King.'
  ),
}
