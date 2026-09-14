const root = document.getElementById('root');

root.innerHTML = `
  <header><a class="brand" href="#inicio"><span>⚓</span><div>LA ISLA DE <b>LIRA</b></div></a><nav><a href="#aventura">La aventura</a><a href="#mapa">Mapa del tesoro</a><a href="#juegos">Juegos piratas</a><a href="#confirmar" class="nav-cta">CONFIRMAR ASISTENCIA</a></nav></header>
  <main>
    <section class="hero" id="inicio"><div class="hero-copy"><div class="badge"><span>✦</span> MENSAJE EN UNA BOTELLA <span>✦</span></div><p class="script">¡Atención, grumetes!</p><h1>RUMBO A LOS<br><em>7 AÑOS</em> DE LIRA</h1><p class="intro">La Capitana Lira busca una tripulación valiente para celebrar su cumpleaños. ¿Te apuntas a la aventura?</p><div class="date-row"><div><span>OCT</span><b>24</b></div><p><strong>SÁBADO · 17:00 H</strong><br>En la Isla del Tesoro</p></div><a class="gold-btn hero-btn" href="#confirmar">¡QUIERO EMBARCAR! <span>→</span></a></div>
      <div class="scene" role="img" aria-label="Ilustración de un barco pirata navegando hacia una isla"><div class="sun"></div><div class="cloud cloud-a">☁</div><div class="cloud cloud-b">☁</div><div class="island"><span>🌴</span></div><div class="ship"><div class="mast"></div><div class="sail"><span>★</span></div><div class="flag">⚑</div><div class="hull">●　●　●</div></div><div class="wave wave-a"></div><div class="wave wave-b"></div></div>
    </section>
    <section class="adventure" id="aventura"><p class="eyebrow">PREPARA TU CATALEJO</p><h2>Una aventura de las que<br>hacen historia</h2><p class="section-intro">Juegos, tesoros escondidos, merienda y muchas sorpresas esperan a toda la tripulación.</p><div class="features"><article><span>🗺️</span><div><b>MAPA DEL TESORO</b><p>Sigue las pistas y encuentra el botín secreto de la Capitana.</p></div></article><article><span>🥥</span><div><b>MERIENDA PIRATA</b><p>Provisiones deliciosas para recuperar fuerzas.</p></div></article><article><span>🎁</span><div><b>BOTÍN SORPRESA</b><p>Cada grumete se llevará un recuerdo de la isla.</p></div></article></div></section>
    <section class="map-section" id="mapa"><div class="map-card"><span class="compass">✥</span><div class="route"><i>🏠</i><b>··············</b><i>🌴</i><b>··············</b><i>✕</i></div><p>EL LUGAR SECRETO</p><h2>La Isla del Tesoro</h2><p>Pronto la Capitana enviará las coordenadas exactas<br>a todos los grumetes confirmados.</p></div></section>
    <section class="games" id="juegos"><p class="eyebrow">ENTRENA COMO UN PIRATA</p><h2>La academia de grumetes</h2><p class="section-intro">Supera estos retos antes de subir a bordo. ¡Que comience la aventura!</p><div class="game-layout">
      <div class="game-card"><div class="game-title"><span class="game-icon">🧭</span><div><p>JUEGO DE MEMORIA</p><h3>Parejas del océano</h3></div></div><div class="memory" id="memory"></div><div class="game-footer"><small id="memory-status">0 de 4 parejas encontradas</small><button id="memory-reset">Jugar de nuevo ↻</button></div></div>
      <div class="game-card"><div class="game-title"><span class="game-icon">🗺️</span><div><p>BUSCA EL TESORO</p><h3>¿Dónde está el cofre?</h3></div></div><p class="hint">Elige un lugar de la isla y excava. ¡Solo una X esconde el tesoro!</p><div class="dig-grid" id="dig-grid"></div><div class="game-footer"><small id="treasure-status">Toca una X para excavar</small><button id="treasure-reset">Nueva isla ↻</button></div></div>
    </div></section>
    <section class="rsvp" id="confirmar"><div class="bottle" aria-hidden="true">🍾</div><div><p class="eyebrow light">CONFIRMA TU EMBARQUE</p><h2>¿Te unes a la tripulación?</h2><p>La capitana necesita saber cuántos grumetes subirán a bordo.</p></div><div id="rsvp-slot"><form id="rsvp-form"><label>Nombre del grumete<input id="guest-name" placeholder="Escribe tu nombre" required></label><label>¿Vendrás a la fiesta?<select id="guest-answer"><option>¡Sí, allí estaré!</option><option>No podré embarcar</option><option>Aún no lo sé</option></select></label><button class="gold-btn" type="submit">CONFIRMAR ASISTENCIA <span>→</span></button></form></div></section>
  </main>
  <footer><a class="brand" href="#inicio"><span>⚓</span><div>LA ISLA DE <b>LIRA</b></div></a><p>Hecho con mucho cariño para la Capitana Lira · Cumple 7 años</p><button id="back-top">VOLVER ARRIBA ↑</button></footer>`;

const icons = ['⚓', '🦜', '🏴‍☠️', '💎', '⚓', '🦜', '🏴‍☠️', '💎'];
let deck = [], open = [], matched = [];
const shuffle = list => [...list].sort(() => Math.random() - 0.5);
function renderMemory() {
  const board = document.getElementById('memory');
  board.innerHTML = deck.map(card => `<button data-id="${card.id}" aria-label="${open.includes(card.id) || matched.includes(card.icon) ? card.icon : 'Carta oculta'}" class="${open.includes(card.id) || matched.includes(card.icon) ? 'flipped' : ''}"><span>${open.includes(card.id) || matched.includes(card.icon) ? card.icon : '✦'}</span></button>`).join('');
  document.getElementById('memory-status').textContent = matched.length === 4 ? '¡Tesoro encontrado! Eres un gran corsario.' : `${matched.length} de 4 parejas encontradas`;
}
function resetMemory() { deck = shuffle(icons.map((icon, id) => ({ icon, id }))); open = []; matched = []; renderMemory(); }
document.getElementById('memory').addEventListener('click', event => {
  const button = event.target.closest('button'); if (!button || open.length === 2) return;
  const id = Number(button.dataset.id), card = deck.find(item => item.id === id);
  if (open.includes(id) || matched.includes(card.icon)) return;
  open.push(id); renderMemory();
  if (open.length === 2) { const pair = deck.filter(item => open.includes(item.id)); if (pair[0].icon === pair[1].icon) { matched.push(pair[0].icon); setTimeout(() => { open = []; renderMemory(); }, 450); } else setTimeout(() => { open = []; renderMemory(); }, 700); }
});
document.getElementById('memory-reset').addEventListener('click', resetMemory); resetMemory();

let treasure = Math.floor(Math.random() * 9), found = false;
function renderTreasure() { document.getElementById('dig-grid').innerHTML = Array.from({ length: 9 }, (_, i) => `<button data-cell="${i}" aria-label="Excavar casilla ${i + 1}">${found && i === treasure ? '💰' : '✕'}</button>`).join(''); document.getElementById('treasure-status').textContent = found ? '¡Tesoro encontrado! ¡Buen trabajo!' : 'Toca una X para excavar'; }
document.getElementById('dig-grid').addEventListener('click', event => { const button = event.target.closest('button'); if (button && Number(button.dataset.cell) === treasure) { found = true; renderTreasure(); } });
document.getElementById('treasure-reset').addEventListener('click', () => { found = false; treasure = Math.floor(Math.random() * 9); renderTreasure(); }); renderTreasure();

document.getElementById('rsvp-form').addEventListener('submit', event => { event.preventDefault(); const name = document.getElementById('guest-name').value.trim(); const answer = document.getElementById('guest-answer').value; localStorage.setItem('lira-rsvp', JSON.stringify({ name, answer })); document.getElementById('rsvp-slot').innerHTML = `<div class="success" role="status"><b>¡Embarque confirmado, ${name.replace(/[<>]/g, '')}! ⚓</b><span>Tu respuesta ha quedado guardada en este dispositivo.</span><button id="change-rsvp">Cambiar respuesta</button></div>`; document.getElementById('change-rsvp').addEventListener('click', () => window.location.reload()); });
document.getElementById('back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
