"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/authorize.js":
/*!****************************!*\
  !*** ./pages/authorize.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ \"./pages/login.js\");\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\n// import SideBar from \"../components/sidebar\";\n// import React, { useState,useEffect } from 'react';\nvar Authenticate = function(param) {\n    var Component = param.Component;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), authorize = ref[0], setauthorize = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"token\"\n    ]), 2), cookies = ref1[0], setCookies = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // console.log(data)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"https://whatsapp-ba.herokuapp.com//authorize\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                \"Authorization\": \"Bearer \" + cookies.token\n            }\n        }).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(data);\n            var authorize = data.authorize;\n            console.log(authorize);\n            if (authorize) {\n                console.log(\"1\");\n                router.push(\"/\");\n                setauthorize(authorize);\n            } else {\n                console.log(\"2\");\n                setauthorize(authorize);\n                router.push(\"/login\");\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: authorize ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {}, void 0, false, {\n            fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\pages\\\\authorize.js\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\pages\\\\authorize.js\",\n            lineNumber: 43,\n            columnNumber: 6\n        }, _this)\n    }, void 0, false);\n};\n_s(Authenticate, \"KjCsCazsEXZW1bhl8rQXBej13sY=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Authenticate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authenticate);\nvar _c;\n$RefreshReg$(_c, \"Authenticate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRob3JpemUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFBMkM7QUFDRjtBQUNGO0FBQ1g7O0FBQzVCLCtDQUErQztBQUMvQyxxREFBcUQ7QUFFckQsSUFBTUssWUFBWSxHQUFHLGdCQUFpQjtRQUFmQyxTQUFTLFNBQVRBLFNBQVM7O0lBQzlCLElBQStCTCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXZDTSxTQUFTLEdBQWVOLEdBQWUsR0FBOUIsRUFBQ08sWUFBWSxHQUFFUCxHQUFlLEdBQWpCO0lBQzdCLElBQTJCQyxJQUFxQixvRkFBckJBLHdEQUFVLENBQUM7UUFBQyxPQUFPO0tBQUMsQ0FBQyxNQUF6Q08sT0FBTyxHQUFhUCxJQUFxQixHQUFsQyxFQUFDUSxVQUFVLEdBQUVSLElBQXFCLEdBQXZCO0lBQ3pCLElBQU1TLE1BQU0sR0FBQ1Isc0RBQVMsRUFBRTtJQUN4QixvQkFBb0I7SUFDbEJILGdEQUFTLENBQUMsV0FBSTtRQUNaWSxLQUFLLENBQUUsOENBQTRDLEVBQUU7WUFDbkRDLE1BQU0sRUFBQyxNQUFNO1lBQ2JDLE9BQU8sRUFBQztnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxlQUFlLEVBQUMsU0FBUyxHQUFDTCxPQUFPLENBQUNNLEtBQUs7YUFDeEM7U0FDRixDQUFDLENBQUNDLElBQUksQ0FBQyxTQUFDQyxRQUFRLEVBQUc7WUFDbEIsT0FBT0EsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQztTQUN4QixDQUFDLENBQ0RGLElBQUksQ0FBQyxTQUFDRyxJQUFJLEVBQUc7WUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQU0sU0FBVSxHQUFFQSxJQUFJLENBQWZaLFNBQVM7WUFDaEJhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxTQUFTLENBQUM7WUFDdEIsSUFBR0EsU0FBUyxFQUFDO2dCQUNYYSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ2hCVixNQUFNLENBQUNXLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakJkLFlBQVksQ0FBQ0QsU0FBUyxDQUFDO2FBQ3hCLE1BQUk7Z0JBQ0hhLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDaEJiLFlBQVksQ0FBQ0QsU0FBUyxDQUFDO2dCQUN2QkksTUFBTSxDQUFDVyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ3RCO1NBQ0YsQ0FBQztLQUVILEVBQUMsRUFBRSxDQUFDO0lBQ1AscUJBQ0U7a0JBQ0NmLFNBQVMsaUJBQ1YsOERBQUNELFNBQVM7Ozs7aUJBQUUsaUJBQ1gsOERBQUNGLDhDQUFLOzs7O2lCQUFFO3FCQUVOLENBQ0o7Q0FDRjtHQXZDS0MsWUFBWTs7UUFFV0gsb0RBQVU7UUFDeEJDLGtEQUFTOzs7QUFIbEJFLEtBQUFBLFlBQVk7QUF5Q2xCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGhvcml6ZS5qcz8yZWU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSBcInJlYWN0LWNvb2tpZVwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpblwiO1xyXG4vLyBpbXBvcnQgU2lkZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9zaWRlYmFyXCI7XHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBBdXRoZW50aWNhdGUgPSAoe0NvbXBvbmVudH0pID0+IHtcclxuICBjb25zdCBbYXV0aG9yaXplLHNldGF1dGhvcml6ZV09dXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb29raWVzLHNldENvb2tpZXNdPXVzZUNvb2tpZXMoW1widG9rZW5cIl0pO1xyXG4gIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgIGZldGNoKGBodHRwczovL3doYXRzYXBwLWJhLmhlcm9rdWFwcC5jb20vL2F1dGhvcml6ZWAse1xyXG4gICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjpcIkJlYXJlciBcIitjb29raWVzLnRva2VuLFxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgY29uc3Qge2F1dGhvcml6ZX09ZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhdXRob3JpemUpXHJcbiAgICAgICAgaWYoYXV0aG9yaXplKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCcxJylcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICBzZXRhdXRob3JpemUoYXV0aG9yaXplKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJzInKVxyXG4gICAgICAgICAgc2V0YXV0aG9yaXplKGF1dGhvcml6ZSlcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAge2F1dGhvcml6ZSA/IFxyXG4gICAgPENvbXBvbmVudC8+XHJcbiAgICA6PExvZ2luLz5cclxuICAgIH1cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aGVudGljYXRlIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29va2llcyIsInVzZVJvdXRlciIsIkxvZ2luIiwiQXV0aGVudGljYXRlIiwiQ29tcG9uZW50IiwiYXV0aG9yaXplIiwic2V0YXV0aG9yaXplIiwiY29va2llcyIsInNldENvb2tpZXMiLCJyb3V0ZXIiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/authorize.js\n"));

/***/ })

});