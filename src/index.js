import './styles/index.css';

var canvas = document.getElementById("flyCanvas");
var ctx = canvas.getContext("2d");
var rightPressed = false;
var leftPressed = false;
var yInitial = 0;
var y = 0;
var rotationInit = 0;
var rotation = 0;

ctx.translate(240, 200);



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

const drawHorizon = () => {
  ctx.beginPath();
  ctx.rect(-1000, y, 2000, 1500);

  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.closePath();
}

const drawRotation = () => {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Rotation: " + rotation, 1, 1);
}

const animate = () => {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  drawHorizon()
  drawRotation()

  ctx.rotate((Math.PI / 180) * rotation);

  if (rightPressed) {
    if (rotation < 0.02) {
      rotation += 0.02;
    } else {
      rotation -= 0.2;
    }
  } else if (leftPressed) {
    if (rotation > -0.02) {
      rotation -= 0.02;
    } else {
      rotation += 0.2;
    }
  } else {
    if (rotation > rotationInit) {
      rotation -= 0.02;
    } else if (rotation < rotationInit) {
      rotation += 0.02;
    }
  }
}



setInterval(animate, 10);

    //on keydown the horizon rotates to a certain point
    //on keyup the horizon returns to its initial state
    //as the horizon shifts enemy elements/obstacles shift too
    //they also add or decrease their x position depending on the key direction

    //variable for time elapsed === high score
    //high score saved and displayed


