let ai = {
  cells: [],
  maxCells: 20,

  spawnCell(type='normal') {
    if(this.cells.length >= this.maxCells) return;
    let id = this.cells.length;
    let cell = new Cell(id, type);
    cell.createElement();
    this.cells.push(cell);
  },

  update() {
    this.cells.forEach(cell=>{
      cell.move();
      if(player.autoCollect){
        // coleta automática se estiver próximo
        let dx = cell.x - window.innerWidth/2;
        let dy = cell.y - window.innerHeight/2;
        if(Math.sqrt(dx*dx+dy*dy)<100){
          collectCell(cell);
        }
      }
    });

    // Spawn aleatório de células raras
    if(Math.random()<0.01){
      this.spawnCell('rare');
    }

    // Spawn aleatório de mutantes
    if(Math.random()<0.005){
      this.spawnCell('mutant');
    }

    // Spawn eventos aleatórios
    if(Math.random()<0.002){
      events.spawnEvent();
    }
  }
};
