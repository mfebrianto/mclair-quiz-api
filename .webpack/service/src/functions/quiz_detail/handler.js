/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./knexfile.ts":
/*!*********************!*\
  !*** ./knexfile.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    client: 'pg',\n    connection: {\n        connectionString: 'postgresql://dev:AWqasde321!@dev.cs5ztqximrwk.ap-southeast-2.rds.amazonaws.com/mclair_quiz_dev'\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9rbmV4ZmlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWNsYWlyLXF1aXotYXBpLy4va25leGZpbGUudHM/ODE5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNsaWVudDogJ3BnJyxcbiAgY29ubmVjdGlvbjoge1xuICAgIGNvbm5lY3Rpb25TdHJpbmc6ICdwb3N0Z3Jlc3FsOi8vZGV2OkFXcWFzZGUzMjEhQGRldi5jczV6dHF4aW1yd2suYXAtc291dGhlYXN0LTIucmRzLmFtYXpvbmF3cy5jb20vbWNsYWlyX3F1aXpfZGV2J1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./knexfile.ts\n");

/***/ }),

/***/ "./src/functions/quiz_detail/handler.ts":
/*!**********************************************!*\
  !*** ./src/functions/quiz_detail/handler.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! knex */ \"knex\");\n/* harmony import */ var knex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(knex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _knexfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../knexfile */ \"./knexfile.ts\");\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n\n\n\n\nconst knexInstance = (0,knex__WEBPACK_IMPORTED_MODULE_1__.knex)(_knexfile__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst quizDetail = async (event) => {\n    const quizzDetail = await knexInstance('quizzes')\n        .join('questions', 'questions.quiz_id', 'quizzes.id')\n        .select({\n        name: 'quizzes.name',\n        question: 'questions.question',\n        image_url: 'questions.image_url',\n        option_1: 'questions.option_1',\n        option_2: 'questions.option_2',\n        option_3: 'questions.option_3',\n        option_4: 'questions.option_4',\n        answer: 'questions.answer',\n    })\n        .andWhere('quizzes.id', event.pathParameters.id);\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_3__.formatJSONResponse)({\n        message: quizzDetail,\n    });\n};\nconst main = quizDetail;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3F1aXpfZGV0YWlsL2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL21jbGFpci1xdWl6LWFwaS8uL3NyYy9mdW5jdGlvbnMvcXVpel9kZXRhaWwvaGFuZGxlci50cz9lY2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHsga25leCB9IGZyb20gJ2tuZXgnO1xuaW1wb3J0IGtuZXhmaWxlIGZyb20gJy4uLy4uLy4uL2tuZXhmaWxlJztcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJ0BsaWJzL2FwaUdhdGV3YXknO1xuaW1wb3J0IFF1aXogIGZyb20gJ3NyYy9tb2RlbHMvcXVpeic7XG5cbmNvbnN0IGtuZXhJbnN0YW5jZSA9IGtuZXgoa25leGZpbGUpO1xuXG5jb25zdCBxdWl6RGV0YWlsID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHF1aXp6RGV0YWlsID0gYXdhaXQga25leEluc3RhbmNlPFF1aXo+KCdxdWl6emVzJylcbiAgICAuam9pbigncXVlc3Rpb25zJywgJ3F1ZXN0aW9ucy5xdWl6X2lkJywgJ3F1aXp6ZXMuaWQnKVxuICAgIC5zZWxlY3Qoe1xuICAgICAgbmFtZTogJ3F1aXp6ZXMubmFtZScsXG4gICAgICBxdWVzdGlvbjogJ3F1ZXN0aW9ucy5xdWVzdGlvbicsXG4gICAgICBpbWFnZV91cmw6ICdxdWVzdGlvbnMuaW1hZ2VfdXJsJyxcbiAgICAgIG9wdGlvbl8xOiAncXVlc3Rpb25zLm9wdGlvbl8xJyxcbiAgICAgIG9wdGlvbl8yOiAncXVlc3Rpb25zLm9wdGlvbl8yJyxcbiAgICAgIG9wdGlvbl8zOiAncXVlc3Rpb25zLm9wdGlvbl8zJyxcbiAgICAgIG9wdGlvbl80OiAncXVlc3Rpb25zLm9wdGlvbl80JyxcbiAgICAgIGFuc3dlcjogJ3F1ZXN0aW9ucy5hbnN3ZXInLFxuICAgIH0pXG4gICAgLmFuZFdoZXJlKCdxdWl6emVzLmlkJywgZXZlbnQucGF0aFBhcmFtZXRlcnMuaWQpXG5cbiAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZSh7XG4gICAgbWVzc2FnZTogcXVpenpEZXRhaWwsXG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgbWFpbiA9IHF1aXpEZXRhaWw7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/quiz_detail/handler.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        headers: {\n            'Access-Control-Allow-Origin': '*'\n        },\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tY2xhaXItcXVpei1hcGkvLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzPzYyNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBUElHYXRld2F5UHJveHlFdmVudCwgQVBJR2F0ZXdheVByb3h5UmVzdWx0LCBIYW5kbGVyIH0gZnJvbSBcImF3cy1sYW1iZGFcIlxuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSBcImpzb24tc2NoZW1hLXRvLXRzXCI7XG5cbnR5cGUgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBPbWl0PEFQSUdhdGV3YXlQcm94eUV2ZW50LCAnYm9keSc+ICYgeyBib2R5OiBGcm9tU2NoZW1hPFM+IH1cbmV4cG9ydCB0eXBlIFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4gPSBIYW5kbGVyPFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+LCBBUElHYXRld2F5UHJveHlSZXN1bHQ+XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRKU09OUmVzcG9uc2UgPSAocmVzcG9uc2U6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "knex":
/*!***********************!*\
  !*** external "knex" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("knex");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/quiz_detail/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;