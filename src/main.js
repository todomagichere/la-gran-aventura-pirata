const root = document.getElementById('root');

root.innerHTML = `
  <audio id="theme-audio" src="/src/assets/monkey_island_main_theme.mp3" loop preload="auto"></audio>
  <button class="audio-toggle" id="audio-toggle" type="button" aria-label="Activar música" aria-pressed="false" title="Activar música">🔇</button>
  <header><a class="brand" href="#inicio"><span>⚓</span><div>LA ISLA DE <b>LIRA</b></div></a><nav><a href="#aventura">La aventura</a><a href="#mapa">Mapa del tesoro</a><a href="#juegos">Juegos piratas</a><a href="#confirmar" class="nav-cta">CONFIRMAR</a></nav></header>
  <main>
    <section class="hero" id="inicio"><div class="hero-copy"><div class="badge"><span>✦</span> MENSAJE EN UNA BOTELLA <span>✦</span></div><p class="script">¡Atención, grumetes!</p><h1>RUMBO A LOS<br><em>7 AÑOS</em> DE LIRA</h1><p class="intro">La Capitana Lira busca una tripulación valiente para celebrar su cumpleaños. ¿Te apuntas a la aventura?</p><div class="date-row"><div><span>OCT</span><b>24</b></div><p><strong>SÁBADO · 17:00 H</strong><br>En la Isla del Tesoro</p></div><a class="gold-btn hero-btn" href="#confirmar">¡QUIERO EMBARCAR! <span>→</span></a></div>
      <div class="scene"><img src="/src/assets/pirate-adventure.svg" alt="Un alegre barco pirata navega hacia una isla tropical con un cofre del tesoro." /></div>
    </section>
    <section class="adventure" id="aventura"><p class="eyebrow">PREPARA TU CATALEJO</p><h2>Una aventura de las que<br>hacen historia</h2><p class="section-intro">Juegos, tesoros escondidos, merienda y muchas sorpresas esperan a toda la tripulación.</p><div class="features"><article><span>🗺️</span><div><b>MAPA DEL TESORO</b><p>Sigue las pistas y encuentra el botín secreto de la Capitana.</p></div></article><article><span>🥥</span><div><b>MERIENDA PIRATA</b><p>Provisiones deliciosas para recuperar fuerzas.</p></div></article><article><span>🎁</span><div><b>BOTÍN SORPRESA</b><p>Cada grumete se llevará un recuerdo de la isla.</p></div></article></div></section>
    <section class="map-section" id="mapa"><div class="map-card"><span class="compass">✥</span><div class="route"><i>🏠</i><b>··············</b><i>🌴</i><b>··············</b><i>✕</i></div><p>EL LUGAR SECRETO</p><h2>La Isla del Tesoro</h2><p>Pronto la Capitana enviará las coordenadas exactas<br>a todos los grumetes confirmados.</p></div></section>
    <section class="games" id="juegos"><p class="eyebrow">ENTRENA COMO UN PIRATA</p><h2>La academia de grumetes</h2><p class="section-intro">Supera estos retos antes de subir a bordo. ¡Que comience la aventura!</p><div class="game-layout">
      <div class="game-card"><div class="game-title"><span class="game-icon">🧭</span><div><p>JUEGO DE MEMORIA</p><h3>Parejas del océano</h3></div></div><div class="memory" id="memory"></div><div class="game-footer"><small id="memory-status">0 de 4 parejas encontradas</small><button id="memory-reset">Jugar de nuevo ↻</button></div></div>
      <div class="game-card"><div class="game-title"><span class="game-icon">🗺️</span><div><p>BUSCA EL TESORO</p><h3>¿Dónde está el cofre?</h3></div></div><p class="hint">Elige un lugar de la isla y excava. ¡Solo una X esconde el tesoro!</p><div class="dig-grid" id="dig-grid"></div><div class="game-footer"><small id="treasure-status">Toca una X para excavar</small><button id="treasure-reset">Nueva isla ↻</button></div></div>
      <div class="game-card fps-card"><div class="game-title"><span class="game-icon">🏝️</span><div><p>FPS DE EXPLORACIÓN</p><h3>La cala del tesoro</h3></div></div><div class="fps-shell"><canvas id="fps-canvas" width="960" height="540" tabindex="0" aria-label="Juego en primera persona para encontrar un tesoro en una isla"></canvas><div class="fps-overlay" id="fps-overlay"><b>Entrar en la cala</b><span>Clic para explorar</span></div><div class="fps-hud"><span id="fps-status">Busca el cofre escondido</span><span>E S D F · espacio</span></div></div><div class="game-footer"><small id="fps-distance">El mapa aparece al mantener espacio.</small><button id="fps-reset">Volver al muelle ↻</button></div></div>
    </div></section>
    <section class="rsvp" id="confirmar"><div class="bottle" aria-hidden="true">🍾</div><div><p class="eyebrow light">CONFIRMA TU EMBARQUE</p><h2>¿Te unes a la tripulación?</h2><p>La capitana necesita saber cuántos grumetes subirán a bordo.</p></div><div id="rsvp-slot"><form id="rsvp-form"><label>Nombre del grumete<input id="guest-name" placeholder="Escribe tu nombre" required></label><label>¿Vendrás a la fiesta?<select id="guest-answer"><option>¡Sí, allí estaré!</option><option>No podré embarcar</option><option>Aún no lo sé</option></select></label><button class="gold-btn" type="submit">CONFIRMAR ASISTENCIA <span>→</span></button></form></div></section>
  </main>
  <footer><a class="brand" href="#inicio"><span>⚓</span><div>LA ISLA DE <b>LIRA</b></div></a><p>Hecho con mucho cariño para la Capitana Lira · Cumple 7 años</p><button id="back-top">VOLVER ARRIBA ↑</button></footer>`;

const themeAudio = document.getElementById('theme-audio');
const audioToggle = document.getElementById('audio-toggle');
let musicEnabled = localStorage.getItem('lira-theme-audio') !== 'off';

function syncAudioToggle() {
  const playing = !themeAudio.paused;
  audioToggle.textContent = playing ? '🔊' : '🔇';
  audioToggle.setAttribute('aria-pressed', String(playing));
  audioToggle.setAttribute('aria-label', playing ? 'Silenciar música' : 'Activar música');
  audioToggle.title = playing ? 'Silenciar música' : 'Activar música';
}

async function playTheme() {
  if (!musicEnabled) return;
  try {
    await themeAudio.play();
  } catch {
    // El navegador pedirá una interacción del visitante antes de reproducir sonido.
  }
  syncAudioToggle();
}

audioToggle.addEventListener('click', () => {
  musicEnabled = themeAudio.paused;
  localStorage.setItem('lira-theme-audio', musicEnabled ? 'on' : 'off');
  if (musicEnabled) playTheme();
  else themeAudio.pause();
  syncAudioToggle();
});
themeAudio.addEventListener('play', syncAudioToggle);
themeAudio.addEventListener('pause', syncAudioToggle);
document.addEventListener('pointerdown', () => playTheme(), { once: true });
syncAudioToggle();
playTheme();

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

const fpsCanvas = document.getElementById('fps-canvas');
const fpsCtx = fpsCanvas.getContext('2d');
const fpsShell = document.querySelector('.fps-shell');
const fpsOverlay = document.getElementById('fps-overlay');
const fpsStatus = document.getElementById('fps-status');
const fpsDistance = document.getElementById('fps-distance');
const islandMap = [
  '################',
  '#...l......b...#',
  '#..o.....x.....#',
  '#......p.......#',
  '#.....##.......#',
  '#..x..##..l....#',
  '#..............#',
  '#......p.i.o...#',
  '#..............#',
  '#...l..........#',
  '#........##....#',
  '#..o.....##....#',
  '#..........x...#',
  '#.......C......#',
  '#...p..........#',
  '################'
];
const spriteMeta = {
  b: { src: '/src/assets/port/boat.png', scale: 1.65, label: 'barco' },
  C: { src: '/src/assets/port/chest.png', scale: .78, label: 'cofre' },
  l: { src: '/src/assets/port/lamp.png', scale: .86, label: 'farol' },
  i: { src: '/src/assets/port/pillar.png', scale: 1.08, label: 'pilar' },
  o: { src: '/src/assets/port/barrel.png', scale: .82, label: 'barril' },
  p: { src: '/src/assets/port/platform.png', scale: .94, label: 'plataforma' },
  x: { src: '/src/assets/port/box.png', scale: .82, label: 'caja' }
};
const fpsImages = Object.fromEntries(Object.entries(spriteMeta).map(([key, meta]) => {
  const image = new Image();
  image.src = meta.src;
  return [key, image];
}));
const fpsSprites = islandMap.flatMap((row, y) => [...row].flatMap((cell, x) => spriteMeta[cell] ? [{ type: cell, x: x + .5, y: y + .5 }] : []));
const fpsKeys = new Set();
const playerStart = { x: 2.4, y: 13.2, angle: -0.72 };
let player = { ...playerStart };
let fpsWon = false;
let showingMap = false;
let lastFrame = performance.now();
let fpsDepth = [];
const treasureSpot = fpsSprites.find(sprite => sprite.type === 'C');

function fpsCell(x, y) {
  const row = islandMap[Math.floor(y)];
  return row ? row[Math.floor(x)] || '#' : '#';
}

function isBlocked(x, y) {
  const cell = fpsCell(x, y);
  return cell === '#' || cell === 'b' || cell === 'i' || cell === 'o' || cell === 'x';
}

function resetFps() {
  player = { ...playerStart };
  fpsWon = false;
  showingMap = false;
  fpsKeys.clear();
  fpsStatus.textContent = 'Busca el cofre escondido';
  fpsOverlay.querySelector('b').textContent = 'Entrar en la cala';
  fpsOverlay.querySelector('span').textContent = 'Clic para explorar';
  fpsOverlay.classList.remove('hidden');
  document.exitPointerLock?.();
}

function moveFps(dt) {
  const speed = fpsKeys.has('shift') ? 4.4 : 2.8;
  let forward = 0, side = 0;
  if (fpsKeys.has('e')) forward += 1;
  if (fpsKeys.has('d')) forward -= 1;
  if (fpsKeys.has('f')) side += 1;
  if (fpsKeys.has('s')) side -= 1;
  const len = Math.hypot(forward, side) || 1;
  const step = speed * dt;
  const nextX = player.x + (Math.cos(player.angle) * forward / len + Math.cos(player.angle + Math.PI / 2) * side / len) * step;
  const nextY = player.y + (Math.sin(player.angle) * forward / len + Math.sin(player.angle + Math.PI / 2) * side / len) * step;
  if (!isBlocked(nextX, player.y)) player.x = nextX;
  if (!isBlocked(player.x, nextY)) player.y = nextY;
}

function drawFpsBackground(w, h) {
  const sky = fpsCtx.createLinearGradient(0, 0, 0, h * .55);
  sky.addColorStop(0, '#64cbd2');
  sky.addColorStop(1, '#d5f0df');
  fpsCtx.fillStyle = sky;
  fpsCtx.fillRect(0, 0, w, h * .55);
  fpsCtx.fillStyle = '#ffd35c';
  fpsCtx.beginPath();
  fpsCtx.arc(w * .78, h * .18, 34, 0, Math.PI * 2);
  fpsCtx.fill();
  const sand = fpsCtx.createLinearGradient(0, h * .55, 0, h);
  sand.addColorStop(0, '#e8c56e');
  sand.addColorStop(1, '#9c7942');
  fpsCtx.fillStyle = sand;
  fpsCtx.fillRect(0, h * .55, w, h * .45);
}

function castRay(rayAngle) {
  let distance = 0;
  let hit = '.';
  const step = .035;
  while (distance < 16) {
    distance += step;
    const x = player.x + Math.cos(rayAngle) * distance;
    const y = player.y + Math.sin(rayAngle) * distance;
    hit = fpsCell(x, y);
    if (hit === '#') break;
  }
  return { distance, hit };
}

function wallColor(shade) {
  const [r, g, b] = [88, 72, 47];
  return `rgb(${Math.max(0, r - shade)}, ${Math.max(0, g - shade)}, ${Math.max(0, b - shade)})`;
}

function drawFpsView() {
  const w = fpsCanvas.width;
  const h = fpsCanvas.height;
  drawFpsBackground(w, h);
  const fov = Math.PI / 3;
  fpsDepth = new Array(w).fill(16);
  for (let x = 0; x < w; x += 2) {
    const ratio = x / w - .5;
    const angle = player.angle + ratio * fov;
    const ray = castRay(angle);
    const corrected = ray.distance * Math.cos(angle - player.angle);
    const wallHeight = Math.min(h, h / Math.max(corrected, .12));
    const top = (h - wallHeight) / 2;
    const shade = Math.min(95, corrected * 9);
    fpsDepth[x] = corrected;
    fpsDepth[x + 1] = corrected;
    fpsCtx.fillStyle = wallColor(shade);
    fpsCtx.fillRect(x, top, 2, wallHeight);
  }
  fpsCtx.fillStyle = 'rgba(255, 255, 255, .82)';
  fpsCtx.fillRect(w / 2 - 13, h / 2, 26, 2);
  fpsCtx.fillRect(w / 2, h / 2 - 13, 2, 26);
}

function normaliseAngle(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

function getSpriteRaster(image) {
  if (image.raster) return image.raster;
  const source = document.createElement('canvas');
  source.width = image.naturalWidth;
  source.height = image.naturalHeight;
  const sourceCtx = source.getContext('2d', { willReadFrequently: true });
  sourceCtx.drawImage(image, 0, 0);
  const pixels = sourceCtx.getImageData(0, 0, source.width, source.height);
  const cornerIndexes = [0, source.width - 1, (source.height - 1) * source.width, source.width * source.height - 1];
  const backdrop = [0, 1, 2].map(channel => Math.round(cornerIndexes.reduce((sum, index) => sum + pixels.data[index * 4 + channel], 0) / cornerIndexes.length));
  let left = source.width, top = source.height, right = 0, bottom = 0;

  for (let y = 0; y < source.height; y += 1) {
    for (let x = 0; x < source.width; x += 1) {
      const offset = (y * source.width + x) * 4;
      const distance = Math.hypot(
        pixels.data[offset] - backdrop[0],
        pixels.data[offset + 1] - backdrop[1],
        pixels.data[offset + 2] - backdrop[2]
      );
      if (distance < 28) pixels.data[offset + 3] = Math.round(pixels.data[offset + 3] * distance / 28);
      if (pixels.data[offset + 3] > 28) {
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
  }

  sourceCtx.putImageData(pixels, 0, 0);
  const padding = 2;
  const cropLeft = Math.max(0, left - padding);
  const cropTop = Math.max(0, top - padding);
  const cropRight = Math.min(source.width - 1, right + padding);
  const cropBottom = Math.min(source.height - 1, bottom + padding);
  const width = Math.max(1, cropRight - cropLeft + 1);
  const height = Math.max(1, cropBottom - cropTop + 1);
  const raster = document.createElement('canvas');
  raster.width = width;
  raster.height = height;
  raster.getContext('2d').drawImage(source, cropLeft, cropTop, width, height, 0, 0, width, height);
  image.raster = raster;
  return raster;
}

function drawFpsSprites() {
  const w = fpsCanvas.width;
  const h = fpsCanvas.height;
  const fov = Math.PI / 3;
  const visibleSprites = fpsSprites
    .map(sprite => ({ ...sprite, distance: Math.hypot(sprite.x - player.x, sprite.y - player.y) }))
    .filter(sprite => sprite.distance > .2)
    .sort((a, b) => b.distance - a.distance);

  visibleSprites.forEach(sprite => {
    const image = fpsImages[sprite.type];
    const meta = spriteMeta[sprite.type];
    if (!image?.complete || !image.naturalWidth) return;
    const raster = getSpriteRaster(image);
    const angle = normaliseAngle(Math.atan2(sprite.y - player.y, sprite.x - player.x) - player.angle);
    if (Math.abs(angle) > fov * .7) return;
    const centerX = (angle / fov + .5) * w;
    const spriteHeight = Math.min(h * 1.35, h * meta.scale / sprite.distance);
    const spriteWidth = spriteHeight * (raster.width / raster.height);
    const left = centerX - spriteWidth / 2;
    const groundY = h * .55 + h * .24 / Math.max(sprite.distance, .8);
    const top = groundY - spriteHeight;
    const sampleX = Math.max(0, Math.min(w - 1, Math.floor(centerX)));
    if (sprite.distance > fpsDepth[sampleX] + .3) return;
    fpsCtx.globalAlpha = Math.max(.35, 1 - sprite.distance / 18);
    fpsCtx.drawImage(raster, left, top, spriteWidth, spriteHeight);
    fpsCtx.globalAlpha = 1;
  });
}

function drawFpsMap() {
  const size = 176;
  const pad = 18;
  const cell = size / islandMap.length;
  fpsCtx.save();
  fpsCtx.globalAlpha = .96;
  fpsCtx.fillStyle = '#f3dfb0';
  fpsCtx.fillRect(pad, pad, size, size);
  islandMap.forEach((row, y) => [...row].forEach((cellValue, x) => {
    if (cellValue === '.') return;
    fpsCtx.fillStyle = cellValue === 'C' ? '#d95f37' : cellValue === 'l' ? '#f2b735' : cellValue === 'i' ? '#ddd0b4' : cellValue === 'p' ? '#a67e43' : cellValue === 'b' ? '#0a6871' : cellValue === 'o' || cellValue === 'x' ? '#8f462d' : '#59482f';
    fpsCtx.fillRect(pad + x * cell, pad + y * cell, cell - 1, cell - 1);
  }));
  fpsCtx.fillStyle = '#063747';
  fpsCtx.beginPath();
  fpsCtx.arc(pad + player.x * cell, pad + player.y * cell, 4, 0, Math.PI * 2);
  fpsCtx.fill();
  fpsCtx.strokeStyle = '#063747';
  fpsCtx.lineWidth = 2;
  fpsCtx.beginPath();
  fpsCtx.moveTo(pad + player.x * cell, pad + player.y * cell);
  fpsCtx.lineTo(pad + (player.x + Math.cos(player.angle) * .9) * cell, pad + (player.y + Math.sin(player.angle) * .9) * cell);
  fpsCtx.stroke();
  fpsCtx.restore();
}

function updateFpsHud() {
  const distance = Math.hypot(player.x - treasureSpot.x, player.y - treasureSpot.y);
  if (!fpsWon && distance < .72) {
    fpsWon = true;
    fpsStatus.textContent = '¡Tesoro encontrado!';
    fpsOverlay.querySelector('b').textContent = '¡Botín conseguido!';
    fpsOverlay.querySelector('span').textContent = 'Pulsa volver al muelle para repetir';
    fpsOverlay.classList.remove('hidden');
    document.exitPointerLock?.();
  }
  fpsDistance.textContent = fpsWon ? 'La capitana ya tiene su cofre.' : `El cofre está a ${distance.toFixed(1)} pasos.`;
}

function tickFps(now) {
  const dt = Math.min(.05, (now - lastFrame) / 1000);
  lastFrame = now;
  if (document.pointerLockElement === fpsCanvas && !fpsWon) moveFps(dt);
  drawFpsView();
  drawFpsSprites();
  if (showingMap || fpsWon) drawFpsMap();
  updateFpsHud();
  requestAnimationFrame(tickFps);
}

function enterFps() {
  if (!fpsWon) {
    fpsCanvas.requestPointerLock?.();
    fpsCanvas.focus();
  }
}

fpsShell.addEventListener('click', enterFps);
fpsCanvas.addEventListener('click', enterFps);
fpsOverlay.addEventListener('click', enterFps);
document.addEventListener('pointerlockchange', () => fpsOverlay.classList.toggle('hidden', document.pointerLockElement === fpsCanvas && !fpsWon));
document.addEventListener('mousemove', event => {
  if (document.pointerLockElement === fpsCanvas && !fpsWon) player.angle += event.movementX * .0026;
});
document.addEventListener('keydown', event => {
  const key = event.key.toLowerCase();
  if (['e', 's', 'd', 'f', 'shift'].includes(key)) fpsKeys.add(key);
  if (event.code === 'Space') {
    showingMap = true;
    if (document.pointerLockElement === fpsCanvas) event.preventDefault();
  }
});
document.addEventListener('keyup', event => {
  const key = event.key.toLowerCase();
  fpsKeys.delete(key);
  if (event.code === 'Space') showingMap = false;
});
document.getElementById('fps-reset').addEventListener('click', resetFps);
requestAnimationFrame(tickFps);

document.getElementById('rsvp-form').addEventListener('submit', event => { event.preventDefault(); const name = document.getElementById('guest-name').value.trim(); const answer = document.getElementById('guest-answer').value; localStorage.setItem('lira-rsvp', JSON.stringify({ name, answer })); document.getElementById('rsvp-slot').innerHTML = `<div class="success" role="status"><b>¡Embarque confirmado, ${name.replace(/[<>]/g, '')}! ⚓</b><span>Tu respuesta ha quedado guardada en este dispositivo.</span><button id="change-rsvp">Cambiar respuesta</button></div>`; document.getElementById('change-rsvp').addEventListener('click', () => window.location.reload()); });
document.getElementById('back-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
