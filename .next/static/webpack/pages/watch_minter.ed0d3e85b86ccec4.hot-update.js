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

/***/ "./pages/watch_minter.jsx":
/*!********************************!*\
  !*** ./pages/watch_minter.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rsuite */ \"./node_modules/rsuite/esm/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ethereum/build/contracts/GoodsNFT.json */ \"./ethereum/build/contracts/GoodsNFT.json\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ethereum/build/contracts/Market.json */ \"./ethereum/build/contracts/Market.json\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var _components_ListedForSale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ListedForSale */ \"./pages/components/ListedForSale.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst WatchMinter = ()=>{\n    _s();\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [goodsNFTContract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [marketContract, setMarketContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [recipient, setRecipient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokensOnSale, setTokensOnSale] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nftPrice, setNftPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                setWeb3(window.web3);\n            }\n        };\n        loadWeb3();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadContract = async ()=>{\n            try {\n                const networkId = await web3.eth.net.getId();\n                const deployedNetwork = _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__.networks[networkId];\n                const instance = new web3.eth.Contract(_home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__.abi, deployedNetwork && deployedNetwork.address);\n                setContract(instance);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (web3) {\n            loadContract();\n        }\n    }, [\n        web3\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadContract = async ()=>{\n            try {\n                const networkId = await web3.eth.net.getId();\n                const deployedNetwork = _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];\n                const instance = new web3.eth.Contract(_home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);\n                // const campaigns = await marketContract.methods.getTokensOnSale().call();\n                // console.log(campaigns)\n                setMarketContract(instance);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (web3) {\n            loadContract();\n        }\n    }, [\n        web3\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadAccount = async ()=>{\n            const accounts = await web3.eth.getAccounts();\n            setAccount(accounts[0]);\n        };\n        if (web3) {\n            loadAccount();\n        }\n    }, [\n        web3\n    ]);\n    // const handleCreateNFT = async () => {\n    //     if (contract && account) {\n    //       try {\n    //         await contract.methods.mintNFT(account, \"ipfs://bafkreibdw6zzjn3rs33hvuyxja6hrrb4vozdftu5pwyikplkblp2uyygz4\").send({ from: account });\n    //         console.log(account)\n    //         alert(\"NFT created successfully!\");\n    //       } catch (error) {\n    //         console.error(error);\n    //         alert(\"Failed to create NFT\");\n    //       }\n    //     }\n    //   };\n    const handleCreateNFT = async ()=>{\n        if (marketContract) {\n            try {\n                console.log(\"NFT Address:\", goodsNFTContract._address);\n                const result = await goodsNFTContract.methods.mintNFT(account, \"ipfs://bafkreibdw6zzjn3rs33hvuyxja6hrrb4vozdftu5pwyikplkblp2uyygz4\").send({\n                    from: account\n                });\n                console.log(result);\n            } catch (error) {\n                console.error(error);\n                alert(\"Failed to load!\");\n            }\n        }\n    };\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    appearance: \"inverse\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Watch Minter\"\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                            lineNumber: 120,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            style: {\n                                paddingBottom: 10\n                            },\n                            children: [\n                                \"Logged in as: \",\n                                account\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                            lineNumber: 121,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: _components_ListedForSale__WEBPACK_IMPORTED_MODULE_6__.ifpsToPicture.get(\"ipfs://bafkreibdw6zzjn3rs33hvuyxja6hrrb4vozdftu5pwyikplkblp2uyygz4\")\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            appearance: \"primary\",\n                            onClick: ()=>handleCreateNFT(),\n                            children: \"Buy Watch\"\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                            lineNumber: 123,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n            lineNumber: 117,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(WatchMinter, \"h2nqq0gywyDibD83hFpuMj9HhPg=\");\n_c = WatchMinter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WatchMinter);\nvar _c;\n$RefreshReg$(_c, \"WatchMinter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1yQyxpQkFBaUJzQyxRQUFRQyxRQUFRbkMsU0FBUyxzRUFBc0VvQyxLQUFLO29CQUFFQyxNQUFNckM7Z0JBQVE7Z0JBQzFKMEIsUUFBUUssSUFBSUU7WUFFaEIsRUFBRSxPQUFPUixPQUFPO2dCQUNaQyxRQUFRRCxNQUFNQTtnQkFDZGEsTUFBTTtZQUNWO1FBQ0o7SUFDSjtJQUdBO1FBQ0kscUJBQ0ksOERBQUNDOzs4QkFDRyw4REFBQ2hELDBEQUFNQTtvQkFBQ2lELFlBQVc7Ozs7Ozs4QkFDbkIsOERBQUNEOztzQ0FDRCw4REFBQ0U7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7NEJBQUdDLE9BQU87Z0NBQUNDLGVBQWU7NEJBQUU7O2dDQUFHO2dDQUFlNUM7Ozs7Ozs7c0NBQy9DLDhEQUFDNkM7NEJBQUlDLEtBQUt0RCx3RUFBaUJ1RCxDQUFDOzs7Ozs7c0NBQzVCLDhEQUFDNUQsMENBQU1BOzRCQUFDcUQsWUFBVzs0QkFBVVEsU0FBUyxJQUFNbEI7c0NBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLM0U7QUFHSjtHQXpITXJDO0tBQUFBO0FBMkhOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dhdGNoX21pbnRlci5qc3g/NGY4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvblRvb2xiYXIsIEJ1dHRvbiB9IGZyb20gJ3JzdWl0ZSc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCBHb29kc05GVCBmcm9tIFwiL2hvbWUvbGVvbmlkYXMvRG9jdW1lbnRzL0dlbnVpbmVfR29vZHNfQ29pbi9ldGhlcmV1bS9idWlsZC9jb250cmFjdHMvR29vZHNORlQuanNvblwiO1xuaW1wb3J0IE1hcmtldCBmcm9tIFwiL2hvbWUvbGVvbmlkYXMvRG9jdW1lbnRzL0dlbnVpbmVfR29vZHNfQ29pbi9ldGhlcmV1bS9idWlsZC9jb250cmFjdHMvTWFya2V0Lmpzb25cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IGlmcHNUb1BpY3R1cmUgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlzdGVkRm9yU2FsZSc7XG5cblxuY29uc3QgV2F0Y2hNaW50ZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZ29vZHNORlRDb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21hcmtldENvbnRyYWN0LCBzZXRNYXJrZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbdG9rZW5JZCwgc2V0VG9rZW5JZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbcmVjaXBpZW50LCBzZXRSZWNpcGllbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW3Rva2Vuc09uU2FsZSwgc2V0VG9rZW5zT25TYWxlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbmZ0UHJpY2UsIHNldE5mdFByaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkV2ViMyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xuICAgICAgICAgICAgICAgIHNldFdlYjMod2luZG93LndlYjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxvYWRXZWIzKCk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZENvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBHb29kc05GVC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgICAgICAgICAgICAgICAgICBHb29kc05GVC5hYmksXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgc2V0Q29udHJhY3QoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAod2ViMykge1xuICAgICAgICAgICAgbG9hZENvbnRyYWN0KCk7XG4gICAgICAgIH1cbiAgICB9LCBbd2ViM10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZENvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBNYXJrZXQubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAgICAgICAgICAgICAgICAgTWFya2V0LmFiaSxcbiAgICAgICAgICAgICAgICAgICAgZGVwbG95ZWROZXR3b3JrICYmIGRlcGxveWVkTmV0d29yay5hZGRyZXNzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBtYXJrZXRDb250cmFjdC5tZXRob2RzLmdldFRva2Vuc09uU2FsZSgpLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYW1wYWlnbnMpXG4gICAgICAgICAgICAgICAgc2V0TWFya2V0Q29udHJhY3QoaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAod2ViMykge1xuICAgICAgICAgICAgbG9hZENvbnRyYWN0KCk7XG4gICAgICAgIH1cbiAgICB9LCBbd2ViM10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBzZXRBY2NvdW50KGFjY291bnRzWzBdKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAod2ViMykge1xuICAgICAgICAgICAgbG9hZEFjY291bnQoKTtcbiAgICAgICAgfVxuICAgIH0sIFt3ZWIzXSk7XG5cbiAgICAvLyBjb25zdCBoYW5kbGVDcmVhdGVORlQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgIGlmIChjb250cmFjdCAmJiBhY2NvdW50KSB7XG4gICAgLy8gICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgIGF3YWl0IGNvbnRyYWN0Lm1ldGhvZHMubWludE5GVChhY2NvdW50LCBcImlwZnM6Ly9iYWZrcmVpYmR3Nnp6am4zcnMzM2h2dXl4amE2aHJyYjR2b3pkZnR1NXB3eWlrcGxrYmxwMnV5eWd6NFwiKS5zZW5kKHsgZnJvbTogYWNjb3VudCB9KTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGFjY291bnQpXG4gICAgLy8gICAgICAgICBhbGVydChcIk5GVCBjcmVhdGVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgLy8gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIC8vICAgICAgICAgYWxlcnQoXCJGYWlsZWQgdG8gY3JlYXRlIE5GVFwiKTtcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDcmVhdGVORlQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChtYXJrZXRDb250cmFjdCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5GVCBBZGRyZXNzOlwiLCBnb29kc05GVENvbnRyYWN0Ll9hZGRyZXNzKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdvb2RzTkZUQ29udHJhY3QubWV0aG9kcy5taW50TkZUKGFjY291bnQsIFwiaXBmczovL2JhZmtyZWliZHc2enpqbjNyczMzaHZ1eXhqYTZocnJiNHZvemRmdHU1cHd5aWtwbGtibHAydXl5Z3o0XCIpLnNlbmQoeyBmcm9tOiBhY2NvdW50IH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byBsb2FkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBcbiAgICB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgYXBwZWFyYW5jZT1cImludmVyc2VcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPldhdGNoIE1pbnRlcjwvaDM+XG4gICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTogMTB9fT5Mb2dnZWQgaW4gYXM6IHthY2NvdW50fTwvaDY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2lmcHNUb1BpY3R1cmUuZ2V0KFwiaXBmczovL2JhZmtyZWliZHc2enpqbjNyczMzaHZ1eXhqYTZocnJiNHZvemRmdHU1cHd5aWtwbGtibHAydXl5Z3o0XCIpfS8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhcHBlYXJhbmNlPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNyZWF0ZU5GVCgpfT5CdXkgV2F0Y2g8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F0Y2hNaW50ZXI7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9ybSIsIkJ1dHRvblRvb2xiYXIiLCJCdXR0b24iLCJXZWIzIiwiR29vZHNORlQiLCJNYXJrZXQiLCJIZWFkZXIiLCJpZnBzVG9QaWN0dXJlIiwiV2F0Y2hNaW50ZXIiLCJ3ZWIzIiwic2V0V2ViMyIsImdvb2RzTkZUQ29udHJhY3QiLCJzZXRDb250cmFjdCIsIm1hcmtldENvbnRyYWN0Iiwic2V0TWFya2V0Q29udHJhY3QiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsInRva2VuSWQiLCJzZXRUb2tlbklkIiwicmVjaXBpZW50Iiwic2V0UmVjaXBpZW50IiwidG9rZW5zT25TYWxlIiwic2V0VG9rZW5zT25TYWxlIiwibmZ0UHJpY2UiLCJzZXROZnRQcmljZSIsImxvYWRXZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJsb2FkQ29udHJhY3QiLCJuZXR3b3JrSWQiLCJldGgiLCJuZXQiLCJnZXRJZCIsImRlcGxveWVkTmV0d29yayIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2FkQWNjb3VudCIsImFjY291bnRzIiwiZ2V0QWNjb3VudHMiLCJoYW5kbGVDcmVhdGVORlQiLCJsb2ciLCJfYWRkcmVzcyIsInJlc3VsdCIsIm1ldGhvZHMiLCJtaW50TkZUIiwic2VuZCIsImZyb20iLCJhbGVydCIsImRpdiIsImFwcGVhcmFuY2UiLCJoMyIsImg2Iiwic3R5bGUiLCJwYWRkaW5nQm90dG9tIiwiaW1nIiwic3JjIiwiZ2V0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/watch_minter.jsx\n"));

/***/ })

});