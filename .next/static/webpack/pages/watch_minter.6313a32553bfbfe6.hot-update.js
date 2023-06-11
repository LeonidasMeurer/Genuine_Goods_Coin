"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/watch_minter",{

/***/ "./pages/components/Minter.jsx":
/*!*************************************!*\
  !*** ./pages/components/Minter.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rsuite */ \"./node_modules/rsuite/esm/index.js\");\n/* harmony import */ var _Web3Client_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Web3Client.js */ \"./pages/Web3Client.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Minter = (param)=>{\n    let { contract , account , ifps , description  } = param;\n    _s();\n    const [totalSupply, setTotalSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [maxSupply, setMaxSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [nftPrice, setNftPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const setData = async ()=>{\n            if (contract) {\n                setNftPrice(Number(await contract.methods.getPrice().call()));\n                setTotalSupply(Number(await contract.methods.getTotalSupply().call()));\n                setMaxSupply(Number(await contract.methods.getMaxSupply().call()));\n            }\n            ;\n        };\n        setData();\n    }, [\n        contract\n    ]);\n    const handleCreateNFT = async ()=>{\n        if (contract) {\n            try {\n                console.log(\"NFT Address:\", contract._address);\n                const price = Number(await contract.methods.getPrice().call());\n                console.log(contract.methods.totalSupply());\n                await contract.methods.mintNFT(account, ifps).send({\n                    from: account,\n                    value: price\n                });\n                setNftPrice(await contract.methods.getPrice().call());\n                setTotalSupply(Number(await contract.methods.getTotalSupply().call()));\n                setMaxSupply(Number(await contract.methods.getMaxSupply().call()));\n            } catch (error) {\n                console.error(error);\n                alert(\"Failed to load!\");\n            }\n        }\n    };\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Prada Minter\"\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            style: {\n                                paddingBottom: 10\n                            },\n                            children: [\n                                \"Logged in as: \",\n                                account\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.FlexboxGrid, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.FlexboxGrid.Item, {\n                                    colspan: 5,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: _Web3Client_js__WEBPACK_IMPORTED_MODULE_2__.ifpsToPicture.get(ifps),\n                                        width: 350,\n                                        height: 250\n                                    }, void 0, false, {\n                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.FlexboxGrid.Item, {\n                                    colspan: 18,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.Panel, {\n                                        header: \"Sure fits alot of stuff in there!\",\n                                        bordered: true,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                style: {\n                                                    paddingBottom: 10\n                                                },\n                                                children: [\n                                                    \"Price: \",\n                                                    nftPrice,\n                                                    \" wei\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                style: {\n                                                    paddingBottom: 10\n                                                },\n                                                children: [\n                                                    \"Total Supply: \",\n                                                    maxSupply\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                style: {\n                                                    paddingBottom: 10\n                                                },\n                                                children: [\n                                                    \"Amount Sold: \",\n                                                    totalSupply\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.Progress.Line, {\n                                                percent: totalSupply / maxSupply * 100,\n                                                showInfo: false\n                                            }, void 0, false, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h8\", {\n                                                style: {\n                                                    paddingTop: 30\n                                                },\n                                                children: description\n                                            }, void 0, false, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                flexDirection: \"row\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    appearance: \"primary\",\n                    onClick: ()=>handleCreateNFT(),\n                    style: {\n                        marginTop: 10\n                    },\n                    children: \"Buy\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(Minter, \"f4tN5itrbyzqn0/Zg3mZakoeDdE=\");\n_c = Minter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minter);\nvar _c;\n$RefreshReg$(_c, \"Minter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVtQixXQUFXO29CQUFHOzhCQUFHOzs7Ozs7Ozs7Ozs7SUFHekc7QUFDSjtHQS9FTW5EO0tBQUFBO0FBaUZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTWludGVyLmpzeD9kZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBQYW5lbCwgRmxleGJveEdyaWQsIFByb2dyZXNzIH0gZnJvbSAncnN1aXRlJztcbmltcG9ydCB7IGlmcHNUb1BpY3R1cmUgfSBmcm9tICcuLi9XZWIzQ2xpZW50LmpzJztcblxuXG5jb25zdCBNaW50ZXIgPSAoe2NvbnRyYWN0LCBhY2NvdW50LCBpZnBzLCBkZXNjcmlwdGlvbn0pID0+IHtcblxuXG4gICAgY29uc3QgW3RvdGFsU3VwcGx5LCBzZXRUb3RhbFN1cHBseV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbWF4U3VwcGx5LCBzZXRNYXhTdXBwbHldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW25mdFByaWNlLCBzZXROZnRQcmljZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgaWYoY29udHJhY3QpIHtcbiAgICAgICAgICBzZXROZnRQcmljZShOdW1iZXIoYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRQcmljZSgpLmNhbGwoKSkpO1xuICAgICAgICAgIHNldFRvdGFsU3VwcGx5KE51bWJlcihhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldFRvdGFsU3VwcGx5KCkuY2FsbCgpKSk7XG4gICAgICAgICAgc2V0TWF4U3VwcGx5KE51bWJlcihhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldE1heFN1cHBseSgpLmNhbGwoKSkpO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgICBzZXREYXRhKCk7XG4gICAgfSwgW2NvbnRyYWN0XSk7XG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVORlQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChjb250cmFjdCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5GVCBBZGRyZXNzOlwiLCBjb250cmFjdC5fYWRkcmVzcylcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMuZ2V0UHJpY2UoKS5jYWxsKCkpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29udHJhY3QubWV0aG9kcy50b3RhbFN1cHBseSgpKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMubWludE5GVChcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgaWZwcylcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50LCB2YWx1ZTogcHJpY2UgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0TmZ0UHJpY2UoYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRQcmljZSgpLmNhbGwoKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvdGFsU3VwcGx5KE51bWJlcihhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldFRvdGFsU3VwcGx5KCkuY2FsbCgpKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldE1heFN1cHBseShOdW1iZXIoYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRNYXhTdXBwbHkoKS5jYWxsKCkpKTtcblxuXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGxvYWQhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+UHJhZGEgTWludGVyPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5Mb2dnZWQgaW4gYXM6IHthY2NvdW50fTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hHcmlkLkl0ZW0gY29sc3Bhbj17NX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpZnBzVG9QaWN0dXJlLmdldChpZnBzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNTB9IGhlaWdodD17MjUwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleGJveEdyaWQuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleGJveEdyaWQuSXRlbSBjb2xzcGFuPXsxOH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9XCJTdXJlIGZpdHMgYWxvdCBvZiBzdHVmZiBpbiB0aGVyZSFcIiBib3JkZXJlZCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5QcmljZToge25mdFByaWNlfSB3ZWk8L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMTAgfX0+VG90YWwgU3VwcGx5OiB7bWF4U3VwcGx5fTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5BbW91bnQgU29sZDoge3RvdGFsU3VwcGx5fTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcy5MaW5lIHBlcmNlbnQ9e3RvdGFsU3VwcGx5IC8gbWF4U3VwcGx5ICogMTAwfSBzaG93SW5mbz17ZmFsc2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoOCBzdHlsZT17eyBwYWRkaW5nVG9wOiAzMCB9fT57ZGVzY3JpcHRpb259PC9oOD5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hHcmlkLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ3JlYXRlTkZUKCl9IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+QnV5PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaW50ZXI7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwiUGFuZWwiLCJGbGV4Ym94R3JpZCIsIlByb2dyZXNzIiwiaWZwc1RvUGljdHVyZSIsIk1pbnRlciIsImNvbnRyYWN0IiwiYWNjb3VudCIsImlmcHMiLCJkZXNjcmlwdGlvbiIsInRvdGFsU3VwcGx5Iiwic2V0VG90YWxTdXBwbHkiLCJtYXhTdXBwbHkiLCJzZXRNYXhTdXBwbHkiLCJuZnRQcmljZSIsInNldE5mdFByaWNlIiwic2V0RGF0YSIsIk51bWJlciIsIm1ldGhvZHMiLCJnZXRQcmljZSIsImNhbGwiLCJnZXRUb3RhbFN1cHBseSIsImdldE1heFN1cHBseSIsImhhbmRsZUNyZWF0ZU5GVCIsImNvbnNvbGUiLCJsb2ciLCJfYWRkcmVzcyIsInByaWNlIiwibWludE5GVCIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJlcnJvciIsImFsZXJ0IiwiZGl2IiwiaDMiLCJoNiIsInN0eWxlIiwicGFkZGluZ0JvdHRvbSIsIkl0ZW0iLCJjb2xzcGFuIiwiaW1nIiwic3JjIiwiZ2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJoZWFkZXIiLCJib3JkZXJlZCIsIkxpbmUiLCJwZXJjZW50Iiwic2hvd0luZm8iLCJoOCIsInBhZGRpbmdUb3AiLCJmbGV4RGlyZWN0aW9uIiwiYXBwZWFyYW5jZSIsIm9uQ2xpY2siLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Minter.jsx\n"));

/***/ })

});