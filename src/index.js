import './styles/reset.css';
import './styles/index.css';

const titleCard = document.querySelector(".title-card");
const pauseCard = document.querySelector(".pause-card");
const canvas = document.getElementById("flyCanvas");
const ctx = canvas.getContext("2d");
let rightPressed = false;
let leftPressed = false;
let spacePressed = false;
let turnX = 0;
let y = 0;
let score = 0;
let hiScore = JSON.parse(localStorage.getItem("hiScore")) || 0;
let rotation = 0;
let counter = 0;
let cactiColors = ["#076d07", "#2e7a2f", "#a1d6a2", "#5ef75e"];
let cacti = [];
let game = false;
let paused = false;

const birdImg = new Image();
birdImg.src = "src/assets/Take Flight-05.png";

const controls = new Image();
controls.src = "src/assets/keys.png";

const controlL = new Image();
controlL.src = "src/assets/key_left.png";

const controlR = new Image();
controlR.src = "src/assets/key_right.png";

const cactus1 = new Image();
cactus1.src = "src/assets/Take Flight-06.png";

const cactus2 = new Image();
cactus2.src = "src/assets/Take Flight-07.png";

const cactus3 = new Image();
cactus3.src = "src/assets/Take Flight-08.png";

const cactus4 = new Image();
cactus4.src = "src/assets/Take Flight-09.png";

const cactus5 = new Image();
cactus5.src = "src/assets/Take Flight-10.png";

const cactus6 = new Image();
cactus6.src = "src/assets/Take Flight-11.png";

const cactus7 = new Image();
cactus7.src = "src/assets/Take Flight-12.png";

const cactus8 = new Image();
cactus8.src = "src/assets/Take Flight-13.png";

const cloud1 = new Image();
cloud1.src = "src/assets/Take Flight-03.png";

const cloud2 = new Image();
cloud2.src = "src/assets/Take Flight-04.png";

let instKey = controls;

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

var cloudPositions = {
  cloud1: 100,
  cloud2: -330,
  cloud3: -730,
  cloud4: 700,
};


ctx.translate(640, 360);

const startGame = () => {
  animate();
  animate();
  titleCard.classList.add("hidden");
  game = true;
};


const keyDownHandler = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  } else if (e.key === ' ' || e.key === 'Spacebar') {
    spacePressed = true;
  }
};

const keyUpHandler = (e) => {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }
  else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  } else if (e.key === ' ' || e.key === 'Spacebar') {
    if (game) {
      if (paused) {
        paused = false;
        pauseCard.classList.remove("show");
        animate();
        animate();
      } else {
        paused = true;
        pauseCard.classList.add("show");
      }
    } else {
      startGame();
    }
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

// const drawRotation = () => {
//   ctx.font = "16px Arial";
//   ctx.fillStyle = "#0095DD";
//   ctx.fillText("Rotation: " + rotation, 1, 1);
// };

const drawScore = () => {
  if (score > 4000) {
    ctx.font = "18px Helvetica";
    ctx.fillStyle = "#0095DD";
  } else {
    ctx.font = "16px Helvetica";
    ctx.fillStyle = "#0095DD";
  }
  ctx.fillText("Score: " + score, 3, -3);

};

const drawHiScore = () => {
  if (typeof hiScore != "number") hiScore = hiScore.number;

  if (score > hiScore) {
    hiScore = score;
    localStorage.setItem('hiScore', JSON.stringify({
      number: Number(score)
    }));
  }

  ctx.font = "16px Helvetica";
  ctx.fillStyle = "red";
  
  ctx.fillText("High Score: " + hiScore, 3, -20);

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

const drawInstructions = () => {
  ctx.save();

  ctx.translate(0, 50);
  ctx.rotate((Math.PI / 180) * -((rotation * 1) / 25));

  if (score > 150 && score < 700) {
    ctx.drawImage(instKey, -100, 200, 200, 70);
  }

  ctx.restore();
};

const drawCactus = (x, y, w, h, color, img) => {
  ctx.save();
  
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
  ctx.drawImage(cloud1, cloudPositions.cloud1, -200, 300, 200);
  ctx.drawImage(cloud2, cloudPositions.cloud2, -300, 300, 150);
  ctx.drawImage(cloud1, cloudPositions.cloud3, -200, 300, 200);
  ctx.drawImage(cloud2, cloudPositions.cloud4, -300, 300, 150);
};

const moveClouds = (num) => {
  for (const cloud in cloudPositions) {
    cloudPositions[cloud] += num;
  }
};

const filterCacti = () => {
  cacti = cacti.filter(cactus => ((cactus.y) < 550));
};

const animate = () => {
  
  ctx.clearRect(-1000, -1000, 2000, 2000);
  filterCacti();
  drawHorizon();
  drawInstructions();
  drawClouds();
  // drawRotation();
  drawScore();
  drawHiScore();
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

    let cactusHit = cactus.y;
    let leftHit = cactus.x + (cactus.width / 2);

    if ((cactus.y < 10 && cactus.y > 5) && (leftHit > -125 && leftHit < 125)) {
      // cactus.color = "purple";
      // clearInterval(interval);
      game = false;
      document.location.reload();
    }

    drawCactus(cactus.x, cactus.yOrd, cactus.width, h, cactus.color, cactus.img );
  });
  
  if (leftPressed) {
    instKey = controlL;
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
    instKey = controlR;
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
    instKey = controls;
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
  score += 1;
  if (!paused) requestAnimationFrame(animate);
};


// const interval = setInterval(animate, 10);
// animate();


//on keydown the horizon rotates to a certain point
//on keyup the horizon returns to its initial state
//as the horizon shifts enemy elements/obstacles shift too
//they also add or decrease their x position depending on the key direction

//variable for time elapsed === high score
//high score saved and displayed


