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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\nvar coll = document.getElementsByClassName(\"collapsible\");\n\nfor (var i = 0; i < coll.length; i++) {\n  coll[i].addEventListener(\"click\", function () {\n    this.classList.toggle(\"active\");\n    var content = this.nextElementSibling;\n\n    if (content.style.maxHeight) {\n      content.style.maxHeight = null;\n    } else {\n      content.style.maxHeight = \"none\";\n    }\n  });\n}\n\nvar iframeContainer = document.querySelector(\".iframe-container\");\nvar iframe = document.querySelector(\".iframe-container iframe\");\nvar width = 0;\ndocument.querySelectorAll(\".js-preview\").forEach(function (element) {\n  element.addEventListener(\"click\", function () {\n    document.body.classList.add(\"hide-overflow\");\n    iframe.src = element.dataset.src;\n    width = element.dataset.width;\n    iframeContainer.classList.remove(\"hidden\");\n  });\n});\nvar backButton = document.querySelector(\".js-back\");\nbackButton.addEventListener(\"click\", function () {\n  iframeContainer.classList.add(\"hidden\");\n  iframe.src = \"\";\n  document.body.classList.remove(\"hide-overflow\");\n  iframe.classList.remove(\"mobile\");\n  iframe.style.width = \"100%\";\n});\nvar switchButton = document.querySelector(\".js-switch\");\nswitchButton.addEventListener(\"click\", function () {\n  if (iframe.classList.contains(\"mobile\")) {\n    iframe.style.width = \"100%\";\n    iframe.classList.remove(\"mobile\");\n  } else {\n    iframe.classList.add(\"mobile\");\n    iframe.style.width = width + 'px';\n  }\n});\nvar slideIndex = 1;\nshowSlides(slideIndex);\ndocument.querySelector('.left').addEventListener(\"click\", prevSlide);\ndocument.querySelector('.right').addEventListener(\"click\", nextSlide);\n\nfunction prevSlide() {\n  showSlides(slideIndex -= 1);\n}\n\nfunction nextSlide() {\n  showSlides(slideIndex += 1);\n}\n\nfunction showSlides(n) {\n  var i;\n  var slides = document.querySelectorAll('.slide');\n\n  if (n > slides.length) {\n    slideIndex = 1;\n  }\n\n  if (n < 1) {\n    slideIndex = slides.length;\n  }\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n\n  slides[slideIndex - 1].style.display = \"flex\";\n}\n\nvar container = document.querySelector('.projects--container');\ncontainer.addEventListener(\"touchstart\", startTouch, false);\ncontainer.addEventListener(\"touchmove\", touchMove, false);\ncontainer.addEventListener(\"touchend\", touchEnd, false);\nvar initialX = null;\nvar finishX = null;\n\nfunction startTouch(e) {\n  initialX = e.touches[0].clientX;\n}\n\n;\n\nfunction touchMove(e) {\n  finishX = e.touches[0].clientX;\n}\n\nfunction touchEnd(e) {\n  console.log(e);\n\n  if (initialX === null || finishX === null) {\n    return;\n  }\n\n  var diffX = initialX - finishX;\n\n  if (diffX > 0) {\n    nextSlide();\n  } else {\n    prevSlide();\n  }\n\n  initialX = null;\n  finishX = null;\n  e.preventDefault();\n}\n\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvamF2YXNjcmlwdC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qYXZhc2NyaXB0L2luZGV4LmpzPzcxM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zYXNzL3N0eWxlcy5zY3NzJztcclxuXHJcbmxldCBjb2xsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbGxhcHNpYmxlXCIpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsLmxlbmd0aDsgaSsrKSB7XHJcbiAgY29sbFtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB2YXIgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgaWYgKGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0KXtcclxuICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGlmcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWZyYW1lLWNvbnRhaW5lclwiKTtcclxuY29uc3QgaWZyYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pZnJhbWUtY29udGFpbmVyIGlmcmFtZVwiKTtcclxuXHJcbmxldCB3aWR0aCA9IDA7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLXByZXZpZXdcIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImhpZGUtb3ZlcmZsb3dcIik7XHJcbiAgICBpZnJhbWUuc3JjID0gZWxlbWVudC5kYXRhc2V0LnNyYztcclxuICAgIHdpZHRoID0gZWxlbWVudC5kYXRhc2V0LndpZHRoO1xyXG4gICAgaWZyYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgfSlcclxufSk7XHJcblxyXG5jb25zdCBiYWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1iYWNrXCIpOyBcclxuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmcmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIGlmcmFtZS5zcmMgPSBcIlwiO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtb3ZlcmZsb3dcIik7XHJcbiAgaWZyYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XHJcbiAgaWZyYW1lLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpdGNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zd2l0Y2hcIik7XHJcbnN3aXRjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChpZnJhbWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9iaWxlXCIpKSB7XHJcbiAgICBpZnJhbWUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIGlmcmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpZnJhbWUuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcclxuICAgIGlmcmFtZS5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICB9XHJcbiAgXHJcbn0pXHJcblxyXG5cclxubGV0IHNsaWRlSW5kZXggPSAxO1xyXG5zaG93U2xpZGVzKHNsaWRlSW5kZXgpO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJldlNsaWRlKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0JykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRTbGlkZSk7XHJcblxyXG5mdW5jdGlvbiBwcmV2U2xpZGUoKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4IC09IDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IDEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2xpZGVzKG4pIHtcclxuICBsZXQgaTtcclxuICBsZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlJyk7XHJcblxyXG4gIGlmIChuID4gc2xpZGVzLmxlbmd0aCl7XHJcbiAgICBzbGlkZUluZGV4ID0gMTtcclxuICB9XHJcbiAgaWYgKG4gPCAxKSB7XHJcbiAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aDtcclxuICB9XHJcbiAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtLWNvbnRhaW5lcicpOyBcclxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0VG91Y2gsIGZhbHNlKTtcclxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdG91Y2hNb3ZlLCBmYWxzZSk7XHJcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdG91Y2hFbmQsIGZhbHNlKTtcclxuXHJcbmxldCBpbml0aWFsWCA9IG51bGw7XHJcbmxldCBmaW5pc2hYID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0VG91Y2goZSkge1xyXG4gIGluaXRpYWxYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xyXG4gIGZpbmlzaFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcclxufVxyXG4gXHJcbmZ1bmN0aW9uIHRvdWNoRW5kKGUpIHtcclxuICBjb25zb2xlLmxvZyhlKTtcclxuICBpZiAoaW5pdGlhbFggPT09IG51bGwgfHwgZmluaXNoWCA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdmFyIGRpZmZYID0gaW5pdGlhbFggLSBmaW5pc2hYO1xyXG4gXHJcbiAgICBpZiAoZGlmZlggPiAwKSB7XHJcbiAgICAgIG5leHRTbGlkZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJldlNsaWRlKCk7XHJcbiAgICB9ICBcclxuIFxyXG4gIGluaXRpYWxYID0gbnVsbDtcclxuICBmaW5pc2hYID0gbnVsbDtcclxuICAgXHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/javascript/index.js\n");

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