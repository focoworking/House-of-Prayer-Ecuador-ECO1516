# Ecuador Casa de Oración — ECO1516

Sitio de **Ecuador Casa de Oración** (ECO1516), casa de oración con adoración
24/7 en Quito. Doce páginas en español e inglés, generadas desde un modelo de
contenido. HTML, CSS y JavaScript sobre Vite, sin framework.

Dominio de destino: **https://www.eco1516.org**

## Arrancar

```bash
npm install
npm run dev      # genera OG, páginas y levanta el servidor
npm run build    # build de producción en dist/
npm run preview  # sirve dist/ en el puerto 4173
npm run check    # revisión de SEO/AEO sobre el HTML generado
npm run img      # regenera el arte del sitio (tarda ~50 s, rara vez hace falta)
npm run build:preview  # copia navegable en preview/, con rutas relativas
```

Requiere Node 20 o superior.

## El contenido manda

La **fuente de autoridad del contenido** es el documento «INFORMACIÓN PARA
PÁGINA WEB ECO» que entregó la casa, volcado en `content/eco.js`: qué es ECO,
los cuatro objetivos, los seis temas de la intercesión corporativa, el proyecto
del cuarto de oración con sus tres fases, los programas de Actos de Justicia y
la oración profética desde los montes. Donde ese archivo y el resto del
contenido no coincidan, manda ese archivo.

**`content/` es la fuente de verdad.** Los `.html`, `sitemap.xml`,
`robots.txt`, `llms.txt` y `src/styles/marca.css` son salida de build y están
en `.gitignore`: no se editan a mano.

```
content/
  site.js        Marca, paleta, NAP, navegación, pie, líneas de emergencia
  eco.js         Lo que la casa dice de sí misma (documento fuente)
  datos.js       Preguntas frecuentes
  pages-core.js  Inicio, pedir oración, oración 24/7
  pages-more.js  Nosotros, el proyecto, los montes, justicia, formación,
                 dar, recursos, contacto, preguntas, privacidad
  pages.js       Ensambla el sitio y resuelve rutas y archivos
```

Cada cadena traducible es `t('Español', 'English')`, con los dos idiomas
juntos: así es imposible que una traducción se quede atrás cuando alguien
edita el original. El español vive en la raíz (el país es Ecuador) y el inglés
bajo `/en/`, con `hreflang` cruzado y `x-default` al español.

Para añadir una página: declararla en `content/` y añadirla a `pages.js`. Las
entradas del build de Vite, el sitemap y `llms.txt` se derivan solas.

### Tipos de sección

Cada bloque declara su `type` y `scripts/render.mjs` sabe dibujarlo:
`hero`, `lead`, `statement`, `scripture`, `quote`, `figure`, `stats`,
`cards`, `rows`, `steps`, `split`, `checklist`, `timeline`, `schedule`,
`events`, `faq`, `links`, `prose`, `form`, `emergency`, `contact`, `cta`.

### La Escritura

Toda cita bíblica del sitio es **Reina-Valera 1960**, textual y con su
referencia visible. El tipo `scripture` la presenta como pasaje y el campo
`verse` de un `hero` la pone al pie del titular. No se parafrasea, no se
mezcla con otra versión y no se cita de memoria: si una referencia no se
puede comprobar, no entra.

## Qué genera el build

| Archivo | Para qué |
| --- | --- |
| 24 `.html` | 12 páginas × 2 idiomas |
| `sitemap.xml` | Con `xhtml:link` alternos por idioma |
| `robots.txt` | Deja entrar a los rastreadores de modelos, a propósito |
| `llms.txt` | Índice y hechos citables para asistentes |
| `llms-full.txt` | El texto completo del sitio en un archivo |
| `ai.txt` | Permisos de uso con atribución |
| `og/eco1516.png` | Imagen para compartir, 1200×630, generada sin dependencias |
| `src/styles/marca.css` | La paleta del logotipo, escrita desde `content/site.js` |
| `marca/eco1516-isotipo.svg` | El isotipo vectorial, calculado desde sus cinco dedos |

`npm run build:preview` deja en `preview/` una copia del sitio con los enlaces
internos reescritos a rutas relativas. Sirve para revisarlo fuera de la raíz de
un dominio —una carpeta compartida, un artifact— donde `/ayuda` apuntaría fuera
del sitio. El build de producción no se toca.

`npm run check` revisa las 24 páginas: largo de títulos y descripciones, un
solo `h1`, los cuatro `hreflang`, canonical, JSON-LD válido con organización y
página, `alt` en imágenes y presencia de la línea de oración. Falla el comando
si hay errores. Conviene correrlo antes de publicar.

## Marca

La paleta sale del logotipo —manos moradas que forman una casa y una llama
celeste— y vive en `content/site.js`:

| Token | Valor | Uso |
| --- | --- | --- |
| `--papel` | `#FFFFFF` | El fondo, y el material principal de la página |
| `--papel-alto` | `#F7F4FB` | Pie, bloque de emergencia y cierre |
| `--tinta` / `--tinta-suave` | `#241633` / `#5C4E70` | Texto y texto secundario |
| `--morado` / `--morado-oscuro` | `#7B57A6` / `#4A2F6B` | Estructura: etiquetas, cifras, enlaces |
| `--morado-claro` | `#A98BCB` | Viñetas y apoyo |
| `--celeste` | `#1B9EC4` | La llama: **solo** lo que enciende una acción |

**El sitio es claro porque lo que anuncia es luz.** El blanco no es un fondo
neutro por descarte: es el material principal, y la mayor parte de cada página
es papel vacío a propósito. La tinta da 13:1 sobre ese fondo y ningún gris baja
de 4.5:1.

El celeste solo aparece donde hay algo que pulsar o algo que cuenta las horas
—la pestaña de ayuda, la barra fija, el botón de llamar, la vigilia en curso—.
Todo lo demás se resuelve con tinta, con morado y con espacio en blanco. Si el
celeste aparece en todas partes deja de significar nada.

**Tipografía.** Fraunces para los titulares —tiene el peso de una Biblia
impresa sin parecer antigua— y Archivo para el texto. Se cargan de Google
Fonts, el único host externo del sitio, con `preconnect` a los dos dominios y
su pila de reserva declarada.

## El logotipo

El original de la organización —manos abiertas que sostienen el techo de una
casa, con la llama en el centro— está en
`public/marca/eco1516-logo-original.png` y es la referencia de la que sale
todo lo demás.

`scripts/lib/isotipo.mjs` lo redibuja como vector. Está **calculado, no
escrito a mano**: una mano abierta es un contorno de cinco puntas y cuatro
valles, y acertarlo a ojo en coordenadas SVG cuesta muchas más iteraciones que
declarar los cinco dedos —ángulo, largo y grosor— y dejar que el trazo salga
de ahí. Abrir más la mano es cambiar un número. La mano derecha se calcula y
la izquierda es su espejo, como en el original.

Salen dos versiones de la misma fuente:

- **Completa** (`npm run marca` → `public/marca/eco1516-isotipo.svg`), con los
  surcos de los dedos. Es la de tamaños grandes y la que los datos
  estructurados declaran como `logo`.
- **Reducida**, inline en la cabecera y el pie. Hereda `currentColor`, engorda
  el trazo y **quita los surcos**: a cuarenta píxeles ese detalle no se lee,
  se emborrona, y un logotipo emborronado se ve peor que uno simple.

## Las imágenes

`scripts/build-imagenes.mjs` dibuja las cuatro piezas del sitio con el
rasterizador de `scripts/lib/lienzo.mjs`: el amanecer sobre la cordillera, el
incienso, Quito al alba y la llama del altar. Son originales, no hay banco de
imágenes detrás, no hay licencia que renovar y ninguna persona real aparece en
una foto que no autorizó.

El registro es el amanecer, no la noche: el proyecto anuncia luz y las imágenes
dicen lo mismo que el texto. Todas se resuelven en la mitad clara de la escala
y se funden con el papel por los bordes, así que la página no se parte en
bloques de color.

Cada pieza es determinista —misma semilla, mismo archivo— y se guarda como PNG
de paleta con difusión de error: en 128 colores bien difundidos no se ve la
banda y el archivo baja a un quinto de lo que pesa en color verdadero.

Las imágenes están en `.gitignore` como cualquier otra salida de build.
Regenerarlas tarda unos treinta segundos, así que `npm run build` no las toca:
se corre `npm run img` a mano cuando se cambia el arte.

## Pendientes antes de publicar

Los datos marcados `TODO ECO1516` en `content/site.js` son marcadores de
posición y hay que sustituirlos por los reales:

- Teléfonos y WhatsApp reales, y en qué horas hay alguien atendiendo. Mientras
  no esté confirmado, el sitio **no promete atención 24 horas**: dice que
  respondemos, no que contestamos al instante.
- Usuarios reales de YouTube, Instagram, Facebook y Spotify.
- El calendario real de la semana de oración y las próximas convocatorias.
  `content/datos.js` tiene `bloques` y `eventos` vacíos a propósito, y las
  secciones `schedule` y `events` del renderizador los dibujan en cuanto se
  llenen.
- Las cifras del proyecto (`content/eco.js`) son las del documento: revisarlas
  antes de cada campaña, porque un costo desactualizado en una página de
  donaciones erosiona la confianza que esa página necesita.

Lo que **no** se puede afirmar hasta que exista: que hay una sala de oración
abierta al público las 24 horas. El cuarto de oración está en construcción, y
el sitio, sus datos estructurados y `llms.txt` lo dicen así.

El NAP —nombre, dirección, teléfono— tiene que quedar **idéntico** aquí, en
Google Business Profile, en Apple Business Connect, en Bing Places y en cada
directorio. Se edita en `content/site.js` y en ningún otro sitio.

## Quién lo respalda

ECO nació en **octubre de 2012** en Quito, de Hernán y Janeth Robalino,
pastores fundadores de la congregación El Sendero de la Vida Cristiana. Su
sitio, `hernanrobalino.com`, se declara como `sameAs` en los datos
estructurados: eso le dice a un buscador que ECO y ese sitio son la misma
obra, no dos ministerios sueltos con nombres parecidos.

## La campaña

`content/campana.js` gobierna la captación, y hace cumplir por diseño dos
decisiones que están razonadas en [`CASO.md`](./CASO.md):

- **La meta pública es la fase uno, $85.000, no los $200.000 del proyecto.**
  Una cifra que se puede cumplir genera el impulso de la siguiente; una
  enorme se estanca en público y mata la campaña.
- **El contador no se publica en cero.** `campana.recaudado` empieza en `null`
  y, mientras lo esté, la sección `meta` muestra el objetivo pero **ninguna
  barra**. Un contador en cero dice «esto no arranca». Se llena cuando la fase
  silenciosa haya comprometido entre la mitad y dos tercios, y se actualiza
  cada mes.

Los niveles de siembra van en el mismo archivo. El metro cuadrado a $1.000 no
es un invento de campaña: sale de los propios números del proyecto —200 m² por
$1.000 el metro— y por eso se cuenta solo.

Las cifras del país (`contexto`) **siempre llevan su fuente enlazada** y nunca
van acompañadas de fotos de víctimas. Sin fuente esto es propaganda, y una
cifra que no resiste una pregunta cuesta más que todo lo que recaudó.

## El enlace de dar

`site.giveUrl` en `content/site.js` es la **única URL del sitio que mueve
dinero** —la plataforma de recaudación del Banco Pichincha— y todos los
botones de dar salen de esa línea, en los dos idiomas. También es el `target`
de la `DonateAction` en los datos estructurados, porque una acción de donar
debe apuntar a donde efectivamente se puede dar, no a la página que lo
explica. El día que cambie la cuenta, se toca esa línea y nada más.

La estrategia de visibilidad (SEO, AEO, GEO, LLM y automatización) está en
[`ESTRATEGIA.md`](./ESTRATEGIA.md).
