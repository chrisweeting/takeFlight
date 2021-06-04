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
var canvas = document.getElementById("flyCanvas");
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
    // restart();
    animate();
    animate();
    titleCard.classList.add("hidden");
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
  ctx.save(); // const place = -30 + x;
  // const width = 20 + w;
  // const height = 60 + h;
  // const growingX = place + gX;
  // const growingY =

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
  // ctx.beginPath();
  // ctx.arc(cloud1.sec1, -200, 50, 0, 2 * Math.PI);
  // ctx.arc(cloud1.sec2, -170, 40, 0, 2 * Math.PI);
  // ctx.arc(cloud1.sec3, -150, 30, 0, 2 * Math.PI);
  // ctx.fillStyle = "#add6d8";
  // ctx.fill();
  ctx.drawImage(cloud1, cloudPositions.cloud1, -200, 300, 200);
  ctx.drawImage(cloud2, cloudPositions.cloud2, -300, 300, 150);
  ctx.drawImage(cloud1, cloudPositions.cloud3, -200, 300, 200);
  ctx.drawImage(cloud2, cloudPositions.cloud4, -300, 300, 150); // ctx.beginPath();
  // ctx.arc(cloud2.sec1, -70, 40, 0, 2 * Math.PI);
  // ctx.arc(cloud2.sec2, -100, 40, 0, 2 * Math.PI);
  // ctx.arc(cloud2.sec3, -80, 50, 0, 2 * Math.PI);
  // ctx.fillStyle = "#add6d8";
  // ctx.fill();
};

var moveClouds = function moveClouds(num) {
  for (var cloud in cloudPositions) {
    // let pos = cloudPositions[cloud];
    // pos += num;
    cloudPositions[cloud] += num;
  } // cloudPositions.cloud1 += num;
  // cloudPositions.cloud2 += num;
  // cloudPositions.cloud3 += num;
  // cloudPositions.cloud4 += num;

};

var filterCacti = function filterCacti() {
  cacti = cacti.filter(function (cactus) {
    return cactus.y < 550;
  });
};

var animate = function animate() {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  filterCacti();
  drawHorizon(); // if (hiScore < 600 && (score > 100 && score < 6500)) {

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
    } // let cactusHit = cactus.y - ( h/5 );


    var cactusHit = cactus.y;
    var leftHit = cactus.x + cactus.width / 2; // if ((cactusHit < 10 && cactusHit > 5) && (cactus.x > -225 && cactus.x < 100)) {

    if (cactus.y < 10 && cactus.y > 5 && leftHit > -125 && leftHit < 125) {
      // cactus.color = "purple";
      // clearInterval(interval);
      document.location.reload();
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
  requestAnimationFrame(animate);
}; // const interval = setInterval(animate, 10);
// animate();
// if (spacePressed) {
//   interval();
// }
//on keydown the horizon rotates to a certain point
//on keyup the horizon returns to its initial state
//as the horizon shifts enemy elements/obstacles shift too
//they also add or decrease their x position depending on the key direction
//variable for time elapsed === high score
//high score saved and displayed
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3Rha2VfZmxpZ2h0Ly4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0aXRsZUNhcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInNwYWNlUHJlc3NlZCIsInR1cm5YIiwieSIsInNjb3JlIiwiaGlTY29yZSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyb3RhdGlvbiIsImNvdW50ZXIiLCJjYWN0aUNvbG9ycyIsImNhY3RpIiwiYmlyZEltZyIsIkltYWdlIiwic3JjIiwiY29udHJvbHMiLCJjb250cm9sTCIsImNvbnRyb2xSIiwiY2FjdHVzMSIsImNhY3R1czIiLCJjYWN0dXMzIiwiY2FjdHVzNCIsImNhY3R1czUiLCJjYWN0dXM2IiwiY2FjdHVzNyIsImNhY3R1czgiLCJjbG91ZDEiLCJjbG91ZDIiLCJpbnN0S2V5IiwiY2FjdHVzQmluIiwiaW1nIiwid2lkdGgiLCJoZWlnaHQiLCJjbG91ZFBvc2l0aW9ucyIsImNsb3VkMyIsImNsb3VkNCIsInRyYW5zbGF0ZSIsImtleURvd25IYW5kbGVyIiwiZSIsImtleSIsImtleVVwSGFuZGxlciIsImFuaW1hdGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhd0hvcml6b24iLCJiZWdpblBhdGgiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsImRyYXdTY29yZSIsImZvbnQiLCJmaWxsVGV4dCIsImRyYXdIaVNjb3JlIiwibnVtYmVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIk51bWJlciIsInJvdGF0ZUNhbSIsIm51bSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdCaXJkIiwic2F2ZSIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJkcmF3SW5zdHJ1Y3Rpb25zIiwiZHJhd0NhY3R1cyIsIngiLCJ3IiwiaCIsImNvbG9yIiwic3Bhd25DYWN0aSIsImNlaWwiLCJyYW5kb20iLCJyb3VuZCIsImZsb29yIiwibGVuZ3RoIiwidW5zaGlmdCIsImhJbml0aWFsIiwieU9yZCIsImRyYXdDbG91ZHMiLCJtb3ZlQ2xvdWRzIiwiY2xvdWQiLCJmaWx0ZXJDYWN0aSIsImZpbHRlciIsImNhY3R1cyIsImNsZWFyUmVjdCIsImZvckVhY2giLCJjYWN0dXNIaXQiLCJsZWZ0SGl0IiwibG9jYXRpb24iLCJyZWxvYWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixXQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQUlDLFlBQVksR0FBRyxLQUFu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LENBQUNDLEVBQUwsR0FBVSxHQUFYLEdBQWtCLENBQUMsSUFBOUI7QUFDRCxLQUhELE1BR08sSUFBSXZELFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ3ZCQSxjQUFRLElBQUksQ0FBWjtBQUNBYixTQUFHLENBQUNrRSxNQUFKLENBQVlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQVgsR0FBa0IsSUFBN0I7QUFDRCxLQUhNLE1BR0E7QUFDTC9ELFdBQUssR0FBRyxDQUFSO0FBQ0Q7QUFDRjs7QUFDRFMsU0FBTyxJQUFJLENBQVg7QUFDQVAsT0FBSyxJQUFJLENBQVQ7QUFDQTZGLHVCQUFxQixDQUFDdEQsT0FBRCxDQUFyQjtBQUNELENBeElELEMsQ0EySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVJO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxnQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJztcblxuY29uc3QgdGl0bGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1jYXJkXCIpO1xuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbHlDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xubGV0IHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xubGV0IGxlZnRQcmVzc2VkID0gZmFsc2U7XG5sZXQgc3BhY2VQcmVzc2VkID0gZmFsc2U7XG5sZXQgdHVyblggPSAwO1xubGV0IHkgPSAwO1xubGV0IHNjb3JlID0gMDtcbmxldCBoaVNjb3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpU2NvcmVcIikpIHx8IDA7XG5sZXQgcm90YXRpb24gPSAwO1xubGV0IGNvdW50ZXIgPSAwO1xubGV0IGNhY3RpQ29sb3JzID0gW1wiIzA3NmQwN1wiLCBcIiMyZTdhMmZcIiwgXCIjYTFkNmEyXCIsIFwiIzVlZjc1ZVwiXTtcbmxldCBjYWN0aSA9IFtdO1xuXG5jb25zdCBiaXJkSW1nID0gbmV3IEltYWdlKCk7XG5iaXJkSW1nLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wNS5wbmdcIjtcblxuY29uc3QgY29udHJvbHMgPSBuZXcgSW1hZ2UoKTtcbmNvbnRyb2xzLnNyYyA9IFwic3JjL2Fzc2V0cy9rZXlzLnBuZ1wiO1xuXG5jb25zdCBjb250cm9sTCA9IG5ldyBJbWFnZSgpO1xuY29udHJvbEwuc3JjID0gXCJzcmMvYXNzZXRzL2tleV9sZWZ0LnBuZ1wiO1xuXG5jb25zdCBjb250cm9sUiA9IG5ldyBJbWFnZSgpO1xuY29udHJvbFIuc3JjID0gXCJzcmMvYXNzZXRzL2tleV9yaWdodC5wbmdcIjtcblxuY29uc3QgY2FjdHVzMSA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzMS5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDYucG5nXCI7XG5cbmNvbnN0IGNhY3R1czIgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czIuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTA3LnBuZ1wiO1xuXG5jb25zdCBjYWN0dXMzID0gbmV3IEltYWdlKCk7XG5jYWN0dXMzLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wOC5wbmdcIjtcblxuY29uc3QgY2FjdHVzNCA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzNC5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDkucG5nXCI7XG5cbmNvbnN0IGNhY3R1czUgPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czUuc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTEwLnBuZ1wiO1xuXG5jb25zdCBjYWN0dXM2ID0gbmV3IEltYWdlKCk7XG5jYWN0dXM2LnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0xMS5wbmdcIjtcblxuY29uc3QgY2FjdHVzNyA9IG5ldyBJbWFnZSgpO1xuY2FjdHVzNy5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMTIucG5nXCI7XG5cbmNvbnN0IGNhY3R1czggPSBuZXcgSW1hZ2UoKTtcbmNhY3R1czguc3JjID0gXCJzcmMvYXNzZXRzL1Rha2UgRmxpZ2h0LTEzLnBuZ1wiO1xuXG5jb25zdCBjbG91ZDEgPSBuZXcgSW1hZ2UoKTtcbmNsb3VkMS5zcmMgPSBcInNyYy9hc3NldHMvVGFrZSBGbGlnaHQtMDMucG5nXCI7XG5cbmNvbnN0IGNsb3VkMiA9IG5ldyBJbWFnZSgpO1xuY2xvdWQyLnNyYyA9IFwic3JjL2Fzc2V0cy9UYWtlIEZsaWdodC0wNC5wbmdcIjtcblxubGV0IGluc3RLZXkgPSBjb250cm9scztcblxuY29uc3QgY2FjdHVzQmluID0gW1xuICB7IGltZzogY2FjdHVzMSwgd2lkdGg6IDE4MCwgaGVpZ2h0OiAzMDAgfSxcbiAgeyBpbWc6IGNhY3R1czIsIHdpZHRoOiAxODAsIGhlaWdodDogMzAwIH0sXG4gIHsgaW1nOiBjYWN0dXMzLCB3aWR0aDogMTUwLCBoZWlnaHQ6IDI1MCB9LFxuICB7IGltZzogY2FjdHVzNCwgd2lkdGg6IDE1MCwgaGVpZ2h0OiAxNDAgfSxcbiAgeyBpbWc6IGNhY3R1czUsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwIH0sXG4gIHsgaW1nOiBjYWN0dXM2LCB3aWR0aDogMTcwLCBoZWlnaHQ6IDE1MCB9LFxuICB7IGltZzogY2FjdHVzNywgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxNTAgfSxcbiAgeyBpbWc6IGNhY3R1czgsIHdpZHRoOiA4MCwgaGVpZ2h0OiAyODAgfSxcbl07XG5cbnZhciBjbG91ZFBvc2l0aW9ucyA9IHtcbiAgY2xvdWQxOiAxMDAsXG4gIGNsb3VkMjogLTMzMCxcbiAgY2xvdWQzOiAtNzMwLFxuICBjbG91ZDQ6IDcwMCxcbn07XG5cblxuY3R4LnRyYW5zbGF0ZSg2NDAsIDM2MCk7XG5cblxuXG5jb25zdCBrZXlEb3duSGFuZGxlciA9IChlKSA9PiB7XG4gIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleSA9PT0gJ1NwYWNlYmFyJykge1xuICAgIHNwYWNlUHJlc3NlZCA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGtleVVwSGFuZGxlciA9IChlKSA9PiB7XG4gIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICByaWdodFByZXNzZWQgPSBmYWxzZTtcbiAgfVxuICBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgbGVmdFByZXNzZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChlLmtleSA9PT0gJyAnIHx8IGUua2V5ID09PSAnU3BhY2ViYXInKSB7XG4gICAgLy8gcmVzdGFydCgpO1xuICAgIGFuaW1hdGUoKTtcbiAgICBhbmltYXRlKCk7XG4gICAgdGl0bGVDYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgc3BhY2VQcmVzc2VkID0gZmFsc2U7XG4gIH1cbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmNvbnN0IGRyYXdIb3Jpem9uID0gKCkgPT4ge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5yZWN0KC0xMDAwLCB5LCAyMDAwLCAxNTAwKTtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjZThlMmE0XCI7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbn07XG5cbi8vIGNvbnN0IGRyYXdSb3RhdGlvbiA9ICgpID0+IHtcbi8vICAgY3R4LmZvbnQgPSBcIjE2cHggQXJpYWxcIjtcbi8vICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuLy8gICBjdHguZmlsbFRleHQoXCJSb3RhdGlvbjogXCIgKyByb3RhdGlvbiwgMSwgMSk7XG4vLyB9O1xuXG5jb25zdCBkcmF3U2NvcmUgPSAoKSA9PiB7XG4gIGlmIChzY29yZSA+IDQwMDApIHtcbiAgICBjdHguZm9udCA9IFwiMThweCBIZWx2ZXRpY2FcIjtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMDA5NUREXCI7XG4gIH0gZWxzZSB7XG4gICAgY3R4LmZvbnQgPSBcIjE2cHggSGVsdmV0aWNhXCI7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwOTVERFwiO1xuICB9XG4gIGN0eC5maWxsVGV4dChcIlNjb3JlOiBcIiArIHNjb3JlLCAzLCAtMyk7XG5cbn07XG5cbmNvbnN0IGRyYXdIaVNjb3JlID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIGhpU2NvcmUgIT0gXCJudW1iZXJcIikgaGlTY29yZSA9IGhpU2NvcmUubnVtYmVyO1xuXG4gIGlmIChzY29yZSA+IGhpU2NvcmUpIHtcbiAgICBoaVNjb3JlID0gc2NvcmU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpU2NvcmUnLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBudW1iZXI6IE51bWJlcihzY29yZSlcbiAgICB9KSk7XG4gIH1cblxuICBjdHguZm9udCA9IFwiMTZweCBIZWx2ZXRpY2FcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gIFxuICBjdHguZmlsbFRleHQoXCJIaWdoIFNjb3JlOiBcIiArIGhpU2NvcmUsIDMsIC0yMCk7XG5cbn07XG5cbmNvbnN0IHJvdGF0ZUNhbSA9IChudW0pID0+IHtcbiAgaWYgKG51bSA8IDEwMCAmJiBudW0gPiAwKSB7XG4gICAgcmV0dXJuIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogMC4wNSk7XG4gIH0gZWxzZSBpZiAobnVtID4gLTEwMCAmJiBudW0gPCAwKSB7XG4gICAgcmV0dXJuIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLTAuMDUpO1xuICB9XG59O1xuXG5jb25zdCBkcmF3QmlyZCA9ICgpID0+IHtcbiAgY3R4LnNhdmUoKTtcbiAgXG4gIGN0eC50cmFuc2xhdGUoMCwgMTUwKTtcbiAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtKChyb3RhdGlvbiAqIDAuNSApIC8gNCkpO1xuXG4gIC8vIGN0eC5zaGFkb3dCbHVyID0gNTA7XG4gIC8vIGN0eC5zaGFkb3dDb2xvciA9ICdibGFjayc7XG4gIC8vIGN0eC5zaGFkb3dPZmZzZXRZID0gODA7XG4gIGN0eC5kcmF3SW1hZ2UoYmlyZEltZywgLTEyNSwgLTUwLCAyNTAsIDEwMCk7XG4gIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gLy8gY3R4LnJlY3QoLTYwLCAtMTAsIDEyMCwgMjApO1xuICAvLyBjdHgucmVjdCgtMTI1LCAtNTAsIDI1MCwgMTAwKTtcbiAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICAvLyBjdHguZmlsbCgpO1xuICAvLyBjdHguY2xvc2VQYXRoKCk7XG4gIFxuICBcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IGRyYXdJbnN0cnVjdGlvbnMgPSAoKSA9PiB7XG4gIGN0eC5zYXZlKCk7XG5cbiAgY3R4LnRyYW5zbGF0ZSgwLCA1MCk7XG4gIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLSgocm90YXRpb24gKiAxKSAvIDI1KSk7XG5cbiAgaWYgKHNjb3JlID4gMTUwICYmIHNjb3JlIDwgNzAwKSB7XG4gICAgY3R4LmRyYXdJbWFnZShpbnN0S2V5LCAtMTAwLCAyMDAsIDIwMCwgNzApO1xuICB9XG5cbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IGRyYXdDYWN0dXMgPSAoeCwgeSwgdywgaCwgY29sb3IsIGltZykgPT4ge1xuICBjdHguc2F2ZSgpO1xuICAvLyBjb25zdCBwbGFjZSA9IC0zMCArIHg7XG4gIC8vIGNvbnN0IHdpZHRoID0gMjAgKyB3O1xuICAvLyBjb25zdCBoZWlnaHQgPSA2MCArIGg7XG4gIC8vIGNvbnN0IGdyb3dpbmdYID0gcGxhY2UgKyBnWDtcbiAgLy8gY29uc3QgZ3Jvd2luZ1kgPVxuICBjdHguZHJhd0ltYWdlKGltZywgeCwgeSwgdywgaCk7XG4gIC8vIGN0eC5iZWdpblBhdGgoKTtcbiAgLy8gY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gIC8vIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgLy8gY3R4LmZpbGwoKTtcbiAgLy8gY3R4LmNsb3NlUGF0aCgpO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuY29uc3Qgc3Bhd25DYWN0aSA9ICgpID0+IHtcbiAgbGV0IHggPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDg0MCkgKiAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSA/IDEgOiAtMSk7XG4gIGxldCBjb2xvciA9IGNhY3RpQ29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNhY3RpQ29sb3JzLmxlbmd0aCldO1xuICBsZXQgeyB3aWR0aCwgaGVpZ2h0LCBpbWcgfSA9IGNhY3R1c0JpbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYWN0dXNCaW4ubGVuZ3RoKV07XG4gIGNhY3RpLnVuc2hpZnQoe1xuICAgIHg6IHgsXG4gICAgeTogLTEwMCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIGhJbml0aWFsOiAwLFxuICAgIHlPcmQ6IDAsXG4gICAgaW1nOiBpbWdcbiAgfSk7XG4gIC8vYXNzaWduIGRlZmF1bHQgdmFyaWFibGVzIHN0b3JlIHRoZW0gaW4gb2JqZWN0c1xufTtcblxuY29uc3QgZHJhd0Nsb3VkcyA9ICgpID0+IHtcbiAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAvLyBjdHguYXJjKGNsb3VkMS5zZWMxLCAtMjAwLCA1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAvLyBjdHguYXJjKGNsb3VkMS5zZWMyLCAtMTcwLCA0MCwgMCwgMiAqIE1hdGguUEkpO1xuICAvLyBjdHguYXJjKGNsb3VkMS5zZWMzLCAtMTUwLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xuICAvLyBjdHguZmlsbFN0eWxlID0gXCIjYWRkNmQ4XCI7XG4gIC8vIGN0eC5maWxsKCk7XG4gIGN0eC5kcmF3SW1hZ2UoY2xvdWQxLCBjbG91ZFBvc2l0aW9ucy5jbG91ZDEsIC0yMDAsIDMwMCwgMjAwKTtcbiAgY3R4LmRyYXdJbWFnZShjbG91ZDIsIGNsb3VkUG9zaXRpb25zLmNsb3VkMiwgLTMwMCwgMzAwLCAxNTApO1xuICBjdHguZHJhd0ltYWdlKGNsb3VkMSwgY2xvdWRQb3NpdGlvbnMuY2xvdWQzLCAtMjAwLCAzMDAsIDIwMCk7XG4gIGN0eC5kcmF3SW1hZ2UoY2xvdWQyLCBjbG91ZFBvc2l0aW9ucy5jbG91ZDQsIC0zMDAsIDMwMCwgMTUwKTtcblxuICAvLyBjdHguYmVnaW5QYXRoKCk7XG4gIC8vIGN0eC5hcmMoY2xvdWQyLnNlYzEsIC03MCwgNDAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgLy8gY3R4LmFyYyhjbG91ZDIuc2VjMiwgLTEwMCwgNDAsIDAsIDIgKiBNYXRoLlBJKTtcbiAgLy8gY3R4LmFyYyhjbG91ZDIuc2VjMywgLTgwLCA1MCwgMCwgMiAqIE1hdGguUEkpO1xuICAvLyBjdHguZmlsbFN0eWxlID0gXCIjYWRkNmQ4XCI7XG4gIC8vIGN0eC5maWxsKCk7XG59O1xuXG5jb25zdCBtb3ZlQ2xvdWRzID0gKG51bSkgPT4ge1xuICBmb3IgKGNvbnN0IGNsb3VkIGluIGNsb3VkUG9zaXRpb25zKSB7XG4gICAgLy8gbGV0IHBvcyA9IGNsb3VkUG9zaXRpb25zW2Nsb3VkXTtcbiAgICAvLyBwb3MgKz0gbnVtO1xuICAgIGNsb3VkUG9zaXRpb25zW2Nsb3VkXSArPSBudW07XG4gIH1cbiAgLy8gY2xvdWRQb3NpdGlvbnMuY2xvdWQxICs9IG51bTtcbiAgLy8gY2xvdWRQb3NpdGlvbnMuY2xvdWQyICs9IG51bTtcbiAgLy8gY2xvdWRQb3NpdGlvbnMuY2xvdWQzICs9IG51bTtcbiAgLy8gY2xvdWRQb3NpdGlvbnMuY2xvdWQ0ICs9IG51bTtcbn07XG5cbmNvbnN0IGZpbHRlckNhY3RpID0gKCkgPT4ge1xuICBjYWN0aSA9IGNhY3RpLmZpbHRlcihjYWN0dXMgPT4gKChjYWN0dXMueSkgPCA1NTApKTtcbn07XG5cbmNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gIFxuICBjdHguY2xlYXJSZWN0KC0xMDAwLCAtMTAwMCwgMjAwMCwgMjAwMCk7XG4gIGZpbHRlckNhY3RpKCk7XG4gIGRyYXdIb3Jpem9uKCk7XG4gIC8vIGlmIChoaVNjb3JlIDwgNjAwICYmIChzY29yZSA+IDEwMCAmJiBzY29yZSA8IDY1MDApKSB7XG4gIGRyYXdJbnN0cnVjdGlvbnMoKTtcbiAgZHJhd0Nsb3VkcygpO1xuICAvLyBkcmF3Um90YXRpb24oKTtcbiAgZHJhd1Njb3JlKCk7XG4gIGRyYXdIaVNjb3JlKCk7XG4gIGRyYXdCaXJkKCk7XG5cbiAgLy9jYWN0dXMgc3Bhd24gZnJlcXVlbmN5XG4gIGlmIChjb3VudGVyID09PSA1NSkge1xuICAgIHNwYXduQ2FjdGkoKTtcbiAgICBjb3VudGVyID0gMDtcbiAgfVxuXG5cbiAgY2FjdGkuZm9yRWFjaChjYWN0dXMgPT4ge1xuICAgIGNhY3R1cy54ICs9IHR1cm5YO1xuICAgIGxldCBoID0gY2FjdHVzLmhlaWdodDtcbiAgICBpZiAoY2FjdHVzLmhJbml0aWFsIDwgY2FjdHVzLmhlaWdodCkge1xuICAgICAgY2FjdHVzLmhJbml0aWFsICs9IDE7XG4gICAgICBoID0gY2FjdHVzLmhJbml0aWFsO1xuICAgICAgY2FjdHVzLnlPcmQgLT0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjdHVzLnlPcmQgKz0gMS40OTtcbiAgICAgIGNhY3R1cy55ICs9IDEuNDk7XG4gICAgICAvLyBjYWN0dXMud2lkdGggKz0gY2FjdHVzLndpZHRoICogMC4wMDE0O1xuICAgICAgLy8gY2FjdHVzLmhlaWdodCArPSBjYWN0dXMuaGVpZ2h0ICogMC4wMDE0O1xuICAgICAgLy8gY2FjdHVzLmhlaWdodCAqPSAxLjAwMTQ7XG4gICAgICBjYWN0dXMuaEluaXRpYWwgPSBjYWN0dXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vY2FjdHVzIHJlbW92YWwgYW5pbWF0aW9uIGFuZCB5T3JkIHNwZWVkIGNvbnRyb2xcbiAgICAvLyBpZiAoY2FjdHVzLndpZHRoID4gNTApIHtcbiAgICAvLyAgIGNhY3R1cy55T3JkICs9IDE7XG4gICAgLy8gICBjYWN0dXMuaGVpZ2h0IC09IDE7XG4gICAgLy8gfSBlbHNlIGlmIChjYWN0dXMud2lkdGggPiAyNykge1xuICAgIC8vICAgY2FjdHVzLnlPcmQgKz0gMTtcbiAgICAvLyAgIC8vIGNhY3R1cy5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICAvLyB9IGVsc2UgaWYgKGNhY3R1cy53aWR0aCA+IDIzKSB7XG4gICAgLy8gICBjYWN0dXMueU9yZCArPSAwLjU7XG4gICAgLy8gICAvLyBjYWN0dXMuY29sb3IgPSBcInJlZFwiO1xuICAgIC8vIH1cblxuICAgIGlmIChjYWN0dXMueSA+IDApIHtcbiAgICAgIC8vIGNhY3R1cy5jb2xvciA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgLy8gY2FjdHVzIHBhdGggY2hhbmdlIHRvIGFjY291bnQgZm9yIHBlcnNwZWN0aXZlXG4gICAgaWYgKGNhY3R1cy55ID4gLTkwKSB7XG4gICAgICBpZiAoY2FjdHVzLnggPiAxMDApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC41NTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPCAtMTAwKSB7XG4gICAgICAgIGNhY3R1cy54IC09IDAuNTU7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54ID4gNjApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC4yO1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA8IC02MCkge1xuICAgICAgICBjYWN0dXMueCAtPSAwLjI7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54ID4gODApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC40O1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA8IC04MCkge1xuICAgICAgICBjYWN0dXMueCAtPSAwLjQ7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54ID4gNDApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC4xO1xuICAgICAgfSBlbHNlIGlmIChjYWN0dXMueCA8IC00MCkge1xuICAgICAgICBjYWN0dXMueCAtPSAwLjE7XG4gICAgICB9IGVsc2UgaWYgKGNhY3R1cy54ID4gMjApIHtcbiAgICAgICAgY2FjdHVzLnggKz0gMC4wNTtcbiAgICAgIH0gZWxzZSBpZiAoY2FjdHVzLnggPCAtMjApIHtcbiAgICAgICAgY2FjdHVzLnggLT0gMC4wNTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsZXQgY2FjdHVzSGl0ID0gY2FjdHVzLnkgLSAoIGgvNSApO1xuICAgIGxldCBjYWN0dXNIaXQgPSBjYWN0dXMueTtcbiAgICBsZXQgbGVmdEhpdCA9IGNhY3R1cy54ICsgKGNhY3R1cy53aWR0aCAvIDIpO1xuXG4gICAgLy8gaWYgKChjYWN0dXNIaXQgPCAxMCAmJiBjYWN0dXNIaXQgPiA1KSAmJiAoY2FjdHVzLnggPiAtMjI1ICYmIGNhY3R1cy54IDwgMTAwKSkge1xuICAgIGlmICgoY2FjdHVzLnkgPCAxMCAmJiBjYWN0dXMueSA+IDUpICYmIChsZWZ0SGl0ID4gLTEyNSAmJiBsZWZ0SGl0IDwgMTI1KSkge1xuICAgICAgLy8gY2FjdHVzLmNvbG9yID0gXCJwdXJwbGVcIjtcbiAgICAgIC8vIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuXG4gICAgZHJhd0NhY3R1cyhjYWN0dXMueCwgY2FjdHVzLnlPcmQsIGNhY3R1cy53aWR0aCwgaCwgY2FjdHVzLmNvbG9yLCBjYWN0dXMuaW1nICk7XG4gIH0pO1xuICBcbiAgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgaW5zdEtleSA9IGNvbnRyb2xMO1xuICAgIGlmICh0dXJuWCA8PSAwKSAge1xuICAgICAgdHVyblggKz0gMC4wNTU7XG4gICAgfSBlbHNlIGlmICh0dXJuWCA+IDAgJiYgdHVyblggPCAxLjcpIHtcbiAgICAgIHR1cm5YICs9IDAuMDM1O1xuICAgIH1cbiAgICBtb3ZlQ2xvdWRzKDAuNjEpOyAvL2NoYW5nZSB2YWx1ZSB0byBzaGlmdCBjbG91ZCB4IHBvc2l0aW9uICBcbiAgICBpZiAocm90YXRpb24gPCAxMDAgJiYgcm90YXRpb24gPj0gMCkge1xuICAgICAgcm90YXRpb24gKz0gMTtcbiAgICAgIHJvdGF0ZUNhbShyb3RhdGlvbik7XG4gICAgfSBlbHNlIGlmIChyb3RhdGlvbiA8IDApIHtcbiAgICAgIHJvdGF0aW9uICs9IDE7XG4gICAgICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIDAuMDUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChyaWdodFByZXNzZWQpIHtcbiAgICBpbnN0S2V5ID0gY29udHJvbFI7XG4gICAgaWYgKHR1cm5YID49IDApIHtcbiAgICAgIHR1cm5YIC09IDAuMDU1O1xuICAgIH0gZWxzZSBpZiAodHVyblggPCAwICYmIHR1cm5YID4gLTEuNykge1xuICAgICAgdHVyblggLT0gMC4zNTtcbiAgICB9XG4gICAgbW92ZUNsb3VkcygtMC42MSk7IC8vY2hhbmdlIHZhbHVlIHRvIHNoaWZ0IGNsb3VkIHggcG9zaXRpb24gXG4gICAgaWYgKHJvdGF0aW9uID4gLTEwMCAmJiByb3RhdGlvbiA8PSAwKSB7XG4gICAgICByb3RhdGlvbiAtPSAxO1xuICAgICAgcm90YXRlQ2FtKHJvdGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uID4gMCkge1xuICAgICAgcm90YXRpb24gLT0gMTtcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLTAuMDUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpbnN0S2V5ID0gY29udHJvbHM7XG4gICAgaWYgKHJvdGF0aW9uID4gMCkge1xuICAgICAgcm90YXRpb24gLT0gMTtcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLTAuMDUpO1xuICAgIH0gZWxzZSBpZiAocm90YXRpb24gPCAwKSB7XG4gICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAwLjA1KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHVyblggPSAwO1xuICAgIH1cbiAgfVxuICBjb3VudGVyICs9IDE7XG4gIHNjb3JlICs9IDE7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn07XG5cblxuLy8gY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhbmltYXRlLCAxMCk7XG4vLyBhbmltYXRlKCk7XG4vLyBpZiAoc3BhY2VQcmVzc2VkKSB7XG4vLyAgIGludGVydmFsKCk7XG4vLyB9XG5cbiAgICAvL29uIGtleWRvd24gdGhlIGhvcml6b24gcm90YXRlcyB0byBhIGNlcnRhaW4gcG9pbnRcbiAgICAvL29uIGtleXVwIHRoZSBob3Jpem9uIHJldHVybnMgdG8gaXRzIGluaXRpYWwgc3RhdGVcbiAgICAvL2FzIHRoZSBob3Jpem9uIHNoaWZ0cyBlbmVteSBlbGVtZW50cy9vYnN0YWNsZXMgc2hpZnQgdG9vXG4gICAgLy90aGV5IGFsc28gYWRkIG9yIGRlY3JlYXNlIHRoZWlyIHggcG9zaXRpb24gZGVwZW5kaW5nIG9uIHRoZSBrZXkgZGlyZWN0aW9uXG5cbiAgICAvL3ZhcmlhYmxlIGZvciB0aW1lIGVsYXBzZWQgPT09IGhpZ2ggc2NvcmVcbiAgICAvL2hpZ2ggc2NvcmUgc2F2ZWQgYW5kIGRpc3BsYXllZFxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=