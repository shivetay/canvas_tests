class Input {
  constructor(player) {
    this.key = "";
    document.addEventListener("keydown", (e) => {
      console.log(e.key);

      switch (e.key) {
        // left
        case "ArrowLeft":
          // this.key = "PRESS left";
          player.moveLeft();
          break;

        //up/jump
        case "ArrowUp":
          player.jump();
          break;

        // right
        case "ArrowRight":
          // this.key = "PRESS right";
          player.moveRight();
          break;

        // down
        case "ArrowDown":
          this.key = "PRESS down";
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.key) {
        // left
        // right
        case "ArrowLeft":
        case "ArrowRight":
          break;

        //up/jump
        case "ArrowUp":
          break;

        // down
        case "ArrowDown":
          this.key = "RELEAS down";
          break;
      }
    });
  }
}

export default Input;
