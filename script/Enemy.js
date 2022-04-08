class Enemy {
  constructor(game) {
    this.game = game;
    this.speed = 0;
    this.vy = 0;
    this.gravity = 0.0098;
    this.markForDeletion = false;
  }

  draw(context) {
    context.fillStyle = "#AE3E14";
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  update(deltaTime) {
    this.y += this.vy * deltaTime;
    this.vy += this.gravity;

    if (this.y > this.gameHeight) {
      this.markForDeletion = true;
    }
  }
}

export default Enemy;
