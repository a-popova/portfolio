/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/index.js":
/*!*********************************!*\
  !*** ./src/javascript/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar coll = document.getElementsByClassName(\"collapsible\");\n\nfor (var i = 0; i < coll.length; i++) {\n  coll[i].addEventListener(\"click\", function () {\n    this.classList.toggle(\"active\");\n    var content = this.nextElementSibling;\n\n    if (content.style.maxHeight) {\n      content.style.maxHeight = null;\n    } else {\n      content.style.maxHeight = \"none\";\n    }\n  });\n}\n\nvar iframeContainer = document.querySelector(\".iframe-container\");\nvar iframe = document.querySelector(\".iframe-container iframe\");\nvar width = 0;\ndocument.querySelectorAll(\".js-preview\").forEach(function (element) {\n  element.addEventListener(\"click\", function () {\n    document.body.classList.add(\"hide-overflow\");\n    iframe.src = element.dataset.src;\n    width = element.dataset.width;\n    iframeContainer.classList.remove(\"hidden\");\n  });\n});\nvar backButton = document.querySelector(\".js-back\");\nbackButton.addEventListener(\"click\", function () {\n  iframeContainer.classList.add(\"hidden\");\n  iframe.src = \"\";\n  document.body.classList.remove(\"hide-overflow\");\n  iframe.classList.remove(\"mobile\");\n  iframe.style.width = \"100%\";\n});\nvar switchButton = document.querySelector(\".js-switch\");\nswitchButton.addEventListener(\"click\", function () {\n  if (iframe.classList.contains(\"mobile\")) {\n    iframe.style.width = \"100%\";\n    iframe.classList.remove(\"mobile\");\n  } else {\n    iframe.classList.add(\"mobile\");\n    iframe.style.width = width + 'px';\n  }\n});\nvar slideIndex = 1;\nshowSlides(slideIndex);\ndocument.querySelector('.left').addEventListener(\"click\", prevSlide);\ndocument.querySelector('.right').addEventListener(\"click\", nextSlide);\n\nfunction prevSlide() {\n  showSlides(slideIndex -= 1);\n}\n\nfunction nextSlide() {\n  showSlides(slideIndex += 1);\n}\n\nfunction showSlides(n) {\n  var i;\n  var slides = document.querySelectorAll('.slide');\n\n  if (n > slides.length) {\n    slideIndex = 1;\n  }\n\n  if (n < 1) {\n    slideIndex = slides.length;\n  }\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n\n  slides[slideIndex - 1].style.display = \"flex\";\n}\n\nvar container = document.querySelector('.projects--container');\ncontainer.addEventListener(\"touchstart\", startTouch, false);\ncontainer.addEventListener(\"touchmove\", touchMove, false);\ncontainer.addEventListener(\"touchend\", touchEnd, false);\nvar initialX = null;\nvar finishX = null;\n\nfunction startTouch(e) {\n  initialX = e.touches[0].clientX;\n}\n\n;\n\nfunction touchMove(e) {\n  finishX = e.touches[0].clientX;\n}\n\nfunction touchEnd(e) {\n  console.log(e);\n\n  if (initialX === null || finishX === null) {\n    return;\n  }\n\n  var diffX = initialX - finishX;\n\n  if (diffX > 0) {\n    nextSlide();\n  } else {\n    prevSlide();\n  }\n\n  initialX = null;\n  finishX = null;\n  e.preventDefault();\n}\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzPzcxM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zYXNzL3N0eWxlcy5zY3NzJztcclxuXHJcbmxldCBjb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbGxhcHNpYmxlXCIpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29sbFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB2YXIgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KXtcclxuICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBpZnJhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlmcmFtZS1jb250YWluZXJcIik7XHJcbmNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWZyYW1lLWNvbnRhaW5lciBpZnJhbWVcIik7XHJcblxyXG5sZXQgd2lkdGggPSAwO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1wcmV2aWV3XCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJoaWRlLW92ZXJmbG93XCIpO1xyXG4gICAgaWZyYW1lLnNyYyA9IGVsZW1lbnQuZGF0YXNldC5zcmM7XHJcbiAgICB3aWR0aCA9IGVsZW1lbnQuZGF0YXNldC53aWR0aDtcclxuICAgIGlmcmFtZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIH0pXHJcbn0pO1xyXG5cclxuY29uc3QgYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtYmFja1wiKTsgXHJcbmJhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZnJhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBpZnJhbWUuc3JjID0gXCJcIjtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLW92ZXJmbG93XCIpO1xyXG4gIGlmcmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xyXG4gIGlmcmFtZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG59KTtcclxuXHJcbmNvbnN0IHN3aXRjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3dpdGNoXCIpO1xyXG5zd2l0Y2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoaWZyYW1lLmNsYXNzTGlzdC5jb250YWlucyhcIm1vYmlsZVwiKSkge1xyXG4gICAgaWZyYW1lLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICBpZnJhbWUuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaWZyYW1lLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XHJcbiAgICBpZnJhbWUuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgfVxyXG4gIFxyXG59KVxyXG5cclxuXHJcbmxldCBzbGlkZUluZGV4ID0gMTtcclxuc2hvd1NsaWRlcyhzbGlkZUluZGV4KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0JykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZTbGlkZSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0U2xpZGUpO1xyXG5cclxuZnVuY3Rpb24gcHJldlNsaWRlKCkge1xyXG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCAtPSAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xyXG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCArPSAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgbGV0IGk7XHJcbiAgbGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZScpO1xyXG5cclxuICBpZiAobiA+IHNsaWRlcy5sZW5ndGgpe1xyXG4gICAgc2xpZGVJbmRleCA9IDE7XHJcbiAgfVxyXG4gIGlmIChuIDwgMSkge1xyXG4gICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGg7XHJcbiAgfVxyXG4gIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxuICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufVxyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLS1jb250YWluZXInKTsgXHJcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBzdGFydFRvdWNoLCBmYWxzZSk7XHJcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRvdWNoTW92ZSwgZmFsc2UpO1xyXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRvdWNoRW5kLCBmYWxzZSk7XHJcblxyXG5sZXQgaW5pdGlhbFggPSBudWxsO1xyXG5sZXQgZmluaXNoWCA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBzdGFydFRvdWNoKGUpIHtcclxuICBpbml0aWFsWCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdG91Y2hNb3ZlKGUpIHtcclxuICBmaW5pc2hYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcbn1cclxuIFxyXG5mdW5jdGlvbiB0b3VjaEVuZChlKSB7XHJcbiAgY29uc29sZS5sb2coZSk7XHJcbiAgaWYgKGluaXRpYWxYID09PSBudWxsIHx8IGZpbmlzaFggPT09IG51bGwpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHZhciBkaWZmWCA9IGluaXRpYWxYIC0gZmluaXNoWDtcclxuIFxyXG4gICAgaWYgKGRpZmZYID4gMCkge1xyXG4gICAgICBuZXh0U2xpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByZXZTbGlkZSgpO1xyXG4gICAgfSAgXHJcbiBcclxuICBpbml0aWFsWCA9IG51bGw7XHJcbiAgZmluaXNoWCA9IG51bGw7XHJcbiAgIFxyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/javascript/index.js\n");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zdHlsZXMuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zYXNzL3N0eWxlcy5zY3NzP2Q2MGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sass/styles.scss\n");

/***/ })

/******/ });