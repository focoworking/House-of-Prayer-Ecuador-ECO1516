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

**`content/` es la fuente de verdad.** Los `.html`, `sitemap.xml`,
`robots.txt`, `llms.txt` y `src/styles/marca.css` son salida de build y están
en `.gitignore`: no se editan a mano.

```
content/
  site.js        Marca, paleta, NAP, navegación, pie, líneas de emergencia
  datos.js       Historia, bloques de la sala, eventos y preguntas
  pages-core.js  Inicio, ayuda inmediata, sala de oración
  pages-more.js  Nosotros, formación, misiones, eventos, dar, recursos,
                 contacto, preguntas, privacidad
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
| `--papel` | `#0D0817` | El fondo: violeta casi negro |
| `--papel-alto` | `#171026` | Tarjetas, pie, bloques levantados |
| `--tinta` / `--tinta-suave` | `#F4EFFA` / `#B9AECC` | Texto y texto secundario |
| `--morado` / `--morado-oscuro` | `#7B57A6` / `#4A2F6B` | Estructura y fondos densos |
| `--morado-claro` | `#A98BCB` | Etiquetas y apoyo |
| `--celeste` | `#2DB6DC` | La llama: **solo** lo que enciende una acción |

**El sitio es de noche a propósito** y no tiene modo claro. La casa se
sostiene de madrugada y la vigilia es el registro visual de la marca, no una
preferencia del visitante. Eso obliga a cuidar el contraste en serio: el
texto corrido va a 14:1 sobre el fondo y ningún gris baja de 4.5:1.

El celeste nunca se usa para texto corrido: es el color de la acción urgente
(la pestaña de ayuda, la barra fija, el botón de llamar). Si aparece en todas
partes deja de significar nada.

**Tipografía.** Fraunces para los titulares —tiene el peso de una Biblia
impresa sin parecer antigua— y Archivo para el texto. Se cargan de Google
Fonts, el único host externo del sitio, con `preconnect` a los dos dominios y
su pila de reserva declarada.

## Las imágenes

`scripts/build-imagenes.mjs` dibuja las cuatro piezas del sitio con el
rasterizador de `scripts/lib/lienzo.mjs`: la vigilia andina del inicio, el
incienso, Quito de noche y la llama del altar. Son originales, no hay banco de
imágenes detrás, no hay licencia que renovar y ninguna persona real aparece en
una foto que no autorizó.

Cada pieza es determinista —misma semilla, mismo archivo— y se guarda como PNG
de paleta con difusión de error: un degradado oscuro con grano en color
verdadero pesa tres megas y se lleva por delante el Largest Contentful Paint;
en 128 colores bien difundidos no se ve la banda y el archivo baja a un tercio.

Las imágenes están en `.gitignore` como cualquier otra salida de build.
Regenerarlas tarda unos cincuenta segundos, así que `npm run build` no las
toca: se corre `npm run img` a mano cuando se cambia el arte.

El logotipo vectorial está en `public/marca/eco1516-logo.svg` y una versión
inline, que hereda `currentColor`, en `scripts/build-pages.mjs`.

## Pendientes antes de publicar

Los datos marcados `TODO ECO1516` en `content/site.js` son marcadores de
posición y hay que sustituirlos por los reales:

- Dirección exacta y coordenadas de la sede.
- Teléfono de oficina y número real de la línea de oración y del WhatsApp.
- Usuarios reales de YouTube, Instagram, Facebook y Spotify.
- Fechas de los eventos en `content/datos.js` (un `Event` vencido en el
  marcado resta credibilidad; revisar cada trimestre).

El NAP —nombre, dirección, teléfono— tiene que quedar **idéntico** aquí, en
Google Business Profile, en Apple Business Connect, en Bing Places y en cada
directorio. Se edita en `content/site.js` y en ningún otro sitio.

La estrategia de visibilidad (SEO, AEO, GEO, LLM y automatización) está en
[`ESTRATEGIA.md`](./ESTRATEGIA.md).
