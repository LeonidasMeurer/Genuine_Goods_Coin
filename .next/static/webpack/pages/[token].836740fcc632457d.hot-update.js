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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ethereum/build/contracts/GoodsNFT.json */ \"./ethereum/build/contracts/GoodsNFT.json\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_PradaNFT_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ethereum/build/contracts/PradaNFT.json */ \"./ethereum/build/contracts/PradaNFT.json\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ethereum/build/contracts/Market.json */ \"./ethereum/build/contracts/Market.json\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_ListedForSale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ListedForSale */ \"./pages/components/ListedForSale.jsx\");\n// import 'rsuite/dist/rsuite.min.css';\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Token = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const tokenId = router.query.token;\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [marketContract, setMarketContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenURI, setTokenURI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [contract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [pradaNFTContract, setPradaNFTContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokensOnSale, setTokensOnSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nftPrice, setNftPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [nftTransferred, setNftTransferred] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nftsForSale, setNftsForSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                setWeb3(window.web3);\n            }\n        };\n        loadWeb3();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadContract = async ()=>{\n            try {\n                const networkId = await web3.eth.net.getId();\n                const deployedNetwork = _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__.networks[networkId];\n                const instance = new web3.eth.Contract(_home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__.abi, deployedNetwork && deployedNetwork.address);\n                setContract(instance);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (web3) {\n            loadContract();\n        }\n    }, [\n        web3\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadContract = async ()=>{\n            try {\n                const networkId = await web3.eth.net.getId();\n                const deployedNetwork = _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_PradaNFT_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];\n                const instance = new web3.eth.Contract(_home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_PradaNFT_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);\n                setpradaNFTContract(instance);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (web3) {\n            loadContract();\n        }\n    }, [\n        web3\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadContract = async ()=>{\n            try {\n                const networkId = await web3.eth.net.getId();\n                const deployedNetwork = _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_5__.networks[networkId];\n                const instance = new web3.eth.Contract(_home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_5__.abi, deployedNetwork && deployedNetwork.address);\n                setMarketContract(instance);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (web3) {\n            loadContract();\n        }\n    }, [\n        web3\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadAccount = async ()=>{\n            const accounts = await web3.eth.getAccounts();\n            setAccount(accounts[0]);\n        };\n        if (web3) {\n            loadAccount();\n        }\n    }, [\n        web3\n    ]);\n    // useEffect(() => {\n    //     const getImage = async () => {\n    //         if (contract) {\n    //             const uri = await contract.methods.tokenURI(tokenId).call();\n    //             setTokenURI(uri)\n    //         }\n    //     };\n    //     getImage();\n    // }, [contract]);\n    if (!marketContract || !contract || !pradaNFTContract) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"loading...\"\n        }, void 0, false, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n            lineNumber: 129,\n            columnNumber: 13\n        }, undefined);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (marketContract) {\n            const getImage = async ()=>{\n                const token = await marketContract.methods.getListing(tokenId).call();\n                console.log(token.token);\n                console.log(goodsNFTContract._address);\n                if (token.token == goodsNFTContract._address) {\n                    console.log(true);\n                    setTokenURI(await goodsNFTContract.methods.tokenURI(Number(tokenId)).call());\n                } else {\n                    console.log(false);\n                    setTokenURI(await pradaNFTContract.methods.tokenURI(Number(tokenId)).call());\n                }\n            // setTokenURI(uri)\n            };\n            // \n            getImage();\n        }\n    }, [\n        contract\n    ]);\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    appearance: \"inverse\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                    lineNumber: 159,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        paddingLeft: 30,\n                        paddingTop: 30\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \"Token Id: \",\n                                tokenId\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                            lineNumber: 161,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            children: [\n                                \"Token URI: \",\n                                tokenURI\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                            lineNumber: 162,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _components_ListedForSale__WEBPACK_IMPORTED_MODULE_8__.ifpsToPicture.get(tokenURI),\n                            width: 250,\n                            height: 250\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                            lineNumber: 163,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n                    lineNumber: 160,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/[token].js\",\n            lineNumber: 158,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(Token, \"cAtOZNDdmD1FqQ9u33UMSHkuRoY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Token;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Token);\nvar _c;\n$RefreshReg$(_c, \"Token\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDSSxxQkFDSSw4REFBQzRDOzs4QkFDRyw4REFBQzVELDBEQUFNQTtvQkFBQzZELFlBQVc7Ozs7Ozs4QkFDbkIsOERBQUNEO29CQUFJRSxPQUFPO3dCQUFFQyxhQUFhO3dCQUFJQyxZQUFZO29CQUFHOztzQ0FDMUMsOERBQUNDOztnQ0FBRztnQ0FBVzVEOzs7Ozs7O3NDQUNmLDhEQUFDNkQ7O2dDQUFHO2dDQUFZcEQ7Ozs7Ozs7c0NBQ2hCLDhEQUFDcUQ7NEJBQUlDLEtBQUtsRSx3RUFBaUJtRSxDQUFDdkQ7NEJBQVd3RCxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJM0U7QUFHSjtHQTFKTXBFOztRQUVhRixrREFBU0E7OztLQUZ0QkU7QUE0Sk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3Rva2VuXS5qcz8zM2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAncnN1aXRlL2Rpc3QvcnN1aXRlLm1pbi5jc3MnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IEdvb2RzTkZUIGZyb20gXCIvaG9tZS9sZW9uaWRhcy9Eb2N1bWVudHMvR2VudWluZV9Hb29kc19Db2luL2V0aGVyZXVtL2J1aWxkL2NvbnRyYWN0cy9Hb29kc05GVC5qc29uXCI7XG5pbXBvcnQgUHJhZGFORlQgZnJvbSBcIi9ob21lL2xlb25pZGFzL0RvY3VtZW50cy9HZW51aW5lX0dvb2RzX0NvaW4vZXRoZXJldW0vYnVpbGQvY29udHJhY3RzL1ByYWRhTkZULmpzb25cIjtcblxuaW1wb3J0IE1hcmtldCBmcm9tIFwiL2hvbWUvbGVvbmlkYXMvRG9jdW1lbnRzL0dlbnVpbmVfR29vZHNfQ29pbi9ldGhlcmV1bS9idWlsZC9jb250cmFjdHMvTWFya2V0Lmpzb25cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBpZnBzVG9QaWN0dXJlIH0gZnJvbSAnLi9jb21wb25lbnRzL0xpc3RlZEZvclNhbGUnO1xuXG5cblxuXG5jb25zdCBUb2tlbiA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHRva2VuSWQgPSByb3V0ZXIucXVlcnkudG9rZW47XG5cbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbWFya2V0Q29udHJhY3QsIHNldE1hcmtldENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt0b2tlblVSSSwgc2V0VG9rZW5VUkldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2NvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcHJhZGFORlRDb250cmFjdCwgc2V0UHJhZGFORlRDb250cmFjdF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFt0b2tlbnNPblNhbGUsIHNldFRva2Vuc09uU2FsZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW25mdFByaWNlLCBzZXROZnRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbmZ0VHJhbnNmZXJyZWQsIHNldE5mdFRyYW5zZmVycmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbmZ0c0ZvclNhbGUsIHNldE5mdHNGb3JTYWxlXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRXZWIzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5ldGhlcmV1bSkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy53ZWIzID0gbmV3IFdlYjMod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgc2V0V2ViMyh3aW5kb3cud2ViMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgbG9hZFdlYjMoKTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IEdvb2RzTkZULm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgICAgICAgICAgICAgICAgIEdvb2RzTkZULmFiaSxcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRDb250cmFjdChpbnN0YW5jZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh3ZWIzKSB7XG4gICAgICAgICAgICBsb2FkQ29udHJhY3QoKTtcbiAgICAgICAgfVxuICAgIH0sIFt3ZWIzXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkQ29udHJhY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ldHdvcmtJZCA9IGF3YWl0IHdlYjMuZXRoLm5ldC5nZXRJZCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFByYWRhTkZULm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgICAgICAgICAgICAgICAgIFByYWRhTkZULmFiaSxcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBzZXRwcmFkYU5GVENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHdlYjMpIHtcbiAgICAgICAgICAgIGxvYWRDb250cmFjdCgpO1xuICAgICAgICB9XG4gICAgfSwgW3dlYjNdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRDb250cmFjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gTWFya2V0Lm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgICAgICAgICAgICAgICAgIE1hcmtldC5hYmksXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2V0TWFya2V0Q29udHJhY3QoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAod2ViMykge1xuICAgICAgICAgICAgbG9hZENvbnRyYWN0KCk7XG4gICAgICAgIH1cbiAgICB9LCBbd2ViM10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAod2ViMykge1xuICAgICAgICAgICAgbG9hZEFjY291bnQoKTtcbiAgICAgICAgfVxuICAgIH0sIFt3ZWIzXSk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBnZXRJbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmIChjb250cmFjdCkge1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IHVyaSA9IGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkodG9rZW5JZCkuY2FsbCgpO1xuICAgIC8vICAgICAgICAgICAgIHNldFRva2VuVVJJKHVyaSlcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfTtcbiAgICAvLyAgICAgZ2V0SW1hZ2UoKTtcbiAgICAvLyB9LCBbY29udHJhY3RdKTtcblxuICAgIGlmKCFtYXJrZXRDb250cmFjdCB8fCAhY29udHJhY3QgfHwgIXByYWRhTkZUQ29udHJhY3QpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxoMj5sb2FkaW5nLi4uPC9oMj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKG1hcmtldENvbnRyYWN0KSB7XG4gICAgICAgIGNvbnN0IGdldEltYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBtYXJrZXRDb250cmFjdC5tZXRob2RzLmdldExpc3RpbmcodG9rZW5JZCkuY2FsbCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbi50b2tlbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhnb29kc05GVENvbnRyYWN0Ll9hZGRyZXNzKVxuICAgICAgICAgICAgaWYgKHRva2VuLnRva2VuID09IGdvb2RzTkZUQ29udHJhY3QuX2FkZHJlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0cnVlKVxuICAgICAgICAgICAgICAgIHNldFRva2VuVVJJKGF3YWl0IGdvb2RzTkZUQ29udHJhY3QubWV0aG9kcy50b2tlblVSSShOdW1iZXIodG9rZW5JZCkpLmNhbGwoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZhbHNlKVxuICAgICAgICAgICAgICAgIHNldFRva2VuVVJJKGF3YWl0IHByYWRhTkZUQ29udHJhY3QubWV0aG9kcy50b2tlblVSSShOdW1iZXIodG9rZW5JZCkpLmNhbGwoKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNldFRva2VuVVJJKHVyaSlcbiAgICAgICAgfVxuICAgIC8vIFxuICAgICAgICBnZXRJbWFnZSgpXG59XG4gICAgfSwgW2NvbnRyYWN0XSlcblxuXG4gICAge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIGFwcGVhcmFuY2U9XCJpbnZlcnNlXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiAzMCwgcGFkZGluZ1RvcDogMzAgfX0gPlxuICAgICAgICAgICAgICAgICAgICA8aDM+VG9rZW4gSWQ6IHt0b2tlbklkfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5Ub2tlbiBVUkk6IHt0b2tlblVSSX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWZwc1RvUGljdHVyZS5nZXQodG9rZW5VUkkpfSB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2tlbjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJXZWIzIiwiR29vZHNORlQiLCJQcmFkYU5GVCIsIk1hcmtldCIsIkhlYWRlciIsInVzZVJvdXRlciIsImlmcHNUb1BpY3R1cmUiLCJUb2tlbiIsInJvdXRlciIsInRva2VuSWQiLCJxdWVyeSIsInRva2VuIiwid2ViMyIsInNldFdlYjMiLCJtYXJrZXRDb250cmFjdCIsInNldE1hcmtldENvbnRyYWN0IiwiYWNjb3VudCIsInNldEFjY291bnQiLCJ0b2tlblVSSSIsInNldFRva2VuVVJJIiwiY29udHJhY3QiLCJzZXRDb250cmFjdCIsInByYWRhTkZUQ29udHJhY3QiLCJzZXRQcmFkYU5GVENvbnRyYWN0IiwidG9rZW5zT25TYWxlIiwic2V0VG9rZW5zT25TYWxlIiwibmZ0UHJpY2UiLCJzZXROZnRQcmljZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwibmZ0VHJhbnNmZXJyZWQiLCJzZXROZnRUcmFuc2ZlcnJlZCIsIm5mdHNGb3JTYWxlIiwic2V0TmZ0c0ZvclNhbGUiLCJsb2FkV2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwibG9hZENvbnRyYWN0IiwibmV0d29ya0lkIiwiZXRoIiwibmV0IiwiZ2V0SWQiLCJkZXBsb3llZE5ldHdvcmsiLCJuZXR3b3JrcyIsImluc3RhbmNlIiwiQ29udHJhY3QiLCJhYmkiLCJhZGRyZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwic2V0cHJhZGFORlRDb250cmFjdCIsImxvYWRBY2NvdW50IiwiYWNjb3VudHMiLCJnZXRBY2NvdW50cyIsImgyIiwiZ2V0SW1hZ2UiLCJtZXRob2RzIiwiZ2V0TGlzdGluZyIsImNhbGwiLCJsb2ciLCJnb29kc05GVENvbnRyYWN0IiwiX2FkZHJlc3MiLCJOdW1iZXIiLCJkaXYiLCJhcHBlYXJhbmNlIiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJoMyIsImg1IiwiaW1nIiwic3JjIiwiZ2V0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[token].js\n"));

/***/ })

});