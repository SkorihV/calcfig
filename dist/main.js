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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-2!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/styles/main.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-2!./node_modules/sass-loader/dist/cjs.js??ref--4-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/reset.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-2!./node_modules/sass-loader/dist/cjs.js??ref--4-3!./src/styles/reset.css ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/reset.css?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--4-2!./node_modules/sass-loader/dist/cjs.js??ref--4-3");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/main.js */ \"./src/scripts/main.js\");\n// Подключаем стили\n\n\n\n\n// Подключаем скрипты\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/scripts/calcCalculate/calculate.js":
/*!************************************************!*\
  !*** ./src/scripts/calcCalculate/calculate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Calc {\n\n  constructor(data) {\n    this.calcData = {\n      name: \"qqq\",\n      obj: {\n        name: \"www\",\n        param: 1111,\n        obj2: {\n          qqq: \"ssss\"\n        },\n        obj3: {\n          q1: \"q1\",\n          q2: \"q2\"\n        }\n      },\n      ew: 111\n    };\n    this.calcWrapper = document.querySelector(\"#calculator\");\n  }\n\n  init() {\n    this.handlingCalcWrapper();\n    // console.log(this.calcData);\n    // console.log(this.calcWrapper);\n\n  }\n\n  getData() {\n    return this.calcData;\n  }\n\n  /*Проверяем наличие атрибута в котором храниться \n  название функции обработчика данного поля если поле есть \n  и функция с таким названием существет, то запускам её*/\n  handlingCalcWrapper() {\n    if (this.checkOfVoidParam(this.calcWrapper)) {\n      this.calcWrapper.addEventListener(\"click\", (e) => {\n        let target = e.target;\n\n        if (target.hasAttribute(\"data-handler-name\")) {\n          if (this.checkOfVoidFunc(target.getAttribute(\"data-handler-name\"))) {\n            let handlerFunc = this[target.getAttribute(\"data-handler-name\")];\n            handlerFunc();\n          }\n        }\n\n      })\n    }\n  }\n\n  createDataGroup(name) {\n    return;\n  }\n/*проверяем существует ли функция в классе */\n  checkOfVoidFunc(funcName) {\n    if (typeof this[funcName] == \"function\") {\n      return true;\n    } else {\n      return false;\n    }\n  }\n/*проверяем существует ли переменная */\n  checkOfVoidParam(paramName) {\n    if (paramName) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n/* рекурсивно обходим обхект */\n  findFieldInCalc(findValue, obj = this.getData()) {\n    for (let key in obj) {\n      let value = obj[key];\n      //     console.log(value);\n      //     console.log(key);\n      if (value === findValue) {\n        return true;\n      } else if ((typeof value) == \"object\") {\n        return this.findFieldInCalc(findValue, value);\n      }\n    }\n    return false;\n  }\n\n  createElementData(params) {\n    let element = {};\n\n    if (params.type) {\n\n    }\n\n\n    return element;\n  }\n\n  handlerNameObject() {\n    alert(\"aaa\");\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calc);\n\n//# sourceURL=webpack:///./src/scripts/calcCalculate/calculate.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _serviceModules_serviceModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serviceModules/serviceModules */ \"./src/scripts/serviceModules/serviceModules.js\");\n/* harmony import */ var _calcCalculate_calculate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcCalculate/calculate */ \"./src/scripts/calcCalculate/calculate.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n  const service = new _serviceModules_serviceModules__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  service.init();\n\n  const calc = new _calcCalculate_calculate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    wrapper: document.querySelector(\"#calculator\")\n  });\n  calc.init();\n  console.log(calc.findFieldInCalc(1111));\n});\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/serviceModules/serviceModules.js":
/*!******************************************************!*\
  !*** ./src/scripts/serviceModules/serviceModules.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Service {\n\n  constructor() {\n    this.multipleElementItem = document.querySelectorAll(\".calc__multiselect-list\");\n    this.cardList = document.querySelectorAll(\"input.calc__card-list-input\");\n    this.currentBoxes = document.querySelectorAll(\".calc__card-list-current-num-box\");\n    this.selectorListTitleItems = document.querySelectorAll(\".calc__selector-list-cheked\");\n    this.selectorListItems = document.querySelectorAll(\".calc__selector-list-wrapper\");\n  }\n\n  init() {\n    /*Обрабатываем все элементы с выбором количества */\n    this.currenChangeInput(this.currentBoxes);\n\n    /*Обрабатываем функционал выпадения у списков */\n    this.checkThisVoid(this.multipleElementItem);\n\n    this.multipleElementItem.forEach((item) => {\n      item.addEventListener(\"click\", this.openMultilist);\n    });\n    this.checkThisVoid(this.selectorListTitleItems);\n\n    this.selectorListTitleItems.forEach((item) => {\n      item.addEventListener(\"click\", this.openMultilist);\n    });\n\n    /*Добавляем небольшие эффекты для импутов с подсказками*/\n    this.checkThisVoid(this.cardList);\n    this.cardList.forEach((item) => {\n      item.addEventListener(\"input\", this.changeinputCardListPlaceholder);\n    });\n    /*Обрабатываем нажатие на блок шагов */\n    this.tabElementActivation(\".calc__tabs-block-numeric .calc__tab\", \".calc__tabs-content-wrapper .calc__tab-contains\");\n    this.tabElementActivation(\".calc__rooms-area-radio .calc__radio-button\", \".calc__rooms-area-wrapper .calc__rooms-area-contant\");\n    this.tabElementActivation(\".calc__tabs-block .calc__tab\", \".calc__tabs-blocks-content-wrapper .calc__tab-block-content\");\n    \n    this.dropdownListProcessing(this.selectorListItems);\n    this.cloneElementRoomsItem();\n    this.editImputNameRoom();\n  }\n  checkThisVoid(param) {\n    if (!param) {\n      return;\n    }\n  }\n\n  /*меняем значение в инпутах количества */\n  currenChangeInput(mass) {\n    mass.forEach(item => {\n      let boxInputValue = Number(item.querySelector(\".calc__card-list-current-imput\").value);\n      if (!boxInputValue) {\n        item.classList.add(\"calc__card-list-current-num-box_disabled\");\n      }\n      item.addEventListener(\"click\", (e) => {\n        const target = e.target;\n        const inputCurrent = item.querySelector(\".calc__card-list-current-imput\");\n        let valueInput = parseInt(inputCurrent.value);\n        if (target.classList.contains(\"calc__button-plus\")) {\n\n          if (isNaN(valueInput)) {\n            inputCurrent.value = 0;\n            item.classList.add(\"calc__card-list-current-num-box_disabled\");\n            return;\n          }\n          inputCurrent.value = valueInput + 1;\n          item.classList.remove(\"calc__card-list-current-num-box_disabled\");\n        }\n\n        if (target.classList.contains(\"calc__button-minus\")) {\n          if (isNaN(valueInput)) {\n            inputCurrent.value = 0;\n            return;\n          }\n          valueInput--;\n          if (valueInput <= 0) {\n            valueInput = 0;\n            item.classList.add(\"calc__card-list-current-num-box_disabled\");\n          }\n          inputCurrent.value = valueInput;\n        }\n      });\n    });\n  }\n\n  openMultilist(e) {\n    let className = e.target.classList[0]\n    e.target.classList.toggle(className + \"_open\");\n  }\n  \n  changeinputCardListPlaceholder(e) {\n    if (e.target.value.length > 0) {\n      e.target.classList.add(\"calc__card-list-input_active\");\n    }\n    if (e.target.value.length <= 0) {\n      e.target.classList.remove(\"calc__card-list-input_active\");\n    };\n  }\n  tabElementActivation(wrapperNavigation, tabsElements) {\n    const panel = document.querySelectorAll(wrapperNavigation);\n    const tabs = document.querySelectorAll(tabsElements);\n    if (!panel || !tabs) return;\n\n    let panelSelectorActive = wrapperNavigation.split(\" \");\n    let tabsSelectorActive = tabsElements.split(\" \");\n    panelSelectorActive = panelSelectorActive[1].slice(1) + \"_active\";\n    tabsSelectorActive = tabsSelectorActive[1].slice(1) + \"_active\";\n\n    panel.forEach(tabControl => {\n      tabControl.addEventListener(\"click\", (e) => {\n        panel.forEach(item => {\n          item.classList.remove(panelSelectorActive);\n        });\n        e.target.classList.add(panelSelectorActive);\n        let tabNum = e.target.getAttribute(\"data-tab-num\");\n\n        tabs.forEach(tab => {\n          if (tab.getAttribute(\"data-tab-num\") == tabNum) {\n            tabs.forEach(item => {\n              item.classList.remove(tabsSelectorActive);\n            });\n            tab.classList.add(tabsSelectorActive);\n          }\n        });\n      });\n    });\n  }\n  /*Клонируем элемент крточки комнаты для расчета площадей */\n  cloneElementRoomsItem() {\n    const wrapperElementsWhichClone = document.querySelectorAll(\".calc__rooms-area-contant\");\n    if (!wrapperElementsWhichClone) {\n      return;\n    }\n    wrapperElementsWhichClone.forEach(item => {\n      item.addEventListener(\"click\", (e) => {\n        const target = e.target;\n        if (target.classList.contains(\"calc__button-plus\")) {\n          const copyNode = target.parentNode.parentNode;\n          const cloneNode = copyNode.cloneNode(true);\n          copyNode.insertAdjacentElement(\"afterend\", cloneNode);\n        }\n      });\n    });\n  }\n  editImputNameRoom() {\n    const wrapperElements = document.querySelectorAll(\".calc__rooms-area-contant\");\n    if (!wrapperElements) {\n      return;\n    }\n\n    wrapperElements.forEach(item => {\n      /*отображаем инпут при двойном клике на название */\n      item.addEventListener(\"dblclick\", (e) => {\n        const target = e.target;\n        if (target.classList.contains(\"calc__card-list-title\")) {\n          const contentNode = target.innerText;\n          target.nextElementSibling.value = contentNode;\n          target.parentNode.classList.add(\"calc__card-list-wrapper-title_edit\");\n        }\n      });\n      /*скрываем инпут при клиеке вне инпута */\n      item.addEventListener(\"click\", (e) => {\n        const target = e.target;\n        if ((!target.classList.contains(\"calc__card-list-title\")) ||\n          (!target.classList.contains(\"calc__card-list-title-input\"))) {\n          const editNodes = target.querySelectorAll(\".calc__rooms-area-contant .calc__card-list-wrapper-title\");\n          editNodes.forEach(item => {\n            const input = item.querySelector(\".calc__card-list-title-input\");\n            const title = item.querySelector(\".calc__card-list-title\");\n            title.innerText = input.value;\n            item.classList.remove(\"calc__card-list-wrapper-title_edit\");\n          });\n        }\n      });\n    })\n  }\n  /*Обработка выбора у выпадающего списка и подставление результата в тайтл */\n  dropdownListProcessing(list) {\n    if (!list) {\n      return;\n    }\n    list.forEach(item => {\n      item.addEventListener(\"click\", function (e) {\n        let mainItem = this;\n        let chekedTitle = mainItem.querySelector(\".calc__selector-list-cheked\");\n        let target = e.target;\n\n        if (target.classList.contains(\"calc__selector-list-item\")) {\n          chekedTitle.innerHTML = target.innerHTML;\n        }\n      })\n    })\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Service);\n\n//# sourceURL=webpack:///./src/scripts/serviceModules/serviceModules.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--4-2!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./main.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--4-2!../../node_modules/sass-loader/dist/cjs.js??ref--4-3!./reset.css */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/reset.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/reset.css?");

/***/ })

/******/ });