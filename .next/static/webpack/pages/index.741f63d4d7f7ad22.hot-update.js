/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/messagebox.module.css":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/messagebox.module.css ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".messagebox_mainContainer__pT1Vx{\\r\\n    float: left;\\r\\n    background: rgb(255, 192, 203,0.1);\\r\\n    width: 68%;\\r\\n    height: 100vh;\\r\\n    display: inline-block;\\r\\n\\r\\n\\r\\n}\\r\\n.messagebox_innerContainer__5Cr38{\\r\\n    background-color:rgb(231,233,236,0.8);\\r\\n    width: 100%;\\r\\n    height: 8%;\\r\\n    /* height: 80vh; */\\r\\n}\\r\\n\\r\\n.messagebox_profileContainer__v1cBi{\\r\\n    border-radius: 50%;\\r\\n    overflow: hidden;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    margin-left: 10px;\\r\\n    margin-top: 8px;\\r\\n    float: left;\\r\\n  }\\r\\n  .messagebox_profileContainer__v1cBi:hover{\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  .messagebox_name__krl_z{\\r\\n    margin: 0px;\\r\\n    display: inline-block;\\r\\n    margin-left: 12px;\\r\\n    margin-top: 19px;\\r\\n  }\\r\\n  .messagebox_messageContainer__zogJA{\\r\\n    overflow: auto;\\r\\n    height: 80%;\\r\\n    /* height: 50%; */\\r\\n    /* overflow: auto; */\\r\\n  }\\r\\n  .messagebox_phoneIcons__CvTaf{\\r\\n    display: inline;\\r\\n    margin-left: 63%;\\r\\n  }\\r\\n  .messagebox_messageList__rmTtT{\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    /* overflow: auto; */\\r\\n  }\\r\\n  .messagebox_sendMessage__kb8YG{\\r\\n    /* margin-left: 830px; */\\r\\n    -webkit-line-clamp: 5;\\r\\n    -webkit-box-orient: vertical;  \\r\\n    overflow: hidden;\\r\\n    word-break: break-all;\\r\\n\\r\\n    background-color: #d9fdd3;\\r\\n    padding: 5px;\\r\\n    height: auto;\\r\\n    border-radius: 5px;\\r\\n    width: 30%;\\r\\n    border-top-right-radius:10px;\\r\\n  }\\r\\n  .messagebox_sendMessagetime__4eJfq{\\r\\n    font-size: 10px;\\r\\n    position: relative;\\r\\n    width: 60px;\\r\\n  }\\r\\n  .messagebox_receiveMessage__7HcY_{\\r\\n    -webkit-line-clamp: 5;\\r\\n    -webkit-box-orient: vertical;  \\r\\n    overflow: hidden;\\r\\n    word-break: break-all;\\r\\n\\r\\n\\r\\n    background-color: #fff;\\r\\n    padding: 5px;\\r\\n    width: 30%;\\r\\n    border-radius: 5px;\\r\\n    padding-bottom: 8px;\\r\\n  }\\r\\n\\r\\n.messagebox_receiver__4802A{\\r\\n  margin-top: 10px;\\r\\n}\\r\\n.messagebox_sender__bH5p5{\\r\\n  margin-top: 10px;\\r\\n\\r\\n}\\r\\n.messagebox_videoContainer__8IH_i{\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  z-index: 99999;\\r\\n  position: fixed;\\r\\n}\\r\\n.messagebox_videoLocal__86SYZ{\\r\\n  /* z-index: 9999; */\\r\\n  position: absolute;\\r\\n  top: 220px;\\r\\n  left: 290px;\\r\\n  /* top: ; */\\r\\n\\r\\n}\\r\\n.messagebox_micIcon__mKGWL{\\r\\n  position: absolute;\\r\\n  left: 0px;\\r\\n  width: 40px;\\r\\n  fill: white;\\r\\n  top: 250px;\\r\\n  left: 120px;\\r\\n  background-color: lightblue;\\r\\n  padding: 10px;\\r\\n  border-radius: 50px;\\r\\n  cursor: pointer;\\r\\n  /* background-color: ; */\\r\\n}\\r\\n.messagebox_videoIcon__aZmYp{\\r\\n  position: absolute;\\r\\n  left: 170px;\\r\\n  width: 40px;\\r\\n  padding: 10px;\\r\\n  border-radius: 50px;\\r\\n  cursor: pointer;\\r\\n  top: 250px;\\r\\n  color: white;\\r\\n  background-color: lightblue;\\r\\n\\r\\n  z-index: 99999;\\r\\n}\\r\\n.messagebox_videoRemote__DGzFn{\\r\\n\\r\\n}\\r\\n\\r\\n.messagebox_local__78ImN{\\r\\n  border-radius: 20px;\\r\\n  width: 100px;\\r\\n}\\r\\n.messagebox_remote__7QVgf{\\r\\n  border-radius: 20px;\\r\\n  width: 400px;\\r\\n}\\r\\n.messagebox_phoneIconContainer___odrG{\\r\\n  display: inline;\\r\\n  z-index: 9999;\\r\\n}\\r\\n.messagebox_phoneIcons__CvTaf{\\r\\n  width:20px;\\r\\n}\\r\\n.messagebox_phoneIcons__CvTaf:hover{\\r\\n  background-color: lightblue;\\r\\n  padding: 5px;\\r\\n  width:30px;\\r\\n  border-radius: 50px;\\r\\n}\\r\\n.messagebox_phoneIcons__CvTaf:active{\\r\\n  fill: #fff;\\r\\n  background-color: lightsteelblue;\\r\\n  \\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/messagebox.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,WAAW;IACX,kCAAkC;IAClC,UAAU;IACV,aAAa;IACb,qBAAqB;;;AAGzB;AACA;IACI,qCAAqC;IACrC,WAAW;IACX,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,WAAW;EACb;EACA;IACE,eAAe;EACjB;EACA;IACE,WAAW;IACX,qBAAqB;IACrB,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,oBAAoB;EACtB;EACA;IACE,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,oBAAoB;EACtB;EACA;IACE,wBAAwB;IACxB,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,qBAAqB;;IAErB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,4BAA4B;EAC9B;EACA;IACE,eAAe;IACf,kBAAkB;IAClB,WAAW;EACb;EACA;IACE,qBAAqB;IACrB,4BAA4B;IAC5B,gBAAgB;IAChB,qBAAqB;;;IAGrB,sBAAsB;IACtB,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,mBAAmB;EACrB;;AAEF;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;;AAElB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,WAAW;;AAEb;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,UAAU;EACV,WAAW;EACX,2BAA2B;EAC3B,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,YAAY;EACZ,2BAA2B;;EAE3B,cAAc;AAChB;AACA;;AAEA;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,YAAY;AACd;AACA;EACE,eAAe;EACf,aAAa;AACf;AACA;EACE,UAAU;AACZ;AACA;EACE,2BAA2B;EAC3B,YAAY;EACZ,UAAU;EACV,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,gCAAgC;;AAElC\",\"sourcesContent\":[\".mainContainer{\\r\\n    float: left;\\r\\n    background: rgb(255, 192, 203,0.1);\\r\\n    width: 68%;\\r\\n    height: 100vh;\\r\\n    display: inline-block;\\r\\n\\r\\n\\r\\n}\\r\\n.innerContainer{\\r\\n    background-color:rgb(231,233,236,0.8);\\r\\n    width: 100%;\\r\\n    height: 8%;\\r\\n    /* height: 80vh; */\\r\\n}\\r\\n\\r\\n.profileContainer{\\r\\n    border-radius: 50%;\\r\\n    overflow: hidden;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    margin-left: 10px;\\r\\n    margin-top: 8px;\\r\\n    float: left;\\r\\n  }\\r\\n  .profileContainer:hover{\\r\\n    cursor: pointer;\\r\\n  }\\r\\n  .name{\\r\\n    margin: 0px;\\r\\n    display: inline-block;\\r\\n    margin-left: 12px;\\r\\n    margin-top: 19px;\\r\\n  }\\r\\n  .messageContainer{\\r\\n    overflow: auto;\\r\\n    height: 80%;\\r\\n    /* height: 50%; */\\r\\n    /* overflow: auto; */\\r\\n  }\\r\\n  .phoneIcons{\\r\\n    display: inline;\\r\\n    margin-left: 63%;\\r\\n  }\\r\\n  .messageList{\\r\\n    list-style-type: none;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    /* overflow: auto; */\\r\\n  }\\r\\n  .sendMessage{\\r\\n    /* margin-left: 830px; */\\r\\n    -webkit-line-clamp: 5;\\r\\n    -webkit-box-orient: vertical;  \\r\\n    overflow: hidden;\\r\\n    word-break: break-all;\\r\\n\\r\\n    background-color: #d9fdd3;\\r\\n    padding: 5px;\\r\\n    height: auto;\\r\\n    border-radius: 5px;\\r\\n    width: 30%;\\r\\n    border-top-right-radius:10px;\\r\\n  }\\r\\n  .sendMessagetime{\\r\\n    font-size: 10px;\\r\\n    position: relative;\\r\\n    width: 60px;\\r\\n  }\\r\\n  .receiveMessage{\\r\\n    -webkit-line-clamp: 5;\\r\\n    -webkit-box-orient: vertical;  \\r\\n    overflow: hidden;\\r\\n    word-break: break-all;\\r\\n\\r\\n\\r\\n    background-color: #fff;\\r\\n    padding: 5px;\\r\\n    width: 30%;\\r\\n    border-radius: 5px;\\r\\n    padding-bottom: 8px;\\r\\n  }\\r\\n\\r\\n.receiver{\\r\\n  margin-top: 10px;\\r\\n}\\r\\n.sender{\\r\\n  margin-top: 10px;\\r\\n\\r\\n}\\r\\n.videoContainer{\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  z-index: 99999;\\r\\n  position: fixed;\\r\\n}\\r\\n.videoLocal{\\r\\n  /* z-index: 9999; */\\r\\n  position: absolute;\\r\\n  top: 220px;\\r\\n  left: 290px;\\r\\n  /* top: ; */\\r\\n\\r\\n}\\r\\n.micIcon{\\r\\n  position: absolute;\\r\\n  left: 0px;\\r\\n  width: 40px;\\r\\n  fill: white;\\r\\n  top: 250px;\\r\\n  left: 120px;\\r\\n  background-color: lightblue;\\r\\n  padding: 10px;\\r\\n  border-radius: 50px;\\r\\n  cursor: pointer;\\r\\n  /* background-color: ; */\\r\\n}\\r\\n.videoIcon{\\r\\n  position: absolute;\\r\\n  left: 170px;\\r\\n  width: 40px;\\r\\n  padding: 10px;\\r\\n  border-radius: 50px;\\r\\n  cursor: pointer;\\r\\n  top: 250px;\\r\\n  color: white;\\r\\n  background-color: lightblue;\\r\\n\\r\\n  z-index: 99999;\\r\\n}\\r\\n.videoRemote{\\r\\n\\r\\n}\\r\\n\\r\\n.local{\\r\\n  border-radius: 20px;\\r\\n  width: 100px;\\r\\n}\\r\\n.remote{\\r\\n  border-radius: 20px;\\r\\n  width: 400px;\\r\\n}\\r\\n.phoneIconContainer{\\r\\n  display: inline;\\r\\n  z-index: 9999;\\r\\n}\\r\\n.phoneIcons{\\r\\n  width:20px;\\r\\n}\\r\\n.phoneIcons:hover{\\r\\n  background-color: lightblue;\\r\\n  padding: 5px;\\r\\n  width:30px;\\r\\n  border-radius: 50px;\\r\\n}\\r\\n.phoneIcons:active{\\r\\n  fill: #fff;\\r\\n  background-color: lightsteelblue;\\r\\n  \\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"mainContainer\": \"messagebox_mainContainer__pT1Vx\",\n\t\"innerContainer\": \"messagebox_innerContainer__5Cr38\",\n\t\"profileContainer\": \"messagebox_profileContainer__v1cBi\",\n\t\"name\": \"messagebox_name__krl_z\",\n\t\"messageContainer\": \"messagebox_messageContainer__zogJA\",\n\t\"phoneIcons\": \"messagebox_phoneIcons__CvTaf\",\n\t\"messageList\": \"messagebox_messageList__rmTtT\",\n\t\"sendMessage\": \"messagebox_sendMessage__kb8YG\",\n\t\"sendMessagetime\": \"messagebox_sendMessagetime__4eJfq\",\n\t\"receiveMessage\": \"messagebox_receiveMessage__7HcY_\",\n\t\"receiver\": \"messagebox_receiver__4802A\",\n\t\"sender\": \"messagebox_sender__bH5p5\",\n\t\"videoContainer\": \"messagebox_videoContainer__8IH_i\",\n\t\"videoLocal\": \"messagebox_videoLocal__86SYZ\",\n\t\"micIcon\": \"messagebox_micIcon__mKGWL\",\n\t\"videoIcon\": \"messagebox_videoIcon__aZmYp\",\n\t\"videoRemote\": \"messagebox_videoRemote__DGzFn\",\n\t\"local\": \"messagebox_local__78ImN\",\n\t\"remote\": \"messagebox_remote__7QVgf\",\n\t\"phoneIconContainer\": \"messagebox_phoneIconContainer___odrG\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNF0udXNlWzJdIS4vc3R5bGVzL21lc3NhZ2Vib3gubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0EsMkVBQTJFLG9CQUFvQiwyQ0FBMkMsbUJBQW1CLHNCQUFzQiw4QkFBOEIsYUFBYSxzQ0FBc0MsOENBQThDLG9CQUFvQixtQkFBbUIseUJBQXlCLE9BQU8sNENBQTRDLDJCQUEyQix5QkFBeUIsb0JBQW9CLHFCQUFxQiwwQkFBMEIsd0JBQXdCLG9CQUFvQixPQUFPLGdEQUFnRCx3QkFBd0IsT0FBTyw4QkFBOEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIseUJBQXlCLE9BQU8sMENBQTBDLHVCQUF1QixvQkFBb0Isd0JBQXdCLDZCQUE2QixTQUFTLG9DQUFvQyx3QkFBd0IseUJBQXlCLE9BQU8scUNBQXFDLDhCQUE4QixzQkFBc0IsK0JBQStCLDJCQUEyQixTQUFTLHFDQUFxQywrQkFBK0IsZ0NBQWdDLHVDQUF1Qyx5QkFBeUIsOEJBQThCLHNDQUFzQyxxQkFBcUIscUJBQXFCLDJCQUEyQixtQkFBbUIscUNBQXFDLE9BQU8seUNBQXlDLHdCQUF3QiwyQkFBMkIsb0JBQW9CLE9BQU8sd0NBQXdDLDhCQUE4Qix1Q0FBdUMseUJBQXlCLDhCQUE4Qix1Q0FBdUMscUJBQXFCLG1CQUFtQiwyQkFBMkIsNEJBQTRCLE9BQU8sb0NBQW9DLHVCQUF1QixLQUFLLDhCQUE4Qix1QkFBdUIsU0FBUyxzQ0FBc0Msb0JBQW9C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Z0JBQWdCLGtCQUFrQixrQkFBa0IsaUJBQWlCLGtCQUFrQixrQ0FBa0Msb0JBQW9CLDBCQUEwQixzQkFBc0IsNkJBQTZCLE9BQU8sZUFBZSx5QkFBeUIsa0JBQWtCLGtCQUFrQixvQkFBb0IsMEJBQTBCLHNCQUFzQixpQkFBaUIsbUJBQW1CLGtDQUFrQyx5QkFBeUIsS0FBSyxpQkFBaUIsU0FBUyxlQUFlLDBCQUEwQixtQkFBbUIsS0FBSyxZQUFZLDBCQUEwQixtQkFBbUIsS0FBSyx3QkFBd0Isc0JBQXNCLG9CQUFvQixLQUFLLGdCQUFnQixpQkFBaUIsS0FBSyxzQkFBc0Isa0NBQWtDLG1CQUFtQixpQkFBaUIsMEJBQTBCLEtBQUssdUJBQXVCLGlCQUFpQix1Q0FBdUMsV0FBVyxtQkFBbUI7QUFDcjhQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvbWVzc2FnZWJveC5tb2R1bGUuY3NzPzhiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tZXNzYWdlYm94X21haW5Db250YWluZXJfX3BUMVZ4e1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTkyLCAyMDMsMC4xKTtcXHJcXG4gICAgd2lkdGg6IDY4JTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcclxcblxcclxcbn1cXHJcXG4ubWVzc2FnZWJveF9pbm5lckNvbnRhaW5lcl9fNUNyMzh7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIzMSwyMzMsMjM2LDAuOCk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDglO1xcclxcbiAgICAvKiBoZWlnaHQ6IDgwdmg7ICovXFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlYm94X3Byb2ZpbGVDb250YWluZXJfX3YxY0Jpe1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcbiAgLm1lc3NhZ2Vib3hfcHJvZmlsZUNvbnRhaW5lcl9fdjFjQmk6aG92ZXJ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlYm94X25hbWVfX2tybF96e1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTlweDtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlYm94X21lc3NhZ2VDb250YWluZXJfX3pvZ0pBe1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIC8qIGhlaWdodDogNTAlOyAqL1xcclxcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlYm94X3Bob25lSWNvbnNfX0N2VGFme1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA2MyU7XFxyXFxuICB9XFxyXFxuICAubWVzc2FnZWJveF9tZXNzYWdlTGlzdF9fcm1UdFR7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxyXFxuICB9XFxyXFxuICAubWVzc2FnZWJveF9zZW5kTWVzc2FnZV9fa2I4WUd7XFxyXFxuICAgIC8qIG1hcmdpbi1sZWZ0OiA4MzBweDsgKi9cXHJcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xcclxcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZmRkMztcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTBweDtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlYm94X3NlbmRNZXNzYWdldGltZV9fNGVKZnF7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlYm94X3JlY2VpdmVNZXNzYWdlX183SGNZX3tcXHJcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xcclxcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAgXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuLm1lc3NhZ2Vib3hfcmVjZWl2ZXJfXzQ4MDJBe1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLm1lc3NhZ2Vib3hfc2VuZGVyX19iSDVwNXtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuXFxyXFxufVxcclxcbi5tZXNzYWdlYm94X3ZpZGVvQ29udGFpbmVyX184SUhfaXtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgei1pbmRleDogOTk5OTk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxufVxcclxcbi5tZXNzYWdlYm94X3ZpZGVvTG9jYWxfXzg2U1lae1xcclxcbiAgLyogei1pbmRleDogOTk5OTsgKi9cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjIwcHg7XFxyXFxuICBsZWZ0OiAyOTBweDtcXHJcXG4gIC8qIHRvcDogOyAqL1xcclxcblxcclxcbn1cXHJcXG4ubWVzc2FnZWJveF9taWNJY29uX19tS0dXTHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgZmlsbDogd2hpdGU7XFxyXFxuICB0b3A6IDI1MHB4O1xcclxcbiAgbGVmdDogMTIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IDsgKi9cXHJcXG59XFxyXFxuLm1lc3NhZ2Vib3hfdmlkZW9JY29uX19hWm1ZcHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDE3MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRvcDogMjUwcHg7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuXFxyXFxuICB6LWluZGV4OiA5OTk5OTtcXHJcXG59XFxyXFxuLm1lc3NhZ2Vib3hfdmlkZW9SZW1vdGVfX0RHekZue1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubWVzc2FnZWJveF9sb2NhbF9fNzhJbU57XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG4ubWVzc2FnZWJveF9yZW1vdGVfXzdRVmdme1xcclxcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuLm1lc3NhZ2Vib3hfcGhvbmVJY29uQ29udGFpbmVyX19fb2RyR3tcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIHotaW5kZXg6IDk5OTk7XFxyXFxufVxcclxcbi5tZXNzYWdlYm94X3Bob25lSWNvbnNfX0N2VGFme1xcclxcbiAgd2lkdGg6MjBweDtcXHJcXG59XFxyXFxuLm1lc3NhZ2Vib3hfcGhvbmVJY29uc19fQ3ZUYWY6aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB3aWR0aDozMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG59XFxyXFxuLm1lc3NhZ2Vib3hfcGhvbmVJY29uc19fQ3ZUYWY6YWN0aXZle1xcclxcbiAgZmlsbDogI2ZmZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcclxcbiAgXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvbWVzc2FnZWJveC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLHFCQUFxQjs7O0FBR3pCO0FBQ0E7SUFDSSxxQ0FBcUM7SUFDckMsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixxQkFBcUI7O0lBRXJCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIscUJBQXFCOzs7SUFHckIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7QUFFRjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCOztBQUVsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7O0FBRWI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFVBQVU7RUFDVixZQUFZO0VBQ1osMkJBQTJCOztFQUUzQixjQUFjO0FBQ2hCO0FBQ0E7O0FBRUE7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGdDQUFnQzs7QUFFbENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW5Db250YWluZXJ7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAxOTIsIDIwMywwLjEpO1xcclxcbiAgICB3aWR0aDogNjglO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcbi5pbm5lckNvbnRhaW5lcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjMxLDIzMywyMzYsMC44KTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOCU7XFxyXFxuICAgIC8qIGhlaWdodDogODB2aDsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGVDb250YWluZXJ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDhweDtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICB9XFxyXFxuICAucHJvZmlsZUNvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgLm5hbWV7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xcclxcbiAgfVxcclxcbiAgLm1lc3NhZ2VDb250YWluZXJ7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgLyogaGVpZ2h0OiA1MCU7ICovXFxyXFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcclxcbiAgfVxcclxcbiAgLnBob25lSWNvbnN7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDYzJTtcXHJcXG4gIH1cXHJcXG4gIC5tZXNzYWdlTGlzdHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXHJcXG4gIH1cXHJcXG4gIC5zZW5kTWVzc2FnZXtcXHJcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDgzMHB4OyAqL1xcclxcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XFxyXFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7ICBcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlmZGQzO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxMHB4O1xcclxcbiAgfVxcclxcbiAgLnNlbmRNZXNzYWdldGltZXtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgfVxcclxcbiAgLnJlY2VpdmVNZXNzYWdle1xcclxcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XFxyXFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7ICBcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcblxcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4ucmVjZWl2ZXJ7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG4uc2VuZGVye1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG5cXHJcXG59XFxyXFxuLnZpZGVvQ29udGFpbmVye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB6LWluZGV4OiA5OTk5OTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG59XFxyXFxuLnZpZGVvTG9jYWx7XFxyXFxuICAvKiB6LWluZGV4OiA5OTk5OyAqL1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAyMjBweDtcXHJcXG4gIGxlZnQ6IDI5MHB4O1xcclxcbiAgLyogdG9wOiA7ICovXFxyXFxuXFxyXFxufVxcclxcbi5taWNJY29ue1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBmaWxsOiB3aGl0ZTtcXHJcXG4gIHRvcDogMjUwcHg7XFxyXFxuICBsZWZ0OiAxMjBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogOyAqL1xcclxcbn1cXHJcXG4udmlkZW9JY29ue1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogMTcwcHg7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdG9wOiAyNTBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG5cXHJcXG4gIHotaW5kZXg6IDk5OTk5O1xcclxcbn1cXHJcXG4udmlkZW9SZW1vdGV7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5sb2NhbHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcbi5yZW1vdGV7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG4ucGhvbmVJY29uQ29udGFpbmVye1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgei1pbmRleDogOTk5OTtcXHJcXG59XFxyXFxuLnBob25lSWNvbnN7XFxyXFxuICB3aWR0aDoyMHB4O1xcclxcbn1cXHJcXG4ucGhvbmVJY29uczpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHdpZHRoOjMwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbn1cXHJcXG4ucGhvbmVJY29uczphY3RpdmV7XFxyXFxuICBmaWxsOiAjZmZmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxyXFxuICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpbkNvbnRhaW5lclwiOiBcIm1lc3NhZ2Vib3hfbWFpbkNvbnRhaW5lcl9fcFQxVnhcIixcblx0XCJpbm5lckNvbnRhaW5lclwiOiBcIm1lc3NhZ2Vib3hfaW5uZXJDb250YWluZXJfXzVDcjM4XCIsXG5cdFwicHJvZmlsZUNvbnRhaW5lclwiOiBcIm1lc3NhZ2Vib3hfcHJvZmlsZUNvbnRhaW5lcl9fdjFjQmlcIixcblx0XCJuYW1lXCI6IFwibWVzc2FnZWJveF9uYW1lX19rcmxfelwiLFxuXHRcIm1lc3NhZ2VDb250YWluZXJcIjogXCJtZXNzYWdlYm94X21lc3NhZ2VDb250YWluZXJfX3pvZ0pBXCIsXG5cdFwicGhvbmVJY29uc1wiOiBcIm1lc3NhZ2Vib3hfcGhvbmVJY29uc19fQ3ZUYWZcIixcblx0XCJtZXNzYWdlTGlzdFwiOiBcIm1lc3NhZ2Vib3hfbWVzc2FnZUxpc3RfX3JtVHRUXCIsXG5cdFwic2VuZE1lc3NhZ2VcIjogXCJtZXNzYWdlYm94X3NlbmRNZXNzYWdlX19rYjhZR1wiLFxuXHRcInNlbmRNZXNzYWdldGltZVwiOiBcIm1lc3NhZ2Vib3hfc2VuZE1lc3NhZ2V0aW1lX180ZUpmcVwiLFxuXHRcInJlY2VpdmVNZXNzYWdlXCI6IFwibWVzc2FnZWJveF9yZWNlaXZlTWVzc2FnZV9fN0hjWV9cIixcblx0XCJyZWNlaXZlclwiOiBcIm1lc3NhZ2Vib3hfcmVjZWl2ZXJfXzQ4MDJBXCIsXG5cdFwic2VuZGVyXCI6IFwibWVzc2FnZWJveF9zZW5kZXJfX2JINXA1XCIsXG5cdFwidmlkZW9Db250YWluZXJcIjogXCJtZXNzYWdlYm94X3ZpZGVvQ29udGFpbmVyX184SUhfaVwiLFxuXHRcInZpZGVvTG9jYWxcIjogXCJtZXNzYWdlYm94X3ZpZGVvTG9jYWxfXzg2U1laXCIsXG5cdFwibWljSWNvblwiOiBcIm1lc3NhZ2Vib3hfbWljSWNvbl9fbUtHV0xcIixcblx0XCJ2aWRlb0ljb25cIjogXCJtZXNzYWdlYm94X3ZpZGVvSWNvbl9fYVptWXBcIixcblx0XCJ2aWRlb1JlbW90ZVwiOiBcIm1lc3NhZ2Vib3hfdmlkZW9SZW1vdGVfX0RHekZuXCIsXG5cdFwibG9jYWxcIjogXCJtZXNzYWdlYm94X2xvY2FsX183OEltTlwiLFxuXHRcInJlbW90ZVwiOiBcIm1lc3NhZ2Vib3hfcmVtb3RlX183UVZnZlwiLFxuXHRcInBob25lSWNvbkNvbnRhaW5lclwiOiBcIm1lc3NhZ2Vib3hfcGhvbmVJY29uQ29udGFpbmVyX19fb2RyR1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/messagebox.module.css\n"));

/***/ })

});