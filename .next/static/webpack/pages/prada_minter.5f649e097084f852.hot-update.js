"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/prada_minter",{

/***/ "./pages/prada_minter.jsx":
/*!********************************!*\
  !*** ./pages/prada_minter.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _Web3Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Web3Client */ \"./pages/Web3Client.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var _components_Minter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Minter */ \"./pages/components/Minter.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DynamicMinter = ()=>{\n    _s();\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                setWeb3(window.web3);\n            }\n        };\n        loadWeb3();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadAccount = async ()=>{\n            const accounts = await web3.eth.getAccounts();\n            setAccount(accounts[0]);\n        };\n        if (web3) {\n            loadAccount();\n        }\n    }, [\n        web3\n    ]);\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    appearance: \"inverse\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/prada_minter.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        paddingLeft: 30,\n                        paddingTop: 30\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Minter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        contract: _Web3Client__WEBPACK_IMPORTED_MODULE_3__.pradaNFTContract,\n                        account: account,\n                        ifps: \"ipfs://bafkreigdeafb7xsb3z6unl3wpepscivp4tgzwzir3ii27kiapckxcdjoem\",\n                        description: \"The company started in 1913 by Mario Prada and his brother Martino as Fratelli Prada, a leather goods shop in Milan. Initially, the shop sold animal goods, imported English steamer trunks, and handbags. \",\n                        title: \"Prada Minter\",\n                        headline: \"Sure fits alot of stuff in there!\"\n                    }, void 0, false, {\n                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/prada_minter.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/prada_minter.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/prada_minter.jsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(DynamicMinter, \"EdWg4I9NXpQq+VhkjNe9SHvAsIw=\");\n_c = DynamicMinter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicMinter);\nvar _c;\n$RefreshReg$(_c, \"DynamicMinter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcmFkYV9taW50ZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1EO0FBQzNCO0FBRXlCO0FBRVQ7QUFDQTtBQUd4QyxNQUFNTyxnQkFBZ0I7O0lBRWxCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ04sTUFBTVUsV0FBVztZQUNiLElBQUlDLE9BQU9DLFVBQVU7Z0JBQ2pCRCxPQUFPTCxPQUFPLElBQUlMLDRDQUFJQSxDQUFDVSxPQUFPQztnQkFDOUIsTUFBTUQsT0FBT0MsU0FBU0M7Z0JBQ3RCTixRQUFRSSxPQUFPTDtZQUNuQjtRQUNKO1FBRUFJO0lBQ0osR0FBRyxFQUFFO0lBRUxWLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWMsY0FBYztZQUNoQixNQUFNQyxXQUFXLE1BQU1ULEtBQUtVLElBQUlDO1lBQ2hDUixXQUFXTSxRQUFRLENBQUMsRUFBRTtRQUMxQjtRQUVBLElBQUlULE1BQU07WUFDTlE7UUFDSjtJQUNKLEdBQUc7UUFBQ1I7S0FBSztJQUVUO1FBQ0kscUJBQ0ksOERBQUNZOzs4QkFDRyw4REFBQ2YsMERBQU1BO29CQUFDZ0IsWUFBVzs7Ozs7OzhCQUNuQiw4REFBQ0Q7b0JBQUlFLE9BQU87d0JBQUVDLGFBQWE7d0JBQUlDLFlBQVk7b0JBQUc7OEJBQzFDLDRFQUFDbEIsMERBQU1BO3dCQUNQbUIsVUFBVXJCLHlEQUFnQkE7d0JBQzFCTSxTQUFTQTt3QkFDVGdCLE1BQU07d0JBQ05DLGFBQWE7d0JBQ2JDLE9BQU87d0JBQ1BDLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSzFCO0FBR0o7R0EvQ010QjtLQUFBQTtBQWlETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcmFkYV9taW50ZXIuanN4PzAyNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcblxuaW1wb3J0IHsgIHByYWRhTkZUQ29udHJhY3QgfSBmcm9tICcuL1dlYjNDbGllbnQnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgTWludGVyIGZyb20gJy4vY29tcG9uZW50cy9NaW50ZXInXG5cblxuY29uc3QgRHluYW1pY01pbnRlciA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZFdlYjMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICBzZXRXZWIzKHdpbmRvdy53ZWIzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsb2FkV2ViMygpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHdlYjMpIHtcbiAgICAgICAgICAgIGxvYWRBY2NvdW50KCk7XG4gICAgICAgIH1cbiAgICB9LCBbd2ViM10pO1xuXG4gICAge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGFwcGVhcmFuY2U9XCJpbnZlcnNlXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ1RvcDogMzAgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8TWludGVyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtwcmFkYU5GVENvbnRyYWN0fVxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxuICAgICAgICAgICAgICAgICAgICBpZnBzPXtcImlwZnM6Ly9iYWZrcmVpZ2RlYWZiN3hzYjN6NnVubDN3cGVwc2NpdnA0dGd6d3ppcjNpaTI3a2lhcGNreGNkam9lbVwifVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUaGUgY29tcGFueSBzdGFydGVkIGluIDE5MTMgYnkgTWFyaW8gUHJhZGEgYW5kIGhpcyBicm90aGVyIE1hcnRpbm8gYXMgRnJhdGVsbGkgUHJhZGEsIGEgbGVhdGhlciBnb29kcyBzaG9wIGluIE1pbGFuLiBJbml0aWFsbHksIHRoZSBzaG9wIHNvbGQgYW5pbWFsIGdvb2RzLCBpbXBvcnRlZCBFbmdsaXNoIHN0ZWFtZXIgdHJ1bmtzLCBhbmQgaGFuZGJhZ3MuIFwifVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17XCJQcmFkYSBNaW50ZXJcIn1cbiAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmU9e1wiU3VyZSBmaXRzIGFsb3Qgb2Ygc3R1ZmYgaW4gdGhlcmUhXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljTWludGVyO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjMiLCJwcmFkYU5GVENvbnRyYWN0IiwiSGVhZGVyIiwiTWludGVyIiwiRHluYW1pY01pbnRlciIsIndlYjMiLCJzZXRXZWIzIiwiYWNjb3VudCIsInNldEFjY291bnQiLCJsb2FkV2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwibG9hZEFjY291bnQiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwiZGl2IiwiYXBwZWFyYW5jZSIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwiY29udHJhY3QiLCJpZnBzIiwiZGVzY3JpcHRpb24iLCJ0aXRsZSIsImhlYWRsaW5lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/prada_minter.jsx\n"));

/***/ })

});