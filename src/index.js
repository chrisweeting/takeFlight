import './styles/index.css';

var canvas = document.getElementById("flyCanvas");
var ctx = canvas.getContext("2d");
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var turnX = 0;
var y = 0;
var rotationInit = 0;
var rotation = 0;
var counter = 0;
var cactiColors = ["#076d07", "#2e7a2f", "#a1d6a2", "#5ef75e"];
var cacti = [];


var birdImg = new Image();
birdImg.src = "src/assets/Take Flight-05.png";

var cactus1 = new Image();
cactus1.src = "src/assets/Take Flight-06.png";

var cactus2 = new Image();
cactus2.src = "src/assets/Take Flight-07.png";

var cactus3 = new Image();
cactus3.src = "src/assets/Take Flight-08.png";

var cactus4 = new Image();
cactus4.src = "src/assets/Take Flight-09.png";

var cactus5 = new Image();
cactus5.src = "src/assets/Take Flight-10.png";

var cactus6 = new Image();
cactus6.src = "src/assets/Take Flight-11.png";

var cactus7 = new Image();
cactus7.src = "src/assets/Take Flight-12.png";

var cactus8 = new Image();
cactus8.src = "src/assets/Take Flight-13.png";

var cloud1 = new Image();
cloud1.src = "src/assets/Take Flight-03.png";

var cloud2 = new Image();
cloud2.src = "src/assets/Take Flight-04.png";

const cactusBin = [
  { img: cactus1, width: 180, height: 300 },
  { img: cactus2, width: 180, height: 300 },
  { img: cactus3, width: 150, height: 250 },
  { img: cactus4, width: 150, height: 140 },
  { img: cactus5, width: 100, height: 100 },
  { img: cactus6, width: 170, height: 150 },
  { img: cactus7, width: 100, height: 150 },
  { img: cactus8, width: 80, height: 280 },
];

const cloudPositions = {
  cloud1: 100,
  cloud2: -330,
  cloud3: -730,
  cloud4: 700,
};


ctx.translate(640, 360);



const keyDownHandler = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  } else if (e.key == "space") {
    spacePressed = true;
  }
};

const keyUpHandler = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  } else if (e.key == "space") {
    // restart();
    spacePressed = false;
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

  // ctx.shadowBlur = 50;
  // ctx.shadowColor = 'black';
  // ctx.shadowOffsetY = 80;
  ctx.drawImage(birdImg, -125, -50, 250, 100);
  // ctx.beginPath();
  // // ctx.rect(-60, -10, 120, 20);
  // ctx.rect(-125, -50, 250, 100);
  // ctx.fillStyle = "blue";
  // ctx.fill();
  // ctx.closePath();
  
  
  ctx.restore();
};

const drawCactus = (x, y, w, h, color, img) => {
  ctx.save();
  // const place = -30 + x;
  // const width = 20 + w;
  // const height = 60 + h;
  // const growingX = place + gX;
  // const growingY =
  ctx.drawImage(img, x, y, w, h);
  // ctx.beginPath();
  // ctx.rect(x, y, w, h);
  // ctx.fillStyle = color;
  // ctx.fill();
  // ctx.closePath();
  ctx.restore();
};

const spawnCacti = () => {
  let x = Math.ceil(Math.random() * 840) * (Math.round(Math.random()) ? 1 : -1);
  let color = cactiColors[Math.floor(Math.random() * cactiColors.length)];
  let { width, height, img } = cactusBin[Math.floor(Math.random() * cactusBin.length)];
  cacti.unshift({
    x: x,
    y: -100,
    width: width,
    height: height,
    color: color,
    hInitial: 0,
    yOrd: 0,
    img: img
  });
  //assign default variables store them in objects
};

const drawClouds = () => {
  // ctx.beginPath();
  // ctx.arc(cloud1.sec1, -200, 50, 0, 2 * Math.PI);
  // ctx.arc(cloud1.sec2, -170, 40, 0, 2 * Math.PI);
  // ctx.arc(cloud1.sec3, -150, 30, 0, 2 * Math.PI);
  // ctx.fillStyle = "#add6d8";
  // ctx.fill();
  ctx.drawImage(cloud1, cloudPositions.cloud1, -200, 300, 200);
  ctx.drawImage(cloud2, cloudPositions.cloud2, -300, 300, 150);
  ctx.drawImage(cloud1, cloudPositions.cloud3, -200, 300, 200);
  ctx.drawImage(cloud2, cloudPositions.cloud4, -300, 300, 150);

  // ctx.beginPath();
  // ctx.arc(cloud2.sec1, -70, 40, 0, 2 * Math.PI);
  // ctx.arc(cloud2.sec2, -100, 40, 0, 2 * Math.PI);
  // ctx.arc(cloud2.sec3, -80, 50, 0, 2 * Math.PI);
  // ctx.fillStyle = "#add6d8";
  // ctx.fill();
};

const moveClouds = (num) => {
  for (const cloud in cloudPositions) {
    let pos = cloudPositions[cloud];
    pos += num;
  }
};

const filterCacti = () => {
  cacti = cacti.filter(cactus => ((cactus.y) < 550));
};

const animate = () => {
  
  ctx.clearRect(-1000, -1000, 2000, 2000);
  filterCacti();
  drawHorizon();
  drawClouds();
  drawRotation();
  drawBird();

  //cactus spawn frequency
  if (counter === 55) {
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
      cactus.yOrd += 1.49;
      cactus.y += 1.49;
      // cactus.width += cactus.width * 0.0014;
      // cactus.height += cactus.height * 0.0014;
      // cactus.height *= 1.0014;
      cactus.hInitial = cactus.height;
    }

    //cactus removal animation and yOrd speed control
    // if (cactus.width > 50) {
    //   cactus.yOrd += 1;
    //   cactus.height -= 1;
    // } else if (cactus.width > 27) {
    //   cactus.yOrd += 1;
    //   // cactus.color = "black";
    // } else if (cactus.width > 23) {
    //   cactus.yOrd += 0.5;
    //   // cactus.color = "red";
    // }

    if (cactus.y > 0) {
      // cactus.color = "red";
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

    // let cactusHit = cactus.y - ( h/5 );
    let leftHit = cactus.x + (cactus.width);

    // if ((cactusHit < 20 && cactusHit > -10) && (cactus.x > -170 && cactus.x < 125)) {
    if ((cactus.y < 3 && cactus.y > 0) && ((cactus.x > -125 && cactus.x < 125) || (leftHit > -125 && leftHit < 125))) {
      cactus.color = "purple";
      // clearInterval(interval);
      // document.location.reload();
    }

    drawCactus(cactus.x, cactus.yOrd, cactus.width, h, cactus.color, cactus.img );
  });
  
  if (leftPressed) {
    if (turnX <= 0)  {
      turnX += 0.055;
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
  requestAnimationFrame(animate);
};


// const interval = setInterval(animate, 10);
animate();
// if (spacePressed) {
//   interval();
// }

    //on keydown the horizon rotates to a certain point
    //on keyup the horizon returns to its initial state
    //as the horizon shifts enemy elements/obstacles shift too
    //they also add or decrease their x position depending on the key direction

    //variable for time elapsed === high score
    //high score saved and displayed


