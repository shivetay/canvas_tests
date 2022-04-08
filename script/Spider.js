import Enemy from "./Enemy.js";

class Spider extends Enemy {
  constructor(game) {
    super(game);
    this.width = 15;
    this.height = 5;
    this.x = 0 - this.game.width;
    this.y = Math.random() * this.game.height;
    this.vx = 5;
    this.vy = 0;
    this.maxFall = Math.random() * this.game.width;
    this.gravity = 0;
  }

  draw(context) {
    context.save();
    context.fillStyle = "pink";
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x, this.y);
    context.lineWidth = 10;
    context.strokeStyle = "pink";
    context.stroke();
    super.draw(context);
    context.restore();
  }

  update(deltaTime) {
    super.update(deltaTime);
    this.x += this.vx;
    this.y += this.gravity;

    if (this.x > this.maxFall) this.vx *= -1;
  }
}

export default Spider;
