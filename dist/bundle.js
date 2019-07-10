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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/javascript/app */ "./src/javascript/app.js");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_styles_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _src_styles_main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_main_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_styles_animation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/styles/animation.css */ "./src/styles/animation.css");
/* harmony import */ var _src_styles_animation_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_styles_animation_css__WEBPACK_IMPORTED_MODULE_3__);




new _src_javascript_app__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/animation.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/animation.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#chooseAttack,\r\n#chooseDefense {\r\n    display: none;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    height: 344px;\r\n}\r\n\r\n#up,\r\n#middle,\r\n#down,\r\n#upDef,\r\n#middleDef,\r\n#downDef {\r\n    display: block;\r\n    background-image: url('https://img.icons8.com/color/40/000000/sword.png');\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n}\r\n\r\n#upDef,\r\n#middleDef,\r\n#downDef {\r\n    background-image: url('https://img.icons8.com/color/40/000000/knight-shield.png');\r\n}\r\n\r\n#up {\r\n    transform: rotate(20deg);\r\n}\r\n\r\n#middle {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n#down {\r\n    transform: rotate(80deg);\r\n}\r\n\r\n@keyframes moveUp {\r\n    from {\r\n        right: 0;\r\n        top: 0;\r\n    }\r\n\r\n    to {\r\n        top: -25px;\r\n        right: -25px;\r\n    }\r\n}\r\n\r\n@keyframes moveMiddle {\r\n    from {\r\n        right: 0\r\n    }\r\n\r\n    to {\r\n        right: -50px;\r\n    }\r\n}\r\n\r\n@keyframes moveDown {\r\n    from {\r\n        right: 0;\r\n        bottom: 0;\r\n    }\r\n\r\n    to {\r\n        right: -25px;\r\n        bottom: -25px;\r\n    }\r\n}\r\n\r\n@keyframes moveUpDef {\r\n    from {\r\n        left: 0;\r\n        top: 0;\r\n    }\r\n\r\n    to {\r\n        left: -25px;\r\n        top: -25px;\r\n    }\r\n}\r\n\r\n@keyframes moveMiddleDef {\r\n    from {\r\n        left: 0;\r\n    }\r\n\r\n    to {\r\n        left: -25px;\r\n    }\r\n}\r\n\r\n@keyframes moveDownDef {\r\n    from {\r\n        left: 0;\r\n        bottom: 0;\r\n    }\r\n\r\n    to {\r\n        left: -25px;\r\n        bottom: -25px;\r\n    }\r\n}\r\n\r\n\r\n\r\n#up:hover {\r\n    animation-iteration-count: infinite;\r\n    animation-name: moveUp;\r\n    animation-duration: 3s;\r\n    animation-timing-function: ease-out;\r\n}\r\n\r\n#middle:hover {\r\n    animation-iteration-count: infinite;\r\n    animation-name: moveMiddle;\r\n    animation-duration: 3s;\r\n    animation-timing-function: ease-out;\r\n}\r\n\r\n#down:hover {\r\n    animation-iteration-count: infinite;\r\n    animation-name: moveDown;\r\n    animation-duration: 3s;\r\n    animation-timing-function: ease-out;\r\n}\r\n\r\n#upDef:hover {\r\n    animation-iteration-count: infinite;\r\n    animation-name: moveUpDef;\r\n    animation-duration: 3s;\r\n    animation-timing-function: ease-out;\r\n}\r\n\r\n#middleDef:hover {\r\n    animation-iteration-count: infinite;\r\n    animation-name: moveMiddleDef;\r\n    animation-duration: 3s;\r\n    animation-timing-function: ease-out;\r\n}\r\n\r\n#downDef:hover {\r\n    animation-iteration-count: infinite;\r\n    animation-name: moveDownDef;\r\n    animation-duration: 3s;\r\n    animation-timing-function: ease-out;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".modal {\r\n    width: 800px;\r\n    height: 500px;\r\n    color: white;\r\n    position: fixed;\r\n    top: 50px;\r\n    left: 50%;\r\n    margin-left: -400px;\r\n    font-size: 1.25em;\r\n    background: url('https://zweifuss.ca/select/bg.png') no-repeat;\r\n    background-size: 800px 500px;\r\n\r\n}\r\n\r\n.modal h2 {\r\n    height: 2em;\r\n    text-align: center;\r\n}\r\n\r\n#informationBlock {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    visibility: hidden;\r\n    height: 3em;\r\n    width: 100%;\r\n}\r\n\r\n#informationBlock div {\r\n    line-height: 3em;\r\n}\r\n\r\nbody {\r\n    color: white;\r\n}\r\n\r\n.inline {\r\n    display: inline;\r\n}\r\n\r\n.left {\r\n    width: 50%;\r\n    float: left;\r\n}\r\n\r\n.right {\r\n    width: 50%;\r\n    float: right;\r\n    background-color: #081078;\r\n}\r\n\r\n.close {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    background-image: url(https://img.icons8.com/color/24/000000/close-window.png);\r\n    width: 24px;\r\n    height: 24px;\r\n    cursor: pointer;\r\n}\r\n\r\n.close:hover {\r\n    background-color: #800e0ee3;\r\n}\r\n\r\n.indicator {\r\n    color: cornsilk;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 20px 10px;\r\n}\r\n\r\n.counter {\r\n    margin: 0 10px;\r\n}\r\n\r\n.minus {\r\n    display: block;\r\n    float: left;\r\n    background-image: url(\"https://img.icons8.com/color/24/000000/minus.png\");\r\n    width: 24px;\r\n    height: 24px;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.plus {\r\n    display: block;\r\n    float: right;\r\n    background-image: url(\"https://img.icons8.com/color/24/000000/plus.png\");\r\n    width: 24px;\r\n    height: 24px;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n}\r\n\r\n.btnBlock {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#textarea {\r\n    position: absolute;\r\n    bottom: 0;\r\n    min-width: 99.4%;\r\n    max-width: 99.4%;\r\n    min-height: 200px;\r\n}\r\n\r\n.progress {\r\n    width: 200px;\r\n    height: 20px;\r\n    border: 1px solid #333;\r\n    border-radius: 10px;\r\n    background: #333 linear-gradient(#333, #969696) no-repeat;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.progress span {\r\n    position: absolute;\r\n    left: 50%;\r\n    margin-left: -1em;\r\n}\r\n\r\n.indicatorHealth {\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    border: 1px solid red;\r\n    background: red no-repeat;\r\n    box-shadow: 0 0 6px 0 black;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.header {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.text_modal_h2 {\r\n    text-align: center;\r\n}\r\n\r\n.text_modal_text {\r\n    padding: 20px;\r\n}\r\n\r\n.text_modal_btn {\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n.divForBtn {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.left span.name {\r\n    display: none;\r\n}\r\n\r\n.btn,\r\nbutton {\r\n    display: inline-block;\r\n    font-weight: 400;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    user-select: none;\r\n    border: 1px solid transparent;\r\n    padding: .375rem .75rem;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    border-radius: .25rem;\r\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n.btn-primary:hover {\r\n    color: #fff;\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n}\r\n\r\n#message {\r\n    color: white;\r\n    display: none;\r\n    justify-content: center;\r\n    height: 100%;\r\n    text-align: center;\r\n    flex-direction: column;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n\r\n    .modal,\r\n    #root,\r\n    #rootElem,\r\n    #loading-overlay {\r\n        display: none;\r\n    }\r\n\r\n    #message {\r\n        display: flex;\r\n    }\r\n\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#root {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.fighters {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    flex: 1;\r\n    flex-wrap: wrap;\r\n    padding: 0 15px;\r\n    height: 344px;\r\n}\r\n\r\n.fighter {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n    height: 344px;\r\n}\r\n\r\n.left .fighter {\r\n    width: 205px;\r\n}\r\n\r\n.fighter:hover {\r\n    box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.06);\r\n    cursor: pointer;\r\n}\r\n\r\n.name {\r\n    align-self: center;\r\n    font-size: 21px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.fighter-image {\r\n    height: 260px;\r\n}\r\n\r\n#loading-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 18px;\r\n    background: rgba(255, 255, 255, 0.7);\r\n    visibility: hidden;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/javascript/Fighter.js":
/*!***********************************!*\
  !*** ./src/javascript/Fighter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_MyRandom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/MyRandom */ "./src/javascript/services/MyRandom.js");


class Fighter {
  constructor({
    _id,
    name,
    source
  }) {
    this._id = _id;
    this.name = name;
    this.source = source;
    this.getHitPower = this._getHitPower;
    this.getBlockPower = this._getBlockPower;
  }

  addDetails({
    attack,
    defense,
    health
  }) {
    this.attack = attack;
    this.defense = defense;
    this.health = health;
  }

  _getHitPower() {
    return this.attack * _services_MyRandom__WEBPACK_IMPORTED_MODULE_0__["default"].randomFloatNumber({
      min: 1,
      max: 2
    });
  }

  _getBlockPower() {
    return this.defense * _services_MyRandom__WEBPACK_IMPORTED_MODULE_0__["default"].randomFloatNumber({
      min: 1,
      max: 2
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fighter);

/***/ }),

/***/ "./src/javascript/app.js":
/*!*******************************!*\
  !*** ./src/javascript/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fightersView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fightersView */ "./src/javascript/fightersView.js");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/fightersService */ "./src/javascript/services/fightersService.js");
/* harmony import */ var _Fighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fighter */ "./src/javascript/Fighter.js");
/* harmony import */ var _helpers_modal_Text_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/modal/Text_modal */ "./src/javascript/helpers/modal/Text_modal.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class App {
  constructor() {
    _helpers_modal_Text_modal__WEBPACK_IMPORTED_MODULE_3__["default"].showInformation('Greetings! Welcome to our game', `First of all, you need to choose two characters - your fighter and your enemy - by clicking on their avatar, and decide on the level of health, the power of attack and defense. After that you are ready to start the fight (you will see the button 'Begin fight' at the very top of the window).`);
    this.startApp();
  }

  async startApp() {
    try {
      App.loadingElement.style.visibility = 'visible';
      let fighters = await _services_fightersService__WEBPACK_IMPORTED_MODULE_1__["fightersService"].getFighters();
      fighters = [...fighters].map(elem => new _Fighter__WEBPACK_IMPORTED_MODULE_2__["default"](elem));
      const fightersView = new _fightersView__WEBPACK_IMPORTED_MODULE_0__["default"](fighters);
      const fightersElement = fightersView.element;
      App.rootElement.appendChild(fightersElement);
      App.information.innerHTML = `
                <div id='firstChoose'>Your</div>
                <div id='choosed'>Сhoose a character</div>
                <div id='secondChoose'>Enemy</div>`;
    } catch (error) {
      console.warn(error);
      App.rootElement.innerText = 'Failed to load data';
    } finally {
      App.loadingElement.style.visibility = 'hidden';
      App.information.style.visibility = 'visible';
    }
  }

}

_defineProperty(App, "rootElement", document.getElementById('root'));

_defineProperty(App, "loadingElement", document.getElementById('loading-overlay'));

_defineProperty(App, "information", document.getElementById('informationBlock'));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/javascript/battle/Battle.js":
/*!*****************************************!*\
  !*** ./src/javascript/battle/Battle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fighterView */ "./src/javascript/fighterView.js");
/* harmony import */ var _helpers_modal_Text_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/modal/Text_modal */ "./src/javascript/helpers/modal/Text_modal.js");
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Indicator */ "./src/javascript/battle/Indicator.js");
/* harmony import */ var _services_MyRandom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/MyRandom */ "./src/javascript/services/MyRandom.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Battle {
  constructor(you, enemy) {
    _defineProperty(this, "count", 0);

    this.rootElem = document.getElementById('root');
    this.rootElem.style.display = 'none';
    this.enemy = enemy;
    this.you = you;
    this.init();
    _helpers_modal_Text_modal__WEBPACK_IMPORTED_MODULE_1__["default"].showInformation(`There is information about fight`, `You need to choose which enemy's part of the body to attack, after that your enemy is to decide which part to protect. And then vice versa - he attacks, you defend. Performance of both fighters is displayed in the console at the bottom of the window.`);
    this.log('The fight start!');
  }

  init() {
    this.generatorAttack = this.generator(this.you, this.enemy);
    this.generatorDefense = this.generator(this.enemy, this.you);
    this.arrows = document.createElement('div');
    this.arrows.setAttribute('id', 'chooseAttack');
    this.arrows.innerHTML = `<span id='up'></span>
        <span id='middle'></span>
        <span id='down'></span>`;
    this.shields = document.createElement('div');
    this.shields.setAttribute('id', 'chooseDefense');
    this.shields.innerHTML = `<span id='upDef'></span>
        <span id='middleDef'></span>
        <span id='downDef'></span>`;
    this.root = document.createElement('div');
    this.root.setAttribute('id', 'rootElem');
    let header = document.createElement('div');
    header.setAttribute('class', 'header');
    this.firstIndicator = new _Indicator__WEBPACK_IMPORTED_MODULE_2__["default"](this.you);
    header.append(this.firstIndicator.elem);
    let span = document.createElement('span');
    span.setAttribute('class', 'headerSpan');
    span.innerHTML = 'VS';
    header.append(span);
    this.secondIndicator = new _Indicator__WEBPACK_IMPORTED_MODULE_2__["default"](this.enemy);
    header.append(this.secondIndicator.elem);
    this.root.append(header);
    this.arrows.style.display = 'flex';
    let fighters = document.createElement('div');
    fighters.setAttribute('class', 'fighters');
    fighters.append(new _fighterView__WEBPACK_IMPORTED_MODULE_0__["default"](this.you).element);
    fighters.append(this.arrows);
    fighters.append(this.shields);
    fighters.append(new _fighterView__WEBPACK_IMPORTED_MODULE_0__["default"](this.enemy).element);
    this.root.append(fighters);
    this.text = document.createElement('textarea');
    this.text.setAttribute('id', 'textarea');
    this.text.setAttribute('disabled', 'disabled');
    this.root.append(this.text);
    document.body.append(this.root);
    document.getElementById('up').addEventListener('click', () => {
      this.hit(1);
    });
    document.getElementById('middle').addEventListener('click', () => {
      this.hit(2);
    });
    document.getElementById('down').addEventListener('click', () => {
      this.hit(3);
    });
    document.getElementById('upDef').addEventListener('click', () => {
      this.hit(1);
    });
    document.getElementById('middleDef').addEventListener('click', () => {
      this.hit(2);
    });
    document.getElementById('downDef').addEventListener('click', () => {
      this.hit(3);
    });
  }

  log(...text) {
    text.forEach(elem => {
      this.text.value += `${elem} \n`;
    });
    this.text.scrollTop = this.text.scrollHeight;
  }

  hit(where) {
    let arr = ['head', 'armor', 'legs'];
    let attack;
    if (this.count % 2 == 0) attack = this.generatorAttack.next().value;else attack = this.generatorDefense.next().value;
    let damage = attack.attack.toFixed(1);

    if (where == attack.where) {
      damage = attack.attack.toFixed(1) - attack.defense.toFixed(1);
    }

    let res;
    if (this.count % 2 == 0) res = this.secondIndicator.hit((+damage).toFixed(1));else res = this.firstIndicator.hit((+damage).toFixed(1));

    if (!res.end) {
      if (this.count % 2 == 0) {
        this.log(`-- You attack ${arr[where - 1]} with damage ${attack.attack.toFixed(1)}. Enemy defense ${arr[attack.where - 1]} with power ${attack.defense.toFixed(1)}. Total damage ${res.damage}`);
        this.arrows.style.display = 'none';
        this.shields.style.display = 'flex';
      } else {
        this.log(`-- Enemy attack ${arr[attack.where - 1]} with damage ${attack.attack.toFixed(1)}. Your defense ${arr[where - 1]} with power ${attack.defense.toFixed(1)}. Total damage ${res.damage}`);
        this.shields.style.display = 'none';
        this.arrows.style.display = 'flex';
      }
    } else {
      let callback = () => {
        document.getElementById('rootElem').remove();
        document.getElementById('root').style.display = 'flex';
      };

      if (this.count % 2 == 0) {
        _helpers_modal_Text_modal__WEBPACK_IMPORTED_MODULE_1__["default"].showInformation('Yeah', `Сongratulations on the victory, keep up the good work`, callback);
      } else _helpers_modal_Text_modal__WEBPACK_IMPORTED_MODULE_1__["default"].showInformation('Oops', `You lost, but do not worry. Next time everything will turn out`, callback);
    }

    this.count++;
  }

  *generator(fighter1, fighter2) {
    while (true) yield {
      attack: fighter1.getHitPower(),
      defense: fighter2.getBlockPower(),
      where: _services_MyRandom__WEBPACK_IMPORTED_MODULE_3__["default"].randomIntNumber({
        min: 1,
        max: 3
      })
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Battle);

/***/ }),

/***/ "./src/javascript/battle/Indicator.js":
/*!********************************************!*\
  !*** ./src/javascript/battle/Indicator.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Indicator {
  constructor(fighter) {
    this.fighter = fighter;
    this._health = fighter.health;
    this.elem = document.createElement('div');
    this.elem.setAttribute('class', 'progress');
    this.indicator = document.createElement('div');
    this.indicator.setAttribute('class', 'indicatorHealth');
    this.span = document.createElement('span');
    this.span.innerHTML = this.fighter.health;
    this.elem.append(this.span, this.indicator);
  }

  hit(point) {
    point = +point;
    if (point < 0) return {
      end: false,
      damage: 0
    };
    this._health = this._health.toFixed(1) - point;

    if (this._health <= 0) {
      this.span.innerHTML = '0';
      this.indicator.style.width = '0%';
      return {
        end: true,
        damage: point.toFixed(1)
      };
    } else {
      this.span.innerHTML = this._health.toFixed(1);
      let width = (100 * this._health.toFixed(1) / this.fighter.health).toFixed(1);
      this.indicator.style.width = `${width}%`;
      return {
        end: false,
        damage: point.toFixed(1)
      };
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Indicator);

/***/ }),

/***/ "./src/javascript/battle/Preparation.js":
/*!**********************************************!*\
  !*** ./src/javascript/battle/Preparation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Battle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Battle */ "./src/javascript/battle/Battle.js");


class Preparation {
  get your() {
    return this._your;
  }

  set your(fighter) {
    document.getElementById('firstChoose').innerHTML = `Your: ${fighter.name}`;
    this._your = fighter;

    if (this._your && this._enemy && !this.btn) {
      this.printBTN();
    }
  }

  get enemy() {
    return this._enemy;
  }

  set enemy(fighter) {
    document.getElementById('secondChoose').innerHTML = `Enemy: ${fighter.name}`;
    this._enemy = fighter;

    if (this._your && this._enemy && !this.btn) {
      this.printBTN();
    }
  }

  printBTN() {
    let elem = document.getElementById('choosed');
    elem.innerHTML = '';
    this.btn = document.createElement('button');
    this.btn.innerHTML = 'Begin battle';
    this.btn.addEventListener('click', () => {
      new _Battle__WEBPACK_IMPORTED_MODULE_0__["default"](this._your, this._enemy);
    });
    elem.append(this.btn);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Preparation);

/***/ }),

/***/ "./src/javascript/fighterView.js":
/*!***************************************!*\
  !*** ./src/javascript/fighterView.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/view.js");


class FighterView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighter, handleClick) {
    super();
    this.createFighter(fighter, handleClick);
  }

  createFighter(fighter, handleClick) {
    const {
      name,
      source
    } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);
    this.element = this.createElement({
      tagName: 'div',
      className: 'fighter'
    });
    this.element.append(imageElement, nameElement);
    if (handleClick) ;
    this.element.addEventListener('click', event => handleClick(event, fighter), false);
  }

  createName(name) {
    const nameElement = this.createElement({
      tagName: 'span',
      className: 'name'
    });
    nameElement.innerText = name;
    return nameElement;
  }

  createImage(source) {
    const attributes = {
      src: source
    };
    const imgElement = this.createElement({
      tagName: 'img',
      className: 'fighter-image',
      attributes
    });
    return imgElement;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FighterView);

/***/ }),

/***/ "./src/javascript/fightersView.js":
/*!****************************************!*\
  !*** ./src/javascript/fightersView.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/javascript/view.js");
/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fighterView */ "./src/javascript/fighterView.js");
/* harmony import */ var _services_fightersService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/fightersService */ "./src/javascript/services/fightersService.js");
/* harmony import */ var _helpers_modal_Fighter_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/modal/Fighter_modal */ "./src/javascript/helpers/modal/Fighter_modal.js");
/* harmony import */ var _battle_Preparation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battle/Preparation */ "./src/javascript/battle/Preparation.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class FightersView extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighters) {
    super();

    _defineProperty(this, "fightersDetailsMap", new Map());

    this.handleClick = this.handleFighterClick.bind(this);
    this.createFighters(fighters);
    this.preparation = new _battle_Preparation__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }

  createFighters(fighters) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new _fighterView__WEBPACK_IMPORTED_MODULE_1__["default"](fighter, this.handleClick);
      return fighterView.element;
    });
    this.element = this.createElement({
      tagName: 'div',
      className: 'fighters'
    });
    this.element.append(...fighterElements);
  }

  handleFighterClick(event, fighter) {
    let modal;
    if (this.fightersDetailsMap.has(fighter._id)) modal = new _helpers_modal_Fighter_modal__WEBPACK_IMPORTED_MODULE_3__["default"](this.fightersDetailsMap.get(fighter._id), this.preparation);else _services_fightersService__WEBPACK_IMPORTED_MODULE_2__["fightersService"].getFighterDetails(fighter._id).then(data => {
      fighter.addDetails(data);
      this.fightersDetailsMap.set(fighter._id, fighter);
      modal = new _helpers_modal_Fighter_modal__WEBPACK_IMPORTED_MODULE_3__["default"](fighter, this.preparation);
    }).catch(err => {
      console.log(err);
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FightersView);

/***/ }),

/***/ "./src/javascript/helpers/apiHelper.js":
/*!*********************************************!*\
  !*** ./src/javascript/helpers/apiHelper.js ***!
  \*********************************************/
/*! exports provided: callApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callApi", function() { return callApi; });
const API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';

function callApi(endpoind, method) {
  const url = API_URL + endpoind;
  const options = {
    method
  };
  return fetch(url, options).then(response => response.ok ? response.json() : Promise.reject(Error('Failed to load'))).catch(error => {
    throw error;
  });
}



/***/ }),

/***/ "./src/javascript/helpers/modal/Fighter_modal.js":
/*!*******************************************************!*\
  !*** ./src/javascript/helpers/modal/Fighter_modal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/javascript/helpers/modal/Modal.js");
/* harmony import */ var _fighterView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../fighterView */ "./src/javascript/fighterView.js");



class Fighter_modal extends _Modal__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(fighter, preparation) {
    super();
    Object.assign(this.fighter = {}, fighter);
    this.preparation = preparation;
    this.modal.style.background = "url('./resources/choose-character.img') no-repeat";
    this.modal.style.backgroundSize = "800px 500px";
    let h = this.createElement({
      tagName: 'h2'
    });
    h.innerHTML = ` `;
    this.modal.appendChild(h);
    let left = this.createElement({
      tagName: 'div',
      className: 'left'
    });
    left.append(new _fighterView__WEBPACK_IMPORTED_MODULE_1__["default"](fighter).element);
    let right = this.createElement({
      tagName: 'div',
      className: 'right'
    });
    right.append(this.createIndicator(this.fighter.attack, 'attack'), this.createIndicator(this.fighter.defense, 'defense'), this.createIndicator(this.fighter.health, 'health'));
    this.modal.append(left, right);
    this.modal.append(this.createButton());
  }

  createIndicator(point, name) {
    let elem = this.createElement({
      tagName: 'div',
      className: 'indicator'
    });
    let block = this.createElement({
      tagName: 'div',
      className: 'inline'
    });
    block.innerHTML = name;
    let counter = this.createElement({
      tagName: 'span',
      className: 'counter'
    });
    counter.innerHTML = point;
    let minus = this.createElement({
      tagName: 'span',
      className: 'minus'
    });
    let plus = this.createElement({
      tagName: 'span',
      className: 'plus'
    });
    let countBlock = this.createElement({
      tagName: 'div',
      className: 'countBlock'
    });
    countBlock.append(minus, counter, plus);
    plus.addEventListener('click', () => {
      if (point == 1) minus.style.opacity = '1';
      this.fighter[name]++;
      point++;
      counter.innerHTML = point;
    });
    minus.addEventListener('click', () => {
      switch (point) {
        case 1:
          break;

        case 2:
          minus.style.opacity = '0.5';
          this.fighter[name]--;
          point--;
          break;

        default:
          this.fighter[name]--;
          point--;
      }

      counter.innerHTML = point;
    });
    elem.append(block, countBlock);
    return elem;
  }

  createButton() {
    let block = this.createElement({
      tagName: 'div',
      className: 'btnBlock'
    });
    let myBTN = this.createElement({
      tagName: 'button',
      className: 'btn'
    });
    myBTN.className += ' btn-primary';
    myBTN.innerHTML = 'my fighter';
    myBTN.addEventListener('click', () => {
      this.preparation.your = this.fighter;
      _Modal__WEBPACK_IMPORTED_MODULE_0__["default"].clearModals();
    });
    let enemyBTN = this.createElement({
      tagName: 'button',
      className: 'btn'
    });
    enemyBTN.className += ' btn-primary';
    enemyBTN.innerHTML = 'enemy fighter';
    enemyBTN.addEventListener('click', () => {
      this.preparation.enemy = this.fighter;
      _Modal__WEBPACK_IMPORTED_MODULE_0__["default"].clearModals();
    });
    block.append(myBTN, enemyBTN);
    return block;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fighter_modal);

/***/ }),

/***/ "./src/javascript/helpers/modal/Modal.js":
/*!***********************************************!*\
  !*** ./src/javascript/helpers/modal/Modal.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/javascript/view.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Modal extends _view__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super();

    _defineProperty(this, "modal", void 0);

    Modal.clearModals();
    this.modal = this.createElement({
      tagName: 'div',
      className: 'modal'
    });
    this.close = this.createElement({
      tagName: 'div',
      className: 'close'
    });
    this.modal.append(this.close);
    this.close.addEventListener('click', () => {
      Modal.clearModals();
    });
    document.body.appendChild(this.modal);
  }

  static clearModals(callback) {
    let modals = document.getElementsByClassName('modal');
    if (modals.length > 0) [...modals].forEach(elem => elem.remove());
    if (callback) callback();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/javascript/helpers/modal/Text_modal.js":
/*!****************************************************!*\
  !*** ./src/javascript/helpers/modal/Text_modal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/javascript/helpers/modal/Modal.js");


class Text_modal extends _Modal__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(header, text, callback) {
    super();
    let h = this.createElement({
      tagName: 'h2',
      className: 'text_modal_h2'
    });
    h.innerHTML = header;
    let div = this.createElement({
      tagName: 'div',
      className: 'text_modal_text'
    });
    div.innerHTML = text;
    let divForBtn = this.createElement({
      tagName: 'div',
      className: 'divForBtn'
    });
    let btn = this.createElement({
      tagName: 'button',
      classname: 'text_modal_button'
    });
    divForBtn.append(btn);
    btn.innerHTML = 'OK';
    btn.addEventListener('click', () => {
      _Modal__WEBPACK_IMPORTED_MODULE_0__["default"].clearModals(callback);
    });
    this.modal.append(h, div, divForBtn);
    if (callback) this.close.addEventListener('click', callback);
  }

  static showInformation(header, text, callback) {
    document.body.append(new Text_modal(header, text, callback).modal);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Text_modal);

/***/ }),

/***/ "./src/javascript/services/MyRandom.js":
/*!*********************************************!*\
  !*** ./src/javascript/services/MyRandom.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MyRandom {
  static randomFloatNumber({
    min,
    max
  }) {
    return (Math.random() * (max - min) + min).toFixed(1);
  }

  static randomIntNumber({
    min,
    max
  }) {
    return (Math.random() * (max - min) + min).toFixed(0);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyRandom);

/***/ }),

/***/ "./src/javascript/services/fightersService.js":
/*!****************************************************!*\
  !*** ./src/javascript/services/fightersService.js ***!
  \****************************************************/
/*! exports provided: fightersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fightersService", function() { return fightersService; });
/* harmony import */ var _helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiHelper */ "./src/javascript/helpers/apiHelper.js");


class FightersService {
  async getFighters() {
    try {
      const endpoint = 'fighters.json';
      const apiResult = await Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, 'GET');
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    try {
      const endpoint = `details/fighter/${_id}.json`;
      const apiResult = await Object(_helpers_apiHelper__WEBPACK_IMPORTED_MODULE_0__["callApi"])(endpoint, 'GET');
      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

}

const fightersService = new FightersService();

/***/ }),

/***/ "./src/javascript/view.js":
/*!********************************!*\
  !*** ./src/javascript/view.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class View {
  constructor() {
    _defineProperty(this, "element", void 0);
  }

  createElement({
    tagName,
    className = '',
    attributes = {}
  }) {
    const element = document.createElement(tagName);
    if (className) element.classList.add(className);
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    return element;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./src/styles/animation.css":
/*!**********************************!*\
  !*** ./src/styles/animation.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./animation.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/animation.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map