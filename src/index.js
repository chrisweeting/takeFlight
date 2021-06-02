import './styles/index.css';

var canvas = document.getElementById("flyCanvas");
var ctx = canvas.getContext("2d");
var rightPressed = false;
var leftPressed = false;
var turnX = 0;
var y = 0;
var rotationInit = 0;
var rotation = 0;
var counter = 0;
var cactiColors = ["#076d07", "#2e7a2f", "#a1d6a2", "#5ef75e"];
var cacti = [
  { x: -100, y: -40, width: 10, height: 40, color: "#076d07" },
  { x: -40, y: -30, width: 10, height: 30, color: "#076d07" },
  { x: 30, y: -40, width: 20, height: 40, color: "#2e7a2f" }
];

ctx.translate(240, 200);



const keyDownHandler = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
};

const keyUpHandler = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

const drawHorizon = () => {
  ctx.beginPath();
  ctx.rect(-1000, y, 2000, 1500);

  ctx.fillStyle = "#e8e2a4";
  ctx.fill();
  ctx.closePath();
};

const drawRotation = () => {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Rotation: " + rotation, 1, 1);
};

const rotateCam = (num) => {
  if (num < 100 && num > 0) {
    return ctx.rotate((Math.PI / 180) * 0.05);
  } else if (num > -100 && num < 0) {
    return ctx.rotate((Math.PI / 180) * -0.05);
  }
};

const drawBird = () => {
  ctx.save();
  
  ctx.translate(0, 50);
  ctx.rotate((Math.PI / 180) * -(rotation / 20));
  ctx.beginPath();
  ctx.rect(-30, -10, 60, 20);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
  
  ctx.restore();
};

const drawCactus = (x, y, w, h, color) => {
  // const place = -30 + x;
  // const width = 20 + w;
  // const height = 60 + h;
  // const growingX = place + gX;
  // const growingY =
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
};

const spawnCacti = () => {
  let x = Math.ceil(Math.random() * 250) * (Math.round(Math.random()) ? 1 : -1);
  let color = cactiColors[Math.floor(Math.random() * cactiColors.length)];
  cacti.push({
    x: x,
    y: -30,
    width: 10,
    height: 30,
    color: color
  });
};

const animate = () => {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  drawHorizon();
  drawRotation();
  drawBird();
  if (counter === 70) {
    spawnCacti();
    counter = 0;
  }
  for (const i in cacti) {
    let cactus = cacti[i];
    cactus.x += turnX;
    cactus.y += 0.15;
    cactus.width *= 1.0012;
    cactus.height *= 1.0014;
    if (cactus.x > 50) {
      cactus.x += 0.02;
    } else if (cactus.x < -50) {
      cactus.x -= 0.02;
    } else if (cactus.x > 30) {
      cactus.x += 0.01;
    } else if (cactus.x < -30) {
      cactus.x -= 0.01;
    } 
    drawCactus(cactus.x, cactus.y, cactus.width, cactus.height, cactus.color);
  }
  // turnX = 0;

  // ctx.rotate((Math.PI / 180) * rotation);
  if (leftPressed) {
    turnX += 0.025;
    if (rotation < 100 && rotation >= 0) {
      rotation += 1;
      rotateCam(rotation);
    } else if (rotation < 0) {
      rotation += 1;
      ctx.rotate((Math.PI / 180) * 0.05);
    }
  } else if (rightPressed) {
    turnX -= 0.025;
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
    } else {
      turnX = 0;
    }
  }
  counter += 1;
};


setInterval(animate, 10);

    //on keydown the horizon rotates to a certain point
    //on keyup the horizon returns to its initial state
    //as the horizon shifts enemy elements/obstacles shift too
    //they also add or decrease their x position depending on the key direction

    //variable for time elapsed === high score
    //high score saved and displayed


