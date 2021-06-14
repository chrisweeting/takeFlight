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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzJhMzEiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz9mM2Y0Iiwid2VicGFjazovL3Rha2VfZmxpZ2h0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rha2VfZmxpZ2h0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidGl0bGVDYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGF1c2VDYXJkIiwiZ2FtZU92ZXJDYXJkIiwiaW5zdHJ1Y3Rpb25DYXJkIiwiZHVtbXlDYXJkIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJiZWdpbiIsImJlZ2luQWdhaW4iLCJwcmludEhpZ2hTY29yZSIsIm5ld0hpZ2hTY29yZSIsImNudHJsIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJpZ2h0UHJlc3NlZCIsImxlZnRQcmVzc2VkIiwic3BhY2VQcmVzc2VkIiwidHVyblgiLCJ5Iiwic2NvcmUiLCJoaVNjb3JlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdGF0aW9uIiwiY291bnRlciIsImNhY3RpQ29sb3JzIiwiY2FjdGkiLCJnYW1lIiwicGF1c2VkIiwiYmlyZEltZyIsIkltYWdlIiwic3JjIiwiY29udHJvbHMiLCJjb250cm9sTCIsImNvbnRyb2xSIiwiY2FjdHVzMSIsImNhY3R1czIiLCJjYWN0dXMzIiwiY2FjdHVzNCIsImNhY3R1czUiLCJjYWN0dXM2IiwiY2FjdHVzNyIsImNhY3R1czgiLCJjbG91ZDEiLCJjbG91ZDIiLCJpbnN0S2V5IiwiY2FjdHVzQmluIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJjbG91ZFBvc2l0aW9ucyIsImNsb3VkMyIsImNsb3VkNCIsInRyYW5zbGF0ZSIsImNsYXNzTGlzdCIsImFkZCIsInN0YXJ0R2FtZSIsImFuaW1hdGUiLCJyZW1vdmUiLCJoYW5kbGVSZXNldCIsImxvY2F0aW9uIiwicmVsb2FkIiwib3BlbkNvbnRyb2xzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImVuZEdhbWUiLCJpbm5lckhUTUwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwiZHJhd0hvcml6b24iLCJiZWdpblBhdGgiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsImRyYXdTY29yZSIsImZvbnQiLCJmaWxsVGV4dCIsImRyYXdIaVNjb3JlIiwibnVtYmVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIk51bWJlciIsInJvdGF0ZUNhbSIsIm51bSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdCaXJkIiwic2F2ZSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJkcmF3SW5zdHJ1Y3Rpb25zIiwiZHJhd0NhY3R1cyIsIngiLCJ3IiwiaCIsImNvbG9yIiwic3Bhd25DYWN0aSIsImNlaWwiLCJyYW5kb20iLCJyb3VuZCIsImZsb29yIiwibGVuZ3RoIiwidW5zaGlmdCIsImhJbml0aWFsIiwieU9yZCIsImRyYXdDbG91ZHMiLCJtb3ZlQ2xvdWRzIiwiY2xvdWQiLCJmaWx0ZXJDYWN0aSIsImZpbHRlciIsImNhY3R1cyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJjYWN0dXNIaXQiLCJsZWZ0SGl0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7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QztBQUNwQ0EsY0FBUSxJQUFJLENBQVo7QUFDQThELGVBQVMsQ0FBQzlELFFBQUQsQ0FBVDtBQUNELEtBSEQsTUFHTyxJQUFJQSxRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUN2QkEsY0FBUSxJQUFJLENBQVo7QUFDQWIsU0FBRyxDQUFDNkUsTUFBSixDQUFZQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFYLEdBQWtCLENBQUMsSUFBOUI7QUFDRDtBQUNGLEdBZk0sTUFlQTtBQUNMNUMsV0FBTyxHQUFHYixRQUFWOztBQUNBLFFBQUlULFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2hCQSxjQUFRLElBQUksQ0FBWjtBQUNBYixTQUFHLENBQUM2RSxNQUFKLENBQVlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQVgsR0FBa0IsQ0FBQyxJQUE5QjtBQUNELEtBSEQsTUFHTyxJQUFJbEUsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDdkJBLGNBQVEsSUFBSSxDQUFaO0FBQ0FiLFNBQUcsQ0FBQzZFLE1BQUosQ0FBWUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQixJQUE3QjtBQUNELEtBSE0sTUFHQTtBQUNMMUUsV0FBSyxHQUFHLENBQVI7QUFDRDtBQUNGOztBQUNEUyxTQUFPLElBQUksQ0FBWDtBQUNBUCxPQUFLLElBQUksQ0FBVDtBQUNBLE1BQUksQ0FBQ1csTUFBTCxFQUFhMkYscUJBQXFCLENBQUM5RCxPQUFELENBQXJCO0FBQ2QsQ0F4SUQsQyxDQTJJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGdDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xuXG5jb25zdCB0aXRsZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWNhcmRcIik7XG5jb25zdCBwYXVzZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhdXNlLWNhcmRcIik7XG5jb25zdCBnYW1lT3ZlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtb3Zlci1jYXJkXCIpO1xuY29uc3QgaW5zdHJ1Y3Rpb25DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbi1jYXJkXCIpO1xuY29uc3QgZHVtbXlDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdW1teS1jYW52YXNcIik7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZseUNhbnZhc1wiKTtcbmNvbnN0IGJlZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZWdpblwiKTtcbmNvbnN0IGJlZ2luQWdhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlZ2luLWFnYWluXCIpO1xuY29uc3QgcHJpbnRIaWdoU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2gtc2NvcmVcIik7XG5jb25zdCBuZXdIaWdoU2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1oaWdoLXNjb3JlXCIpO1xuY29uc3QgY250cmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xzXCIpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmxldCByaWdodFByZXNzZWQgPSBmYWxzZTtcbmxldCBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xubGV0IHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xubGV0IHR1cm5YID0gMDtcbmxldCB5ID0gMDtcbmxldCBzY29yZSA9IDA7XG5sZXQgaGlTY29yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaVNjb3JlXCIpKSB8fCAwO1xubGV0IHJvdGF0aW9uID0gMDtcbmxldCBjb3VudGVyID0gMDtcbmxldCBjYWN0aUNvbG9ycyA9IFtcIiMwNzZkMDdcIiwgXCIjMmU3YTJmXCIsIFwiI2ExZDZhMlwiLCBcIiM1ZWY3NWVcIl07XG5sZXQgY2FjdGkgPSBbXTtcbmxldCBnYW1lID0gZmFsc2U7XG5sZXQgcGF1c2VkID0gZmFsc2U7XG5cbmNvbnN0IGJpcmRJbWcgPSBuZXcgSW1hZ2UoKTtcbmJpcmRJbWcuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTA1LnBuZ1wiO1xuXG5jb25zdCBjb250cm9scyA9IG5ldyBJbWFnZSgpO1xuY29udHJvbHMuc3JjID0gXCJzcmMvYXNzZXRzL2tleXMucG5nXCI7XG5cbmNvbnN0IGNvbnRyb2xMID0gbmV3IEltYWdlKCk7XG5jb250cm9sTC5zcmMgPSBcInNyYy9hc3NldHMva2V5X2xlZnQucG5nXCI7XG5cbmNvbnN0IGNvbnRyb2xSID0gbmV3IEltYWdlKCk7XG5jb250cm9sUi5zcmMgPSBcInNyYy9hc3NldHMva2V5X3JpZ2h0LnBuZ1wiO1xuXG5jb25zdCBjYWN0dXMxID0gbmV3IEltYWdlKCk7XG5jYWN0dXMxLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wNi5wbmdcIjtcblxuY29uc3QgY2FjdHVzMiA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzMi5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDcucG5nXCI7XG5cbmNvbnN0IGNhY3R1czMgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czMuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTA4LnBuZ1wiO1xuXG5jb25zdCBjYWN0dXM0ID0gbmV3IEltYWdlKCk7XG5jYWN0dXM0LnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wOS5wbmdcIjtcblxuY29uc3QgY2FjdHVzNSA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzNS5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMTAucG5nXCI7XG5cbmNvbnN0IGNhY3R1czYgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czYuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTExLnBuZ1wiO1xuXG5jb25zdCBjYWN0dXM3ID0gbmV3IEltYWdlKCk7XG5jYWN0dXM3LnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0xMi5wbmdcIjtcblxuY29uc3QgY2FjdHVzOCA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzOC5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMTMucG5nXCI7XG5cbmNvbnN0IGNsb3VkMSA9IG5ldyBJbWFnZSgpO1xuY2xvdWQxLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wMy5wbmdcIjtcblxuY29uc3QgY2xvdWQyID0gbmV3IEltYWdlKCk7XG5jbG91ZDIuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTA0LnBuZ1wiO1xuXG5sZXQgaW5zdEtleSA9IGNvbnRyb2xzO1xuXG5jb25zdCBjYWN0dXNCaW4gPSBbXG4gIHsgaW1nOiBjYWN0dXMxLCB3aWR0aDogMTgwLCBoZWlnaHQ6IDMwMCB9LFxuICB7IGltZzogY2FjdHVzMiwgd2lkdGg6IDE4MCwgaGVpZ2h0OiAzMDAgfSxcbiAgeyBpbWc6IGNhY3R1czMsIHdpZHRoOiAxNTAsIGhlaWdodDogMjUwIH0sXG4gIHsgaW1nOiBjYWN0dXM0LCB3aWR0aDogMTUwLCBoZWlnaHQ6IDE0MCB9LFxuICB7IGltZzogY2FjdHVzNSwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAgfSxcbiAgeyBpbWc6IGNhY3R1czYsIHdpZHRoOiAxNzAsIGhlaWdodDogMTUwIH0sXG4gIHsgaW1nOiBjYWN0dXM3LCB3aWR0aDogMTAwLCBoZWlnaHQ6IDE1MCB9LFxuICB7IGltZzogY2FjdHVzOCwgd2lkdGg6IDgwLCBoZWlnaHQ6IDI4MCB9LFxuXTtcblxudmFyIGNsb3VkUG9zaXRpb25zID0ge1xuICBjbG91ZDE6IDEwMCxcbiAgY2xvdWQyOiAtMzMwLFxuICBjbG91ZDM6IC03MzAsXG4gIGNsb3VkNDogNzAwLFxufTtcblxuXG5jdHgudHJhbnNsYXRlKDY0MCwgMzYwKTtcbmNhbnZhcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuZ2FtZU92ZXJDYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5pbnN0cnVjdGlvbkNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbi8vIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgLy8gICBhbmltYXRlKCk7XG4gIC8vICAgYW5pbWF0ZSgpO1xuICAvLyAgIHRpdGxlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAvLyAgIGdhbWUgPSB0cnVlO1xuICAvLyB9O1xuICBcbmNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuICBhbmltYXRlKCk7XG4gIGFuaW1hdGUoKTtcbiAgY2FudmFzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIHRpdGxlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBkdW1teUNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgaW5zdHJ1Y3Rpb25DYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGdhbWUgPSB0cnVlO1xufTtcblxuXG5jb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG59O1xuXG5jb25zdCBvcGVuQ29udHJvbHMgPSAoKSA9PiB7XG4gIHRpdGxlQ2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBpbnN0cnVjdGlvbkNhcmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn07XG5cbi8vIGJlZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuY250cmwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Db250cm9scyk7XG5cbmNvbnN0IGVuZEdhbWUgPSAoKSA9PiB7XG4gIGlmIChoaVNjb3JlID09PSBzY29yZSkge1xuICAgIG5ld0hpZ2hTY29yZS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgfVxuICBwcmludEhpZ2hTY29yZS5pbm5lckhUTUwgPSBgU2NvcmU6ICR7c2NvcmV9YDtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuICBjYW52YXMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgZ2FtZU92ZXJDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIGR1bW15Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAvLyBiZWdpbkFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVSZXNldCk7XG59O1xuXG5cbmNvbnN0IGtleURvd25IYW5kbGVyID0gKGUpID0+IHtcbiAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnU3BhY2ViYXInKSB7XG4gICAgc3BhY2VQcmVzc2VkID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qga2V5VXBIYW5kbGVyID0gKGUpID0+IHtcbiAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKGUua2V5ID09PSAnICcgfHwgZS5rZXkgPT09ICdTcGFjZWJhcicpIHtcbiAgICBpZiAoZ2FtZSkge1xuICAgICAgaWYgKHBhdXNlZCkge1xuICAgICAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgcGF1c2VDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICAgIHBhdXNlQ2FyZC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRHYW1lKCk7XG4gICAgfVxuICAgIHNwYWNlUHJlc3NlZCA9IGZhbHNlO1xuICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG5jb25zdCBkcmF3SG9yaXpvbiA9ICgpID0+IHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgucmVjdCgtMTAwMCwgeSwgMjAwMCwgMTUwMCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwiI2U4ZTJhNFwiO1xuICBjdHguZmlsbCgpO1xuICBjdHguY2xvc2VQYXRoKCk7XG59O1xuXG4vLyBjb25zdCBkcmF3Um90YXRpb24gPSAoKSA9PiB7XG4vLyAgIGN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XG4vLyAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbi8vICAgY3R4LmZpbGxUZXh0KFwiUm90YXRpb246IFwiICsgcm90YXRpb24sIDEsIDEpO1xuLy8gfTtcblxuY29uc3QgZHJhd1Njb3JlID0gKCkgPT4ge1xuICBpZiAoc2NvcmUgPiA0MDAwKSB7XG4gICAgY3R4LmZvbnQgPSBcIjE4cHggSGVsdmV0aWNhXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICB9IGVsc2Uge1xuICAgIGN0eC5mb250ID0gXCIxNnB4IEhlbHZldGljYVwiO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgfVxuICBjdHguZmlsbFRleHQoXCJTY29yZTogXCIgKyBzY29yZSwgMywgLTMpO1xuXG59O1xuXG5jb25zdCBkcmF3SGlTY29yZSA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiBoaVNjb3JlICE9IFwibnVtYmVyXCIpIGhpU2NvcmUgPSBoaVNjb3JlLm51bWJlcjtcblxuICBpZiAoc2NvcmUgPiBoaVNjb3JlKSB7XG4gICAgaGlTY29yZSA9IHNjb3JlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaVNjb3JlJywgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbnVtYmVyOiBOdW1iZXIoc2NvcmUpXG4gICAgfSkpO1xuICB9XG5cbiAgY3R4LmZvbnQgPSBcIjE2cHggSGVsdmV0aWNhXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICBcbiAgY3R4LmZpbGxUZXh0KFwiSGlnaCBTY29yZTogXCIgKyBoaVNjb3JlLCAzLCAtMjApO1xuXG59O1xuXG5jb25zdCByb3RhdGVDYW0gPSAobnVtKSA9PiB7XG4gIGlmIChudW0gPCAxMDAgJiYgbnVtID4gMCkge1xuICAgIHJldHVybiBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIDAuMDUpO1xuICB9IGVsc2UgaWYgKG51bSA+IC0xMDAgJiYgbnVtIDwgMCkge1xuICAgIHJldHVybiBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIC0wLjA1KTtcbiAgfVxufTtcblxuY29uc3QgZHJhd0JpcmQgPSAoKSA9PiB7XG4gIGN0eC5zYXZlKCk7XG4gIFxuICBjdHgudHJhbnNsYXRlKDAsIDE1MCk7XG4gIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLSgocm90YXRpb24gKiAwLjUgKSAvIDQpKTtcblxuICAvLyBjdHguc2hhZG93Qmx1ciA9IDUwO1xuICAvLyBjdHguc2hhZG93Q29sb3IgPSAnYmxhY2snO1xuICAvLyBjdHguc2hhZG93T2Zmc2V0WSA9IDgwO1xuICBjdHguZHJhd0ltYWdlKGJpcmRJbWcsIC0xMjUsIC01MCwgMjUwLCAxMDApO1xuICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gIC8vIC8vIGN0eC5yZWN0KC02MCwgLTEwLCAxMjAsIDIwKTtcbiAgLy8gY3R4LnJlY3QoLTEyNSwgLTUwLCAyNTAsIDEwMCk7XG4gIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgLy8gY3R4LmZpbGwoKTtcbiAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICBcbiAgXG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG5jb25zdCBkcmF3SW5zdHJ1Y3Rpb25zID0gKCkgPT4ge1xuICBjdHguc2F2ZSgpO1xuXG4gIGN0eC50cmFuc2xhdGUoMCwgNTApO1xuICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIC0oKHJvdGF0aW9uICogMSkgLyAyNSkpO1xuXG4gIGlmIChzY29yZSA+IDE1MCAmJiBzY29yZSA8IDcwMCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoaW5zdEtleSwgLTEwMCwgMjAwLCAyMDAsIDcwKTtcbiAgfVxuXG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG5jb25zdCBkcmF3Q2FjdHVzID0gKHgsIHksIHcsIGgsIGNvbG9yLCBpbWcpID0+IHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmRyYXdJbWFnZShpbWcsIHgsIHksIHcsIGgpO1xuICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gIC8vIGN0eC5yZWN0KHgsIHksIHcsIGgpO1xuICAvLyBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIC8vIGN0eC5maWxsKCk7XG4gIC8vIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IHNwYXduQ2FjdGkgPSAoKSA9PiB7XG4gIGxldCB4ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA4NDApICogKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkgPyAxIDogLTEpO1xuICBsZXQgY29sb3IgPSBjYWN0aUNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYWN0aUNvbG9ycy5sZW5ndGgpXTtcbiAgbGV0IHsgd2lkdGgsIGhlaWdodCwgaW1nIH0gPSBjYWN0dXNCaW5bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FjdHVzQmluLmxlbmd0aCldO1xuICBjYWN0aS51bnNoaWZ0KHtcbiAgICB4OiB4LFxuICAgIHk6IC0xMDAsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIGNvbG9yOiBjb2xvcixcbiAgICBoSW5pdGlhbDogMCxcbiAgICB5T3JkOiAwLFxuICAgIGltZzogaW1nXG4gIH0pO1xuICAvL2Fzc2lnbiBkZWZhdWx0IHZhcmlhYmxlcyBzdG9yZSB0aGVtIGluIG9iamVjdHNcbn07XG5cbmNvbnN0IGRyYXdDbG91ZHMgPSAoKSA9PiB7XG4gIGN0eC5kcmF3SW1hZ2UoY2xvdWQxLCBjbG91ZFBvc2l0aW9ucy5jbG91ZDEsIC0yMDAsIDMwMCwgMjAwKTtcbiAgY3R4LmRyYXdJbWFnZShjbG91ZDIsIGNsb3VkUG9zaXRpb25zLmNsb3VkMiwgLTMwMCwgMzAwLCAxNTApO1xuICBjdHguZHJhd0ltYWdlKGNsb3VkMSwgY2xvdWRQb3NpdGlvbnMuY2xvdWQzLCAtMjAwLCAzMDAsIDIwMCk7XG4gIGN0eC5kcmF3SW1hZ2UoY2xvdWQyLCBjbG91ZFBvc2l0aW9ucy5jbG91ZDQsIC0zMDAsIDMwMCwgMTUwKTtcbn07XG5cbmNvbnN0IG1vdmVDbG91ZHMgPSAobnVtKSA9PiB7XG4gIGZvciAoY29uc3QgY2xvdWQgaW4gY2xvdWRQb3NpdGlvbnMpIHtcbiAgICBjbG91ZFBvc2l0aW9uc1tjbG91ZF0gKz0gbnVtO1xuICB9XG59O1xuXG5jb25zdCBmaWx0ZXJDYWN0aSA9ICgpID0+IHtcbiAgY2FjdGkgPSBjYWN0aS5maWx0ZXIoY2FjdHVzID0+ICgoY2FjdHVzLnkpIDwgNTUwKSk7XG59O1xuXG5jb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICBcbiAgY3R4LmNsZWFyUmVjdCgtMTAwMCwgLTEwMDAsIDIwMDAsIDIwMDApO1xuICBmaWx0ZXJDYWN0aSgpO1xuICBkcmF3SG9yaXpvbigpO1xuICBkcmF3SW5zdHJ1Y3Rpb25zKCk7XG4gIGRyYXdDbG91ZHMoKTtcbiAgLy8gZHJhd1JvdGF0aW9uKCk7XG4gIGRyYXdTY29yZSgpO1xuICBkcmF3SGlTY29yZSgpO1xuICBkcmF3QmlyZCgpO1xuXG4gIC8vY2FjdHVzIHNwYXduIGZyZXF1ZW5jeVxuICBpZiAoY291bnRlciA9PT0gNTUpIHtcbiAgICBzcGF3bkNhY3RpKCk7XG4gICAgY291bnRlciA9IDA7XG4gIH1cblxuXG4gIGNhY3RpLmZvckVhY2goY2FjdHVzID0+IHtcbiAgICBjYWN0dXMueCArPSB0dXJuWDtcbiAgICBsZXQgaCA9IGNhY3R1cy5oZWlnaHQ7XG4gICAgaWYgKGNhY3R1cy5oSW5pdGlhbCA8IGNhY3R1cy5oZWlnaHQpIHtcbiAgICAgIGNhY3R1cy5oSW5pdGlhbCArPSAxO1xuICAgICAgaCA9IGNhY3R1cy5oSW5pdGlhbDtcbiAgICAgIGNhY3R1cy55T3JkIC09IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY3R1cy55T3JkICs9IDEuNDk7XG4gICAgICBjYWN0dXMueSArPSAxLjQ5O1xuICAgICAgLy8gY2FjdHVzLndpZHRoICs9IGNhY3R1cy53aWR0aCAqIDAuMDAxNDtcbiAgICAgIC8vIGNhY3R1cy5oZWlnaHQgKz0gY2FjdHVzLmhlaWdodCAqIDAuMDAxNDtcbiAgICAgIC8vIGNhY3R1cy5oZWlnaHQgKj0gMS4wMDE0O1xuICAgICAgY2FjdHVzLmhJbml0aWFsID0gY2FjdHVzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvL2NhY3R1cyByZW1vdmFsIGFuaW1hdGlvbiBhbmQgeU9yZCBzcGVlZCBjb250cm9sXG4gICAgLy8gaWYgKGNhY3R1cy53aWR0aCA+IDUwKSB7XG4gICAgLy8gICBjYWN0dXMueU9yZCArPSAxO1xuICAgIC8vICAgY2FjdHVzLmhlaWdodCAtPSAxO1xuICAgIC8vIH0gZWxzZSBpZiAoY2FjdHVzLndpZHRoID4gMjcpIHtcbiAgICAvLyAgIGNhY3R1cy55T3JkICs9IDE7XG4gICAgLy8gICAvLyBjYWN0dXMuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgLy8gfSBlbHNlIGlmIChjYWN0dXMud2lkdGggPiAyMykge1xuICAgIC8vICAgY2FjdHVzLnlPcmQgKz0gMC41O1xuICAgIC8vICAgLy8gY2FjdHVzLmNvbG9yID0gXCJyZWRcIjtcbiAgICAvLyB9XG5cbiAgICBpZiAoY2FjdHVzLnkgPiAwKSB7XG4gICAgICAvLyBjYWN0dXMuY29sb3IgPSBcInJlZFwiO1xuICAgIH1cblxuICAgIC8vIGNhY3R1cyBwYXRoIGNoYW5nZSB0byBhY2NvdW50IGZvciBwZXJzcGVjdGl2ZVxuICAgIGlmIChjYWN0dXMueSA+IC05MCkge1xuICAgICAgaWYgKGNhY3R1cy54ID4gMTAwKSB7XG4gICAgICAgIGNhY3R1cy54ICs9IDAuNTU7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54IDwgLTEwMCkge1xuICAgICAgICBjYWN0dXMueCAtPSAwLjU1O1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA+IDYwKSB7XG4gICAgICAgIGNhY3R1cy54ICs9IDAuMjtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPCAtNjApIHtcbiAgICAgICAgY2FjdHVzLnggLT0gMC4yO1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA+IDgwKSB7XG4gICAgICAgIGNhY3R1cy54ICs9IDAuNDtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPCAtODApIHtcbiAgICAgICAgY2FjdHVzLnggLT0gMC40O1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA+IDQwKSB7XG4gICAgICAgIGNhY3R1cy54ICs9IDAuMTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPCAtNDApIHtcbiAgICAgICAgY2FjdHVzLnggLT0gMC4xO1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA+IDIwKSB7XG4gICAgICAgIGNhY3R1cy54ICs9IDAuMDU7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54IDwgLTIwKSB7XG4gICAgICAgIGNhY3R1cy54IC09IDAuMDU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNhY3R1c0hpdCA9IGNhY3R1cy55O1xuICAgIGxldCBsZWZ0SGl0ID0gY2FjdHVzLnggKyAoY2FjdHVzLndpZHRoIC8gMik7XG5cbiAgICBpZiAoKGNhY3R1cy55IDwgMTAgJiYgY2FjdHVzLnkgPiA1KSAmJiAobGVmdEhpdCA+IC0xMjUgJiYgbGVmdEhpdCA8IDEyNSkpIHtcbiAgICAgIC8vIGNhY3R1cy5jb2xvciA9IFwicHVycGxlXCI7XG4gICAgICAvLyBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIGdhbWUgPSBmYWxzZTtcbiAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICBlbmRHYW1lKCk7XG4gICAgICAvLyBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG5cbiAgICBkcmF3Q2FjdHVzKGNhY3R1cy54LCBjYWN0dXMueU9yZCwgY2FjdHVzLndpZHRoLCBoLCBjYWN0dXMuY29sb3IsIGNhY3R1cy5pbWcgKTtcbiAgfSk7XG4gIFxuICBpZiAobGVmdFByZXNzZWQpIHtcbiAgICBpbnN0S2V5ID0gY29udHJvbEw7XG4gICAgaWYgKHR1cm5YIDw9IDApICB7XG4gICAgICB0dXJuWCArPSAwLjA1NTtcbiAgICB9IGVsc2UgaWYgKHR1cm5YID4gMCAmJiB0dXJuWCA8IDEuNykge1xuICAgICAgdHVyblggKz0gMC4wMzU7XG4gICAgfVxuICAgIG1vdmVDbG91ZHMoMC42MSk7IC8vY2hhbmdlIHZhbHVlIHRvIHNoaWZ0IGNsb3VkIHggcG9zaXRpb24gIFxuICAgIGlmIChyb3RhdGlvbiA8IDEwMCAmJiByb3RhdGlvbiA+PSAwKSB7XG4gICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgcm90YXRlQ2FtKHJvdGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uIDwgMCkge1xuICAgICAgcm90YXRpb24gKz0gMTtcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogMC4wNSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHJpZ2h0UHJlc3NlZCkge1xuICAgIGluc3RLZXkgPSBjb250cm9sUjtcbiAgICBpZiAodHVyblggPj0gMCkge1xuICAgICAgdHVyblggLT0gMC4wNTU7XG4gICAgfSBlbHNlIGlmICh0dXJuWCA8IDAgJiYgdHVyblggPiAtMS43KSB7XG4gICAgICB0dXJuWCAtPSAwLjM1O1xuICAgIH1cbiAgICBtb3ZlQ2xvdWRzKC0wLjYxKTsgLy9jaGFuZ2UgdmFsdWUgdG8gc2hpZnQgY2xvdWQgeCBwb3NpdGlvbiBcbiAgICBpZiAocm90YXRpb24gPiAtMTAwICYmIHJvdGF0aW9uIDw9IDApIHtcbiAgICAgIHJvdGF0aW9uIC09IDE7XG4gICAgICByb3RhdGVDYW0ocm90YXRpb24pO1xuICAgIH0gZWxzZSBpZiAocm90YXRpb24gPiAwKSB7XG4gICAgICByb3RhdGlvbiAtPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtMC4wNSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGluc3RLZXkgPSBjb250cm9scztcbiAgICBpZiAocm90YXRpb24gPiAwKSB7XG4gICAgICByb3RhdGlvbiAtPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtMC4wNSk7XG4gICAgfSBlbHNlIGlmIChyb3RhdGlvbiA8IDApIHtcbiAgICAgIHJvdGF0aW9uICs9IDE7XG4gICAgICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIDAuMDUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0dXJuWCA9IDA7XG4gICAgfVxuICB9XG4gIGNvdW50ZXIgKz0gMTtcbiAgc2NvcmUgKz0gMTtcbiAgaWYgKCFwYXVzZWQpIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn07XG5cblxuLy8gY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhbmltYXRlLCAxMCk7XG4vLyBhbmltYXRlKCk7XG5cblxuLy9vbiBrZXlkb3duIHRoZSBob3Jpem9uIHJvdGF0ZXMgdG8gYSBjZXJ0YWluIHBvaW50XG4vL29uIGtleXVwIHRoZSBob3Jpem9uIHJldHVybnMgdG8gaXRzIGluaXRpYWwgc3RhdGVcbi8vYXMgdGhlIGhvcml6b24gc2hpZnRzIGVuZW15IGVsZW1lbnRzL29ic3RhY2xlcyBzaGlmdCB0b29cbi8vdGhleSBhbHNvIGFkZCBvciBkZWNyZWFzZSB0aGVpciB4IHBvc2l0aW9uIGRlcGVuZGluZyBvbiB0aGUga2V5IGRpcmVjdGlvblxuXG4vL3ZhcmlhYmxlIGZvciB0aW1lIGVsYXBzZWQgPT09IGhpZ2ggc2NvcmVcbi8vaGlnaCBzY29yZSBzYXZlZCBhbmQgZGlzcGxheWVkXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==