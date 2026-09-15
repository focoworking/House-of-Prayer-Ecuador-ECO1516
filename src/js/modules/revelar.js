/**
 * Aparición suave de las secciones al entrar en pantalla.
 *
 * Se respeta `prefers-reduced-motion` antes que nada: si el visitante pidió
 * menos movimiento, esta función no toca el documento. Y si el navegador no
 * tiene IntersectionObserver, tampoco: el contenido ya es visible por
 * defecto, la animación solo lo oculta para volver a mostrarlo.
 */

export const revelar = () => {
  const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (menosMovimiento || !('IntersectionObserver' in window)) return

  const objetivos = document.querySelectorAll('.seccion, .hero')
  if (!objetivos.length) return

  document.documentElement.classList.add('con-revelado')

  const observador = new IntersectionObserver(
    (entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue
        entrada.target.classList.add('visible')
        observador.unobserve(entrada.target)
      }
    },
    { rootMargin: '0px 0px -12% 0px' }
  )

  for (const objetivo of objetivos) observador.observe(objetivo)
}
