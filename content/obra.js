/**
 * El mercado de la obra: en qué puede aportar cada oficio.
 *
 * La idea, y por qué funciona: el cuarto de oración no necesita solo dinero.
 * Necesita planos, cálculo estructural, trámites municipales, instalaciones,
 * acústica, mobiliario y equipos. Un arquitecto que dona los planos aporta
 * varios miles de dólares sin sacar un centavo de su bolsillo, y además
 * queda ligado a la obra de una forma que ningún donante de efectivo llega a
 * estar. En recaudación esto se llama aporte en especie y pro bono, y en un
 * proyecto de construcción suele valer más que la mitad del presupuesto.
 *
 * Cada área dice qué hace falta **en concreto**. «Buscamos voluntarios» no
 * mueve a nadie; «necesitamos el cálculo estructural de una losa de 200 m²
 * en dos plantas» le dice a un ingeniero, en cinco segundos, si esto es
 * para él.
 *
 * Dos advertencias que van dentro del modelo y no en una nota al pie:
 *
 *  1. **Escritorio sí, andamio con cuidado.** Los aportes seguros son los de
 *     gabinete —diseño, cálculo, trámites, contabilidad— y los de materiales
 *     o equipo. La mano de obra en altura necesita afiliación y seguro de
 *     riesgos: ahí el voluntariado no es un ahorro, es una responsabilidad.
 *     Por eso cada área declara su `modo`.
 *  2. **Una oferta sin respuesta hace más daño que no pedirla.** Quien se
 *     ofrece y no recibe contestación en 48 horas no vuelve, y lo cuenta.
 */
import { t } from './site.js'

/* Los modos de aporte. `gabinete` es trabajo profesional que se entrega
   terminado; `especie` es material o equipo; `campo` es trabajo en obra, que
   siempre pasa por el residente y por las reglas de seguridad. */
export const MODOS = {
  gabinete: t('Trabajo profesional', 'Professional work'),
  especie: t('Materiales o equipo', 'Materials or equipment'),
  campo: t('Trabajo en obra', 'On-site work'),
}

export const areas = [
  {
    id: 'arquitectura',
    icono: 'planos',
    fase: 1,
    modo: 'gabinete',
    nombre: t('Arquitectura y planos', 'Architecture and drawings'),
    necesidad: t(
      'Planos arquitectónicos y de detalle de 200 m² en dos plantas: salón de oración abajo, oficinas y aula arriba.',
      'Architectural and detail drawings for 200 m² over two floors: prayer hall below, offices and classroom above.'
    ),
  },
  {
    id: 'estructural',
    icono: 'estructura',
    fase: 1,
    modo: 'gabinete',
    nombre: t('Ingeniería estructural', 'Structural engineering'),
    necesidad: t(
      'Cálculo estructural y memoria técnica de cimentación y losa, con la normativa sismorresistente ecuatoriana.',
      'Structural calculations and technical report for foundations and slab, under Ecuadorian seismic code.'
    ),
  },
  {
    id: 'topografia',
    icono: 'terreno',
    fase: 1,
    modo: 'campo',
    nombre: t('Topografía y suelos', 'Survey and soil study'),
    necesidad: t(
      'Levantamiento topográfico del terreno y estudio de suelos previo a la cimentación.',
      'Topographic survey of the site and soil study prior to foundations.'
    ),
  },
  {
    id: 'permisos',
    icono: 'sello',
    fase: 1,
    modo: 'gabinete',
    nombre: t('Permisos y trámites', 'Permits and paperwork'),
    necesidad: t(
      'Tramitación del permiso de construcción en el Municipio de Quito y acompañamiento legal del proceso.',
      'Building permit processing with the Municipality of Quito and legal support throughout.'
    ),
  },
  {
    id: 'cimentacion',
    icono: 'cimientos',
    fase: 1,
    modo: 'especie',
    nombre: t('Cimentación y estructura', 'Foundations and structure'),
    necesidad: t(
      'Hormigón, hierro, encofrado y bloque para cimientos, columnas y losa. Es el grueso de la primera fase.',
      'Concrete, steel, formwork and block for foundations, columns and slab. The bulk of the first phase.'
    ),
  },
  {
    id: 'electrica',
    icono: 'electricidad',
    fase: 2,
    modo: 'gabinete',
    nombre: t('Instalaciones eléctricas', 'Electrical installation'),
    necesidad: t(
      'Diseño y ejecución del sistema eléctrico, con previsión para audio, transmisión en vivo e iluminación escénica.',
      'Design and installation of the electrical system, allowing for audio, live streaming and stage lighting.'
    ),
  },
  {
    id: 'hidrosanitaria',
    icono: 'agua',
    fase: 2,
    modo: 'gabinete',
    nombre: t('Instalaciones hidrosanitarias', 'Plumbing and drainage'),
    necesidad: t(
      'Diseño y ejecución de agua potable, desagües y baños, incluido un baño accesible.',
      'Design and installation of water supply, drainage and toilets, including an accessible one.'
    ),
  },
  {
    id: 'acustica',
    icono: 'sonido',
    fase: 2,
    modo: 'gabinete',
    nombre: t('Acústica del salón', 'Hall acoustics'),
    necesidad: t(
      'Tratamiento acústico de una sala donde se canta y se ora día y noche, sin molestar al vecindario.',
      'Acoustic treatment for a hall where people sing and pray day and night, without disturbing the neighbourhood.'
    ),
  },
  {
    id: 'acabados',
    icono: 'acabados',
    fase: 2,
    modo: 'especie',
    nombre: t('Acabados', 'Finishes'),
    necesidad: t(
      'Enlucidos, pisos, pintura, puertas y ventanas. Es el contenido de la segunda fase.',
      'Plastering, flooring, paint, doors and windows. This is what the second phase consists of.'
    ),
  },
  {
    id: 'iluminacion',
    icono: 'luz',
    fase: 2,
    modo: 'especie',
    nombre: t('Iluminación', 'Lighting'),
    necesidad: t(
      'Luminarias para un salón que se usa de madrugada: luz cálida, regulable y de bajo consumo.',
      'Lighting for a hall used through the night: warm, dimmable and low consumption.'
    ),
  },
  {
    id: 'mobiliario',
    icono: 'mobiliario',
    fase: 3,
    modo: 'especie',
    nombre: t('Mobiliario', 'Furniture'),
    necesidad: t(
      'Sillas, alfombras, atriles y mobiliario de oficina y aula. Tercera fase.',
      'Chairs, rugs, lecterns and furniture for the offices and classroom. Third phase.'
    ),
  },
  {
    id: 'audio',
    icono: 'audio',
    fase: 3,
    modo: 'especie',
    nombre: t('Audio y transmisión', 'Audio and streaming'),
    necesidad: t(
      'Consola, micrófonos, monitores, cámara y equipo de transmisión para que la oración llegue a todo el país.',
      'Mixing desk, microphones, monitors, camera and streaming gear so the prayer reaches the whole country.'
    ),
  },
  {
    id: 'instrumentos',
    icono: 'instrumentos',
    fase: 3,
    modo: 'especie',
    nombre: t('Instrumentos', 'Instruments'),
    necesidad: t(
      'Piano, guitarras, cajón y percusión para los equipos que sostienen las vigilias.',
      'Piano, guitars, cajón and percussion for the teams that hold the watches.'
    ),
  },
  {
    id: 'fiscalizacion',
    icono: 'casco',
    fase: 0,
    modo: 'campo',
    nombre: t('Fiscalización y dirección de obra', 'Site supervision'),
    necesidad: t(
      'Un profesional que revise avances, valide planillas y responda por la calidad. Es el aporte que ordena a todos los demás.',
      'A professional to review progress, approve payment schedules and answer for quality. This is the contribution that puts every other one in order.'
    ),
    clave: true,
  },
  {
    id: 'seguridad',
    icono: 'seguridad',
    fase: 0,
    modo: 'campo',
    nombre: t('Seguridad industrial', 'Site safety'),
    necesidad: t(
      'Plan de seguridad, equipo de protección y control de riesgos para todo el que pise la obra.',
      'Safety plan, protective equipment and risk control for everyone who sets foot on site.'
    ),
  },
  {
    id: 'contabilidad',
    icono: 'cuentas',
    fase: 0,
    modo: 'gabinete',
    nombre: t('Contabilidad y auditoría', 'Accounting and audit'),
    necesidad: t(
      'Llevar las cuentas del proyecto y revisar el informe semestral de uso de fondos antes de publicarlo.',
      'Keeping the project’s books and reviewing the six-monthly use-of-funds report before it is published.'
    ),
  },
  {
    id: 'registro',
    icono: 'camara',
    fase: 0,
    modo: 'campo',
    nombre: t('Fotografía y video de avance', 'Progress photography and video'),
    necesidad: t(
      'Registrar la obra mes a mes. Sin esto no hay informe que contar ni nada que mostrar a quien dio.',
      'Recording the build month by month. Without it there is no report to tell and nothing to show those who gave.'
    ),
  },
  {
    id: 'alimentacion',
    icono: 'mesa',
    fase: 0,
    modo: 'especie',
    nombre: t('Alimentación de las cuadrillas', 'Feeding the crews'),
    necesidad: t(
      'El almuerzo de quienes trabajan en la obra. Es el aporte más sencillo de dar y el que más se agradece en el sitio.',
      'Lunch for those working on site. The simplest contribution to give and the most appreciated where it lands.'
    ),
  },
]

export const fases = {
  0: t('En toda la obra', 'Throughout the build'),
  1: t('Primera fase — obra gris', 'First phase — structural shell'),
  2: t('Segunda fase — terminados', 'Second phase — finishes'),
  3: t('Tercera fase — amoblamiento', 'Third phase — furnishing'),
}
