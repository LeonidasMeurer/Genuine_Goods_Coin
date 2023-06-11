"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[token]",{

/***/ "./pages/[token].js":
/*!**************************!*\
  !*** ./pages/[token].js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Web3Client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Web3Client */ \"./pages/Web3Client.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var _components_ListedForSale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ListedForSale */ \"./pages/components/ListedForSale.jsx\");\n/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rsuite */ \"./node_modules/rsuite/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Token = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const tokenId = router.query.token;\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tokenURI, setTokenURI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                setWeb3(window.web3);\n            }\n        };\n        loadWeb3();\n    }, []);\n    // useEffect(() => {\n    //     const loadContract = async () => {\n    //         try {\n    //             const networkId = await web3.eth.net.getId();\n    //             const deployedNetwork = GoodsNFT.networks[networkId];\n    //             const instance = new web3.eth.Contract(\n    //                 GoodsNFT.abi,\n    //                 deployedNetwork && deployedNetwork.address\n    //             );\n    //             setContract(instance);\n    //         } catch (error) {\n    //             console.error(error);\n    //         }\n    //     };\n    //     if (web3) {\n    //         loadContract();\n    //     }\n    // }, [web3]);\n    // useEffect(() => {\n    //     const loadContract = async () => {\n    //         try {\n    //             const networkId = await web3.eth.net.getId();\n    //             const deployedNetwork = PradaNFT.networks[networkId];\n    //             const instance = new web3.eth.Contract(\n    //                 PradaNFT.abi,\n    //                 deployedNetwork && deployedNetwork.address\n    //             );\n    //             setPradaNFTContract(instance);\n    //         } catch (error) {\n    //             console.error(error);\n    //         }\n    //     };\n    //     if (web3) {\n    //         loadContract();\n    //     }\n    // }, [web3]);\n    // useEffect(() => {\n    //     const loadContract = async () => {\n    //         try {\n    //             const networkId = await web3.eth.net.getId();\n    //             const deployedNetwork = Market.networks[networkId];\n    //             const instance = new web3.eth.Contract(\n    //                 Market.abi,\n    //                 deployedNetwork && deployedNetwork.address\n    //             );\n    //             setMarketContract(instance);\n    //         } catch (error) {\n    //             console.error(error);\n    //         }\n    //     };\n    //     if (web3) {\n    //         loadContract();\n    //     }\n    // }, [web3]);\n    // useEffect(() => {\n    //     const loadAccount = async () => {\n    //         const accounts = await web3.eth.getAccounts();\n    //         setAccount(accounts[0]);\n    //     };\n    //     if (web3) {\n    //         loadAccount();\n    //     }\n    // }, [web3]);\n    const getImage = async ()=>{\n        const token = await _Web3Client__WEBPACK_IMPORTED_MODULE_4__.marketContract.methods.getListing(tokenId).call();\n        console.log(token.token);\n        console.log(_Web3Client__WEBPACK_IMPORTED_MODULE_4__.goodsNFTContract._address);\n        if (token.token == _Web3Client__WEBPACK_IMPORTED_MODULE_4__.goodsNFTContract._address) {\n            console.log(true);\n            setTokenURI(await _Web3Client__WEBPACK_IMPORTED_MODULE_4__.goodsNFTContract.methods.tokenURI(Number(token.tokenId)).call());\n        } else {\n            console.log(false);\n            setTokenURI(await _Web3Client__WEBPACK_IMPORTED_MODULE_4__.pradaNFTContract.methods.tokenURI(Number(token.tokenId)).call());\n        }\n        setLoading(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getImage();\n    }, [\n        loading\n    ]);\n    // if(!marketContract || !goodsNFTContract || !pradaNFTContract) {\n    //     return (\n    //         <h2>loading...</h2>\n    //     )\n    // }\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    appearance: \"inverse\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                    lineNumber: 141,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        paddingLeft: 30,\n                        paddingTop: 30,\n                        paddingBottom: 30\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        \"Token Id: \",\n                                        tokenId\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                                    lineNumber: 144,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: [\n                                        \"Token URI: \",\n                                        tokenURI\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                                    lineNumber: 145,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: _components_ListedForSale__WEBPACK_IMPORTED_MODULE_6__.ifpsToPicture.get(tokenURI),\n                                    width: 250,\n                                    height: 250\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                                    lineNumber: 146,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                            lineNumber: 143,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: ()=>getImage(),\n                            style: {\n                                paddingTop: 30\n                            },\n                            children: \"Refresh!\"\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                            lineNumber: 148,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                    lineNumber: 142,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n            lineNumber: 140,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(Token, \"eLqRwiuGF32PnIuRm3b//DxYQhA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVDLGFBQWE7d0JBQUlDLFlBQVk7d0JBQUlDLGVBQWU7b0JBQUc7O3NDQUM3RCw4REFBQ0w7OzhDQUNHLDhEQUFDTTs7d0NBQUc7d0NBQVczQjs7Ozs7Ozs4Q0FDZiw4REFBQzRCOzt3Q0FBRzt3Q0FBWXZCOzs7Ozs7OzhDQUNoQiw4REFBQ3dCO29DQUFJQyxLQUFLbEMsd0VBQWlCbUMsQ0FBQzFCO29DQUFXMkIsT0FBTztvQ0FBS0MsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUUvRCw4REFBQ3BDLDBDQUFNQTs0QkFBQ3FDLFNBQVMsSUFBTXJCOzRCQUFZVSxPQUFPO2dDQUFFRSxZQUFZOzRCQUFHO3NDQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJL0U7QUFHSjtHQTVJTTNCOztRQUVhUCxrREFBU0E7OztLQUZ0Qk87QUE4SU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Rva2VuXS5qcz8zM2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IGdvb2RzTkZUQ29udHJhY3QsIHByYWRhTkZUQ29udHJhY3QsIG1hcmtldENvbnRyYWN0IH0gZnJvbSAnLi9XZWIzQ2xpZW50JztcblxuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgaWZwc1RvUGljdHVyZSB9IGZyb20gJy4vY29tcG9uZW50cy9MaXN0ZWRGb3JTYWxlJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JzdWl0ZSc7XG5cblxuXG5cbmNvbnN0IFRva2VuID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgdG9rZW5JZCA9IHJvdXRlci5xdWVyeS50b2tlbjtcblxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0b2tlblVSSSwgc2V0VG9rZW5VUkldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRXZWIzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgc2V0V2ViMyh3aW5kb3cud2ViMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbG9hZFdlYjMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBsb2FkQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICB0cnkge1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IEdvb2RzTkZULm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgLy8gICAgICAgICAgICAgICAgIEdvb2RzTkZULmFiaSxcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzXG4gICAgLy8gICAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XG4gICAgLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICAgIGlmICh3ZWIzKSB7XG4gICAgLy8gICAgICAgICBsb2FkQ29udHJhY3QoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIFt3ZWIzXSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBsb2FkQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICB0cnkge1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFByYWRhTkZULm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgLy8gICAgICAgICAgICAgICAgIFByYWRhTkZULmFiaSxcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzXG4gICAgLy8gICAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgICAgICBzZXRQcmFkYU5GVENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgaWYgKHdlYjMpIHtcbiAgICAvLyAgICAgICAgIGxvYWRDb250cmFjdCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3dlYjNdKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGxvYWRDb250cmFjdCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gTWFya2V0Lm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgLy8gICAgICAgICAgICAgICAgIE1hcmtldC5hYmksXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgIC8vICAgICAgICAgICAgICk7XG4gICAgLy8gICAgICAgICAgICAgc2V0TWFya2V0Q29udHJhY3QoaW5zdGFuY2UpO1xuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICBpZiAod2ViMykge1xuICAgIC8vICAgICAgICAgbG9hZENvbnRyYWN0KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9LCBbd2ViM10pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgbG9hZEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgLy8gICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICBpZiAod2ViMykge1xuICAgIC8vICAgICAgICAgbG9hZEFjY291bnQoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIFt3ZWIzXSk7XG5cbiAgICBjb25zdCBnZXRJbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBtYXJrZXRDb250cmFjdC5tZXRob2RzLmdldExpc3RpbmcodG9rZW5JZCkuY2FsbCgpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuLnRva2VuKTtcbiAgICAgICAgY29uc29sZS5sb2coZ29vZHNORlRDb250cmFjdC5fYWRkcmVzcylcbiAgICAgICAgaWYgKHRva2VuLnRva2VuID09IGdvb2RzTkZUQ29udHJhY3QuX2FkZHJlc3MpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRydWUpXG4gICAgICAgICAgICBzZXRUb2tlblVSSShhd2FpdCBnb29kc05GVENvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkoTnVtYmVyKHRva2VuLnRva2VuSWQpKS5jYWxsKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmFsc2UpXG4gICAgICAgICAgICBzZXRUb2tlblVSSShhd2FpdCBwcmFkYU5GVENvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkoTnVtYmVyKHRva2VuLnRva2VuSWQpKS5jYWxsKCkpO1xuXG4gICAgICAgIH1cbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICAgICAgZ2V0SW1hZ2UoKVxuICAgIH0sIFtsb2FkaW5nXSlcblxuICAgIC8vIGlmKCFtYXJrZXRDb250cmFjdCB8fCAhZ29vZHNORlRDb250cmFjdCB8fCAhcHJhZGFORlRDb250cmFjdCkge1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPGgyPmxvYWRpbmcuLi48L2gyPlxuICAgIC8vICAgICApXG4gICAgLy8gfVxuXG5cbiAgICB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXBwZWFyYW5jZT1cImludmVyc2VcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAzMCwgcGFkZGluZ0JvdHRvbTogMzAgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRva2VuIElkOiB7dG9rZW5JZH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlRva2VuIFVSSToge3Rva2VuVVJJfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWZwc1RvUGljdHVyZS5nZXQodG9rZW5VUkkpfSB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldEltYWdlKCl9IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDMwIH19ID5SZWZyZXNoITwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9rZW47XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiV2ViMyIsInVzZVJvdXRlciIsImdvb2RzTkZUQ29udHJhY3QiLCJwcmFkYU5GVENvbnRyYWN0IiwibWFya2V0Q29udHJhY3QiLCJIZWFkZXIiLCJpZnBzVG9QaWN0dXJlIiwiQnV0dG9uIiwiVG9rZW4iLCJyb3V0ZXIiLCJ0b2tlbklkIiwicXVlcnkiLCJ0b2tlbiIsIndlYjMiLCJzZXRXZWIzIiwidG9rZW5VUkkiLCJzZXRUb2tlblVSSSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibG9hZFdlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImVuYWJsZSIsImdldEltYWdlIiwibWV0aG9kcyIsImdldExpc3RpbmciLCJjYWxsIiwiY29uc29sZSIsImxvZyIsIl9hZGRyZXNzIiwiTnVtYmVyIiwiZGl2IiwiYXBwZWFyYW5jZSIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImgzIiwiaDUiLCJpbWciLCJzcmMiLCJnZXQiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[token].js\n"));

/***/ })

});