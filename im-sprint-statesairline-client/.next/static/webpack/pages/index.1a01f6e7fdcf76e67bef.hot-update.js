webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/component/Search.js":
/*!***********************************!*\
  !*** ./pages/component/Search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/minjman/Desktop/github/Sprint/im-sprint-statesairline-client/pages/component/Search.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Search(_ref) {\n  _s();\n\n  var _ref$onSearch = _ref.onSearch,\n      onSearch = _ref$onSearch === void 0 ? function () {} : _ref$onSearch;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      textDestination = _useState[0],\n      setTextDestination = _useState[1];\n\n  var handleChange = function handleChange(e) {\n    setTextDestination(e.target.value.toUpperCase());\n  };\n\n  var handleKeyPress = function handleKeyPress(e) {\n    if (e.type === 'keypress' && e.code === 'Enter') {\n      handleSearchClick();\n    }\n  };\n\n  var handleSearchClick = function handleSearchClick() {\n    console.log('검색 버튼을 누르거나, 엔터를 치면 search 함수가 실행됩니다'); // TODO:\n\n    onSearch({\n      departure: 'ICN',\n      destination: textDestination\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"fieldset\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"legend\", {\n      children: \"\\uACF5\\uD56D \\uCF54\\uB4DC\\uB97C \\uC785\\uB825\\uD558\\uACE0, \\uAC80\\uC0C9\\uD558\\uC138\\uC694\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"\\uCD9C\\uBC1C\\uC9C0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      id: \"input-departure\",\n      type: \"text\",\n      disabled: true,\n      value: \"ICN\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: \"\\uB3C4\\uCC29\\uC9C0\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      id: \"input-destination\",\n      type: \"text\",\n      value: textDestination,\n      onChange: handleChange,\n      placeholder: \"CJU, BKK, PUS \\uC911 \\uD558\\uB098\\uB97C \\uC785\\uB825\\uD558\\uC138\\uC694\",\n      onKeyPress: handleKeyPress\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      id: \"search-btn\",\n      onClick: handleSearchClick,\n      children: \"\\uAC80\\uC0C9\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 10\n  }, this);\n}\n\n_s(Search, \"S9RN9M7LDyevYirdHbYRmnJ3lc8=\");\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50L1NlYXJjaC5qcz9mNjM4Il0sIm5hbWVzIjpbIlNlYXJjaCIsIm9uU2VhcmNoIiwidXNlU3RhdGUiLCJ0ZXh0RGVzdGluYXRpb24iLCJzZXRUZXh0RGVzdGluYXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b1VwcGVyQ2FzZSIsImhhbmRsZUtleVByZXNzIiwidHlwZSIsImNvZGUiLCJoYW5kbGVTZWFyY2hDbGljayIsImNvbnNvbGUiLCJsb2ciLCJkZXBhcnR1cmUiLCJkZXN0aW5hdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLE1BQVQsT0FBeUM7QUFBQTs7QUFBQSwyQkFBdkJDLFFBQXVCO0FBQUEsTUFBdkJBLFFBQXVCLDhCQUFaLFlBQU0sQ0FBRSxDQUFJOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ2hDQyxlQURnQztBQUFBLE1BQ2ZDLGtCQURlOztBQUd2QyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU87QUFDMUJGLHNCQUFrQixDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxXQUFmLEVBQUQsQ0FBbEI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0osQ0FBRCxFQUFPO0FBQzVCLFFBQUlBLENBQUMsQ0FBQ0ssSUFBRixLQUFXLFVBQVgsSUFBeUJMLENBQUMsQ0FBQ00sSUFBRixLQUFXLE9BQXhDLEVBQWlEO0FBQy9DQyx1QkFBaUI7QUFDbEI7QUFDRixHQUpEOztBQU1BLE1BQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QkMsV0FBTyxDQUFDQyxHQUFSLENBQVksc0NBQVosRUFEOEIsQ0FHOUI7O0FBQ0FkLFlBQVEsQ0FBQztBQUFDZSxlQUFTLEVBQUUsS0FBWjtBQUFtQkMsaUJBQVcsRUFBRWQ7QUFBaEMsS0FBRCxDQUFSO0FBQ0QsR0FMRDs7QUFPQSxzQkFBTztBQUFBLDRCQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUFFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLLGVBR0w7QUFBTyxRQUFFLEVBQUMsaUJBQVY7QUFBNEIsVUFBSSxFQUFDLE1BQWpDO0FBQXdDLGNBQVEsTUFBaEQ7QUFBaUQsV0FBSyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISyxlQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkssZUFLTDtBQUFPLFFBQUUsRUFBQyxtQkFBVjtBQUE4QixVQUFJLEVBQUMsTUFBbkM7QUFBMEMsV0FBSyxFQUFFQSxlQUFqRDtBQUFrRSxjQUFRLEVBQUVFLFlBQTVFO0FBQTBGLGlCQUFXLEVBQUMsd0VBQXRHO0FBQWtJLGdCQUFVLEVBQUVLO0FBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSyxlQU1MO0FBQVEsUUFBRSxFQUFDLFlBQVg7QUFBd0IsYUFBTyxFQUFFRyxpQkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVFEOztHQTVCUWIsTTs7S0FBQUEsTTtBQThCTUEscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnQvU2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gU2VhcmNoKHsgb25TZWFyY2ggPSAoKSA9PiB7fSB9KSB7XG4gIGNvbnN0IFt0ZXh0RGVzdGluYXRpb24sIHNldFRleHREZXN0aW5hdGlvbl0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFRleHREZXN0aW5hdGlvbihlLnRhcmdldC52YWx1ZS50b1VwcGVyQ2FzZSgpKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgIGlmIChlLnR5cGUgPT09ICdrZXlwcmVzcycgJiYgZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBoYW5kbGVTZWFyY2hDbGljaygpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ+qygOyDiSDrsoTtirzsnYQg64iE66W06rGw64KYLCDsl5TthLDrpbwg7LmY66m0IHNlYXJjaCDtlajsiJjqsIAg7Iuk7ZaJ65Cp64uI64ukJylcblxuICAgIC8vIFRPRE86XG4gICAgb25TZWFyY2goe2RlcGFydHVyZTogJ0lDTicsIGRlc3RpbmF0aW9uOiB0ZXh0RGVzdGluYXRpb259KTtcbiAgfVxuXG4gIHJldHVybiA8ZmllbGRzZXQ+XG4gICAgPGxlZ2VuZD7qs7Xtla0g7L2U65Oc66W8IOyeheugpe2VmOqzoCwg6rKA7IOJ7ZWY7IS47JqUPC9sZWdlbmQ+XG4gICAgPHNwYW4+7Lac67Cc7KeAPC9zcGFuPlxuICAgIDxpbnB1dCBpZD1cImlucHV0LWRlcGFydHVyZVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCJJQ05cIj48L2lucHV0PlxuICAgIDxzcGFuPuuPhOywqeyngDwvc3Bhbj5cbiAgICA8aW5wdXQgaWQ9XCJpbnB1dC1kZXN0aW5hdGlvblwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RleHREZXN0aW5hdGlvbn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJDSlUsIEJLSywgUFVTIOykkSDtlZjrgpjrpbwg7J6F66Cl7ZWY7IS47JqUXCIgb25LZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9IC8+XG4gICAgPGJ1dHRvbiBpZD1cInNlYXJjaC1idG5cIiBvbkNsaWNrPXtoYW5kbGVTZWFyY2hDbGlja30+6rKA7IOJPC9idXR0b24+XG4gIDwvZmllbGRzZXQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/component/Search.js\n");

/***/ })

})