"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dynamic_minter",{

/***/ "./pages/dynamic_minter.jsx":
/*!**********************************!*\
  !*** ./pages/dynamic_minter.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _Web3Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Web3Client */ \"./pages/Web3Client.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var _components_Minter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Minter */ \"./pages/components/Minter.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DynamicMinter = ()=>{\n    _s();\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                setWeb3(window.web3);\n            }\n        };\n        loadWeb3();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadAccount = async ()=>{\n            const accounts = await web3.eth.getAccounts();\n            setAccount(accounts[0]);\n        };\n        if (web3) {\n            loadAccount();\n        }\n    }, [\n        web3\n    ]);\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    appearance: \"inverse\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/dynamic_minter.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        paddingLeft: 30,\n                        paddingTop: 30\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Minter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        contract: _Web3Client__WEBPACK_IMPORTED_MODULE_3__.pradaNFTContract,\n                        account: account,\n                        ifps: \"ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem\",\n                        description: \"The company started in 1913 by Mario Prada and his brother Martino as Fratelli Prada, a leather goods shop in Milan. Initially, the shop sold animal goods, imported English steamer trunks, and handbags. \"\n                    }, void 0, false, {\n                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/dynamic_minter.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/dynamic_minter.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/dynamic_minter.jsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(DynamicMinter, \"EdWg4I9NXpQq+VhkjNe9SHvAsIw=\");\n_c = DynamicMinter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicMinter);\nvar _c;\n$RefreshReg$(_c, \"DynamicMinter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9keW5hbWljX21pbnRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDM0I7QUFFeUI7QUFFVDtBQUNBO0FBR3hDLE1BQU1PLGdCQUFnQjs7SUFFbEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxXQUFXO1lBQ2IsSUFBSUMsT0FBT0MsVUFBVTtnQkFDakJELE9BQU9MLE9BQU8sSUFBSUwsNENBQUlBLENBQUNVLE9BQU9DO2dCQUM5QixNQUFNRCxPQUFPQyxTQUFTQztnQkFDdEJOLFFBQVFJLE9BQU9MO1lBQ25CO1FBQ0o7UUFFQUk7SUFDSixHQUFHLEVBQUU7SUFFTFYsZ0RBQVNBLENBQUM7UUFDTixNQUFNYyxjQUFjO1lBQ2hCLE1BQU1DLFdBQVcsTUFBTVQsS0FBS1UsSUFBSUM7WUFDaENSLFdBQVdNLFFBQVEsQ0FBQyxFQUFFO1FBQzFCO1FBRUEsSUFBSVQsTUFBTTtZQUNOUTtRQUNKO0lBQ0osR0FBRztRQUFDUjtLQUFLO0lBRVQ7UUFDSSxxQkFDSSw4REFBQ1k7OzhCQUNHLDhEQUFDZiwwREFBTUE7b0JBQUNnQixZQUFXOzs7Ozs7OEJBQ25CLDhEQUFDRDtvQkFBSUUsT0FBTzt3QkFBRUMsYUFBYTt3QkFBSUMsWUFBWTtvQkFBRzs4QkFDMUMsNEVBQUNsQiwwREFBTUE7d0JBQ1BtQixVQUFVckIseURBQWdCQTt3QkFDMUJNLFNBQVNBO3dCQUNUZ0IsTUFBTTt3QkFDTkMsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNN0I7QUFHSjtHQTlDTXBCO0tBQUFBO0FBZ0ROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2R5bmFtaWNfbWludGVyLmpzeD9kOWU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5cbmltcG9ydCB7ICBwcmFkYU5GVENvbnRyYWN0IH0gZnJvbSAnLi9XZWIzQ2xpZW50JztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IE1pbnRlciBmcm9tICcuL2NvbXBvbmVudHMvTWludGVyJ1xuXG5cbmNvbnN0IER5bmFtaWNNaW50ZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRXZWIzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgc2V0V2ViMyh3aW5kb3cud2ViMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbG9hZFdlYjMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIHNldEFjY291bnQoYWNjb3VudHNbMF0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh3ZWIzKSB7XG4gICAgICAgICAgICBsb2FkQWNjb3VudCgpO1xuICAgICAgICB9XG4gICAgfSwgW3dlYjNdKTtcblxuICAgIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcHBlYXJhbmNlPVwiaW52ZXJzZVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdUb3A6IDMwIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPE1pbnRlclxuICAgICAgICAgICAgICAgICAgICBjb250cmFjdD17cHJhZGFORlRDb250cmFjdH1cbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgaWZwcz17XCJpcGZzOi8vYmFma3JlaWdkZWFmYjd4c2IzejZ1bmwzd3BlcHNjaXZwNHRnend6aXIzaWkyN2tpYXBja3hjZGpvZW1cIn1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiVGhlIGNvbXBhbnkgc3RhcnRlZCBpbiAxOTEzIGJ5IE1hcmlvIFByYWRhIGFuZCBoaXMgYnJvdGhlciBNYXJ0aW5vIGFzIEZyYXRlbGxpIFByYWRhLCBhIGxlYXRoZXIgZ29vZHMgc2hvcCBpbiBNaWxhbi4gSW5pdGlhbGx5LCB0aGUgc2hvcCBzb2xkIGFuaW1hbCBnb29kcywgaW1wb3J0ZWQgRW5nbGlzaCBzdGVhbWVyIHRydW5rcywgYW5kIGhhbmRiYWdzLiBcIn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY01pbnRlcjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWIzIiwicHJhZGFORlRDb250cmFjdCIsIkhlYWRlciIsIk1pbnRlciIsIkR5bmFtaWNNaW50ZXIiLCJ3ZWIzIiwic2V0V2ViMyIsImFjY291bnQiLCJzZXRBY2NvdW50IiwibG9hZFdlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImxvYWRBY2NvdW50IiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsImRpdiIsImFwcGVhcmFuY2UiLCJzdHlsZSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsImNvbnRyYWN0IiwiaWZwcyIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dynamic_minter.jsx\n"));

/***/ })

});