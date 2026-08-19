import { navigation } from './components/navigation.js';
import { terminal } from './components/terminal.js';
import {
  about,
  projectsSection,
  experience,
  skills,
  footer,
} from './components/sections.js';
import { initNavigation } from './features/navigation.js';
import { initTerminalAnimation } from './features/terminal-animation.js';

// Ensambla las partes de la página y activa sus comportamientos después de montarlas.
export function mountPortfolio(root) {
  root.innerHTML = [
    navigation(),
    terminal(),
    about(),
    projectsSection(),
    experience(),
    skills(),
    footer(),
  ].join('');

  initTerminalAnimation();
  initNavigation();
}
