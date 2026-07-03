//Archivo en JavaScript con las funciones encargadas de dar animación y efectos al HTML principal.

// Función encargada de darle funcionamiento: animaciones y demás, a la web principal
(function () {
  const cmdEl = document.getElementById('typed-cmd'); //Se busca en el HTML el elemento id=typed-cmd", osea lo que se va escribiendo la info en la terminal falsa.
  const outEl = document.getElementById('term-output');//Se busca el elemento con id="term-output", es decir ´isivid aĺa sección donde se inyecta toda la info de mi persona.
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; //Opción de accesibilidad para gente sensible a animaciones, se le pregunta al navegador de la misma y matchMedia() evalúa una media query de CSS desde JS y .matches nos da true/false.
  const cmd = "neofetch --whoami";//El texto del "comando" que se va a simular escribiendo, letra por letra.
  const lines = [ //Array de mi info, modificable
    ['Nombre', 'Anthony Artavia Leitón'],
    ['Carrera', 'Licenciatura en Ingeniería en Computadores'],
    ['Institución', 'Instituto Tecnológico de Costa Rica (ITCR)(TEC)'],
    ['Stack', 'Python · C# · C/C++ · · React · SQL'],
    ['Idiomas', 'Español: Nativo, Inglés: Avanzado (B2), Alemán: Inicial(A1)'],
    ['Status', 'Estudiando pero a la vez buscando pasantía / proyectos'],
  ];

  // Función que construye el HTML de salida a partir del array `lines` y lo mete dentro de outEl (#term-output).
  function buildOutput() {
    outEl.innerHTML = lines
      // .map() recorre cada par [etiqueta, valor] y lo convierte en un string HTML. l  = el par actual, ej: ['nombre', 'Anthony Artavia Leitón'], i  = el índice (posición) dentro del array: 0, 1, 2...
      .map(
        (l, i) =>
          // Generamos un <div> por cada línea.
          // style="animation-delay:..." hace que cada línea aparezca un poquito después que la anterior (0s, 0.08s, 0.16s...), dando efecto "cascada". l[0] es la etiqueta (ej "nombre"), l[1] es el valor (ej "Anthony...").
          `<div class="output-line" style="animation-delay:${i * 0.08}s"><span class="key">${l[0]}:</span> <span class="val">${l[1]}</span></div>`
      )
      .join(''); // .join('') pega todos los strings del array en uno solo, sin separador, porque .map() nos deja un array de strings y innerHTML necesita un solo string.
  }

  //Acá la flag ed accesibilidad indica si se reduce la animación o no.
  if (reduced) {
    cmdEl.textContent = cmd;   // ponemos el comando completo de inmediato
    buildOutput();             // mostramos el resultado de inmediato
    return;                    // cortamos la ejecución de la función aquí, no seguimos
  }
  // --- A partir de aquí, solo corre la animación si NO se pidió reducir el movimiento ---
  let i = 0;  // Contador que indica cuántos caracteres del comando llevamos "escritos".
  function type() { // Función recursiva que simula el efecto de tipeo, un caracter a la vez.
    if (i <= cmd.length) {
      cmdEl.textContent = cmd.slice(0, i);// cmd.slice(0, i) corta el string desde el inicio hasta la posición i. Ej: si i=3 y cmd="neofetch...", esto da "neo".
      i++; // avanzamos un caracter en cada iteración
      setTimeout(type, 45);// Programamos la siguiente letra 45ms después. setTimeout no "pausa" el código: agenda que type() se vuelva a llamar más adelante, y el navegador sigue funcionando mientras tanto (por eso no se congela la página).
    } else {
      setTimeout(buildOutput, 200); // Cuando ya escribimos todo el comando (i > cmd.length), esperamos 200ms más (una pausa antes del "resultado") y llamamos a buildOutput() para mostrar las líneas de info.
    }
  }
  type(); // Acá se llama a la función de animación.
})(); // Cierra y ejecuta inmediatamente la función.

(function () {// Función que hace separar la barra de navegación al hacer scroll, la barra de navegación adopta el mismo panel translúcido/con borde que la terminal falsa. ---
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  function onScroll() {
    // Pasado los ~40px de scroll, se activa el estilo "panel de terminal".
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  onScroll(); // por si la página carga ya con scroll (ej. al recargar en una sección)
  window.addEventListener('scroll', onScroll, { passive: true });
})();

(function () {//Scroll con offset al hacer click en el nav: sin esto, el navegador lleva la sección justo al filo superior de la pantalla, tapada por el
  const nav = document.getElementById('site-nav');// propio nav flotante (que es sticky). Calculamos manualmente a dónde acer scroll para que la sección quede más centrada en lo visible.
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  function scrollToTarget(id) {
    const target = document.getElementById(id);
    if (!target) return;
    const navHeight = nav ? nav.offsetHeight + 14 : 0; // Alto real del nav (más el "top" de 14px que tiene por ser sticky).
    const breathingRoom = window.innerHeight * 0.25; // Un margen extra: mientras más grande, más "centrada" queda la sección en vez de pegada justo debajo del nav. 0.25 = 25% del alto visible.
    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const finalY = Math.max(targetY - navHeight - breathingRoom, 0); // Restamos el nav y el margen extra para que no quede ni tapada ni pegada arriba del todo.
    window.scrollTo({ top: finalY, behavior: 'smooth' });
  }

  // Función de la clase que hace efecto del parpadeo (definida en style.css) sobre la sección/columna a la que se llegó, y la quita sola cuando la animación termina — así queda "como estaba" después del efecto.
  function flashTarget(id) {
    const target = document.getElementById(id);
    if (!target) return; // Por si se hace click varias veces seguidas al mismo link: quitamos la clase y forzamos un reflow (leer offsetWidth) para poder reiniciar la animación desde cero, aunque la clase sea "la misma".
    target.classList.remove('section-flash');
    void target.offsetWidth;
    target.classList.add('section-flash');

    target.addEventListener(
      'animationend',
      (e) => {
        // Puede haber más de una animación (el pulso, el scan, el texto del h2) y el evento sube por bubbling; solo removemos cuando termina la que corre directamente sobre el propio target, no sobre el h2 hijo.
        if (e.target === target) target.classList.remove('section-flash');
      },
      { once: true }
    );
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1); // quita el "#"
      if (!id) return;
      e.preventDefault(); // evita el salto instantáneo por defecto del navegador
      scrollToTarget(id);
      history.pushState(null, '', `#${id}`); // mantiene la URL actualizada
      setTimeout(() => flashTarget(id), 550); // Esperamos a que el scroll suave termine (aprox.) antes de resaltar, si no, el efecto arranca mientras la sección todavía se está moviendo.
    });
  });
})();