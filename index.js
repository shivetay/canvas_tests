import Input from "./script/Input.js";
import Player from "./script/Player.js";
import Worm from "./script/Worm.js";
import Ghost from "./script/Ghost.js";
import Spider from "./script/Spider.js";

const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
let lastTime = 1;

class Game {
  constructor(context, width, height) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.enemies = [];
    this.player = new Player(canvas.width, canvas.height);
    this.input = new Input(this.player);
    this.enemyInterval = 200;
    this.enemyTimer = 0;
    this.enemyTypes = ["worm", "ghost", "spider"];
  }

  draw() {
    this.enemies.forEach((object) => object.draw(context));
    this.player.draw(context);
  }

  update(deltaTime) {
    this.enemies = this.enemies.filter((object) => !object.markForDeletion);
    if (this.enemyTimer > this.enemyInterval) {
      this.#addNewEnemy();
      this.enemyTimer = 0;
    } else {
      this.enemyTimer += deltaTime;
    }

    this.enemies.forEach((object) => object.update(deltaTime));
    this.player.update();
  }

  #addNewEnemy() {
    const randomEnemy =
      this.enemyTypes[Math.floor(Math.random() * this.enemyTypes.length)];
    if (randomEnemy === "worm") {
      this.enemies.push(new Worm(this));
    } else if (randomEnemy === "ghost") {
      this.enemies.push(new Ghost(this));
    } else if (randomEnemy === "spider") {
      this.enemies.push(new Spider(this));
    }
    this.enemies.sort((a, b) => {
      return a.y - b.y;
    });
  }
}

const game = new Game(context, canvas.width, canvas.height);

// clear old frames
const drawCanvas = () => {
  context.fillStyle = "#000";
  context.fillRect(0, 0, canvas.width, canvas.height);
};

const animation = (timeStamp) => {
  drawCanvas();
  const deltaTime = timeStamp - lastTime;

  lastTime = timeStamp;

  game.draw();
  game.update(deltaTime);

  requestAnimationFrame(animation);
};

animation(0);
