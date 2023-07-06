/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clearField.ts":
/*!***************************!*\
  !*** ./src/clearField.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearField: () => (/* binding */ clearField)\n/* harmony export */ });\nfunction clearField(allCells) {\n  allCells = Array.from(document.querySelectorAll(\".box\"));\n  for (let i = 0; i < allCells.length; i++) {\n    // console.log(allCells.length)\n    if (allCells[i]?.classList.contains(\"active\")) {\n      allCells[i].classList.add(\"idle\");\n      allCells[i].classList.remove(\"active\");\n      // generationCounter.value = 0;\n      //  counter.innerText =\n      //   \"Quantity of rebirth: \" + generationCounter.value.toString();\n    }\n  }\n  // generationCounter.value = 0;\n  // \"Quantity of rebirth: \" + generationCounter.value.toString();\n  // speed.value = 0;\n  // window.location.reload();\n  // throw \"\"\n  // new Error(\"Game is over\");\n}\n\n//# sourceURL=webpack://the-life/./src/clearField.ts?");

/***/ }),

/***/ "./src/createMarkup.ts":
/*!*****************************!*\
  !*** ./src/createMarkup.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMarkup: () => (/* binding */ createMarkup)\n/* harmony export */ });\n/* harmony import */ var _makeActive_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeActive.ts */ \"./src/makeActive.ts\");\n/* harmony import */ var _updatesProcess_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updatesProcess.ts */ \"./src/updatesProcess.ts\");\n/* harmony import */ var _clearField_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearField.ts */ \"./src/clearField.ts\");\n\n\n\nfunction createMarkup(element, totalQuantity, allCells, generationCounter, inputX, counter, speed) {\n  const field = document.createElement(\"div\");\n  field.classList.add(\"field\");\n  element.prepend(field);\n  for (let i = 0; i < totalQuantity; i++) {\n    const box = document.createElement(\"div\");\n    box.classList.add(\"box\");\n    box.classList.add(\"idle\");\n    box.addEventListener(\"click\", _makeActive_ts__WEBPACK_IMPORTED_MODULE_0__.makeActive);\n    field.append(box);\n  }\n  // console.log(document.querySelectorAll(\".box\"));\n\n  const buttonStart = document.createElement(\"button\");\n  buttonStart.classList.add(\"start\");\n  buttonStart.innerText = \"Start\";\n  element.append(buttonStart);\n  buttonStart.addEventListener(\"click\", function () {\n    (0,_updatesProcess_ts__WEBPACK_IMPORTED_MODULE_1__.updatesProcess)(allCells, generationCounter, inputX, counter, speed);\n  });\n  const buttonClear = document.createElement(\"button\");\n  buttonClear.classList.add(\"clear\");\n  buttonClear.innerText = \"Clear field\";\n  element.append(buttonClear);\n  buttonClear.addEventListener(\"click\", function () {\n    (0,_clearField_ts__WEBPACK_IMPORTED_MODULE_2__.clearField)(allCells);\n  });\n}\n\n//# sourceURL=webpack://the-life/./src/createMarkup.ts?");

/***/ }),

/***/ "./src/findActiveNeighbors.ts":
/*!************************************!*\
  !*** ./src/findActiveNeighbors.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   findActiveNeighbors: () => (/* binding */ findActiveNeighbors)\n/* harmony export */ });\nconst arrayAllNext = [];\nfunction findActiveNeighbors(allCells, generationCounter, inputX, counter) {\n  let newArr = [];\n  // let arrayAllPrevious:Element[];\n  // let arrayAllNext:Element[]=[];\n  for (let i = 0; i < allCells.length; i++) {\n    //  arrayAllPrevious.push( allCells[i]);\n    // console.log(arrayAllPrevious.length)\n\n    allCells[i].countNeighbors = 0;\n    // проверяем первую ячейку\n    if (i === 0) {\n      if (allCells[i + 1].classList.contains(\"active\")) {\n        // console.log(allCells[i].classList);\n        allCells[i].countNeighbors++;\n        // console.log(i);\n        // console.log(\"соседи В \" + allCells[i].countNeighbors);\n      }\n\n      if (allCells[inputX].classList.contains(\"active\")) {\n        allCells[i].countNeighbors++;\n        // console.log(i);\n        // console.log(\"соседи Ю\" + allCells[i].countNeighbors);\n      }\n\n      if (allCells[inputX + 1].classList.contains(\"active\")) {\n        allCells[i].countNeighbors++;\n        // console.log(i);\n        // console.log(\"соседи ЮВ \" + allCells[i].countNeighbors);\n      }\n    }\n\n    if (i === 1) {\n      if (allCells[i - 1].classList.contains(\"active\")) {\n        // console.log(allCells[i].classList);\n        allCells[i].countNeighbors++;\n        // console.log(i);\n        // console.log(\"соседи Z \" + allCells[i].countNeighbors);\n      }\n\n      if (allCells[i + 1].classList.contains(\"active\")) {\n        allCells[i].countNeighbors++;\n        // console.log(i);\n        // console.log(\"соседи В \" + allCells[i].countNeighbors);\n      }\n\n      if (allCells[inputX].classList.contains(\"active\")) {\n        allCells[i].countNeighbors++;\n        // console.log(i);\n        // console.log(\"соседи Ю\" + allCells[i].countNeighbors);\n      }\n\n      if (allCells[inputX - 1].classList.contains(\"active\")) {\n        allCells[i].countNeighbors++;\n        // console.log(i);\n        // console.log(\"соседи ЮЗ \" + allCells[i].countNeighbors);\n      }\n\n      if (allCells[inputX + 1].classList.contains(\"active\")) {\n        allCells[i].countNeighbors++;\n        // console.log(i);\n        // console.log(\"соседи ЮВ \" + allCells[i].countNeighbors);\n      }\n    } else {\n      if (i > 1 && i <= allCells.length - 1) {\n        // проверяем клетку на юго-западе\n        if (i % inputX !== 0 && i + inputX - 1 && i + inputX - 1 <= allCells.length - 1 && allCells[i + inputX - 1].classList.contains(\"active\")) {\n          allCells[i].countNeighbors++;\n\n          // console.log(i);\n          // console.log(\"соседи ЮЗ \" + allCells[i].countNeighbors);\n        }\n        // проверяем клетку на западе\n        if (i % inputX !== 0 && i - 1 >= 0 && allCells[i - 1].classList.contains(\"active\")) {\n          allCells[i].countNeighbors++;\n          // console.log(i);\n          // console.log(\"соседи З \" + allCells[i].countNeighbors);\n          // console.log( '5 яч ' + allCells[5].className)\n        }\n\n        // проверяем клетку на северо-западе\n\n        if (i % inputX !== 0 && i - inputX - 1 >= 0 && allCells[i - inputX - 1].classList.contains(\"active\")) {\n          allCells[i].countNeighbors++;\n          // console.log(i);\n          // console.log(\"соседи СЗ \" + allCells[i].countNeighbors);\n        }\n        // проверяем клетку на севере\n        if (i - inputX >= 0 && allCells[i - inputX].classList.contains(\"active\")) {\n          // console.log(i);\n          allCells[i].countNeighbors++;\n\n          // console.log(\"соседи С \" + allCells[i].countNeighbors);\n          // console.log(allCells[3].className)\n          // console.log( '4 яч ' + allCells[4].className)\n        }\n        // проверяем клетку на северо-востоке\n        if ((i + 1) % inputX !== 0 && i - inputX + 1 > 0 && allCells[i - inputX + 1].classList.contains(\"active\")) {\n          allCells[i].countNeighbors++;\n          // console.log(i);\n          //  console.log(\"соседи СВ \" + allCells[i].countNeighbors);\n          // console.log( '6 яч ' + allCells[i+inputX].className)\n        }\n\n        // проверяем клетку на востоке\n        if ((i + 1) % inputX !== 0 && i + 1 && i + 1 <= allCells.length - 1 && allCells[i + 1].classList.contains(\"active\")) {\n          allCells[i].countNeighbors++;\n          // console.log(i);\n          // console.log(\"соседи В \" + allCells[i].countNeighbors);\n        }\n\n        // проверяем клетку на юге\n        if (i + inputX && i + inputX <= allCells.length - 1 && allCells[i + inputX].classList.contains(\"active\")) {\n          // console.log( '5 яч ' + allCells[5].className)\n          allCells[i].countNeighbors++;\n          //  console.log(i);\n          //  console.log(\"соседи Ю\" + allCells[i].countNeighbors);\n        }\n        // проверяем клетку на юго-востоке\n        if ((i + 1) % inputX !== 0 && i + inputX + 1 <= allCells.length - 1 && allCells[i + inputX + 1].classList.contains(\"active\")) {\n          allCells[i].countNeighbors++;\n          // console.log(i);\n          // console.log(\"все соседи ЮВ \" + allCells[i].countNeighbors);\n        }\n      }\n    }\n\n    if (allCells[i].classList.contains(\"active\")) {\n      newArr.push(allCells[i]);\n    }\n    arrayAllNext.push(allCells[i]);\n  }\n  // console.log(arrayAllNext.length);\n  // alert ('prev'+(arrayAllPrevious.length))\n\n  if (newArr.length > 0) {\n    generationCounter.value++;\n    counter.innerText = \"Quantity of rebirth: \" + generationCounter.value.toString();\n  } else {\n    generationCounter.value = 0;\n    counter.innerText = \"Quantity of rebirth: \" + generationCounter.value.toString();\n\n    // alert(\"Everybody sleep!\");\n    // window.location.reload();\n  }\n\n  // } catch (err) {throw new Error(\"Game is over\");}\n  for (let i = 0; i < allCells.length; i++) {\n    if (allCells[i]?.countNeighbors === 3) {\n      if (allCells[i]?.classList.contains(\"idle\")) {\n        // console.log(i);\n        allCells[i]?.classList.add(\"active\");\n        allCells[i]?.classList.remove(\"idle\");\n      }\n    } else if (allCells[i]?.classList.contains(\"active\")) {\n      if (allCells[i]?.countNeighbors === 2) {\n        // console.log(i);\n        allCells[i]?.classList.add(\"active\");\n        allCells[i]?.classList.remove(\"idle\");\n      } else {\n        // console.log(i);\n        allCells[i]?.classList.add(\"idle\");\n        allCells[i]?.classList.remove(\"active\");\n      }\n    } else {\n      //  console.log(i);\n      if (allCells[i].classList.contains(\"active\")) {\n        allCells[i].classList.add(\"idle\");\n        allCells[i].classList.remove(\"active\");\n      }\n    }\n  }\n  newArr = [];\n}\n\n//# sourceURL=webpack://the-life/./src/findActiveNeighbors.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _reviveField_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviveField.ts */ \"./src/reviveField.ts\");\n\n\n(0,_reviveField_ts__WEBPACK_IMPORTED_MODULE_1__.reviveField)(document.querySelector(\"#container\"), 15, 15);\n(0,_reviveField_ts__WEBPACK_IMPORTED_MODULE_1__.reviveField)(document.querySelector(\"#container1\"), 5, 5);\n\n//# sourceURL=webpack://the-life/./src/index.ts?");

/***/ }),

/***/ "./src/makeActive.ts":
/*!***************************!*\
  !*** ./src/makeActive.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeActive: () => (/* binding */ makeActive)\n/* harmony export */ });\nfunction makeActive() {\n  if (this.classList.contains(\"idle\")) {\n    this.classList.add(\"active\");\n    this.classList.remove(\"idle\");\n  } else if (this.classList.contains(\"active\")) {\n    this.classList.add(\"idle\");\n    this.classList.remove(\"active\");\n  }\n}\n\n//# sourceURL=webpack://the-life/./src/makeActive.ts?");

/***/ }),

/***/ "./src/reviveField.ts":
/*!****************************!*\
  !*** ./src/reviveField.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reviveField: () => (/* binding */ reviveField)\n/* harmony export */ });\n/* harmony import */ var _createMarkup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMarkup */ \"./src/createMarkup.ts\");\n\n// import { findActiveNeighbors } from \"./findActiveNeighbors\";\n// import { makeActive } from \"./makeActive\";\nfunction reviveField(element, columns, rows) {\n  element.style.setProperty(\"--columns\", columns.toString());\n  element.style.setProperty(\"--rows\", rows.toString());\n  const generationCounter = {\n    value: 0\n  };\n  const counter = document.createElement(\"div\");\n  counter.classList.add(\"counter\");\n  element.append(counter);\n  const speedInput = document.createElement(\"input\");\n  speedInput.classList.add(\"speed\");\n  speedInput.type = \"range\";\n  speedInput.min = \"0\";\n  speedInput.max = \"60\";\n  speedInput.value = \"30\";\n  speedInput.addEventListener(\"input\", function () {\n    speed.value = Number(speedInput.value);\n  });\n  element.append(speedInput);\n  const speed = {\n    value: Number(speedInput.value)\n  };\n  console.log(speed);\n  const inputX = columns;\n  const inputY = rows;\n  const totalQuantity = inputX * inputY;\n  const allCells = Array.from(document.querySelectorAll(\".box\"));\n  (0,_createMarkup__WEBPACK_IMPORTED_MODULE_0__.createMarkup)(element, totalQuantity, allCells, generationCounter, inputX, counter, speed);\n}\n\n//# sourceURL=webpack://the-life/./src/reviveField.ts?");

/***/ }),

/***/ "./src/updatesProcess.ts":
/*!*******************************!*\
  !*** ./src/updatesProcess.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updatesProcess: () => (/* binding */ updatesProcess)\n/* harmony export */ });\n/* harmony import */ var _findActiveNeighbors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findActiveNeighbors */ \"./src/findActiveNeighbors.ts\");\n\nfunction updatesProcess(allCells, generationCounter, inputX, counter, speed) {\n  allCells = Array.from(document.querySelectorAll(\".box\"));\n  // console.log(allCells)\n\n  setTimeout(function () {\n    (0,_findActiveNeighbors__WEBPACK_IMPORTED_MODULE_0__.findActiveNeighbors)(allCells, generationCounter, inputX, counter);\n    updatesProcess(allCells, generationCounter, inputX, counter, speed);\n  }, 1200 / speed.value);\n}\n\n//# sourceURL=webpack://the-life/./src/updatesProcess.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  width: 100%;\n  background-color: antiquewhite;\n}\nh1 {\n  text-align: center;\n}\n#container {\n  margin: 0 auto;\n  width: 50%;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n}\n#container1 {\n  margin: 0 auto;\n  width: 50%;\n  height: 30%;\n  display: flex;\n  flex-direction: column;\n  background-color: antiquewhite;\n}\n.field {\n  display: grid;\n  grid-template-columns: repeat(var(--columns), 30px);\n  grid-template-rows: repeat(var(--rows), 30px);\n\n  justify-content: center;\n}\n.field1 {\n  display: grid;\n  grid-template-columns: repeat(5, 30px);\n  grid-template-rows: repeat(5, 30px);\n\n  justify-content: center;\n}\n\n.box {\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-color: rgb(243, 246, 250);\n  align-items: center;\n\n  border: 1px solid black;\n}\n.box:hover {\n  background-color: plum;\n  cursor: pointer;\n}\n\n.active {\n  background-color: plum;\n}\n\nbutton {\n  margin: 20px auto;\n  text-align: center;\n  font-size: 34px;\n  justify-content: center;\n}\n.counter {\n  font-size: 24px;\n  margin: 10px auto;\n  text-align: center;\n}\n.speed {\n  margin: 0 auto;\n  width: 50%;\n  display: block;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://the-life/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://the-life/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://the-life/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://the-life/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://the-life/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://the-life/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://the-life/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://the-life/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://the-life/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://the-life/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;