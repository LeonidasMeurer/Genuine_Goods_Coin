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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Web3Client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Web3Client */ \"./pages/Web3Client.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var _components_ListedForSale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ListedForSale */ \"./pages/components/ListedForSale.jsx\");\n/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rsuite */ \"./node_modules/rsuite/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Token = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const tokenId = router.query.token;\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tokenURI, setTokenURI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [prada, setPrada] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_Web3Client__WEBPACK_IMPORTED_MODULE_4__.pradaNFTContract);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                setWeb3(window.web3);\n            }\n        };\n        loadWeb3();\n    }, []);\n    // useEffect(() => {\n    //     const loadContract = async () => {\n    //         try {\n    //             const networkId = await web3.eth.net.getId();\n    //             const deployedNetwork = GoodsNFT.networks[networkId];\n    //             const instance = new web3.eth.Contract(\n    //                 GoodsNFT.abi,\n    //                 deployedNetwork && deployedNetwork.address\n    //             );\n    //             setContract(instance);\n    //         } catch (error) {\n    //             console.error(error);\n    //         }\n    //     };\n    //     if (web3) {\n    //         loadContract();\n    //     }\n    // }, [web3]);\n    // useEffect(() => {\n    //     const loadContract = async () => {\n    //         try {\n    //             const networkId = await web3.eth.net.getId();\n    //             const deployedNetwork = PradaNFT.networks[networkId];\n    //             const instance = new web3.eth.Contract(\n    //                 PradaNFT.abi,\n    //                 deployedNetwork && deployedNetwork.address\n    //             );\n    //             setPradaNFTContract(instance);\n    //         } catch (error) {\n    //             console.error(error);\n    //         }\n    //     };\n    //     if (web3) {\n    //         loadContract();\n    //     }\n    // }, [web3]);\n    // useEffect(() => {\n    //     const loadContract = async () => {\n    //         try {\n    //             const networkId = await web3.eth.net.getId();\n    //             const deployedNetwork = Market.networks[networkId];\n    //             const instance = new web3.eth.Contract(\n    //                 Market.abi,\n    //                 deployedNetwork && deployedNetwork.address\n    //             );\n    //             setMarketContract(instance);\n    //         } catch (error) {\n    //             console.error(error);\n    //         }\n    //     };\n    //     if (web3) {\n    //         loadContract();\n    //     }\n    // }, [web3]);\n    // useEffect(() => {\n    //     const loadAccount = async () => {\n    //         const accounts = await web3.eth.getAccounts();\n    //         setAccount(accounts[0]);\n    //     };\n    //     if (web3) {\n    //         loadAccount();\n    //     }\n    // }, [web3]);\n    const getImage = async ()=>{\n        if (_Web3Client__WEBPACK_IMPORTED_MODULE_4__.marketContract !== undefined) {\n            console.log(_Web3Client__WEBPACK_IMPORTED_MODULE_4__.marketContract);\n            const token = await _Web3Client__WEBPACK_IMPORTED_MODULE_4__.marketContract.methods.getListing(tokenId).call();\n            console.log(token.token);\n            console.log(_Web3Client__WEBPACK_IMPORTED_MODULE_4__.goodsNFTContract._address);\n            if (token.token == _Web3Client__WEBPACK_IMPORTED_MODULE_4__.goodsNFTContract._address) {\n                console.log(true);\n                setTokenURI(await _Web3Client__WEBPACK_IMPORTED_MODULE_4__.goodsNFTContract.methods.tokenURI(Number(token.tokenId)).call());\n            } else {\n                console.log(false);\n                setTokenURI(await _Web3Client__WEBPACK_IMPORTED_MODULE_4__.pradaNFTContract.methods.tokenURI(Number(token.tokenId)).call());\n            }\n            setLoading(false);\n        }\n    };\n    const render = async ()=>{\n        await getImage();\n    };\n    render();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const render = async ()=>{\n            const test = await (0,_Web3Client__WEBPACK_IMPORTED_MODULE_4__.loadPradaNFTContract)();\n            setPrada(test);\n            console.log(test);\n        };\n        render();\n    }, [\n        _Web3Client__WEBPACK_IMPORTED_MODULE_4__.loadPradaNFTContract\n    ]);\n    // if(!loading) {\n    //     setPrada(pradaNFTContract);\n    //     return(\n    //         <div>loading</div>\n    //     )\n    // }\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    appearance: \"inverse\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                    lineNumber: 159,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        paddingLeft: 30,\n                        paddingTop: 30,\n                        paddingBottom: 30\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                paddingBottom: 30\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        \"Token Id: \",\n                                        tokenId\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                                    lineNumber: 162,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: [\n                                        \"Token URI: \",\n                                        tokenURI\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                                    lineNumber: 163,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: _components_ListedForSale__WEBPACK_IMPORTED_MODULE_6__.ifpsToPicture.get(tokenURI),\n                                    width: 250,\n                                    height: 250\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                                    lineNumber: 164,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                            lineNumber: 161,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            onClick: ()=>console.log(prada),\n                            children: \"Refresh!\"\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                            lineNumber: 166,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                    lineNumber: 160,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n            lineNumber: 158,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(Token, \"MazS8NNJFGUd3dmCARPf9Oyj0So=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFTO1lBQ1gsTUFBTUMsT0FBTyxNQUFNL0IsaUVBQW9CQTtZQUN2Q2MsU0FBU2lCO1lBQ1RSLFFBQVFDLElBQUlPO1FBQ2hCO1FBQ0FEO0lBRUosR0FBRztRQUFDOUIsNkRBQW9CQTtLQUFDO0lBRXpCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixRQUFRO0lBQ1IsSUFBSTtJQUdKO1FBQ0kscUJBQ0ksOERBQUNnQzs7OEJBQ0csOERBQUMvQiwwREFBTUE7b0JBQUNnQyxZQUFXOzs7Ozs7OEJBQ25CLDhEQUFDRDtvQkFBSUUsT0FBTzt3QkFBRUMsYUFBYTt3QkFBSUMsWUFBWTt3QkFBSUMsZUFBZTtvQkFBRzs7c0NBQzdELDhEQUFDTDs0QkFBSUUsT0FBTztnQ0FBRUcsZUFBZTs0QkFBRzs7OENBQzVCLDhEQUFDQzs7d0NBQUc7d0NBQVdoQzs7Ozs7Ozs4Q0FDZiw4REFBQ2lDOzt3Q0FBRzt3Q0FBWTVCOzs7Ozs7OzhDQUNoQiw4REFBQzZCO29DQUFJQyxLQUFLdkMsd0VBQWlCd0MsQ0FBQy9CO29DQUFXZ0MsT0FBTztvQ0FBS0MsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUUvRCw4REFBQ3pDLDBDQUFNQTs0QkFBQzBDLFNBQVMsSUFBTXRCLFFBQVFDLElBQUlYO3NDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJM0Q7QUFHSjtHQTlKTVQ7O1FBRWFSLGtEQUFTQTs7O0tBRnRCUTtBQWdLTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bdG9rZW5dLmpzPzMzZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHsgZ29vZHNORlRDb250cmFjdCwgcHJhZGFORlRDb250cmFjdCwgbWFya2V0Q29udHJhY3QsIGxvYWRQcmFkYU5GVENvbnRyYWN0IH0gZnJvbSAnLi9XZWIzQ2xpZW50JztcblxuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgaWZwc1RvUGljdHVyZSB9IGZyb20gJy4vY29tcG9uZW50cy9MaXN0ZWRGb3JTYWxlJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JzdWl0ZSc7XG5cblxuXG5cbmNvbnN0IFRva2VuID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgdG9rZW5JZCA9IHJvdXRlci5xdWVyeS50b2tlbjtcblxuICAgIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFt0b2tlblVSSSwgc2V0VG9rZW5VUkldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3ByYWRhLCBzZXRQcmFkYV0gPSB1c2VTdGF0ZShwcmFkYU5GVENvbnRyYWN0KTtcblxuXG5cbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkV2ViMyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIHNldFdlYjMod2luZG93LndlYjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxvYWRXZWIzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgbG9hZENvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBHb29kc05GVC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgIC8vICAgICAgICAgICAgICAgICBHb29kc05GVC5hYmksXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgIC8vICAgICAgICAgICAgICk7XG4gICAgLy8gICAgICAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xuICAgIC8vICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfTtcblxuICAgIC8vICAgICBpZiAod2ViMykge1xuICAgIC8vICAgICAgICAgbG9hZENvbnRyYWN0KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9LCBbd2ViM10pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgbG9hZENvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBQcmFkYU5GVC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgIC8vICAgICAgICAgICAgICAgICBQcmFkYU5GVC5hYmksXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgIC8vICAgICAgICAgICAgICk7XG4gICAgLy8gICAgICAgICAgICAgc2V0UHJhZGFORlRDb250cmFjdChpbnN0YW5jZSk7XG4gICAgLy8gICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICAgIGlmICh3ZWIzKSB7XG4gICAgLy8gICAgICAgICBsb2FkQ29udHJhY3QoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH0sIFt3ZWIzXSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBsb2FkQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICB0cnkge1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IE1hcmtldC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgIC8vICAgICAgICAgICAgICAgICBNYXJrZXQuYWJpLFxuICAgIC8vICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3NcbiAgICAvLyAgICAgICAgICAgICApO1xuICAgIC8vICAgICAgICAgICAgIHNldE1hcmtldENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgaWYgKHdlYjMpIHtcbiAgICAvLyAgICAgICAgIGxvYWRDb250cmFjdCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3dlYjNdKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGxvYWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIC8vICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgaWYgKHdlYjMpIHtcbiAgICAvLyAgICAgICAgIGxvYWRBY2NvdW50KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9LCBbd2ViM10pO1xuXG4gICAgY29uc3QgZ2V0SW1hZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChtYXJrZXRDb250cmFjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXJrZXRDb250cmFjdClcblxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBtYXJrZXRDb250cmFjdC5tZXRob2RzLmdldExpc3RpbmcodG9rZW5JZCkuY2FsbCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbi50b2tlbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnb29kc05GVENvbnRyYWN0Ll9hZGRyZXNzKVxuICAgICAgICAgICAgaWYgKHRva2VuLnRva2VuID09IGdvb2RzTkZUQ29udHJhY3QuX2FkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cnVlKVxuICAgICAgICAgICAgICAgIHNldFRva2VuVVJJKGF3YWl0IGdvb2RzTkZUQ29udHJhY3QubWV0aG9kcy50b2tlblVSSShOdW1iZXIodG9rZW4udG9rZW5JZCkpLmNhbGwoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlKVxuICAgICAgICAgICAgICAgIHNldFRva2VuVVJJKGF3YWl0IHByYWRhTkZUQ29udHJhY3QubWV0aG9kcy50b2tlblVSSShOdW1iZXIodG9rZW4udG9rZW5JZCkpLmNhbGwoKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBnZXRJbWFnZSgpO1xuICAgIH1cbiAgICByZW5kZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCBsb2FkUHJhZGFORlRDb250cmFjdCgpO1xuICAgICAgICAgICAgc2V0UHJhZGEodGVzdClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlc3QpXG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKCk7XG5cbiAgICB9LCBbbG9hZFByYWRhTkZUQ29udHJhY3RdKVxuXG4gICAgLy8gaWYoIWxvYWRpbmcpIHtcbiAgICAvLyAgICAgc2V0UHJhZGEocHJhZGFORlRDb250cmFjdCk7XG4gICAgLy8gICAgIHJldHVybihcbiAgICAvLyAgICAgICAgIDxkaXY+bG9hZGluZzwvZGl2PlxuICAgIC8vICAgICApXG4gICAgLy8gfVxuXG5cbiAgICB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXBwZWFyYW5jZT1cImludmVyc2VcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDMwLCBwYWRkaW5nVG9wOiAzMCwgcGFkZGluZ0JvdHRvbTogMzAgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlRva2VuIElkOiB7dG9rZW5JZH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlRva2VuIFVSSToge3Rva2VuVVJJfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWZwc1RvUGljdHVyZS5nZXQodG9rZW5VUkkpfSB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKHByYWRhKX0+UmVmcmVzaCE8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuO1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjMiLCJ1c2VSb3V0ZXIiLCJnb29kc05GVENvbnRyYWN0IiwicHJhZGFORlRDb250cmFjdCIsIm1hcmtldENvbnRyYWN0IiwibG9hZFByYWRhTkZUQ29udHJhY3QiLCJIZWFkZXIiLCJpZnBzVG9QaWN0dXJlIiwiQnV0dG9uIiwiVG9rZW4iLCJyb3V0ZXIiLCJ0b2tlbklkIiwicXVlcnkiLCJ0b2tlbiIsIndlYjMiLCJzZXRXZWIzIiwidG9rZW5VUkkiLCJzZXRUb2tlblVSSSIsInByYWRhIiwic2V0UHJhZGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRXZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJnZXRJbWFnZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiZ2V0TGlzdGluZyIsImNhbGwiLCJfYWRkcmVzcyIsIk51bWJlciIsInJlbmRlciIsInRlc3QiLCJkaXYiLCJhcHBlYXJhbmNlIiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiaDMiLCJoNSIsImltZyIsInNyYyIsImdldCIsIndpZHRoIiwiaGVpZ2h0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[token].js\n"));

/***/ })

});