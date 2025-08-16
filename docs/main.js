// Inicialização do jogo
for(let i=0;i<10;i++){
  ai.spawnCell();
}

// Loop principal do jogo
function gameLoop(){
  ai.update();
  requestAnimationFrame(gameLoop);
}

gameLoop();
