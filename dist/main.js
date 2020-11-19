/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ToDos.js":
/*!**********************!*\
  !*** ./src/ToDos.js ***!
  \**********************/
/*! namespace exports */
/*! export createNewProject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createNewTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export projectList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export taskList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewTask\": () => /* binding */ createNewTask,\n/* harmony export */   \"taskList\": () => /* binding */ taskList,\n/* harmony export */   \"projectList\": () => /* binding */ projectList,\n/* harmony export */   \"createNewProject\": () => /* binding */ createNewProject\n/* harmony export */ });\n//this module focuses on the logic revolving around tasks and projects\r\n\r\nconst taskList = [];\r\nconst projectList = [];\r\n\r\n//------------------------------------Tasks--------------------------------------------------------------\r\n\r\n//This class serves as the template for new task items\r\nconst Task = class {\r\n    constructor(title, description, dueDate, priority, assignedProject) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.assignedProject = assignedProject;\r\n    }\r\n}\r\n\r\n//This function is responsible for creating the new task objectd\\s\r\nconst createNewTask = (title, description, dueDate, priority) => {\r\n    \r\n    //this constructs the new object\r\n    const newTask = new Task(title, description, dueDate, priority);\r\n\r\n    const addToTaskList = (() => taskList.push(newTask))();\r\n\r\n}\r\n\r\n//----------------------------Projects------------------------------------------------------------------\r\n\r\nconst Project = class {\r\n    constructor(title, description, dueDate) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.tasks = [];\r\n    }\r\n}\r\n\r\nconst createNewProject = (title, description, dueDate) => {\r\n    //this constructs the new object\r\n    const newProject = new Project(title, description, dueDate);\r\n\r\n    const addToProjectList = (() => projectList.push(newProject))();\r\n}\r\n\r\n//this function creates the \"General\" project which is default project tasks get added to\r\nconst createDefaultProject = (() => createNewProject(\"General\", \"Unorganized tasks\"))();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://ToDoList/./src/ToDos.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToDos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDos.js */ \"./src/ToDos.js\");\n/* harmony import */ var _interface_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface.js */ \"./src/interface.js\");\n\r\n\r\n\r\n(0,_ToDos_js__WEBPACK_IMPORTED_MODULE_0__.createNewTask)(\"Buy Christmas Gifts\", \"buy gifts for family\", \"12/22/2020\", \"high\");\r\n(0,_interface_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectsTab)()\r\n\r\n\n\n//# sourceURL=webpack://ToDoList/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/*! namespace exports */
/*! export updateProjectsTab [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updateProjectsTab\": () => /* binding */ updateProjectsTab\n/* harmony export */ });\n/* harmony import */ var _ToDos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDos.js */ \"./src/ToDos.js\");\n// this module handles all the code related to handling the UI\r\n\r\n\r\nconst updateProjectsTab = () => {\r\n    const projectNav = document.querySelector(\"#project-list\");\r\n\r\n    //loop through project array to create buttons lsting the project titls\r\n    _ToDos_js__WEBPACK_IMPORTED_MODULE_0__.projectList.forEach(element => {\r\n        const newButton = document.createElement(\"button\");\r\n        newButton.id = `project-${element.name}-toggle`;\r\n        newButton.class = \"project-toggle\";\r\n        newButton.textContent = element.title;\r\n        projectNav.appendChild(newButton);\r\n    });\r\n    \r\n}\n\n//# sourceURL=webpack://ToDoList/./src/interface.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;