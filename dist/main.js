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
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

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
  ctx.translate(0, 70);
  ctx.rotate(Math.PI / 180 * -(rotation / 10));
  ctx.beginPath();
  ctx.rect(-30, -10, 60, 20);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
  ctx.restore();
};

var animate = function animate() {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  drawHorizon();
  drawRotation();
  drawBird(); // ctx.rotate((Math.PI / 180) * rotation);

  if (leftPressed) {
    if (rotation < 100 && rotation >= 0) {
      rotation += 1;
      rotateCam(rotation);
    } else if (rotation < 0) {
      rotation += 1;
      ctx.rotate(Math.PI / 180 * 0.05);
    }
  } else if (rightPressed) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3Rha2VfZmxpZ2h0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rha2VfZmxpZ2h0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsInlJbml0aWFsIiwieSIsInJvdGF0aW9uSW5pdCIsInJvdGF0aW9uIiwidHJhbnNsYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiZSIsImtleSIsImRyYXdIb3Jpem9uIiwiYmVnaW5QYXRoIiwicmVjdCIsImZpbGxTdHlsZSIsImZpbGwiLCJjbG9zZVBhdGgiLCJkcmF3Um90YXRpb24iLCJmb250IiwiZmlsbFRleHQiLCJyb3RhdGVDYW0iLCJudW0iLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJkcmF3QmlyZCIsInNhdmUiLCJyZXN0b3JlIiwiYW5pbWF0ZSIsImNsZWFyUmVjdCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05BO0FBRUEsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FB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SUFBSSxDQUFaO0FBQ0FQLFNBQUcsQ0FBQ3lCLE1BQUosQ0FBWUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQixDQUFDLElBQTlCO0FBQ0Q7QUFDRixHQVJNLE1BUUE7QUFDTCxRQUFJcEIsUUFBUSxHQUFHLENBQWYsRUFBa0I7QUFDaEJBLGNBQVEsSUFBSSxDQUFaO0FBQ0FQLFNBQUcsQ0FBQ3lCLE1BQUosQ0FBWUMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBWCxHQUFrQixDQUFDLElBQTlCO0FBQ0QsS0FIRCxNQUdPLElBQUlwQixRQUFRLEdBQUcsQ0FBZixFQUFrQjtBQUN2QkEsY0FBUSxJQUFJLENBQVo7QUFDQVAsU0FBRyxDQUFDeUIsTUFBSixDQUFZQyxJQUFJLENBQUNDLEVBQUwsR0FBVSxHQUFYLEdBQWtCLElBQTdCO0FBQ0Q7QUFDRjtBQUNGLENBaENEOztBQW9DQU0sV0FBVyxDQUFDRixPQUFELEVBQVUsRUFBVixDQUFYLEMsQ0FFSTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZ0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcyc7XG5cbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZseUNhbnZhc1wiKTtcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xudmFyIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xudmFyIGxlZnRQcmVzc2VkID0gZmFsc2U7XG52YXIgeUluaXRpYWwgPSAwO1xudmFyIHkgPSAwO1xudmFyIHJvdGF0aW9uSW5pdCA9IDA7XG52YXIgcm90YXRpb24gPSAwO1xuXG5jdHgudHJhbnNsYXRlKDI0MCwgMjAwKTtcblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleURvd25IYW5kbGVyLCBmYWxzZSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGtleURvd25IYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgIHJpZ2h0UHJlc3NlZCA9IHRydWU7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgIGxlZnRQcmVzc2VkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBrZXlVcEhhbmRsZXIoZSkge1xuICBpZiAoZS5rZXkgPT0gXCJSaWdodFwiIHx8IGUua2V5ID09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgcmlnaHRQcmVzc2VkID0gZmFsc2U7XG4gIH1cbiAgZWxzZSBpZiAoZS5rZXkgPT0gXCJMZWZ0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgIGxlZnRQcmVzc2VkID0gZmFsc2U7XG4gIH1cbn1cblxuY29uc3QgZHJhd0hvcml6b24gPSAoKSA9PiB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LnJlY3QoLTEwMDAsIHksIDIwMDAsIDE1MDApO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNlOGUyYTRcIjtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xufVxuXG5jb25zdCBkcmF3Um90YXRpb24gPSAoKSA9PiB7XG4gIGN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUm90YXRpb246IFwiICsgcm90YXRpb24sIDEsIDEpO1xufVxuXG5jb25zdCByb3RhdGVDYW0gPSAobnVtKSA9PiB7XG4gIGlmIChudW0gPCAxMDAgJiYgbnVtID4gMCkge1xuICAgIHJldHVybiBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIDAuMDUpO1xuICB9IGVsc2UgaWYgKG51bSA+IC0xMDAgJiYgbnVtIDwgMCkge1xuICAgIHJldHVybiBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIC0wLjA1KTtcbiAgfVxufVxuXG5jb25zdCBkcmF3QmlyZCA9ICgpID0+IHtcbiAgY3R4LnNhdmUoKTtcblxuICBjdHgudHJhbnNsYXRlKDAsIDcwKTtcbiAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtKHJvdGF0aW9uIC8gMTApKTtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgucmVjdCgtMzAsIC0xMCwgNjAsIDIwKTtcbiAgY3R4LmZpbGxTdHlsZSA9IFwiYmx1ZVwiO1xuICBjdHguZmlsbCgpO1xuICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgY3R4LnJlc3RvcmUoKTtcbn1cblxuY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgtMTAwMCwgLTEwMDAsIDIwMDAsIDIwMDApO1xuICBkcmF3SG9yaXpvbigpO1xuICBkcmF3Um90YXRpb24oKTtcbiAgZHJhd0JpcmQoKTtcblxuICAvLyBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIHJvdGF0aW9uKTtcbiAgaWYgKGxlZnRQcmVzc2VkKSB7XG4gICAgaWYgKHJvdGF0aW9uIDwgMTAwICYmIHJvdGF0aW9uID49IDApIHtcbiAgICAgIHJvdGF0aW9uICs9IDE7XG4gICAgICByb3RhdGVDYW0ocm90YXRpb24pO1xuICAgIH0gZWxzZSBpZiAocm90YXRpb24gPCAwKSB7XG4gICAgICByb3RhdGlvbiArPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAwLjA1KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgaWYgKHJvdGF0aW9uID4gLTEwMCAmJiByb3RhdGlvbiA8PSAwKSB7XG4gICAgICByb3RhdGlvbiAtPSAxO1xuICAgICAgcm90YXRlQ2FtKHJvdGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uID4gMCkge1xuICAgICAgcm90YXRpb24gLT0gMTtcbiAgICAgIGN0eC5yb3RhdGUoKE1hdGguUEkgLyAxODApICogLTAuMDUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAocm90YXRpb24gPiAwKSB7XG4gICAgICByb3RhdGlvbiAtPSAxO1xuICAgICAgY3R4LnJvdGF0ZSgoTWF0aC5QSSAvIDE4MCkgKiAtMC4wNSk7XG4gICAgfSBlbHNlIGlmIChyb3RhdGlvbiA8IDApIHtcbiAgICAgIHJvdGF0aW9uICs9IDE7XG4gICAgICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIDAuMDUpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuc2V0SW50ZXJ2YWwoYW5pbWF0ZSwgMTApO1xuXG4gICAgLy9vbiBrZXlkb3duIHRoZSBob3Jpem9uIHJvdGF0ZXMgdG8gYSBjZXJ0YWluIHBvaW50XG4gICAgLy9vbiBrZXl1cCB0aGUgaG9yaXpvbiByZXR1cm5zIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAgLy9hcyB0aGUgaG9yaXpvbiBzaGlmdHMgZW5lbXkgZWxlbWVudHMvb2JzdGFjbGVzIHNoaWZ0IHRvb1xuICAgIC8vdGhleSBhbHNvIGFkZCBvciBkZWNyZWFzZSB0aGVpciB4IHBvc2l0aW9uIGRlcGVuZGluZyBvbiB0aGUga2V5IGRpcmVjdGlvblxuXG4gICAgLy92YXJpYWJsZSBmb3IgdGltZSBlbGFwc2VkID09PSBoaWdoIHNjb3JlXG4gICAgLy9oaWdoIHNjb3JlIHNhdmVkIGFuZCBkaXNwbGF5ZWRcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9