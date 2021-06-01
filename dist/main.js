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
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");

var canvas = document.getElementById("flyCanvas");
var ctx = canvas.getContext("2d");
var rightPressed = false;
var leftPressed = false;
var turnX = 0;
var y = 0;
var rotationInit = 0;
var rotation = 0;
var cacti = {
  0: {
    x: -80,
    y: -60,
    width: 20,
    height: 60
  },
  1: {
    x: -30,
    y: -60,
    width: 20,
    height: 60
  },
  2: {
    x: 30,
    y: -60,
    width: 20,
    height: 60
  }
};
ctx.translate(240, 200);

var keyDownHandler = function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
};

var keyUpHandler = function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
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
};

var drawRotation = function drawRotation() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Rotation: " + rotation, 1, 1);
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
  ctx.translate(0, 50);
  ctx.rotate(Math.PI / 180 * -(rotation / 20));
  ctx.beginPath();
  ctx.rect(-30, -10, 60, 20);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
  ctx.restore();
};

var drawCactus = function drawCactus(x, y, w, h) {
  // const place = -30 + x;
  // const width = 20 + w;
  // const height = 60 + h;
  // const growingX = place + gX;
  // const growingY =
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fillStyle = "#a1d6a2";
  ctx.fill();
  ctx.closePath();
};

var animate = function animate() {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  drawHorizon();
  drawRotation();
  drawBird();

  for (var i in cacti) {
    var cactus = cacti[i];
    cactus.x += turnX;
    drawCactus(cactus.x, cactus.y, cactus.width, cactus.height);
  } // turnX = 0;
  // ctx.rotate((Math.PI / 180) * rotation);


  if (leftPressed) {
    turnX += 0.01;

    if (rotation < 100 && rotation >= 0) {
      rotation += 1;
      rotateCam(rotation);
    } else if (rotation < 0) {
      rotation += 1;
      ctx.rotate(Math.PI / 180 * 0.05);
    }
  } else if (rightPressed) {
    turnX -= 0.01;

    if (rotation > -100 && rotation <= 0) {
      rotation -= 1;
      rotateCam(rotation);
    } else if (rotation > 0) {
      rotation -= 1;
      ctx.rotate(Math.PI / 180 * -0.05);
    }
  } else {
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
};

setInterval(animate, 10); //on keydown the horizon rotates to a certain point
//on keyup the horizon returns to its initial state
//as the horizon shifts enemy elements/obstacles shift too
//they also add or decrease their x position depending on the key direction
//variable for time elapsed === high score
//high score saved and displayed
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3Rha2VfZmxpZ2h0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rha2VfZmxpZ2h0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInR1cm5YIiwieSIsInJvdGF0aW9uSW5pdCIsInJvdGF0aW9uIiwiY2FjdGkiLCJ4Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFuc2xhdGUiLCJrZXlEb3duSGFuZGxlciIsImUiLCJrZXkiLCJrZXlVcEhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhd0hvcml6b24iLCJiZWdpblBhdGgiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsImRyYXdSb3RhdGlvbiIsImZvbnQiLCJmaWxsVGV4dCIsInJvdGF0ZUNhbSIsIm51bSIsInJvdGF0ZSIsIk1hdGgiLCJQSSIsImRyYXdCaXJkIiwic2F2ZSIsInJlc3RvcmUiLCJkcmF3Q2FjdHVzIiwidyIsImgiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiaSIsImNhY3R1cyIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7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Q0EsUUFBSUcsUUFBUSxHQUFHLENBQUMsR0FBWixJQUFtQkEsUUFBUSxJQUFJLENBQW5DLEVBQXNDO0FBQ3BDQSxjQUFRLElBQUksQ0FBWjtBQUNBb0IsZUFBUyxDQUFDcEIsUUFBRCxDQUFUO0FBQ0QsS0FIRCxNQUdPLElBQUlBLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ3ZCQSxjQUFRLElBQUksQ0FBWjtBQUNBUCxTQUFHLENBQUM2QixNQUFKLENBQVlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQVgsR0FBa0IsQ0FBQyxJQUE5QjtBQUNEO0FBQ0YsR0FUTSxNQVNBO0FBQ0wsUUFBSXhCLFFBQVEsR0FBRyxDQUFmLEVBQWtCO0FBQ2hCQSxjQUFRLElBQUksQ0FBWjtBQUNBUCxTQUFHLENBQUM2QixNQUFKLENBQVlDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLEdBQVgsR0FBa0IsQ0FBQyxJQUE5QjtBQUNELEtBSEQsTUFHTyxJQUFJeEIsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDdkJBLGNBQVEsSUFBSSxDQUFaO0FBQ0FQLFNBQUcsQ0FBQzZCLE1BQUosQ0FBWUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQixJQUE3QjtBQUNELEtBSE0sTUFHQTtBQUNMM0IsV0FBSyxHQUFHLENBQVI7QUFDRDtBQUNGO0FBQ0YsQ0ExQ0Q7O0FBNkNBc0MsV0FBVyxDQUFDSixPQUFELEVBQVUsRUFBVixDQUFYLEMsQ0FFSTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZ0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZseUNhbnZhc1wiKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xudmFyIGxlZnRQcmVzc2VkID0gZmFsc2U7XG52YXIgdHVyblggPSAwO1xudmFyIHkgPSAwO1xudmFyIHJvdGF0aW9uSW5pdCA9IDA7XG52YXIgcm90YXRpb24gPSAwO1xudmFyIGNhY3RpID0ge1xuICAwOiB7IHg6IC04MCwgeTogLTYwLCB3aWR0aDogMjAsIGhlaWdodDogNjAgfSxcbiAgMTogeyB4OiAtMzAsIHk6IC02MCwgd2lkdGg6IDIwLCBoZWlnaHQ6IDYwIH0sXG4gIDI6IHsgeDogMzAsIHk6IC02MCwgd2lkdGg6IDIwLCBoZWlnaHQ6IDYwIH0sXG59O1xuXG5jdHgudHJhbnNsYXRlKDI0MCwgMjAwKTtcblxuXG5cbmNvbnN0IGtleURvd25IYW5kbGVyID0gKGUpID0+IHtcbiAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3Qga2V5VXBIYW5kbGVyID0gKGUpID0+IHtcbiAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICB9XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG5jb25zdCBkcmF3SG9yaXpvbiA9ICgpID0+IHtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgucmVjdCgtMTAwMCwgeSwgMjAwMCwgMTUwMCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwiI2U4ZTJhNFwiO1xuICBjdHguZmlsbCgpO1xuICBjdHguY2xvc2VQYXRoKCk7XG59O1xuXG5jb25zdCBkcmF3Um90YXRpb24gPSAoKSA9PiB7XG4gIGN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUm90YXRpb246IFwiICsgcm90YXRpb24sIDEsIDEpO1xufTtcblxuY29uc3Qgcm90YXRlQ2FtID0gKG51bSkgPT4ge1xuICBpZiAobnVtIDwgMTAwICYmIG51bSA+IDApIHtcbiAgICByZXR1cm4gY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAwLjA1KTtcbiAgfSBlbHNlIGlmIChudW0gPiAtMTAwICYmIG51bSA8IDApIHtcbiAgICByZXR1cm4gY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtMC4wNSk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYXdCaXJkID0gKCkgPT4ge1xuICBjdHguc2F2ZSgpO1xuICBcbiAgY3R4LnRyYW5zbGF0ZSgwLCA1MCk7XG4gIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLShyb3RhdGlvbiAvIDIwKSk7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnJlY3QoLTMwLCAtMTAsIDYwLCAyMCk7XG4gIGN0eC5maWxsU3R5bGUgPSBcImJsdWVcIjtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbmNvbnN0IGRyYXdDYWN0dXMgPSAoeCwgeSwgdywgaCkgPT4ge1xuICAvLyBjb25zdCBwbGFjZSA9IC0zMCArIHg7XG4gIC8vIGNvbnN0IHdpZHRoID0gMjAgKyB3O1xuICAvLyBjb25zdCBoZWlnaHQgPSA2MCArIGg7XG4gIC8vIGNvbnN0IGdyb3dpbmdYID0gcGxhY2UgKyBnWDtcbiAgLy8gY29uc3QgZ3Jvd2luZ1kgPVxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5yZWN0KHgsIHksIHcsIGgpO1xuICBjdHguZmlsbFN0eWxlID0gXCIjYTFkNmEyXCI7XG4gIGN0eC5maWxsKCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbn07XG5cbmNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gIGN0eC5jbGVhclJlY3QoLTEwMDAsIC0xMDAwLCAyMDAwLCAyMDAwKTtcbiAgZHJhd0hvcml6b24oKTtcbiAgZHJhd1JvdGF0aW9uKCk7XG4gIGRyYXdCaXJkKCk7XG4gIGZvciAoY29uc3QgaSBpbiBjYWN0aSkge1xuICAgIGxldCBjYWN0dXMgPSBjYWN0aVtpXTtcbiAgICBjYWN0dXMueCArPSB0dXJuWDtcbiAgICBkcmF3Q2FjdHVzKGNhY3R1cy54LCBjYWN0dXMueSwgY2FjdHVzLndpZHRoLCBjYWN0dXMuaGVpZ2h0KTtcbiAgfVxuICAvLyB0dXJuWCA9IDA7XG5cbiAgLy8gY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiByb3RhdGlvbik7XG4gIGlmIChsZWZ0UHJlc3NlZCkge1xuICAgIHR1cm5YICs9IDAuMDE7XG4gICAgaWYgKHJvdGF0aW9uIDwgMTAwICYmIHJvdGF0aW9uID49IDApIHtcbiAgICAgIHJvdGF0aW9uICs9IDE7XG4gICAgICByb3RhdGVDYW0ocm90YXRpb24pO1xuICAgIH0gZWxzZSBpZiAocm90YXRpb24gPCAwKSB7XG4gICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAwLjA1KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgdHVyblggLT0gMC4wMTtcbiAgICBpZiAocm90YXRpb24gPiAtMTAwICYmIHJvdGF0aW9uIDw9IDApIHtcbiAgICAgIHJvdGF0aW9uIC09IDE7XG4gICAgICByb3RhdGVDYW0ocm90YXRpb24pO1xuICAgIH0gZWxzZSBpZiAocm90YXRpb24gPiAwKSB7XG4gICAgICByb3RhdGlvbiAtPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtMC4wNSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChyb3RhdGlvbiA+IDApIHtcbiAgICAgIHJvdGF0aW9uIC09IDE7XG4gICAgICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIC0wLjA1KTtcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uIDwgMCkge1xuICAgICAgcm90YXRpb24gKz0gMTtcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogMC4wNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR1cm5YID0gMDtcbiAgICB9XG4gIH1cbn07XG5cblxuc2V0SW50ZXJ2YWwoYW5pbWF0ZSwgMTApO1xuXG4gICAgLy9vbiBrZXlkb3duIHRoZSBob3Jpem9uIHJvdGF0ZXMgdG8gYSBjZXJ0YWluIHBvaW50XG4gICAgLy9vbiBrZXl1cCB0aGUgaG9yaXpvbiByZXR1cm5zIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAgLy9hcyB0aGUgaG9yaXpvbiBzaGlmdHMgZW5lbXkgZWxlbWVudHMvb2JzdGFjbGVzIHNoaWZ0IHRvb1xuICAgIC8vdGhleSBhbHNvIGFkZCBvciBkZWNyZWFzZSB0aGVpciB4IHBvc2l0aW9uIGRlcGVuZGluZyBvbiB0aGUga2V5IGRpcmVjdGlvblxuXG4gICAgLy92YXJpYWJsZSBmb3IgdGltZSBlbGFwc2VkID09PSBoaWdoIHNjb3JlXG4gICAgLy9oaWdoIHNjb3JlIHNhdmVkIGFuZCBkaXNwbGF5ZWRcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9