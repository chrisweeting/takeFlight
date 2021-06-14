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

var handleReset = function handleReset() {
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
  dummyCard.classList.remove("hidden"); // beginAgain.addEventListener("click", handleClick);

  document.addEventListener("keyup", handleReset);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3Rha2VfZmxpZ2h0Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0aXRsZUNhcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXVzZUNhcmQiLCJnYW1lT3ZlckNhcmQiLCJpbnN0cnVjdGlvbkNhcmQiLCJkdW1teUNhcmQiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImJlZ2luIiwiYmVnaW5BZ2FpbiIsInByaW50SGlnaFNjb3JlIiwibmV3SGlnaFNjb3JlIiwiY250cmwiLCJjdHgiLCJnZXRDb250ZXh0IiwicmlnaHRQcmVzc2VkIiwibGVmdFByZXNzZWQiLCJzcGFjZVByZXNzZWQiLCJ0dXJuWCIsInkiLCJzY29yZSIsImhpU2NvcmUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm90YXRpb24iLCJjb3VudGVyIiwiY2FjdGlDb2xvcnMiLCJjYWN0aSIsImdhbWUiLCJwYXVzZWQiLCJiaXJkSW1nIiwiSW1hZ2UiLCJzcmMiLCJjb250cm9scyIsImNvbnRyb2xMIiwiY29udHJvbFIiLCJjYWN0dXMxIiwiY2FjdHVzMiIsImNhY3R1czMiLCJjYWN0dXM0IiwiY2FjdHVzNSIsImNhY3R1czYiLCJjYWN0dXM3IiwiY2FjdHVzOCIsImNsb3VkMSIsImNsb3VkMiIsImluc3RLZXkiLCJjYWN0dXNCaW4iLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsImNsb3VkUG9zaXRpb25zIiwiY2xvdWQzIiwiY2xvdWQ0IiwidHJhbnNsYXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3RhcnRHYW1lIiwiYW5pbWF0ZSIsInJlbW92ZSIsImhhbmRsZVJlc2V0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJvcGVuQ29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kR2FtZSIsImlubmVySFRNTCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsImUiLCJrZXkiLCJkcmF3SG9yaXpvbiIsImJlZ2luUGF0aCIsInJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIiwiZHJhd1Njb3JlIiwiZm9udCIsImZpbGxUZXh0IiwiZHJhd0hpU2NvcmUiLCJudW1iZXIiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiTnVtYmVyIiwicm90YXRlQ2FtIiwibnVtIiwicm90YXRlIiwiTWF0aCIsIlBJIiwiZHJhd0JpcmQiLCJzYXZlIiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImRyYXdJbnN0cnVjdGlvbnMiLCJkcmF3Q2FjdHVzIiwieCIsInciLCJoIiwiY29sb3IiLCJzcGF3bkNhY3RpIiwiY2VpbCIsInJhbmRvbSIsInJvdW5kIiwiZmxvb3IiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiaEluaXRpYWwiLCJ5T3JkIiwiZHJhd0Nsb3VkcyIsIm1vdmVDbG91ZHMiLCJjbG91ZCIsImZpbHRlckNhY3RpIiwiZmlsdGVyIiwiY2FjdHVzIiwiY2xlYXJSZWN0IiwiZm9yRWFjaCIsImNhY3R1c0hpdCIsImxlZnRIaXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUEr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QUFRLElBQUksQ0FBWjtBQUNBOEQsZUFBUyxDQUFDOUQsUUFBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPLElBQUlBLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ3ZCQSxjQUFRLElBQUksQ0FBWjtBQUNBYixTQUFHLENBQUM2RSxNQUFKLENBQVlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQVgsR0FBa0IsQ0FBQyxJQUE5QjtBQUNEO0FBQ0YsR0FmTSxNQWVBO0FBQ0w1QyxXQUFPLEdBQUdiLFFBQVY7O0FBQ0EsUUFBSVQsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEJBLGNBQVEsSUFBSSxDQUFaO0FBQ0FiLFNBQUcsQ0FBQzZFLE1BQUosQ0FBWUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQixDQUFDLElBQTlCO0FBQ0QsS0FIRCxNQUdPLElBQUlsRSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUN2QkEsY0FBUSxJQUFJLENBQVo7QUFDQWIsU0FBRyxDQUFDNkUsTUFBSixDQUFZQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFYLEdBQWtCLElBQTdCO0FBQ0QsS0FITSxNQUdBO0FBQ0wxRSxXQUFLLEdBQUcsQ0FBUjtBQUNEO0FBQ0Y7O0FBQ0RTLFNBQU8sSUFBSSxDQUFYO0FBQ0FQLE9BQUssSUFBSSxDQUFUO0FBQ0EsTUFBSSxDQUFDVyxNQUFMLEVBQWEyRixxQkFBcUIsQ0FBQzlELE9BQUQsQ0FBckI7QUFDZCxDQXhJRCxDLENBMklBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZ0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XG5cbmNvbnN0IHRpdGxlQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGUtY2FyZFwiKTtcbmNvbnN0IHBhdXNlQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGF1c2UtY2FyZFwiKTtcbmNvbnN0IGdhbWVPdmVyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1vdmVyLWNhcmRcIik7XG5jb25zdCBpbnN0cnVjdGlvbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluc3RydWN0aW9uLWNhcmRcIik7XG5jb25zdCBkdW1teUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1bW15LWNhbnZhc1wiKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmx5Q2FudmFzXCIpO1xuY29uc3QgYmVnaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlZ2luXCIpO1xuY29uc3QgYmVnaW5BZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVnaW4tYWdhaW5cIik7XG5jb25zdCBwcmludEhpZ2hTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaC1zY29yZVwiKTtcbmNvbnN0IG5ld0hpZ2hTY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWhpZ2gtc2NvcmVcIik7XG5jb25zdCBjbnRybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbHNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xubGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xubGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG5sZXQgc3BhY2VQcmVzc2VkID0gZmFsc2U7XG5sZXQgdHVyblggPSAwO1xubGV0IHkgPSAwO1xubGV0IHNjb3JlID0gMDtcbmxldCBoaVNjb3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpU2NvcmVcIikpIHx8IDA7XG5sZXQgcm90YXRpb24gPSAwO1xubGV0IGNvdW50ZXIgPSAwO1xubGV0IGNhY3RpQ29sb3JzID0gW1wiIzA3NmQwN1wiLCBcIiMyZTdhMmZcIiwgXCIjYTFkNmEyXCIsIFwiIzVlZjc1ZVwiXTtcbmxldCBjYWN0aSA9IFtdO1xubGV0IGdhbWUgPSBmYWxzZTtcbmxldCBwYXVzZWQgPSBmYWxzZTtcblxuY29uc3QgYmlyZEltZyA9IG5ldyBJbWFnZSgpO1xuYmlyZEltZy5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDUucG5nXCI7XG5cbmNvbnN0IGNvbnRyb2xzID0gbmV3IEltYWdlKCk7XG5jb250cm9scy5zcmMgPSBcInNyYy9hc3NldHMva2V5cy5wbmdcIjtcblxuY29uc3QgY29udHJvbEwgPSBuZXcgSW1hZ2UoKTtcbmNvbnRyb2xMLnNyYyA9IFwic3JjL2Fzc2V0cy9rZXlfbGVmdC5wbmdcIjtcblxuY29uc3QgY29udHJvbFIgPSBuZXcgSW1hZ2UoKTtcbmNvbnRyb2xSLnNyYyA9IFwic3JjL2Fzc2V0cy9rZXlfcmlnaHQucG5nXCI7XG5cbmNvbnN0IGNhY3R1czEgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czEuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTA2LnBuZ1wiO1xuXG5jb25zdCBjYWN0dXMyID0gbmV3IEltYWdlKCk7XG5jYWN0dXMyLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wNy5wbmdcIjtcblxuY29uc3QgY2FjdHVzMyA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzMy5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDgucG5nXCI7XG5cbmNvbnN0IGNhY3R1czQgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czQuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTA5LnBuZ1wiO1xuXG5jb25zdCBjYWN0dXM1ID0gbmV3IEltYWdlKCk7XG5jYWN0dXM1LnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0xMC5wbmdcIjtcblxuY29uc3QgY2FjdHVzNiA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzNi5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMTEucG5nXCI7XG5cbmNvbnN0IGNhY3R1czcgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czcuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTEyLnBuZ1wiO1xuXG5jb25zdCBjYWN0dXM4ID0gbmV3IEltYWdlKCk7XG5jYWN0dXM4LnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0xMy5wbmdcIjtcblxuY29uc3QgY2xvdWQxID0gbmV3IEltYWdlKCk7XG5jbG91ZDEuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTAzLnBuZ1wiO1xuXG5jb25zdCBjbG91ZDIgPSBuZXcgSW1hZ2UoKTtcbmNsb3VkMi5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDQucG5nXCI7XG5cbmxldCBpbnN0S2V5ID0gY29udHJvbHM7XG5cbmNvbnN0IGNhY3R1c0JpbiA9IFtcbiAgeyBpbWc6IGNhY3R1czEsIHdpZHRoOiAxODAsIGhlaWdodDogMzAwIH0sXG4gIHsgaW1nOiBjYWN0dXMyLCB3aWR0aDogMTgwLCBoZWlnaHQ6IDMwMCB9LFxuICB7IGltZzogY2FjdHVzMywgd2lkdGg6IDE1MCwgaGVpZ2h0OiAyNTAgfSxcbiAgeyBpbWc6IGNhY3R1czQsIHdpZHRoOiAxNTAsIGhlaWdodDogMTQwIH0sXG4gIHsgaW1nOiBjYWN0dXM1LCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCB9LFxuICB7IGltZzogY2FjdHVzNiwgd2lkdGg6IDE3MCwgaGVpZ2h0OiAxNTAgfSxcbiAgeyBpbWc6IGNhY3R1czcsIHdpZHRoOiAxMDAsIGhlaWdodDogMTUwIH0sXG4gIHsgaW1nOiBjYWN0dXM4LCB3aWR0aDogODAsIGhlaWdodDogMjgwIH0sXG5dO1xuXG52YXIgY2xvdWRQb3NpdGlvbnMgPSB7XG4gIGNsb3VkMTogMTAwLFxuICBjbG91ZDI6IC0zMzAsXG4gIGNsb3VkMzogLTczMCxcbiAgY2xvdWQ0OiA3MDAsXG59O1xuXG5cbmN0eC50cmFuc2xhdGUoNjQwLCAzNjApO1xuY2FudmFzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5nYW1lT3ZlckNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbmluc3RydWN0aW9uQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuLy8gY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAvLyAgIGFuaW1hdGUoKTtcbiAgLy8gICBhbmltYXRlKCk7XG4gIC8vICAgdGl0bGVDYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIC8vICAgZ2FtZSA9IHRydWU7XG4gIC8vIH07XG4gIFxuY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG4gIGFuaW1hdGUoKTtcbiAgYW5pbWF0ZSgpO1xuICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgdGl0bGVDYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGR1bW15Q2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBpbnN0cnVjdGlvbkNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZ2FtZSA9IHRydWU7XG59O1xuXG5cbmNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbn07XG5cbmNvbnN0IG9wZW5Db250cm9scyA9ICgpID0+IHtcbiAgdGl0bGVDYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGluc3RydWN0aW9uQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufTtcblxuLy8gYmVnaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG5jbnRybC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb3BlbkNvbnRyb2xzKTtcblxuY29uc3QgZW5kR2FtZSA9ICgpID0+IHtcbiAgaWYgKGhpU2NvcmUgPT09IHNjb3JlKSB7XG4gICAgbmV3SGlnaFNjb3JlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG4gIHByaW50SGlnaFNjb3JlLmlubmVySFRNTCA9IGBTY29yZTogJHtzY29yZX1gO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBnYW1lT3ZlckNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgZHVtbXlDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIC8vIGJlZ2luQWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZVJlc2V0KTtcbn07XG5cblxuY29uc3Qga2V5RG93bkhhbmRsZXIgPSAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgcmlnaHRQcmVzc2VkID0gdHJ1ZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgbGVmdFByZXNzZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGUua2V5ID09PSAnICcgfHwgZS5rZXkgPT09ICdTcGFjZWJhcicpIHtcbiAgICBzcGFjZVByZXNzZWQgPSB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBrZXlVcEhhbmRsZXIgPSAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgIGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleSA9PT0gJ1NwYWNlYmFyJykge1xuICAgIGlmIChnYW1lKSB7XG4gICAgICBpZiAocGF1c2VkKSB7XG4gICAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBwYXVzZUNhcmQuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgcGF1c2VDYXJkLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEdhbWUoKTtcbiAgICB9XG4gICAgc3BhY2VQcmVzc2VkID0gZmFsc2U7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmNvbnN0IGRyYXdIb3Jpem9uID0gKCkgPT4ge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5yZWN0KC0xMDAwLCB5LCAyMDAwLCAxNTAwKTtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjZThlMmE0XCI7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbn07XG5cbi8vIGNvbnN0IGRyYXdSb3RhdGlvbiA9ICgpID0+IHtcbi8vICAgY3R4LmZvbnQgPSBcIjE2cHggQXJpYWxcIjtcbi8vICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuLy8gICBjdHguZmlsbFRleHQoXCJSb3RhdGlvbjogXCIgKyByb3RhdGlvbiwgMSwgMSk7XG4vLyB9O1xuXG5jb25zdCBkcmF3U2NvcmUgPSAoKSA9PiB7XG4gIGlmIChzY29yZSA+IDQwMDApIHtcbiAgICBjdHguZm9udCA9IFwiMThweCBIZWx2ZXRpY2FcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gIH0gZWxzZSB7XG4gICAgY3R4LmZvbnQgPSBcIjE2cHggSGVsdmV0aWNhXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICB9XG4gIGN0eC5maWxsVGV4dChcIlNjb3JlOiBcIiArIHNjb3JlLCAzLCAtMyk7XG5cbn07XG5cbmNvbnN0IGRyYXdIaVNjb3JlID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIGhpU2NvcmUgIT0gXCJudW1iZXJcIikgaGlTY29yZSA9IGhpU2NvcmUubnVtYmVyO1xuXG4gIGlmIChzY29yZSA+IGhpU2NvcmUpIHtcbiAgICBoaVNjb3JlID0gc2NvcmU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpU2NvcmUnLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBudW1iZXI6IE51bWJlcihzY29yZSlcbiAgICB9KSk7XG4gIH1cblxuICBjdHguZm9udCA9IFwiMTZweCBIZWx2ZXRpY2FcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gIFxuICBjdHguZmlsbFRleHQoXCJIaWdoIFNjb3JlOiBcIiArIGhpU2NvcmUsIDMsIC0yMCk7XG5cbn07XG5cbmNvbnN0IHJvdGF0ZUNhbSA9IChudW0pID0+IHtcbiAgaWYgKG51bSA8IDEwMCAmJiBudW0gPiAwKSB7XG4gICAgcmV0dXJuIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogMC4wNSk7XG4gIH0gZWxzZSBpZiAobnVtID4gLTEwMCAmJiBudW0gPCAwKSB7XG4gICAgcmV0dXJuIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLTAuMDUpO1xuICB9XG59O1xuXG5jb25zdCBkcmF3QmlyZCA9ICgpID0+IHtcbiAgY3R4LnNhdmUoKTtcbiAgXG4gIGN0eC50cmFuc2xhdGUoMCwgMTUwKTtcbiAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtKChyb3RhdGlvbiAqIDAuNSApIC8gNCkpO1xuXG4gIC8vIGN0eC5zaGFkb3dCbHVyID0gNTA7XG4gIC8vIGN0eC5zaGFkb3dDb2xvciA9ICdibGFjayc7XG4gIC8vIGN0eC5zaGFkb3dPZmZzZXRZID0gODA7XG4gIGN0eC5kcmF3SW1hZ2UoYmlyZEltZywgLTEyNSwgLTUwLCAyNTAsIDEwMCk7XG4gIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gLy8gY3R4LnJlY3QoLTYwLCAtMTAsIDEyMCwgMjApO1xuICAvLyBjdHgucmVjdCgtMTI1LCAtNTAsIDI1MCwgMTAwKTtcbiAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAvLyBjdHguZmlsbCgpO1xuICAvLyBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICBcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IGRyYXdJbnN0cnVjdGlvbnMgPSAoKSA9PiB7XG4gIGN0eC5zYXZlKCk7XG5cbiAgY3R4LnRyYW5zbGF0ZSgwLCA1MCk7XG4gIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLSgocm90YXRpb24gKiAxKSAvIDI1KSk7XG5cbiAgaWYgKHNjb3JlID4gMTUwICYmIHNjb3JlIDwgNzAwKSB7XG4gICAgY3R4LmRyYXdJbWFnZShpbnN0S2V5LCAtMTAwLCAyMDAsIDIwMCwgNzApO1xuICB9XG5cbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IGRyYXdDYWN0dXMgPSAoeCwgeSwgdywgaCwgY29sb3IsIGltZykgPT4ge1xuICBjdHguc2F2ZSgpO1xuICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgdywgaCk7XG4gIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gIC8vIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgLy8gY3R4LmZpbGwoKTtcbiAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuY29uc3Qgc3Bhd25DYWN0aSA9ICgpID0+IHtcbiAgbGV0IHggPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDg0MCkgKiAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSA/IDEgOiAtMSk7XG4gIGxldCBjb2xvciA9IGNhY3RpQ29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhY3RpQ29sb3JzLmxlbmd0aCldO1xuICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCBpbWcgfSA9IGNhY3R1c0JpbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYWN0dXNCaW4ubGVuZ3RoKV07XG4gIGNhY3RpLnVuc2hpZnQoe1xuICAgIHg6IHgsXG4gICAgeTogLTEwMCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIGhJbml0aWFsOiAwLFxuICAgIHlPcmQ6IDAsXG4gICAgaW1nOiBpbWdcbiAgfSk7XG4gIC8vYXNzaWduIGRlZmF1bHQgdmFyaWFibGVzIHN0b3JlIHRoZW0gaW4gb2JqZWN0c1xufTtcblxuY29uc3QgZHJhd0Nsb3VkcyA9ICgpID0+IHtcbiAgY3R4LmRyYXdJbWFnZShjbG91ZDEsIGNsb3VkUG9zaXRpb25zLmNsb3VkMSwgLTIwMCwgMzAwLCAyMDApO1xuICBjdHguZHJhd0ltYWdlKGNsb3VkMiwgY2xvdWRQb3NpdGlvbnMuY2xvdWQyLCAtMzAwLCAzMDAsIDE1MCk7XG4gIGN0eC5kcmF3SW1hZ2UoY2xvdWQxLCBjbG91ZFBvc2l0aW9ucy5jbG91ZDMsIC0yMDAsIDMwMCwgMjAwKTtcbiAgY3R4LmRyYXdJbWFnZShjbG91ZDIsIGNsb3VkUG9zaXRpb25zLmNsb3VkNCwgLTMwMCwgMzAwLCAxNTApO1xufTtcblxuY29uc3QgbW92ZUNsb3VkcyA9IChudW0pID0+IHtcbiAgZm9yIChjb25zdCBjbG91ZCBpbiBjbG91ZFBvc2l0aW9ucykge1xuICAgIGNsb3VkUG9zaXRpb25zW2Nsb3VkXSArPSBudW07XG4gIH1cbn07XG5cbmNvbnN0IGZpbHRlckNhY3RpID0gKCkgPT4ge1xuICBjYWN0aSA9IGNhY3RpLmZpbHRlcihjYWN0dXMgPT4gKChjYWN0dXMueSkgPCA1NTApKTtcbn07XG5cbmNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gIFxuICBjdHguY2xlYXJSZWN0KC0xMDAwLCAtMTAwMCwgMjAwMCwgMjAwMCk7XG4gIGZpbHRlckNhY3RpKCk7XG4gIGRyYXdIb3Jpem9uKCk7XG4gIGRyYXdJbnN0cnVjdGlvbnMoKTtcbiAgZHJhd0Nsb3VkcygpO1xuICAvLyBkcmF3Um90YXRpb24oKTtcbiAgZHJhd1Njb3JlKCk7XG4gIGRyYXdIaVNjb3JlKCk7XG4gIGRyYXdCaXJkKCk7XG5cbiAgLy9jYWN0dXMgc3Bhd24gZnJlcXVlbmN5XG4gIGlmIChjb3VudGVyID09PSA1NSkge1xuICAgIHNwYXduQ2FjdGkoKTtcbiAgICBjb3VudGVyID0gMDtcbiAgfVxuXG5cbiAgY2FjdGkuZm9yRWFjaChjYWN0dXMgPT4ge1xuICAgIGNhY3R1cy54ICs9IHR1cm5YO1xuICAgIGxldCBoID0gY2FjdHVzLmhlaWdodDtcbiAgICBpZiAoY2FjdHVzLmhJbml0aWFsIDwgY2FjdHVzLmhlaWdodCkge1xuICAgICAgY2FjdHVzLmhJbml0aWFsICs9IDE7XG4gICAgICBoID0gY2FjdHVzLmhJbml0aWFsO1xuICAgICAgY2FjdHVzLnlPcmQgLT0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjdHVzLnlPcmQgKz0gMS40OTtcbiAgICAgIGNhY3R1cy55ICs9IDEuNDk7XG4gICAgICAvLyBjYWN0dXMud2lkdGggKz0gY2FjdHVzLndpZHRoICogMC4wMDE0O1xuICAgICAgLy8gY2FjdHVzLmhlaWdodCArPSBjYWN0dXMuaGVpZ2h0ICogMC4wMDE0O1xuICAgICAgLy8gY2FjdHVzLmhlaWdodCAqPSAxLjAwMTQ7XG4gICAgICBjYWN0dXMuaEluaXRpYWwgPSBjYWN0dXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vY2FjdHVzIHJlbW92YWwgYW5pbWF0aW9uIGFuZCB5T3JkIHNwZWVkIGNvbnRyb2xcbiAgICAvLyBpZiAoY2FjdHVzLndpZHRoID4gNTApIHtcbiAgICAvLyAgIGNhY3R1cy55T3JkICs9IDE7XG4gICAgLy8gICBjYWN0dXMuaGVpZ2h0IC09IDE7XG4gICAgLy8gfSBlbHNlIGlmIChjYWN0dXMud2lkdGggPiAyNykge1xuICAgIC8vICAgY2FjdHVzLnlPcmQgKz0gMTtcbiAgICAvLyAgIC8vIGNhY3R1cy5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAvLyB9IGVsc2UgaWYgKGNhY3R1cy53aWR0aCA+IDIzKSB7XG4gICAgLy8gICBjYWN0dXMueU9yZCArPSAwLjU7XG4gICAgLy8gICAvLyBjYWN0dXMuY29sb3IgPSBcInJlZFwiO1xuICAgIC8vIH1cblxuICAgIGlmIChjYWN0dXMueSA+IDApIHtcbiAgICAgIC8vIGNhY3R1cy5jb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgLy8gY2FjdHVzIHBhdGggY2hhbmdlIHRvIGFjY291bnQgZm9yIHBlcnNwZWN0aXZlXG4gICAgaWYgKGNhY3R1cy55ID4gLTkwKSB7XG4gICAgICBpZiAoY2FjdHVzLnggPiAxMDApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC41NTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPCAtMTAwKSB7XG4gICAgICAgIGNhY3R1cy54IC09IDAuNTU7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54ID4gNjApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC4yO1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA8IC02MCkge1xuICAgICAgICBjYWN0dXMueCAtPSAwLjI7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54ID4gODApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC40O1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA8IC04MCkge1xuICAgICAgICBjYWN0dXMueCAtPSAwLjQ7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54ID4gNDApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC4xO1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA8IC00MCkge1xuICAgICAgICBjYWN0dXMueCAtPSAwLjE7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54ID4gMjApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC4wNTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPCAtMjApIHtcbiAgICAgICAgY2FjdHVzLnggLT0gMC4wNTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2FjdHVzSGl0ID0gY2FjdHVzLnk7XG4gICAgbGV0IGxlZnRIaXQgPSBjYWN0dXMueCArIChjYWN0dXMud2lkdGggLyAyKTtcblxuICAgIGlmICgoY2FjdHVzLnkgPCAxMCAmJiBjYWN0dXMueSA+IDUpICYmIChsZWZ0SGl0ID4gLTEyNSAmJiBsZWZ0SGl0IDwgMTI1KSkge1xuICAgICAgLy8gY2FjdHVzLmNvbG9yID0gXCJwdXJwbGVcIjtcbiAgICAgIC8vIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgZ2FtZSA9IGZhbHNlO1xuICAgICAgcGF1c2VkID0gdHJ1ZTtcbiAgICAgIGVuZEdhbWUoKTtcbiAgICAgIC8vIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuICAgIGRyYXdDYWN0dXMoY2FjdHVzLngsIGNhY3R1cy55T3JkLCBjYWN0dXMud2lkdGgsIGgsIGNhY3R1cy5jb2xvciwgY2FjdHVzLmltZyApO1xuICB9KTtcbiAgXG4gIGlmIChsZWZ0UHJlc3NlZCkge1xuICAgIGluc3RLZXkgPSBjb250cm9sTDtcbiAgICBpZiAodHVyblggPD0gMCkgIHtcbiAgICAgIHR1cm5YICs9IDAuMDU1O1xuICAgIH0gZWxzZSBpZiAodHVyblggPiAwICYmIHR1cm5YIDwgMS43KSB7XG4gICAgICB0dXJuWCArPSAwLjAzNTtcbiAgICB9XG4gICAgbW92ZUNsb3VkcygwLjYxKTsgLy9jaGFuZ2UgdmFsdWUgdG8gc2hpZnQgY2xvdWQgeCBwb3NpdGlvbiAgXG4gICAgaWYgKHJvdGF0aW9uIDwgMTAwICYmIHJvdGF0aW9uID49IDApIHtcbiAgICAgIHJvdGF0aW9uICs9IDE7XG4gICAgICByb3RhdGVDYW0ocm90YXRpb24pO1xuICAgIH0gZWxzZSBpZiAocm90YXRpb24gPCAwKSB7XG4gICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAwLjA1KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgaW5zdEtleSA9IGNvbnRyb2xSO1xuICAgIGlmICh0dXJuWCA+PSAwKSB7XG4gICAgICB0dXJuWCAtPSAwLjA1NTtcbiAgICB9IGVsc2UgaWYgKHR1cm5YIDwgMCAmJiB0dXJuWCA+IC0xLjcpIHtcbiAgICAgIHR1cm5YIC09IDAuMzU7XG4gICAgfVxuICAgIG1vdmVDbG91ZHMoLTAuNjEpOyAvL2NoYW5nZSB2YWx1ZSB0byBzaGlmdCBjbG91ZCB4IHBvc2l0aW9uIFxuICAgIGlmIChyb3RhdGlvbiA+IC0xMDAgJiYgcm90YXRpb24gPD0gMCkge1xuICAgICAgcm90YXRpb24gLT0gMTtcbiAgICAgIHJvdGF0ZUNhbShyb3RhdGlvbik7XG4gICAgfSBlbHNlIGlmIChyb3RhdGlvbiA+IDApIHtcbiAgICAgIHJvdGF0aW9uIC09IDE7XG4gICAgICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIC0wLjA1KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5zdEtleSA9IGNvbnRyb2xzO1xuICAgIGlmIChyb3RhdGlvbiA+IDApIHtcbiAgICAgIHJvdGF0aW9uIC09IDE7XG4gICAgICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIC0wLjA1KTtcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uIDwgMCkge1xuICAgICAgcm90YXRpb24gKz0gMTtcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogMC4wNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR1cm5YID0gMDtcbiAgICB9XG4gIH1cbiAgY291bnRlciArPSAxO1xuICBzY29yZSArPSAxO1xuICBpZiAoIXBhdXNlZCkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufTtcblxuXG4vLyBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGFuaW1hdGUsIDEwKTtcbi8vIGFuaW1hdGUoKTtcblxuXG4vL29uIGtleWRvd24gdGhlIGhvcml6b24gcm90YXRlcyB0byBhIGNlcnRhaW4gcG9pbnRcbi8vb24ga2V5dXAgdGhlIGhvcml6b24gcmV0dXJucyB0byBpdHMgaW5pdGlhbCBzdGF0ZVxuLy9hcyB0aGUgaG9yaXpvbiBzaGlmdHMgZW5lbXkgZWxlbWVudHMvb2JzdGFjbGVzIHNoaWZ0IHRvb1xuLy90aGV5IGFsc28gYWRkIG9yIGRlY3JlYXNlIHRoZWlyIHggcG9zaXRpb24gZGVwZW5kaW5nIG9uIHRoZSBrZXkgZGlyZWN0aW9uXG5cbi8vdmFyaWFibGUgZm9yIHRpbWUgZWxhcHNlZCA9PT0gaGlnaCBzY29yZVxuLy9oaWdoIHNjb3JlIHNhdmVkIGFuZCBkaXNwbGF5ZWRcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9