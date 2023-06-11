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

/***/ "./pages/components/Minter.jsx":
/*!*************************************!*\
  !*** ./pages/components/Minter.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rsuite */ \"./node_modules/rsuite/esm/index.js\");\n/* harmony import */ var _Web3Client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Web3Client.js */ \"./pages/Web3Client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Minter = (param)=>{\n    let { contract , account , ifps , description , title  } = param;\n    _s();\n    const [totalSupply, setTotalSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [maxSupply, setMaxSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [nftPrice, setNftPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const setData = async ()=>{\n            if (contract) {\n                setNftPrice(Number(await contract.methods.getPrice().call()));\n                setTotalSupply(Number(await contract.methods.getTotalSupply().call()));\n                setMaxSupply(Number(await contract.methods.getMaxSupply().call()));\n            }\n            ;\n        };\n        setData();\n    }, [\n        contract\n    ]);\n    const handleCreateNFT = async ()=>{\n        if (contract) {\n            try {\n                console.log(\"NFT Address:\", contract._address);\n                const price = Number(await contract.methods.getPrice().call());\n                console.log(contract.methods.totalSupply());\n                await contract.methods.mintNFT(account, ifps).send({\n                    from: account,\n                    value: price\n                });\n                setNftPrice(await contract.methods.getPrice().call());\n                setTotalSupply(Number(await contract.methods.getTotalSupply().call()));\n                setMaxSupply(Number(await contract.methods.getMaxSupply().call()));\n            } catch (error) {\n                console.error(error);\n                alert(\"Failed to load!\");\n            }\n        }\n    };\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            style: {\n                                paddingBottom: 10\n                            },\n                            children: [\n                                \"Logged in as: \",\n                                account\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.FlexboxGrid, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.FlexboxGrid.Item, {\n                                    colspan: 5,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: _Web3Client_js__WEBPACK_IMPORTED_MODULE_2__.ifpsToPicture.get(ifps),\n                                        width: 350,\n                                        height: 250\n                                    }, void 0, false, {\n                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.FlexboxGrid.Item, {\n                                    colspan: 18,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.Panel, {\n                                        header: \"Sure fits alot of stuff in there!\",\n                                        bordered: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                style: {\n                                                    paddingBottom: 10\n                                                },\n                                                children: [\n                                                    \"Price: \",\n                                                    nftPrice,\n                                                    \" wei\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                style: {\n                                                    paddingBottom: 10\n                                                },\n                                                children: [\n                                                    \"Total Supply: \",\n                                                    maxSupply\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                style: {\n                                                    paddingBottom: 10\n                                                },\n                                                children: [\n                                                    \"Amount Sold: \",\n                                                    totalSupply\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.Progress.Line, {\n                                                percent: totalSupply / maxSupply * 100,\n                                                showInfo: false\n                                            }, void 0, false, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h8\", {\n                                                style: {\n                                                    paddingTop: 30\n                                                },\n                                                children: description\n                                            }, void 0, false, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                flexDirection: \"row\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    appearance: \"primary\",\n                    onClick: ()=>handleCreateNFT(),\n                    style: {\n                        marginTop: 10\n                    },\n                    children: \"Buy\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(Minter, \"f4tN5itrbyzqn0/Zg3mZakoeDdE=\");\n_c = Minter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minter);\nvar _c;\n$RefreshReg$(_c, \"Minter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBbUJjLE9BQU87d0JBQUVtQixXQUFXO29CQUFHOzhCQUFHOzs7Ozs7Ozs7Ozs7SUFHekc7QUFDSjtHQS9FTXBEO0tBQUFBO0FBaUZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTWludGVyLmpzeD9kZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBQYW5lbCwgRmxleGJveEdyaWQsIFByb2dyZXNzIH0gZnJvbSAncnN1aXRlJztcbmltcG9ydCB7IGlmcHNUb1BpY3R1cmUgfSBmcm9tICcuLi9XZWIzQ2xpZW50LmpzJztcblxuXG5jb25zdCBNaW50ZXIgPSAoe2NvbnRyYWN0LCBhY2NvdW50LCBpZnBzLCBkZXNjcmlwdGlvbiwgdGl0bGV9KSA9PiB7XG5cblxuICAgIGNvbnN0IFt0b3RhbFN1cHBseSwgc2V0VG90YWxTdXBwbHldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21heFN1cHBseSwgc2V0TWF4U3VwcGx5XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtuZnRQcmljZSwgc2V0TmZ0UHJpY2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmKGNvbnRyYWN0KSB7XG4gICAgICAgICAgc2V0TmZ0UHJpY2UoTnVtYmVyKGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0UHJpY2UoKS5jYWxsKCkpKTtcbiAgICAgICAgICBzZXRUb3RhbFN1cHBseShOdW1iZXIoYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRUb3RhbFN1cHBseSgpLmNhbGwoKSkpO1xuICAgICAgICAgIHNldE1heFN1cHBseShOdW1iZXIoYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRNYXhTdXBwbHkoKS5jYWxsKCkpKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgICAgc2V0RGF0YSgpO1xuICAgIH0sIFtjb250cmFjdF0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlTkZUID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoY29udHJhY3QpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJORlQgQWRkcmVzczpcIiwgY29udHJhY3QuX2FkZHJlc3MpXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IE51bWJlcihhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldFByaWNlKCkuY2FsbCgpKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRyYWN0Lm1ldGhvZHMudG90YWxTdXBwbHkoKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLm1pbnRORlQoXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGlmcHMpXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudCwgdmFsdWU6IHByaWNlIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldE5mdFByaWNlKGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0UHJpY2UoKS5jYWxsKCkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUb3RhbFN1cHBseShOdW1iZXIoYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRUb3RhbFN1cHBseSgpLmNhbGwoKSkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRNYXhTdXBwbHkoTnVtYmVyKGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0TWF4U3VwcGx5KCkuY2FsbCgpKSk7XG5cblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byBsb2FkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDEwIH19PkxvZ2dlZCBpbiBhczoge2FjY291bnR9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveEdyaWQuSXRlbSBjb2xzcGFuPXs1fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2lmcHNUb1BpY3R1cmUuZ2V0KGlmcHMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM1MH0gaGVpZ2h0PXsyNTB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Ym94R3JpZC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZC5JdGVtIGNvbHNwYW49ezE4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhbmVsIGhlYWRlcj1cIlN1cmUgZml0cyBhbG90IG9mIHN0dWZmIGluIHRoZXJlIVwiIGJvcmRlcmVkID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDEwIH19PlByaWNlOiB7bmZ0UHJpY2V9IHdlaTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5Ub3RhbCBTdXBwbHk6IHttYXhTdXBwbHl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDEwIH19PkFtb3VudCBTb2xkOiB7dG90YWxTdXBwbHl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzLkxpbmUgcGVyY2VudD17dG90YWxTdXBwbHkgLyBtYXhTdXBwbHkgKiAxMDB9IHNob3dJbmZvPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg4IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDMwIH19PntkZXNjcmlwdGlvbn08L2g4PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveEdyaWQuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdyb3cnIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDcmVhdGVORlQoKX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5CdXk8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbnRlcjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJQYW5lbCIsIkZsZXhib3hHcmlkIiwiUHJvZ3Jlc3MiLCJpZnBzVG9QaWN0dXJlIiwiTWludGVyIiwiY29udHJhY3QiLCJhY2NvdW50IiwiaWZwcyIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJ0b3RhbFN1cHBseSIsInNldFRvdGFsU3VwcGx5IiwibWF4U3VwcGx5Iiwic2V0TWF4U3VwcGx5IiwibmZ0UHJpY2UiLCJzZXROZnRQcmljZSIsInNldERhdGEiLCJOdW1iZXIiLCJtZXRob2RzIiwiZ2V0UHJpY2UiLCJjYWxsIiwiZ2V0VG90YWxTdXBwbHkiLCJnZXRNYXhTdXBwbHkiLCJoYW5kbGVDcmVhdGVORlQiLCJjb25zb2xlIiwibG9nIiwiX2FkZHJlc3MiLCJwcmljZSIsIm1pbnRORlQiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwiZXJyb3IiLCJhbGVydCIsImRpdiIsImgzIiwiaDYiLCJzdHlsZSIsInBhZGRpbmdCb3R0b20iLCJJdGVtIiwiY29sc3BhbiIsImltZyIsInNyYyIsImdldCIsIndpZHRoIiwiaGVpZ2h0IiwiaGVhZGVyIiwiYm9yZGVyZWQiLCJMaW5lIiwicGVyY2VudCIsInNob3dJbmZvIiwiaDgiLCJwYWRkaW5nVG9wIiwiZmxleERpcmVjdGlvbiIsImFwcGVhcmFuY2UiLCJvbkNsaWNrIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Minter.jsx\n"));

/***/ })

});