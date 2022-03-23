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
/******/ 	return __webpack_require__(__webpack_require__.s = "c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/json.js!./lib/style.js!c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\src\\main\\js\\default\\pages\\index\\index.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!c:/Users/Palash/DevEcoStudioProjects/JSVerbalExpressionsHMOS/entry/src/main/js/default/pages/index/index.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "height": "100%"
  },
  ".title": {
    "fontSize": "40px",
    "color": "#000000",
    "opacity": 0.9,
    "display": "none"
  },
  "@MEDIA": [
    {
      "condition": "screen and (device-type: tablet) and (orientation: landscape)",
      ".title": {
        "fontSize": "100px"
      }
    },
    {
      "condition": "screen and (device-type: wearable)",
      ".title": {
        "fontSize": "28px",
        "color": "#FFFFFF"
      }
    },
    {
      "condition": "screen and (device-type: tv)",
      ".container": {
        "backgroundImage": "/common/images/Wallpaper.png",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "center"
      },
      ".title": {
        "fontSize": "100px",
        "color": "#FFFFFF"
      }
    },
    {
      "condition": "screen and (device-type: phone) and (orientation: landscape)",
      ".title": {
        "fontSize": "60px"
      }
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\src\\main\\js\\default\\pages\\index\\index.hml":
/*!****************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!c:/Users/Palash/DevEcoStudioProjects/JSVerbalExpressionsHMOS/entry/src/main/js/default/pages/index/index.hml ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:12",
        "type": "password",
        "name": "pwd",
        "placeholder": "Password"
      },
      "type": "input"
    }
  ]
}

/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\SDK-offline-2.2.0.3-winodws\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\SDK-offline-2.2.0.3-winodws\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\src\\main\\js\\default\\pages\\index\\index.js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=D:/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!c:/Users/Palash/DevEcoStudioProjects/JSVerbalExpressionsHMOS/entry/src/main/js/default/pages/index/index.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _verbalExpressionsHmos = _interopRequireDefault(__webpack_require__(/*! verbal-expressions-hmos */ "c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\node_modules\\verbal-expressions-hmos\\index.js"));

var _default = {
  data: {
    title: ""
  },
  onInit: function onInit() {
    var _this = this;

    var regex;
    var titles = 'HaroldAndKumarGoToWhiteCastle';
    regex = (0, _verbalExpressionsHmos["default"])().positiveLookBehind((0, _verbalExpressionsHmos["default"])().anyOf('a-z')).positiveLookAhead((0, _verbalExpressionsHmos["default"])().anyOf('A-Z'));
    console.log(titles.replace(regex.toRegExp(), ' '));
    console.log(regex.toRegExp());
    var url = 'https://www.google.com?user=Palash&uuid=3d77df42s8&auth=true&completion=100';
    regex = (0, _verbalExpressionsHmos["default"])().anythingBut('?&').positiveLookAhead('=').anythingBut('&');
    console.log(url.match(regex.toRegExp()).reduce(function (prev, cur) {
      (0, _newArrowCheck2["default"])(this, _this);
      var split = cur.split('=');
      prev += split[0] + ': ' + split[1] + '\n';
      return prev;
    }.bind(this), ''));
    console.log(regex.toRegExp());
    var jsx = "<html>\n<body style=\"height: 200px\">\n...\n</body>\n</html>\n        ";
    regex = (0, _verbalExpressionsHmos["default"])().positiveLookBehind((0, _verbalExpressionsHmos["default"])().add('<body').anything().add('>'));
    this.title += '\n' + jsx.replace(regex.toRegExp(), "\n<h1>\nData Pulled from API: ".concat(titles, "\n</h1>")) + '\n' + regex.toRegExp();
  },
  onSubmit: function onSubmit(result) {
    console.log(result.value.pwd);
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/newArrowCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/newArrowCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

module.exports = _newArrowCheck;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\node_modules\\verbal-expressions-hmos\\index.js":
/*!************************************************************************************************************************!*\
  !*** c:/Users/Palash/DevEcoStudioProjects/JSVerbalExpressionsHMOS/entry/node_modules/verbal-expressions-hmos/index.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VerEx;

var _newArrowCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/newArrowCheck */ "./node_modules/@babel/runtime/helpers/newArrowCheck.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var VerbalExpression = /*#__PURE__*/function (_RegExp) {
  (0, _inherits2["default"])(VerbalExpression, _RegExp);

  var _super = _createSuper(VerbalExpression);

  /**
   * Creates an instance of VerbalExpression.
   * @constructor
   * @alias VerEx
   * @memberof VerbalExpression
   */
  function VerbalExpression() {
    var _this;

    (0, _classCallCheck2["default"])(this, VerbalExpression);
    // Call the `RegExp` constructor so that `this` can be used
    _this = _super.call(this, '', 'gm'); // Variables to hold the expression construction in order

    _this._prefixes = '';
    _this._source = '';
    _this._suffixes = '';
    _this._modifiers = 'gm'; // 'global, multiline' matching by default

    return _this;
  } // Utility //

  /**
   * Escape meta-characters in the parameter and make it safe for adding to the expression
   * @static
   * @param {(string|RegExp|number)} value object to sanitize
   * @returns {string} sanitized value
   * @memberof VerbalExpression
   */


  (0, _createClass2["default"])(VerbalExpression, [{
    key: "add",

    /**
     * Add stuff to the expression and compile the new expression so it's ready to be used.
     * @param {(string|number)} [value=''] stuff to add
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */
    value: function add() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this._source += value;
      var pattern = this._prefixes + this._source + this._suffixes;
      this.compile(pattern, this._modifiers);
      return this;
    } // Rules //

    /**
     * Control start-of-line matching
     * @param {boolean} [enable=true] whether to enable this behaviour
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "startOfLine",
    value: function startOfLine() {
      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._prefixes = enable ? '^' : '';
      return this.add();
    }
    /**
     * Control end-of-line matching
     * @param {boolean} [enable=true] whether to enable this behaviour
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "endOfLine",
    value: function endOfLine() {
      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this._suffixes = enable ? '$' : '';
      return this.add();
    }
    /**
     * Look for the value passed
     * @param {(string|RegExp|number)} value value to find
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "then",
    value: function then(value) {
      value = VerbalExpression.sanitize(value);
      return this.add("(?:".concat(value, ")"));
    }
    /**
     * Alias for then() to allow for readable syntax when then() is the first method in the chain.
     * @param {(string|RegExp|number)} value value to find
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "find",
    value: function find(value) {
      return this.then(value);
    }
    /**
     * Add optional values
     * @param {(string|RegExp|number)} value value to find
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "maybe",
    value: function maybe(value) {
      value = VerbalExpression.sanitize(value);
      return this.add("(?:".concat(value, ")?"));
    }
    /**
     * Add alternative expressions
     * @param {(string|RegExp|number)} value value to find
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "or",
    value: function or(value) {
      this._prefixes += '(?:';
      this._suffixes = ")".concat(this._suffixes);
      this.add(')|(?:');

      if (value) {
        this.then(value);
      }

      return this;
    }
    /**
     * Any character any number of times
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "anything",
    value: function anything() {
      return this.add('(?:.*)');
    }
    /**
     * Anything but these characters
     * @param {(string|number|string[]|number[])} value characters to not match
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "anythingBut",
    value: function anythingBut(value) {
      if (Array.isArray(value)) {
        value = value.join('');
      }

      value = VerbalExpression.sanitize(value);
      return this.add("(?:[^".concat(value, "]*)"));
    }
    /**
     * Any character(s) at least once
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "something",
    value: function something() {
      return this.add('(?:.+)');
    }
    /**
     * Any character at least one time except for these characters
     * @param {(string|number|string[]|number[])} value characters to not match
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "somethingBut",
    value: function somethingBut(value) {
      if (Array.isArray(value)) {
        value = value.join('');
      }

      value = VerbalExpression.sanitize(value);
      return this.add("(?:[^".concat(value, "]+)"));
    }
    /**
     * Match any of the given characters
     * @param {(string|number|string[]|number[])} value characters to match
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "anyOf",
    value: function anyOf(value) {
      if (Array.isArray(value)) {
        value = value.join('');
      }

      value = VerbalExpression.sanitize(value);
      return this.add("[".concat(value, "]"));
    }
    /**
     * Shorthand for anyOf(value)
     * @param {string|number} value value to find
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "any",
    value: function any(value) {
      return this.anyOf(value);
    }
    /**
     * Ensure that the parameter does not follow
     * @param {string|number} value
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "not",
    value: function not(value) {
      value = VerbalExpression.sanitize(value);
      this.add("(?!".concat(value, ")"));
      return this;
    }
    /**
     * Matching any character within a range of characters
     * Usage: .range( from, to [, from, to ... ] )
     * @param {...string} ranges characters denoting beginning and ending of ranges
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "range",
    value: function range() {
      var value = '';

      for (var i = 1; i < arguments.length; i += 2) {
        var from = VerbalExpression.sanitize(i - 1 < 0 || arguments.length <= i - 1 ? undefined : arguments[i - 1]);
        var to = VerbalExpression.sanitize(i < 0 || arguments.length <= i ? undefined : arguments[i]);
        value += "".concat(from, "-").concat(to);
      }

      return this.add("[".concat(value, "]"));
    } // Special characters //

    /**
     * Match a Line break
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "lineBreak",
    value: function lineBreak() {
      return this.add('(?:\\r\\n|\\r|\\n)'); // Unix(LF) + Windows(CRLF)
    }
    /**
     * A shorthand for lineBreak() for html-minded users
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "br",
    value: function br() {
      return this.lineBreak();
    }
    /**
     * Match a tab character
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "tab",
    value: function tab() {
      return this.add('\\t');
    }
    /**
     * Match any alphanumeric
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "word",
    value: function word() {
      return this.add('\\w+');
    }
    /**
     * Match a single digit
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "digit",
    value: function digit() {
      return this.add('\\d');
    }
    /**
     * Match a single whitespace
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "whitespace",
    value: function whitespace() {
      return this.add('\\s');
    } // Modifiers //

    /**
     * Add a regex modifier/flag
     * @param {string} modifier modifier to add
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "addModifier",
    value: function addModifier(modifier) {
      if (!this._modifiers.includes(modifier)) {
        this._modifiers += modifier;
      }

      return this.add();
    }
    /**
     * Remove modifier
     * @param {string} modifier modifier to remove
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "removeModifier",
    value: function removeModifier(modifier) {
      this._modifiers = this._modifiers.replace(modifier, '');
      return this.add();
    }
    /**
     * Control case-insensitive matching
     * @param {boolean} [enable=true] whether to enable this behaviour
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "withAnyCase",
    value: function withAnyCase() {
      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return enable ? this.addModifier('i') : this.removeModifier('i');
    }
    /**
     * Default behaviour is with "g" modifier, so we can turn this another way around than other modifiers
     * @param {boolean} [enable=true] whether to enable this behaviour
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "stopAtFirst",
    value: function stopAtFirst() {
      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return enable ? this.removeModifier('g') : this.addModifier('g');
    }
    /**
     * Control the multiline modifier
     * @param {boolean} [enable=true] whether to enable this behaviour
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "searchOneLine",
    value: function searchOneLine() {
      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return enable ? this.removeModifier('m') : this.addModifier('m');
    } // Loops //

    /**
     * Repeat the previous item exactly n times or between n and m times
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "repeatPrevious",
    value: function repeatPrevious() {
      var _this2 = this;

      var isInteger = /\d+/;

      for (var _len = arguments.length, quantity = new Array(_len), _key = 0; _key < _len; _key++) {
        quantity[_key] = arguments[_key];
      }

      var values = quantity.filter(function (argument) {
        (0, _newArrowCheck2["default"])(this, _this2);
        return isInteger.test(argument);
      }.bind(this));

      if (values.length === 0 || values.length > 2) {
        return this;
      }

      this.add("{".concat(values.join(','), "}"));
      return this;
    }
    /**
     * Repeat the previous at least once
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "oneOrMore",
    value: function oneOrMore() {
      return this.add('+');
    }
    /**
     * Match the value zero or more times
     * @param {string} value value to find
     * @param {integer} [lower] minimum number of times the value should be repeated
     * @param {integer} [upper] maximum number of times the value should be repeated
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "multiple",
    value: function multiple(value, lower, upper) {
      if (value !== undefined) {
        value = VerbalExpression.sanitize(value);
        this.add("(?:".concat(value, ")"));
      }

      if (lower === undefined && upper === undefined) {
        this.add('*'); // Any number of times
      } else if (lower !== undefined && upper === undefined) {
        this.add("{".concat(lower, ",}"));
      } else if (lower !== undefined && upper !== undefined) {
        this.add("{".concat(lower, ",").concat(upper, "}"));
      }

      return this;
    } // Capture groups //

    /**
     * Starts a capturing group
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "beginCapture",
    value: function beginCapture() {
      // Add the end of the capture group to the suffixes temporarily so that compilation continues to work
      this._suffixes += ')';
      return this.add('(');
    }
    /**
     * Ends a capturing group
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "endCapture",
    value: function endCapture() {
      // Remove the last parenthesis from the _suffixes and add it to the regex
      this._suffixes = this._suffixes.slice(0, -1);
      return this.add(')');
    } // Miscellaneous //

    /**
     * Shorthand function for the string.replace function to allow for a more logical flow
     * @param {string} source string to search for
     * @param {string} value value to replace with
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "replace",
    value: function replace(source, value) {
      source = source.toString();
      return source.replace(this, value);
    }
    /**
     * Convert to RegExp object
     * @returns {RegExp} equivalent RegExp instance
     * @memberof VerbalExpression
     */

  }, {
    key: "toRegExp",
    value: function toRegExp() {
      var components = this.toString().match(/\/(.*)\/([gimuy]+)?/);
      var pattern = components[1];
      var flags = components[2];
      return new RegExp(pattern, flags);
    }
    /**
     * Performs a zero-width positive lookahead assertion match
     * @param {(string|RegExp|number)} value value or expression to look for
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "positiveLookAhead",
    value: function positiveLookAhead(value) {
      value = VerbalExpression.sanitize(value);
      return this.add("(?=".concat(value, ")"));
    }
    /**
     * Performs a zero-width negative lookahead assertion match
     * @param {(string|RegExp|number)} value value or expression to look for
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "negativeLookAhead",
    value: function negativeLookAhead(value) {
      value = VerbalExpression.sanitize(value);
      return this.add("(?!".concat(value, ")"));
    }
    /**
     * Performs a zero-width positive lookbehind assertion match
     * @param {(string|RegExp|number)} value value or expression to look for
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "positiveLookBehind",
    value: function positiveLookBehind(value) {
      value = VerbalExpression.sanitize(value);
      return this.add("(?<=".concat(value, ")"));
    }
    /**
     * Performs a zero-width negative lookbehind assertion match
     * @param {(string|RegExp|number)} value value or expression to look for
     * @returns {VerbalExpression} recompiled instance of VerbalExpression
     * @memberof VerbalExpression
     */

  }, {
    key: "negativeLookBehind",
    value: function negativeLookBehind(value) {
      value = VerbalExpression.sanitize(value);
      return this.add("(?<!".concat(value, ")"));
    }
  }], [{
    key: "sanitize",
    value: function sanitize(value) {
      if (value instanceof RegExp) {
        return value.source;
      }

      if (typeof value === 'number') {
        return value;
      }

      if (typeof value !== 'string') {
        return '';
      } // Regular expression to match meta characters
      // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/regexp


      var toEscape = /([\].|*?+(){}^$\\:=[])/g; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch

      var lastMatch = '$&'; // Escape meta characters

      return value.replace(toEscape, "\\".concat(lastMatch));
    }
  }]);
  return VerbalExpression;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(RegExp));

function VerEx() {
  // eslint-disable-line no-unused-vars
  var instance = new VerbalExpression();
  instance.sanitize = VerbalExpression.sanitize;
  return instance;
}

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}


/***/ }),

/***/ "c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\src\\main\\js\\default\\pages\\index\\index.hml?entry":
/*!**************************************************************************************************************************!*\
  !*** c:/Users/Palash/DevEcoStudioProjects/JSVerbalExpressionsHMOS/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !./lib/json.js!./lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\src\\main\\js\\default\\pages\\index\\index.hml")
var $app_style$ = __webpack_require__(/*! !./lib/json.js!./lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\src\\main\\js\\default\\pages\\index\\index.css")
var $app_script$ = __webpack_require__(/*! !./lib/script.js!./node_modules/babel-loader?presets[]=D:/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=D:/SDK-offline-2.2.0.3-winodws/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\SDK-offline-2.2.0.3-winodws\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\SDK-offline-2.2.0.3-winodws\\js\\2.2.0.3\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!c:\\Users\\Palash\\DevEcoStudioProjects\\JSVerbalExpressionsHMOS\\entry\\src\\main\\js\\default\\pages\\index\\index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ })

/******/ });
//# sourceMappingURL=index.js.map