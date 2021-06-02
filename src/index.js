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
  { x: -100, y: -100, width: 20, height: 100, color: "#076d07", hInitial: 0, yOrd: 0 },
  { x: -40, y: -30, width: 20, height: 30, color: "#076d07", hInitial: 0, yOrd: 0 },
  { x: 30, y: -40, width: 30, height: 40, color: "#2e7a2f", hInitial: 0, yOrd: 0 }
];
var cloud1 = { sec1: 100, sec2: 130, sec3: 80 };
var cloud2 = { sec1: -130, sec2: -100, sec3: -80 };

ctx.translate(640, 360);



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
  
  ctx.translate(0, 150);
  ctx.rotate((Math.PI / 180) * -((rotation * 0.5 ) / 4));
  ctx.beginPath();
  ctx.rect(-60, -10, 120, 20);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
  
  ctx.restore();
};

const drawCactus = (x, y, w, h, color) => {
  ctx.save();
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
  ctx.restore();
};

const spawnCacti = () => {
  let x = Math.ceil(Math.random() * 640) * (Math.round(Math.random()) ? 1 : -1);
  let color = cactiColors[Math.floor(Math.random() * cactiColors.length)];
  cacti.unshift({
    x: x,
    y: -100,
    width: 20,
    height: 100,
    color: color,
    hInitial: 0,
    yOrd: 0
  });
};

const drawClouds = () => {
  ctx.beginPath();
  ctx.arc(cloud1.sec1, -200, 50, 0, 2 * Math.PI);
  ctx.arc(cloud1.sec2, -170, 40, 0, 2 * Math.PI);
  ctx.arc(cloud1.sec3, -150, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "#add6d8";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cloud2.sec1, -70, 40, 0, 2 * Math.PI);
  ctx.arc(cloud2.sec2, -100, 40, 0, 2 * Math.PI);
  ctx.arc(cloud2.sec3, -80, 50, 0, 2 * Math.PI);
  ctx.fillStyle = "#add6d8";
  ctx.fill();
};

const moveClouds = (num) => {
  for (const section in cloud1) {
    cloud1[section] += num;
  }
  for (const section in cloud2) {
    cloud2[section] += num;
  }
};

const filterCacti = () => {
  cacti = cacti.filter(cactus => (cactus.width < 65));
};

const animate = () => {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  filterCacti();
  drawHorizon();
  drawClouds();
  drawRotation();
  drawBird();

  //cactus spawn frequency
  if (counter === 20) {
    spawnCacti();
    counter = 0;
  }


  cacti.forEach(cactus => {
    cactus.x += turnX;
    let h = cactus.height;
    if (cactus.hInitial < cactus.height) {
      cactus.hInitial += 1;
      h = cactus.hInitial;
      cactus.yOrd -= 1;
    } else {
      cactus.yOrd += 0.39;
      cactus.y += 0.39;
      cactus.width += cactus.width * 0.0014;
      cactus.height += cactus.height * 0.0014;
      // cactus.height *= 1.0014;
      cactus.hInitial = cactus.height;
    }

    //cactus removal animation and yOrd speed control
    if (cactus.width > 50) {
      cactus.yOrd += 1;
      cactus.height -= 1;
    } else if (cactus.width > 27) {
      cactus.yOrd += 1;
      // cactus.color = "black";
    } else if (cactus.width > 23) {
      cactus.yOrd += 0.5;
      // cactus.color = "red";
    }

    if (cactus.y > 0) {
      cactus.color = "red";
    }

    // cactus path change to account for perspective
    if (cactus.y > -90) {
      if (cactus.x > 100) {
        cactus.x += 0.55;
      } else if (cactus.x < -100) {
        cactus.x -= 0.55;
      } else if (cactus.x > 60) {
        cactus.x += 0.2;
      } else if (cactus.x < -60) {
        cactus.x -= 0.2;
      } else if (cactus.x > 80) {
        cactus.x += 0.4;
      } else if (cactus.x < -80) {
        cactus.x -= 0.4;
      } else if (cactus.x > 40) {
        cactus.x += 0.1;
      } else if (cactus.x < -40) {
        cactus.x -= 0.1;
      } else if (cactus.x > 20) {
        cactus.x += 0.05;
      } else if (cactus.x < -20) {
        cactus.x -= 0.05;
      }
    }

    drawCactus(cactus.x, cactus.yOrd, cactus.width, h, cactus.color);
  });
  
  if (leftPressed) {
    if (turnX <= 0)  {
      turnX += 0.075;
    } else if (turnX > 0 && turnX < 1.7) {
      turnX += 0.035;
    }
    moveClouds(0.61); //change value to shift cloud x position  
    if (rotation < 100 && rotation >= 0) {
      rotation += 1;
      rotateCam(rotation);
    } else if (rotation < 0) {
      rotation += 1;
      ctx.rotate((Math.PI / 180) * 0.05);
    }
  } else if (rightPressed) {
    if (turnX >= 0) {
      turnX -= 0.055;
    } else if (turnX < 0 && turnX > -1.7) {
      turnX -= 0.35;
    }
    moveClouds(-0.61); //change value to shift cloud x position 
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


