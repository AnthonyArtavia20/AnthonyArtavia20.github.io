// Construye la terminal visual que presenta la información principal.
export function terminal() {
  // Los cuatro adornos usan el mismo SVG y se transforman desde CSS según su posición.
  const traces = ['tl', 'tr', 'bl', 'br']
    .map(
      (position) => `
        <svg class="corner-trace ${position}" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M6 32 L6 17 L17 6 L32 6" fill="none" stroke="var(--ef-green,#a7c080)" stroke-width="2"/>
          <circle cx="6" cy="32" r="2.6" fill="var(--ef-green,#a7c080)"/>
          <circle cx="32" cy="6" r="2.6" fill="var(--ef-aqua,#83c092)"/>
        </svg>`
    )
    .join('');

  return `
    <header>
      <div class="terminal-frame">
        ${traces}
        <div class="terminal">
          <div class="terminal-bar">
            <span class="dot r"></span>
            <span class="dot y"></span>
            <span class="dot g"></span>
            <span class="terminal-title">artavia@tec: ~</span>
          </div>
          <div class="terminal-body" id="term-body">
            <div>
              <span class="prompt">➜</span>
              <span class="path">~</span>
              <span id="typed-cmd"></span>
              <span class="cursor" id="cur"></span>
            </div>
            <div id="term-output"></div>
          </div>
          <div class="status-bar" aria-hidden="true">
            <span class="status-seg status-session">everforest (artavia)</span>
            <span class="status-seg status-mode">NORMAL</span>
            <span class="status-seg status-tab">Tab #1</span>
          </div>
        </div>
      </div>
    </header>`;
}
