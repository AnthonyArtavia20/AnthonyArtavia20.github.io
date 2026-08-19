// Construye la barra de navegación y sus enlaces a las secciones.
export function navigation() {
  return `
    <nav id="site-nav">
      <span class="brand">
        <span class="brand-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="7" y="7" width="10" height="10" rx="1.2"/>
            <path d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3"/>
          </svg>
        </span>
        <span class="brand-text">
          <span class="brand-eyebrow">Portafolio digital</span>
          <span class="brand-name">Anthony Artavia L.</span>
          <span class="brand-degree">Lic. Ingeniería en Computadores</span>
        </span>
      </span>
      <ul>
        <li>
          <a href="#proyectos">
            <span class="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 6.5h6l2 2h10v10.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6.5z"/>
              </svg>
            </span>
            proyectos
          </a>
        </li>
        <li>
          <a href="#experiencia">
            <span class="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="8.5"/>
                <path d="M12 7.5V12l3 2.5"/>
              </svg>
            </span>
            experiencia
          </a>
        </li>
        <li>
          <a href="#skills">
            <span class="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="6.5" y="6.5" width="11" height="11" rx="1"/>
                <path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3"/>
              </svg>
            </span>
            skills
          </a>
        </li>
        <li>
          <a href="#contacto">
            <span class="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/>
                <path d="M4 7l8 6 8-6"/>
              </svg>
            </span>
            contacto
          </a>
        </li>
      </ul>
    </nav>`;
}
