/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: white;\r\n  background: #212121;\r\n}\r\n\r\n:root {\r\n  --darkGray: #191a1d;\r\n  --gray: #2a2e32;\r\n  --lightGray: #34393e;\r\n  --lightShadow: #3d4449;\r\n\r\n  --darkOrange: #b9230e;\r\n  --lightOrange: #e9550d;\r\n\r\n  --lightNumber: #cccccd;\r\n  --lightText: #cfcfd1;\r\n  --darkText: #4a4d52;\r\n}\r\n\r\n/* PAGES */\r\nsection {\r\n  height: 100vh;\r\n}\r\nsection:nth-child(1) {\r\n  background-color: red;\r\n}\r\n\r\nsection:nth-child(1) > span > img {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: cover;\r\n  filter: brightness(0.6);\r\n}\r\n\r\nsection:nth-child(2) {\r\n  display: flex;\r\n  background: linear-gradient(to bottom, #2a2e32, #34393e);\r\n  box-shadow: 20px 20px 40px black;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nsection:nth-child(3) {\r\n  background-color: green;\r\n}\r\nsection:nth-child(3) > span > img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  filter: blur(4px);\r\n  filter: brightness(0.6);\r\n}\r\n\r\n/* SCROLLBAR */\r\n/* width */\r\n::-webkit-scrollbar {\r\n  width: 16px;\r\n  box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 1);\r\n  -moz-box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 1);\r\n  box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 1);\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  border-radius: 8px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  height: 56px;\r\n  border-radius: 8px;\r\n  border: 4px solid transparent;\r\n  background-clip: content-box;\r\n  background-color: #888;\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: #555;\r\n}\r\n/* Border radius */\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n}\r\n\r\n/* CAROUSEL CSS */\r\n.carousel {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n}\r\n\r\nsection:nth-child(2) li > img {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.carouselTrackContainer {\r\n  background: lightgreen;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.carouselTrack {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: relative;\r\n  height: 100%;\r\n  transition: transform 250ms ease-in;\r\n}\r\n\r\n.carouselSlide {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n/*CAROUSEL BUTTON*/\r\n.carouselButton {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  width: 45px;\r\n  height: 45px;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background: #2a2e33;\r\n  box-shadow: inset -8px -8px 29px var(--darkGray),\r\n    inset 10px 10px 20px var(--lightGray), -8px -8px 15px var(--lightShadow),\r\n    8px 8px 15px var(--darkGray);\r\n  color: rgba(136, 131, 131, 0.829);\r\n}\r\n\r\n.carouselButton:active {\r\n  box-shadow: inset 8px 8px 15px var(--darkGray),\r\n    inset -8px -8px 15px var(--gray), 8px 8px 15px var(--lightShadow),\r\n    -8px -8px 15px var(--darkGray);\r\n}\r\n.carouselButton:hover {\r\n  color: rgba(240, 240, 240, 0.753);\r\n}\r\n\r\n.carouselButtonLeft {\r\n  left: 10px;\r\n}\r\n\r\n.carouselButtonRight {\r\n  right: 10px;\r\n}\r\n\r\n/* CAROUSEL SLIDER INDICATOR */\r\n.carouselNav {\r\n  display: flex;\r\n  position: relative;\r\n  justify-content: center;\r\n  padding: 10px 0;\r\n  top: -40px;\r\n}\r\n\r\n.carouselIndicator {\r\n  border: 0;\r\n  border-radius: 50%;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: #3a3842;\r\n  box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),\r\n    6px 6px 15px 1px rgba(48, 46, 54, 1),\r\n    inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),\r\n    inset -1px -2px 2px 0px rgba(104, 97, 133, 0.4),\r\n    -6px -6px 15px 1px rgba(77, 71, 100, 0.6);\r\n  margin: 0 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.carouselIndicator:active {\r\n  box-shadow: inset 8px 8px 15px var(--darkGray),\r\n    inset -8px -8px 15px var(--gray), 8px 8px 15px var(--lightShadow),\r\n    -8px -8px 15px var(--darkGray);\r\n}\r\n\r\n.carouselIndicator:hover {\r\n  background: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.carouselIndicatorCurrentSlide {\r\n  background: rgba(173, 173, 173, 0.7);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,eAAe;EACf,oBAAoB;EACpB,sBAAsB;;EAEtB,qBAAqB;EACrB,sBAAsB;;EAEtB,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA,UAAU;AACV;EACE,aAAa;AACf;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,wDAAwD;EACxD,gCAAgC;EAChC,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA,cAAc;AACd,UAAU;AACV;EACE,WAAW;EACX,mDAAmD;EACnD,wDAAwD;EACxD,mDAAmD;AACrD;AACA,UAAU;AACV;EACE,kBAAkB;AACpB;AACA,WAAW;AACX;EACE,YAAY;EACZ,kBAAkB;EAClB,6BAA6B;EAC7B,4BAA4B;EAC5B,sBAAsB;AACxB;AACA,oBAAoB;AACpB;EACE,sBAAsB;AACxB;AACA,kBAAkB;AAClB;EACE,mBAAmB;AACrB;;AAEA,iBAAiB;AACjB;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,SAAS;EACT,WAAW;AACb;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB;;gCAE8B;EAC9B,iCAAiC;AACnC;;AAEA;EACE;;kCAEgC;AAClC;AACA;EACE,iCAAiC;AACnC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA,8BAA8B;AAC9B;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB;;;;6CAI2C;EAC3C,cAAc;EACd,eAAe;AACjB;;AAEA;EACE;;kCAEgC;AAClC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["body {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: white;\r\n  background: #212121;\r\n}\r\n\r\n:root {\r\n  --darkGray: #191a1d;\r\n  --gray: #2a2e32;\r\n  --lightGray: #34393e;\r\n  --lightShadow: #3d4449;\r\n\r\n  --darkOrange: #b9230e;\r\n  --lightOrange: #e9550d;\r\n\r\n  --lightNumber: #cccccd;\r\n  --lightText: #cfcfd1;\r\n  --darkText: #4a4d52;\r\n}\r\n\r\n/* PAGES */\r\nsection {\r\n  height: 100vh;\r\n}\r\nsection:nth-child(1) {\r\n  background-color: red;\r\n}\r\n\r\nsection:nth-child(1) > span > img {\r\n  height: 100%;\r\n  width: 100%;\r\n  background-size: cover;\r\n  filter: brightness(0.6);\r\n}\r\n\r\nsection:nth-child(2) {\r\n  display: flex;\r\n  background: linear-gradient(to bottom, #2a2e32, #34393e);\r\n  box-shadow: 20px 20px 40px black;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nsection:nth-child(3) {\r\n  background-color: green;\r\n}\r\nsection:nth-child(3) > span > img {\r\n  height: 100%;\r\n  width: 100%;\r\n  object-fit: cover;\r\n  filter: blur(4px);\r\n  filter: brightness(0.6);\r\n}\r\n\r\n/* SCROLLBAR */\r\n/* width */\r\n::-webkit-scrollbar {\r\n  width: 16px;\r\n  box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 1);\r\n  -moz-box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 1);\r\n  box-shadow: inset 0px 5px 10px 1px rgba(0, 0, 0, 1);\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n  border-radius: 8px;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n  height: 56px;\r\n  border-radius: 8px;\r\n  border: 4px solid transparent;\r\n  background-clip: content-box;\r\n  background-color: #888;\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: #555;\r\n}\r\n/* Border radius */\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n}\r\n\r\n/* CAROUSEL CSS */\r\n.carousel {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n}\r\n\r\nsection:nth-child(2) li > img {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.carouselTrackContainer {\r\n  background: lightgreen;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\n.carouselTrack {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  position: relative;\r\n  height: 100%;\r\n  transition: transform 250ms ease-in;\r\n}\r\n\r\n.carouselSlide {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n}\r\n\r\n/*CAROUSEL BUTTON*/\r\n.carouselButton {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  width: 45px;\r\n  height: 45px;\r\n  cursor: pointer;\r\n  border-radius: 50%;\r\n  border: none;\r\n  background: #2a2e33;\r\n  box-shadow: inset -8px -8px 29px var(--darkGray),\r\n    inset 10px 10px 20px var(--lightGray), -8px -8px 15px var(--lightShadow),\r\n    8px 8px 15px var(--darkGray);\r\n  color: rgba(136, 131, 131, 0.829);\r\n}\r\n\r\n.carouselButton:active {\r\n  box-shadow: inset 8px 8px 15px var(--darkGray),\r\n    inset -8px -8px 15px var(--gray), 8px 8px 15px var(--lightShadow),\r\n    -8px -8px 15px var(--darkGray);\r\n}\r\n.carouselButton:hover {\r\n  color: rgba(240, 240, 240, 0.753);\r\n}\r\n\r\n.carouselButtonLeft {\r\n  left: 10px;\r\n}\r\n\r\n.carouselButtonRight {\r\n  right: 10px;\r\n}\r\n\r\n/* CAROUSEL SLIDER INDICATOR */\r\n.carouselNav {\r\n  display: flex;\r\n  position: relative;\r\n  justify-content: center;\r\n  padding: 10px 0;\r\n  top: -40px;\r\n}\r\n\r\n.carouselIndicator {\r\n  border: 0;\r\n  border-radius: 50%;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: #3a3842;\r\n  box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),\r\n    6px 6px 15px 1px rgba(48, 46, 54, 1),\r\n    inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),\r\n    inset -1px -2px 2px 0px rgba(104, 97, 133, 0.4),\r\n    -6px -6px 15px 1px rgba(77, 71, 100, 0.6);\r\n  margin: 0 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.carouselIndicator:active {\r\n  box-shadow: inset 8px 8px 15px var(--darkGray),\r\n    inset -8px -8px 15px var(--gray), 8px 8px 15px var(--lightShadow),\r\n    -8px -8px 15px var(--darkGray);\r\n}\r\n\r\n.carouselIndicator:hover {\r\n  background: rgba(255, 255, 255, 0.7);\r\n}\r\n\r\n.carouselIndicatorCurrentSlide {\r\n  background: rgba(173, 173, 173, 0.7);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

window.addEventListener("DOMContentLoaded", function () {
  scrollToTop(); //ul selector

  var track = document.querySelector(".carouselTrack"); //img tracks in array

  var slides = Array.from(track.children);
  console.log("slides", slides); //buttons selector

  var prevBtn = document.querySelector(".carouselButtonLeft");
  var nextBtn = document.querySelector(".carouselButtonRight"); //dots selector

  var dotsNav = document.querySelector(".carouselNav");
  var dots = Array.from(dotsNav.children); //Sliding function

  var moveToSlide = function moveToSlide(track, currentSlide, targetSlide, currentDot, targetDot) {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    console.log("targetSlide", targetSlide);
    console.log("track", track);
    currentSlide.classList.remove("currentSlide");
    targetSlide.classList.add("currentSlide");
    currentDot.classList.remove("carouselIndicatorCurrentSlide");
    targetDot.classList.add("carouselIndicatorCurrentSlide");
  };

  initSlideWidth();
  window.addEventListener("resize", function (event) {
    scrollToTop();
    initSlideWidth();
  }); // SMOOTH VERTICAL SCROOL

  window.addEventListener("wheel", function (event) {
    debounce(function () {
      initScrollPosition(event);
    });
  });

  function debounce(func) {
    var _this = this;

    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var timer;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(_this, args);
      }, timeout);
    };
  } // HORIZONTAL CAROUSEL
  //slider move to the left


  prevBtn.addEventListener("click", function (e) {
    var currentSlide = track.querySelector(".currentSlide");
    var previousSlide = currentSlide.previousElementSibling;
    console.log("previousSlide", previousSlide); //DOT search

    var currentDot = dotsNav.querySelector(".carouselIndicatorCurrentSlide");
    var previousIndex = dots.findIndex(function (dot) {
      return dot === currentDot;
    }) - 1;
    if (previousIndex <= 0 && previousIndex >= dots.length) return;
    var targetDot = dots[previousIndex];
    moveToSlide(track, currentSlide, previousSlide, currentDot, targetDot);
  }); //slider move to the right

  nextBtn.addEventListener("click", function (e) {
    var currentSlide = track.querySelector(".currentSlide");
    console.log("currentSlide", currentSlide);
    var nextSlide = currentSlide.nextElementSibling;
    console.log("nextSlide", nextSlide); //DOT search

    var currentDot = dotsNav.querySelector(".carouselIndicatorCurrentSlide");
    var nextIndex = dots.findIndex(function (dot) {
      return dot === currentDot;
    }) + 1;
    if (nextIndex >= dots.length) return;
    var targetDot = dots[nextIndex];
    moveToSlide(track, currentSlide, nextSlide, currentDot, targetDot);
  }); // DOTS INDICATORS

  dotsNav.addEventListener("click", function (e) {
    //find the triggered btn
    var targetDot = e.target.closest("button");
    if (!targetDot) return; //curent slide

    var currentSlide = track.querySelector(".currentSlide"); //curent dot

    var currentDot = dotsNav.querySelector(".carouselIndicatorCurrentSlide");
    var targetIndex = dots.findIndex(function (dot) {
      return dot === targetDot;
    }); //target slide

    var targetSlide = slides[targetIndex]; //Sliding function

    moveToSlide(track, currentSlide, targetSlide, currentDot, targetDot);
  });

  function initScrollPosition(event) {
    if (event.deltaY == "-100") {
      window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    } else if (event.deltaY == "100") {
      window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  function initSlideWidth() {
    //screen size scrolling calculation
    var slideWidth = slides[0].getBoundingClientRect().width; //arrange the slides next to one another

    var setSlidePosition = function setSlidePosition(slides, index) {
      slides.style.left = slideWidth * index + "px";
    };

    slides.forEach(setSlidePosition);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map