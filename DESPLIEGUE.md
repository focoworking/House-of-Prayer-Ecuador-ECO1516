# Desplegar eco1516.org

El sitio es **estático**: HTML, CSS, imágenes y dos kilobytes de JavaScript.
No necesita PHP, ni base de datos, ni Node en el servidor. Funciona en
cualquier hosting compartido, y también gratis en Netlify, Vercel, Cloudflare
Pages o GitHub Pages.

## Qué se sube

```bash
npm install
npm run build     # deja el sitio en dist/
```

**Se sube el contenido de `dist/`, no la carpeta `dist` en sí.** Todo lo que
hay dentro va a la raíz pública del dominio (`public_html/`, `www/` o como la
llame tu proveedor). Son unos 3 MB.

Incluye un `.htaccess` ya configurado, y un `404.html`.

## Hosting compartido (cPanel, Plesk, FTP)

1. Entra al Administrador de archivos o conéctate por FTP/SFTP.
2. Vacía la raíz pública si tiene una página por defecto.
3. Sube **todo el contenido de `dist/`**, incluido el archivo `.htaccess`
   —empieza por punto y muchos clientes FTP lo ocultan; en FileZilla hay que
   activar «mostrar archivos ocultos»—.
4. Activa el certificado SSL del dominio (en cPanel, *SSL/TLS Status* →
   *Run AutoSSL*). El `.htaccess` fuerza HTTPS, así que sin certificado el
   sitio no abrirá.

### Comprobaciones inmediatas, en este orden

| Qué | Cómo se comprueba | Si falla |
| --- | --- | --- |
| **URLs sin `.html`** | Abre `www.eco1516.org/ayuda` | Es lo único que puede romperse. Ver abajo |
| HTTPS y www | Entra por `eco1516.org` a secas: debe saltar a `https://www.` | Falta el certificado |
| Página 404 | Abre `www.eco1516.org/cualquier-cosa` | Debe verse la página del sitio, no la del servidor |
| Botón de dar | Púlsalo en `/dar` | Debe abrir la plataforma del Banco Pichincha |
| Imágenes | Mira la portada | Si faltan, no se subió `img/` |

**Si `/ayuda` da 404**, el servidor no está aplicando el `.htaccess`. Pide al
proveedor que active `AllowOverride All` para tu dominio. Mientras tanto, las
páginas siguen siendo accesibles con `.html` al final.

## Netlify, Vercel o Cloudflare Pages

Conectas el repositorio y configuras:

- **Comando de build:** `npm run build`
- **Directorio de publicación:** `dist`
- **Versión de Node:** 20 o superior

El `.htaccess` lo ignoran —es de Apache—, pero estas plataformas resuelven las
URLs sin extensión por su cuenta. Cada `git push` vuelve a publicar solo.

## Antes de publicar de verdad

Hay datos de marcador en el sitio, marcados en el código como `TODO ECO1516`.
Publicar con ellos es peor que no publicar: alguien va a llamar a un teléfono
que no existe.

- [ ] **Teléfono y WhatsApp reales**, y en qué horas hay alguien atendiendo
      (`content/site.js`).
- [ ] **Correos reales** (`hola@` y `oracion@`), y que el buzón exista.
- [ ] **Redes sociales reales**: YouTube, Instagram, Facebook, Spotify.
- [ ] **Dirección**, si ya hay dónde recibir a alguien.
- [ ] Comprobar que el **enlace de donación** del Banco Pichincha funciona
      desde Ecuador, Estados Unidos y España.

## Después de publicar

1. **Google Search Console** y **Bing Webmaster Tools**: añadir el dominio y
   enviar `https://www.eco1516.org/sitemap.xml`.
2. **Google Business Profile** como *Place of Worship*, con el mismo NAP que
   `content/site.js`, letra por letra.
3. Comprobar los datos estructurados con la
   [prueba de resultados enriquecidos](https://search.google.com/test/rich-results).
4. Medir `/` y `/ayuda` en [PageSpeed](https://pagespeed.web.dev/).

## Actualizar el sitio más adelante

Se edita `content/`, se corre `npm run build` y se vuelve a subir `dist/`.
Nunca se editan los `.html` a mano: son salida de build y el siguiente
`npm run build` los sobrescribe.

Antes de cada subida:

```bash
npm run check     # 28 páginas: títulos, descripciones, hreflang, JSON-LD
```
