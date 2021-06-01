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

  ctx.fillStyle = "#e8e2a4";
  ctx.fill();
  ctx.closePath();
}

const drawRotation = () => {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Rotation: " + rotation, 1, 1);
}

const rotateCam = (num) => {
  if (num < 100 && num > 0) {
    return ctx.rotate((Math.PI / 180) * 0.05);
  } else if (num > -100 && num < 0) {
    return ctx.rotate((Math.PI / 180) * -0.05);
  }
}

const drawBird = () => {
  ctx.save();

  ctx.translate(0, 70);
  ctx.rotate((Math.PI / 180) * -(rotation / 10));
  ctx.beginPath();
  ctx.rect(-30, -10, 60, 20);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();

  ctx.restore();
}

const animate = () => {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  drawHorizon();
  drawRotation();
  drawBird();

  // ctx.rotate((Math.PI / 180) * rotation);
  if (leftPressed) {
    if (rotation < 100 && rotation >= 0) {
      rotation += 1;
      rotateCam(rotation);
    } else if (rotation < 0) {
      rotation += 1;
      ctx.rotate((Math.PI / 180) * 0.05);
    }
  } else if (rightPressed) {
    if (rotation > -100 && rotation <= 0) {
      rotation -= 1;
      rotateCam(rotation);
    } else if (rotation > 0) {
      rotation -= 1;
      ctx.rotate((Math.PI / 180) * -0.05);
    }
  } else {
    if (rotation > 0) {
      rotation -= 1;
      ctx.rotate((Math.PI / 180) * -0.05);
    } else if (rotation < 0) {
      rotation += 1;
      ctx.rotate((Math.PI / 180) * 0.05);
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


