class Cell {
  constructor(id, type='normal') {
    this.id = id;
    this.type = type; // normal, rare, mutant
    this.x = getRandomInt(50, window.innerWidth - 50);
    this.y = getRandomInt(50, window.innerHeight - 200);
    this.size = type==='rare'? 25:15;
    this.speed = type==='rare'?2:1;
    this.element = null;
  }

  createElement() {
    let cellEl = document.createElement('div');
    cellEl.classList.add('cell');
    cellEl.style.width = this.size+'px';
    cellEl.style.height = this.size+'px';
    cellEl.style.backgroundColor = this.type==='rare'?'gold':this.type==='mutant'?'magenta':'cyan';
    cellEl.style.borderRadius = '50%';
    cellEl.style.position = 'absolute';
    cellEl.style.left = this.x+'px';
    cellEl.style.top = this.y+'px';
    document.getElementById('game-container').appendChild(cellEl);
    this.element = cellEl;
  }

  move() {
    this.x += (Math.random()-0.5)*this.speed*2;
    this.y += (Math.random()-0.5)*this.speed*2;
    this.x = clamp(this.x,0,window.innerWidth-50);
    this.y = clamp(this.y,0,window.innerHeight-200);
    if(this.element){
      this.element.style.left = this.x+'px';
      this.element.style.top = this.y+'px';
    }
  }
}
