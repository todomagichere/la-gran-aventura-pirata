
const root = document.getElementById('root');

root.innerHTML = `
  <audio id="theme-audio" src="./src/assets/monkey_island_main_theme.m4a" loop preload="metadata" playsinline></audio>
  <section class="welcome-curtain" id="welcome-curtain" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
    <div class="welcome-curtain__panel welcome-curtain__panel--left" aria-hidden="true"></div>
    <div class="welcome-curtain__panel welcome-curtain__panel--right" aria-hidden="true"></div>
    <div class="welcome-curtain__message"><span aria-hidden="true">☠</span><p>ATENCIÓN</p><h1 id="welcome-title">MENSAJE PARA<br>LA TRIPULACIÓN</h1><button id="welcome-continue" type="button">HAZ CLIC PARA CONTINUAR <b aria-hidden="true">→</b></button></div>
  </section>
  <button class="audio-toggle" id="audio-toggle" type="button" aria-label="Activar música" aria-pressed="false" title="Activar música">🔇</button>
  <header><a class="brand" href="#inicio"><div>LA GRAN AVENTURA <b>PIRATA</b></div></a><button class="nav-toggle" type="button" aria-label="Abrir menú" aria-controls="site-nav" aria-expanded="false"><span></span><span></span><span></span></button><nav id="site-nav"><a href="#aventura">Bitácora</a><a href="#mapa">Mapa del botín</a><a href="#juegos">Juegos de cubierta</a><a href="#confirmar" class="nav-cta">¡AL ABORDAJE!</a></nav></header>
  <main>
    <section class="hero" id="inicio"><div class="hero-copy"><h1>LA GRAN AVENTURA <em>PIRATA</em></h1></div>
      <div class="scene"><img src="./src/assets/mapa_del_tesoro.webp" alt="Mapa del tesoro de la Capitana Lira." /></div><div class="hero-details"><p class="intro">La Capitana Lira busca una tripulación valiente para celebrar su cumpleaños. ¿Te apuntas a la aventura?</p><div class="date-row"><div><span>OCT</span><b>24</b></div><p><strong>SÁBADO · 11:00 H</strong><br>En la Isla del Tesoro</p></div><a class="gold-btn hero-btn" href="#confirmar">¡QUIERO EMBARCAR! <span>→</span></a></div>
    </section>
    <section class="countdown map-section" aria-labelledby="countdown-title"><div class="countdown__card map-card"><h2 id="countdown-title">FALTAN...</h2><div class="countdown__units" role="timer" aria-live="polite" aria-atomic="true"><div><b id="countdown-days">00</b><span>DÍAS</span></div><div><b id="countdown-hours">00</b><span>HORAS</span></div><div><b id="countdown-minutes">00</b><span>MINUTOS</span></div><div><b id="countdown-seconds">00</b><span>SEGUNDOS</span></div></div><p class="countdown__status" id="countdown-status">Hasta el 24 de octubre de 2026 · 11:00 h</p></div></section>
    <section class="adventure" id="aventura"><p class="eyebrow">PREPARA TU CATALEJO</p><h2>Una aventura de las que hacen historia</h2><p class="section-intro">Juegos, tesoros escondidos, comida y muchas sorpresas esperan a toda la tripulación.</p><div class="features"><article><span>🗺️</span><div><b>MAPA DEL TESORO</b><p>Sigue las pistas y encuentra el botín secreto de la Capitana.</p></div></article><article><span>🥥</span><div><b>COMIDA PIRATA</b><p>Provisiones deliciosas para recuperar fuerzas.</p></div></article><article><span>🎁</span><div><b>BOTÍN SORPRESA</b><p>Cada grumete se llevará un recuerdo de la isla.</p></div></article></div></section>
    <section class="map-section" id="mapa"><div class="map-card"><span class="compass">✥</span><div class="route"><img data-src="./src/assets/ruta-isla.webp" alt="Isla del tesoro" loading="lazy" decoding="async"></div><p>EL LUGAR SECRETO</p><h2>L’Olivera Casa Rural</h2><p>Carrer Casetes de Ca n’Olivero, 7<br>08755 Castellbisbal, Barcelona</p><div class="map-embed"><iframe title="Mapa de L’Olivera Casa Rural y Terrassa" src="https://maps.google.com/maps?hl=es&ll=41.570%2C2.000&q=L%27Olivera%20Casa%20Rural%2C%20Carrer%20Casetes%20de%20Ca%20n%27Olivero%207%2C%2008755%20Castellbisbal%2C%20Barcelona&z=12&iwloc=B&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div><a class="gold-btn gps-link" href="https://www.google.com/maps/dir/?api=1&destination=L%27Olivera%20Casa%20Rural%2C%20Carrer%20Casetes%20de%20Ca%20n%27Olivero%207%2C%2008755%20Castellbisbal%2C%20Barcelona" target="_blank" rel="noopener">NAVEGAR CON BRÚJULA</a></div></section>
    <section class="games" id="juegos"><p class="eyebrow">ENTRENA COMO UN PIRATA</p><h2>La academia de grumetes</h2><p class="section-intro">Retos cortos para toda la tripulación. ¡Consigue monedas pirata!</p><div class="games-progress" aria-live="polite"><span aria-hidden="true">🪙</span><div><b id="coin-total">0</b> monedas pirata</div><small id="progress-message">Completa un juego para ganar tu primera moneda.</small></div><div class="game-layout">
      <article class="game-card mini-game" data-game="treasure"><div class="game-title"><span class="game-icon">🗺️</span><div><p>CAZA DEL TESORO</p><h3>Objetos perdidos</h3></div></div><p class="hint">Encuentra los 5 objetos pirata antes de que se agote el reloj.</p><button class="game-start" data-start="treasure">JUGAR</button><div class="treasure-scene" id="treasure-scene" hidden aria-label="Isla para buscar tesoros"></div><div class="game-footer"><small id="treasure-status">5 objetos · 60 segundos</small><button class="game-replay" data-replay="treasure" hidden>Jugar otra vez ↻</button></div></article>
      <article class="game-card mini-game" data-game="coins"><div class="game-title"><span class="game-icon">💰</span><div><p>ATRAPA MONEDAS</p><h3>El cofre veloz</h3></div></div><p class="hint">Mueve el cofre con el ratón, el dedo o las flechas. Atrapa oro y evita las botas.</p><button class="game-start" data-start="coins">JUGAR</button><div class="coin-field" id="coin-field" hidden tabindex="0" aria-label="Atrapa las monedas con las flechas izquierda y derecha"></div><div class="game-footer"><small id="coins-status">45 segundos · 0 monedas</small><button class="game-replay" data-replay="coins" hidden>Jugar otra vez ↻</button></div></article>
      <article class="game-card mini-game memory-game" data-game="memory"><div class="game-title"><span class="game-icon">🧭</span><div><p>MEMORIA PIRATA</p><h3>Parejas del océano</h3></div></div><p class="hint">Da la vuelta a dos cartas y encuentra las 8 parejas.</p><button class="game-start" data-start="memory">JUGAR</button><div class="memory" id="memory" hidden></div><div class="game-footer"><small id="memory-status">8 parejas por encontrar</small><button class="game-replay" data-replay="memory" hidden>Jugar otra vez ↻</button></div></article>
      <article class="game-card mini-game parrot-game" data-game="parrot"><div class="game-title"><span class="game-icon">🦜</span><div><p>SIGUE AL LORO</p><h3>El eco de la isla</h3></div></div><p class="hint">Mira la secuencia que canta el loro y repítela en el mismo orden.</p><button class="game-start" data-start="parrot">JUGAR</button><div class="parrot-board" id="parrot-board" hidden aria-label="Secuencia del loro"><button class="parrot-pad parrot-pad--sun" type="button" data-parrot-note="0" aria-label="Loro amarillo"><i class="real-icon real-icon--parrot" aria-hidden="true"></i></button><button class="parrot-pad parrot-pad--sea" type="button" data-parrot-note="1" aria-label="Loro azul"><i class="real-icon real-icon--parrot" aria-hidden="true"></i></button><button class="parrot-pad parrot-pad--leaf" type="button" data-parrot-note="2" aria-label="Loro verde"><i class="real-icon real-icon--parrot" aria-hidden="true"></i></button><button class="parrot-pad parrot-pad--coral" type="button" data-parrot-note="3" aria-label="Loro coral"><i class="real-icon real-icon--parrot" aria-hidden="true"></i></button></div><div class="game-footer"><small id="parrot-status">Repite 5 llamadas del loro</small><button class="game-replay" data-replay="parrot" hidden>Jugar otra vez ↻</button></div></article>
    </div></section>
    <section class="rsvp" id="confirmar"><div class="bottle" aria-hidden="true">🍾</div><div><p class="eyebrow light">CONFIRMA TU EMBARQUE</p><h2>¿Te unes a la tripulación?</h2><p>La capitana necesita saber cuántos grumetes subirán a bordo.</p></div><div id="rsvp-slot"><form id="rsvp-form"><label>Nombre del grumete<input id="guest-name" placeholder="Escribe tu nombre" required></label><label>¿Vendrás a la fiesta?<select id="guest-answer"><option value="asistirá a la fiesta">¡Sí, allí estaré!</option><option value="no asistirá a la fiesta">No podré embarcar</option><option value="aún no sabe si asistirá a la fiesta">Aún no lo sé</option></select></label><button class="gold-btn" type="submit">CONFIRMAR POR WHATSAPP <span>→</span></button></form></div></section>
  </main>
  <div class="guybrush-easter-egg" id="guybrush-easter-egg" aria-hidden="true"><img data-easter-src="./src/assets/guybrush.webp" alt=""></div>
  <footer><a class="brand" href="#inicio"><div>LA GRAN AVENTURA <b>PIRATA</b></div></a><p>Hecho con mucho cariño para la Capitana Lira · Cumple 7 años</p><button id="back-top" type="button" aria-label="Volver arriba" title="Volver arriba"><span aria-hidden="true">➤</span></button><div id="footer-water" aria-hidden="true"><svg width="100%" height="60" viewBox="0 0 100 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path id="footer-wave-back" d="M0 18 Q25 7 50 18 T100 18 V60 H0 Z"></path><path id="footer-wave" d="M0 38 Q25 29 50 38 T100 38 V60 H0 Z"></path></svg><div class="footer-ship"><img src="./src/assets/barco-pirata-footer.webp" alt="" loading="lazy" decoding="async"></div></div></footer>`;

const deferredImages = document.querySelectorAll('img[data-src]');
const loadDeferredImage = image => {
  image.src = image.dataset.src;
  image.removeAttribute('data-src');
};

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      loadDeferredImage(entry.target);
      imageObserver.unobserve(entry.target);
    });
  });
  deferredImages.forEach(image => imageObserver.observe(image));
} else {
  deferredImages.forEach(loadDeferredImage);
}

const realEmojiIcons = {
  '☠': 'skull', '🗺️': 'map', '🥥': 'coconut', '🎁': 'gift', '✥': 'compass',
  '🪙': 'coin', '💰': 'coin', '🧭': 'compass', '🧩': 'puzzle', '🦜': 'parrot',
  '🚢': 'boat', '🎯': 'target', '🧹': 'broom', '🔎': 'spyglass', '✕': 'route',
  '🍾': 'bottle', '🔇': 'audio-off', '🔊': 'audio-on', '💎': 'gem', '⚓': 'anchor'
};
const realEmojiPattern = new RegExp(Object.keys(realEmojiIcons).map(emoji => emoji.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
function replaceEmojisWithRealImages(container = root) {
  const textNodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => {
    if (!realEmojiPattern.test(node.nodeValue)) return;
    realEmojiPattern.lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    node.nodeValue.replace(realEmojiPattern, (emoji, index) => {
      fragment.append(node.nodeValue.slice(lastIndex, index));
      const icon = document.createElement('i');
      icon.className = `real-icon real-icon--${realEmojiIcons[emoji]}`;
      icon.setAttribute('aria-hidden', 'true');
      fragment.append(icon);
      lastIndex = index + emoji.length;
    });
    fragment.append(node.nodeValue.slice(lastIndex));
    node.replaceWith(fragment);
  });
}
replaceEmojisWithRealImages();

function startFooterWaves() {
  const wave = document.getElementById('footer-wave');
  const backWave = document.getElementById('footer-wave-back');
  if (!wave || !backWave || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.wavify) return;
  window.wavify(backWave, {
    container: '#footer-water',
    height: 18,
    bones: 5,
    amplitude: 10,
    color: 'rgba(44, 191, 210, .88)',
    speed: .3
  });
  window.wavify(wave, {
    container: '#footer-water',
    height: 38,
    bones: 4,
    amplitude: 8,
    color: 'rgba(177, 246, 247, .92)',
    speed: .42
  });
}
window.addEventListener('load', startFooterWaves, { once: true });


console.log(String.raw`
                 __..-----')
       ,.--._ .-'_..--...-'
      '-"'. _/_ /  ..--''""'-.
      _.--""...:._:(_ ..:"::. \
   .-' ..::--""_(##)#)"':. \ \)    \ _|_ /
  /_:-:'/  :__(##)##)    ): )   '-./'   '\.-'
  "  / |  :' :/""\///)  /:.'    --(       )--
    / :( :( :(   (#//)  "       .-'\.___./'-.
   / :/|\ :\_:\   \#//\            /  |  \
   |:/ | ""--':\   (#//)              '
   \/  \ :|  \ :\  (#//)
        \:\   '.':. \#//\
         ':|    "--'(#///)
                    (#///)
                    (#///)         ___/""\
                     \#///\           oo##
                     (##///)         \`-6 #
                     (##///)          ,.'
                     (##///)         // .\
                     (##///)        ||o   \\
                      \##///\        \-+--//
                      (###///)       :_|_(/
                      (sjw////)__...--:: :...__
                      (#/::'''        :: :     ""--.._
                 __..-'''           __;: :            "-._
         __..--""                  \`---/ ;                '._
___..--""                             \`-'                    "-..___
  (_ ""---....___                                     __...--"" _)
    """--...  ___"""""-----......._______......----"""     --"""
                  """"       ---.....   ___....----
`);

console.log('%cNo habrás perdido una botella de ron por aquí, verdad?', 'color: #f2b735; font-size: 14px; font-weight: bold;');

const themeAudio = document.getElementById('theme-audio');
const audioToggle = document.getElementById('audio-toggle');
const siteHeader = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
const welcomeCurtain = document.getElementById('welcome-curtain');
const welcomeContinue = document.getElementById('welcome-continue');
const welcomeSeenKey = 'lira-welcome-seen';
const welcomeWasSeen = localStorage.getItem(welcomeSeenKey) === 'yes';
let musicEnabled = false;
let themeHasPlayed = false;
themeAudio.volume = 0.25;
if (welcomeWasSeen) {
  welcomeCurtain.remove();
  localStorage.setItem('lira-theme-audio', 'off');
} else {
  document.body.classList.add('intro-active');
}

function syncAudioToggle() {
  const playing = !themeAudio.paused;
  audioToggle.innerHTML = `<i class="real-icon real-icon--${playing ? 'audio-on' : 'audio-off'}" aria-hidden="true"></i>`;
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
themeAudio.addEventListener('play', () => {
  themeHasPlayed = true;
  syncAudioToggle();
});
themeAudio.addEventListener('pause', syncAudioToggle);
themeAudio.addEventListener('canplay', playTheme, { once: true });
window.addEventListener('load', playTheme, { once: true });
['pointerdown', 'touchstart', 'keydown'].forEach(eventName => {
  document.addEventListener(eventName, () => playTheme(), { once: true, passive: eventName !== 'keydown' });
});
window.addEventListener('scroll', () => {
  if (!themeHasPlayed) playTheme();
}, { passive: true });
welcomeContinue.addEventListener('click', () => {
  welcomeCurtain.classList.add('is-opening');
  document.body.classList.remove('intro-active');
  localStorage.setItem(welcomeSeenKey, 'yes');
  musicEnabled = true;
  localStorage.setItem('lira-theme-audio', 'on');
  playTheme();
  setTimeout(() => welcomeCurtain.remove(), 1900);
});
syncAudioToggle();
playTheme();
if (!welcomeWasSeen) welcomeContinue.focus();

if ('IntersectionObserver' in window && siteHeader) {
  const headerVisibility = new IntersectionObserver(([entry]) => {
    audioToggle.classList.toggle('is-header-visible', entry.isIntersecting && entry.intersectionRatio >= .1);
  }, { threshold: [.1] });
  headerVisibility.observe(siteHeader);
} else {
  audioToggle.classList.add('is-header-visible');
}

function setMenuOpen(isOpen) {
  siteHeader.classList.toggle('is-nav-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
}

navToggle.addEventListener('click', () => setMenuOpen(!siteHeader.classList.contains('is-nav-open')));
siteNav.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') setMenuOpen(false);
});
document.addEventListener('pointerdown', event => {
  if (siteHeader.classList.contains('is-nav-open') && !siteHeader.contains(event.target)) setMenuOpen(false);
});

const countdownTarget = new Date('2026-10-24T11:00:00+02:00').getTime();
let countdownTimer;
const countdownValues = {
  days: document.getElementById('countdown-days'),
  hours: document.getElementById('countdown-hours'),
  minutes: document.getElementById('countdown-minutes'),
  seconds: document.getElementById('countdown-seconds')
};
const countdownStatus = document.getElementById('countdown-status');

function updateCountdown() {
  let secondsLeft = Math.max(0, Math.floor((countdownTarget - Date.now()) / 1000));
  const days = Math.floor(secondsLeft / 86400);
  secondsLeft %= 86400;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft %= 3600;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const values = { days, hours, minutes, seconds };

  Object.entries(values).forEach(([unit, value]) => {
    countdownValues[unit].textContent = String(value).padStart(2, '0');
  });

  if (countdownTarget <= Date.now()) {
    countdownStatus.textContent = '¡LA GRAN AVENTURA PIRATA HA COMENZADO!';
    if (countdownTimer) window.clearInterval(countdownTimer);
  }
}

updateCountdown();
countdownTimer = window.setInterval(updateCountdown, 1000);

const progressKey = 'lira-mini-game-progress';
const progress = JSON.parse(localStorage.getItem(progressKey) || '{}');
const shuffle = list => [...list].sort(() => Math.random() - 0.5);
const gameCards = Object.fromEntries([...document.querySelectorAll('.mini-game')].map(card => [card.dataset.game, card]));

function updateProgress() {
  const total = Object.keys(progress).length;
  document.getElementById('coin-total').textContent = total;
  document.getElementById('progress-message').textContent = total === 0 ? 'Completa un juego para ganar tu primera moneda.' : total >= 3 ? '¡Buen trabajo, grumete! Has reunido un gran botín.' : '¡Buen trabajo, grumete! Sigue reuniendo monedas.';
}

function winGame(game, message) {
  if (!progress[game]) {
    progress[game] = true;
    localStorage.setItem(progressKey, JSON.stringify(progress));
  }
  updateProgress();
  gameCards[game].querySelector('.game-replay').hidden = false;
  gameCards[game].querySelector('.game-start').hidden = true;
  gameCards[game].querySelector('.game-footer small').textContent = `${message} · Moneda conseguida`;
}

let activeStage;
function openGameStage(game) {
  if (activeStage) return;
  const card = gameCards[game];
  const marker = document.createComment(`mini-game-${game}`);
  card.parentNode.insertBefore(marker, card);
  const stage = document.createElement('section');
  stage.className = 'game-stage';
  stage.setAttribute('role', 'dialog');
  stage.setAttribute('aria-modal', 'true');
  stage.setAttribute('aria-label', `Jugando a ${card.querySelector('h3').textContent}`);
  stage.innerHTML = `<div class="game-stage__curtain game-stage__curtain--left"></div><div class="game-stage__curtain game-stage__curtain--right"></div><div class="game-stage__content"><button class="stage-close" type="button" aria-label="Volver a minijuegos">← VOLVER A MINIJUEGOS</button><div class="game-stage__slot"></div></div>`;
  document.body.append(stage);
  stage.querySelector('.game-stage__slot').append(card);
  const closeStage = () => {
    if (!activeStage) return;
    stage.classList.add('is-closing');
    setTimeout(() => {
      clearInterval(treasureTimer);
      clearCoinRound();
      clearParrotRound();
      card.querySelector('.game-start').hidden = false;
      card.querySelector('.game-replay').hidden = true;
      card.querySelectorAll('.treasure-scene, .coin-field, .memory, .parrot-board, .treasure-targets').forEach(element => {
        element.hidden = true;
        if (element.classList.contains('coin-field')) element.innerHTML = '';
      });
      if (marker.parentNode) marker.replaceWith(card);
      stage.remove();
      activeStage = undefined;
    }, 280);
  };
  stage.querySelector('.stage-close').addEventListener('click', closeStage);
  stage.addEventListener('keydown', event => { if (event.key === 'Escape') closeStage(); });
  activeStage = { stage, closeStage };
  requestAnimationFrame(() => stage.classList.add('is-open'));
}

function beginGame(game) {
  openGameStage(game);
  const card = gameCards[game];
  card.querySelector('.game-start').hidden = true;
  card.querySelector('.game-replay').hidden = true;
  if (game === 'treasure') startTreasure();
  if (game === 'coins') startCoinCatch();
  if (game === 'memory') startMemory();
  if (game === 'parrot') startParrot();
}

document.addEventListener('click', event => {
  const start = event.target.closest('[data-start]');
  const replay = event.target.closest('[data-replay]');
  if (start) beginGame(start.dataset.start);
  if (replay) beginGame(replay.dataset.replay);
});

// Caza del tesoro: encuentra cinco objetos escondidos en una isla en menos de un minuto.
let treasureTimer;
function startTreasure() {
  clearInterval(treasureTimer);
  const scene = document.getElementById('treasure-scene');
  const status = document.getElementById('treasure-status');
  const treasures = [
    { icon: 'gem', name: 'Gema azul' },
    { icon: 'compass', name: 'Brújula' },
    { icon: 'map', name: 'Mapa' },
    { icon: 'coin', name: 'Moneda' },
    { icon: 'parrot', name: 'Loro' }
  ];
  const distractions = [
    'coconut', 'gift', 'puzzle', 'target', 'broom', 'audio-off', 'bottle', 'skull',
    'route', 'coconut', 'gift', 'puzzle', 'target', 'broom', 'audio-on', 'bottle'
  ];
  const sceneItems = [
    ...treasures.map(item => ({ ...item, isTreasure: true })),
    ...distractions.map(icon => ({ icon, isTreasure: false }))
  ];
  let found = 0;
  let seconds = 60;
  let targetList = scene.parentElement.querySelector('.treasure-targets');
  if (!targetList) {
    targetList = document.createElement('div');
    targetList.className = 'treasure-targets';
    scene.before(targetList);
  }
  targetList.innerHTML = treasures.map(item => `<span><i class="real-icon real-icon--${item.icon}" aria-hidden="true"></i>${item.name}</span>`).join('');
  targetList.hidden = false;
  scene.hidden = false;
  scene.innerHTML = sceneItems.map((item, index) => `<button class="hidden-treasure${item.isTreasure ? '' : ' is-distraction'}" data-treasure="${item.isTreasure}" data-item="${index}" style="--x:${6 + Math.random() * 88}%;--y:${8 + Math.random() * 80}%" aria-label="${item.isTreasure ? `Tesoro: ${item.name}` : 'Objeto que no es un tesoro'}"><i class="real-icon real-icon--${item.icon}" aria-hidden="true"></i></button>`).join('');
  status.textContent = `0 de 5 objetos · ${seconds} s`;
  scene.onclick = event => {
    const item = event.target.closest('[data-item]');
    if (!item || item.classList.contains('found')) return;
    if (item.dataset.treasure === 'false') {
      item.classList.add('found', 'mistake');
      seconds = Math.max(0, seconds - 3);
      status.textContent = `Eso no es un tesoro · ${found} de 5 · ${seconds} s`;
      return;
    }
    item.classList.add('found');
    found += 1;
    if (found === treasures.length) {
      clearInterval(treasureTimer);
      winGame('treasure', '¡Encontraste los 5 objetos!');
    } else status.textContent = `${found} de 5 objetos · ${seconds} s`;
  };
  treasureTimer = setInterval(() => {
    seconds -= 1;
    status.textContent = `${found} de 5 objetos · ${seconds} s`;
    if (seconds <= 0) {
      clearInterval(treasureTimer);
      status.textContent = 'El tiempo se agotó. ¡Prueba de nuevo!';
      gameCards.treasure.querySelector('.game-replay').hidden = false;
    }
  }, 1000);
}

// Atrapa monedas: el cofre se mueve con ratón, tacto o flechas.
let coinTimer, coinSpawner, coinTimeouts = [], coinFrames = new Set(), catcherPosition = 50;
function clearCoinRound() {
  clearInterval(coinTimer); clearInterval(coinSpawner);
  coinTimeouts.forEach(clearTimeout); coinTimeouts = [];
  coinFrames.forEach(cancelAnimationFrame); coinFrames.clear();
}
function moveCatcher(position) {
  catcherPosition = Math.max(6, Math.min(94, position));
  document.getElementById('catcher').style.left = `${catcherPosition}%`;
}

function playCoinSound() {
  if (!musicEnabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const now = context.currentTime;
  [880, 1320].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine'; oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001, now + index * .045);
    gain.gain.exponentialRampToValueAtTime(.12, now + index * .045 + .012);
    gain.gain.exponentialRampToValueAtTime(.0001, now + index * .045 + .18);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now + index * .045); oscillator.stop(now + index * .045 + .2);
  });
}
function startCoinCatch() {
  clearCoinRound();
  const field = document.getElementById('coin-field');
  const status = document.getElementById('coins-status');
  let score = 0;
  let seconds = 45;
  field.hidden = false;
  field.innerHTML = '<span class="catcher" id="catcher" aria-hidden="true"><img src="./src/assets/cofre-pirata-realista.webp" alt=""></span>';
  const catcherImage = field.querySelector('.catcher img');
  moveCatcher(50);
  field.focus({ preventScroll: true });
  const setFromPointer = event => {
    const bounds = field.getBoundingClientRect();
    moveCatcher(((event.clientX - bounds.left) / bounds.width) * 100);
  };
  field.onpointermove = setFromPointer;
  field.onkeydown = event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      moveCatcher(catcherPosition + (event.key === 'ArrowLeft' ? -8 : 8));
    }
  };
  const spawn = () => {
    const isCoin = Math.random() > .28;
    const left = 8 + Math.random() * 84;
    const fallDuration = 1250 + Math.round(Math.random() * 1050);
    const spinDirection = Math.random() < .5 ? -1 : 1;
    const spinAngle = spinDirection * (180 + Math.round(Math.random() * 540));
    const fallDistance = field.clientHeight + 44;
    const drop = document.createElement('span');
    drop.className = `falling-item ${isCoin ? 'is-coin' : 'is-junk'}`;
    drop.innerHTML = `<img src="./src/assets/${isCoin ? 'moneda-pirata-realista.webp' : 'bota-pirata-realista.webp'}" alt="">`;
    drop.style.left = `${left}%`;
    drop.style.setProperty('--fall-duration', `${fallDuration}ms`);
    drop.style.setProperty('--spin-angle', `${spinAngle}deg`);
    drop.style.setProperty('--fall-distance', `${fallDistance}px`);
    field.append(drop);
    let resolved = false;
    let collisionFrame;
    const overlapsCatcher = () => {
      const item = drop.getBoundingClientRect();
      const chest = catcherImage.getBoundingClientRect();
      return item.left < chest.right && item.right > chest.left && item.top < chest.bottom && item.bottom > chest.top;
    };
    const resolveDrop = caught => {
      if (resolved) return;
      resolved = true;
      if (collisionFrame) {
        cancelAnimationFrame(collisionFrame);
        coinFrames.delete(collisionFrame);
      }
      if (caught && isCoin) {
        score += 1;
        drop.classList.add('caught');
        playCoinSound();
        coinTimeouts.push(setTimeout(() => drop.remove(), 260));
      } else {
        if (caught) score = Math.max(0, score - 1);
        drop.remove();
      }
      status.textContent = `${seconds} s · ${score} monedas`;
    };
    const checkCollision = () => {
      coinFrames.delete(collisionFrame);
      if (!drop.isConnected || resolved) return;
      if (overlapsCatcher()) {
        resolveDrop(true);
        return;
      }
      collisionFrame = requestAnimationFrame(checkCollision);
      coinFrames.add(collisionFrame);
    };
    collisionFrame = requestAnimationFrame(checkCollision);
    coinFrames.add(collisionFrame);
    coinTimeouts.push(setTimeout(() => {
      resolveDrop(false);
    }, fallDuration));
  };
  spawn(); coinSpawner = setInterval(spawn, 780);
  coinTimer = setInterval(() => {
    seconds -= 1;
    status.textContent = `${seconds} s · ${score} monedas`;
    if (seconds <= 0) {
      clearCoinRound();
      if (score >= 8) winGame('coins', `¡Atrapaste ${score} monedas!`);
      else {
        status.textContent = `Conseguiste ${score} monedas. Necesitas 8 para ganar.`;
        gameCards.coins.querySelector('.game-replay').hidden = false;
      }
    }
  }, 1000);
}

// Sigue al loro: memoriza y repite una llamada cada vez más larga.
let parrotTimeouts = [];
function clearParrotRound() {
  parrotTimeouts.forEach(clearTimeout);
  parrotTimeouts = [];
}

function playParrotTone(note) {
  if (!musicEnabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = 'triangle';
  oscillator.frequency.value = [392, 494, 587, 698][note];
  gain.gain.setValueAtTime(.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(.075, context.currentTime + .018);
  gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + .28);
  oscillator.connect(gain).connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + .3);
}

function startParrot() {
  clearParrotRound();
  const board = document.getElementById('parrot-board');
  const status = document.getElementById('parrot-status');
  const pads = [...board.querySelectorAll('[data-parrot-note]')];
  const sequence = [];
  let playerStep = 0;
  let locked = true;
  const flash = note => {
    const pad = pads[note];
    pad.classList.add('is-singing');
    playParrotTone(note);
    parrotTimeouts.push(setTimeout(() => pad.classList.remove('is-singing'), 330));
  };
  const playSequence = () => {
    locked = true;
    playerStep = 0;
    sequence.push(Math.floor(Math.random() * pads.length));
    status.textContent = `Escucha ${sequence.length} llamada${sequence.length === 1 ? '' : 's'} del loro…`;
    let delay = 520;
    sequence.forEach(note => {
      parrotTimeouts.push(setTimeout(() => flash(note), delay));
      delay += 650;
    });
    parrotTimeouts.push(setTimeout(() => {
      locked = false;
      status.textContent = `Tu turno · ${sequence.length} llamada${sequence.length === 1 ? '' : 's'}`;
    }, delay));
  };
  board.hidden = false;
  board.onclick = event => {
    const pad = event.target.closest('[data-parrot-note]');
    if (!pad || locked) return;
    const note = Number(pad.dataset.parrotNote);
    flash(note);
    if (note !== sequence[playerStep]) {
      locked = true;
      status.textContent = `¡Casi! Llegaste a ${playerStep + 1} llamada${playerStep === 0 ? '' : 's'}.`;
      gameCards.parrot.querySelector('.game-replay').hidden = false;
      return;
    }
    playerStep += 1;
    if (playerStep !== sequence.length) return;
    if (sequence.length === 5) {
      locked = true;
      winGame('parrot', '¡El loro ha repetido tu canción!');
      return;
    }
    locked = true;
    status.textContent = '¡Perfecto! El loro añade una llamada…';
    parrotTimeouts.push(setTimeout(playSequence, 700));
  };
  playSequence();
}

// Memoria pirata: tablero 4 × 4 con ocho parejas.
const memoryCards = [
  { key: 'anchor', name: 'Ancla', x: '0%', y: '0%' },
  { key: 'parrot', name: 'Loro', x: '33.333%', y: '0%' },
  { key: 'map', name: 'Mapa del tesoro', x: '66.667%', y: '0%' },
  { key: 'gem', name: 'Gema azul', x: '100%', y: '0%' },
  { key: 'coin', name: 'Moneda pirata', x: '0%', y: '100%' },
  { key: 'boat', name: 'Barco', x: '33.333%', y: '100%' },
  { key: 'compass', name: 'Brújula', x: '66.667%', y: '100%' },
  { key: 'chest', name: 'Cofre', x: '100%', y: '100%' }
];
let deck = [], open = [], matched = [], memoryLock = false;
function renderMemory() {
  const board = document.getElementById('memory');
  board.innerHTML = deck.map(card => {
    const faceUp = open.includes(card.id) || matched.includes(card.key);
    return `<button data-id="${card.id}" aria-label="${faceUp ? card.name : 'Carta oculta'}" class="${faceUp ? 'flipped' : ''}"><span>${faceUp ? `<i class="memory-card-image" style="--sprite-x: ${card.x}; --sprite-y: ${card.y}"></i>` : '✦'}</span></button>`;
  }).join('');
  document.getElementById('memory-status').textContent = `${matched.length} de 8 parejas encontradas`;
}
function startMemory() {
  deck = shuffle([...memoryCards, ...memoryCards].map((card, id) => ({ ...card, id })));
  open = []; matched = []; memoryLock = false;
  document.getElementById('memory').hidden = false;
  renderMemory();
}
document.getElementById('memory').addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || memoryLock || open.length === 2) return;
  const id = Number(button.dataset.id), card = deck.find(item => item.id === id);
  if (open.includes(id) || matched.includes(card.key)) return;
  open.push(id); renderMemory();
  if (open.length !== 2) return;
  const pair = deck.filter(item => open.includes(item.id));
  memoryLock = true;
  setTimeout(() => {
    if (pair[0].key === pair[1].key) matched.push(pair[0].key);
    open = []; memoryLock = false; renderMemory();
    if (matched.length === memoryCards.length) winGame('memory', '¡Completaste todas las parejas!');
  }, pair[0].key === pair[1].key ? 450 : 760);
});
updateProgress();

document.getElementById('rsvp-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('guest-name').value.trim();
  const attendanceMessage = document.getElementById('guest-answer').value;
  if (!name) return;

  const message = `${name} ${attendanceMessage}!`;
  const whatsappUrl = `https://wa.me/34611415373?text=${encodeURIComponent(message)}`;
  window.location.assign(whatsappUrl);
});
const guybrushEgg = document.getElementById('guybrush-easter-egg');
const guybrushImage = guybrushEgg.querySelector('img');
let guybrushVisible = false;
let guybrushSequence = '';
function showGuybrushEgg() {
  if (!guybrushImage.getAttribute('src')) guybrushImage.src = guybrushImage.dataset.easterSrc;
  guybrushVisible = true;
  guybrushEgg.classList.add('is-visible');
}
function hideGuybrushEgg() {
  if (!guybrushVisible) return;
  guybrushVisible = false;
  guybrushEgg.classList.remove('is-visible');
}
window.addEventListener('keydown', event => {
  if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
  guybrushSequence = `${guybrushSequence}${event.key.toLowerCase()}`.slice(-8);
  if (guybrushSequence === 'guybrush') showGuybrushEgg();
});
window.addEventListener('pointermove', hideGuybrushEgg, { passive: true });
window.addEventListener('scroll', hideGuybrushEgg, { passive: true });

const backTop = document.getElementById('back-top');

function syncBackTopVisibility() {
  backTop.classList.toggle('is-visible', window.scrollY > 0);
}

backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', syncBackTopVisibility, { passive: true });
window.addEventListener('resize', syncBackTopVisibility);
syncBackTopVisibility();
