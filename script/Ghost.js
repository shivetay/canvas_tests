import Enemy from "./Enemy.js";

class Ghost extends Enemy {
  constructor(game) {
    super(game);
    this.width = 10;
    this.height = 20;
    this.x = Math.random() * this.game.width;
    this.y = Math.random() * this.game.height;
    this.angle = 0;
    this.curve = Math.random() * 4;
  }

  draw(context) {
    context.save();
    context.globalAlpha = 0.5;
    super.draw(context);
    context.restore();
  }

  update(deltaTime) {
    super.update(deltaTime);
    this.x += Math.sin(this.angle) * this.curve;
    this.angle += 0.12;
  }
}

export default Ghost;
