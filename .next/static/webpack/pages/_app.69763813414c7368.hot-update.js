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

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LoginPage() {\n    _s();\n    // https://whatsapp-ba.herokuapp.com/\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])((0,react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies)([\n        \"userId\",\n        \"token\"\n    ]), 2), cookies = ref[0], setCookie = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var email = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    var password = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    var SubmitHandler = function(e) {\n        e.preventDefault();\n        var data = {\n            email: email.current.value,\n            password: password.current.value\n        };\n        fetch(\"https://whatsapp-ba.herokuapp.com//login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            console.log(data);\n            if (data.flag) {\n                setCookie(\"userId\", data.userId, {\n                    maxAge: 3600\n                });\n                setCookie(\"token\", data.token, {\n                    maxAge: 3600\n                });\n                router.push(\"/\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().login),\n        onSubmit: SubmitHandler,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                className: \"mb-3\",\n                controlId: \"formBasicEmail\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().text),\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Control, {\n                        ref: email,\n                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                        type: \"email\",\n                        placeholder: \"Enter email\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                className: \"mb-3\",\n                controlId: \"formBasicPassword\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Label, {\n                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().text),\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Control, {\n                        ref: password,\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                variant: \"primary\",\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"tJuLfbsiQ+ozNpcg9wimv1xy3/g=\", false, function() {\n    return [\n        react_cookie__WEBPACK_IMPORTED_MODULE_4__.useCookies,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = LoginPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFDLFNBQVM7Z0JBQUNaLFNBQVMsRUFBRTlCLHdFQUFhO2dCQUFFd0MsSUFBSSxFQUFDLFFBQVE7MEJBQUMsUUFFbEU7Ozs7O29CQUFTOzs7Ozs7WUFDSixDQUNQO0NBQ0g7R0FqRFF0QyxTQUFTOztRQUVlRCxvREFBVTtRQUN4Qkosa0RBQVM7OztBQUhuQkssS0FBQUEsU0FBUztBQW1EbEIsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luLmpzPzJlOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gIC8vIGh0dHBzOi8vd2hhdHNhcHAtYmEuaGVyb2t1YXBwLmNvbS9cclxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VySWRcIixcInRva2VuXCJdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBlbWFpbCA9IHVzZVJlZignJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZD11c2VSZWYoJycpO1xyXG4gICAgY29uc3QgU3VibWl0SGFuZGxlcj0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YT17XHJcbiAgICAgICAgICAgIGVtYWlsOmVtYWlsLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly93aGF0c2FwcC1iYS5oZXJva3VhcHAuY29tLy9sb2dpbicse1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICBpZihkYXRhLmZsYWcpe1xyXG4gICAgICAgICAgICAgICAgc2V0Q29va2llKFwidXNlcklkXCIsZGF0YS51c2VySWQse21heEFnZTogMzYwMH0pXHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ0b2tlblwiLGRhdGEudG9rZW4se21heEFnZTozNjAwfSlcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIGNsYXNzTmFtZT17U3R5bGVzLmxvZ2lufSBvblN1Ym1pdD17U3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNFbWFpbFwiPlxyXG4gICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT17U3R5bGVzLnRleHR9PkVtYWlsIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgPEZvcm0uQ29udHJvbCByZWY9e2VtYWlsfSBjbGFzc05hbWU9e1N0eWxlcy5pbnB1dH0gdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIC8+XHJcbiAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxyXG4gICAgICAgIDxGb3JtLkxhYmVsIGNsYXNzTmFtZT17U3R5bGVzLnRleHR9PlBhc3N3b3JkPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgIDxGb3JtLkNvbnRyb2wgcmVmPXtwYXNzd29yZH0gIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBjbGFzc05hbWU9e1N0eWxlcy5pbnB1dH0gLz5cclxuICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICB7LyogPEZvcm0uR3JvdXAgY2xhc3NOYW1lPXtgbWItMyAke1N0eWxlcy5pbnB1dH1gfSBjb250cm9sSWQ9XCJmb3JtQmFzaWNDaGVja2JveFwiID5cclxuICAgICAgICA8Rm9ybS5DaGVjayB0eXBlPVwiY2hlY2tib3hcIiBsYWJlbD1cIkNoZWNrIG1lIG91dFwiIC8+XHJcbiAgICAgIDwvRm9ybS5Hcm91cD4gKi99XHJcbiAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBjbGFzc05hbWU9e1N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICBTdWJtaXRcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJGb3JtIiwiU3R5bGVzIiwidXNlQ29va2llcyIsIkxvZ2luUGFnZSIsImNvb2tpZXMiLCJzZXRDb29raWUiLCJyb3V0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiU3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJjdXJyZW50IiwidmFsdWUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZmxhZyIsInVzZXJJZCIsIm1heEFnZSIsInRva2VuIiwicHVzaCIsImNsYXNzTmFtZSIsImxvZ2luIiwib25TdWJtaXQiLCJHcm91cCIsImNvbnRyb2xJZCIsIkxhYmVsIiwidGV4dCIsIkNvbnRyb2wiLCJyZWYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/login.js\n"));

/***/ })

});