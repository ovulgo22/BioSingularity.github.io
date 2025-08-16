document.getElementById('autoCollect').addEventListener('click', toggleAutoCollect);
document.getElementById('prestige').addEventListener('click', ()=>{
  player.prestige++;
  player.score = 0;
  document.getElementById('score').innerText = `Pontuação: ${player.score}`;
  document.getElementById('prestigeLevel').innerText = `Prestígio: ${player.prestige}`;
});
document.getElementById('credits').addEventListener('click', ()=>{
  let div = document.getElementById('creditsText');
  div.style.display = div.style.display === 'none' ? 'block' : 'none';
});

// Leaderboard placeholder
document.getElementById('leaderboard').addEventListener('click', ()=>{
  alert("Leaderboards futuramente com ranking online!");
});
