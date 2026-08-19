// Inicializa los efectos de scroll y navegación interna del sitio.
export function initNavigation() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  // Después de 40px de scroll, la barra adopta el estilo de panel translúcido.
  function onScroll() {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Ajusta el destino para que la barra sticky no cubra el título de la sección.
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      const navHeight = nav.offsetHeight + 14;
      const breathingRoom = window.innerHeight * 0.25;
      const targetY = target.getBoundingClientRect().top + window.scrollY;
      const finalY = Math.max(targetY - navHeight - breathingRoom, 0);

      window.scrollTo({ top: finalY, behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);

      // El destello comienza después del desplazamiento suave.
      setTimeout(() => flashTarget(target), 550);
    });
  });
}

// Resalta brevemente la sección a la que llegó el usuario.
function flashTarget(target) {
  target.classList.remove('section-flash');
  void target.offsetWidth;
  target.classList.add('section-flash');

  target.addEventListener(
    'animationend',
    (event) => {
      if (event.target === target) {
        target.classList.remove('section-flash');
      }
    },
    { once: true }
  );
}
