// Datos que aparecen en la salida simulada de la terminal.
const lines = [
  ['Nombre', 'Anthony Artavia Leitón'],
  ['Carrera', 'Licenciatura en Ingeniería en Computadores'],
  ['Institución', 'Instituto Tecnológico de Costa Rica (ITCR)(TEC)'],
  ['Stack', 'Python · C# · C/C++ · · React · SQL'],
  ['Idiomas', 'Español: Nativo, Inglés: Avanzado (B2), Alemán: Inicial(A1)'],
  ['Status', 'Estudiando pero a la vez buscando pasantía / proyectos'],
];

// Inicializa la escritura del comando y la aparición progresiva de sus resultados.
export function initTerminalAnimation() {
  const cmdEl = document.getElementById('typed-cmd');
  const outEl = document.getElementById('term-output');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const command = 'neofetch --whoami';

  if (!cmdEl || !outEl) return;

  // Construye el HTML de salida a partir del array de información.
  function buildOutput() {
    outEl.innerHTML = lines
      .map(
        ([key, value], index) => `
          <div class="output-line" style="animation-delay:${index * 0.08}s">
            <span class="key">${key}:</span>
            <span class="val">${value}</span>
          </div>`
      )
      .join('');
  }

  // Si el usuario pidió reducir el movimiento, se muestra todo de inmediato.
  if (reduced) {
    cmdEl.textContent = command;
    buildOutput();
    return;
  }

  // Escribe el comando carácter por carácter, como en una terminal real.
  let index = 0;
  function type() {
    if (index <= command.length) {
      cmdEl.textContent = command.slice(0, index);
      index++;
      setTimeout(type, 45);
    } else {
      setTimeout(buildOutput, 200);
    }
  }

  type();
}
