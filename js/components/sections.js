// Información que se muestra en las tarjetas de proyectos.
const projects = [
  {
    name: 'vitals',
    tag: 'C · Linux',
    description:
      'Monitor de sistema para Linux escrito en C: CPU, memoria, procesos y demás métricas en tiempo real, directo desde la terminal. Proyecto personal para profundizar en programación de sistemas.',
    link: '',
  },
  {
    name: 'F1 Garage Manager',
    tag: 'React · Node/Express · SQL Server · Docker',
    description:
      'Sistema full-stack de gestión para un equipo de F1, hecho para el curso de Bases de Datos. Autenticación por roles, CRUD de equipos/autos/inventario, procedimientos almacenados y transacciones para reglas de negocio, un motor de simulación de carreras y un dashboard de analítica en Grafana.',
    link: 'https://github.com/AnthonyArtavia20/F1GarageManagerBDVerano',
  },
  {
    name: 'Genetic Kingdom',
    tag: 'C++',
    description:
      'Tower-defense hecho para el curso de Algoritmos y Estructuras de Datos II. Combina pathfinding con algoritmos genéticos/evolutivos para controlar el comportamiento de los enemigos.',
    link: 'https://github.com/AnthonyArtavia20/Genetic_Kingdom_Game',
  },
  {
    name: 'Compare Belt Image Analyzer',
    tag: 'Python · JavaScript · C#',
    description:
      'Sistema de clasificación de imágenes que identifica tomates y papas sobre una banda transportadora y activa el mecanismo físico de separación para clasificarlos en distintos contenedores.',
    link: 'https://github.com/AnthonyArtavia20/CompareBeltImageAnalyzer',
  },
  {
    name: 'DonCEy Kong Jr.',
    tag: 'Java · C/Raylib',
    description:
      'Juego multijugador con arquitectura cliente-servidor para el curso de Paradigmas de Programación: servidor en Java, cliente en C con Raylib.',
    link: 'https://github.com/AnthonyArtavia20/DonCEyKongJr---Game',
  },
  {
    name: 'BusCEMinas',
    tag: 'Racket',
    description:
      'Implementación de Buscaminas con programación funcional, explorando Racket y los paradigmas funcionales en el curso de Paradigmas de Programación.',
    link: 'https://github.com/AnthonyArtavia20/BusCEMinas',
  },
];

// Habilidades agrupadas para construir la sección de skills sin repetir markup.
const skillsData = {
  'Lenguajes': ['Python', 'C / C++', 'Java', 'C#', 'TypeScript', 'Racket'],
  'Web & backend': ['React', 'Node.js / Express', 'APIs REST', '.NET Framework', 'Tailwind CSS'],
  'Bases de datos': ['SQL Server / MySQL', 'SQL & NoSQL', 'Procedimientos almacenados', 'Modelado de datos'],
  'Hardware & sistemas digitales': ['Ensamblador', 'Verilog (básico)', 'Arquitectura de computadores', 'Diseño de circuitos digitales'],
  'Redes & herramientas': ['Git / GitHub', 'Linux', 'Docker', 'Grafana', 'Wireshark'],
  'Cursando actualmente': ['Circuitos de Corriente Alterna', 'Elementos Activos', 'Laboratorio de Circuitos Eléctricos'],
};

// Sección con la presentación personal y los datos de contacto.
export function about() {
  return `
    <section id="about-contact" class="split">
      <div class="split-col">
        <h2>whoami</h2>
        <p class="lede">
          Anthony Artavia Leitón — Estudiante de Ingeniería en Computadores en el TEC,
          con base sólida en programación, algoritmos y sistemas digitales (Electrónica),
          y experiencia previa como técnico en redes.
        </p>
        <p>
          Durante mi camino en la universidad he adquirido diversas habilidades en mi campo,
          desde lo fundamental de la programación como algoritmos y estructuras de datos además
          de conocimientos en lenguajes de muy bajo nivel como ensamblador racket, prolog y otros
          similares, también Bases de Datos desde la creación hasta el poder hacer conexiones con
          una web con backend y frontend que hagan consultas a la misma. Pero también he ido
          adquiriendo destrezas en el área de la electrónica, pudiendo crear proyectos físicos que
          suplan las necesidades de una empresa o cliente tal como una cinta transportadora
          separadora de tomates con un modelo de inteligencia artificial ¡Podrás ver y leer más
          sobre este proyecto bajo!<br><br>
          Actualmente en mis estudios ya estoy comenzado a rozar el diseño de circuitos y los
          conceptos de arquitectura de computadoras enfocado al Diseño y calidad de productos
          tecnológicos. <br>
          Tuve la oportunidad de hacer uso de mis conocimientos técnicos en técnico en redes de
          telecomunicaciones durante una pasantía en la Universidad Estatal a Distancia (UNED)
        </p>
      </div>

      <div class="split-col" id="contacto">
        <h2>contact --info</h2>
        <p class="lede">
          ¿Buscas a alguien para pasantía, proyecto o colaboración? Aquí está mi info directa.
        </p>
        <dl class="contact-list">
          <div class="contact-row">
            <dt>correo:</dt>
            <dd><a href="mailto:anthony.artavia20@gmail.com">anthony.artavia20@gmail.com</a></dd>
          </div>
          <div class="contact-row">
            <dt>github:</dt>
            <dd><a href="https://github.com/AnthonyArtavia20" target="_blank" rel="noopener">github.com/AnthonyArtavia20</a></dd>
          </div>
          <div class="contact-row">
            <dt>linkedin:</dt>
            <dd><a href="https://www.linkedin.com/in/anthonyartavia/" target="_blank" rel="noopener">linkedin.com/in/anthonyartavia</a></dd>
          </div>
        </dl>
        <a class="cv-card" href="CV_Anthony_José_Artavia_LeitónATS.pdf" download>
          <span class="cv-icon">↓</span>
          <span class="cv-text">
            <span class="cv-title">Descargar CV</span>
            <span class="cv-sub">PDF · actualizado 2026</span>
          </span>
        </a>
      </div>
    </section>`;
}

// Genera una tarjeta por cada proyecto del portafolio.
export function projectsSection() {
  const cards = projects
    .map(
      ({ name, tag, description, link }) => `
        <div class="project">
          <div class="project-head">
            <span class="project-name">${name}</span>
            <span class="project-tag">${tag}</span>
          </div>
          <p>${description}</p>
          <div class="links">
            ${
              link
                ? `<a href="${link}" target="_blank" rel="noopener">github →</a>`
                : `<span class="project-link-disabled">Repo privado ó en desarrollo</span>`
            }
          </div>
        </div>`
    )
    .join('');

  return `
    <section id="proyectos">
      <h2>ls proyectos/</h2>
      <div class="projects-grid">${cards}</div>
    </section>`;
}

// Muestra la experiencia profesional y la educación en dos columnas.
export function experience() {
  return `
    <section id="experiencia-educacion" class="split">
      <div class="split-col" id="experiencia">
        <h2>tail -f experiencia.log</h2>
        <div class="timeline">
          <div class="tl-item">
            <div class="tl-marker"></div>
            <div class="tl-content">
              <div class="tl-head">
                <span class="tl-role">Consultor y técnico de Infraestructura de TI (freelance)</span>
                <span class="tl-date">Jul – Ago 2026</span>
              </div>
              <span class="tl-org">FJA Holding</span>
              <p>
                Auditoría y mantenimiento completo de infraestructura de TI (equipos de
                cómputo, servidores, red, UPS e impresoras) previo a migración a la nube. Diagnóstico y
                recuperación de datos de discos duros dañados, diagnóstico de falla crítica en servidor
                , consolidación de red (eliminación de switch redundante vía análisis de
                tráfico con nmap/arp-scan) y hallazgo de un riesgo de seguridad de datos personales (PII)
                en equipo dado de baja. Entrega de bitácora técnica e informes de avance con
                recomendaciones priorizadas.
              </p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-marker"></div>
            <div class="tl-content">
              <div class="tl-head">
                <span class="tl-role">Asistente de laboratorio — Química General</span>
                <span class="tl-date">2024 – Actualidad</span>
              </div>
              <span class="tl-org">Tecnológico de Costa Rica</span>
              <p>Apoyo a estudiantes durante sesiones de laboratorio; revisión y calificación de reportes y evaluaciones.</p>
            </div>
          </div>
          <div class="tl-item">
            <div class="tl-marker"></div>
            <div class="tl-content">
              <div class="tl-head">
                <span class="tl-role">Pasantía técnica</span>
                <span class="tl-date">Oct – Dic 2022</span>
              </div>
              <span class="tl-org">Universidad Estatal a Distancia (UNED)</span>
              <p>Mantenimiento y troubleshooting de equipo de cómputo, configuración de redes, elaboración de documentación técnica y apoyo en la instrucción de un curso de robótica.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="split-col" id="educacion">
        <h2>cat educacion.md</h2>
        <div class="edu-item">
          <div class="tl-head">
            <span class="tl-role">Licenciatura Ingeniería en Computadores (en curso)</span>
            <span class="tl-date">2024 – presente</span>
          </div>
          <span class="tl-org">Instituto Tecnológico de Costa Rica (TEC)</span>
        </div>
        <div class="edu-item">
          <div class="tl-head">
            <span class="tl-role">Técnico en Redes de Telecomunicaciones</span>
            <span class="tl-date">2017 – 2022</span>
          </div>
          <span class="tl-org">CTP Fernando Volio Jiménez, Quebradilla, Cartago</span>
        </div>
        <p class="certs">
          <span class="key">certificaciones:</span>
          Cisco CCNA 1 · IT Essentials · Cybersecurity Essentials · Introduction to IoT · Linux Essentials (Linux Foundation)
        </p>
        <p class="certs">
          <span class="key">idiomas:</span>
          Español (nativo) · Inglés B2 · Alemán A1
        </p>
      </div>
    </section>`;
}

// Convierte cada grupo de habilidades en una columna de la cuadrícula.
export function skills() {
  const groups = Object.entries(skillsData)
    .map(
      ([name, items]) => `
        <div class="skill-cat">
          <h3>${name}</h3>
          <ul>
            ${items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>`
    )
    .join('');

  return `
    <section id="skills">
      <h2>cat skills.txt</h2>
      <div class="skills-grid">${groups}</div>
    </section>`;
}

export function footer() {
  return `
    <footer>
      hecho a mano · desplegado con GitHub Pages
    </footer>`;
}
