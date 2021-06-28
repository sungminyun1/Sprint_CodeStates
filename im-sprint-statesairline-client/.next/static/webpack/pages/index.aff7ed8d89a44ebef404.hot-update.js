webpackHotUpdate_N_E("pages/index",{

/***/ "./api/FlightDataApi.js":
/*!******************************!*\
  !*** ./api/FlightDataApi.js ***!
  \******************************/
/*! exports provided: getFlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFlight\", function() { return getFlight; });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getFlight() {\n  var filterBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.\n  // TODO: 아래 구현을 REST API 호출로 대체하세요.\n  var url = 'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight';\n  var departure = filterBy.departure;\n  var destination = filterBy.destination;\n\n  if (departure && destination) {\n    url = \"http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?departure=\".concat(departure, \"&destination=\").concat(destination);\n  } // return new Promise((resolve) => {\n  //   fetch(url)\n  //   .then((data) => data.json())\n  //   .then((json) => {\n  //     setTimeout(() => {\n  //     resolve(json);\n  //   }, 500)})\n  // });\n\n\n  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(function (data) {\n    return data.json();\n  }).then(function (json) {\n    setTimeout(function () {\n      return json;\n    }, 500);\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL0ZsaWdodERhdGFBcGkuanM/MTcyNSJdLCJuYW1lcyI6WyJnZXRGbGlnaHQiLCJmaWx0ZXJCeSIsInVybCIsImRlcGFydHVyZSIsImRlc3RpbmF0aW9uIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsU0FBVCxHQUFrQztBQUFBLE1BQWZDLFFBQWUsdUVBQUosRUFBSTtBQUN2QztBQUNBO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLHlFQUFWO0FBQ0EsTUFBSUMsU0FBUyxHQUFHRixRQUFRLENBQUNFLFNBQXpCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHSCxRQUFRLENBQUNHLFdBQTNCOztBQUVBLE1BQUdELFNBQVMsSUFBSUMsV0FBaEIsRUFBNkI7QUFDM0JGLE9BQUcsK0ZBQXdGQyxTQUF4RiwwQkFBaUhDLFdBQWpILENBQUg7QUFDRCxHQVRzQyxDQVd2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFPQyxpREFBSyxDQUFDSCxHQUFELENBQUwsQ0FDSkksSUFESSxDQUNDLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUNDLElBQUwsRUFBVjtBQUFBLEdBREQsRUFFSkYsSUFGSSxDQUVDLFVBQUNFLElBQUQsRUFBVTtBQUNkQyxjQUFVLENBQUMsWUFBTTtBQUNqQixhQUFRRCxJQUFSO0FBQ0QsS0FGVyxFQUVULEdBRlMsQ0FBVjtBQUVNLEdBTEgsQ0FBUDtBQU1EIiwiZmlsZSI6Ii4vYXBpL0ZsaWdodERhdGFBcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZsaWdodChmaWx0ZXJCeSA9IHt9KSB7XG4gIC8vIEhJTlQ6IOqwgOyepSDrp4jsp4Drp4kg7YWM7Iqk7Yq466W8IO2GteqzvO2VmOq4sCDsnITtlbQsIGZldGNo66W8IOydtOyaqe2VqeuLiOuLpC4g7JWE656YIOq1rO2YhOydgCDsmYTsoITtnogg7IKt7KCc65CY7Ja064+EIOyDgeq0gOyXhuyKteuLiOuLpC5cbiAgLy8gVE9ETzog7JWE656YIOq1rO2YhOydhCBSRVNUIEFQSSDtmLjstpzroZwg64yA7LK07ZWY7IS47JqULlxuICBsZXQgdXJsID0gJ2h0dHA6Ly9lYzItMTMtMTI0LTkwLTIzMS5hcC1ub3J0aGVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206ODEvZmxpZ2h0JztcbiAgbGV0IGRlcGFydHVyZSA9IGZpbHRlckJ5LmRlcGFydHVyZTtcbiAgbGV0IGRlc3RpbmF0aW9uID0gZmlsdGVyQnkuZGVzdGluYXRpb247XG5cbiAgaWYoZGVwYXJ0dXJlICYmIGRlc3RpbmF0aW9uKSB7XG4gICAgdXJsID0gYGh0dHA6Ly9lYzItMTMtMTI0LTkwLTIzMS5hcC1ub3J0aGVhc3QtMi5jb21wdXRlLmFtYXpvbmF3cy5jb206ODEvZmxpZ2h0P2RlcGFydHVyZT0ke2RlcGFydHVyZX0mZGVzdGluYXRpb249JHtkZXN0aW5hdGlvbn1gO1xuICB9XG5cbiAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gIC8vICAgZmV0Y2godXJsKVxuICAvLyAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgLy8gICAudGhlbigoanNvbikgPT4ge1xuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICByZXNvbHZlKGpzb24pO1xuICAvLyAgIH0sIDUwMCl9KVxuICAvLyB9KTtcblxuICByZXR1cm4gZmV0Y2godXJsKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXR1cm4gKGpzb24pO1xuICAgIH0sIDUwMCl9KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/FlightDataApi.js\n");

/***/ })

})