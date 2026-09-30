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

El logotipo de la casa está en `public/marca/eco1516-logo-original.png`.
`scripts/recorta-isotipo.py` (`npm run isotipo`) extrae de ahí el emblema —las
manos, el techo y la llama—, recortado antes de la palabra ECUADOR y con el
fondo gris de la lámina convertido en transparencia. Esa salida,
`eco1516-isotipo.png`, es el logotipo del sitio y el que declaran los datos
estructurados.

El fondo se separa por saturación, no por color exacto: el dibujo es morado y
celeste saturados y el fondo es gris casi neutro, así que basta con volver
transparente lo que casi no tiene color. La rampa entre 0,06 y 0,16 de
saturación conserva el antialiasing del original en vez de dejar un borde
dentado.

Aquí hubo un tiempo una reconstrucción vectorial del emblema, calculada a
partir de los cinco dedos de la mano. Se retiró: por cuidada que estuviera no
era el logotipo de nadie, y tener dos marcas que no coinciden es peor que
tener una.

La terminología de marca —qué palabras se usan y cuáles cierran puertas— está
en [`CASO.md`](./CASO.md).

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

## La parrilla de la semana

`content/turnos.js` guarda quién cubre cada una de las 168 horas de la semana,
y `/oracion` la publica como cuadrícula.

Funciona al revés que el contador de la campaña: allí lo que llama es lo que
ya está lleno, aquí lo que llama es **lo que falta**. «Únete a orar» no mueve a
nadie; ver que el jueves a las 3 de la madrugada no hay nadie, sí.

Tres decisiones que no son de estilo:

- **Empieza vacía y se queda vacía hasta tener el dato real.** Mientras
  `cobertura` esté vacío la sección no se dibuja. Publicar horarios inventados
  en la página de una casa de oración hace que alguien se presente un martes a
  las once y no encuentre a nadie.
- **Es una tabla de verdad**, con encabezados de día y de hora y un texto
  alternativo por celda. Así la lee un lector de pantalla y así se puede
  tabular; una rejilla de `div`s no.
- **El estado no se codifica solo con color.** La hora cubierta va rellena y
  la libre va hueca con borde punteado: se distinguen sin distinguir el tono.

## El mercado de la obra

`content/obra.js` describe las dieciocho áreas en las que alguien puede
aportar su oficio al cuarto de oración, y `/construir` las publica agrupadas
como avanza una construcción.

Cada área dice qué hace falta **en concreto**: «cálculo estructural de una
losa de 200 m² en dos plantas», no «buscamos voluntarios». Esa diferencia es
la página entera — un profesional decide en cinco segundos si eso es para él.

Cada área declara además su `modo`, y no es decorativo: `gabinete` es trabajo
que se entrega terminado, `especie` es material o equipo, y `campo` es trabajo
en obra, que siempre pasa por el residente y por el plan de seguridad. La mano
de obra en altura necesita afiliación y seguro de riesgos; ahí el voluntariado
no es un ahorro, es una responsabilidad.

Los iconos (`scripts/lib/oficios.mjs`) son dibujos de línea y no fotos a
propósito: una foto de banco de imágenes de un obrero sonriendo se reconoce al
instante y resta credibilidad justo en la página donde alguien decide si
confía. Cuando existan fotos de la obra real, esas sí van.

## El enlace de dar

`site.giveUrl` en `content/site.js` es la **única URL del sitio que mueve
dinero** —la plataforma de recaudación del Banco Pichincha— y todos los
botones de dar salen de esa línea, en los dos idiomas. También es el `target`
de la `DonateAction` en los datos estructurados, porque una acción de donar
debe apuntar a donde efectivamente se puede dar, no a la página que lo
explica. El día que cambie la cuenta, se toca esa línea y nada más.

La estrategia de visibilidad (SEO, AEO, GEO, LLM y automatización) está en
[`ESTRATEGIA.md`](./ESTRATEGIA.md).
