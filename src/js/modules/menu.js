/**
 * El menú de móvil.
 *
 * En pantallas estrechas la navegación era una tira que se desbordaba por la
 * derecha: se veía media palabra cortada y nada indicaba que hubiera más
 * detrás. Un desplazamiento horizontal que el visitante no sabe que existe es
 * lo mismo que no tener esos enlaces.
 *
 * Ahora hay un botón que abre la lista entera, en vertical y a tamaño de
 * dedo. El panel vive en el mismo `<nav>` de siempre, así que si este archivo
 * no llega a cargar el menú sigue estando en la página y funcionando: la
 * clase `con-menu` del elemento raíz es la que le dice al CSS que ya hay
 * quien lo abra y lo cierre.
 */
export const menu = () => {
  const boton = document.querySelector('.menu')
  const nav = document.querySelector('.nav')
  if (!boton || !nav) return

  document.documentElement.classList.add('con-menu')

  const abrir = (si) => {
    boton.setAttribute('aria-expanded', String(si))
    document.body.classList.toggle('menu-abierto', si)
  }

  boton.addEventListener('click', () => abrir(boton.getAttribute('aria-expanded') !== 'true'))

  /* Escape cierra, como en cualquier panel. */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
      abrir(false)
      boton.focus()
    }
  })

  /* Y un enlace también: tocar «Quiénes somos» y que el panel se quede abierto
     encima de la página a la que acabas de llegar es desconcertante. */
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) abrir(false)
  })
}
