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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
/* 
É possível importar/exportar mudando a variável com a palavra 'as'
importar 'como' ou exportar 'como'
É possível importar todo o módulo com "import * as 'nomeNovo' from './nomeArquivo'. Apenas o que estiver selecionado para exportação."
exportar uma variavel default irá ser exportado sempre o seu conteúdo independentemente do nome utilizado na importação.
Só pode exportar um padrão por arquivo; não precisa usar dentro das chaves {};
*/

console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__["nome"], _modulo1__WEBPACK_IMPORTED_MODULE_0__["s1"]);
console.log(_modulo1__WEBPACK_IMPORTED_MODULE_0__["idade"]);
console.log(Object(_modulo1__WEBPACK_IMPORTED_MODULE_0__["soma"])(3, 7));
var p1 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__["Produto"]('Boné', 'Azul', 'Grande');
console.log(p1);
var p2 = new _modulo1__WEBPACK_IMPORTED_MODULE_0__["Produto"](_modulo1__WEBPACK_IMPORTED_MODULE_0__["type"], _modulo1__WEBPACK_IMPORTED_MODULE_0__["color"], _modulo1__WEBPACK_IMPORTED_MODULE_0__["size"]);
console.log(p2);

/***/ }),

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/*! exports provided: nome, s1, idade, soma, type, color, size, Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nome", function() { return nome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s1", function() { return sobrenome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idade", function() { return idade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "soma", function() { return soma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nome = 'Olavo';
var sobrenome = 'Soares';
var idade = 35;

function soma(x, y) {
  return x + y;
}


var type = 'Camiseta';
var color = 'Azul';
var size = 'Médio';
var Produto = function Produto(tipo, cor, tamanho) {
  _classCallCheck(this, Produto);

  this.tipo = tipo;
  this.cor = cor;
  this.tamanho = tamanho;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map