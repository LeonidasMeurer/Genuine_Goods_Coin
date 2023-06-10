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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rsuite */ \"./node_modules/rsuite/esm/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ethereum/build/contracts/GoodsNFT.json */ \"./ethereum/build/contracts/GoodsNFT.json\");\n/* harmony import */ var _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ethereum/build/contracts/Market.json */ \"./ethereum/build/contracts/Market.json\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Header */ \"./pages/components/Header.jsx\");\n/* harmony import */ var _components_ListedForSale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ListedForSale */ \"./pages/components/ListedForSale.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst WatchMinter = ()=>{\n    _s();\n    const [web3, setWeb3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [goodsNFTContract, setContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [marketContract, setMarketContract] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadWeb3 = async ()=>{\n            if (window.ethereum) {\n                window.web3 = new web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"](window.ethereum);\n                await window.ethereum.enable();\n                setWeb3(window.web3);\n            }\n        };\n        loadWeb3();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadContract = async ()=>{\n            try {\n                const networkId = await web3.eth.net.getId();\n                const deployedNetwork = _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__.networks[networkId];\n                const instance = new web3.eth.Contract(_home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_3__.abi, deployedNetwork && deployedNetwork.address);\n                setContract(instance);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (web3) {\n            loadContract();\n        }\n    }, [\n        web3\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadContract = async ()=>{\n            try {\n                const networkId = await web3.eth.net.getId();\n                const deployedNetwork = _home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_4__.networks[networkId];\n                const instance = new web3.eth.Contract(_home_leonidas_Documents_Genuine_Goods_Coin_ethereum_build_contracts_Market_json__WEBPACK_IMPORTED_MODULE_4__.abi, deployedNetwork && deployedNetwork.address);\n                // const campaigns = await marketContract.methods.getTokensOnSale().call();\n                // console.log(campaigns)\n                setMarketContract(instance);\n            } catch (error) {\n                console.error(error);\n            }\n        };\n        if (web3) {\n            loadContract();\n        }\n    }, [\n        web3\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadAccount = async ()=>{\n            const accounts = await web3.eth.getAccounts();\n            setAccount(accounts[0]);\n        };\n        if (web3) {\n            loadAccount();\n        }\n    }, [\n        web3\n    ]);\n    // const handleCreateNFT = async () => {\n    //     if (contract && account) {\n    //       try {\n    //         await contract.methods.mintNFT(account, \"ipfs://bafkreibdw6zzjn3rs33hvuyxja6hrrb4vozdftu5pwyikplkblp2uyygz4\").send({ from: account });\n    //         console.log(account)\n    //         alert(\"NFT created successfully!\");\n    //       } catch (error) {\n    //         console.error(error);\n    //         alert(\"Failed to create NFT\");\n    //       }\n    //     }\n    //   };\n    const handleCreateNFT = async ()=>{\n        if (marketContract) {\n            try {\n                console.log(\"NFT Address:\", goodsNFTContract._address);\n                console.log(\"price\", Number(await goodsNFTContract.methods.getPrice().call()));\n                console.log(\"total\", Number(await goodsNFTContract.methods.getTotalSupply().call()));\n                console.log(\"max\", Number(await goodsNFTContract.methods.getMaxSupply().call()));\n                const price = Number(await goodsNFTContract.methods.getPrice().call());\n                // const contractData = await goodsNFTContract.methods.getContractData().call();\n                // console.log(Number(contractData.methods.mintPrice));\n                console.log(goodsNFTContract.methods.totalSupply());\n                await goodsNFTContract.methods.mintNFT(account, \"ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire\").send({\n                    from: account,\n                    value: price\n                });\n            } catch (error) {\n                console.error(error);\n                alert(\"Failed to load!\");\n            }\n        }\n    };\n    {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    appearance: \"inverse\"\n                }, void 0, false, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        paddingLeft: 30,\n                        paddingTop: 30\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Watch Minter\"\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                    style: {\n                                        paddingBottom: 10\n                                    },\n                                    children: [\n                                        \"Logged in as: \",\n                                        account\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: _components_ListedForSale__WEBPACK_IMPORTED_MODULE_6__.ifpsToPicture.get(\"ipfs://bafkreibv7ugie5cj7xpl3hk6c3rrmk3kgtgkex4czyccrywsy6bhmzcire\"),\n                                    width: 300,\n                                    height: 250\n                                }, void 0, false, {\n                                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                            lineNumber: 130,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rsuite__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            appearance: \"primary\",\n                            onClick: ()=>handleCreateNFT(),\n                            style: {\n                                marginTop: 10\n                            },\n                            children: \"Buy Watch\"\n                        }, void 0, false, {\n                            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                            lineNumber: 136,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n                    lineNumber: 129,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/leonidas/Documents/Genuine_Goods_Coin/pages/watch_minter.jsx\",\n            lineNumber: 127,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n_s(WatchMinter, \"gZF2FqG7EdYxCnmho1kK3GFpFms=\");\n_c = WatchMinter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WatchMinter);\nvar _c;\n$RefreshReg$(_c, \"WatchMinter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qy9ELGdGQUFnRjtnQkFDaEYsdURBQXVEO2dCQUd2RFYsUUFBUUssSUFBSTFCLGlCQUFpQjZCLFFBQVFNO2dCQUVyQyxNQUFNbkMsaUJBQWlCNkIsUUFBUU8sUUFDM0JoQyxTQUNBLHNFQUNDaUMsS0FBSztvQkFBRUMsTUFBTWxDO29CQUFTbUMsT0FBT0w7Z0JBQU07WUFHNUMsRUFBRSxPQUFPZCxPQUFPO2dCQUNaQyxRQUFRRCxNQUFNQTtnQkFDZG9CLE1BQU07WUFDVjtRQUNKO0lBQ0o7SUFHQTtRQUNJLHFCQUNJLDhEQUFDQzs7OEJBQ0csOERBQUM5QywwREFBTUE7b0JBQUMrQyxZQUFXOzs7Ozs7OEJBQ25CLDhEQUFDRDtvQkFBSUUsT0FBTzt3QkFBRUMsYUFBYTt3QkFBSUMsWUFBWTtvQkFBRzs7c0NBQzFDLDhEQUFDSjs7OENBQ0csOERBQUNLOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDO29DQUFHSixPQUFPO3dDQUFFSyxlQUFlO29DQUFHOzt3Q0FBRzt3Q0FBZTVDOzs7Ozs7OzhDQUNqRCw4REFBQzZDO29DQUFJQyxLQUFLdEQsd0VBQWlCdUQsQ0FBQztvQ0FDeEJDLE9BQU87b0NBQUtDLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FFNUIsOERBQUMvRCwwQ0FBTUE7NEJBQUNvRCxZQUFXOzRCQUFVWSxTQUFTLElBQU03Qjs0QkFBbUJrQixPQUFPO2dDQUFFWSxXQUFXOzRCQUFHO3NDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLekc7QUFHSjtHQXRJTTFEO0tBQUFBO0FBd0lOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dhdGNoX21pbnRlci5qc3g/NGY4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvblRvb2xiYXIsIEJ1dHRvbiB9IGZyb20gJ3JzdWl0ZSc7XG5pbXBvcnQgV2ViMywgeyBldGggfSBmcm9tICd3ZWIzJztcbmltcG9ydCBHb29kc05GVCBmcm9tIFwiL2hvbWUvbGVvbmlkYXMvRG9jdW1lbnRzL0dlbnVpbmVfR29vZHNfQ29pbi9ldGhlcmV1bS9idWlsZC9jb250cmFjdHMvR29vZHNORlQuanNvblwiO1xuaW1wb3J0IE1hcmtldCBmcm9tIFwiL2hvbWUvbGVvbmlkYXMvRG9jdW1lbnRzL0dlbnVpbmVfR29vZHNfQ29pbi9ldGhlcmV1bS9idWlsZC9jb250cmFjdHMvTWFya2V0Lmpzb25cIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcidcbmltcG9ydCB7IGlmcHNUb1BpY3R1cmUgfSBmcm9tICcuL2NvbXBvbmVudHMvTGlzdGVkRm9yU2FsZSc7XG5cblxuY29uc3QgV2F0Y2hNaW50ZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbd2ViMywgc2V0V2ViM10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZ29vZHNORlRDb250cmFjdCwgc2V0Q29udHJhY3RdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21hcmtldENvbnRyYWN0LCBzZXRNYXJrZXRDb250cmFjdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZFdlYjMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LndlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICBzZXRXZWIzKHdpbmRvdy53ZWIzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsb2FkV2ViMygpO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRDb250cmFjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gR29vZHNORlQubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgICAgICAgICAgICAgICAgICAgR29vZHNORlQuYWJpLFxuICAgICAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3NcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHNldENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHdlYjMpIHtcbiAgICAgICAgICAgIGxvYWRDb250cmFjdCgpO1xuICAgICAgICB9XG4gICAgfSwgW3dlYjNdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRDb250cmFjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViMy5ldGgubmV0LmdldElkKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWROZXR3b3JrID0gTWFya2V0Lm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoXG4gICAgICAgICAgICAgICAgICAgIE1hcmtldC5hYmksXG4gICAgICAgICAgICAgICAgICAgIGRlcGxveWVkTmV0d29yayAmJiBkZXBsb3llZE5ldHdvcmsuYWRkcmVzc1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgbWFya2V0Q29udHJhY3QubWV0aG9kcy5nZXRUb2tlbnNPblNhbGUoKS5jYWxsKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2FtcGFpZ25zKVxuICAgICAgICAgICAgICAgIHNldE1hcmtldENvbnRyYWN0KGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHdlYjMpIHtcbiAgICAgICAgICAgIGxvYWRDb250cmFjdCgpO1xuICAgICAgICB9XG4gICAgfSwgW3dlYjNdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRBY2NvdW50ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgc2V0QWNjb3VudChhY2NvdW50c1swXSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHdlYjMpIHtcbiAgICAgICAgICAgIGxvYWRBY2NvdW50KCk7XG4gICAgICAgIH1cbiAgICB9LCBbd2ViM10pO1xuXG4gICAgLy8gY29uc3QgaGFuZGxlQ3JlYXRlTkZUID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICBpZiAoY29udHJhY3QgJiYgYWNjb3VudCkge1xuICAgIC8vICAgICAgIHRyeSB7XG4gICAgLy8gICAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLm1pbnRORlQoYWNjb3VudCwgXCJpcGZzOi8vYmFma3JlaWJkdzZ6empuM3JzMzNodnV5eGphNmhycmI0dm96ZGZ0dTVwd3lpa3Bsa2JscDJ1eXlnejRcIikuc2VuZCh7IGZyb206IGFjY291bnQgfSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhhY2NvdW50KVxuICAgIC8vICAgICAgICAgYWxlcnQoXCJORlQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xuICAgIC8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAvLyAgICAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGNyZWF0ZSBORlRcIik7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ3JlYXRlTkZUID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAobWFya2V0Q29udHJhY3QpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJORlQgQWRkcmVzczpcIiwgZ29vZHNORlRDb250cmFjdC5fYWRkcmVzcylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByaWNlXCIsIE51bWJlcihhd2FpdCBnb29kc05GVENvbnRyYWN0Lm1ldGhvZHMuZ2V0UHJpY2UoKS5jYWxsKCkpKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG90YWxcIiwgTnVtYmVyKGF3YWl0IGdvb2RzTkZUQ29udHJhY3QubWV0aG9kcy5nZXRUb3RhbFN1cHBseSgpLmNhbGwoKSkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJtYXhcIiwgTnVtYmVyKGF3YWl0IGdvb2RzTkZUQ29udHJhY3QubWV0aG9kcy5nZXRNYXhTdXBwbHkoKS5jYWxsKCkpKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBOdW1iZXIoYXdhaXQgZ29vZHNORlRDb250cmFjdC5tZXRob2RzLmdldFByaWNlKCkuY2FsbCgpKVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNvbnRyYWN0RGF0YSA9IGF3YWl0IGdvb2RzTkZUQ29udHJhY3QubWV0aG9kcy5nZXRDb250cmFjdERhdGEoKS5jYWxsKCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coTnVtYmVyKGNvbnRyYWN0RGF0YS5tZXRob2RzLm1pbnRQcmljZSkpO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnb29kc05GVENvbnRyYWN0Lm1ldGhvZHMudG90YWxTdXBwbHkoKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBnb29kc05GVENvbnRyYWN0Lm1ldGhvZHMubWludE5GVChcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgICAgICAgICAgXCJpcGZzOi8vYmFma3JlaWJ2N3VnaWU1Y2o3eHBsM2hrNmMzcnJtazNrZ3Rna2V4NGN6eWNjcnl3c3k2YmhtemNpcmVcIilcbiAgICAgICAgICAgICAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50LCB2YWx1ZTogcHJpY2UgfSk7XG5cblxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhaWxlZCB0byBsb2FkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBhcHBlYXJhbmNlPVwiaW52ZXJzZVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogMzAsIHBhZGRpbmdUb3A6IDMwIH19ID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XYXRjaCBNaW50ZXI8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDEwIH19PkxvZ2dlZCBpbiBhczoge2FjY291bnR9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpZnBzVG9QaWN0dXJlLmdldChcImlwZnM6Ly9iYWZrcmVpYnY3dWdpZTVjajd4cGwzaGs2YzNycm1rM2tndGdrZXg0Y3p5Y2NyeXdzeTZiaG16Y2lyZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfSBoZWlnaHQ9ezI1MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYXBwZWFyYW5jZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDcmVhdGVORlQoKX0gc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT5CdXkgV2F0Y2g8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2F0Y2hNaW50ZXI7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRm9ybSIsIkJ1dHRvblRvb2xiYXIiLCJCdXR0b24iLCJXZWIzIiwiZXRoIiwiR29vZHNORlQiLCJNYXJrZXQiLCJIZWFkZXIiLCJpZnBzVG9QaWN0dXJlIiwiV2F0Y2hNaW50ZXIiLCJ3ZWIzIiwic2V0V2ViMyIsImdvb2RzTkZUQ29udHJhY3QiLCJzZXRDb250cmFjdCIsIm1hcmtldENvbnRyYWN0Iiwic2V0TWFya2V0Q29udHJhY3QiLCJhY2NvdW50Iiwic2V0QWNjb3VudCIsImxvYWRXZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJsb2FkQ29udHJhY3QiLCJuZXR3b3JrSWQiLCJuZXQiLCJnZXRJZCIsImRlcGxveWVkTmV0d29yayIsIm5ldHdvcmtzIiwiaW5zdGFuY2UiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2FkQWNjb3VudCIsImFjY291bnRzIiwiZ2V0QWNjb3VudHMiLCJoYW5kbGVDcmVhdGVORlQiLCJsb2ciLCJfYWRkcmVzcyIsIk51bWJlciIsIm1ldGhvZHMiLCJnZXRQcmljZSIsImNhbGwiLCJnZXRUb3RhbFN1cHBseSIsImdldE1heFN1cHBseSIsInByaWNlIiwidG90YWxTdXBwbHkiLCJtaW50TkZUIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsImFsZXJ0IiwiZGl2IiwiYXBwZWFyYW5jZSIsInN0eWxlIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwiaDMiLCJoNiIsInBhZGRpbmdCb3R0b20iLCJpbWciLCJzcmMiLCJnZXQiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siLCJtYXJnaW5Ub3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/watch_minter.jsx\n"));

/***/ })

});