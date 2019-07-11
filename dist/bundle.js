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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __webpack_require__(/*! ./src/javascript/app */ "./src/javascript/app.ts");
__webpack_require__(/*! ./src/styles/styles.css */ "./src/styles/styles.css");
__webpack_require__(/*! ./src/styles/main.css */ "./src/styles/main.css");
__webpack_require__(/*! ./src/styles/animation.css */ "./src/styles/animation.css");
new app_1.default();


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

/***/ "./src/javascript/Fighter.ts":
/*!***********************************!*\
  !*** ./src/javascript/Fighter.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MyRandom_1 = __webpack_require__(/*! ./services/MyRandom */ "./src/javascript/services/MyRandom.ts");
var Fighter = /** @class */ (function () {
    function Fighter(_a) {
        var _id = _a._id, name = _a.name, source = _a.source;
        this._id = _id;
        this.name = name;
        this.source = source;
        this.getHitPower = this._getHitPower;
        this.getBlockPower = this._getBlockPower;
    }
    Fighter.prototype.addDetails = function (_a) {
        var attack = _a.attack, defense = _a.defense, health = _a.health;
        this.attack = attack;
        this.defense = defense;
        this.health = health;
    };
    Fighter.prototype._getHitPower = function () {
        return this.attack * MyRandom_1.default.randomFloatNumber({
            min: 1,
            max: 2
        });
    };
    Fighter.prototype._getBlockPower = function () {
        return this.defense * MyRandom_1.default.randomFloatNumber({
            min: 1,
            max: 2
        });
    };
    return Fighter;
}());
exports.Fighter = Fighter;


/***/ }),

/***/ "./src/javascript/app.ts":
/*!*******************************!*\
  !*** ./src/javascript/app.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fightersView_1 = __webpack_require__(/*! ./fightersView */ "./src/javascript/fightersView.ts");
var fightersService_1 = __webpack_require__(/*! ./services/fightersService */ "./src/javascript/services/fightersService.ts");
var Fighter_1 = __webpack_require__(/*! ./Fighter */ "./src/javascript/Fighter.ts");
var Text_modal_1 = __webpack_require__(/*! ./helpers/modal/Text_modal */ "./src/javascript/helpers/modal/Text_modal.ts");
var App = /** @class */ (function () {
    function App() {
        Text_modal_1.Text_modal.showInformation('Greetings! Welcome to our game', "First of all, you need to choose two characters - your fighter and your enemy - by clicking on their avatar, and decide on the level of health, the power of attack and defense. After that you are ready to start the fight (you will see the button 'Begin fight' at the very top of the window).");
        this.startApp();
    }
    App.prototype.startApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fighters, fightersView, fightersElement, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 3, 4]);
                        App.loadingElement.style.visibility = 'visible';
                        return [4 /*yield*/, fightersService_1.fightersService.getFighters()];
                    case 1:
                        fighters = _a.sent();
                        fighters = fighters.slice().map(function (elem) { return new Fighter_1.Fighter(elem); });
                        fightersView = new fightersView_1.FightersView(fighters);
                        fightersElement = fightersView.element;
                        App.rootElement.appendChild(fightersElement);
                        App.information.innerHTML = "\n                <div id='firstChoose'>Your</div>\n                <div id='choosed'>\u0421hoose a character</div>\n                <div id='secondChoose'>Enemy</div>";
                        return [3 /*break*/, 4];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        App.rootElement.innerText = 'Failed to load data';
                        return [3 /*break*/, 4];
                    case 3:
                        App.loadingElement.style.visibility = 'hidden';
                        App.information.style.visibility = 'visible';
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    App.rootElement = document.getElementById('root');
    App.loadingElement = document.getElementById('loading-overlay');
    App.information = document.getElementById('informationBlock');
    return App;
}());
exports.default = App;


/***/ }),

/***/ "./src/javascript/battle/Battle.ts":
/*!*****************************************!*\
  !*** ./src/javascript/battle/Battle.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fighterView_1 = __webpack_require__(/*! ../fighterView */ "./src/javascript/fighterView.ts");
var Text_modal_1 = __webpack_require__(/*! ../helpers/modal/Text_modal */ "./src/javascript/helpers/modal/Text_modal.ts");
var Indicator_1 = __webpack_require__(/*! ./Indicator */ "./src/javascript/battle/Indicator.ts");
var MyRandom_1 = __webpack_require__(/*! ../services/MyRandom */ "./src/javascript/services/MyRandom.ts");
var Battle = /** @class */ (function () {
    function Battle(you, enemy) {
        this.count = 0;
        this.rootElem = document.getElementById('root');
        this.rootElem.style.display = 'none';
        this.enemy = enemy;
        this.you = you;
        this.init();
        Text_modal_1.Text_modal.showInformation("There is information about fight", "You need to choose which enemy's part of the body to attack, after that your enemy is to decide which part to protect. And then vice versa - he attacks, you defend. Performance of both fighters is displayed in the console at the bottom of the window.");
        this.log('The fight start!');
    }
    Battle.prototype.init = function () {
        var _this = this;
        this.generatorAttack = Battle.generator(this.you, this.enemy);
        this.generatorDefense = Battle.generator(this.enemy, this.you);
        this.arrows = document.createElement('div');
        this.arrows.setAttribute('id', 'chooseAttack');
        this.arrows.innerHTML = "<span id='up'></span>\n        <span id='middle'></span>\n        <span id='down'></span>";
        this.shields = document.createElement('div');
        this.shields.setAttribute('id', 'chooseDefense');
        this.shields.innerHTML = "<span id='upDef'></span>\n        <span id='middleDef'></span>\n        <span id='downDef'></span>";
        this.root = document.createElement('div');
        this.root.setAttribute('id', 'rootElem');
        var header = document.createElement('div');
        header.setAttribute('class', 'header');
        this.firstIndicator = new Indicator_1.default(this.you);
        header.append(this.firstIndicator.elem);
        var span = document.createElement('span');
        span.setAttribute('class', 'headerSpan');
        span.innerHTML = 'VS';
        header.append(span);
        this.secondIndicator = new Indicator_1.default(this.enemy);
        header.append(this.secondIndicator.elem);
        this.root.append(header);
        this.arrows.style.display = 'flex';
        var fighters = document.createElement('div');
        fighters.setAttribute('class', 'fighters');
        fighters.append(new fighterView_1.default(this.you).getElement());
        fighters.append(this.arrows);
        fighters.append(this.shields);
        fighters.append(new fighterView_1.default(this.enemy).getElement());
        this.root.append(fighters);
        this.text = document.createElement('textarea');
        this.text.setAttribute('id', 'textarea');
        this.text.setAttribute('disabled', 'disabled');
        this.root.append(this.text);
        document.body.append(this.root);
        document.getElementById('up').addEventListener('click', function () {
            _this.hit(1);
        });
        document.getElementById('middle').addEventListener('click', function () {
            _this.hit(2);
        });
        document.getElementById('down').addEventListener('click', function () {
            _this.hit(3);
        });
        document.getElementById('upDef').addEventListener('click', function () {
            _this.hit(1);
        });
        document.getElementById('middleDef').addEventListener('click', function () {
            _this.hit(2);
        });
        document.getElementById('downDef').addEventListener('click', function () {
            _this.hit(3);
        });
    };
    Battle.prototype.log = function () {
        var _this = this;
        var text = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            text[_i] = arguments[_i];
        }
        text.forEach(function (elem) {
            _this.text.value += elem + " \n";
        });
        this.text.scrollTop = this.text.scrollHeight;
    };
    Battle.prototype.hit = function (where) {
        var arr = ['head', 'armor', 'legs'];
        var attack;
        if (this.count % 2 == 0)
            attack = this.generatorAttack.next().value;
        else
            attack = this.generatorDefense.next().value;
        var damage = attack.attack.toFixed(1);
        if (where == attack.where) {
            damage = attack.attack.toFixed(1) - attack.defense.toFixed(1);
        }
        var res;
        if (this.count % 2 == 0)
            res = this.secondIndicator.hit((+damage).toFixed(1));
        else
            res = this.firstIndicator.hit((+damage).toFixed(1));
        if (!res.end) {
            if (this.count % 2 == 0) {
                this.log("-- You attack " + arr[where - 1] + " with damage " + attack.attack.toFixed(1) + ". Enemy defense " + arr[attack.where - 1] + " with power " + attack.defense.toFixed(1) + ". Total damage " + res.damage);
                this.arrows.style.display = 'none';
                this.shields.style.display = 'flex';
            }
            else {
                this.log("-- Enemy attack " + arr[attack.where - 1] + " with damage " + attack.attack.toFixed(1) + ". Your defense " + arr[where - 1] + " with power " + attack.defense.toFixed(1) + ". Total damage " + res.damage);
                this.shields.style.display = 'none';
                this.arrows.style.display = 'flex';
            }
        }
        else {
            var callback = function () {
                document.getElementById('rootElem').remove();
                document.getElementById('root').style.display = 'flex';
            };
            if (this.count % 2 == 0) {
                Text_modal_1.Text_modal.showInformation('Yeah', "\u0421ongratulations on the victory, keep up the good work", callback);
            }
            else
                Text_modal_1.Text_modal.showInformation('Oops', "You lost, but do not worry. Next time everything will turn out", callback);
        }
        this.count++;
    };
    Battle.generator = function (fighter1, fighter2) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (false) {}
                    return [4 /*yield*/, {
                            attack: fighter1.getHitPower(),
                            defense: fighter2.getBlockPower(),
                            where: MyRandom_1.default.randomIntNumber({
                                min: 1,
                                max: 3
                            })
                        }];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    };
    return Battle;
}());
exports.default = Battle;


/***/ }),

/***/ "./src/javascript/battle/Indicator.ts":
/*!********************************************!*\
  !*** ./src/javascript/battle/Indicator.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Indicator = /** @class */ (function () {
    function Indicator(fighter) {
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
    Indicator.prototype.hit = function (point) {
        point = +point;
        if (point < 0)
            return {
                end: false,
                damage: 0
            };
        this._health = (this._health.toFixed(1) - point);
        if (this._health <= 0) {
            this.span.innerHTML = '0';
            this.indicator.style.width = '0%';
            return {
                end: true,
                damage: point.toFixed(1)
            };
        }
        else {
            this.span.innerHTML = this._health.toFixed(1);
            var width = (100 * (this._health).toFixed(1) / this.fighter.health).toFixed(1);
            this.indicator.style.width = width + "%";
            return {
                end: false,
                damage: point.toFixed(1)
            };
        }
    };
    return Indicator;
}());
exports.default = Indicator;


/***/ }),

/***/ "./src/javascript/battle/Preparation.ts":
/*!**********************************************!*\
  !*** ./src/javascript/battle/Preparation.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Battle_1 = __webpack_require__(/*! ./Battle */ "./src/javascript/battle/Battle.ts");
var Preparation = /** @class */ (function () {
    function Preparation() {
    }
    Object.defineProperty(Preparation.prototype, "your", {
        get: function () {
            return this._your;
        },
        set: function (fighter) {
            document.getElementById('firstChoose').innerHTML = "Your: " + fighter.name;
            this._your = fighter;
            if (this._your && this._enemy && !this.btn) {
                this.printBTN();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Preparation.prototype, "enemy", {
        get: function () {
            return this._enemy;
        },
        set: function (fighter) {
            document.getElementById('secondChoose').innerHTML = "Enemy: " + fighter.name;
            this._enemy = fighter;
            if (this._your && this._enemy && !this.btn) {
                this.printBTN();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Preparation.prototype.printBTN = function () {
        var _this = this;
        var elem = document.getElementById('choosed');
        elem.innerHTML = '';
        this.btn = document.createElement('button');
        this.btn.innerHTML = 'Begin battle';
        this.btn.addEventListener('click', function () {
            new Battle_1.default(_this._your, _this._enemy);
        });
        elem.append(this.btn);
    };
    return Preparation;
}());
exports.default = Preparation;


/***/ }),

/***/ "./src/javascript/fighterView.ts":
/*!***************************************!*\
  !*** ./src/javascript/fighterView.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(/*! ./view */ "./src/javascript/view.ts");
var FighterView = /** @class */ (function (_super) {
    __extends(FighterView, _super);
    function FighterView(fighter, handleClick) {
        var _this = _super.call(this) || this;
        _this.createFighter(fighter, handleClick);
        return _this;
    }
    FighterView.prototype.getElement = function () {
        return _super.prototype.getElement.call(this);
    };
    FighterView.prototype.createFighter = function (fighter, handleClick) {
        var name = fighter.name, source = fighter.source;
        var nameElement = this.createName(name);
        var imageElement = this.createImage(source);
        _super.prototype.setElement.call(this, _super.prototype.createElement.call(this, { tagName: 'div', className: 'fighter' }));
        _super.prototype.getElement.call(this).append(imageElement, nameElement);
        if (handleClick)
            _super.prototype.getElement.call(this).addEventListener('click', function (event) { return handleClick(event, fighter); }, false);
    };
    FighterView.prototype.createName = function (name) {
        var nameElement = _super.prototype.createElement.call(this, { tagName: 'span', className: 'name' });
        nameElement.innerText = name;
        return nameElement;
    };
    FighterView.prototype.createImage = function (source) {
        var attributes = { src: source };
        return _super.prototype.createElement.call(this, {
            tagName: 'img',
            className: 'fighter-image',
            attributes: attributes
        });
    };
    return FighterView;
}(view_1.default));
exports.default = FighterView;


/***/ }),

/***/ "./src/javascript/fightersView.ts":
/*!****************************************!*\
  !*** ./src/javascript/fightersView.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(/*! ./view */ "./src/javascript/view.ts");
var fighterView_1 = __webpack_require__(/*! ./fighterView */ "./src/javascript/fighterView.ts");
var fightersService_1 = __webpack_require__(/*! ./services/fightersService */ "./src/javascript/services/fightersService.ts");
var Fighter_modal_1 = __webpack_require__(/*! ./helpers/modal/Fighter_modal */ "./src/javascript/helpers/modal/Fighter_modal.ts");
var Preparation_1 = __webpack_require__(/*! ./battle/Preparation */ "./src/javascript/battle/Preparation.ts");
var FightersView = /** @class */ (function (_super) {
    __extends(FightersView, _super);
    function FightersView(fighters) {
        var _this = _super.call(this) || this;
        _this.fightersDetailsMap = new Map();
        _this.handleClick = _this.handleFighterClick.bind(_this);
        _this.createFighters(fighters);
        _this.preparation = new Preparation_1.default();
        return _this;
    }
    FightersView.prototype.createFighters = function (fighters) {
        var _a;
        var _this = this;
        var fighterElements = fighters.map(function (fighter) {
            var fighterView = new fighterView_1.default(fighter, _this.handleClick);
            return fighterView.getElement();
        });
        this.element = this.createElement({
            tagName: 'div',
            className: 'fighters'
        });
        (_a = this.element).append.apply(_a, fighterElements);
    };
    FightersView.prototype.handleFighterClick = function (event, fighter) {
        var _this = this;
        var modal;
        if (this.fightersDetailsMap.has(fighter._id))
            modal = new Fighter_modal_1.default(this.fightersDetailsMap.get(fighter._id), this.preparation);
        else
            fightersService_1.fightersService.getFighterDetails(fighter._id)
                .then(function (data) {
                fighter.addDetails(data);
                _this.fightersDetailsMap.set(fighter._id, fighter);
                modal = new Fighter_modal_1.default(fighter, _this.preparation);
            }).catch(function (err) {
                console.log(err);
            });
    };
    return FightersView;
}(view_1.default));
exports.FightersView = FightersView;


/***/ }),

/***/ "./src/javascript/helpers/apiHelper.ts":
/*!*********************************************!*\
  !*** ./src/javascript/helpers/apiHelper.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var API_URL = 'https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/';
function callApi(endpoind, method) {
    var url = API_URL + endpoind;
    var options = {
        method: method
    };
    return fetch(url, options)
        .then(function (response) {
        return response.ok ? response.json() : Promise.reject(Error('Failed to load'));
    })
        .catch(function (error) {
        throw error;
    });
}
exports.callApi = callApi;


/***/ }),

/***/ "./src/javascript/helpers/modal/Fighter_modal.ts":
/*!*******************************************************!*\
  !*** ./src/javascript/helpers/modal/Fighter_modal.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = __webpack_require__(/*! ./Modal */ "./src/javascript/helpers/modal/Modal.ts");
var fighterView_1 = __webpack_require__(/*! ../../fighterView */ "./src/javascript/fighterView.ts");
var Fighter_modal = /** @class */ (function (_super) {
    __extends(Fighter_modal, _super);
    function Fighter_modal(fighter, preparation) {
        var _this = _super.call(this) || this;
        _this.fighter = Object.assign({}, fighter);
        _this.preparation = preparation;
        _this.modal.style.background = "url('./resources/choose-character.img') no-repeat";
        _this.modal.style.backgroundSize = "800px 500px";
        var h = _this.createElement({
            tagName: 'h2'
        });
        h.innerHTML = " ";
        _this.modal.appendChild(h);
        var left = _this.createElement({
            tagName: 'div',
            className: 'left'
        });
        left.append(new fighterView_1.default(fighter).getElement());
        var right = _this.createElement({
            tagName: 'div',
            className: 'right'
        });
        right.append(_this.createIndicator(_this.fighter.attack, 'attack'), _this.createIndicator(_this.fighter.defense, 'defense'), _this.createIndicator(_this.fighter.health, 'health'));
        _this.modal.append(left, right);
        _this.modal.append(_this.createButton());
        return _this;
    }
    Fighter_modal.prototype.createIndicator = function (point, name) {
        var _this = this;
        var elem = this.createElement({
            tagName: 'div',
            className: 'indicator'
        });
        var block = this.createElement({
            tagName: 'div',
            className: 'inline'
        });
        block.innerHTML = name;
        var counter = this.createElement({
            tagName: 'span',
            className: 'counter'
        });
        counter.innerHTML = point;
        var minus = this.createElement({
            tagName: 'span',
            className: 'minus'
        });
        var plus = this.createElement({
            tagName: 'span',
            className: 'plus'
        });
        var countBlock = this.createElement({
            tagName: 'div',
            className: 'countBlock'
        });
        countBlock.append(minus, counter, plus);
        plus.addEventListener('click', function () {
            if (point == 1)
                minus.style.opacity = '1';
            _this.fighter[name]++;
            point++;
            counter.innerHTML = point;
        });
        minus.addEventListener('click', function () {
            switch (point) {
                case 1:
                    break;
                case 2:
                    minus.style.opacity = '0.5';
                    _this.fighter[name]--;
                    point--;
                    break;
                default:
                    _this.fighter[name]--;
                    point--;
            }
            counter.innerHTML = point;
        });
        elem.append(block, countBlock);
        return elem;
    };
    Fighter_modal.prototype.createButton = function () {
        var _this = this;
        var block = this.createElement({
            tagName: 'div',
            className: 'btnBlock'
        });
        var myBTN = this.createElement({
            tagName: 'button',
            className: 'btn'
        });
        myBTN.className += ' btn-primary';
        myBTN.innerHTML = 'my fighter';
        myBTN.addEventListener('click', function () {
            _this.preparation.your = _this.fighter;
            Modal_1.default.clearModals();
        });
        var enemyBTN = this.createElement({
            tagName: 'button',
            className: 'btn',
        });
        enemyBTN.className += ' btn-primary';
        enemyBTN.innerHTML = 'enemy fighter';
        enemyBTN.addEventListener('click', function () {
            _this.preparation.enemy = _this.fighter;
            Modal_1.default.clearModals();
        });
        block.append(myBTN, enemyBTN);
        return block;
    };
    return Fighter_modal;
}(Modal_1.default));
exports.default = Fighter_modal;


/***/ }),

/***/ "./src/javascript/helpers/modal/Modal.ts":
/*!***********************************************!*\
  !*** ./src/javascript/helpers/modal/Modal.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = __webpack_require__(/*! ../../view */ "./src/javascript/view.ts");
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super.call(this) || this;
        Modal.clearModals();
        _this.modal = _this.createElement({
            tagName: 'div',
            className: 'modal'
        });
        _this.close = _this.createElement({
            tagName: 'div',
            className: 'close'
        });
        _this.modal.append(_this.close);
        _this.close.addEventListener('click', function () {
            Modal.clearModals();
        });
        document.body.appendChild(_this.modal);
        return _this;
    }
    Modal.clearModals = function (callback) {
        var modals = document.getElementsByClassName('modal');
        if (modals.length > 0) {
            for (var i = 0; i < modals.length; i++)
                modals[i].remove();
        }
        if (callback)
            callback();
    };
    return Modal;
}(view_1.default));
exports.default = Modal;


/***/ }),

/***/ "./src/javascript/helpers/modal/Text_modal.ts":
/*!****************************************************!*\
  !*** ./src/javascript/helpers/modal/Text_modal.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = __webpack_require__(/*! ./Modal */ "./src/javascript/helpers/modal/Modal.ts");
var Text_modal = /** @class */ (function (_super) {
    __extends(Text_modal, _super);
    function Text_modal(header, text, callback) {
        var _this = _super.call(this) || this;
        var h = _this.createElement({
            tagName: 'h2',
            className: 'text_modal_h2'
        });
        h.innerHTML = header;
        var div = _this.createElement({
            tagName: 'div',
            className: 'text_modal_text'
        });
        div.innerHTML = text;
        var divForBtn = _this.createElement({
            tagName: 'div',
            className: 'divForBtn'
        });
        var btn = _this.createElement({
            tagName: 'button',
            className: 'text_modal_button'
        });
        divForBtn.append(btn);
        btn.innerHTML = 'OK';
        btn.addEventListener('click', function () {
            Modal_1.default.clearModals(callback);
        });
        _this.modal.append(h, div, divForBtn);
        if (callback)
            _this.close.addEventListener('click', callback);
        return _this;
    }
    Text_modal.showInformation = function (header, text, callback) {
        document.body.append(new Text_modal(header, text, callback).modal);
    };
    return Text_modal;
}(Modal_1.default));
exports.Text_modal = Text_modal;


/***/ }),

/***/ "./src/javascript/services/MyRandom.ts":
/*!*********************************************!*\
  !*** ./src/javascript/services/MyRandom.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MyRandom = /** @class */ (function () {
    function MyRandom() {
    }
    MyRandom.randomFloatNumber = function (_a) {
        var min = _a.min, max = _a.max;
        return (Math.random() * (max - min) + min).toFixed(1);
    };
    MyRandom.randomIntNumber = function (_a) {
        var min = _a.min, max = _a.max;
        return ((Math.random() * (max - min) + min).toFixed(0));
    };
    return MyRandom;
}());
exports.default = MyRandom;


/***/ }),

/***/ "./src/javascript/services/fightersService.ts":
/*!****************************************************!*\
  !*** ./src/javascript/services/fightersService.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var apiHelper_1 = __webpack_require__(/*! ../helpers/apiHelper */ "./src/javascript/helpers/apiHelper.ts");
var FightersService = /** @class */ (function () {
    function FightersService() {
    }
    FightersService.prototype.getFighters = function () {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, apiResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        endpoint = 'fighters.json';
                        return [4 /*yield*/, apiHelper_1.callApi(endpoint, 'GET')];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, JSON.parse(atob(apiResult.content))];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FightersService.prototype.getFighterDetails = function (_id) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, apiResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        endpoint = "details/fighter/" + _id + ".json";
                        return [4 /*yield*/, apiHelper_1.callApi(endpoint, 'GET')];
                    case 1:
                        apiResult = _a.sent();
                        return [2 /*return*/, JSON.parse(atob(apiResult.content))];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return FightersService;
}());
exports.fightersService = new FightersService();


/***/ }),

/***/ "./src/javascript/view.ts":
/*!********************************!*\
  !*** ./src/javascript/view.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var View = /** @class */ (function () {
    function View() {
    }
    View.prototype.createElement = function (_a) {
        var tagName = _a.tagName, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.attributes, attributes = _c === void 0 ? {} : _c;
        var element = document.createElement(tagName);
        if (className)
            element.classList.add(className);
        Object.keys(attributes).forEach(function (key) { return element.setAttribute(key, attributes[key]); });
        return element;
    };
    View.prototype.getElement = function () {
        return this.element;
    };
    View.prototype.setElement = function (elem) {
        this.element = elem;
    };
    return View;
}());
exports.default = View;


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