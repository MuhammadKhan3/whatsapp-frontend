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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n/* harmony import */ var _authorize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorize */ \"./pages/authorize.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n// add bootstrap css \n\n// own css files here\n\n\n\n\n\n\n\nvar io = (__webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/cjs/index.js\").io);\nvar socket = io(\"https://whatsapp-ba.herokuapp.com\");\nvar cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_7__.Cookies();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    // useEffect(()=>{\n    //   let text=window.prompt('Enter the name','dflkj')\n    //   if(text===\"\" || text===\"\"){\n    //     text = \"User cancelled the prompt.\";\n    //   }else{\n    //     socket.emit('join-room',{name:text});\n    //   }\n    // },[])\n    // socket.on('user',({user})=>{\n    //   cookies.set('name',user.name);\n    //   cookies.set('userId',user.id);\n    //   cookies.set('socketId',user.socketId);\n    // })\n    console.log(\"29\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_cookie__WEBPACK_IMPORTED_MODULE_7__.CookiesProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n            store: _redux_store__WEBPACK_IMPORTED_MODULE_5__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, pageProps), void 0, false, {\n                fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 31,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 30,\n        columnNumber: 11\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBREEscUJBQXFCO0FBQ29CO0FBQ3pDLHFCQUFxQjtBQUVTO0FBQ007QUFDRTtBQUNRO0FBQ1I7QUFDRjtBQUNDO0FBQ3JDLElBQU0sRUFBSSxHQUFLUSxzR0FBTDtBQUNWLElBQU1DLE1BQU0sR0FBR0YsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO0FBQ3RELElBQU1HLE9BQU8sR0FBQyxJQUFJVixpREFBTyxFQUFFO0FBQzNCLFNBQVNXLEtBQUssQ0FBQyxLQUF3QixFQUFFO1FBQXhCQyxTQUFTLEdBQVgsS0FBd0IsQ0FBdEJBLFNBQVMsRUFBRUMsU0FBUyxHQUF0QixLQUF3QixDQUFYQSxTQUFTO0lBQ25DLGtCQUFrQjtJQUNsQixxREFBcUQ7SUFDckQsZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsNENBQTRDO0lBQzVDLE1BQU07SUFDTixRQUFRO0lBQ1IsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsMkNBQTJDO0lBQzNDLEtBQUs7SUFDTEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFFO0lBQ2xCLHFCQUFRLDhEQUFDYix5REFBZTtrQkFDakIsNEVBQUNDLGlEQUFRO1lBQUNDLEtBQUssRUFBRUEsK0NBQUs7c0JBQ3JCLDRFQUFDUSxTQUFTLHFGQUFLQyxTQUFTOzs7O29CQUFJOzs7OztnQkFDbEI7Ozs7O1lBQ08sQ0FBQztDQUMzQjtBQXBCUUYsS0FBQUEsS0FBSztBQXFCZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZGQgYm9vdHN0cmFwIGNzcyBcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG4vLyBvd24gY3NzIGZpbGVzIGhlcmVcblxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQge0Nvb2tpZXN9IGZyb20gJ3JlYWN0LWNvb2tpZSdcbmltcG9ydCBBdXRoZW50aWNhdGUgZnJvbSAnLi9hdXRob3JpemUnXG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtY29va2llXCJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcbmltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmNvbnN0IHsgaW8gfSA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpO1xuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vd2hhdHNhcHAtYmEuaGVyb2t1YXBwLmNvbScpO1xuY29uc3QgY29va2llcz1uZXcgQ29va2llcygpO1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIC8vIHVzZUVmZmVjdCgoKT0+e1xuICAvLyAgIGxldCB0ZXh0PXdpbmRvdy5wcm9tcHQoJ0VudGVyIHRoZSBuYW1lJywnZGZsa2onKVxuICAvLyAgIGlmKHRleHQ9PT1cIlwiIHx8IHRleHQ9PT1cIlwiKXtcbiAgLy8gICAgIHRleHQgPSBcIlVzZXIgY2FuY2VsbGVkIHRoZSBwcm9tcHQuXCI7XG4gIC8vICAgfWVsc2V7XG4gIC8vICAgICBzb2NrZXQuZW1pdCgnam9pbi1yb29tJyx7bmFtZTp0ZXh0fSk7XG4gIC8vICAgfVxuICAvLyB9LFtdKVxuICAvLyBzb2NrZXQub24oJ3VzZXInLCh7dXNlcn0pPT57XG4gIC8vICAgY29va2llcy5zZXQoJ25hbWUnLHVzZXIubmFtZSk7XG4gIC8vICAgY29va2llcy5zZXQoJ3VzZXJJZCcsdXNlci5pZCk7XG4gIC8vICAgY29va2llcy5zZXQoJ3NvY2tldElkJyx1c2VyLnNvY2tldElkKTtcbiAgLy8gfSlcbiAgY29uc29sZS5sb2coJzI5JywpXG4gIHJldHVybiAoPENvb2tpZXNQcm92aWRlcj5cbiAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICA8L0Nvb2tpZXNQcm92aWRlcj4pXG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJDb29raWVzIiwiQXV0aGVudGljYXRlIiwiQ29va2llc1Byb3ZpZGVyIiwiUHJvdmlkZXIiLCJzdG9yZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwiaW8iLCJyZXF1aXJlIiwic29ja2V0IiwiY29va2llcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});