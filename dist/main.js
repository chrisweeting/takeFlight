/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");


var titleCard = document.querySelector(".title-card");
var pauseCard = document.querySelector(".pause-card");
var gameOverCard = document.querySelector(".game-over-card");
var instructionCard = document.querySelector(".instruction-card");
var dummyCard = document.querySelector(".dummy-canvas");
var canvas = document.getElementById("flyCanvas");
var begin = document.querySelector(".begin");
var beginAgain = document.querySelector(".begin-again");
var printHighScore = document.querySelector(".high-score");
var newHighScore = document.querySelector(".new-high-score");
var cntrl = document.querySelector(".controls");
var ctx = canvas.getContext("2d");
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var turnX = 0;
var y = 0;
var score = 0;
var hiScore = JSON.parse(localStorage.getItem("hiScore")) || 0;
var rotation = 0;
var counter = 0;
var cactiColors = ["#076d07", "#2e7a2f", "#a1d6a2", "#5ef75e"];
var cacti = [];
var game = false;
var paused = false;
var birdImg = new Image();
birdImg.src = "src/assets/Take Flight-05.png";
var controls = new Image();
controls.src = "src/assets/keys.png";
var controlL = new Image();
controlL.src = "src/assets/key_left.png";
var controlR = new Image();
controlR.src = "src/assets/key_right.png";
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
var instKey = controls;
var cactusBin = [{
  img: cactus1,
  width: 180,
  height: 300
}, {
  img: cactus2,
  width: 180,
  height: 300
}, {
  img: cactus3,
  width: 150,
  height: 250
}, {
  img: cactus4,
  width: 150,
  height: 140
}, {
  img: cactus5,
  width: 100,
  height: 100
}, {
  img: cactus6,
  width: 170,
  height: 150
}, {
  img: cactus7,
  width: 100,
  height: 150
}, {
  img: cactus8,
  width: 80,
  height: 280
}];
var cloudPositions = {
  cloud1: 100,
  cloud2: -330,
  cloud3: -730,
  cloud4: 700
};
ctx.translate(640, 360);
canvas.classList.add("hidden");
gameOverCard.classList.add("hidden");
instructionCard.classList.add("hidden"); // const startGame = () => {
//   animate();
//   animate();
//   titleCard.classList.add("hidden");
//   game = true;
// };

var startGame = function startGame() {
  // document.addEventListener("keydown", keyDownHandler, false);
  // document.addEventListener("keyup", keyUpHandler, false);
  animate();
  animate();
  canvas.classList.remove("hidden");
  titleCard.classList.add("hidden");
  dummyCard.classList.add("hidden");
  instructionCard.classList.add("hidden");
  game = true;
};

var handleClick = function handleClick() {
  document.location.reload();
};

var openControls = function openControls() {
  titleCard.classList.add("hidden");
  instructionCard.classList.remove("hidden");
}; // begin.addEventListener("click", startGame);


cntrl.addEventListener("click", openControls);

var endGame = function endGame() {
  if (hiScore === score) {
    newHighScore.classList.add("show");
  }

  printHighScore.innerHTML = "Score: ".concat(score);
  document.removeEventListener("keydown", keyDownHandler, false);
  document.removeEventListener("keyup", keyUpHandler, false);
  canvas.classList.add("hidden");
  gameOverCard.classList.remove("hidden");
  dummyCard.classList.remove("hidden");
  beginAgain.addEventListener("click", handleClick);
};

var keyDownHandler = function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  } else if (e.key === ' ' || e.key === 'Spacebar') {
    spacePressed = true;
  }
};

var keyUpHandler = function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
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

var drawHorizon = function drawHorizon() {
  ctx.beginPath();
  ctx.rect(-1000, y, 2000, 1500);
  ctx.fillStyle = "#e8e2a4";
  ctx.fill();
  ctx.closePath();
}; // const drawRotation = () => {
//   ctx.font = "16px Arial";
//   ctx.fillStyle = "#0095DD";
//   ctx.fillText("Rotation: " + rotation, 1, 1);
// };


var drawScore = function drawScore() {
  if (score > 4000) {
    ctx.font = "18px Helvetica";
    ctx.fillStyle = "#0095DD";
  } else {
    ctx.font = "16px Helvetica";
    ctx.fillStyle = "#0095DD";
  }

  ctx.fillText("Score: " + score, 3, -3);
};

var drawHiScore = function drawHiScore() {
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

var rotateCam = function rotateCam(num) {
  if (num < 100 && num > 0) {
    return ctx.rotate(Math.PI / 180 * 0.05);
  } else if (num > -100 && num < 0) {
    return ctx.rotate(Math.PI / 180 * -0.05);
  }
};

var drawBird = function drawBird() {
  ctx.save();
  ctx.translate(0, 150);
  ctx.rotate(Math.PI / 180 * -(rotation * 0.5 / 4)); // ctx.shadowBlur = 50;
  // ctx.shadowColor = 'black';
  // ctx.shadowOffsetY = 80;

  ctx.drawImage(birdImg, -125, -50, 250, 100); // ctx.beginPath();
  // // ctx.rect(-60, -10, 120, 20);
  // ctx.rect(-125, -50, 250, 100);
  // ctx.fillStyle = "blue";
  // ctx.fill();
  // ctx.closePath();

  ctx.restore();
};

var drawInstructions = function drawInstructions() {
  ctx.save();
  ctx.translate(0, 50);
  ctx.rotate(Math.PI / 180 * -(rotation * 1 / 25));

  if (score > 150 && score < 700) {
    ctx.drawImage(instKey, -100, 200, 200, 70);
  }

  ctx.restore();
};

var drawCactus = function drawCactus(x, y, w, h, color, img) {
  ctx.save();
  ctx.drawImage(img, x, y, w, h); // ctx.beginPath();
  // ctx.rect(x, y, w, h);
  // ctx.fillStyle = color;
  // ctx.fill();
  // ctx.closePath();

  ctx.restore();
};

var spawnCacti = function spawnCacti() {
  var x = Math.ceil(Math.random() * 840) * (Math.round(Math.random()) ? 1 : -1);
  var color = cactiColors[Math.floor(Math.random() * cactiColors.length)];
  var _cactusBin$Math$floor = cactusBin[Math.floor(Math.random() * cactusBin.length)],
      width = _cactusBin$Math$floor.width,
      height = _cactusBin$Math$floor.height,
      img = _cactusBin$Math$floor.img;
  cacti.unshift({
    x: x,
    y: -100,
    width: width,
    height: height,
    color: color,
    hInitial: 0,
    yOrd: 0,
    img: img
  }); //assign default variables store them in objects
};

var drawClouds = function drawClouds() {
  ctx.drawImage(cloud1, cloudPositions.cloud1, -200, 300, 200);
  ctx.drawImage(cloud2, cloudPositions.cloud2, -300, 300, 150);
  ctx.drawImage(cloud1, cloudPositions.cloud3, -200, 300, 200);
  ctx.drawImage(cloud2, cloudPositions.cloud4, -300, 300, 150);
};

var moveClouds = function moveClouds(num) {
  for (var cloud in cloudPositions) {
    cloudPositions[cloud] += num;
  }
};

var filterCacti = function filterCacti() {
  cacti = cacti.filter(function (cactus) {
    return cactus.y < 550;
  });
};

var animate = function animate() {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  filterCacti();
  drawHorizon();
  drawInstructions();
  drawClouds(); // drawRotation();

  drawScore();
  drawHiScore();
  drawBird(); //cactus spawn frequency

  if (counter === 55) {
    spawnCacti();
    counter = 0;
  }

  cacti.forEach(function (cactus) {
    cactus.x += turnX;
    var h = cactus.height;

    if (cactus.hInitial < cactus.height) {
      cactus.hInitial += 1;
      h = cactus.hInitial;
      cactus.yOrd -= 1;
    } else {
      cactus.yOrd += 1.49;
      cactus.y += 1.49; // cactus.width += cactus.width * 0.0014;
      // cactus.height += cactus.height * 0.0014;
      // cactus.height *= 1.0014;

      cactus.hInitial = cactus.height;
    } //cactus removal animation and yOrd speed control
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


    if (cactus.y > 0) {// cactus.color = "red";
    } // cactus path change to account for perspective


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

    var cactusHit = cactus.y;
    var leftHit = cactus.x + cactus.width / 2;

    if (cactus.y < 10 && cactus.y > 5 && leftHit > -125 && leftHit < 125) {
      // cactus.color = "purple";
      // clearInterval(interval);
      game = false;
      paused = true;
      endGame(); // document.location.reload();
    }

    drawCactus(cactus.x, cactus.yOrd, cactus.width, h, cactus.color, cactus.img);
  });

  if (leftPressed) {
    instKey = controlL;

    if (turnX <= 0) {
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
      ctx.rotate(Math.PI / 180 * 0.05);
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
      ctx.rotate(Math.PI / 180 * -0.05);
    }
  } else {
    instKey = controls;

    if (rotation > 0) {
      rotation -= 1;
      ctx.rotate(Math.PI / 180 * -0.05);
    } else if (rotation < 0) {
      rotation += 1;
      ctx.rotate(Math.PI / 180 * 0.05);
    } else {
      turnX = 0;
    }
  }

  counter += 1;
  score += 1;
  if (!paused) requestAnimationFrame(animate);
}; // const interval = setInterval(animate, 10);
// animate();
//on keydown the horizon rotates to a certain point
//on keyup the horizon returns to its initial state
//as the horizon shifts enemy elements/obstacles shift too
//they also add or decrease their x position depending on the key direction
//variable for time elapsed === high score
//high score saved and displayed
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3Rha2VfZmxpZ2h0Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0aXRsZUNhcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXVzZUNhcmQiLCJnYW1lT3ZlckNhcmQiLCJpbnN0cnVjdGlvbkNhcmQiLCJkdW1teUNhcmQiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImJlZ2luIiwiYmVnaW5BZ2FpbiIsInByaW50SGlnaFNjb3JlIiwibmV3SGlnaFNjb3JlIiwiY250cmwiLCJjdHgiLCJnZXRDb250ZXh0IiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJzcGFjZVByZXNzZWQiLCJ0dXJuWCIsInkiLCJzY29yZSIsImhpU2NvcmUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm90YXRpb24iLCJjb3VudGVyIiwiY2FjdGlDb2xvcnMiLCJjYWN0aSIsImdhbWUiLCJwYXVzZWQiLCJiaXJkSW1nIiwiSW1hZ2UiLCJzcmMiLCJjb250cm9scyIsImNvbnRyb2xMIiwiY29udHJvbFIiLCJjYWN0dXMxIiwiY2FjdHVzMiIsImNhY3R1czMiLCJjYWN0dXM0IiwiY2FjdHVzNSIsImNhY3R1czYiLCJjYWN0dXM3IiwiY2FjdHVzOCIsImNsb3VkMSIsImNsb3VkMiIsImluc3RLZXkiLCJjYWN0dXNCaW4iLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsImNsb3VkUG9zaXRpb25zIiwiY2xvdWQzIiwiY2xvdWQ0IiwidHJhbnNsYXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3RhcnRHYW1lIiwiYW5pbWF0ZSIsInJlbW92ZSIsImhhbmRsZUNsaWNrIiwibG9jYXRpb24iLCJyZWxvYWQiLCJvcGVuQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kR2FtZSIsImlubmVySFRNTCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJkcmF3SG9yaXpvbiIsImJlZ2luUGF0aCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwiZHJhd1Njb3JlIiwiZm9udCIsImZpbGxUZXh0IiwiZHJhd0hpU2NvcmUiLCJudW1iZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiTnVtYmVyIiwicm90YXRlQ2FtIiwibnVtIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0JpcmQiLCJzYXZlIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImRyYXdJbnN0cnVjdGlvbnMiLCJkcmF3Q2FjdHVzIiwieCIsInciLCJoIiwiY29sb3IiLCJzcGF3bkNhY3RpIiwiY2VpbCIsInJhbmRvbSIsInJvdW5kIiwiZmxvb3IiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiaEluaXRpYWwiLCJ5T3JkIiwiZHJhd0Nsb3VkcyIsIm1vdmVDbG91ZHMiLCJjbG91ZCIsImZpbHRlckNhY3RpIiwiZmlsdGVyIiwiY2FjdHVzIiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsImNhY3R1c0hpdCIsImxlZnRIaXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLElBQU1FLFlBQVksR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFyQjtBQUNBLElBQU1HLGVBQWUsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUF4QjtBQUNBLElBQU1JLFNBQVMsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBQ0EsSUFBTUssTUFBTSxHQUFHTixRQUFRLENBQUNPLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBZjtBQUNBLElBQU1DLEtBQUssR0FBR1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7QUFDQSxJQUFNUSxVQUFVLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1TLGNBQWMsR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQXZCO0FBQ0EsSUFBTVUsWUFBWSxHQUFHWCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXJCO0FBQ0EsSUFBTVcsS0FBSyxHQUFHWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZDtBQUNBLElBQU1ZLEdBQUcsR0FBR1AsTUFBTSxDQUFDUSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxJQUFJQyxZQUFZLEdBQUcsS0FBbkI7QUFDQSxJQUFJQyxXQUFXLEdBQUcsS0FBbEI7QUFDQSxJQUFJQyxZQUFZLEdBQUcsS0FBbkI7QUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLElBQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxJQUFJQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsU0FBckIsQ0FBWCxLQUErQyxDQUE3RDtBQUNBLElBQUlDLFFBQVEsR0FBRyxDQUFmO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxJQUFJQyxXQUFXLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixFQUFrQyxTQUFsQyxDQUFsQjtBQUNBLElBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLEtBQVg7QUFDQSxJQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUVBLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxLQUFKLEVBQWhCO0FBQ0FELE9BQU8sQ0FBQ0UsR0FBUixHQUFjLCtCQUFkO0FBRUEsSUFBTUMsUUFBUSxHQUFHLElBQUlGLEtBQUosRUFBakI7QUFDQUUsUUFBUSxDQUFDRCxHQUFULEdBQWUscUJBQWY7QUFFQSxJQUFNRSxRQUFRLEdBQUcsSUFBSUgsS0FBSixFQUFqQjtBQUNBRyxRQUFRLENBQUNGLEdBQVQsR0FBZSx5QkFBZjtBQUVBLElBQU1HLFFBQVEsR0FBRyxJQUFJSixLQUFKLEVBQWpCO0FBQ0FJLFFBQVEsQ0FBQ0gsR0FBVCxHQUFlLDBCQUFmO0FBRUEsSUFBTUksT0FBTyxHQUFHLElBQUlMLEtBQUosRUFBaEI7QUFDQUssT0FBTyxDQUFDSixHQUFSLEdBQWMsK0JBQWQ7QUFFQSxJQUFNSyxPQUFPLEdBQUcsSUFBSU4sS0FBSixFQUFoQjtBQUNBTSxPQUFPLENBQUNMLEdBQVIsR0FBYywrQkFBZDtBQUVBLElBQU1NLE9BQU8sR0FBRyxJQUFJUCxLQUFKLEVBQWhCO0FBQ0FPLE9BQU8sQ0FBQ04sR0FBUixHQUFjLCtCQUFkO0FBRUEsSUFBTU8sT0FBTyxHQUFHLElBQUlSLEtBQUosRUFBaEI7QUFDQVEsT0FBTyxDQUFDUCxHQUFSLEdBQWMsK0JBQWQ7QUFFQSxJQUFNUSxPQUFPLEdBQUcsSUFBSVQsS0FBSixFQUFoQjtBQUNBUyxPQUFPLENBQUNSLEdBQVIsR0FBYywrQkFBZDtBQUVBLElBQU1TLE9BQU8sR0FBRyxJQUFJVixLQUFKLEVBQWhCO0FBQ0FVLE9BQU8sQ0FBQ1QsR0FBUixHQUFjLCtCQUFkO0FBRUEsSUFBTVUsT0FBTyxHQUFHLElBQUlYLEtBQUosRUFBaEI7QUFDQVcsT0FBTyxDQUFDVixHQUFSLEdBQWMsK0JBQWQ7QUFFQSxJQUFNVyxPQUFPLEdBQUcsSUFBSVosS0FBSixFQUFoQjtBQUNBWSxPQUFPLENBQUNYLEdBQVIsR0FBYywrQkFBZDtBQUVBLElBQU1ZLE1BQU0sR0FBRyxJQUFJYixLQUFKLEVBQWY7QUFDQWEsTUFBTSxDQUFDWixHQUFQLEdBQWEsK0JBQWI7QUFFQSxJQUFNYSxNQUFNLEdBQUcsSUFBSWQsS0FBSixFQUFmO0FBQ0FjLE1BQU0sQ0FBQ2IsR0FBUCxHQUFhLCtCQUFiO0FBRUEsSUFBSWMsT0FBTyxHQUFHYixRQUFkO0FBRUEsSUFBTWMsU0FBUyxHQUFHLENBQ2hCO0FBQUVDLEtBQUcsRUFBRVosT0FBUDtBQUFnQmEsT0FBSyxFQUFFLEdBQXZCO0FBQTRCQyxRQUFNLEVBQUU7QUFBcEMsQ0FEZ0IsRUFFaEI7QUFBRUYsS0FBRyxFQUFFWCxPQUFQO0FBQWdCWSxPQUFLLEVBQUUsR0FBdkI7QUFBNEJDLFFBQU0sRUFBRTtBQUFwQyxDQUZnQixFQUdoQjtBQUFFRixLQUFHLEVBQUVWLE9BQVA7QUFBZ0JXLE9BQUssRUFBRSxHQUF2QjtBQUE0QkMsUUFBTSxFQUFFO0FBQXBDLENBSGdCLEVBSWhCO0FBQUVGLEtBQUcsRUFBRVQsT0FBUDtBQUFnQlUsT0FBSyxFQUFFLEdBQXZCO0FBQTRCQyxRQUFNLEVBQUU7QUFBcEMsQ0FKZ0IsRUFLaEI7QUFBRUYsS0FBRyxFQUFFUixPQUFQO0FBQWdCUyxPQUFLLEVBQUUsR0FBdkI7QUFBNEJDLFFBQU0sRUFBRTtBQUFwQyxDQUxnQixFQU1oQjtBQUFFRixLQUFHLEVBQUVQLE9BQVA7QUFBZ0JRLE9BQUssRUFBRSxHQUF2QjtBQUE0QkMsUUFBTSxFQUFFO0FBQXBDLENBTmdCLEVBT2hCO0FBQUVGLEtBQUcsRUFBRU4sT0FBUDtBQUFnQk8sT0FBSyxFQUFFLEdBQXZCO0FBQTRCQyxRQUFNLEVBQUU7QUFBcEMsQ0FQZ0IsRUFRaEI7QUFBRUYsS0FBRyxFQUFFTCxPQUFQO0FBQWdCTSxPQUFLLEVBQUUsRUFBdkI7QUFBMkJDLFFBQU0sRUFBRTtBQUFuQyxDQVJnQixDQUFsQjtBQVdBLElBQUlDLGNBQWMsR0FBRztBQUNuQlAsUUFBTSxFQUFFLEdBRFc7QUFFbkJDLFFBQU0sRUFBRSxDQUFDLEdBRlU7QUFHbkJPLFFBQU0sRUFBRSxDQUFDLEdBSFU7QUFJbkJDLFFBQU0sRUFBRTtBQUpXLENBQXJCO0FBUUExQyxHQUFHLENBQUMyQyxTQUFKLENBQWMsR0FBZCxFQUFtQixHQUFuQjtBQUNBbEQsTUFBTSxDQUFDbUQsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckI7QUFDQXZELFlBQVksQ0FBQ3NELFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0F0RCxlQUFlLENBQUNxRCxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsUUFBOUIsRSxDQUNBO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRixJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCO0FBQ0E7QUFDQUMsU0FBTztBQUNQQSxTQUFPO0FBQ1B0RCxRQUFNLENBQUNtRCxTQUFQLENBQWlCSSxNQUFqQixDQUF3QixRQUF4QjtBQUNBOUQsV0FBUyxDQUFDMEQsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsUUFBeEI7QUFDQXJELFdBQVMsQ0FBQ29ELFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCO0FBQ0F0RCxpQkFBZSxDQUFDcUQsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFFBQTlCO0FBQ0E1QixNQUFJLEdBQUcsSUFBUDtBQUNELENBVkQ7O0FBYUEsSUFBTWdDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEI5RCxVQUFRLENBQUMrRCxRQUFULENBQWtCQyxNQUFsQjtBQUNELENBRkQ7O0FBSUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QmxFLFdBQVMsQ0FBQzBELFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCO0FBQ0F0RCxpQkFBZSxDQUFDcUQsU0FBaEIsQ0FBMEJJLE1BQTFCLENBQWlDLFFBQWpDO0FBQ0QsQ0FIRCxDLENBS0E7OztBQUNBakQsS0FBSyxDQUFDc0QsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NELFlBQWhDOztBQUVBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBSTlDLE9BQU8sS0FBS0QsS0FBaEIsRUFBdUI7QUFDckJULGdCQUFZLENBQUM4QyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixNQUEzQjtBQUNEOztBQUNEaEQsZ0JBQWMsQ0FBQzBELFNBQWYsb0JBQXFDaEQsS0FBckM7QUFDQXBCLFVBQVEsQ0FBQ3FFLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDQyxjQUF4QyxFQUF3RCxLQUF4RDtBQUNBdEUsVUFBUSxDQUFDcUUsbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0NFLFlBQXRDLEVBQW9ELEtBQXBEO0FBQ0FqRSxRQUFNLENBQUNtRCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixRQUFyQjtBQUNBdkQsY0FBWSxDQUFDc0QsU0FBYixDQUF1QkksTUFBdkIsQ0FBOEIsUUFBOUI7QUFDQXhELFdBQVMsQ0FBQ29ELFNBQVYsQ0FBb0JJLE1BQXBCLENBQTJCLFFBQTNCO0FBQ0FwRCxZQUFVLENBQUN5RCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQ0osV0FBckM7QUFDRCxDQVhEOztBQWNBLElBQU1RLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0UsQ0FBRCxFQUFPO0FBQzVCLE1BQUlBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQVQsSUFBb0JELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFlBQWpDLEVBQStDO0FBQzdDMUQsZ0JBQVksR0FBRyxJQUFmO0FBQ0QsR0FGRCxNQUdLLElBQUl5RCxDQUFDLENBQUNDLEdBQUYsSUFBUyxNQUFULElBQW1CRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxXQUFoQyxFQUE2QztBQUNoRHpELGVBQVcsR0FBRyxJQUFkO0FBQ0QsR0FGSSxNQUVFLElBQUl3RCxDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFWLElBQWlCRCxDQUFDLENBQUNDLEdBQUYsS0FBVSxVQUEvQixFQUEyQztBQUNoRHhELGdCQUFZLEdBQUcsSUFBZjtBQUNEO0FBQ0YsQ0FURDs7QUFXQSxJQUFNc0QsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzFCLE1BQUlBLENBQUMsQ0FBQ0MsR0FBRixJQUFTLE9BQVQsSUFBb0JELENBQUMsQ0FBQ0MsR0FBRixJQUFTLFlBQWpDLEVBQStDO0FBQzdDMUQsZ0JBQVksR0FBRyxLQUFmO0FBQ0QsR0FGRCxNQUdLLElBQUl5RCxDQUFDLENBQUNDLEdBQUYsSUFBUyxNQUFULElBQW1CRCxDQUFDLENBQUNDLEdBQUYsSUFBUyxXQUFoQyxFQUE2QztBQUNoRHpELGVBQVcsR0FBRyxLQUFkO0FBQ0QsR0FGSSxNQUVFLElBQUl3RCxDQUFDLENBQUNDLEdBQUYsS0FBVSxHQUFWLElBQWlCRCxDQUFDLENBQUNDLEdBQUYsS0FBVSxVQUEvQixFQUEyQztBQUNoRCxRQUFJM0MsSUFBSixFQUFVO0FBQ1IsVUFBSUMsTUFBSixFQUFZO0FBQ1ZBLGNBQU0sR0FBRyxLQUFUO0FBQ0E3QixpQkFBUyxDQUFDdUQsU0FBVixDQUFvQkksTUFBcEIsQ0FBMkIsTUFBM0I7QUFDQUQsZUFBTztBQUNQQSxlQUFPO0FBQ1IsT0FMRCxNQUtPO0FBQ0w3QixjQUFNLEdBQUcsSUFBVDtBQUNBN0IsaUJBQVMsQ0FBQ3VELFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLE1BQXhCO0FBQ0Q7QUFDRixLQVZELE1BVU87QUFDTEMsZUFBUztBQUNWOztBQUNEMUMsZ0JBQVksR0FBRyxLQUFmO0FBQ0Q7QUFDRixDQXRCRDs7QUF3QkFqQixRQUFRLENBQUNrRSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0ksY0FBckMsRUFBcUQsS0FBckQ7QUFDQXRFLFFBQVEsQ0FBQ2tFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DSyxZQUFuQyxFQUFpRCxLQUFqRDs7QUFFQSxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCN0QsS0FBRyxDQUFDOEQsU0FBSjtBQUNBOUQsS0FBRyxDQUFDK0QsSUFBSixDQUFTLENBQUMsSUFBVixFQUFnQnpELENBQWhCLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCO0FBRUFOLEtBQUcsQ0FBQ2dFLFNBQUosR0FBZ0IsU0FBaEI7QUFDQWhFLEtBQUcsQ0FBQ2lFLElBQUo7QUFDQWpFLEtBQUcsQ0FBQ2tFLFNBQUo7QUFDRCxDQVBELEMsQ0FTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLE1BQUk1RCxLQUFLLEdBQUcsSUFBWixFQUFrQjtBQUNoQlAsT0FBRyxDQUFDb0UsSUFBSixHQUFXLGdCQUFYO0FBQ0FwRSxPQUFHLENBQUNnRSxTQUFKLEdBQWdCLFNBQWhCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xoRSxPQUFHLENBQUNvRSxJQUFKLEdBQVcsZ0JBQVg7QUFDQXBFLE9BQUcsQ0FBQ2dFLFNBQUosR0FBZ0IsU0FBaEI7QUFDRDs7QUFDRGhFLEtBQUcsQ0FBQ3FFLFFBQUosQ0FBYSxZQUFZOUQsS0FBekIsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBQyxDQUFwQztBQUVELENBVkQ7O0FBWUEsSUFBTStELFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsTUFBSSxPQUFPOUQsT0FBUCxJQUFrQixRQUF0QixFQUFnQ0EsT0FBTyxHQUFHQSxPQUFPLENBQUMrRCxNQUFsQjs7QUFFaEMsTUFBSWhFLEtBQUssR0FBR0MsT0FBWixFQUFxQjtBQUNuQkEsV0FBTyxHQUFHRCxLQUFWO0FBQ0FJLGdCQUFZLENBQUM2RCxPQUFiLENBQXFCLFNBQXJCLEVBQWdDL0QsSUFBSSxDQUFDZ0UsU0FBTCxDQUFlO0FBQzdDRixZQUFNLEVBQUVHLE1BQU0sQ0FBQ25FLEtBQUQ7QUFEK0IsS0FBZixDQUFoQztBQUdEOztBQUVEUCxLQUFHLENBQUNvRSxJQUFKLEdBQVcsZ0JBQVg7QUFDQXBFLEtBQUcsQ0FBQ2dFLFNBQUosR0FBZ0IsS0FBaEI7QUFFQWhFLEtBQUcsQ0FBQ3FFLFFBQUosQ0FBYSxpQkFBaUI3RCxPQUE5QixFQUF1QyxDQUF2QyxFQUEwQyxDQUFDLEVBQTNDO0FBRUQsQ0FmRDs7QUFpQkEsSUFBTW1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLEdBQUQsRUFBUztBQUN6QixNQUFJQSxHQUFHLEdBQUcsR0FBTixJQUFhQSxHQUFHLEdBQUcsQ0FBdkIsRUFBMEI7QUFDeEIsV0FBTzVFLEdBQUcsQ0FBQzZFLE1BQUosQ0FBWUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQixJQUE3QixDQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlILEdBQUcsR0FBRyxDQUFDLEdBQVAsSUFBY0EsR0FBRyxHQUFHLENBQXhCLEVBQTJCO0FBQ2hDLFdBQU81RSxHQUFHLENBQUM2RSxNQUFKLENBQVlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQVgsR0FBa0IsQ0FBQyxJQUE5QixDQUFQO0FBQ0Q7QUFDRixDQU5EOztBQVFBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJoRixLQUFHLENBQUNpRixJQUFKO0FBRUFqRixLQUFHLENBQUMyQyxTQUFKLENBQWMsQ0FBZCxFQUFpQixHQUFqQjtBQUNBM0MsS0FBRyxDQUFDNkUsTUFBSixDQUFZQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFYLEdBQWtCLEVBQUdsRSxRQUFRLEdBQUcsR0FBWixHQUFvQixDQUF0QixDQUE3QixFQUpxQixDQU1yQjtBQUNBO0FBQ0E7O0FBQ0FiLEtBQUcsQ0FBQ2tGLFNBQUosQ0FBYy9ELE9BQWQsRUFBdUIsQ0FBQyxHQUF4QixFQUE2QixDQUFDLEVBQTlCLEVBQWtDLEdBQWxDLEVBQXVDLEdBQXZDLEVBVHFCLENBVXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQW5CLEtBQUcsQ0FBQ21GLE9BQUo7QUFDRCxDQW5CRDs7QUFxQkEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCcEYsS0FBRyxDQUFDaUYsSUFBSjtBQUVBakYsS0FBRyxDQUFDMkMsU0FBSixDQUFjLENBQWQsRUFBaUIsRUFBakI7QUFDQTNDLEtBQUcsQ0FBQzZFLE1BQUosQ0FBWUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQixFQUFHbEUsUUFBUSxHQUFHLENBQVosR0FBaUIsRUFBbkIsQ0FBN0I7O0FBRUEsTUFBSU4sS0FBSyxHQUFHLEdBQVIsSUFBZUEsS0FBSyxHQUFHLEdBQTNCLEVBQWdDO0FBQzlCUCxPQUFHLENBQUNrRixTQUFKLENBQWMvQyxPQUFkLEVBQXVCLENBQUMsR0FBeEIsRUFBNkIsR0FBN0IsRUFBa0MsR0FBbEMsRUFBdUMsRUFBdkM7QUFDRDs7QUFFRG5DLEtBQUcsQ0FBQ21GLE9BQUo7QUFDRCxDQVhEOztBQWFBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBSWhGLENBQUosRUFBT2lGLENBQVAsRUFBVUMsQ0FBVixFQUFhQyxLQUFiLEVBQW9CcEQsR0FBcEIsRUFBNEI7QUFDN0NyQyxLQUFHLENBQUNpRixJQUFKO0FBQ0FqRixLQUFHLENBQUNrRixTQUFKLENBQWM3QyxHQUFkLEVBQW1CaUQsQ0FBbkIsRUFBc0JoRixDQUF0QixFQUF5QmlGLENBQXpCLEVBQTRCQyxDQUE1QixFQUY2QyxDQUc3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBeEYsS0FBRyxDQUFDbUYsT0FBSjtBQUNELENBVEQ7O0FBV0EsSUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFJSixDQUFDLEdBQUdSLElBQUksQ0FBQ2EsSUFBTCxDQUFVYixJQUFJLENBQUNjLE1BQUwsS0FBZ0IsR0FBMUIsS0FBa0NkLElBQUksQ0FBQ2UsS0FBTCxDQUFXZixJQUFJLENBQUNjLE1BQUwsRUFBWCxJQUE0QixDQUE1QixHQUFnQyxDQUFDLENBQW5FLENBQVI7QUFDQSxNQUFJSCxLQUFLLEdBQUcxRSxXQUFXLENBQUMrRCxJQUFJLENBQUNnQixLQUFMLENBQVdoQixJQUFJLENBQUNjLE1BQUwsS0FBZ0I3RSxXQUFXLENBQUNnRixNQUF2QyxDQUFELENBQXZCO0FBQ0EsOEJBQTZCM0QsU0FBUyxDQUFDMEMsSUFBSSxDQUFDZ0IsS0FBTCxDQUFXaEIsSUFBSSxDQUFDYyxNQUFMLEtBQWdCeEQsU0FBUyxDQUFDMkQsTUFBckMsQ0FBRCxDQUF0QztBQUFBLE1BQU16RCxLQUFOLHlCQUFNQSxLQUFOO0FBQUEsTUFBYUMsTUFBYix5QkFBYUEsTUFBYjtBQUFBLE1BQXFCRixHQUFyQix5QkFBcUJBLEdBQXJCO0FBQ0FyQixPQUFLLENBQUNnRixPQUFOLENBQWM7QUFDWlYsS0FBQyxFQUFFQSxDQURTO0FBRVpoRixLQUFDLEVBQUUsQ0FBQyxHQUZRO0FBR1pnQyxTQUFLLEVBQUVBLEtBSEs7QUFJWkMsVUFBTSxFQUFFQSxNQUpJO0FBS1prRCxTQUFLLEVBQUVBLEtBTEs7QUFNWlEsWUFBUSxFQUFFLENBTkU7QUFPWkMsUUFBSSxFQUFFLENBUE07QUFRWjdELE9BQUcsRUFBRUE7QUFSTyxHQUFkLEVBSnVCLENBY3ZCO0FBQ0QsQ0FmRDs7QUFpQkEsSUFBTThELFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJuRyxLQUFHLENBQUNrRixTQUFKLENBQWNqRCxNQUFkLEVBQXNCTyxjQUFjLENBQUNQLE1BQXJDLEVBQTZDLENBQUMsR0FBOUMsRUFBbUQsR0FBbkQsRUFBd0QsR0FBeEQ7QUFDQWpDLEtBQUcsQ0FBQ2tGLFNBQUosQ0FBY2hELE1BQWQsRUFBc0JNLGNBQWMsQ0FBQ04sTUFBckMsRUFBNkMsQ0FBQyxHQUE5QyxFQUFtRCxHQUFuRCxFQUF3RCxHQUF4RDtBQUNBbEMsS0FBRyxDQUFDa0YsU0FBSixDQUFjakQsTUFBZCxFQUFzQk8sY0FBYyxDQUFDQyxNQUFyQyxFQUE2QyxDQUFDLEdBQTlDLEVBQW1ELEdBQW5ELEVBQXdELEdBQXhEO0FBQ0F6QyxLQUFHLENBQUNrRixTQUFKLENBQWNoRCxNQUFkLEVBQXNCTSxjQUFjLENBQUNFLE1BQXJDLEVBQTZDLENBQUMsR0FBOUMsRUFBbUQsR0FBbkQsRUFBd0QsR0FBeEQ7QUFDRCxDQUxEOztBQU9BLElBQU0wRCxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDeEIsR0FBRCxFQUFTO0FBQzFCLE9BQUssSUFBTXlCLEtBQVgsSUFBb0I3RCxjQUFwQixFQUFvQztBQUNsQ0Esa0JBQWMsQ0FBQzZELEtBQUQsQ0FBZCxJQUF5QnpCLEdBQXpCO0FBQ0Q7QUFDRixDQUpEOztBQU1BLElBQU0wQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCdEYsT0FBSyxHQUFHQSxLQUFLLENBQUN1RixNQUFOLENBQWEsVUFBQUMsTUFBTTtBQUFBLFdBQU1BLE1BQU0sQ0FBQ2xHLENBQVIsR0FBYSxHQUFsQjtBQUFBLEdBQW5CLENBQVI7QUFDRCxDQUZEOztBQUlBLElBQU15QyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBRXBCL0MsS0FBRyxDQUFDeUcsU0FBSixDQUFjLENBQUMsSUFBZixFQUFxQixDQUFDLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLElBQWxDO0FBQ0FILGFBQVc7QUFDWHpDLGFBQVc7QUFDWHVCLGtCQUFnQjtBQUNoQmUsWUFBVSxHQU5VLENBT3BCOztBQUNBaEMsV0FBUztBQUNURyxhQUFXO0FBQ1hVLFVBQVEsR0FWWSxDQVlwQjs7QUFDQSxNQUFJbEUsT0FBTyxLQUFLLEVBQWhCLEVBQW9CO0FBQ2xCNEUsY0FBVTtBQUNWNUUsV0FBTyxHQUFHLENBQVY7QUFDRDs7QUFHREUsT0FBSyxDQUFDMEYsT0FBTixDQUFjLFVBQUFGLE1BQU0sRUFBSTtBQUN0QkEsVUFBTSxDQUFDbEIsQ0FBUCxJQUFZakYsS0FBWjtBQUNBLFFBQUltRixDQUFDLEdBQUdnQixNQUFNLENBQUNqRSxNQUFmOztBQUNBLFFBQUlpRSxNQUFNLENBQUNQLFFBQVAsR0FBa0JPLE1BQU0sQ0FBQ2pFLE1BQTdCLEVBQXFDO0FBQ25DaUUsWUFBTSxDQUFDUCxRQUFQLElBQW1CLENBQW5CO0FBQ0FULE9BQUMsR0FBR2dCLE1BQU0sQ0FBQ1AsUUFBWDtBQUNBTyxZQUFNLENBQUNOLElBQVAsSUFBZSxDQUFmO0FBQ0QsS0FKRCxNQUlPO0FBQ0xNLFlBQU0sQ0FBQ04sSUFBUCxJQUFlLElBQWY7QUFDQU0sWUFBTSxDQUFDbEcsQ0FBUCxJQUFZLElBQVosQ0FGSyxDQUdMO0FBQ0E7QUFDQTs7QUFDQWtHLFlBQU0sQ0FBQ1AsUUFBUCxHQUFrQk8sTUFBTSxDQUFDakUsTUFBekI7QUFDRCxLQWRxQixDQWdCdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsUUFBSWlFLE1BQU0sQ0FBQ2xHLENBQVAsR0FBVyxDQUFmLEVBQWtCLENBQ2hCO0FBQ0QsS0E5QnFCLENBZ0N0Qjs7O0FBQ0EsUUFBSWtHLE1BQU0sQ0FBQ2xHLENBQVAsR0FBVyxDQUFDLEVBQWhCLEVBQW9CO0FBQ2xCLFVBQUlrRyxNQUFNLENBQUNsQixDQUFQLEdBQVcsR0FBZixFQUFvQjtBQUNsQmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxJQUFaO0FBQ0QsT0FGRCxNQUVPLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsQ0FBQyxHQUFoQixFQUFxQjtBQUMxQmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxJQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsRUFBZixFQUFtQjtBQUN4QmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxHQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsQ0FBQyxFQUFoQixFQUFvQjtBQUN6QmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxHQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsRUFBZixFQUFtQjtBQUN4QmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxHQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsQ0FBQyxFQUFoQixFQUFvQjtBQUN6QmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxHQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsRUFBZixFQUFtQjtBQUN4QmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxHQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsQ0FBQyxFQUFoQixFQUFvQjtBQUN6QmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxHQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsRUFBZixFQUFtQjtBQUN4QmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxJQUFaO0FBQ0QsT0FGTSxNQUVBLElBQUlrQixNQUFNLENBQUNsQixDQUFQLEdBQVcsQ0FBQyxFQUFoQixFQUFvQjtBQUN6QmtCLGNBQU0sQ0FBQ2xCLENBQVAsSUFBWSxJQUFaO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJcUIsU0FBUyxHQUFHSCxNQUFNLENBQUNsRyxDQUF2QjtBQUNBLFFBQUlzRyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ2xCLENBQVAsR0FBWWtCLE1BQU0sQ0FBQ2xFLEtBQVAsR0FBZSxDQUF6Qzs7QUFFQSxRQUFLa0UsTUFBTSxDQUFDbEcsQ0FBUCxHQUFXLEVBQVgsSUFBaUJrRyxNQUFNLENBQUNsRyxDQUFQLEdBQVcsQ0FBN0IsSUFBb0NzRyxPQUFPLEdBQUcsQ0FBQyxHQUFYLElBQWtCQSxPQUFPLEdBQUcsR0FBcEUsRUFBMEU7QUFDeEU7QUFDQTtBQUNBM0YsVUFBSSxHQUFHLEtBQVA7QUFDQUMsWUFBTSxHQUFHLElBQVQ7QUFDQW9DLGFBQU8sR0FMaUUsQ0FNeEU7QUFDRDs7QUFFRCtCLGNBQVUsQ0FBQ21CLE1BQU0sQ0FBQ2xCLENBQVIsRUFBV2tCLE1BQU0sQ0FBQ04sSUFBbEIsRUFBd0JNLE1BQU0sQ0FBQ2xFLEtBQS9CLEVBQXNDa0QsQ0FBdEMsRUFBeUNnQixNQUFNLENBQUNmLEtBQWhELEVBQXVEZSxNQUFNLENBQUNuRSxHQUE5RCxDQUFWO0FBQ0QsR0F0RUQ7O0FBd0VBLE1BQUlsQyxXQUFKLEVBQWlCO0FBQ2ZnQyxXQUFPLEdBQUdaLFFBQVY7O0FBQ0EsUUFBSWxCLEtBQUssSUFBSSxDQUFiLEVBQWlCO0FBQ2ZBLFdBQUssSUFBSSxLQUFUO0FBQ0QsS0FGRCxNQUVPLElBQUlBLEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBRyxHQUF6QixFQUE4QjtBQUNuQ0EsV0FBSyxJQUFJLEtBQVQ7QUFDRDs7QUFDRCtGLGNBQVUsQ0FBQyxJQUFELENBQVYsQ0FQZSxDQU9HOztBQUNsQixRQUFJdkYsUUFBUSxHQUFHLEdBQVgsSUFBa0JBLFFBQVEsSUFBSSxDQUFsQyxFQUFxQztBQUNuQ0EsY0FBUSxJQUFJLENBQVo7QUFDQThELGVBQVMsQ0FBQzlELFFBQUQsQ0FBVDtBQUNELEtBSEQsTUFHTyxJQUFJQSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUN2QkEsY0FBUSxJQUFJLENBQVo7QUFDQWIsU0FBRyxDQUFDNkUsTUFBSixDQUFZQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFYLEdBQWtCLElBQTdCO0FBQ0Q7QUFDRixHQWZELE1BZU8sSUFBSTdFLFlBQUosRUFBa0I7QUFDdkJpQyxXQUFPLEdBQUdYLFFBQVY7O0FBQ0EsUUFBSW5CLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ2RBLFdBQUssSUFBSSxLQUFUO0FBQ0QsS0FGRCxNQUVPLElBQUlBLEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBRyxDQUFDLEdBQTFCLEVBQStCO0FBQ3BDQSxXQUFLLElBQUksSUFBVDtBQUNEOztBQUNEK0YsY0FBVSxDQUFDLENBQUMsSUFBRixDQUFWLENBUHVCLENBT0o7O0FBQ25CLFFBQUl2RixRQUFRLEdBQUcsQ0FBQyxHQUFaLElBQW1CQSxRQUFRLElBQUksQ0FBbkMsRUFBc0M7QUFDcENBLGNBQVEsSUFBSSxDQUFaO0FBQ0E4RCxlQUFTLENBQUM5RCxRQUFELENBQVQ7QUFDRCxLQUhELE1BR08sSUFBSUEsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDdkJBLGNBQVEsSUFBSSxDQUFaO0FBQ0FiLFNBQUcsQ0FBQzZFLE1BQUosQ0FBWUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQixDQUFDLElBQTlCO0FBQ0Q7QUFDRixHQWZNLE1BZUE7QUFDTDVDLFdBQU8sR0FBR2IsUUFBVjs7QUFDQSxRQUFJVCxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUNoQkEsY0FBUSxJQUFJLENBQVo7QUFDQWIsU0FBRyxDQUFDNkUsTUFBSixDQUFZQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFYLEdBQWtCLENBQUMsSUFBOUI7QUFDRCxLQUhELE1BR08sSUFBSWxFLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ3ZCQSxjQUFRLElBQUksQ0FBWjtBQUNBYixTQUFHLENBQUM2RSxNQUFKLENBQVlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQVgsR0FBa0IsSUFBN0I7QUFDRCxLQUhNLE1BR0E7QUFDTDFFLFdBQUssR0FBRyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRFMsU0FBTyxJQUFJLENBQVg7QUFDQVAsT0FBSyxJQUFJLENBQVQ7QUFDQSxNQUFJLENBQUNXLE1BQUwsRUFBYTJGLHFCQUFxQixDQUFDOUQsT0FBRCxDQUFyQjtBQUNkLENBeElELEMsQ0EySUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxnQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcblxuY29uc3QgdGl0bGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1jYXJkXCIpO1xuY29uc3QgcGF1c2VDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYXVzZS1jYXJkXCIpO1xuY29uc3QgZ2FtZU92ZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW92ZXItY2FyZFwiKTtcbmNvbnN0IGluc3RydWN0aW9uQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1Y3Rpb24tY2FyZFwiKTtcbmNvbnN0IGR1bW15Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVtbXktY2FudmFzXCIpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbHlDYW52YXNcIik7XG5jb25zdCBiZWdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVnaW5cIik7XG5jb25zdCBiZWdpbkFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZWdpbi1hZ2FpblwiKTtcbmNvbnN0IHByaW50SGlnaFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWdoLXNjb3JlXCIpO1xuY29uc3QgbmV3SGlnaFNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctaGlnaC1zY29yZVwiKTtcbmNvbnN0IGNudHJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250cm9sc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5sZXQgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG5sZXQgbGVmdFByZXNzZWQgPSBmYWxzZTtcbmxldCBzcGFjZVByZXNzZWQgPSBmYWxzZTtcbmxldCB0dXJuWCA9IDA7XG5sZXQgeSA9IDA7XG5sZXQgc2NvcmUgPSAwO1xubGV0IGhpU2NvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlTY29yZVwiKSkgfHwgMDtcbmxldCByb3RhdGlvbiA9IDA7XG5sZXQgY291bnRlciA9IDA7XG5sZXQgY2FjdGlDb2xvcnMgPSBbXCIjMDc2ZDA3XCIsIFwiIzJlN2EyZlwiLCBcIiNhMWQ2YTJcIiwgXCIjNWVmNzVlXCJdO1xubGV0IGNhY3RpID0gW107XG5sZXQgZ2FtZSA9IGZhbHNlO1xubGV0IHBhdXNlZCA9IGZhbHNlO1xuXG5jb25zdCBiaXJkSW1nID0gbmV3IEltYWdlKCk7XG5iaXJkSW1nLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wNS5wbmdcIjtcblxuY29uc3QgY29udHJvbHMgPSBuZXcgSW1hZ2UoKTtcbmNvbnRyb2xzLnNyYyA9IFwic3JjL2Fzc2V0cy9rZXlzLnBuZ1wiO1xuXG5jb25zdCBjb250cm9sTCA9IG5ldyBJbWFnZSgpO1xuY29udHJvbEwuc3JjID0gXCJzcmMvYXNzZXRzL2tleV9sZWZ0LnBuZ1wiO1xuXG5jb25zdCBjb250cm9sUiA9IG5ldyBJbWFnZSgpO1xuY29udHJvbFIuc3JjID0gXCJzcmMvYXNzZXRzL2tleV9yaWdodC5wbmdcIjtcblxuY29uc3QgY2FjdHVzMSA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzMS5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDYucG5nXCI7XG5cbmNvbnN0IGNhY3R1czIgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czIuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTA3LnBuZ1wiO1xuXG5jb25zdCBjYWN0dXMzID0gbmV3IEltYWdlKCk7XG5jYWN0dXMzLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wOC5wbmdcIjtcblxuY29uc3QgY2FjdHVzNCA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzNC5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDkucG5nXCI7XG5cbmNvbnN0IGNhY3R1czUgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czUuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTEwLnBuZ1wiO1xuXG5jb25zdCBjYWN0dXM2ID0gbmV3IEltYWdlKCk7XG5jYWN0dXM2LnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0xMS5wbmdcIjtcblxuY29uc3QgY2FjdHVzNyA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzNy5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMTIucG5nXCI7XG5cbmNvbnN0IGNhY3R1czggPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czguc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTEzLnBuZ1wiO1xuXG5jb25zdCBjbG91ZDEgPSBuZXcgSW1hZ2UoKTtcbmNsb3VkMS5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDMucG5nXCI7XG5cbmNvbnN0IGNsb3VkMiA9IG5ldyBJbWFnZSgpO1xuY2xvdWQyLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wNC5wbmdcIjtcblxubGV0IGluc3RLZXkgPSBjb250cm9scztcblxuY29uc3QgY2FjdHVzQmluID0gW1xuICB7IGltZzogY2FjdHVzMSwgd2lkdGg6IDE4MCwgaGVpZ2h0OiAzMDAgfSxcbiAgeyBpbWc6IGNhY3R1czIsIHdpZHRoOiAxODAsIGhlaWdodDogMzAwIH0sXG4gIHsgaW1nOiBjYWN0dXMzLCB3aWR0aDogMTUwLCBoZWlnaHQ6IDI1MCB9LFxuICB7IGltZzogY2FjdHVzNCwgd2lkdGg6IDE1MCwgaGVpZ2h0OiAxNDAgfSxcbiAgeyBpbWc6IGNhY3R1czUsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH0sXG4gIHsgaW1nOiBjYWN0dXM2LCB3aWR0aDogMTcwLCBoZWlnaHQ6IDE1MCB9LFxuICB7IGltZzogY2FjdHVzNywgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxNTAgfSxcbiAgeyBpbWc6IGNhY3R1czgsIHdpZHRoOiA4MCwgaGVpZ2h0OiAyODAgfSxcbl07XG5cbnZhciBjbG91ZFBvc2l0aW9ucyA9IHtcbiAgY2xvdWQxOiAxMDAsXG4gIGNsb3VkMjogLTMzMCxcbiAgY2xvdWQzOiAtNzMwLFxuICBjbG91ZDQ6IDcwMCxcbn07XG5cblxuY3R4LnRyYW5zbGF0ZSg2NDAsIDM2MCk7XG5jYW52YXMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbmdhbWVPdmVyQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuaW5zdHJ1Y3Rpb25DYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4vLyBjb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gIC8vICAgYW5pbWF0ZSgpO1xuICAvLyAgIGFuaW1hdGUoKTtcbiAgLy8gICB0aXRsZUNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgLy8gICBnYW1lID0gdHJ1ZTtcbiAgLy8gfTtcbiAgXG5jb25zdCBzdGFydEdhbWUgPSAoKSA9PiB7XG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcbiAgYW5pbWF0ZSgpO1xuICBhbmltYXRlKCk7XG4gIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB0aXRsZUNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZHVtbXlDYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGluc3RydWN0aW9uQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBnYW1lID0gdHJ1ZTtcbn07XG5cblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuY29uc3Qgb3BlbkNvbnRyb2xzID0gKCkgPT4ge1xuICB0aXRsZUNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgaW5zdHJ1Y3Rpb25DYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59O1xuXG4vLyBiZWdpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcbmNudHJsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuQ29udHJvbHMpO1xuXG5jb25zdCBlbmRHYW1lID0gKCkgPT4ge1xuICBpZiAoaGlTY29yZSA9PT0gc2NvcmUpIHtcbiAgICBuZXdIaWdoU2NvcmUuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIH1cbiAgcHJpbnRIaWdoU2NvcmUuaW5uZXJIVE1MID0gYFNjb3JlOiAke3Njb3JlfWA7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGdhbWVPdmVyQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBkdW1teUNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgYmVnaW5BZ2Fpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xufTtcblxuXG5jb25zdCBrZXlEb3duSGFuZGxlciA9IChlKSA9PiB7XG4gIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleSA9PT0gJ1NwYWNlYmFyJykge1xuICAgIHNwYWNlUHJlc3NlZCA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGtleVVwSGFuZGxlciA9IChlKSA9PiB7XG4gIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnU3BhY2ViYXInKSB7XG4gICAgaWYgKGdhbWUpIHtcbiAgICAgIGlmIChwYXVzZWQpIHtcbiAgICAgICAgcGF1c2VkID0gZmFsc2U7XG4gICAgICAgIHBhdXNlQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICBhbmltYXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgICBwYXVzZUNhcmQuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0R2FtZSgpO1xuICAgIH1cbiAgICBzcGFjZVByZXNzZWQgPSBmYWxzZTtcbiAgfVxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGZhbHNlKTtcblxuY29uc3QgZHJhd0hvcml6b24gPSAoKSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnJlY3QoLTEwMDAsIHksIDIwMDAsIDE1MDApO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNlOGUyYTRcIjtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xufTtcblxuLy8gY29uc3QgZHJhd1JvdGF0aW9uID0gKCkgPT4ge1xuLy8gICBjdHguZm9udCA9IFwiMTZweCBBcmlhbFwiO1xuLy8gICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4vLyAgIGN0eC5maWxsVGV4dChcIlJvdGF0aW9uOiBcIiArIHJvdGF0aW9uLCAxLCAxKTtcbi8vIH07XG5cbmNvbnN0IGRyYXdTY29yZSA9ICgpID0+IHtcbiAgaWYgKHNjb3JlID4gNDAwMCkge1xuICAgIGN0eC5mb250ID0gXCIxOHB4IEhlbHZldGljYVwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgfSBlbHNlIHtcbiAgICBjdHguZm9udCA9IFwiMTZweCBIZWx2ZXRpY2FcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gIH1cbiAgY3R4LmZpbGxUZXh0KFwiU2NvcmU6IFwiICsgc2NvcmUsIDMsIC0zKTtcblxufTtcblxuY29uc3QgZHJhd0hpU2NvcmUgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2YgaGlTY29yZSAhPSBcIm51bWJlclwiKSBoaVNjb3JlID0gaGlTY29yZS5udW1iZXI7XG5cbiAgaWYgKHNjb3JlID4gaGlTY29yZSkge1xuICAgIGhpU2NvcmUgPSBzY29yZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlTY29yZScsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG51bWJlcjogTnVtYmVyKHNjb3JlKVxuICAgIH0pKTtcbiAgfVxuXG4gIGN0eC5mb250ID0gXCIxNnB4IEhlbHZldGljYVwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgXG4gIGN0eC5maWxsVGV4dChcIkhpZ2ggU2NvcmU6IFwiICsgaGlTY29yZSwgMywgLTIwKTtcblxufTtcblxuY29uc3Qgcm90YXRlQ2FtID0gKG51bSkgPT4ge1xuICBpZiAobnVtIDwgMTAwICYmIG51bSA+IDApIHtcbiAgICByZXR1cm4gY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAwLjA1KTtcbiAgfSBlbHNlIGlmIChudW0gPiAtMTAwICYmIG51bSA8IDApIHtcbiAgICByZXR1cm4gY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtMC4wNSk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYXdCaXJkID0gKCkgPT4ge1xuICBjdHguc2F2ZSgpO1xuICBcbiAgY3R4LnRyYW5zbGF0ZSgwLCAxNTApO1xuICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIC0oKHJvdGF0aW9uICogMC41ICkgLyA0KSk7XG5cbiAgLy8gY3R4LnNoYWRvd0JsdXIgPSA1MDtcbiAgLy8gY3R4LnNoYWRvd0NvbG9yID0gJ2JsYWNrJztcbiAgLy8gY3R4LnNoYWRvd09mZnNldFkgPSA4MDtcbiAgY3R4LmRyYXdJbWFnZShiaXJkSW1nLCAtMTI1LCAtNTAsIDI1MCwgMTAwKTtcbiAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAvLyAvLyBjdHgucmVjdCgtNjAsIC0xMCwgMTIwLCAyMCk7XG4gIC8vIGN0eC5yZWN0KC0xMjUsIC01MCwgMjUwLCAxMDApO1xuICAvLyBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gIC8vIGN0eC5maWxsKCk7XG4gIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgXG4gIFxuICBjdHgucmVzdG9yZSgpO1xufTtcblxuY29uc3QgZHJhd0luc3RydWN0aW9ucyA9ICgpID0+IHtcbiAgY3R4LnNhdmUoKTtcblxuICBjdHgudHJhbnNsYXRlKDAsIDUwKTtcbiAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtKChyb3RhdGlvbiAqIDEpIC8gMjUpKTtcblxuICBpZiAoc2NvcmUgPiAxNTAgJiYgc2NvcmUgPCA3MDApIHtcbiAgICBjdHguZHJhd0ltYWdlKGluc3RLZXksIC0xMDAsIDIwMCwgMjAwLCA3MCk7XG4gIH1cblxuICBjdHgucmVzdG9yZSgpO1xufTtcblxuY29uc3QgZHJhd0NhY3R1cyA9ICh4LCB5LCB3LCBoLCBjb2xvciwgaW1nKSA9PiB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5kcmF3SW1hZ2UoaW1nLCB4LCB5LCB3LCBoKTtcbiAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjdHgucmVjdCh4LCB5LCB3LCBoKTtcbiAgLy8gY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAvLyBjdHguZmlsbCgpO1xuICAvLyBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG5jb25zdCBzcGF3bkNhY3RpID0gKCkgPT4ge1xuICBsZXQgeCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogODQwKSAqIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID8gMSA6IC0xKTtcbiAgbGV0IGNvbG9yID0gY2FjdGlDb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FjdGlDb2xvcnMubGVuZ3RoKV07XG4gIGxldCB7IHdpZHRoLCBoZWlnaHQsIGltZyB9ID0gY2FjdHVzQmluW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhY3R1c0Jpbi5sZW5ndGgpXTtcbiAgY2FjdGkudW5zaGlmdCh7XG4gICAgeDogeCxcbiAgICB5OiAtMTAwLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICBjb2xvcjogY29sb3IsXG4gICAgaEluaXRpYWw6IDAsXG4gICAgeU9yZDogMCxcbiAgICBpbWc6IGltZ1xuICB9KTtcbiAgLy9hc3NpZ24gZGVmYXVsdCB2YXJpYWJsZXMgc3RvcmUgdGhlbSBpbiBvYmplY3RzXG59O1xuXG5jb25zdCBkcmF3Q2xvdWRzID0gKCkgPT4ge1xuICBjdHguZHJhd0ltYWdlKGNsb3VkMSwgY2xvdWRQb3NpdGlvbnMuY2xvdWQxLCAtMjAwLCAzMDAsIDIwMCk7XG4gIGN0eC5kcmF3SW1hZ2UoY2xvdWQyLCBjbG91ZFBvc2l0aW9ucy5jbG91ZDIsIC0zMDAsIDMwMCwgMTUwKTtcbiAgY3R4LmRyYXdJbWFnZShjbG91ZDEsIGNsb3VkUG9zaXRpb25zLmNsb3VkMywgLTIwMCwgMzAwLCAyMDApO1xuICBjdHguZHJhd0ltYWdlKGNsb3VkMiwgY2xvdWRQb3NpdGlvbnMuY2xvdWQ0LCAtMzAwLCAzMDAsIDE1MCk7XG59O1xuXG5jb25zdCBtb3ZlQ2xvdWRzID0gKG51bSkgPT4ge1xuICBmb3IgKGNvbnN0IGNsb3VkIGluIGNsb3VkUG9zaXRpb25zKSB7XG4gICAgY2xvdWRQb3NpdGlvbnNbY2xvdWRdICs9IG51bTtcbiAgfVxufTtcblxuY29uc3QgZmlsdGVyQ2FjdGkgPSAoKSA9PiB7XG4gIGNhY3RpID0gY2FjdGkuZmlsdGVyKGNhY3R1cyA9PiAoKGNhY3R1cy55KSA8IDU1MCkpO1xufTtcblxuY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgXG4gIGN0eC5jbGVhclJlY3QoLTEwMDAsIC0xMDAwLCAyMDAwLCAyMDAwKTtcbiAgZmlsdGVyQ2FjdGkoKTtcbiAgZHJhd0hvcml6b24oKTtcbiAgZHJhd0luc3RydWN0aW9ucygpO1xuICBkcmF3Q2xvdWRzKCk7XG4gIC8vIGRyYXdSb3RhdGlvbigpO1xuICBkcmF3U2NvcmUoKTtcbiAgZHJhd0hpU2NvcmUoKTtcbiAgZHJhd0JpcmQoKTtcblxuICAvL2NhY3R1cyBzcGF3biBmcmVxdWVuY3lcbiAgaWYgKGNvdW50ZXIgPT09IDU1KSB7XG4gICAgc3Bhd25DYWN0aSgpO1xuICAgIGNvdW50ZXIgPSAwO1xuICB9XG5cblxuICBjYWN0aS5mb3JFYWNoKGNhY3R1cyA9PiB7XG4gICAgY2FjdHVzLnggKz0gdHVyblg7XG4gICAgbGV0IGggPSBjYWN0dXMuaGVpZ2h0O1xuICAgIGlmIChjYWN0dXMuaEluaXRpYWwgPCBjYWN0dXMuaGVpZ2h0KSB7XG4gICAgICBjYWN0dXMuaEluaXRpYWwgKz0gMTtcbiAgICAgIGggPSBjYWN0dXMuaEluaXRpYWw7XG4gICAgICBjYWN0dXMueU9yZCAtPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWN0dXMueU9yZCArPSAxLjQ5O1xuICAgICAgY2FjdHVzLnkgKz0gMS40OTtcbiAgICAgIC8vIGNhY3R1cy53aWR0aCArPSBjYWN0dXMud2lkdGggKiAwLjAwMTQ7XG4gICAgICAvLyBjYWN0dXMuaGVpZ2h0ICs9IGNhY3R1cy5oZWlnaHQgKiAwLjAwMTQ7XG4gICAgICAvLyBjYWN0dXMuaGVpZ2h0ICo9IDEuMDAxNDtcbiAgICAgIGNhY3R1cy5oSW5pdGlhbCA9IGNhY3R1cy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy9jYWN0dXMgcmVtb3ZhbCBhbmltYXRpb24gYW5kIHlPcmQgc3BlZWQgY29udHJvbFxuICAgIC8vIGlmIChjYWN0dXMud2lkdGggPiA1MCkge1xuICAgIC8vICAgY2FjdHVzLnlPcmQgKz0gMTtcbiAgICAvLyAgIGNhY3R1cy5oZWlnaHQgLT0gMTtcbiAgICAvLyB9IGVsc2UgaWYgKGNhY3R1cy53aWR0aCA+IDI3KSB7XG4gICAgLy8gICBjYWN0dXMueU9yZCArPSAxO1xuICAgIC8vICAgLy8gY2FjdHVzLmNvbG9yID0gXCJibGFja1wiO1xuICAgIC8vIH0gZWxzZSBpZiAoY2FjdHVzLndpZHRoID4gMjMpIHtcbiAgICAvLyAgIGNhY3R1cy55T3JkICs9IDAuNTtcbiAgICAvLyAgIC8vIGNhY3R1cy5jb2xvciA9IFwicmVkXCI7XG4gICAgLy8gfVxuXG4gICAgaWYgKGNhY3R1cy55ID4gMCkge1xuICAgICAgLy8gY2FjdHVzLmNvbG9yID0gXCJyZWRcIjtcbiAgICB9XG5cbiAgICAvLyBjYWN0dXMgcGF0aCBjaGFuZ2UgdG8gYWNjb3VudCBmb3IgcGVyc3BlY3RpdmVcbiAgICBpZiAoY2FjdHVzLnkgPiAtOTApIHtcbiAgICAgIGlmIChjYWN0dXMueCA+IDEwMCkge1xuICAgICAgICBjYWN0dXMueCArPSAwLjU1O1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA8IC0xMDApIHtcbiAgICAgICAgY2FjdHVzLnggLT0gMC41NTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPiA2MCkge1xuICAgICAgICBjYWN0dXMueCArPSAwLjI7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54IDwgLTYwKSB7XG4gICAgICAgIGNhY3R1cy54IC09IDAuMjtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPiA4MCkge1xuICAgICAgICBjYWN0dXMueCArPSAwLjQ7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54IDwgLTgwKSB7XG4gICAgICAgIGNhY3R1cy54IC09IDAuNDtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPiA0MCkge1xuICAgICAgICBjYWN0dXMueCArPSAwLjE7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54IDwgLTQwKSB7XG4gICAgICAgIGNhY3R1cy54IC09IDAuMTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPiAyMCkge1xuICAgICAgICBjYWN0dXMueCArPSAwLjA1O1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA8IC0yMCkge1xuICAgICAgICBjYWN0dXMueCAtPSAwLjA1O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjYWN0dXNIaXQgPSBjYWN0dXMueTtcbiAgICBsZXQgbGVmdEhpdCA9IGNhY3R1cy54ICsgKGNhY3R1cy53aWR0aCAvIDIpO1xuXG4gICAgaWYgKChjYWN0dXMueSA8IDEwICYmIGNhY3R1cy55ID4gNSkgJiYgKGxlZnRIaXQgPiAtMTI1ICYmIGxlZnRIaXQgPCAxMjUpKSB7XG4gICAgICAvLyBjYWN0dXMuY29sb3IgPSBcInB1cnBsZVwiO1xuICAgICAgLy8gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICBnYW1lID0gZmFsc2U7XG4gICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgZW5kR2FtZSgpO1xuICAgICAgLy8gZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgZHJhd0NhY3R1cyhjYWN0dXMueCwgY2FjdHVzLnlPcmQsIGNhY3R1cy53aWR0aCwgaCwgY2FjdHVzLmNvbG9yLCBjYWN0dXMuaW1nICk7XG4gIH0pO1xuICBcbiAgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgaW5zdEtleSA9IGNvbnRyb2xMO1xuICAgIGlmICh0dXJuWCA8PSAwKSAge1xuICAgICAgdHVyblggKz0gMC4wNTU7XG4gICAgfSBlbHNlIGlmICh0dXJuWCA+IDAgJiYgdHVyblggPCAxLjcpIHtcbiAgICAgIHR1cm5YICs9IDAuMDM1O1xuICAgIH1cbiAgICBtb3ZlQ2xvdWRzKDAuNjEpOyAvL2NoYW5nZSB2YWx1ZSB0byBzaGlmdCBjbG91ZCB4IHBvc2l0aW9uICBcbiAgICBpZiAocm90YXRpb24gPCAxMDAgJiYgcm90YXRpb24gPj0gMCkge1xuICAgICAgcm90YXRpb24gKz0gMTtcbiAgICAgIHJvdGF0ZUNhbShyb3RhdGlvbik7XG4gICAgfSBlbHNlIGlmIChyb3RhdGlvbiA8IDApIHtcbiAgICAgIHJvdGF0aW9uICs9IDE7XG4gICAgICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIDAuMDUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICBpbnN0S2V5ID0gY29udHJvbFI7XG4gICAgaWYgKHR1cm5YID49IDApIHtcbiAgICAgIHR1cm5YIC09IDAuMDU1O1xuICAgIH0gZWxzZSBpZiAodHVyblggPCAwICYmIHR1cm5YID4gLTEuNykge1xuICAgICAgdHVyblggLT0gMC4zNTtcbiAgICB9XG4gICAgbW92ZUNsb3VkcygtMC42MSk7IC8vY2hhbmdlIHZhbHVlIHRvIHNoaWZ0IGNsb3VkIHggcG9zaXRpb24gXG4gICAgaWYgKHJvdGF0aW9uID4gLTEwMCAmJiByb3RhdGlvbiA8PSAwKSB7XG4gICAgICByb3RhdGlvbiAtPSAxO1xuICAgICAgcm90YXRlQ2FtKHJvdGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uID4gMCkge1xuICAgICAgcm90YXRpb24gLT0gMTtcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLTAuMDUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnN0S2V5ID0gY29udHJvbHM7XG4gICAgaWYgKHJvdGF0aW9uID4gMCkge1xuICAgICAgcm90YXRpb24gLT0gMTtcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLTAuMDUpO1xuICAgIH0gZWxzZSBpZiAocm90YXRpb24gPCAwKSB7XG4gICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAwLjA1KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHVyblggPSAwO1xuICAgIH1cbiAgfVxuICBjb3VudGVyICs9IDE7XG4gIHNjb3JlICs9IDE7XG4gIGlmICghcGF1c2VkKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59O1xuXG5cbi8vIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoYW5pbWF0ZSwgMTApO1xuLy8gYW5pbWF0ZSgpO1xuXG5cbi8vb24ga2V5ZG93biB0aGUgaG9yaXpvbiByb3RhdGVzIHRvIGEgY2VydGFpbiBwb2ludFxuLy9vbiBrZXl1cCB0aGUgaG9yaXpvbiByZXR1cm5zIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4vL2FzIHRoZSBob3Jpem9uIHNoaWZ0cyBlbmVteSBlbGVtZW50cy9vYnN0YWNsZXMgc2hpZnQgdG9vXG4vL3RoZXkgYWxzbyBhZGQgb3IgZGVjcmVhc2UgdGhlaXIgeCBwb3NpdGlvbiBkZXBlbmRpbmcgb24gdGhlIGtleSBkaXJlY3Rpb25cblxuLy92YXJpYWJsZSBmb3IgdGltZSBlbGFwc2VkID09PSBoaWdoIHNjb3JlXG4vL2hpZ2ggc2NvcmUgc2F2ZWQgYW5kIGRpc3BsYXllZFxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=