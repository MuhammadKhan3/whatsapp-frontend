/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./styles/login.module.css":
/*!*********************************!*\
  !*** ./styles/login.module.css ***!
  \*********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"login\": \"login_login___x1HT\",\n\t\"text\": \"login_text__iOPbE\",\n\t\"input\": \"login_input__eHZjI\",\n\t\"button\": \"login_button__fDcxV\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvbG9naW4ubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3R5bGVzL2xvZ2luLm1vZHVsZS5jc3M/YTVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2dpblwiOiBcImxvZ2luX2xvZ2luX19feDFIVFwiLFxuXHRcInRleHRcIjogXCJsb2dpbl90ZXh0X19pT1BiRVwiLFxuXHRcImlucHV0XCI6IFwibG9naW5faW5wdXRfX2VIWmpJXCIsXG5cdFwiYnV0dG9uXCI6IFwibG9naW5fYnV0dG9uX19mRGN4VlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/login.module.css\n");

/***/ }),

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ \"react-bootstrap/Button\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Form */ \"react-bootstrap/Form\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/login.module.css */ \"./styles/login.module.css\");\n/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-cookie */ \"react-cookie\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction LoginPage() {\n    // https://whatsapp-ba.herokuapp.com/\n    const [cookies, setCookie] = (0,react_cookie__WEBPACK_IMPORTED_MODULE_5__.useCookies)([\n        \"userId\",\n        \"token\"\n    ]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const email = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const password = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(\"\");\n    const SubmitHandler = (e)=>{\n        e.preventDefault();\n        const data = {\n            email: email.current.value,\n            password: password.current.value\n        };\n        fetch(\"https://whatsapp-ba.herokuapp.com/login\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then((response)=>{\n            return response.json();\n        }).then((data)=>{\n            console.log(data);\n            if (data.flag) {\n                setCookie(\"userId\", data.userId, {\n                    maxAge: 3600\n                });\n                setCookie(\"token\", data.token, {\n                    maxAge: 3600\n                });\n                router.push(\"/\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default()), {\n        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().login),\n        onSubmit: SubmitHandler,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {\n                className: \"mb-3\",\n                controlId: \"formBasicEmail\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {\n                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().text),\n                        children: \"Email address\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {\n                        ref: email,\n                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),\n                        type: \"email\",\n                        placeholder: \"Enter email\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Group), {\n                className: \"mb-3\",\n                controlId: \"formBasicPassword\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Label), {\n                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().text),\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4___default().Control), {\n                        ref: password,\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().input)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3___default()), {\n                variant: \"primary\",\n                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\components\\\\login.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQUV3QyxJQUFJLEVBQUMsUUFBUTswQkFBQyxRQUVsRTs7Ozs7b0JBQVM7Ozs7OztZQUNKLENBQ1A7Q0FDSDtBQUVELGlFQUFldEMsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL2xvZ2luLmpzPzJlOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gJy4uL3N0eWxlcy9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcclxuZnVuY3Rpb24gTG9naW5QYWdlKCkge1xyXG4gIC8vIGh0dHBzOi8vd2hhdHNhcHAtYmEuaGVyb2t1YXBwLmNvbS9cclxuICAgIGNvbnN0IFtjb29raWVzLCBzZXRDb29raWVdID0gdXNlQ29va2llcyhbXCJ1c2VySWRcIixcInRva2VuXCJdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBlbWFpbCA9IHVzZVJlZignJyk7XHJcbiAgICBjb25zdCBwYXNzd29yZD11c2VSZWYoJycpO1xyXG4gICAgY29uc3QgU3VibWl0SGFuZGxlcj0oZSk9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgZGF0YT17XHJcbiAgICAgICAgICAgIGVtYWlsOmVtYWlsLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOnBhc3N3b3JkLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly93aGF0c2FwcC1iYS5oZXJva3VhcHAuY29tL2xvZ2luJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgfSkudGhlbigocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgIGlmKGRhdGEuZmxhZyl7XHJcbiAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJ1c2VySWRcIixkYXRhLnVzZXJJZCx7bWF4QWdlOiAzNjAwfSlcclxuICAgICAgICAgICAgICAgIHNldENvb2tpZShcInRva2VuXCIsZGF0YS50b2tlbix7bWF4QWdlOjM2MDB9KVxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gY2xhc3NOYW1lPXtTdHlsZXMubG9naW59IG9uU3VibWl0PXtTdWJtaXRIYW5kbGVyfT5cclxuICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XHJcbiAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPXtTdHlsZXMudGV4dH0+RW1haWwgYWRkcmVzczwvRm9ybS5MYWJlbD5cclxuICAgICAgICA8Rm9ybS5Db250cm9sIHJlZj17ZW1haWx9IGNsYXNzTmFtZT17U3R5bGVzLmlucHV0fSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIgLz5cclxuICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgPEZvcm0uTGFiZWwgY2xhc3NOYW1lPXtTdHlsZXMudGV4dH0+UGFzc3dvcmQ8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgPEZvcm0uQ29udHJvbCByZWY9e3Bhc3N3b3JkfSAgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGNsYXNzTmFtZT17U3R5bGVzLmlucHV0fSAvPlxyXG4gICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgIHsvKiA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9e2BtYi0zICR7U3R5bGVzLmlucHV0fWB9IGNvbnRyb2xJZD1cImZvcm1CYXNpY0NoZWNrYm94XCIgPlxyXG4gICAgICAgIDxGb3JtLkNoZWNrIHR5cGU9XCJjaGVja2JveFwiIGxhYmVsPVwiQ2hlY2sgbWUgb3V0XCIgLz5cclxuICAgICAgPC9Gb3JtLkdyb3VwPiAqL31cclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGNsYXNzTmFtZT17U3R5bGVzLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgIFN1Ym1pdFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVJvdXRlciIsIkJ1dHRvbiIsIkZvcm0iLCJTdHlsZXMiLCJ1c2VDb29raWVzIiwiTG9naW5QYWdlIiwiY29va2llcyIsInNldENvb2tpZSIsInJvdXRlciIsImVtYWlsIiwicGFzc3dvcmQiLCJTdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsImN1cnJlbnQiLCJ2YWx1ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJmbGFnIiwidXNlcklkIiwibWF4QWdlIiwidG9rZW4iLCJwdXNoIiwiY2xhc3NOYW1lIiwibG9naW4iLCJvblN1Ym1pdCIsIkdyb3VwIiwiY29udHJvbElkIiwiTGFiZWwiLCJ0ZXh0IiwiQ29udHJvbCIsInJlZiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFyaWFudCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/login.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login */ \"./components/login.js\");\n\n\nconst Login = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_login__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"F:\\\\drive f\\\\Learning\\\\whatsapp\\\\client\\\\pages\\\\login.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMkM7QUFHM0MsTUFBTUMsS0FBSyxHQUFHLElBQU07SUFDbEIscUJBQ0UsOERBQUNELHlEQUFTOzs7O2lCQUFFLENBQ2I7Q0FDRjtBQUVELGlFQUFlQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvbG9naW5cIlxyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TG9naW5QYWdlLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luIl0sIm5hbWVzIjpbIkxvZ2luUGFnZSIsIkxvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Button":
/*!*****************************************!*\
  !*** external "react-bootstrap/Button" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ "react-bootstrap/Form":
/*!***************************************!*\
  !*** external "react-bootstrap/Form" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-cookie");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();