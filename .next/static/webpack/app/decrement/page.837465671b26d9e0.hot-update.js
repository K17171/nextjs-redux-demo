"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/decrement/page",{

/***/ "(app-pages-browser)/./src/app/decrement/page.tsx":
/*!************************************!*\
  !*** ./src/app/decrement/page.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _redux_features_counterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/features/counterSlice */ \"(app-pages-browser)/./src/redux/features/counterSlice.ts\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/hooks */ \"(app-pages-browser)/./src/redux/hooks/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DecrementPage = ()=>{\n    _s();\n    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const count = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)({\n        \"DecrementPage.useAppSelector[count]\": (state)=>state.counter.value\n    }[\"DecrementPage.useAppSelector[count]\"]);\n    const handleClick = ()=>{\n        dispatch((0,_redux_features_counterSlice__WEBPACK_IMPORTED_MODULE_2__.decrement)());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-500 to-pink-600 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold mb-8\",\n                children: \"Decrement the Count\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs-redux-demo1\\\\src\\\\app\\\\decrement\\\\page.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl\",\n                        children: \"Current Count:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs-redux-demo1\\\\src\\\\app\\\\decrement\\\\page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-8xl font-extrabold mt-4\",\n                        children: count\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs-redux-demo1\\\\src\\\\app\\\\decrement\\\\page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs-redux-demo1\\\\src\\\\app\\\\decrement\\\\page.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                className: \"mt-10 px-6 py-3 bg-gray-700 text-lg font-medium rounded-lg hover:bg-gray-800 transition\",\n                children: \"Decrement\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs-redux-demo1\\\\src\\\\app\\\\decrement\\\\page.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    className: \"px-6 py-3 bg-blue-500 text-lg font-medium rounded-lg hover:bg-blue-600 transition\",\n                    children: \"Back to Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs-redux-demo1\\\\src\\\\app\\\\decrement\\\\page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs-redux-demo1\\\\src\\\\app\\\\decrement\\\\page.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\nextjs-redux-demo1\\\\src\\\\app\\\\decrement\\\\page.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DecrementPage, \"+hTsZxwFI0D4w/lFWzVWa7ZzUE0=\", false, function() {\n    return [\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = DecrementPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecrementPage);\nvar _c;\n$RefreshReg$(_c, \"DecrementPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGVjcmVtZW50L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFNkI7QUFDaUM7QUFDSztBQUduRSxNQUFNSSxnQkFBMEI7O0lBQzVCLE1BQU1DLFdBQVdILDREQUFjQTtJQUMvQixNQUFNSSxRQUFRSCw0REFBY0E7K0NBQUMsQ0FBQ0ksUUFBcUJBLE1BQU1DLE9BQU8sQ0FBQ0MsS0FBSzs7SUFFdEUsTUFBTUMsY0FBYztRQUNoQkwsU0FBU0osdUVBQVNBO0lBQ3RCO0lBRUEscUJBQ0ksOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0U7d0JBQUVGLFdBQVU7a0NBQVc7Ozs7OztrQ0FDeEIsOERBQUNFO3dCQUFFRixXQUFVO2tDQUFnQ047Ozs7Ozs7Ozs7OzswQkFFakQsOERBQUNTO2dCQUNHQyxTQUFTTjtnQkFDVEUsV0FBVTswQkFDYjs7Ozs7OzBCQUdELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ1osaURBQUlBO29CQUFDaUIsTUFBSztvQkFBSUwsV0FBVTs4QkFBb0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdIO0dBNUJNUjs7UUFDZUYsd0RBQWNBO1FBQ2pCQyx3REFBY0E7OztLQUYxQkM7QUE4Qk4saUVBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWRtaW5cXERlc2t0b3BcXG5leHRqcy1yZWR1eC1kZW1vMVxcc3JjXFxhcHBcXGRlY3JlbWVudFxccGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBkZWNyZW1lbnQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvZmVhdHVyZXMvY291bnRlclNsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi8uLi9yZWR1eC9ob29rc1wiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmNvbnN0IERlY3JlbWVudFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgY291bnQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGRlY3JlbWVudCgpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tcmVkLTUwMCB0by1waW5rLTYwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgbWItOFwiPkRlY3JlbWVudCB0aGUgQ291bnQ8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPkN1cnJlbnQgQ291bnQ6PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC04eGwgZm9udC1leHRyYWJvbGQgbXQtNFwiPntjb3VudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIHB4LTYgcHktMyBiZy1ncmF5LTcwMCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgaG92ZXI6YmctZ3JheS04MDAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlY3JlbWVudFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJweC02IHB5LTMgYmctYmx1ZS01MDAgdGV4dC1sZyBmb250LW1lZGl1bSByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNjAwIHRyYW5zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVjcmVtZW50UGFnZTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJkZWNyZW1lbnQiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiRGVjcmVtZW50UGFnZSIsImRpc3BhdGNoIiwiY291bnQiLCJzdGF0ZSIsImNvdW50ZXIiLCJ2YWx1ZSIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/decrement/page.tsx\n"));

/***/ })

});