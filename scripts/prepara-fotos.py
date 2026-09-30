"""Prepara las fotos y renders del proyecto para la web.

Las imágenes que entrega un arquitecto vienen a 1920 y pesan casi dos megas
cada una. Puestas tal cual en la página se llevan por delante el tiempo de
carga justo donde alguien está decidiendo si confía en el proyecto.

Aquí se redimensionan, se comprimen como JPEG —que es el formato correcto
para una fotografía, no el PNG de paleta que usa el arte dibujado del sitio—
y una de ellas se recorta, por una razón que no es técnica y está explicada
abajo.

Se corre a mano (`npm run fotos`) y su salida se versiona.
"""
from PIL import Image
import os

ORIGEN = '/root/.claude/uploads/e11db486-0355-5d57-b3c4-ac34c8741013'
DESTINO = 'public/img/obra'
ANCHO_MAX = 1600

# El recorte del render exterior deja fuera el deportivo rojo que el
# arquitecto puso en la entrada. No es un capricho estético: esta imagen va a
# acompañar una petición de fondos en un país que cerró el año con 9.216
# homicidios, dirigida a gente que da cien dólares. Un coche de lujo en la
# puerta contradice todo lo que dice el texto de al lado, y quien lo note ya
# no lee el resto.
TAREAS = [
    ('75704aee-image.jpg', 'obra-actual.jpg', None),
    ('af0a134a-image.jpg', 'render-exterior.jpg', (0, 60, 975, 1020)),
    ('50acad0c-image.jpg', 'render-oficina.jpg', None),
    ('3f50f4eb-image.jpg', 'render-salon.jpg', None),
]

os.makedirs(DESTINO, exist_ok=True)
for origen, nombre, caja in TAREAS:
    im = Image.open(os.path.join(ORIGEN, origen)).convert('RGB')
    if caja:
        im = im.crop(caja)
    if im.width > ANCHO_MAX:
        im = im.resize((ANCHO_MAX, round(im.height * ANCHO_MAX / im.width)), Image.LANCZOS)
    salida = os.path.join(DESTINO, nombre)
    im.save(salida, 'JPEG', quality=82, optimize=True, progressive=True)
    print(f'{salida} {im.width}x{im.height} {os.path.getsize(salida) // 1024} KB')
