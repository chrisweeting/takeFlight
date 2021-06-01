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
  ctx.fillStyle = "orange";
  ctx.fill();
  ctx.closePath();
};

var drawRotation = function drawRotation() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Rotation: " + rotation, 1, 1);
};

var animate = function animate() {
  ctx.clearRect(-1000, -1000, 2000, 2000);
  drawHorizon();
  drawRotation();
  ctx.rotate(Math.PI / 180 * rotation);

  if (rightPressed) {
    if (rotation < 0.02) {
      rotation += 0.02;
    } else {
      rotation -= 0.2;
    }
  } else if (leftPressed) {
    if (rotation > -0.02) {
      rotation -= 0.02;
    } else {
      rotation += 0.2;
    }
  } else {
    if (rotation > rotationInit) {
      rotation -= 0.02;
    } else if (rotation < rotationInit) {
      rotation += 0.02;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzJhMzEiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGFrZV9mbGlnaHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YWtlX2ZsaWdodC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInJpZ2h0UHJlc3NlZCIsImxlZnRQcmVzc2VkIiwieUluaXRpYWwiLCJ5Iiwicm90YXRpb25Jbml0Iiwicm90YXRpb24iLCJ0cmFuc2xhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJlIiwia2V5IiwiZHJhd0hvcml6b24iLCJiZWdpblBhdGgiLCJyZWN0IiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCIsImRyYXdSb3RhdGlvbiIsImZvbnQiLCJmaWxsVGV4dCIsImFuaW1hdGUiLCJjbGVhclJlY3QiLCJyb3RhdGUiLCJNYXRoIiwiUEkiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUVBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWI7QUFDQSxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxD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QUNELEtBRkQsTUFFTyxJQUFJQSxRQUFRLEdBQUdELFlBQWYsRUFBNkI7QUFDbENDLGNBQVEsSUFBSSxJQUFaO0FBQ0Q7QUFDRjtBQUNGLENBMUJEOztBQThCQXFCLFdBQVcsQ0FBQ0wsT0FBRCxFQUFVLEVBQVYsQ0FBWCxDLENBRUk7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLGdDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5jc3MnO1xuXG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbHlDYW52YXNcIik7XG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciByaWdodFByZXNzZWQgPSBmYWxzZTtcbnZhciBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xudmFyIHlJbml0aWFsID0gMDtcbnZhciB5ID0gMDtcbnZhciByb3RhdGlvbkluaXQgPSAwO1xudmFyIHJvdGF0aW9uID0gMDtcblxuY3R4LnRyYW5zbGF0ZSgyNDAsIDIwMCk7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZmFsc2UpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGtleVVwSGFuZGxlciwgZmFsc2UpO1xuXG5mdW5jdGlvbiBrZXlEb3duSGFuZGxlcihlKSB7XG4gIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICByaWdodFByZXNzZWQgPSB0cnVlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICBsZWZ0UHJlc3NlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2V5VXBIYW5kbGVyKGUpIHtcbiAgaWYgKGUua2V5ID09IFwiUmlnaHRcIiB8fCBlLmtleSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgIHJpZ2h0UHJlc3NlZCA9IGZhbHNlO1xuICB9XG4gIGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICBsZWZ0UHJlc3NlZCA9IGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IGRyYXdIb3Jpem9uID0gKCkgPT4ge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5yZWN0KC0xMDAwLCB5LCAyMDAwLCAxNTAwKTtcblxuICBjdHguZmlsbFN0eWxlID0gXCJvcmFuZ2VcIjtcbiAgY3R4LmZpbGwoKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xufVxuXG5jb25zdCBkcmF3Um90YXRpb24gPSAoKSA9PiB7XG4gIGN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XG4gIGN0eC5maWxsU3R5bGUgPSBcIiMwMDk1RERcIjtcbiAgY3R4LmZpbGxUZXh0KFwiUm90YXRpb246IFwiICsgcm90YXRpb24sIDEsIDEpO1xufVxuXG5jb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICBjdHguY2xlYXJSZWN0KC0xMDAwLCAtMTAwMCwgMjAwMCwgMjAwMCk7XG4gIGRyYXdIb3Jpem9uKClcbiAgZHJhd1JvdGF0aW9uKClcblxuICBjdHgucm90YXRlKChNYXRoLlBJIC8gMTgwKSAqIHJvdGF0aW9uKTtcblxuICBpZiAocmlnaHRQcmVzc2VkKSB7XG4gICAgaWYgKHJvdGF0aW9uIDwgMC4wMikge1xuICAgICAgcm90YXRpb24gKz0gMC4wMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcm90YXRpb24gLT0gMC4yO1xuICAgIH1cbiAgfSBlbHNlIGlmIChsZWZ0UHJlc3NlZCkge1xuICAgIGlmIChyb3RhdGlvbiA+IC0wLjAyKSB7XG4gICAgICByb3RhdGlvbiAtPSAwLjAyO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3RhdGlvbiArPSAwLjI7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChyb3RhdGlvbiA+IHJvdGF0aW9uSW5pdCkge1xuICAgICAgcm90YXRpb24gLT0gMC4wMjtcbiAgICB9IGVsc2UgaWYgKHJvdGF0aW9uIDwgcm90YXRpb25Jbml0KSB7XG4gICAgICByb3RhdGlvbiArPSAwLjAyO1xuICAgIH1cbiAgfVxufVxuXG5cblxuc2V0SW50ZXJ2YWwoYW5pbWF0ZSwgMTApO1xuXG4gICAgLy9vbiBrZXlkb3duIHRoZSBob3Jpem9uIHJvdGF0ZXMgdG8gYSBjZXJ0YWluIHBvaW50XG4gICAgLy9vbiBrZXl1cCB0aGUgaG9yaXpvbiByZXR1cm5zIHRvIGl0cyBpbml0aWFsIHN0YXRlXG4gICAgLy9hcyB0aGUgaG9yaXpvbiBzaGlmdHMgZW5lbXkgZWxlbWVudHMvb2JzdGFjbGVzIHNoaWZ0IHRvb1xuICAgIC8vdGhleSBhbHNvIGFkZCBvciBkZWNyZWFzZSB0aGVpciB4IHBvc2l0aW9uIGRlcGVuZGluZyBvbiB0aGUga2V5IGRpcmVjdGlvblxuXG4gICAgLy92YXJpYWJsZSBmb3IgdGltZSBlbGFwc2VkID09PSBoaWdoIHNjb3JlXG4gICAgLy9oaWdoIHNjb3JlIHNhdmVkIGFuZCBkaXNwbGF5ZWRcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9