"""Recorta el isotipo del logotipo original y le quita el fondo.

Por que, y no un redibujo: el logotipo de la casa es suyo, y una
reconstruccion vectorial —por cuidada que este— nunca es igual. Lo que el
sitio necesita de el es solo el emblema: sin el texto de debajo y sin el
fondo gris de la lamina, para poder ponerlo sobre papel blanco.

El fondo original es un degradado gris muy claro y el dibujo es morado y
celeste saturados, asi que separarlos por saturacion es fiable: lo que casi
no tiene color se vuelve transparente, y el borde se suaviza en vez de
recortarse a hachazos.

Se ejecuta a mano (`npm run isotipo`) y su salida se versiona, porque
depende de un archivo que no cambia.
"""
from PIL import Image

ORIGEN = 'public/marca/eco1516-logo-original.png'
DESTINO = 'public/marca/eco1516-isotipo.png'

src = Image.open(ORIGEN).convert('RGB')
W, H = src.size
px = src.load()

# 1. Caja del emblema. No basta con "la mitad de arriba": la palabra ECUADOR
#    empieza pocos pixeles despues del arco del suelo y se colaba entera. El
#    emblema es el PRIMER bloque contiguo de filas con color; en cuanto
#    aparece una franja vacia, el dibujo termino y lo que sigue es texto.
def fila_con_color(y):
    for x in range(W):
        r, g, b = px[x, y]
        if (max(r, g, b) - min(r, g, b)) / 255 > 0.12:
            return True
    return False

filas = [fila_con_color(y) for y in range(H)]
inicio = next(y for y, hay in enumerate(filas) if hay)
fin = inicio
while fin + 1 < H and any(filas[fin + 1 : fin + 6]):   # tolera 5 filas de hueco
    fin += 1

minx, maxx = W, 0
for y in range(inicio, fin + 1):
    for x in range(W):
        r, g, b = px[x, y]
        if (max(r, g, b) - min(r, g, b)) / 255 > 0.12:
            minx, maxx = min(minx, x), max(maxx, x)
miny, maxy = inicio, fin

margen = 10
caja = (max(0, minx - margen), max(0, miny - margen),
        min(W, maxx + margen + 1), min(H, maxy + margen + 1))
recorte = src.crop(caja)

# 2. Alfa por saturacion, con una rampa: por debajo de 0.06 es fondo, por
#    encima de 0.16 es dibujo, y entre medias se interpola. Esa rampa es lo
#    que conserva el antialiasing del original en vez de dejar un borde
#    dentado.
recorte = recorte.convert('RGBA')
ancho, alto = recorte.size
datos = recorte.load()
BAJO, ALTO = 0.06, 0.16
for y in range(alto):
    for x in range(ancho):
        r, g, b, _ = datos[x, y]
        sat = (max(r, g, b) - min(r, g, b)) / 255
        if sat <= BAJO:
            a = 0
        elif sat >= ALTO:
            a = 255
        else:
            a = int(255 * (sat - BAJO) / (ALTO - BAJO))
        datos[x, y] = (r, g, b, a)

recorte.save(DESTINO)
print(f'{DESTINO} {recorte.size[0]}x{recorte.size[1]} (recortado de {caja})')
