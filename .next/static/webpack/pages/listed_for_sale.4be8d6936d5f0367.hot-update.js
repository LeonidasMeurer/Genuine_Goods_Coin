"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/listed_for_sale",{

/***/ "./pages/components/Minter.jsx":
/*!*************************************!*\
  !*** ./pages/components/Minter.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rsuite */ \"./node_modules/rsuite/esm/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ethereum/build/contracts/GoodsNFT.json */ \"./ethereum/build/contracts/GoodsNFT.json\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ethereum/build/contracts/Market.json */ \"./ethereum/build/contracts/Market.json\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var _ListedForSale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ListedForSale */ \"./pages/components/ListedForSale.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Minter = (contract, account, web3, marketContract, ifps)=>{\n    _s();\n    // const [web3, setWeb3] = useState(null);\n    // const [goodsNFTContract, setContract] = useState(null);\n    // const [marketContract, setMarketContract] = useState(null);\n    // const [account, setAccount] = useState(\"\");\n    const [totalSupply, setTotalSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [maxSupply, setMaxSupply] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [nftPrice, setNftPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // useEffect(() => {\n    //     const loadWeb3 = async () => {\n    //         if (window.ethereum) {\n    //             window.web3 = new Web3(window.ethereum);\n    //             await window.ethereum.enable();\n    //             setWeb3(window.web3);\n    //         }\n    //     };\n    //     loadWeb3();\n    // }, []);\n    // useEffect(() => {\n    //     const loadContract = async () => {\n    //         try {\n    //             const networkId = await web3.eth.net.getId();\n    //             const deployedNetwork = contract.networks[networkId];\n    //             const instance = new web3.eth.Contract(\n    //               contract.abi,\n    //                 deployedNetwork && deployedNetwork.address\n    //             );\n    //             setContract(instance);\n    //         } catch (error) {\n    //             console.error(error);\n    //         }\n    //     };\n    //     if (web3) {\n    //         loadContract();\n    //     }\n    // }, [web3]);\n    // useEffect(() => {\n    //     const loadContract = async () => {\n    //         try {\n    //             const networkId = await web3.eth.net.getId();\n    //             const deployedNetwork = Market.networks[networkId];\n    //             const instance = new web3.eth.Contract(\n    //                 Market.abi,\n    //                 deployedNetwork && deployedNetwork.address\n    //             );\n    //             // const campaigns = await marketContract.methods.getTokensOnSale().call();\n    //             // console.log(campaigns)\n    //             setMarketContract(instance);\n    //         } catch (error) {\n    //             console.error(error);\n    //         }\n    //     };\n    //     if (web3) {\n    //         loadContract();\n    //     }\n    // }, [web3]);\n    // useEffect(() => {\n    //     const loadAccount = async () => {\n    //         const accounts = await web3.eth.getAccounts();\n    //         setAccount(accounts[0]);\n    //     };\n    //     if (web3) {\n    //         loadAccount();\n    //     }\n    // }, [web3]);\n    // const handleCreateNFT = async () => {\n    //     if (contract && account) {\n    //       try {\n    //         await contract.methods.mintNFT(account, \"ipfs://bafkreibdw6zzjn3rs33hvuyxja6hrrb4vozdftu5pwyikplkblp2uyygz4\").send({ from: account });\n    //         console.log(account)\n    //         alert(\"NFT created successfully!\");\n    //       } catch (error) {\n    //         console.error(error);\n    //         alert(\"Failed to create NFT\");\n    //       }\n    //     }\n    //   };\n    const handleCreateNFT = async ()=>{\n        if (marketContract) {\n            try {\n                console.log(\"NFT Address:\", goodsNFTContract._address);\n                const price = Number(await goodsNFTContract.methods.getPrice().call());\n                // const contractData = await goodsNFTContract.methods.getContractData().call();\n                // console.log(Number(contractData.methods.mintPrice));\n                console.log(goodsNFTContract.methods.totalSupply());\n                await goodsNFTContract.methods.mintNFT(account, ifps).send({\n                    from: account,\n                    value: price\n                });\n                setNftPrice(await goodsNFTContract.methods.getPrice().call());\n                setTotalSupply(Number(await goodsNFTContract.methods.getTotalSupply().call()));\n                setMaxSupply(Number(await goodsNFTContract.methods.getMaxSupply().call()));\n            } catch (error) {\n                console.error(error);\n                alert(\"Failed to load!\");\n            }\n        }\n    };\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    appearance: \"inverse\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                    lineNumber: 132,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        paddingLeft: 30,\n                        paddingTop: 30\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                flex: true\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Watch Minter\"\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                    lineNumber: 135,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    style: {\n                                        paddingBottom: 10\n                                    },\n                                    children: [\n                                        \"Logged in as: \",\n                                        account\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.FlexboxGrid, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.FlexboxGrid.Item, {\n                                            colspan: 5,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: _ListedForSale__WEBPACK_IMPORTED_MODULE_6__.ifpsToPicture.get(ifps),\n                                                width: 350,\n                                                height: 250\n                                            }, void 0, false, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 139,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                            lineNumber: 138,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.FlexboxGrid.Item, {\n                                            colspan: 18,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.Panel, {\n                                                header: \"Nice Watch!\",\n                                                bordered: true,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        style: {\n                                                            paddingBottom: 10\n                                                        },\n                                                        children: [\n                                                            \"Price: \",\n                                                            nftPrice\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                        lineNumber: 144,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        style: {\n                                                            paddingBottom: 10\n                                                        },\n                                                        children: [\n                                                            \"Total Supply: \",\n                                                            maxSupply\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                        lineNumber: 145,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                        style: {\n                                                            paddingBottom: 10\n                                                        },\n                                                        children: [\n                                                            \"Amount Sold: \",\n                                                            totalSupply\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                        lineNumber: 146,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.Progress.Line, {\n                                                        percent: totalSupply / maxSupply * 100,\n                                                        showInfo: false\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                        lineNumber: 147,\n                                                        columnNumber: 33\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h8\", {\n                                                        style: {\n                                                            paddingTop: 30\n                                                        },\n                                                        children: \"A clock, or a timepiece, is a device used to measure and indicate time. The clock is one of the oldest human inventions, meeting the need to measure intervals of time shorter than the natural units such as the day, the lunar month, and the year. Devices operating on several physical processes have been used over the millennia. \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                        lineNumber: 148,\n                                                        columnNumber: 33\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                                lineNumber: 143,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                            lineNumber: 142,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        flexDirection: \"row\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                        fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                        lineNumber: 155,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                                    lineNumber: 153,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 134,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            appearance: \"primary\",\n                            onClick: ()=>handleCreateNFT(),\n                            style: {\n                                marginTop: 10\n                            },\n                            children: \"Buy Watch\"\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                            lineNumber: 161,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n                    lineNumber: 133,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/components/Minter.jsx\",\n            lineNumber: 131,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(Minter, \"QRERDGiaKiQxP6iW7iRczQg4qUE=\");\n_c = Minter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Minter);\nvar _c;\n$RefreshReg$(_c, \"Minter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TXREO0tBQUFBO0FBaUtOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvTWludGVyLmpzeD9kZjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uVG9vbGJhciwgQnV0dG9uLCBQYW5lbCwgRmxleGJveEdyaWQsIFByb2dyZXNzIH0gZnJvbSAncnN1aXRlJztcbmltcG9ydCBXZWIzLCB7IGV0aCB9IGZyb20gJ3dlYjMnO1xuaW1wb3J0IEdvb2RzTkZUIGZyb20gXCIvaG9tZS9sZW9uaWRhcy9Eb2N1bWVudHMvR2VudWluZV9Hb29kc19Db2luL2V0aGVyZXVtL2J1aWxkL2NvbnRyYWN0cy9Hb29kc05GVC5qc29uXCI7XG5pbXBvcnQgTWFya2V0IGZyb20gXCIvaG9tZS9sZW9uaWRhcy9Eb2N1bWVudHMvR2VudWluZV9Hb29kc19Db2luL2V0aGVyZXVtL2J1aWxkL2NvbnRyYWN0cy9NYXJrZXQuanNvblwiO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCB7IGlmcHNUb1BpY3R1cmUgfSBmcm9tICcuL0xpc3RlZEZvclNhbGUnO1xuXG5cbmNvbnN0IE1pbnRlciA9IChjb250cmFjdCwgYWNjb3VudCwgd2ViMywgbWFya2V0Q29udHJhY3QsIGlmcHMpID0+IHtcblxuICAgIC8vIGNvbnN0IFt3ZWIzLCBzZXRXZWIzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIGNvbnN0IFtnb29kc05GVENvbnRyYWN0LCBzZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAvLyBjb25zdCBbbWFya2V0Q29udHJhY3QsIHNldE1hcmtldENvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFt0b3RhbFN1cHBseSwgc2V0VG90YWxTdXBwbHldID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21heFN1cHBseSwgc2V0TWF4U3VwcGx5XSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtuZnRQcmljZSwgc2V0TmZ0UHJpY2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCBsb2FkV2ViMyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcbiAgICAvLyAgICAgICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgLy8gICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpO1xuICAgIC8vICAgICAgICAgICAgIHNldFdlYjMod2luZG93LndlYjMpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9O1xuXG4gICAgLy8gICAgIGxvYWRXZWIzKCk7XG4gICAgLy8gfSwgW10pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgbG9hZENvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgdHJ5IHtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBuZXR3b3JrSWQgPSBhd2FpdCB3ZWIzLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkZXBsb3llZE5ldHdvcmsgPSBjb250cmFjdC5uZXR3b3Jrc1tuZXR3b3JrSWRdO1xuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHdlYjMuZXRoLkNvbnRyYWN0KFxuICAgIC8vICAgICAgICAgICAgICAgY29udHJhY3QuYWJpLFxuICAgIC8vICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3NcbiAgICAvLyAgICAgICAgICAgICApO1xuICAgIC8vICAgICAgICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgaWYgKHdlYjMpIHtcbiAgICAvLyAgICAgICAgIGxvYWRDb250cmFjdCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3dlYjNdKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGxvYWRDb250cmFjdCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gTWFya2V0Lm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgLy8gICAgICAgICAgICAgICAgIE1hcmtldC5hYmksXG4gICAgLy8gICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgIC8vICAgICAgICAgICAgICk7XG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgbWFya2V0Q29udHJhY3QubWV0aG9kcy5nZXRUb2tlbnNPblNhbGUoKS5jYWxsKCk7XG4gICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2FtcGFpZ25zKVxuICAgIC8vICAgICAgICAgICAgIHNldE1hcmtldENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICAvLyAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgaWYgKHdlYjMpIHtcbiAgICAvLyAgICAgICAgIGxvYWRDb250cmFjdCgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfSwgW3dlYjNdKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGxvYWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIC8vICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgLy8gICAgIH07XG5cbiAgICAvLyAgICAgaWYgKHdlYjMpIHtcbiAgICAvLyAgICAgICAgIGxvYWRBY2NvdW50KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9LCBbd2ViM10pO1xuXG4gICAgLy8gY29uc3QgaGFuZGxlQ3JlYXRlTkZUID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICBpZiAoY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgIC8vICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLm1pbnRORlQoYWNjb3VudCwgXCJpcGZzOi8vYmFma3JlaWJkdzZ6empuM3JzMzNodnV5eGphNmhycmI0dm96ZGZ0dTVwd3lpa3Bsa2JscDJ1eXlnejRcIikuc2VuZCh7IGZyb206IGFjY291bnQgfSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50KVxuICAgIC8vICAgICAgICAgYWxlcnQoXCJORlQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgIC8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGNyZWF0ZSBORlRcIik7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlTkZUID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAobWFya2V0Q29udHJhY3QpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJORlQgQWRkcmVzczpcIiwgZ29vZHNORlRDb250cmFjdC5fYWRkcmVzcylcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gTnVtYmVyKGF3YWl0IGdvb2RzTkZUQ29udHJhY3QubWV0aG9kcy5nZXRQcmljZSgpLmNhbGwoKSlcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBjb250cmFjdERhdGEgPSBhd2FpdCBnb29kc05GVENvbnRyYWN0Lm1ldGhvZHMuZ2V0Q29udHJhY3REYXRhKCkuY2FsbCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE51bWJlcihjb250cmFjdERhdGEubWV0aG9kcy5taW50UHJpY2UpKTtcblxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ29vZHNORlRDb250cmFjdC5tZXRob2RzLnRvdGFsU3VwcGx5KCkpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZ29vZHNORlRDb250cmFjdC5tZXRob2RzLm1pbnRORlQoXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGlmcHMpXG4gICAgICAgICAgICAgICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudCwgdmFsdWU6IHByaWNlIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldE5mdFByaWNlKGF3YWl0IGdvb2RzTkZUQ29udHJhY3QubWV0aG9kcy5nZXRQcmljZSgpLmNhbGwoKSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRvdGFsU3VwcGx5KE51bWJlcihhd2FpdCBnb29kc05GVENvbnRyYWN0Lm1ldGhvZHMuZ2V0VG90YWxTdXBwbHkoKS5jYWxsKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TWF4U3VwcGx5KE51bWJlcihhd2FpdCBnb29kc05GVENvbnRyYWN0Lm1ldGhvZHMuZ2V0TWF4U3VwcGx5KCkuY2FsbCgpKSk7XG5cblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byBsb2FkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcHBlYXJhbmNlPVwiaW52ZXJzZVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdUb3A6IDMwIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiB0cnVlIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPldhdGNoIE1pbnRlcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDYgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogMTAgfX0+TG9nZ2VkIGluIGFzOiB7YWNjb3VudH08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Ym94R3JpZC5JdGVtIGNvbHNwYW49ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aWZwc1RvUGljdHVyZS5nZXQoaWZwcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzUwfSBoZWlnaHQ9ezI1MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hHcmlkLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhib3hHcmlkLkl0ZW0gY29sc3Bhbj17MTh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFuZWwgaGVhZGVyPVwiTmljZSBXYXRjaCFcIiBib3JkZXJlZCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5QcmljZToge25mdFByaWNlfTwvaDY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAxMCB9fT5Ub3RhbCBTdXBwbHk6IHttYXhTdXBwbHl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDEwIH19PkFtb3VudCBTb2xkOiB7dG90YWxTdXBwbHl9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzLkxpbmUgcGVyY2VudD17dG90YWxTdXBwbHkgLyBtYXhTdXBwbHkgKiAxMDB9IHNob3dJbmZvPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg4IHN0eWxlPXt7IHBhZGRpbmdUb3A6IDMwIH19PkEgY2xvY2ssIG9yIGEgdGltZXBpZWNlLCBpcyBhIGRldmljZSB1c2VkIHRvIG1lYXN1cmUgYW5kIGluZGljYXRlIHRpbWUuIFRoZSBjbG9jayBpcyBvbmUgb2YgdGhlIG9sZGVzdCBodW1hbiBpbnZlbnRpb25zLCBtZWV0aW5nIHRoZSBuZWVkIHRvIG1lYXN1cmUgaW50ZXJ2YWxzIG9mIHRpbWUgc2hvcnRlciB0aGFuIHRoZSBuYXR1cmFsIHVuaXRzIHN1Y2ggYXMgdGhlIGRheSwgdGhlIGx1bmFyIG1vbnRoLCBhbmQgdGhlIHllYXIuIERldmljZXMgb3BlcmF0aW5nIG9uIHNldmVyYWwgcGh5c2ljYWwgcHJvY2Vzc2VzIGhhdmUgYmVlbiB1c2VkIG92ZXIgdGhlIG1pbGxlbm5pYS4gPC9oOD5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hHcmlkLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhib3hHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4RGlyZWN0aW9uOiAncm93JyB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ3JlYXRlTkZUKCl9IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+QnV5IFdhdGNoPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pbnRlcjtcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGb3JtIiwiQnV0dG9uVG9vbGJhciIsIkJ1dHRvbiIsIlBhbmVsIiwiRmxleGJveEdyaWQiLCJQcm9ncmVzcyIsIldlYjMiLCJldGgiLCJHb29kc05GVCIsIk1hcmtldCIsIkhlYWRlciIsImlmcHNUb1BpY3R1cmUiLCJNaW50ZXIiLCJjb250cmFjdCIsImFjY291bnQiLCJ3ZWIzIiwibWFya2V0Q29udHJhY3QiLCJpZnBzIiwidG90YWxTdXBwbHkiLCJzZXRUb3RhbFN1cHBseSIsIm1heFN1cHBseSIsInNldE1heFN1cHBseSIsIm5mdFByaWNlIiwic2V0TmZ0UHJpY2UiLCJoYW5kbGVDcmVhdGVORlQiLCJjb25zb2xlIiwibG9nIiwiZ29vZHNORlRDb250cmFjdCIsIl9hZGRyZXNzIiwicHJpY2UiLCJOdW1iZXIiLCJtZXRob2RzIiwiZ2V0UHJpY2UiLCJjYWxsIiwibWludE5GVCIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJnZXRUb3RhbFN1cHBseSIsImdldE1heFN1cHBseSIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJhcHBlYXJhbmNlIiwic3R5bGUiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdUb3AiLCJmbGV4IiwiaDMiLCJoNiIsInBhZGRpbmdCb3R0b20iLCJJdGVtIiwiY29sc3BhbiIsImltZyIsInNyYyIsImdldCIsIndpZHRoIiwiaGVpZ2h0IiwiaGVhZGVyIiwiYm9yZGVyZWQiLCJMaW5lIiwicGVyY2VudCIsInNob3dJbmZvIiwiaDgiLCJmbGV4RGlyZWN0aW9uIiwib25DbGljayIsIm1hcmdpblRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Minter.jsx\n"));

/***/ })

});