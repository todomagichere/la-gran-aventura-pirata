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
