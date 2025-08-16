let player = {
  score: 0,
  prestige: 0,
  autoCollect: false
};

function collectCell(cell) {
  let points = cell.type === 'rare' ? 10 : cell.type === 'mutant' ? 15 : 1;
  player.score += points;
  document.getElementById('score').innerText = `Pontuação: ${player.score}`;
  if(cell.element){
    cell.element.remove();
  }
  audio.collect.play();
}

function toggleAutoCollect() {
  player.autoCollect = !player.autoCollect;
  document.getElementById('autoCollect').innerText = player.autoCollect ? "Auto: ON" : "Coleta Automática";
}
