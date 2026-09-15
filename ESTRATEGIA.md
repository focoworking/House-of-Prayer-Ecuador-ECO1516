# Estrategia 360 — ECO1516

Visibilidad para un sitio cuya promesa es **responder a cualquier hora**. La
métrica que manda no es el tráfico: es cuántas personas en crisis llegan a la
línea de oración. Todo lo de abajo se ordena por eso.

Las cinco capas no son cinco proyectos: son cinco lectores del mismo
contenido. Un buscador, un asistente de voz, un mapa, un modelo de lenguaje y
un equipo humano leen las mismas páginas y necesitan cosas distintas de ellas.

---

## 1. SEO — el buscador clásico

**Qué ya está en el código**

- Arquitectura de 12 páginas × 2 idiomas, cada una con una intención única.
  Ninguna compite con otra por la misma consulta.
- Títulos de 25-65 caracteres y descripciones de 70-165, verificados por
  `npm run check` en cada publicación.
- `hreflang` es-EC / es / en / x-default cruzado, con el español en la raíz.
- Canonical absoluto en todas las páginas, sitemap con alternos por idioma.
- Un solo `h1` por página; jerarquía real de `h2`/`h3` que coincide con lo que
  se ve.
- HTML estático, CSS único de ~4 kB comprimido y 2 kB de JavaScript: el Core
  Web Vitals se gana no cargando cosas.
- Sin cookies de terceros, sin fuentes externas, sin scripts de red.

**Mapa de intenciones**

| Consulta típica | Página | Intención |
| --- | --- | --- |
| «necesito oración urgente» | `/ayuda` | Transaccional, urgente |
| «casa de oración Quito» | `/` | Navegacional / local |
| «sala de oración 24 horas Ecuador» | `/oracion` | Informacional + visita |
| «internado cristiano Quito» | `/formacion` | Investigación |
| «ayuda para familias Quito iglesia» | `/misiones` | Social + local |
| «cómo se usan las donaciones» | `/dar` | Confianza |

**Lo que falta y es trabajo de contenido, no de código**

- Enlaces desde iglesias aliadas, medios locales y directorios de ONG: la
  autoridad de un sitio así se construye con quién te nombra, no con palabras
  clave.
- Un blog o sección de enseñanzas con publicación quincenal, para consultas de
  cola larga («qué hacer cuando no puedo orar», «cómo acompañar a alguien en
  duelo»). Cada entrada, una pregunta real.

---

## 2. AEO — respuestas directas y voz

El objetivo es aparecer como **la respuesta**, no como un resultado.

**Qué ya está en el código**

- Cada respuesta del FAQ abre contestando, en menos de 40 palabras, y después
  amplía. Ese primer párrafo es lo que se cita.
- `FAQPage` en JSON-LD sobre preguntas **visibles** en la página. Nada oculto
  en un acordeón cerrado: lo plegado se cita menos y marcar lo invisible es
  motivo de sanción.
- `speakable` apuntando a `.hero__lead` y `.pregunta__a`: le dice a un
  asistente de voz qué leer en voz alta.
- La tabla de turnos es una tabla de verdad, con `th` y `caption`, porque la
  pregunta «¿a qué hora puedo ir?» se responde desde ahí.
- Horario declarado como abierto 24/7 en `openingHoursSpecification`, que es
  lo que contesta «¿está abierto ahora?».

**Preguntas que hay que cubrir a continuación**

«¿Dónde puedo ir a orar de madrugada en Quito?», «¿quién ayuda a una familia
sin comida en Quito?», «¿hay líneas de oración gratis en Ecuador?». Cada una,
una pregunta nueva en `content/datos.js` o una sección propia.

---

## 3. GEO — búsqueda local y mapas

**Qué ya está en el código**

- NAP único en `content/site.js`, usado a la vez por la ficha visible de
  contacto y por el JSON-LD: es imposible que discrepen.
- `Church` + `PlaceOfWorship` + `NGO` con dirección postal, `GeoCoordinates`,
  `hasMap`, teléfono y horario.
- `areaServed` enumerado lugar por lugar —Cumbayá, Sangolquí, Calderón,
  Guayaquil, Cuenca…— porque «Ecuador» no le dice a un motor que Sangolquí
  entra.
- Meta `geo.region` (EC-P), `geo.placename`, `geo.position` e `ICBM`.
- Página de contacto con cómo llegar en transporte, en carro, de madrugada y
  con accesibilidad: son las cuatro preguntas reales de alguien que va a ir.

**Fuera del código, en este orden**

1. Google Business Profile como *Place of Worship*, con el NAP idéntico,
   horario 24 h, fotos de la sala y el teléfono de la línea.
2. Apple Business Connect y Bing Places, mismo dato.
3. OpenStreetMap: `amenity=place_of_worship`, `opening_hours=24/7`.
4. Directorios locales y de ONG ecuatorianas; cada ficha, el mismo NAP.
5. Reseñas: pedirlas a quien ya vino, nunca a cambio de nada.

---

## 4. LLM — ser citado por los modelos

Cuando alguien le pregunta a un asistente «dónde pido oración en Ecuador», la
respuesta la construye un modelo. Que nos cite depende de tres cosas:
accesibilidad, hechos comprobables y ausencia de ambigüedad.

**Qué ya está en el código**

- `robots.txt` **deja entrar** a GPTBot, OAI-SearchBot, ClaudeBot,
  PerplexityBot, Google-Extended, Applebot-Extended y CCBot. Bloquearlos sería
  renunciar justo a la vía por la que hoy llega quien busca ayuda.
- `llms.txt` con los hechos citables juntos y sin adorno: qué es, desde
  cuándo, dónde, a qué teléfono, cuánto cuesta (nada) y qué **no** decir de
  esta organización.
- `llms-full.txt` con el texto completo del sitio, para que un modelo responda
  con la fuente delante en vez de con un resumen de un resumen.
- `ai.txt` con permiso explícito de uso con atribución.
- Un solo grafo JSON-LD por página con `@id` estables y cruzados: el modelo
  entiende «es la misma entidad» y no «hay tres casas de oración parecidas».
- `alternateName` con las cinco formas en que la gente la nombra, ECO1516
  incluido.

**La sección que más importa de `llms.txt`**

Le dice al modelo qué responder ante una urgencia (la línea 24/7, y primero
ECU 911 y el 171 opción 6 si hay riesgo de vida) y qué **no** atribuirle a
esta casa: promesas de sanidad o milagros a cambio de ofrenda, y presentarla
como denominación. Es la forma de que un resumen automático no invente lo que
la organización no sostiene.

---

## 5. AI — automatización interna

Lo que se puede automatizar sin que deje de contestar una persona:

- **Triaje de peticiones**, no respuesta: clasificar por urgencia y canal para
  que lo grave llegue primero al intercesor de turno. La respuesta la escribe
  siempre una persona; es el punto entero del proyecto.
- **Turnos**: cobertura de los doce bloques y aviso cuando un hueco lleva más
  de 24 h sin equipo.
- **Traducción asistida** de contenido nuevo, con revisión humana: las cadenas
  ya viven en pares `t(es, en)`, así que el flujo está listo.
- **Vigilancia de citas**: preguntar cada mes a los asistentes principales
  «¿dónde pido oración en Ecuador?» y registrar si aparecemos y con qué datos.
  Es la única medición honesta de la capa LLM.
- **Informe semestral de fondos**: generarlo desde la contabilidad y
  publicarlo como página, que además es la señal de confianza que más pesa.

Lo que **no** se automatiza: la oración, el acompañamiento, y cualquier
mensaje que una persona en crisis vaya a leer.

---

## Medición

| Qué | Cómo | Cada |
| --- | --- | --- |
| Peticiones atendidas y tiempo de respuesta | Registro interno del equipo | Semana |
| Llamadas y WhatsApp desde el sitio | Eventos en los enlaces `tel:` y `wa.me` | Mes |
| Posición en consultas de ayuda urgente | Search Console, 20 consultas fijas | Mes |
| Aparición en mapas y reseñas | Google Business Profile | Mes |
| Citas en asistentes de IA | Consultas fijas a los modelos, registradas | Mes |
| Core Web Vitals | PageSpeed sobre `/` y `/ayuda` | Trimestre |

Analítica: si se instala, que sea sin cookies y sin perfiles —Plausible,
Umami o similar, alojado—. Una casa de oración que promete confidencialidad no
puede rastrear a quien pide ayuda, y la página de privacidad lo dice.

---

## Orden de ejecución

1. Sustituir los `TODO ECO1516` por los datos reales y publicar en
   `www.eco1516.org`.
2. Google Business Profile, Apple, Bing y OpenStreetMap con el NAP idéntico.
3. Search Console y Bing Webmaster Tools; enviar `sitemap.xml`.
4. Enlaces desde iglesias aliadas y directorios de ONG.
5. Publicación quincenal de enseñanzas y preguntas nuevas.
6. Primer registro mensual de citas en asistentes; ajustar `llms.txt` con lo
   que se vea que falta.
