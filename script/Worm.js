import Enemy from "./Enemy.js";

class Worm extends Enemy {
  constructor(game) {
    super(game);
    this.width = 50;
    this.height = 20;
    this.x = Math.random() * this.game.width;
    this.y = Math.random() * this.game.height;
  }

  draw(context) {
    context.fillStyle = "yellow";
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Worm;
