let events = {
  activeEvents: [],
  spawnEvent() {
    let type = Math.random() < 0.5 ? 'virus' : 'mutation';
    events.activeEvents.push(type);
    console.log(`Evento spawnado: ${type}`);
    audio.event.play();

    // Mini efeito visual
    let container = document.getElementById('game-container');
    let effect = document.createElement('div');
    effect.style.position = 'absolute';
    effect.style.width = '50px';
    effect.style.height = '50px';
    effect.style.borderRadius = '50%';
    effect.style.left = getRandomInt(0, window.innerWidth-50)+'px';
    effect.style.top = getRandomInt(0, window.innerHeight-200)+'px';
    effect.style.backgroundColor = type==='virus'?'red':'magenta';
    container.appendChild(effect);
    setTimeout(()=>effect.remove(),2000);
  }
};
