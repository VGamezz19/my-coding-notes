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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./url-loader-img/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./url-loader-img/images/platzi.png":
/*!******************************************!*\
  !*** ./url-loader-img/images/platzi.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module 'file-loader'\\n    at Function.Module._resolveFilename (module.js:555:15)\\n    at Function.Module._load (module.js:482:25)\\n    at Module.require (module.js:604:17)\\n    at require (/Volumes/Victor/_Platzi/WebPack/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at Object.loader (/Volumes/Victor/_Platzi/WebPack/node_modules/url-loader/dist/index.js:59:20)\");\n\n//# sourceURL=webpack:///./url-loader-img/images/platzi.png?");

/***/ }),

/***/ "./url-loader-img/src/css/estilos.css":
/*!********************************************!*\
  !*** ./url-loader-img/src/css/estilos.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: Error: Cannot find module 'file-loader'\\n    at Function.Module._resolveFilename (module.js:555:15)\\n    at Function.Module._load (module.js:482:25)\\n    at Module.require (module.js:604:17)\\n    at require (/Volumes/Victor/_Platzi/WebPack/node_modules/v8-compile-cache/v8-compile-cache.js:159:20)\\n    at Object.loader (/Volumes/Victor/_Platzi/WebPack/node_modules/url-loader/dist/index.js:59:20)\\n    at runLoaders (/Volumes/Victor/_Platzi/WebPack/node_modules/webpack/lib/NormalModule.js:236:20)\\n    at /Volumes/Victor/_Platzi/WebPack/node_modules/loader-runner/lib/LoaderRunner.js:364:11\\n    at /Volumes/Victor/_Platzi/WebPack/node_modules/loader-runner/lib/LoaderRunner.js:230:18\\n    at runSyncOrAsync (/Volumes/Victor/_Platzi/WebPack/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (/Volumes/Victor/_Platzi/WebPack/node_modules/loader-runner/lib/LoaderRunner.js:229:2)\\n    at /Volumes/Victor/_Platzi/WebPack/node_modules/loader-runner/lib/LoaderRunner.js:202:4\\n    at process.nextTick (/Volumes/Victor/_Platzi/WebPack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:73:15)\\n    at process._tickCallback (internal/process/next_tick.js:150:11)\");\n\n//# sourceURL=webpack:///./url-loader-img/src/css/estilos.css?");

/***/ }),

/***/ "./url-loader-img/src/js/index.js":
/*!****************************************!*\
  !*** ./url-loader-img/src/js/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../css/estilos.css */ \"./url-loader-img/src/css/estilos.css\");\n\nvar _platzi = __webpack_require__(/*! ../../images/platzi.png */ \"./url-loader-img/images/platzi.png\");\n\nvar _platzi2 = _interopRequireDefault(_platzi);\n\nvar _makeMessage = __webpack_require__(/*! ./make-message.js */ \"./url-loader-img/src/js/make-message.js\");\n\nvar _makeMessage2 = _interopRequireDefault(_makeMessage);\n\nvar _renderToDom = __webpack_require__(/*! ./render-to-dom */ \"./url-loader-img/src/js/render-to-dom.js\");\n\nvar _renderToDom2 = _interopRequireDefault(_renderToDom);\n\nvar _messages = __webpack_require__(/*! ./messages.js */ \"./url-loader-img/src/js/messages.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _renderToDom2.default)((0, _makeMessage2.default)(_messages.firstMessage));\n(0, _messages.delayedMessage)();\n\n// const img = document.createElement('img');\n// img.setAttribute('src', platziImg)\n\n// renderToDOM(img)\n\n//# sourceURL=webpack:///./url-loader-img/src/js/index.js?");

/***/ }),

/***/ "./url-loader-img/src/js/make-message.js":
/*!***********************************************!*\
  !*** ./url-loader-img/src/js/make-message.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nfunction makeMessage(msg) {\n  var message = document.createElement('p');\n  message.textContent = msg;\n  return message;\n}\n\nexports.default = makeMessage;\n\n//# sourceURL=webpack:///./url-loader-img/src/js/make-message.js?");

/***/ }),

/***/ "./url-loader-img/src/js/messages.js":
/*!*******************************************!*\
  !*** ./url-loader-img/src/js/messages.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _makeMessage = __webpack_require__(/*! ./make-message.js */ \"./url-loader-img/src/js/make-message.js\");\n\nvar _makeMessage2 = _interopRequireDefault(_makeMessage);\n\nvar _renderToDom = __webpack_require__(/*! ./render-to-dom.js */ \"./url-loader-img/src/js/render-to-dom.js\");\n\nvar _renderToDom2 = _interopRequireDefault(_renderToDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar waitTime = new Promise(function (tooOoOk, todoMal) {\n  setTimeout(function () {\n    tooOoOk('Han pasado 3 segundos OMG');\n  }, 3000);\n});\n\nmodule.exports = {\n  firstMessage: 'Hola mundo desde un módulo',\n  delayedMessage: async function delayedMessage() {\n    var message = await waitTime;\n    (0, _renderToDom2.default)((0, _makeMessage2.default)(message));\n  }\n};\n\n//# sourceURL=webpack:///./url-loader-img/src/js/messages.js?");

/***/ }),

/***/ "./url-loader-img/src/js/render-to-dom.js":
/*!************************************************!*\
  !*** ./url-loader-img/src/js/render-to-dom.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = renderToDOM;\nfunction renderToDOM(element) {\n  document.body.append(element);\n}\n\n//# sourceURL=webpack:///./url-loader-img/src/js/render-to-dom.js?");

/***/ })

/******/ });