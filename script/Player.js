class Player {
  constructor(gameWidht, gameHeight) {
    this.gameWidht = gameWidht;
    this.gameHeight = gameHeight;
    this.width = 100;
    this.height = 100;
    this.x = 10;
    this.y = this.gameHeight - this.height;
    this.speed = 0;
    this.vy = 0;
    this.gravity = 0.98;
    this.friction = 0.03;
  }

  draw(context) {
    context.fillStyle = "#ffffff";
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.speed = this.speed - this.speed * this.friction;
    this.x += this.speed;
    this.y += this.vy;

    if (this.x < 0) this.x = 0;
    else if (this.x > this.gameWidht - this.width)
      this.x = this.gameWidht - this.width;

    //check if player is on ground and add gravity
    if (!this.onGround()) {
      this.vy += this.gravity;
    } else {
      this.vy = 0;
    }

    if (this.y > this.gameHeight - this.height)
      this.y = this.gameHeight - this.height;
  }

  moveLeft() {
    this.speed = -5;
  }

  moveRight() {
    this.speed = 5;
  }

  jump() {
    if (this.onGround()) {
      this.vy = -15;
    }
  }

  stop() {}

  onGround() {
    return this.y >= this.gameHeight - this.height;
  }
}

export default Player;
