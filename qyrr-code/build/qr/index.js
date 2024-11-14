/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@olegstankoptev/font-picker-react/dist/FontPicker.es.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@olegstankoptev/font-picker-react/dist/FontPicker.es.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @samuelmeuli/font-manager */ "./node_modules/@samuelmeuli/font-manager/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function getFontId(fontFamily) {
    return fontFamily.replace(/\s+/g, "-").toLowerCase();
}
var FontPicker = (function (_super) {
    __extends(FontPicker, _super);
    function FontPicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            expanded: false,
            loadingStatus: "loading",
        };
        _this.componentDidMount = function () {
            _this.fontManager
                .init()
                .then(function () {
                _this.setState({
                    loadingStatus: "finished",
                });
            })["catch"](function (err) {
                _this.setState({
                    loadingStatus: "error",
                });
                console.error("Error trying to fetch the list of available fonts");
                console.error(err);
            });
        };
        _this.componentDidUpdate = function (prevProps) {
            var _a = _this.props, activeFontFamily = _a.activeFontFamily, onChange = _a.onChange;
            if (activeFontFamily !== prevProps.activeFontFamily) {
                _this.setActiveFontFamily(activeFontFamily);
            }
            if (onChange !== prevProps.onChange) {
                _this.fontManager.setOnChange(onChange);
            }
        };
        _this.onClose = function (e) {
            var targetEl = e.target;
            var fontPickerEl = document.getElementById("font-picker" + _this.fontManager.selectorSuffix);
            while (true) {
                if (targetEl === fontPickerEl) {
                    return;
                }
                if (targetEl.parentNode) {
                    targetEl = targetEl.parentNode;
                }
                else {
                    _this.toggleExpanded();
                    return;
                }
            }
        };
        _this.onSelection = function (e) {
            var target = e.target;
            var activeFontFamily = target.textContent;
            if (!activeFontFamily) {
                throw Error("Missing font family in clicked font button");
            }
            _this.setActiveFontFamily(activeFontFamily);
            _this.toggleExpanded();
        };
        _this.setActiveFontFamily = function (activeFontFamily) {
            _this.fontManager.setActiveFont(activeFontFamily);
        };
        _this.generateFontList = function (fonts) {
            var activeFontFamily = _this.props.activeFontFamily;
            var loadingStatus = _this.state.loadingStatus;
            if (loadingStatus !== "finished") {
                return react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null);
            }
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", { className: "font-list" }, fonts.map(function (font) {
                var isActive = font.family === activeFontFamily;
                var fontId = getFontId(font.family);
                return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", { key: fontId, className: "font-list-item" },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { type: "button", id: "font-button-" + fontId + _this.fontManager.selectorSuffix, className: "font-button " + (isActive ? "active-font" : ""), onClick: _this.onSelection, onKeyPress: _this.onSelection }, font.family)));
            })));
        };
        _this.toggleExpanded = function () {
            var expanded = _this.state.expanded;
            if (expanded) {
                _this.setState({
                    expanded: false,
                });
                document.removeEventListener("click", _this.onClose);
            }
            else {
                _this.setState({
                    expanded: true,
                });
                document.addEventListener("click", _this.onClose);
            }
        };
        _this.render = function () {
            var _a = _this.props, activeFontFamily = _a.activeFontFamily, sort = _a.sort;
            var _b = _this.state, expanded = _b.expanded, loadingStatus = _b.loadingStatus;
            var fonts = Array.from(_this.fontManager.getFonts().values());
            if (sort === "alphabet") {
                fonts.sort(function (font1, font2) { return font1.family.localeCompare(font2.family); });
            }
            return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", { id: "font-picker" + _this.fontManager.selectorSuffix, className: expanded ? "expanded" : "" },
                react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", { type: "button", className: "dropdown-button", onClick: _this.toggleExpanded, onKeyPress: _this.toggleExpanded },
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "dropdown-font-family" }, activeFontFamily),
                    react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", { className: "dropdown-icon " + loadingStatus })),
                loadingStatus === "finished" && _this.generateFontList(fonts)));
        };
        var _a = _this.props, apiKey = _a.apiKey, activeFontFamily = _a.activeFontFamily, pickerId = _a.pickerId, families = _a.families, categories = _a.categories, scripts = _a.scripts, variants = _a.variants, filter = _a.filter, limit = _a.limit, sort = _a.sort, onChange = _a.onChange, configureFontManager = _a.configureFontManager;
        var options = {
            pickerId: pickerId,
            families: families,
            categories: categories,
            scripts: scripts,
            variants: variants,
            filter: filter,
            limit: limit,
            sort: sort,
        };
        var fontManager = new _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.FontManager(apiKey, activeFontFamily, options, onChange);
        configureFontManager(fontManager);
        _this.fontManager = fontManager;
        return _this;
    }
    FontPicker.defaultProps = {
        activeFontFamily: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.FONT_FAMILY_DEFAULT,
        onChange: function () { },
        pickerId: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.OPTIONS_DEFAULTS.pickerId,
        families: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.OPTIONS_DEFAULTS.families,
        categories: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.OPTIONS_DEFAULTS.categories,
        scripts: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.OPTIONS_DEFAULTS.scripts,
        variants: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.OPTIONS_DEFAULTS.variants,
        filter: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.OPTIONS_DEFAULTS.filter,
        limit: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.OPTIONS_DEFAULTS.limit,
        sort: _samuelmeuli_font_manager__WEBPACK_IMPORTED_MODULE_0__.OPTIONS_DEFAULTS.sort,
        configureFontManager: function (_) { },
    };
    return FontPicker;
}(react__WEBPACK_IMPORTED_MODULE_1__.PureComponent));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontPicker);


/***/ }),

/***/ "./node_modules/@ramonak/react-progress-bar/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ramonak/react-progress-bar/dist/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(/*! react */ "react");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ProgressBar = function (_a) {
    var _b = _a.bgColor, bgColor = _b === void 0 ? "#6a1b9a" : _b, _c = _a.height, height = _c === void 0 ? "20px" : _c, _d = _a.width, width = _d === void 0 ? "100%" : _d, _e = _a.borderRadius, borderRadius = _e === void 0 ? "50px" : _e, _f = _a.labelAlignment, labelAlignment = _f === void 0 ? "right" : _f, _g = _a.baseBgColor, baseBgColor = _g === void 0 ? "#e0e0de" : _g, _h = _a.labelColor, labelColor = _h === void 0 ? "#fff" : _h, _j = _a.labelSize, labelSize = _j === void 0 ? "15px" : _j, _k = _a.isLabelVisible, isLabelVisible = _k === void 0 ? true : _k, _l = _a.dir, dir = _l === void 0 ? "ltr" : _l, _m = _a.ariaValuemin, ariaValuemin = _m === void 0 ? 0 : _m, _o = _a.ariaValuemax, ariaValuemax = _o === void 0 ? 100 : _o, _p = _a.ariaValuetext, ariaValuetext = _p === void 0 ? null : _p, _q = _a.maxCompleted, maxCompleted = _q === void 0 ? 100 : _q, _r = _a.animateOnRender, animateOnRender = _r === void 0 ? false : _r, _s = _a.initCompletedOnAnimation, initCompletedOnAnimation = _s === void 0 ? 0 : _s, _t = _a.isIndeterminate, isIndeterminate = _t === void 0 ? false : _t, completed = _a.completed, margin = _a.margin, padding = _a.padding, customLabelStyles = _a.customLabelStyles, transitionDuration = _a.transitionDuration, transitionTimingFunction = _a.transitionTimingFunction, className = _a.className, customLabel = _a.customLabel, barContainerClassName = _a.barContainerClassName, completedClassName = _a.completedClassName, labelClassName = _a.labelClassName;
    var getAlignment = function (alignmentOption) {
        if (alignmentOption === "left") {
            return "flex-start";
        }
        else if (alignmentOption === "center") {
            return "center";
        }
        else if (alignmentOption === "right") {
            return "flex-end";
        }
        else {
            return null;
        }
    };
    var alignment = getAlignment(labelAlignment);
    var initCompletedOnAnimationStr = typeof initCompletedOnAnimation === "number"
        ? "".concat(initCompletedOnAnimation, "%")
        : initCompletedOnAnimation;
    var getFillerWidth = function (maxCompletedValue, completedValue) {
        if (maxCompletedValue) {
            var ratio = Number(completedValue) / maxCompletedValue;
            return ratio > 1 ? "100%" : "".concat(ratio * 100, "%");
        }
        return initCompletedOnAnimationStr;
    };
    var fillerWidth = getFillerWidth(maxCompleted, completed);
    var _u = React__namespace.useState(initCompletedOnAnimationStr), initWidth = _u[0], setInitWidth = _u[1];
    var containerStyles = {
        height: height,
        background: baseBgColor,
        borderRadius: borderRadius,
        padding: padding,
        width: width,
        margin: margin,
        overflow: "hidden",
    };
    var fillerStyles = {
        height: height,
        width: isIndeterminate ? "100%" : animateOnRender ? initWidth : fillerWidth,
        background: bgColor,
        transition: isIndeterminate
            ? "none"
            : "width ".concat(transitionDuration || "1s", " ").concat(transitionTimingFunction || "ease-in-out"),
        borderRadius: "inherit",
        display: "flex",
        alignItems: "center",
        justifyContent: labelAlignment !== "outside" && alignment ? alignment : "normal",
        animation: isIndeterminate ? "indeterminate 1.5s infinite linear" : "none",
    };
    var labelStyles = __assign({ padding: labelAlignment === "outside" ? "0 0 0 5px" : "5px", color: labelColor, fontWeight: "bold", fontSize: labelSize, display: !isLabelVisible ? "none" : "initial" }, customLabelStyles);
    var outsideStyles = {
        display: labelAlignment === "outside" ? "flex" : "initial",
        alignItems: labelAlignment === "outside" ? "center" : "initial",
    };
    var completedStr = typeof completed === "number" ? "".concat(completed, "%") : "".concat(completed);
    var labelStr = customLabel ? customLabel : completedStr;
    React__namespace.useEffect(function () {
        if (animateOnRender && !isIndeterminate) {
            requestAnimationFrame(function () { return setInitWidth(fillerWidth); });
        }
    }, [fillerWidth, animateOnRender, isIndeterminate]);
    return (React__namespace.createElement("div", { style: className ? undefined : outsideStyles, className: className, dir: dir, role: "progressbar", "aria-valuenow": isIndeterminate ? undefined : parseFloat(labelStr), "aria-valuemin": ariaValuemin, "aria-valuemax": ariaValuemax, "aria-valuetext": "".concat(ariaValuetext === null ? labelStr : ariaValuetext) },
        React__namespace.createElement("div", { style: barContainerClassName ? undefined : containerStyles, className: barContainerClassName },
            React__namespace.createElement("div", { style: completedClassName ? undefined : fillerStyles, className: completedClassName }, labelAlignment !== "outside" && (React__namespace.createElement("span", { style: labelClassName ? undefined : labelStyles, className: labelClassName }, labelStr)))),
        labelAlignment === "outside" && (React__namespace.createElement("span", { style: labelClassName ? undefined : labelStyles, className: labelClassName }, labelStr)),
        React__namespace.createElement("style", null, "\n          @keyframes indeterminate {\n            0% {\n              width: 30%;\n              transform: translateX(-50%);\n            }\n            50% {\n              width: 30%;\n              transform: translateX(250%);\n            }\n            100% {\n              width: 30%;\n              transform: translateX(-50%);\n            }\n          }\n        ")));
};

exports["default"] = ProgressBar;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@samuelmeuli/font-manager/dist/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@samuelmeuli/font-manager/dist/index.es.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_FAMILY_DEFAULT: () => (/* binding */ FONT_FAMILY_DEFAULT),
/* harmony export */   FontManager: () => (/* binding */ FontManager),
/* harmony export */   OPTIONS_DEFAULTS: () => (/* binding */ OPTIONS_DEFAULTS),
/* harmony export */   getFontId: () => (/* binding */ getFontId)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@charset \"UTF-8\";\ndiv[id^=font-picker] {\n  position: relative;\n  display: inline-block;\n  width: 200px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\ndiv[id^=font-picker] * {\n  box-sizing: border-box;\n}\ndiv[id^=font-picker] p {\n  margin: 0;\n  padding: 0;\n}\ndiv[id^=font-picker] button {\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\ndiv[id^=font-picker] .dropdown-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 35px;\n  padding: 0 10px;\n  background: #cbcbcb;\n}\ndiv[id^=font-picker] .dropdown-button:hover, div[id^=font-picker] .dropdown-button:focus {\n  background: #bebebe;\n}\ndiv[id^=font-picker] .dropdown-button .dropdown-font-name {\n  overflow: hidden;\n  white-space: nowrap;\n}\ndiv[id^=font-picker] .dropdown-icon {\n  margin-left: 10px;\n}\n@-webkit-keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\ndiv[id^=font-picker] .dropdown-icon.loading::before {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border: 2px solid #b2b2b2;\n  border-top-color: #000000;\n  border-radius: 50%;\n  -webkit-animation: spinner 0.6s linear infinite;\n          animation: spinner 0.6s linear infinite;\n  content: \"\";\n}\ndiv[id^=font-picker] .dropdown-icon.finished::before {\n  display: block;\n  width: 0;\n  height: 0;\n  margin: 0 2px;\n  border-top: 6px solid #000000;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  transition: transform 0.3s;\n  content: \"\";\n}\ndiv[id^=font-picker] .dropdown-icon.error::before {\n  content: \"⚠\";\n}\ndiv[id^=font-picker].expanded .dropdown-icon.finished::before {\n  transform: rotate(-180deg);\n}\ndiv[id^=font-picker].expanded ul {\n  max-height: 200px;\n}\ndiv[id^=font-picker] ul {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  max-height: 0;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: #eaeaea;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  -webkit-overflow-scrolling: touch;\n}\ndiv[id^=font-picker] ul li {\n  height: 35px;\n  list-style: none;\n}\ndiv[id^=font-picker] ul li button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0 10px;\n  white-space: nowrap;\n}\ndiv[id^=font-picker] ul li button:hover, div[id^=font-picker] ul li button:focus {\n  background: #dddddd;\n}\ndiv[id^=font-picker] ul li button.active-font {\n  background: #d1d1d1;\n}";
styleInject(css);

function getFontId(fontFamily) {
    return fontFamily.replace(/\s+/g, "-").toLowerCase();
}
function validatePickerId(pickerId) {
    if (pickerId.match(/[^0-9a-z]/i)) {
        throw Error("The `pickerId` parameter may only contain letters and digits");
    }
}

function get(url) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.overrideMimeType("application/json");
        request.open("GET", url, true);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status !== 200) {
                    reject(new Error("Response has status code " + request.status));
                }
                else {
                    resolve(request.responseText);
                }
            }
        };
        request.send();
    });
}

var LIST_BASE_URL = "https://www.googleapis.com/webfonts/v1/webfonts";
function getFontList(apiKey) {
    return __awaiter(this, void 0, void 0, function () {
        var url, response, json, fontsOriginal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = new URL(LIST_BASE_URL);
                    url.searchParams.append("sort", "popularity");
                    url.searchParams.append("key", apiKey);
                    return [4, get(url.href)];
                case 1:
                    response = _a.sent();
                    json = JSON.parse(response);
                    fontsOriginal = json.items;
                    return [2, fontsOriginal.map(function (fontOriginal) {
                            var family = fontOriginal.family, subsets = fontOriginal.subsets, others = __rest(fontOriginal, ["family", "subsets"]);
                            return __assign(__assign({}, others), { family: family, id: getFontId(family), scripts: subsets });
                        })];
            }
        });
    });
}

var previewFontsStylesheet = document.createElement("style");
document.head.appendChild(previewFontsStylesheet);
function applyFontPreview(previewFont, selectorSuffix) {
    var fontId = getFontId(previewFont.family);
    var style = "\n\t\t\t#font-button-" + fontId + selectorSuffix + " {\n\t\t\t\tfont-family: \"" + previewFont.family + "\";\n\t\t\t}\n\t\t";
    previewFontsStylesheet.appendChild(document.createTextNode(style));
}
function getActiveFontStylesheet(selectorSuffix) {
    var stylesheetId = "active-font-" + selectorSuffix;
    var activeFontStylesheet = document.getElementById(stylesheetId);
    if (!activeFontStylesheet) {
        activeFontStylesheet = document.createElement("style");
        activeFontStylesheet.id = stylesheetId;
        document.head.appendChild(activeFontStylesheet);
    }
    return activeFontStylesheet;
}
function applyActiveFont(activeFont, previousFontFamily, selectorSuffix) {
    var style = "\n\t\t.apply-font" + selectorSuffix + " {\n\t\t\tfont-family: \"" + activeFont.family + "\"" + (previousFontFamily ? ", \"" + previousFontFamily + "\"" : "") + ";\n\t\t}\n\t";
    var activeFontStylesheet = getActiveFontStylesheet(selectorSuffix);
    activeFontStylesheet.innerHTML = style;
}

var PREVIEW_ATTRIBUTE_NAME = "data-is-preview";
function getStylesheetId(fontId) {
    return "font-" + fontId;
}
function stylesheetExists(fontId, isPreview) {
    var stylesheetNode = document.getElementById(getStylesheetId(fontId));
    if (isPreview === null || isPreview === undefined) {
        return stylesheetNode !== null;
    }
    return (stylesheetNode !== null &&
        stylesheetNode.getAttribute(PREVIEW_ATTRIBUTE_NAME) === isPreview.toString());
}
function createStylesheet(fontId, isPreview) {
    var stylesheetNode = document.createElement("style");
    stylesheetNode.id = getStylesheetId(fontId);
    stylesheetNode.setAttribute(PREVIEW_ATTRIBUTE_NAME, isPreview.toString());
    document.head.appendChild(stylesheetNode);
}
function fillStylesheet(fontId, styles) {
    var stylesheetId = getStylesheetId(fontId);
    var stylesheetNode = document.getElementById(stylesheetId);
    if (stylesheetNode) {
        stylesheetNode.textContent = styles;
    }
    else {
        console.error("Could not fill stylesheet: Stylesheet with ID \"" + stylesheetId + "\" not found");
    }
}
function setStylesheetType(fontId, isPreview) {
    var stylesheetId = getStylesheetId(fontId);
    var stylesheetNode = document.getElementById(stylesheetId);
    if (stylesheetNode) {
        stylesheetNode.setAttribute(PREVIEW_ATTRIBUTE_NAME, isPreview.toString());
    }
    else {
        console.error("Could not change stylesheet type: Stylesheet with ID \"" + stylesheetId + "\" not found");
    }
}

function getMatches(regex, str) {
    var matches = [];
    var match;
    do {
        match = regex.exec(str);
        if (match) {
            matches.push(match[1]);
        }
    } while (match);
    return matches;
}

var FONT_FACE_REGEX = /@font-face {([\s\S]*?)}/gm;
var FONT_FAMILY_REGEX = /font-family: ['"](.*?)['"]/gm;
function extractFontStyles(allFontStyles) {
    var rules = getMatches(FONT_FACE_REGEX, allFontStyles);
    var fontStyles = {};
    rules.forEach(function (rule) {
        var fontFamily = getMatches(FONT_FAMILY_REGEX, rule)[0];
        var fontId = getFontId(fontFamily);
        if (!(fontId in fontStyles)) {
            fontStyles[fontId] = "";
        }
        fontStyles[fontId] += "@font-face {\n" + rule + "\n}\n\n";
    });
    return fontStyles;
}

var FONT_BASE_URL = "https://fonts.googleapis.com/css";
function getStylesheet(fonts, scripts, variants, previewsOnly) {
    return __awaiter(this, void 0, void 0, function () {
        var url, variantsStr, familiesStr, familyNamesConcat, downloadChars;
        return __generator(this, function (_a) {
            url = new URL(FONT_BASE_URL);
            variantsStr = variants.join(",");
            familiesStr = fonts.map(function (font) { return font.family + ":" + variantsStr; });
            url.searchParams.append("family", familiesStr.join("|"));
            url.searchParams.append("subset", scripts.join(","));
            if (previewsOnly) {
                familyNamesConcat = fonts.map(function (font) { return font.family; }).join("");
                downloadChars = familyNamesConcat
                    .split("")
                    .filter(function (char, pos, self) { return self.indexOf(char) === pos; })
                    .join("");
                url.searchParams.append("text", downloadChars);
            }
            url.searchParams.append("font-display", "swap");
            return [2, get(url.href)];
        });
    });
}

function loadFontPreviews(fonts, scripts, variants, selectorSuffix) {
    return __awaiter(this, void 0, void 0, function () {
        var fontsArray, fontsToFetch, response, fontStyles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fontsArray = Array.from(fonts.values());
                    fontsToFetch = fontsArray
                        .map(function (font) { return font.id; })
                        .filter(function (fontId) { return !stylesheetExists(fontId); });
                    fontsToFetch.forEach(function (fontId) { return createStylesheet(fontId, true); });
                    return [4, getStylesheet(fontsArray, scripts, variants, true)];
                case 1:
                    response = _a.sent();
                    fontStyles = extractFontStyles(response);
                    fontsArray.forEach(function (font) {
                        applyFontPreview(font, selectorSuffix);
                        if (fontsToFetch.includes(font.id)) {
                            if (!(font.id in fontStyles)) {
                                console.error("Missing styles for font \"" + font.family + "\" (fontId \"" + font.id + "\") in Google Fonts response");
                                return;
                            }
                            fillStylesheet(font.id, fontStyles[font.id]);
                        }
                    });
                    return [2];
            }
        });
    });
}
function loadActiveFont(font, previousFontFamily, scripts, variants, selectorSuffix) {
    return __awaiter(this, void 0, void 0, function () {
        var fontStyle;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!stylesheetExists(font.id, false)) return [3, 1];
                    applyActiveFont(font, previousFontFamily, selectorSuffix);
                    return [3, 3];
                case 1:
                    if (stylesheetExists(font.id, true)) {
                        setStylesheetType(font.id, false);
                    }
                    else {
                        createStylesheet(font.id, false);
                    }
                    return [4, getStylesheet([font], scripts, variants, false)];
                case 2:
                    fontStyle = _a.sent();
                    applyActiveFont(font, previousFontFamily, selectorSuffix);
                    fillStylesheet(font.id, fontStyle);
                    _a.label = 3;
                case 3: return [2];
            }
        });
    });
}

var FONT_FAMILY_DEFAULT = "Open Sans";
var OPTIONS_DEFAULTS = {
    pickerId: "",
    families: [],
    categories: [],
    scripts: ["latin"],
    variants: ["regular"],
    filter: function () { return true; },
    limit: 50,
    sort: "alphabet",
};

var FontManager = (function () {
    function FontManager(apiKey, defaultFamily, _a, onChange) {
        if (defaultFamily === void 0) { defaultFamily = FONT_FAMILY_DEFAULT; }
        var _b = _a.pickerId, pickerId = _b === void 0 ? OPTIONS_DEFAULTS.pickerId : _b, _c = _a.families, families = _c === void 0 ? OPTIONS_DEFAULTS.families : _c, _d = _a.categories, categories = _d === void 0 ? OPTIONS_DEFAULTS.categories : _d, _e = _a.scripts, scripts = _e === void 0 ? OPTIONS_DEFAULTS.scripts : _e, _f = _a.variants, variants = _f === void 0 ? OPTIONS_DEFAULTS.variants : _f, _g = _a.filter, filter = _g === void 0 ? OPTIONS_DEFAULTS.filter : _g, _h = _a.limit, limit = _h === void 0 ? OPTIONS_DEFAULTS.limit : _h, _j = _a.sort, sort = _j === void 0 ? OPTIONS_DEFAULTS.sort : _j;
        if (onChange === void 0) { onChange = function () { }; }
        this.fonts = new Map();
        validatePickerId(pickerId);
        this.selectorSuffix = pickerId ? "-" + pickerId : "";
        this.apiKey = apiKey;
        this.options = {
            pickerId: pickerId,
            families: families,
            categories: categories,
            scripts: scripts,
            variants: variants,
            filter: filter,
            limit: limit,
            sort: sort,
        };
        this.onChange = onChange;
        this.addFont(defaultFamily, false);
        this.setActiveFont(defaultFamily, false);
    }
    FontManager.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fonts, _loop_1, this_1, i, state_1, fontsToLoad;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getFontList(this.apiKey)];
                    case 1:
                        fonts = _a.sent();
                        _loop_1 = function (i) {
                            var font = fonts[i];
                            if (this_1.fonts.size >= this_1.options.limit) {
                                return "break";
                            }
                            if (!this_1.fonts.has(font.family) &&
                                (this_1.options.families.length === 0 || this_1.options.families.includes(font.family)) &&
                                (this_1.options.categories.length === 0 || this_1.options.categories.includes(font.category)) &&
                                this_1.options.scripts.every(function (script) { return font.scripts.includes(script); }) &&
                                this_1.options.variants.every(function (variant) { return font.variants.includes(variant); }) &&
                                this_1.options.filter(font) === true) {
                                this_1.fonts.set(font.family, font);
                            }
                        };
                        this_1 = this;
                        for (i = 0; i < fonts.length; i += 1) {
                            state_1 = _loop_1(i);
                            if (state_1 === "break")
                                break;
                        }
                        fontsToLoad = new Map(this.fonts);
                        fontsToLoad["delete"](this.activeFontFamily);
                        loadFontPreviews(fontsToLoad, this.options.scripts, this.options.variants, this.selectorSuffix);
                        return [2, this.fonts];
                }
            });
        });
    };
    FontManager.prototype.getFonts = function () {
        return this.fonts;
    };
    FontManager.prototype.addFont = function (fontFamily, downloadPreview) {
        if (downloadPreview === void 0) { downloadPreview = true; }
        var font = {
            family: fontFamily,
            id: getFontId(fontFamily),
        };
        this.fonts.set(fontFamily, font);
        if (downloadPreview) {
            var fontMap = new Map();
            fontMap.set(fontFamily, font);
            loadFontPreviews(fontMap, this.options.scripts, this.options.variants, this.selectorSuffix);
        }
    };
    FontManager.prototype.removeFont = function (fontFamily) {
        this.fonts["delete"](fontFamily);
    };
    FontManager.prototype.getActiveFont = function () {
        var activeFont = this.fonts.get(this.activeFontFamily);
        if (!activeFont) {
            throw Error("Cannot get active font: \"" + this.activeFontFamily + "\" is not in the font list");
        }
        else {
            return activeFont;
        }
    };
    FontManager.prototype.setActiveFont = function (fontFamily, runOnChange) {
        var _this = this;
        if (runOnChange === void 0) { runOnChange = true; }
        var previousFontFamily = this.activeFontFamily;
        var activeFont = this.fonts.get(fontFamily);
        if (!activeFont) {
            throw Error("Cannot update active font: \"" + fontFamily + "\" is not in the font list");
        }
        this.activeFontFamily = fontFamily;
        loadActiveFont(activeFont, previousFontFamily, this.options.scripts, this.options.variants, this.selectorSuffix).then(function () {
            if (runOnChange) {
                _this.onChange(activeFont);
            }
        });
    };
    FontManager.prototype.setOnChange = function (onChange) {
        this.onChange = onChange;
    };
    return FontManager;
}());




/***/ }),

/***/ "./src/qr/Edit.jsx":
/*!*************************!*\
  !*** ./src/qr/Edit.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/qr/editor.scss");
/* harmony import */ var _components_SourceSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SourceSettings */ "./src/qr/components/SourceSettings.jsx");
/* harmony import */ var _components_GeneralSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/GeneralSettings */ "./src/qr/components/GeneralSettings.jsx");
/* harmony import */ var _components_LabelSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LabelSettings */ "./src/qr/components/LabelSettings.jsx");
/* harmony import */ var _components_DownloadSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/DownloadSettings */ "./src/qr/components/DownloadSettings.jsx");
/* harmony import */ var _components_ShortcodeSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ShortcodeSettings */ "./src/qr/components/ShortcodeSettings.jsx");
/* harmony import */ var _components_TemplateSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/TemplateSettings */ "./src/qr/components/TemplateSettings.jsx");
/* harmony import */ var _components_BulkGeneratorSettings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/BulkGeneratorSettings */ "./src/qr/components/BulkGeneratorSettings.jsx");
/* harmony import */ var react_kjua__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-kjua */ "./node_modules/react-kjua/dist/index.js");
/* harmony import */ var react_kjua__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_kjua__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);















const {
  __
} = wp.i18n;
function Edit({
  setAttributes,
  noticeOperations,
  noticeUI
}) {
  const [meta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('postType', 'qr', 'meta');
  const [isBlockSelected, setIsBlockSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const buffer = new Image();
  buffer.src = meta['logo-upload'];
  const selectedBlock = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_11__.useSelect)(select => select('core/block-editor').getSelectedBlock());
  const postID = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_11__.useSelect)(select => {
    const {
      getCurrentPostId
    } = select('core/editor');
    return getCurrentPostId();
  }, []);
  const saveFile = (type, source, isPreview) => {
    if ('svg' === type) {
      let reader = new FileReader();
      reader.readAsDataURL(source);
      reader.onloadend = function () {
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13___default()({
          path: '/qyrr/v1/blob-to-file',
          method: 'POST',
          data: {
            post_id: postID,
            format: type,
            source: reader.result
          }
        });
      };
    } else {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_13___default()({
        path: '/qyrr/v1/blob-to-file',
        method: 'POST',
        data: {
          post_id: postID,
          format: type,
          source: source
        }
      });
    }
  };
  const saveFilesToDisk = () => {
    // Original image.
    let container = document.getElementById('qr-code-container');
    let inner_div = container.firstElementChild;
    let qr_image = inner_div.firstElementChild;
    if (qr_image.src) {
      saveFile('png', qr_image.src, false);
    } else if (qr_image.nodeName === 'CANVAS') {
      // Canvas - render as image file.
      qr_image.toBlob(function (blob) {
        saveFile('svg', blob, false);
      });
    } else if (qr_image.innerHTML) {
      // Render as SVG file.
      let svg = '<svg title="graph" xmlns="http://www.w3.org/2000/svg">' + qr_image.innerHTML + '</svg>';
      let blob = new Blob([svg], {
        type: "image/svg+xml"
      });
      saveFile('svg', blob, false);
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_12__.useEffect)(() => {
    if (selectedBlock) {
      setIsBlockSelected(true);
    }
    saveFilesToDisk();
  }, [selectedBlock]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
      className: "qyrr-container-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_SourceSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_GeneralSettings__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_LabelSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {
          noticeOperations: noticeOperations,
          noticeUI: noticeUI,
          setAttributes: setAttributes
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_DownloadSettings__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_ShortcodeSettings__WEBPACK_IMPORTED_MODULE_7__["default"], {}), license.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_TemplateSettings__WEBPACK_IMPORTED_MODULE_8__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_components_BulkGeneratorSettings__WEBPACK_IMPORTED_MODULE_9__["default"], {})]
        })]
      }), !isBlockSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        style: {
          textAlign: 'center',
          color: '#6804cc'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
          children: __('Click on the QR Code to customize it.', 'qyrr-code')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        id: "qr-code-container",
        className: "apply-font",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_kjua__WEBPACK_IMPORTED_MODULE_10__.Kjua, {
          render: meta['download_format'],
          text: meta['qr-content'],
          image: buffer,
          minVersion: meta['min-version'],
          ecLevel: meta['error-handling-level'],
          size: meta['size'],
          fill: meta['fill-color'],
          back: meta['background-color'],
          rounded: meta['corner-radius'],
          quiet: meta['quiet-zone'],
          mode: meta['render-mode'],
          mSize: meta['logo-size'],
          mPosX: meta['position-x'],
          mPosY: meta['position-y'],
          label: meta['label-text'],
          fontname: meta['font'],
          fontcolor: meta['font-color']
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/qr/Save.jsx":
/*!*************************!*\
  !*** ./src/qr/Save.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
function save() {
  return null;
}

/***/ }),

/***/ "./src/qr/components/BulkGeneratorSettings.jsx":
/*!*****************************************************!*\
  !*** ./src/qr/components/BulkGeneratorSettings.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ramonak/react-progress-bar */ "./node_modules/@ramonak/react-progress-bar/dist/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const {
  __
} = wp.i18n;
function BulkGeneratorSettings() {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_5__.useEntityProp)('postType', 'qr', 'meta');
  const [campaign, setCampaign] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [type, setType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('bulk_data');
  const [numberOfCodes, setNumberOfCodes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(10);
  const [bulkData, setBulkData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [progress, setProgress] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getCurrentPostId
    } = select('core/editor');
    return getCurrentPostId();
  }, []);
  const campaigns = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getEntityRecords
    } = select('core');
    return getEntityRecords('taxonomy', 'campaign', {
      per_page: -1,
      order: 'asc',
      status: 'publish'
    });
  }, []);
  const selectableCampaigns = () => {
    if (!campaigns) {
      return [];
    }
    const options = [{
      label: __('No campaign', 'qyrr-code'),
      value: 0
    }];
    campaigns.map(term => {
      options.push({
        label: term.name,
        value: term.id
      });
      return term;
    });
    return options;
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (meta['source'] === '') {
      setMeta({
        "source": 'post'
      });
    }
  }, [meta]);
  const generateQRCodes = () => {
    let currentCodesGenerated = 1;
    let origin_content = meta['qr-content'];

    // Split textarea to array entries.
    if (type === 'bulk_data') {
      const dataEntries = bulkData.split("\n");
      dataEntries.map(function (data) {
        setMeta({
          "qr-content": data
        });
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: '/qyrr/v1/generate-code',
          method: 'POST',
          data: {
            type,
            data,
            'post_id': postId,
            'iterator': currentCodesGenerated,
            campaign
          }
        }).then(res => {
          let result = JSON.parse(res);
          if (result.new_post_id) {
            saveFilesToDisk(result.new_post_id);
          }
          currentCodesGenerated++;
          const progressPercent = currentCodesGenerated / dataEntries.length * 100;
          if (progressPercent <= 100) {
            setProgress(progressPercent);
          }
        });
        return data;
      });

      // Reset QR Content.
      setMeta({
        "qr-content": origin_content
      });
    } else {
      // We're using the unique id here.
      while (currentCodesGenerated <= numberOfCodes) {
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: '/qyrr/v1/generate-code',
          method: 'POST',
          data: {
            type,
            'post_id': postId,
            'iterator': currentCodesGenerated,
            campaign
          }
        }).then(res => {
          let result = JSON.parse(res);
          setMeta({
            "qr-content": origin_content + '&quid=' + currentCodesGenerated
          });
          if (result.new_post_id) {
            saveFilesToDisk(result.new_post_id);
          }
        });
        currentCodesGenerated++;
        const progressPercent = currentCodesGenerated / numberOfCodes * 100;
        if (progressPercent <= 100) {
          setProgress(progressPercent);
        }
      }

      // Reset QR Content.
      setMeta({
        "qr-content": origin_content
      });
    }
    setTimeout(function () {
      setProgress(0);
    }, 2000);
  };
  const saveFile = (type, source, isPreview, newPostId) => {
    if ('svg' === type) {
      let reader = new FileReader();
      reader.readAsDataURL(source);
      reader.onloadend = function () {
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
          path: '/qyrr/v1/blob-to-file',
          method: 'POST',
          data: {
            post_id: newPostId,
            format: type,
            source: reader.result,
            preview: isPreview
          }
        });
      };
    } else {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
        path: '/qyrr/v1/blob-to-file',
        method: 'POST',
        data: {
          post_id: newPostId,
          format: type,
          source: source,
          preview: isPreview
        }
      });
    }
  };
  const saveFilesToDisk = newPostId => {
    // Original image.
    let container = document.getElementById('qr-code-container');
    let inner_div = container.firstElementChild;
    let image = inner_div.firstElementChild;
    if (image.src) {
      saveFile('png', image.src, false, newPostId);
    } else if (image.innerHTML) {
      // Render as SVG file.
      let svg = '<svg title="graph" version="1.1" xmlns="http://www.w3.org/2000/svg">' + image.innerHTML + '</svg>';
      let blob = new Blob([svg], {
        type: "image/svg+xml"
      });
      saveFile('svg', blob, false, newPostId);
    } else {
      // Canvas - render as image file.
      image.toBlob(function (blob) {
        saveFile('svg', blob, false, newPostId);
      });
    }

    // Preview image.
    let preview_container = document.getElementById('qr-code-preview');
    let preview_inner_div = preview_container.firstElementChild;
    let preview_image = preview_inner_div.firstElementChild;
    if (preview_image.src) {
      saveFile('png', preview_image.src, true, newPostId);
    } else if (preview_image.innerHTML) {
      // Render as SVG file.
      let svg = '<svg title="graph" version="1.1" xmlns="http://www.w3.org/2000/svg">' + preview_image.innerHTML + '</svg>';
      let blob = new Blob([svg], {
        type: "image/svg+xml"
      });
      saveFile('svg', blob, true, newPostId);
    } else {
      // Canvas - render as image file.
      preview_image.toBlob(function (blob) {
        saveFile('svg', blob, true, newPostId);
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: license.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
      title: __('Bulk Generation', 'qyrr-code'),
      initialOpen: false,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: __('Type', 'qyrr-code'),
        help: __('Choose type of bulk processing you like to use. Use Unique ID for multiple QR-Codes with the same URL, otherwise use Add data per line.', 'qyrr-code'),
        value: type,
        options: [{
          label: __('Unique ID', 'qyrr-code'),
          value: 'unique_id'
        }, {
          label: __('Add data per line', 'qyrr-code'),
          value: 'bulk_data'
        }],
        onChange: value => {
          setType(value);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: __('Campaign', 'qyrr-code'),
        help: __('Assign all generated QR-Codes to a campain for a better overview.', 'qyrr-code'),
        value: campaign,
        onChange: value => setCampaign(value),
        options: selectableCampaigns()
      }), type === 'unique_id' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: __('How many QR-Codes should be generated?', 'qyrr-code'),
        value: numberOfCodes,
        onChange: value => {
          setNumberOfCodes(value);
        },
        type: "number"
      }), type === 'bulk_data' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
        label: __('Add source data - one entry per line.', 'qyrr-code'),
        help: __('Use a new line for each entry you like to create a QR-Code for.', 'qyrr-code'),
        value: bulkData,
        rows: 20,
        onChange: value => {
          setBulkData(value);
        }
      }), progress > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ramonak_react_progress_bar__WEBPACK_IMPORTED_MODULE_3__["default"], {
        completed: progress,
        className: "progress-bar",
        barContainerClassName: "progress-container"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalSpacer, {
        margin: 5
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "save-settings",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          onClick: generateQRCodes,
          variant: "primary",
          children: __('Generate QR-Codes', 'qyrr-code')
        })
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BulkGeneratorSettings);

/***/ }),

/***/ "./src/qr/components/DownloadSettings.jsx":
/*!************************************************!*\
  !*** ./src/qr/components/DownloadSettings.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const {
  __
} = wp.i18n;
function DownloadSettings() {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('postType', 'qr', 'meta');
  const [fileName, setFileName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useState)('qr-code');
  const postID = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getCurrentPostId
    } = select('core/editor');
    return getCurrentPostId();
  }, []);
  const handleDownload = () => {
    let container = document.getElementById('qr-code-container');
    let inner_div = container.firstElementChild;
    let image = inner_div.firstElementChild;
    if (image.src) {
      // Download PNG.
      (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(image.src, fileName + ".png");
    } else if (image.nodeName === 'CANVAS') {
      // Canvas - render as image file.
      image.toBlob(function (blob) {
        saveFile('svg', blob, false);
      });
    } else if (image.innerHTML) {
      // Render as SVG file.
      let svg = '<svg title="graph" version="1.1" xmlns="http://www.w3.org/2000/svg">' + image.innerHTML + '</svg>';
      let blob = new Blob([svg], {
        type: "image/svg+xml"
      });

      // Download SVG.
      (0,file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs)(blob, fileName + ".svg");
    }
  };
  const formatOptions = () => {
    if (license.is_pro) {
      return [{
        label: 'PNG',
        value: 'image'
      }, {
        label: 'SVG',
        value: 'svg'
      }];
    } else {
      return [{
        label: 'PNG',
        value: 'image'
      }];
    }
  };
  const getFileName = postID => {
    // Get file name.
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
      path: '/qyrr/v1/file-name',
      method: 'POST',
      data: {
        post_id: postID
      }
    }).then(file_name => {
      setFileName(file_name);
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    getFileName(postID);
  }, [postID]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: __('Download', 'qyrr-code'),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: __('Download Format', 'qyrr-code'),
      value: meta['download_format'],
      options: formatOptions(),
      onChange: value => {
        setMeta({
          ...meta,
          "download_format": value
        });
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
      variant: "primary",
      id: "download-qr-code",
      onClick: handleDownload,
      children: __('Download', 'qyrr-code')
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadSettings);

/***/ }),

/***/ "./src/qr/components/GeneralSettings.jsx":
/*!***********************************************!*\
  !*** ./src/qr/components/GeneralSettings.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const {
  __
} = wp.i18n;
function GeneralSettings() {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('postType', 'qr', 'meta');
  const backgroundColors = [{
    name: 'qyrr',
    color: '#6804cc'
  }, {
    name: 'white',
    color: '#fff'
  }, {
    name: 'black',
    color: '#000'
  }];
  const fillColors = [{
    name: 'qyrr',
    color: '#6804cc'
  }, {
    name: 'white',
    color: '#fff'
  }, {
    name: 'black',
    color: '#000'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: __('General Settings', 'qyrr-code'),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
      label: __('Size (in px)', 'qyrr-code'),
      value: meta['size'],
      onChange: value => setMeta({
        ...meta,
        size: value
      }),
      type: "number"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      className: "color-palette-label",
      children: __('Background Color', 'qyrr-code')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
      colors: backgroundColors,
      value: meta['background-color'],
      onChange: value => {
        if (undefined === value) {
          setMeta({
            ...meta,
            "background-color": ""
          });
        } else {
          setMeta({
            ...meta,
            "background-color": value
          });
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
      className: "color-palette-label",
      children: __('Fill Color', 'qyrr-code')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
      colors: fillColors,
      value: meta['fill-color'],
      onChange: value => {
        if (undefined === value) {
          setMeta({
            ...meta,
            "fill-color": ""
          });
        } else {
          setMeta({
            ...meta,
            "fill-color": value
          });
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
      label: __('Min Version', 'qyrr-code'),
      value: meta['min-version'],
      onChange: value => setMeta({
        ...meta,
        "min-version": value
      }),
      type: "number"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: __('Quiet Zone', 'qyrr-code'),
      value: meta['quiet-zone'],
      onChange: value => setMeta({
        ...meta,
        "quiet-zone": value
      }),
      min: 0,
      max: 4
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: __('Corner Radius', 'qyrr-code'),
      value: meta['corner-radius'],
      onChange: value => setMeta({
        ...meta,
        "corner-radius": value
      }),
      min: 0,
      max: 50
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: __('Error Handling Level', 'qyrr-code'),
      value: meta['error-handling-level'],
      options: [{
        label: 'L - Low (7%)',
        value: 'L'
      }, {
        label: 'M - Medium (15%)',
        value: 'M'
      }, {
        label: 'Q - Quartile (25%)',
        value: 'Q'
      }, {
        label: ' H - High (30%)',
        value: 'H'
      }],
      onChange: value => setMeta({
        ...meta,
        "error-handling-level": value
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralSettings);

/***/ }),

/***/ "./src/qr/components/LabelSettings.jsx":
/*!*********************************************!*\
  !*** ./src/qr/components/LabelSettings.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _olegstankoptev_font_picker_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @olegstankoptev/font-picker-react */ "./node_modules/@olegstankoptev/font-picker-react/dist/FontPicker.es.js");
/* harmony import */ var _partials_ImageUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partials/ImageUploader */ "./src/qr/components/partials/ImageUploader.jsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const {
  __
} = wp.i18n;
function LabelSettings({
  noticeOperations,
  noticeUI
}) {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('postType', 'qr', 'meta');
  const [googleApiKey, setGoogleApiKey] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const fontColors = [{
    name: 'qyrr',
    color: '#6804cc'
  }, {
    name: 'white',
    color: '#fff'
  }, {
    name: 'black',
    color: '#000'
  }];
  const renderModes = () => {
    if ('' !== meta['logo-upload']) {
      return [{
        label: __('Plain', 'qyrr-code'),
        value: 'plain'
      }, {
        label: __('Label', 'qyrr-code'),
        value: 'label'
      }, {
        label: __('Logo', 'qyrr-code'),
        value: 'image'
      }];
    } else if ('' !== meta['label-text']) {
      return [{
        label: __('Plain', 'qyrr-code'),
        value: 'plain'
      }, {
        label: __('Label', 'qyrr-code'),
        value: 'label'
      }];
    } else {
      return [{
        label: __('Plain', 'qyrr-code'),
        value: 'plain'
      }];
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if ('' !== license.google_fonts_api_key) {
      setGoogleApiKey(license.google_fonts_api_key);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: __('Logo or Label', 'qyrr-code'),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
      label: __('Label Text', 'qyrr-code'),
      value: meta['label-text'],
      onChange: value => setMeta({
        ...meta,
        "label-text": value
      }),
      type: "text"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
      className: "color-palette-label",
      children: __('Logo Upload', 'qyrr-code')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "logo-uploader",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_partials_ImageUploader__WEBPACK_IMPORTED_MODULE_3__["default"], {
        noticeOperations: noticeOperations,
        noticeUI: noticeUI
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: __('Render Mode', 'qyrr-code'),
      value: meta['render-mode'],
      options: renderModes(),
      onChange: value => {
        if ('image' === value) {
          setMeta({
            ...meta,
            "error-handling-level": "H",
            "min-version": 5,
            "render-mode": value,
            "logo-max-size": 40
          });
        } else {
          setMeta({
            ...meta,
            "render-mode": value,
            "logo-max-size": 100
          });
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: __('Label / Logo Size (%)', 'qyrr-code'),
      value: meta['logo-size'],
      onChange: value => setMeta({
        ...meta,
        "logo-size": value
      }),
      initialPosition: 30,
      min: 10,
      max: meta['logo-max-size']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: __('Position X (%)', 'qyrr-code'),
      value: meta['position-x'],
      onChange: value => setMeta({
        ...meta,
        "position-x": value
      }),
      initialPosition: 50,
      min: 10,
      max: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: __('Position Y (%)', 'qyrr-code'),
      value: meta['position-y'],
      onChange: value => setMeta({
        ...meta,
        "position-y": value
      }),
      initialPosition: 50,
      min: 10,
      max: 100
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
      className: "color-palette-label",
      children: __('Select Font', 'qyrr-code')
    }), '' !== googleApiKey ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: typeof meta['font'] === 'string' && meta['font'].length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_olegstankoptev_font_picker_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        apiKey: googleApiKey,
        activeFontFamily: "sans",
        onChange: value => setMeta({
          ...meta,
          "font": value.family
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_olegstankoptev_font_picker_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        apiKey: googleApiKey,
        activeFontFamily: meta['font'],
        onChange: value => setMeta({
          ...meta,
          "font": value.family
        })
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
          children: __('You need to configure your Google Fonts API key in the settings to use other fonts.', 'qyrr-code')
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
      className: "color-palette-label",
      children: __('Font Color', 'qyrr-code')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPalette, {
      colors: fontColors,
      value: meta['font-color'],
      onChange: value => setMeta({
        ...meta,
        "font-color": value
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LabelSettings);

/***/ }),

/***/ "./src/qr/components/ShortcodeSettings.jsx":
/*!*************************************************!*\
  !*** ./src/qr/components/ShortcodeSettings.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  __
} = wp.i18n;
function ShortcodeSettings() {
  const [hasCopied, setHasCopied] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const postID = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getCurrentPostId
    } = select('core/editor');
    return getCurrentPostId();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: __('Shortcode', 'qyrr-code'),
    initialOpen: false,
    children: postID && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
        children: __('Copy the Shortcode', 'qyrr-code')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ClipboardButton, {
        variant: "secondary",
        text: `[qyrr code="${postID}"]`,
        onCopy: () => setHasCopied(true),
        onFinishCopy: () => setHasCopied(false),
        children: hasCopied ? __('Copied!', 'qyrr-code') : `[qyrr code="${postID}"]`
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortcodeSettings);

/***/ }),

/***/ "./src/qr/components/SourceSettings.jsx":
/*!**********************************************!*\
  !*** ./src/qr/components/SourceSettings.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const {
  __
} = wp.i18n;
function SourceSettings() {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_1__.useEntityProp)('postType', 'qr', 'meta');
  const [postTypes, setPostTypes] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [isDynamicUrl, setIsDynamicUrl] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [isDynamicPost, setIsDynamicPost] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const getPostTypes = () => {
    if (license.is_pro) {
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: '/qyrr/v1/selectable-post-types',
        method: 'GET'
      }).then(res => {
        setPostTypes(res);
      });
    } else {
      setPostTypes([{
        label: __('Post', 'qyrr-code'),
        value: 'post'
      }, {
        label: __('Page', 'qyrr-code'),
        value: 'page'
      }]);
    }
  };
  const posts = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getEntityRecords
    } = select('core');
    return getEntityRecords('postType', meta['post-type'], {
      per_page: -1,
      order: 'asc',
      status: 'publish'
    });
  }, [meta]);
  const postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getCurrentPostId
    } = select('core/editor');
    return getCurrentPostId();
  }, []);
  const getSelectablePosts = () => {
    if (!posts) {
      return [];
    }
    const options = [];
    posts.map(function (post) {
      if (post.title.raw && post.title.raw !== '') {
        options.push({
          label: post.title.raw,
          value: post.link
        });
      }
      return post;
    });
    return options;
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    getPostTypes();
    if (meta['source'] === '') {
      setMeta({
        "source": 'post'
      });
    }
    if (meta['dynamic-url']) {
      setIsDynamicUrl(true);
    }
    if (meta['dynamic-post']) {
      setIsDynamicPost(true);
    }
  }, [meta]);
  const sourceOptions = () => {
    if (license.is_pro) {
      return [{
        label: __('Post/Page/CPT', 'qyrr-code'),
        value: 'post'
      }, {
        label: __('External URL', 'qyrr-code'),
        value: 'url'
      }, {
        label: __('Text', 'qyrr-code'),
        value: 'text'
      }, {
        label: __('E-Mail', 'qyrr-code'),
        value: 'e-mail'
      }, {
        label: __('Phone', 'qyrr-code'),
        value: 'phone'
      }, {
        label: __('SMS', 'qyrr-code'),
        value: 'sms'
      }, {
        label: __('WhatsApp', 'qyrr-code'),
        value: 'whatsapp'
      }, {
        label: __('GEO URI (Location)', 'qyrr-code'),
        value: 'location'
      }, {
        label: __('WiFi', 'qyrr-code'),
        value: 'wifi'
      }, {
        label: __('vCard', 'qyrr-code'),
        value: 'vcard'
      }];
    } else {
      return [{
        label: __('Post/Page', 'qyrr-code'),
        value: 'post'
      }, {
        label: __('External URL', 'qyrr-code'),
        value: 'url'
      }];
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: __('Source', 'qyrr-code'),
    initialOpen: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
      label: __('Type', 'qyrr-code'),
      value: meta['source'],
      options: sourceOptions(),
      onChange: value => setMeta({
        ...meta,
        "source": value
      })
    }), meta['source'] === 'post' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [license.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
        label: __('Dynamic QR-Code', 'qyrr-code'),
        help: isDynamicPost ? __('Use a dynamic QR code where the source can be changed without changing the QR-Code. This also enables tracking.', 'qyrr-code') : __('Use a traditional QR code where the source can not be changed without changing the QR-Code.', 'qyrr-code'),
        checked: isDynamicPost,
        onChange: value => {
          setMeta({
            ...meta,
            "dynamic-post": value
          });
          setIsDynamicPost(value);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: __('Select Post-Type', 'qyrr-code'),
        value: meta['post-type'],
        options: postTypes,
        onChange: value => {
          setMeta({
            ...meta,
            "post-type": value
          });
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: __('Select Post', 'qyrr-code'),
        value: meta['post-link'],
        options: getSelectablePosts(),
        onChange: value => {
          if (isDynamicPost) {
            setMeta({
              ...meta,
              "qr-content": license.home_url + '?qyrr=' + postId,
              "post-link": value
            });
          } else {
            setMeta({
              ...meta,
              "qr-content": value,
              "post-link": value
            });
          }
        }
      })]
    }), meta['source'] === 'url' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [license.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
        label: __('Dynamic QR-Code', 'qyrr-code'),
        help: isDynamicUrl ? __('Use a dynamic QR code where the source can be changed without changing the QR-Code. This also enables tracking.', 'qyrr-code') : __('Use a traditional QR code where the source can not be changed without changing the QR-Code.', 'qyrr-code'),
        checked: isDynamicUrl,
        onChange: value => {
          setMeta({
            ...meta,
            "dynamic-url": value
          });
          setIsDynamicUrl(value);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: __('External URL', 'qyrr-code'),
        value: meta['url'],
        placeholder: "https://yourwebsite.com",
        onChange: value => {
          if (isDynamicUrl) {
            setMeta({
              ...meta,
              "qr-content": license.home_url + '?qyrr=' + postId,
              "url": value
            });
          } else {
            setMeta({
              ...meta,
              "qr-content": value,
              "url": value
            });
          }
        },
        type: "url"
      })]
    }), license.is_pro && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
      children: [meta['source'] === 'text' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
        label: __('Text', 'qyrr-code'),
        placeholder: "Add your text here..",
        value: meta['text'],
        onChange: value => setMeta({
          ...meta,
          "qr-content": value,
          "text": value
        })
      }), meta['source'] === 'e-mail' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: __('E-Mail', 'qyrr-code'),
        value: meta['e-mail'],
        placeholder: "hello@test.com",
        onChange: value => setMeta({
          ...meta,
          "qr-content": 'mailto:' + value,
          "e-mail": value
        }),
        type: "text"
      }), meta['source'] === 'phone' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
        label: __('Phone', 'qyrr-code'),
        value: meta['phone-number'],
        placeholder: "00123456",
        onChange: value => setMeta({
          ...meta,
          "qr-content": 'tel:' + value,
          "phone-number": value
        }),
        type: "phone"
      }), meta['source'] === 'sms' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Phone Number', 'qyrr-code'),
          value: meta['phone-number'],
          placeholder: "00123456",
          onChange: value => setMeta({
            ...meta,
            "phone-number": value
          }),
          type: "phone"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: __('SMS', 'qyrr-code'),
          placeholder: "Add your SMS text here..",
          value: meta['sms-text'],
          onChange: value => setMeta({
            ...meta,
            "qr-content": 'sms:' + meta['phone-number'] + '&body=' + encodeURIComponent(value),
            "sms-text": value
          })
        })]
      }), meta['source'] === 'whatsapp' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('WhatsApp Number', 'qyrr-code'),
          value: meta['phone-number'],
          placeholder: "00123456",
          onChange: value => setMeta({
            ...meta,
            "phone-number": value
          }),
          type: "phone"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextareaControl, {
          label: __('Message', 'qyrr-code'),
          placeholder: "Add your Whatsapp message here..",
          value: meta['whatsapp-text'],
          onChange: value => setMeta({
            ...meta,
            "qr-content": 'https://wa.me/' + meta['phone-number'] + '?text=' + encodeURIComponent(value),
            "whatsapp-text": value
          })
        })]
      }), meta['source'] === 'location' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Latitude', 'qyrr-code'),
          value: meta['latitude'],
          placeholder: "37.786971",
          onChange: value => setMeta({
            ...meta,
            "latitude": value
          }),
          type: "text"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Longitude', 'qyrr-code'),
          value: meta['longitude'],
          placeholder: "-122.399677",
          onChange: value => setMeta({
            ...meta,
            "longitude": value,
            "qr-content": 'geo:' + meta['latitude'] + ',' + value
          }),
          type: "text"
        })]
      }), meta['source'] === 'wifi' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
          label: __('Select WiFi Type', 'qyrr-code'),
          value: meta['wifi-type'],
          options: [{
            label: 'WPA',
            value: 'wpa'
          }, {
            label: 'WEP',
            value: 'wep'
          }, {
            label: 'nyanpass',
            value: 'nyanpass'
          }],
          onChange: value => setMeta({
            ...meta,
            "wifi-type": value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('SSID', 'qyrr-code'),
          value: meta['ssid'],
          onChange: value => setMeta({
            ...meta,
            "ssid": value
          }),
          type: "text"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Password', 'qyrr-code'),
          value: meta['password'],
          onChange: value => {
            let wifi_link;
            switch (meta['wifi-type']) {
              case 'wpa':
                wifi_link = 'WIFI:T:WPA;S:' + meta['ssid'] + ';P:' + value + ';;';
                break;
              case 'wpe':
                wifi_link = 'WIFI:T:WEP;S:' + meta['ssid'] + ';P:' + value + ';;';
                break;
              case 'nyanpass':
                wifi_link = 'WIFI:T:nopass;S:' + meta['ssid'] + ';P:' + value + ';;';
                break;
              default:
                wifi_link = 'WIFI:T:WPA;S:' + meta['ssid'] + ';P:' + value + ';;';
            }
            setMeta({
              ...meta,
              "password": value,
              "qr-content": wifi_link
            });
          },
          type: "text"
        })]
      }), meta['source'] === 'vcard' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('First name', 'qyrr-code'),
          value: meta['vcard-first-name'],
          onChange: value => setMeta({
            ...meta,
            "vcard-first-name": value
          }),
          type: "text"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Last name', 'qyrr-code'),
          value: meta['vcard-last-name'],
          onChange: value => setMeta({
            ...meta,
            "vcard-last-name": value
          }),
          type: "text"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Company', 'qyrr-code'),
          value: meta['vcard-company'],
          onChange: value => setMeta({
            ...meta,
            "vcard-company": value
          }),
          type: "text"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Address', 'qyrr-code'),
          value: meta['vcard-address'],
          placeholder: "Street;City;Zipcode",
          onChange: value => setMeta({
            ...meta,
            "vcard-address": value
          }),
          type: "text"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('Phone', 'qyrr-code'),
          value: meta['vcard-phone'],
          placeholder: "+49 999 12345",
          onChange: value => setMeta({
            ...meta,
            "vcard-phone": value
          }),
          type: "text"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('URL', 'qyrr-code'),
          value: meta['vcard-url'],
          onChange: value => setMeta({
            ...meta,
            "vcard-url": value
          }),
          type: "url"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
          label: __('E-Mail', 'qyrr-code'),
          value: meta['vcard-email'],
          onChange: value => {
            let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:" + meta['vcard-last-name'] + ";" + meta['vcard-first-name'] + "\nFN:" + meta['vcard-first-name'] + " " + meta['vcard-last-name'] + "\nORG:" + meta['vcard-company'] + "\nADR;WORK:;;" + meta['vcard-address'] + "\nTEL;WORK;VOICE:" + meta['vcard-phone'] + "\nURL:" + meta['vcard-url'] + "\nEMAIL;INTERNET:" + value + "\nEND:VCARD";
            setMeta({
              ...meta,
              "vcard-email": value,
              "qr-content": vcard
            });
          },
          type: "text"
        })]
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SourceSettings);

/***/ }),

/***/ "./src/qr/components/TemplateSettings.jsx":
/*!************************************************!*\
  !*** ./src/qr/components/TemplateSettings.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const {
  __
} = wp.i18n;
function TemplateSettings() {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_3__.useEntityProp)('postType', 'qr', 'meta');
  const [isTemplate, setIsTemplate] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(meta['template']);
  const [globalTemplateLoaded, setGlobalTemplateLoaded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const postID = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => {
    const {
      getCurrentPostId
    } = select('core/editor');
    return getCurrentPostId();
  }, []);
  const loadGlobalTemplateData = () => {
    setGlobalTemplateLoaded(true);
    setMeta(license.template_meta);
    setTimeout(function () {
      setGlobalTemplateLoaded(false);
    }, 2000);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: __('Template', 'qyrr-code'),
    initialOpen: false,
    children: postID && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ToggleControl, {
        label: __('Save as Template', 'qyrr-code'),
        help: isTemplate ? __('Saves the current QR code as a template. You can select a global template for new QR codes in Qyrr->Settings->Global Template.', 'qyrr-code') : '',
        checked: isTemplate,
        onChange: value => {
          setMeta({
            ...meta,
            "template": value
          });
          setIsTemplate(value);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
        onClick: loadGlobalTemplateData,
        variant: "secondary",
        children: __('Load from Global Template', 'qyrr-code')
      }), globalTemplateLoaded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Animate, {
        type: "slide-in",
        options: {
          origin: 'top'
        },
        children: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Notice, {
          status: "success",
          isDismissible: false,
          children: __('Global Template styles successfully imported.', 'qyrr-code')
        })
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TemplateSettings);

/***/ }),

/***/ "./src/qr/components/partials/ImageUploader.jsx":
/*!******************************************************!*\
  !*** ./src/qr/components/partials/ImageUploader.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const {
  __
} = wp.i18n;
function ImageUploader({
  noticeOperations,
  noticeUI
}) {
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__.useEntityProp)('postType', 'qr', 'meta');
  const onSelectImage = image => {
    if (!image || !image.url) {
      setMeta({
        ...meta,
        "logo-upload": ''
      });
      return;
    }
    setMeta({
      ...meta,
      "logo-upload": image.url,
      'render-mode': 'image',
      "error-handling-level": "H",
      "min-version": 5,
      "logo-max-size": 40
    });
  };
  const onUploadError = message => {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  };
  const removeImage = () => {
    setMeta({
      'logo-upload': null,
      'render-mode': 'plain'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    children: meta['logo-upload'] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "image-placeholder",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: meta['logo-upload']
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaReplaceFlow, {
        name: __('Replace Image', 'qyrr-code'),
        onSelect: onSelectImage,
        onError: onUploadError,
        accept: "image/*",
        allowedTypes: ['image'],
        mediaURL: meta['logo-upload']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        variant: "secondary",
        onClick: removeImage,
        children: __('Remove Image', 'qyrr-code')
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaPlaceholder, {
      icon: "format-image",
      onSelect: onSelectImage,
      onError: onUploadError,
      accept: "image/*",
      allowedTypes: ['image'],
      notices: noticeUI
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUploader);

/***/ }),

/***/ "./src/qr/icons.js":
/*!*************************!*\
  !*** ./src/qr/icons.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.qr_code = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  viewBox: "0 0 16 16",
  xmlns: "http://www.w3.org/2000/svg",
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinejoin: "round",
  strokeMiterlimit: "2",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M51.2 51.2H102.4V102.4H51.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M358.4 0v25.6h-25.6v25.6h25.6v102.4H384v25.6h-25.6v25.6h51.2v-51.2h76.8v25.6H512V0H358.4Zm128 128H384V25.6h102.4V128Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M409.6 51.2H460.8V102.4H409.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M51.2 409.6H102.4V460.8H51.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M358.4 358.4H384V384H358.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M230.4 486.4H256V512H230.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M256 384H281.6V409.6H256z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M256 435.2H281.6V460.8H256z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M486.4 307.2H512V332.8H486.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M0 307.2H25.6V332.8H0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M0 179.2H25.6V204.8H0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M281.6 25.6v25.6h-51.2v25.6h76.8V25.6h-25.6ZM486.4 204.8v25.6h-51.2V256h-76.8v-25.6h-25.6V256h-51.2v25.6h76.8v25.6h-76.8v-25.6H256v25.6h-25.6v-25.6h-25.6v25.6h-25.6v25.6h51.2v25.6H256v-25.6h51.2v25.6h-25.6V384h25.6v51.2h25.6v25.6h25.6v-25.6h76.8V384h25.6v-25.6h-25.6v-51.2H384v-25.6h51.2v25.6h25.6v-25.6h25.6V256H512v-51.2h-25.6Zm-76.8 128v76.8h-76.8v-76.8h76.8ZM358.4 153.6h-51.2v25.6h-25.6v51.2h25.6v-25.6h25.6v-25.6h25.6v-25.6Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M281.6 486.4H332.8V512H281.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M204.8 25.6H230.4V51.2H204.8z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M409.6 204.8H435.2V230.4H409.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M435.2 179.2H460.8V204.8H435.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M102.4 307.2H128V332.8H102.4z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M153.6 486.4V384h25.6v-51.2h-25.6v25.6H76.8v-25.6H25.6v25.6H0V512h204.8v-25.6h-51.2Zm-25.6 0H25.6V384H128v102.4Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M153.6 153.6H179.2V179.2H153.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M204.8 0H0v153.6h25.6v25.6h25.6v-25.6h25.6v25.6h25.6v-25.6h51.2v-51.2h25.6V76.8h-25.6V25.6h51.2V0ZM128 128H25.6V25.6H128V128Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M307.2 76.8H332.8V102.4H307.2z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    transform: "scale(.03139)",
    d: "M256 0H281.6V25.6H256z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M307.2 153.6V128h-25.6v-25.6H256V128h-51.2v-25.6h-25.6v51.2h25.6v51.2H128v-25.6h-25.6v25.6H25.6v25.6h51.2V256H0v25.6h76.8v25.6h25.6v-25.6H128v25.6h25.6v-25.6h51.2V256h-25.6v-25.6h51.2V256h51.2v-25.6H256v-25.6h-25.6v-51.2h76.8ZM153.6 256h-51.2v-25.6h51.2V256ZM230.4 409.6v-51.2h-25.6V384h-25.6v25.6h25.6v25.6h-25.6v25.6h51.2v-25.6H256v-25.6h-25.6ZM460.8 460.8v-25.6h-25.6v25.6h-76.8v25.6h51.2V512h25.6v-25.6h51.2V512H512v-51.2h-51.2ZM486.4 358.4V384h-25.6v25.6H512v-51.2h-25.6Z",
    fillRule: "nonzero",
    transform: "scale(.03139)"
  })]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g?__webpack_require__.g:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g, true&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/kjua/dist/kjua.min.js":
/*!********************************************!*\
  !*** ./node_modules/kjua/dist/kjua.min.js ***!
  \********************************************/
/***/ (function(module) {

/*! kjua v0.9.0 - https://larsjung.de/kjua/ */
!function(t,r){ true?module.exports=r():0}("undefined"!=typeof self?self:this,function(){return n={},o.m=e=[function(t,r,e){function n(t){var r=Object.assign({},o,t),e=i(r.text,r.ecLevel,r.minVersion,r.quiet);return"svg"===r.render?u(e,r):a(e,r,"image"===r.render)}var o=e(1),i=e(2),a=e(4),u=e(8);t.exports=n;try{jQuery.fn.kjua=function(e){return this.each(function(t,r){return r.appendChild(n(e))})}}catch(t){}},function(t,r){t.exports={render:"image",crisp:!0,minVersion:1,ecLevel:"L",size:200,ratio:null,fill:"#333",back:"#fff",text:"no text",rounded:0,quiet:0,mode:"plain",mSize:30,mPosX:50,mPosY:50,label:"no label",fontname:"sans",fontcolor:"#333",image:null}},function(t,r,e){function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var f=/code length overflow/i,c=e(3);c.stringToBytes=c.stringToBytesFuncs["UTF-8"];t.exports=function(t,r,e,n){var o,i=3<arguments.length&&void 0!==n?n:0,a=function(t,r,e){for(var n=2<arguments.length&&void 0!==e?e:1,o=n=Math.max(1,n);o<=40;o+=1)try{var i=function(){var e=c(o,r);e.addData(t),e.make();var n=e.getModuleCount();return{v:{text:t,level:r,version:o,module_count:n,is_dark:function(t,r){return 0<=t&&t<n&&0<=r&&r<n&&e.isDark(t,r)}}}}();if("object"===u(i))return i.v}catch(t){if(!(o<40&&f.test(t)))throw new Error(t)}return null}(0<arguments.length&&void 0!==t?t:"",1<arguments.length&&void 0!==r?r:"L",2<arguments.length&&void 0!==e?e:1);return a&&(o=a.is_dark,a.module_count+=2*i,a.is_dark=function(t,r){return o(t-i,r-i)}),a}},function(t,r,e){var n,o,i,a=function(){function i(t,r){function a(t,r){l=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(s=4*u+17),e(0,0),e(s-7,0),e(0,s-7),i(),o(),d(t,r),7<=u&&g(t),null==n&&(n=p(u,f,c)),v(n,r)}var u=t,f=w[r],l=null,s=0,n=null,c=[],h={},e=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||s<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||s<=r+n||(l[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},o=function(){for(var t=8;t<s-8;t+=1)null==l[t][6]&&(l[t][6]=t%2==0);for(var r=8;r<s-8;r+=1)null==l[6][r]&&(l[6][r]=r%2==0)},i=function(){for(var t=m.getPatternPosition(u),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],o=t[e];if(null==l[n][o])for(var i=-2;i<=2;i+=1)for(var a=-2;a<=2;a+=1)l[n+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a}},g=function(t){for(var r=m.getBCHTypeNumber(u),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);l[Math.floor(e/3)][e%3+s-8-3]=n}for(e=0;e<18;e+=1){n=!t&&1==(r>>e&1);l[e%3+s-8-3][Math.floor(e/3)]=n}},d=function(t,r){for(var e=f<<3|r,n=m.getBCHTypeInfo(e),o=0;o<15;o+=1){var i=!t&&1==(n>>o&1);o<6?l[o][8]=i:o<8?l[o+1][8]=i:l[s-15+o][8]=i}for(o=0;o<15;o+=1){i=!t&&1==(n>>o&1);o<8?l[8][s-o-1]=i:o<9?l[8][15-o-1+1]=i:l[8][15-o-1]=i}l[s-8][8]=!t},v=function(t,r){for(var e=-1,n=s-1,o=7,i=0,a=m.getMaskFunction(r),u=s-1;0<u;u-=2)for(6==u&&--u;;){for(var f,c=0;c<2;c+=1){null==l[n][u-c]&&(f=!1,i<t.length&&(f=1==(t[i]>>>o&1)),a(n,u-c)&&(f=!f),l[n][u-c]=f,-1==--o&&(i+=1,o=7))}if((n+=e)<0||s<=n){n-=e,e=-e;break}}},p=function(t,r,e){for(var n=S.getRSBlocks(t,r),o=M(),i=0;i<e.length;i+=1){var a=e[i];o.put(a.getMode(),4),o.put(a.getLength(),m.getLengthInBits(a.getMode(),t)),a.write(o)}for(var u=0,i=0;i<n.length;i+=1)u+=n[i].dataCount;if(o.getLengthInBits()>8*u)throw"code length overflow. ("+o.getLengthInBits()+">"+8*u+")";for(o.getLengthInBits()+4<=8*u&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*u||(o.put(236,8),o.getLengthInBits()>=8*u));)o.put(17,8);return function(t,r){for(var e=0,n=0,o=0,i=new Array(r.length),a=new Array(r.length),u=0;u<r.length;u+=1){var f=r[u].dataCount,c=r[u].totalCount-f,n=Math.max(n,f),o=Math.max(o,c);i[u]=new Array(f);for(var l=0;l<i[u].length;l+=1)i[u][l]=255&t.getBuffer()[l+e];e+=f;var s=m.getErrorCorrectPolynomial(c),g=b(i[u],s.getLength()-1).mod(s);a[u]=new Array(s.getLength()-1);for(l=0;l<a[u].length;l+=1){var h=l+g.getLength()-a[u].length;a[u][l]=0<=h?g.getAt(h):0}}for(var d=0,l=0;l<r.length;l+=1)d+=r[l].totalCount;for(var v=new Array(d),p=0,l=0;l<n;l+=1)for(u=0;u<r.length;u+=1)l<i[u].length&&(v[p]=i[u][l],p+=1);for(l=0;l<o;l+=1)for(u=0;u<r.length;u+=1)l<a[u].length&&(v[p]=a[u][l],p+=1);return v}(o,n)};h.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=A(t);break;case"Alphanumeric":e=L(t);break;case"Byte":e=D(t);break;case"Kanji":e=_(t);break;default:throw"mode:"+r}c.push(e),n=null},h.isDark=function(t,r){if(t<0||s<=t||r<0||s<=r)throw t+","+r;return l[t][r]},h.getModuleCount=function(){return s},h.make=function(){if(u<1){for(var t=1;t<40;t++){for(var r=S.getRSBlocks(t,f),e=M(),n=0;n<c.length;n++){var o=c[n];e.put(o.getMode(),4),e.put(o.getLength(),m.getLengthInBits(o.getMode(),t)),o.write(e)}for(var i=0,n=0;n<r.length;n++)i+=r[n].dataCount;if(e.getLengthInBits()<=8*i)break}u=t}a(!1,function(){for(var t=0,r=0,e=0;e<8;e+=1){a(!0,e);var n=m.getLostPoint(h);(0==e||n<t)&&(t=n,r=e)}return r}())},h.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<h.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<h.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=h.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},h.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f=h.getModuleCount()*t+2*r,c="",l="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ";for(c+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',c+=o.scalable?"":' width="'+f+'px" height="'+f+'px"',c+=' viewBox="0 0 '+f+" "+f+'" ',c+=' preserveAspectRatio="xMinYMin meet"',c+=n.text||e.text?' role="img" aria-labelledby="'+y([n.id,e.id].join(" ").trim())+'"':"",c+=">",c+=n.text?'<title id="'+y(n.id)+'">'+y(n.text)+"</title>":"",c+=e.text?'<description id="'+y(e.id)+'">'+y(e.text)+"</description>":"",c+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',c+='<path d="',a=0;a<h.getModuleCount();a+=1)for(u=a*t+r,i=0;i<h.getModuleCount();i+=1)h.isDark(a,i)&&(c+="M"+(i*t+r)+","+u+l);return c+='" stroke="transparent" fill="black"/>',c+="</svg>"},h.createDataURL=function(o,t){o=o||2,t=void 0===t?4*o:t;var r=h.getModuleCount()*o+2*t,i=t,a=r-t;return P(r,r,function(t,r){if(i<=t&&t<a&&i<=r&&r<a){var e=Math.floor((t-i)/o),n=Math.floor((r-i)/o);return h.isDark(n,e)?0:1}return 1})},h.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=h.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=h.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=y(e),o+='"'),o+="/>"};var y=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return h.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;for(var r,e,n,o,i=+h.getModuleCount()+2*t,a=t,u=i-t,f={"██":"█","█ ":"▀"," █":"▄","  ":" "},c={"██":"▀","█ ":"▀"," █":" ","  ":" "},l="",s=0;s<i;s+=2){for(e=Math.floor(s-a),n=Math.floor(s+1-a),r=0;r<i;r+=1)o="█",a<=r&&r<u&&a<=s&&s<u&&h.isDark(e,Math.floor(r-a))&&(o=" "),a<=r&&r<u&&a<=s+1&&s+1<u&&h.isDark(n,Math.floor(r-a))?o+=" ":o+="█",l+=t<1&&u<=s+1?c[o]:f[o];l+="\n"}return i%2&&0<t?l.substring(0,l.length-i-1)+Array(1+i).join("▀"):l.substring(0,l.length-1)}(r);--t,r=void 0===r?2*t:r;for(var e,n,o,i=h.getModuleCount()*t+2*r,a=r,u=i-r,f=Array(t+1).join("██"),c=Array(t+1).join("  "),l="",s="",g=0;g<i;g+=1){for(n=Math.floor((g-a)/t),s="",e=0;e<i;e+=1)o=1,a<=e&&e<u&&a<=g&&g<u&&h.isDark(n,Math.floor((e-a)/t))&&(o=0),s+=o?f:c;for(n=0;n<t;n+=1)l+=s+"\n"}return l.substring(0,l.length-1)},h.renderTo2dContext=function(t,r){r=r||2;for(var e=h.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=h.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},h}i.stringToBytes=(i.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,i.createStringToBytes=function(u,f){var i=function(){function t(){var t=r.read();if(-1==t)throw"eof";return t}for(var r=z(u),e=0,n={};;){var o=r.read();if(-1==o)break;var i=t(),a=t()<<8|t();n[String.fromCharCode(o<<8|i)]=a,e+=1}if(e!=f)throw e+" != "+f;return n}(),a="?".charCodeAt(0);return function(t){for(var r=[],e=0;e<t.length;e+=1){var n,o=t.charCodeAt(e);o<128?r.push(o):"number"==typeof(n=i[t.charAt(e)])?(255&n)==n?r.push(n):(r.push(n>>>8),r.push(255&n)):r.push(a)}return r}};var r,t,a=1,u=2,o=4,f=8,w={L:1,M:0,Q:3,H:2},e=0,n=1,c=2,l=3,s=4,g=5,h=6,d=7,m=(r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],(t={}).getBCHTypeInfo=function(t){for(var r=t<<10;0<=v(r)-v(1335);)r^=1335<<v(r)-v(1335);return 21522^(t<<10|r)},t.getBCHTypeNumber=function(t){for(var r=t<<12;0<=v(r)-v(7973);)r^=7973<<v(r)-v(7973);return t<<12|r},t.getPatternPosition=function(t){return r[t-1]},t.getMaskFunction=function(t){switch(t){case e:return function(t,r){return(t+r)%2==0};case n:return function(t,r){return t%2==0};case c:return function(t,r){return r%3==0};case l:return function(t,r){return(t+r)%3==0};case s:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case g:return function(t,r){return t*r%2+t*r%3==0};case h:return function(t,r){return(t*r%2+t*r%3)%2==0};case d:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},t.getErrorCorrectPolynomial=function(t){for(var r=b([1],0),e=0;e<t;e+=1)r=r.multiply(b([1,p.gexp(e)],0));return r},t.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case a:return 10;case u:return 9;case o:case f:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case a:return 12;case u:return 11;case o:return 16;case f:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case a:return 14;case u:return 13;case o:return 16;case f:return 12;default:throw"mode:"+t}}},t.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);5<i&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);for(var l=0,o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(l+=1);return e+=Math.abs(100*l/r/r-50)/5*10},t);function v(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r}var p=function(){for(var r=new Array(256),e=new Array(256),t=0;t<8;t+=1)r[t]=1<<t;for(t=8;t<256;t+=1)r[t]=r[t-4]^r[t-5]^r[t-6]^r[t-8];for(t=0;t<255;t+=1)e[r[t]]=t;var n={glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return r[t]}};return n}();function b(n,o){if(void 0===n.length)throw n.length+"/"+o;var r=function(){for(var t=0;t<n.length&&0==n[t];)t+=1;for(var r=new Array(n.length-t+o),e=0;e<n.length-t;e+=1)r[e]=n[e+t];return r}(),i={getAt:function(t){return r[t]},getLength:function(){return r.length},multiply:function(t){for(var r=new Array(i.getLength()+t.getLength()-1),e=0;e<i.getLength();e+=1)for(var n=0;n<t.getLength();n+=1)r[e+n]^=p.gexp(p.glog(i.getAt(e))+p.glog(t.getAt(n)));return b(r,0)},mod:function(t){if(i.getLength()-t.getLength()<0)return i;for(var r=p.glog(i.getAt(0))-p.glog(t.getAt(0)),e=new Array(i.getLength()),n=0;n<i.getLength();n+=1)e[n]=i.getAt(n);for(n=0;n<t.getLength();n+=1)e[n]^=p.gexp(p.glog(t.getAt(n))+r);return b(e,0).mod(t)}};return i}function y(){var e=[],o={writeByte:function(t){e.push(255&t)},writeShort:function(t){o.writeByte(t),o.writeByte(t>>>8)},writeBytes:function(t,r,e){r=r||0,e=e||t.length;for(var n=0;n<e;n+=1)o.writeByte(t[n+r])},writeString:function(t){for(var r=0;r<t.length;r+=1)o.writeByte(t.charCodeAt(r))},toByteArray:function(){return e},toString:function(){var t="";t+="[";for(var r=0;r<e.length;r+=1)0<r&&(t+=","),t+=e[r];return t+="]"}};return o}function x(){function e(t){a+=String.fromCharCode(r(63&t))}var n=0,o=0,i=0,a="",t={},r=function(t){if(!(t<0)){if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return t.writeByte=function(t){for(n=n<<8|255&t,o+=8,i+=1;6<=o;)e(n>>>o-6),o-=6},t.flush=function(){if(0<o&&(e(n<<6-o),o=n=0),i%3!=0)for(var t=3-i%3,r=0;r<t;r+=1)a+="="},t.toString=function(){return a},t}function k(t,r){var n=t,o=r,d=new Array(t*r),e={setPixel:function(t,r,e){d[r*n+t]=e},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(o),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(o),t.writeByte(0);var r=i(2);t.writeByte(2);for(var e=0;255<r.length-e;)t.writeByte(255),t.writeBytes(r,e,255),e+=255;t.writeByte(r.length-e),t.writeBytes(r,e,r.length-e),t.writeByte(0),t.writeString(";")}},i=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,o=v(),i=0;i<r;i+=1)o.add(String.fromCharCode(i));o.add(String.fromCharCode(r)),o.add(String.fromCharCode(e));var a,u,f,c=y(),l=(a=c,f=u=0,{write:function(t,r){if(t>>>r!=0)throw"length over";for(;8<=u+r;)a.writeByte(255&(t<<u|f)),r-=8-u,t>>>=8-u,u=f=0;f|=t<<u,u+=r},flush:function(){0<u&&a.writeByte(f)}});l.write(r,n);var s=0,g=String.fromCharCode(d[s]);for(s+=1;s<d.length;){var h=String.fromCharCode(d[s]);s+=1,o.contains(g+h)?g+=h:(l.write(o.indexOf(g),n),o.size()<4095&&(o.size()==1<<n&&(n+=1),o.add(g+h)),g=h)}return l.write(o.indexOf(g),n),l.write(e,n),l.flush(),c.toByteArray()},v=function(){var r={},e=0,n={add:function(t){if(n.contains(t))throw"dup key:"+t;r[t]=e,e+=1},size:function(){return e},indexOf:function(t){return r[t]},contains:function(t){return void 0!==r[t]}};return n};return e}var B,C,S=(B=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],(C={}).getRSBlocks=function(t,r){var e=function(t,r){switch(r){case w.L:return B[4*(t-1)+0];case w.M:return B[4*(t-1)+1];case w.Q:return B[4*(t-1)+2];case w.H:return B[4*(t-1)+3];default:return}}(t,r);if(void 0===e)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+r;for(var n,o,i=e.length/3,a=[],u=0;u<i;u+=1)for(var f=e[3*u+0],c=e[3*u+1],l=e[3*u+2],s=0;s<f;s+=1)a.push((n=l,o=void 0,(o={}).totalCount=c,o.dataCount=n,o));return a},C),M=function(){var e=[],n=0,o={getBuffer:function(){return e},getAt:function(t){var r=Math.floor(t/8);return 1==(e[r]>>>7-t%8&1)},put:function(t,r){for(var e=0;e<r;e+=1)o.putBit(1==(t>>>r-e-1&1))},getLengthInBits:function(){return n},putBit:function(t){var r=Math.floor(n/8);e.length<=r&&e.push(0),t&&(e[r]|=128>>>n%8),n+=1}};return o},A=function(t){var r=a,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+2<r.length;)t.put(o(r.substring(e,e+3)),10),e+=3;e<r.length&&(r.length-e==1?t.put(o(r.substring(e,e+1)),4):r.length-e==2&&t.put(o(r.substring(e,e+2)),7))}},o=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+i(t.charAt(e));return r},i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return e},L=function(t){var r=u,n=t,e={getMode:function(){return r},getLength:function(t){return n.length},write:function(t){for(var r=n,e=0;e+1<r.length;)t.put(45*o(r.charAt(e))+o(r.charAt(e+1)),11),e+=2;e<r.length&&t.put(o(r.charAt(e)),6)}},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return e},D=function(t){var r=o,e=i.stringToBytes(t),n={getMode:function(){return r},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}};return n},_=function(t){var r=f,e=i.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(){var t=e("友");if(2!=t.length||38726!=(t[0]<<8|t[1]))throw"sjis not supported."}();var o=e(t),n={getMode:function(){return r},getLength:function(t){return~~(o.length/2)},write:function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}};return n},z=function(t){var e=t,n=0,o=0,i=0,r={read:function(){for(;i<8;){if(n>=e.length){if(0==i)return-1;throw"unexpected end of file./"+i}var t=e.charAt(n);if(n+=1,"="==t)return i=0,-1;t.match(/^\s$/)||(o=o<<6|a(t.charCodeAt(0)),i+=6)}var r=o>>>i-8&255;return i-=8,r}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return r},P=function(t,r,e){for(var n=k(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=y();n.write(a);for(var u=x(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return i}();a.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||57344<=n?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},o=[],void 0===(i="function"==typeof(n=function(){return a})?n.apply(r,o):n)||(t.exports=i)},function(t,r,e){function c(t,r,e,n,o,i){t.is_dark(o,i)&&r.rect(i*n,o*n,n,n)}function a(t,r,e){var n,o;n=r,(o=e).back&&(n.fillStyle=o.back,n.fillRect(0,0,o.size,o.size)),function(t,r,e){if(t){var n=0<e.rounded&&e.rounded<=100?l:c,o=t.module_count,i=e.size/o,a=0;e.crisp&&(i=Math.floor(i),a=Math.floor((e.size-i*o)/2)),r.translate(a,a),r.beginPath();for(var u=0;u<o;u+=1)for(var f=0;f<o;f+=1)n(t,r,e,i,u,f);r.fillStyle=e.fill,r.fill(),r.translate(-a,-a)}}(t,r,e),i(r,e)}var u=e(5),l=e(6),i=e(7);t.exports=function(t,r,e){var n=r.ratio||u.dpr,o=u.create_canvas(r.size,n),i=o.getContext("2d");return i.scale(n,n),a(t,i,r),e?u.canvas_to_img(o):o}},function(t,r){function e(t,r){return t.getAttribute(r)}function n(r,e){return Object.keys(e||{}).forEach(function(t){r.setAttribute(t,e[t])}),r}function o(t,r){return n(a.createElement(t),r)}var i=window,a=i.document,u=i.devicePixelRatio||1,f="http://www.w3.org/2000/svg";t.exports={dpr:u,SVG_NS:f,get_attr:e,create_el:o,create_svg_el:function(t,r){return n(a.createElementNS(f,t),r)},create_canvas:function(t,r){var e=o("canvas",{width:t*r,height:t*r});return e.style.width="".concat(t,"px"),e.style.height="".concat(t,"px"),e},canvas_to_img:function(t){var r=o("img",{crossOrigin:"anonymous",src:t.toDataURL("image/png"),width:e(t,"width"),height:e(t,"height")});return r.style.width=t.style.width,r.style.height=t.style.height,r}}},function(t,r){t.exports=function(t,r,e,n,o,i){var a,u,f,c,l,s,g,h,d,v,p,y,w,m,b,x,k,B,C,S,M=i*n,A=o*n,L=M+n,D=A+n,_=.005*e.rounded*n,z=t.is_dark,P=o-1,T=o+1,j=i-1,I=i+1,O=z(o,i),R=z(P,j),F=z(P,i),H=z(P,I),N=z(o,I),E=z(T,I),Y=z(T,i),q=z(T,j),U=z(o,j),W=(a=r,{m:function(t,r){return a.moveTo(t,r),this},l:function(t,r){return a.lineTo(t,r),this},a:function(){return a.arcTo.apply(a,arguments),this}});O?(p=W,y=M,w=A,m=L,b=D,x=_,B=!F&&!N,C=!Y&&!N,S=!Y&&!U,(k=!F&&!U)?p.m(y+x,w):p.m(y,w),B?p.l(m-x,w).a(m,w,m,b,x):p.l(m,w),C?p.l(m,b-x).a(m,b,y,b,x):p.l(m,b),S?p.l(y+x,b).a(y,b,y,w,x):p.l(y,b),k?p.l(y,w+x).a(y,w,m,w,x):p.l(y,w)):(u=W,f=M,c=A,l=L,s=D,g=_,h=F&&N&&H,d=Y&&N&&E,v=Y&&U&&q,F&&U&&R&&u.m(f+g,c).l(f,c).l(f,c+g).a(f,c,f+g,c,g),h&&u.m(l-g,c).l(l,c).l(l,c+g).a(l,c,l-g,c,g),d&&u.m(l-g,s).l(l,s).l(l,s-g).a(l,s,l-g,s,g),v&&u.m(f+g,s).l(f,s).l(f,s-g).a(f,s,f+g,s,g))}},function(t,r){t.exports=function(t,r){var e,n,o,i,a,u,f,c,l,s,g,h=r.mode;"label"===h?function(t,r){var e=r.size,n="bold "+.01*r.mSize*e+"px "+r.fontname;t.strokeStyle=r.back,t.lineWidth=.01*r.mSize*e*.1,t.fillStyle=r.fontcolor,t.font=n;var o=t.measureText(r.label).width,i=.01*r.mSize,a=(1-o/e)*r.mPosX*.01*e,u=(1-i)*r.mPosY*.01*e+.75*r.mSize*.01*e;t.strokeText(r.label,a,u),t.fillText(r.label,a,u)}(t,r):"image"===h&&(e=t,o=(n=r).size,i=n.image.naturalWidth||1,a=n.image.naturalHeight||1,u=.01*n.mSize,c=(1-(f=u*i/a))*n.mPosX*.01*o,l=(1-u)*n.mPosY*.01*o,s=f*o,g=u*o,e.drawImage(n.image,c,l,s,g))}},function(t,r,y){function J(n){function o(t){return Math.round(10*t)/10}function i(t){return Math.round(10*t)/10+n.o}return{m:function(t,r){return n.p+="M ".concat(i(t)," ").concat(i(r)," "),this},l:function(t,r){return n.p+="L ".concat(i(t)," ").concat(i(r)," "),this},a:function(t,r,e){return n.p+="A ".concat(o(e)," ").concat(o(e)," 0 0 1 ").concat(i(t)," ").concat(i(r)," "),this}}}var e=y(5),w=e.SVG_NS,m=e.get_attr,b=e.create_svg_el;t.exports=function(t,r){var e,n,o,i,a,u,f,c,l,s,g,h,d=r.size,v=r.mode,p=b("svg",{xmlns:w,width:d,height:d,viewBox:"0 0 ".concat(d," ").concat(d)});return p.style.width="".concat(d,"px"),p.style.height="".concat(d,"px"),r.back&&p.appendChild(b("rect",{x:0,y:0,width:d,height:d,fill:r.back})),p.appendChild(b("path",{d:function(t,r){if(!t)return"";var e={p:"",o:0},n=t.module_count,o=r.size/n;r.crisp&&(o=Math.floor(o),e.o=Math.floor((r.size-o*n)/2));for(var i,a,u,f,c,l,s,g,h,d,v,p,y,w,m,b,x,k,B,C,S,M,A,L,D,_,z,P,T,j,I,O,R,F,H,N,E,Y,q,U,W,X,V,G=J(e),Q=0;Q<n;Q+=1)for(var $=0;$<n;$+=1)i=t,a=G,V=X=W=U=q=Y=E=N=H=F=R=O=I=j=T=P=z=_=D=L=A=M=S=C=B=k=x=b=m=w=y=p=v=d=h=g=s=l=void 0,z=(D=(c=$)*(u=o))+u,P=(_=(f=Q)*u)+u,T=.005*r.rounded*u,j=i.is_dark,I=f-1,O=f+1,R=c-1,F=c+1,H=j(f,c),N=j(I,R),E=j(I,c),Y=j(I,F),q=j(f,F),U=j(O,F),W=j(O,c),X=j(O,R),V=j(f,R),H?(m=a,b=D,x=_,k=z,B=P,C=T,M=!E&&!q,A=!W&&!q,L=!W&&!V,(S=!E&&!V)?m.m(b+C,x):m.m(b,x),M?m.l(k-C,x).a(k,x+C,C):m.l(k,x),A?m.l(k,B-C).a(k-C,B,C):m.l(k,B),L?m.l(b+C,B).a(b,B-C,C):m.l(b,B),S?m.l(b,x+C).a(b+C,x,C):m.l(b,x)):(l=a,s=D,g=_,h=z,d=P,v=T,p=E&&q&&Y,y=W&&q&&U,w=W&&V&&X,E&&V&&N&&l.m(s+v,g).l(s,g).l(s,g+v).a(s+v,g,v),p&&l.m(h,g+v).l(h,g).l(h-v,g).a(h,g+v,v),y&&l.m(h-v,d).l(h,d).l(h,d-v).a(h-v,d,v),w&&l.m(s,d-v).l(s,d).l(s+v,d).a(s,d-v,v));return e.p}(t,r),fill:r.fill})),"label"===v?function(t,r){var e=r.size,n="bold "+.01*r.mSize*e+"px "+r.fontname,o=y(5),i=r.ratio||o.dpr,a=o.create_canvas(e,i).getContext("2d");a.strokeStyle=r.back,a.lineWidth=.01*r.mSize*e*.1,a.fillStyle=r.fontcolor,a.font=n;var u=a.measureText(r.label).width,f=.01*r.mSize,c=(1-u/e)*r.mPosX*.01*e,l=(1-f)*r.mPosY*.01*e+.75*r.mSize*.01*e,s=b("text",{x:c,y:l});Object.assign(s.style,{font:n,fill:r.fontcolor,"paint-order":"stroke",stroke:r.back,"stroke-width":a.lineWidth}),s.textContent=r.label,t.appendChild(s)}(p,r):"image"===v&&(e=p,o=(n=r).size,i=n.image.naturalWidth||1,a=n.image.naturalHeight||1,u=.01*n.mSize,c=(1-(f=u*i/a))*n.mPosX*.01*o,l=(1-u)*n.mPosY*.01*o,s=f*o,g=u*o,h=b("image",{href:m(n.image,"src"),x:c,y:l,width:s,height:g}),e.appendChild(h)),p}}],o.c=n,o.d=function(t,r,e){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(r,t){if(1&t&&(r=o(r)),8&t)return r;if(4&t&&"object"==typeof r&&r&&r.__esModule)return r;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:r}),2&t&&"string"!=typeof r)for(var n in r)o.d(e,n,function(t){return r[t]}.bind(null,n));return e},o.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="",o(o.s=0);function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var e,n});

/***/ }),

/***/ "./src/qr/editor.scss":
/*!****************************!*\
  !*** ./src/qr/editor.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-kjua/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-kjua/dist/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Kjua = void 0;
var React = __webpack_require__(/*! react */ "react");
var kjua = __webpack_require__(/*! kjua */ "./node_modules/kjua/dist/kjua.min.js");
var Kjua = /** @class */ (function (_super) {
    __extends(Kjua, _super);
    function Kjua(props) {
        var _this = _super.call(this, props) || this;
        _this.el = React.createRef();
        return _this;
    }
    Kjua.prototype.componentDidMount = function () {
        this.update();
    };
    Kjua.prototype.componentDidUpdate = function () {
        this.el.current.removeChild(this.qr);
        this.update();
    };
    Kjua.prototype.update = function () {
        this.qr = kjua(this.props);
        this.el.current.appendChild(this.qr);
    };
    Kjua.prototype.render = function () {
        return React.createElement('div', {
            ref: this.el
        });
    };
    return Kjua;
}(React.PureComponent));
exports.Kjua = Kjua;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/qr/block.json":
/*!***************************!*\
  !*** ./src/qr/block.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"qyrr-code/qr","icon":"<svg xmlns=\'http://www.w3.org/2000/svg\' fillrule=\'evenodd\' cliprule=\'evenodd\' strokelinejoin=\'round\' strokemiterlimit=\'2\' viewBox=\'0 0 16.08 16.08\'><path transform=\'scale(.03139)\' d=\'M51.2 51.2H102.4V102.4H51.2z\'></path>     <path d=\'M358.4 0v25.6h-25.6v25.6h25.6v102.4H384v25.6h-25.6v25.6h51.2v-51.2h76.8v25.6H512V0H358.4Zm128 128H384V25.6h102.4V128Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path>     <path transform=\'scale(.03139)\' d=\'M409.6 51.2H460.8V102.4H409.6z\'></path>     <path transform=\'scale(.03139)\' d=\'M51.2 409.6H102.4V460.8H51.2z\'></path>     <path transform=\'scale(.03139)\' d=\'M358.4 358.4H384V384H358.4z\'></path>     <path transform=\'scale(.03139)\' d=\'M230.4 486.4H256V512H230.4z\'></path>     <path transform=\'scale(.03139)\' d=\'M256 384H281.6V409.6H256z\'></path>     <path transform=\'scale(.03139)\' d=\'M256 435.2H281.6V460.8H256z\'></path>     <path transform=\'scale(.03139)\' d=\'M486.4 307.2H512V332.8H486.4z\'></path>     <path transform=\'scale(.03139)\' d=\'M0 307.2H25.6V332.8H0z\'></path>     <path transform=\'scale(.03139)\' d=\'M0 179.2H25.6V204.8H0z\'></path>     <path d=\'M281.6 25.6v25.6h-51.2v25.6h76.8V25.6h-25.6ZM486.4 204.8v25.6h-51.2V256h-76.8v-25.6h-25.6V256h-51.2v25.6h76.8v25.6h-76.8v-25.6H256v25.6h-25.6v-25.6h-25.6v25.6h-25.6v25.6h51.2v25.6H256v-25.6h51.2v25.6h-25.6V384h25.6v51.2h25.6v25.6h25.6v-25.6h76.8V384h25.6v-25.6h-25.6v-51.2H384v-25.6h51.2v25.6h25.6v-25.6h25.6V256H512v-51.2h-25.6Zm-76.8 128v76.8h-76.8v-76.8h76.8ZM358.4 153.6h-51.2v25.6h-25.6v51.2h25.6v-25.6h25.6v-25.6h25.6v-25.6Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path>     <path transform=\'scale(.03139)\' d=\'M281.6 486.4H332.8V512H281.6z\'></path>     <path transform=\'scale(.03139)\' d=\'M204.8 25.6H230.4V51.2H204.8z\'></path>     <path transform=\'scale(.03139)\' d=\'M409.6 204.8H435.2V230.4H409.6z\'></path>     <path transform=\'scale(.03139)\' d=\'M435.2 179.2H460.8V204.8H435.2z\'></path>     <path transform=\'scale(.03139)\' d=\'M102.4 307.2H128V332.8H102.4z\'></path>     <path d=\'M153.6 486.4V384h25.6v-51.2h-25.6v25.6H76.8v-25.6H25.6v25.6H0V512h204.8v-25.6h-51.2Zm-25.6 0H25.6V384H128v102.4Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path>     <path transform=\'scale(.03139)\' d=\'M153.6 153.6H179.2V179.2H153.6z\'></path>     <path d=\'M204.8 0H0v153.6h25.6v25.6h25.6v-25.6h25.6v25.6h25.6v-25.6h51.2v-51.2h25.6V76.8h-25.6V25.6h51.2V0ZM128 128H25.6V25.6H128V128Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path>     <path transform=\'scale(.03139)\' d=\'M307.2 76.8H332.8V102.4H307.2z\'></path>     <path transform=\'scale(.03139)\' d=\'M256 0H281.6V25.6H256z\'></path>     <path d=\'M307.2 153.6V128h-25.6v-25.6H256V128h-51.2v-25.6h-25.6v51.2h25.6v51.2H128v-25.6h-25.6v25.6H25.6v25.6h51.2V256H0v25.6h76.8v25.6h25.6v-25.6H128v25.6h25.6v-25.6h51.2V256h-25.6v-25.6h51.2V256h51.2v-25.6H256v-25.6h-25.6v-51.2h76.8ZM153.6 256h-51.2v-25.6h51.2V256ZM230.4 409.6v-51.2h-25.6V384h-25.6v25.6h25.6v25.6h-25.6v25.6h51.2v-25.6H256v-25.6h-25.6ZM460.8 460.8v-25.6h-25.6v25.6h-76.8v25.6h51.2V512h25.6v-25.6h51.2V512H512v-51.2h-51.2ZM486.4 358.4V384h-25.6v25.6H512v-51.2h-25.6Z\' fillrule=\'nonzero\' transform=\'scale(.03139)\'></path></svg>","version":"1.0.0","title":"QR Code","category":"widgets","description":"A powerful QR Code block.","supports":{"html":false,"customClassName":false},"textdomain":"qyrr-code","editorScript":"file:./index.js","editorStyle":"file:./editor.scss","style":"file:./style.scss"}');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/qr/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/qr/block.json");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/qr/icons.js");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/qr/Edit.jsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/qr/Save.jsx");





if (!(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.getBlockType)('qyrr-code/qr')) {
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
    title: "QR Code",
    icon: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].qr_code,
    edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
    save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"]
  });
}
})();

/******/ })()
;
//# sourceMappingURL=index.js.map