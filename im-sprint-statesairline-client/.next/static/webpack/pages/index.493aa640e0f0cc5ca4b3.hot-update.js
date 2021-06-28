webpackHotUpdate_N_E("pages/index",{

/***/ "./api/FlightDataApi.js":
/*!******************************!*\
  !*** ./api/FlightDataApi.js ***!
  \******************************/
/*! exports provided: getFlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFlight\", function() { return getFlight; });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"./node_modules/node-fetch/browser.js\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getFlight() {\n  var filterBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  // HINT: 가장 마지막 테스트를 통과하기 위해, fetch를 이용합니다. 아래 구현은 완전히 삭제되어도 상관없습니다.\n  // TODO: 아래 구현을 REST API 호출로 대체하세요.\n  var url = 'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight';\n  var departure = filterBy.departure;\n  var destination = filterBy.destination;\n\n  if (departure && destination) {\n    url = \"http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?departure=\".concat(departure, \"&destination=\").concat(destination);\n  }\n\n  return node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url).then(function (data) {\n    return data.json();\n  }).then(function (json) {\n    return new Promise(function (resolve) {\n      // fetch API 자체가 Promise 객체를 선언한 것과 같은데, 왜 Promise를 사용??\n      setTimeout(function () {\n        // => setTimeout API 때문에 Web APIs에 비동기 함수가 담기고 아직 처리되지 않았기 때문에 Promise를 사용하므로서 기다려주기 위함이다.\n        resolve(json);\n      }, 500);\n    });\n  });\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpL0ZsaWdodERhdGFBcGkuanM/MTcyNSJdLCJuYW1lcyI6WyJnZXRGbGlnaHQiLCJmaWx0ZXJCeSIsInVybCIsImRlcGFydHVyZSIsImRlc3RpbmF0aW9uIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxTQUFTQSxTQUFULEdBQWtDO0FBQUEsTUFBZkMsUUFBZSx1RUFBSixFQUFJO0FBQ3ZDO0FBQ0E7QUFDQSxNQUFJQyxHQUFHLEdBQUcseUVBQVY7QUFDQSxNQUFJQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0UsU0FBekI7QUFDQSxNQUFJQyxXQUFXLEdBQUdILFFBQVEsQ0FBQ0csV0FBM0I7O0FBRUEsTUFBR0QsU0FBUyxJQUFJQyxXQUFoQixFQUE2QjtBQUMzQkYsT0FBRywrRkFBd0ZDLFNBQXhGLDBCQUFpSEMsV0FBakgsQ0FBSDtBQUNEOztBQUVELFNBQU9DLGlEQUFLLENBQUNILEdBQUQsQ0FBTCxDQUNKSSxJQURJLENBQ0MsVUFBQ0MsSUFBRCxFQUFVO0FBQ2QsV0FBT0EsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxHQUhJLEVBSUpGLElBSkksQ0FJQyxVQUFDRSxJQUFELEVBQVU7QUFDZCxXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFBSTtBQUNsQ0MsZ0JBQVUsQ0FBQyxZQUFNO0FBQWlCO0FBQ2hDRCxlQUFPLENBQUNGLElBQUQsQ0FBUDtBQUNELE9BRlMsRUFFUCxHQUZPLENBQVY7QUFFUSxLQUhILENBQVA7QUFJQyxHQVRFLENBQVA7QUFVRCIsImZpbGUiOiIuL2FwaS9GbGlnaHREYXRhQXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGbGlnaHQoZmlsdGVyQnkgPSB7fSkge1xuICAvLyBISU5UOiDqsIDsnqUg66eI7KeA66eJIO2FjOyKpO2KuOulvCDthrXqs7ztlZjquLAg7JyE7ZW0LCBmZXRjaOulvCDsnbTsmqntlanri4jri6QuIOyVhOuemCDqtaztmITsnYAg7JmE7KCE7Z6IIOyCreygnOuQmOyWtOuPhCDsg4HqtIDsl4bsirXri4jri6QuXG4gIC8vIFRPRE86IOyVhOuemCDqtaztmITsnYQgUkVTVCBBUEkg7Zi47Lac66GcIOuMgOyytO2VmOyEuOyalC5cbiAgbGV0IHVybCA9ICdodHRwOi8vZWMyLTEzLTEyNC05MC0yMzEuYXAtbm9ydGhlYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjgxL2ZsaWdodCc7XG4gIGxldCBkZXBhcnR1cmUgPSBmaWx0ZXJCeS5kZXBhcnR1cmU7XG4gIGxldCBkZXN0aW5hdGlvbiA9IGZpbHRlckJ5LmRlc3RpbmF0aW9uO1xuXG4gIGlmKGRlcGFydHVyZSAmJiBkZXN0aW5hdGlvbikge1xuICAgIHVybCA9IGBodHRwOi8vZWMyLTEzLTEyNC05MC0yMzEuYXAtbm9ydGhlYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjgxL2ZsaWdodD9kZXBhcnR1cmU9JHtkZXBhcnR1cmV9JmRlc3RpbmF0aW9uPSR7ZGVzdGluYXRpb259YDtcbiAgfVxuXG4gIHJldHVybiBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4geyAgIC8vIGZldGNoIEFQSSDsnpDssrTqsIAgUHJvbWlzZSDqsJ3ssrTrpbwg7ISg7Ja47ZWcIOqyg+qzvCDqsJnsnYDrjbAsIOyZnCBQcm9taXNl66W8IOyCrOyaqT8/XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAgICAgICAgICAgICAgICAvLyA9PiBzZXRUaW1lb3V0IEFQSSDrlYzrrLjsl5AgV2ViIEFQSXPsl5Ag67mE64+Z6riwIO2VqOyImOqwgCDri7TquLDqs6Ag7JWE7KeBIOyymOumrOuQmOyngCDslYrslZjquLAg65WM66y47JeQIFByb21pc2Xrpbwg7IKs7Jqp7ZWY66+A66Gc7IScIOq4sOuLpOugpOyjvOq4sCDsnITtlajsnbTri6QuXG4gICAgICAgICAgcmVzb2x2ZShqc29uKTtcbiAgICAgICAgfSwgNTAwKX0pXG4gICAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/FlightDataApi.js\n");

/***/ })

})