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

/***/ "./pages/Web3Client.js":
/*!*****************************!*\
  !*** ./pages/Web3Client.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAccount\": function() { return /* binding */ getAccount; },\n/* harmony export */   \"goodsNFTContract\": function() { return /* binding */ goodsNFTContract; },\n/* harmony export */   \"marketContract\": function() { return /* binding */ marketContract; },\n/* harmony export */   \"pradaNFTContract\": function() { return /* binding */ pradaNFTContract; }\n/* harmony export */ });\n/* harmony import */ var contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! contracts/GoodsNFT.json */ \"./ethereum/build/contracts/GoodsNFT.json\");\n/* harmony import */ var contracts_PradaNFT_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contracts/PradaNFT.json */ \"./ethereum/build/contracts/PradaNFT.json\");\n/* harmony import */ var contracts_Market_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contracts/Market.json */ \"./ethereum/build/contracts/Market.json\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n\n\n\n\nlet web3Instance;\nlet goodsNFTContract;\nlet pradaNFTContract;\nlet marketContract;\nconst init = async ()=>{\n    const loadWeb31 = async ()=>{\n        if (window.ethereum) {\n            window.web3 = new web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"](window.ethereum);\n            await window.ethereum.enable();\n            web3Instance = window.web3;\n        }\n    };\n    await loadWeb31();\n    const loadGoodsNFTContract = async ()=>{\n        try {\n            const networkId = await web3Instance.eth.net.getId();\n            const deployedNetwork = contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_0__.networks[networkId];\n            goodsNFTContract = new web3Instance.eth.Contract(contracts_GoodsNFT_json__WEBPACK_IMPORTED_MODULE_0__.abi, deployedNetwork && deployedNetwork.address);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    await loadGoodsNFTContract();\n    const loadPradaNFTContract = async ()=>{\n        try {\n            const networkId = await web3Instance.eth.net.getId();\n            const deployedNetwork = contracts_PradaNFT_json__WEBPACK_IMPORTED_MODULE_1__.networks[networkId];\n            pradaNFTContract = new web3Instance.eth.Contract(contracts_PradaNFT_json__WEBPACK_IMPORTED_MODULE_1__.abi, deployedNetwork && deployedNetwork.address);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    await loadPradaNFTContract();\n    const loadMarketContract = async ()=>{\n        try {\n            const networkId = await web3Instance.eth.net.getId();\n            const deployedNetwork = contracts_Market_json__WEBPACK_IMPORTED_MODULE_2__.networks[networkId];\n            marketContract = new web3Instance.eth.Contract(contracts_Market_json__WEBPACK_IMPORTED_MODULE_2__.abi, deployedNetwork && deployedNetwork.address);\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    await loadMarketContract();\n};\ninit();\nconst getAccount = async ()=>{\n    // let web3;\n    let account;\n    // const loadWeb3 = async () => {\n    //     if (window.ethereum) {\n    //         window.web3 = new Web3(window.ethereum);\n    //         await window.ethereum.enable();\n    //         web3Instance = window.web3;\n    //     }\n    // };\n    const loadAccount = async ()=>{\n        if (web3) {\n            const accounts = await web3.eth.getAccounts();\n            account = accounts[0];\n        }\n    };\n    await loadWeb3();\n    await loadAccount();\n    return account;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XZWIzQ2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ0E7QUFDSjtBQUN4QjtBQUV4QixJQUFJSTtBQUNHLElBQUlDLGlCQUFpQjtBQUNyQixJQUFJQyxpQkFBaUI7QUFDckIsSUFBSUMsZUFBZTtBQUcxQixNQUFNQyxPQUFPO0lBQ1QsTUFBTUMsWUFBVztRQUNiLElBQUlDLE9BQU9DLFVBQVU7WUFDakJELE9BQU9FLE9BQU8sSUFBSVQsNENBQUlBLENBQUNPLE9BQU9DO1lBQzlCLE1BQU1ELE9BQU9DLFNBQVNFO1lBQ3RCVCxlQUFlTSxPQUFPRTtRQUMxQjtJQUNKO0lBQ0EsTUFBTUg7SUFFTixNQUFNSyx1QkFBdUI7UUFDekIsSUFBSTtZQUNBLE1BQU1DLFlBQVksTUFBTVgsYUFBYVksSUFBSUMsSUFBSUM7WUFDN0MsTUFBTUMsa0JBQWtCbkIsNkRBQXNCLENBQUNlLFVBQVU7WUFDekRWLG1CQUFtQixJQUFJRCxhQUFhWSxJQUFJSyxTQUNwQ3JCLHdEQUFpQnNCLEVBQ2pCSCxtQkFBbUJBLGdCQUFnQkk7UUFFM0MsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELE1BQU1BO1FBQ2xCO0lBQ0o7SUFDQSxNQUFNVjtJQUVOLE1BQU1ZLHVCQUF1QjtRQUN6QixJQUFJO1lBQ0EsTUFBTVgsWUFBWSxNQUFNWCxhQUFhWSxJQUFJQyxJQUFJQztZQUM3QyxNQUFNQyxrQkFBa0JsQiw2REFBc0IsQ0FBQ2MsVUFBVTtZQUN6RFQsbUJBQW1CLElBQUlGLGFBQWFZLElBQUlLLFNBQ3BDcEIsd0RBQWlCcUIsRUFDakJILG1CQUFtQkEsZ0JBQWdCSTtRQUUzQyxFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUQsTUFBTUE7UUFDbEI7SUFDSjtJQUNBLE1BQU1FO0lBR04sTUFBTUMscUJBQXFCO1FBQ3ZCLElBQUk7WUFDQSxNQUFNWixZQUFZLE1BQU1YLGFBQWFZLElBQUlDLElBQUlDO1lBQzdDLE1BQU1DLGtCQUFrQmpCLDJEQUFvQixDQUFDYSxVQUFVO1lBQ3ZEUixpQkFBaUIsSUFBSUgsYUFBYVksSUFBSUssU0FDbENuQixzREFBZW9CLEVBQ2ZILG1CQUFtQkEsZ0JBQWdCSTtRQUUzQyxFQUFFLE9BQU9DLE9BQU87WUFDWkMsUUFBUUQsTUFBTUE7UUFDbEI7SUFDSjtJQUNBLE1BQU1HO0FBQ1Y7QUFFQW5CO0FBRU8sTUFBTW9CLGFBQWE7SUFFdEIsWUFBWTtJQUNaLElBQUlDO0lBRUosaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixtREFBbUQ7SUFDbkQsMENBQTBDO0lBQzFDLHNDQUFzQztJQUN0QyxRQUFRO0lBQ1IsS0FBSztJQUVMLE1BQU1DLGNBQWM7UUFDaEIsSUFBSWxCLE1BQU07WUFDTixNQUFNbUIsV0FBVyxNQUFNbkIsS0FBS0ksSUFBSWdCO1lBQ2hDSCxVQUFVRSxRQUFRLENBQUMsRUFBRTtRQUN6QjtJQUVKO0lBRUEsTUFBTXRCO0lBQ04sTUFBTXFCO0lBRU4sT0FBT0Q7QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1dlYjNDbGllbnQuanM/MjU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZHNORlRCdWlsZCBmcm9tICdjb250cmFjdHMvR29vZHNORlQuanNvbic7XG5pbXBvcnQgUHJhZGFORlRCdWlsZCBmcm9tICdjb250cmFjdHMvUHJhZGFORlQuanNvbic7XG5pbXBvcnQgTWFya2V0QnVpbGQgZnJvbSAnY29udHJhY3RzL01hcmtldC5qc29uJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5sZXQgd2ViM0luc3RhbmNlO1xuZXhwb3J0IGxldCBnb29kc05GVENvbnRyYWN0O1xuZXhwb3J0IGxldCBwcmFkYU5GVENvbnRyYWN0O1xuZXhwb3J0IGxldCBtYXJrZXRDb250cmFjdDtcblxuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxvYWRXZWIzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgICAgICAgICB3ZWIzSW5zdGFuY2UgPSB3aW5kb3cud2ViMztcbiAgICAgICAgfVxuICAgIH07XG4gICAgYXdhaXQgbG9hZFdlYjMoKTtcblxuICAgIGNvbnN0IGxvYWRHb29kc05GVENvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViM0luc3RhbmNlLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IEdvb2RzTkZUQnVpbGQubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgICAgIGdvb2RzTkZUQ29udHJhY3QgPSBuZXcgd2ViM0luc3RhbmNlLmV0aC5Db250cmFjdChcbiAgICAgICAgICAgICAgICBHb29kc05GVEJ1aWxkLmFiaSxcbiAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3NcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgYXdhaXQgbG9hZEdvb2RzTkZUQ29udHJhY3QoKTtcblxuICAgIGNvbnN0IGxvYWRQcmFkYU5GVENvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViM0luc3RhbmNlLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IFByYWRhTkZUQnVpbGQubmV0d29ya3NbbmV0d29ya0lkXTtcbiAgICAgICAgICAgIHByYWRhTkZUQ29udHJhY3QgPSBuZXcgd2ViM0luc3RhbmNlLmV0aC5Db250cmFjdChcbiAgICAgICAgICAgICAgICBQcmFkYU5GVEJ1aWxkLmFiaSxcbiAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3NcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgYXdhaXQgbG9hZFByYWRhTkZUQ29udHJhY3QoKTtcblxuXG4gICAgY29uc3QgbG9hZE1hcmtldENvbnRyYWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmV0d29ya0lkID0gYXdhaXQgd2ViM0luc3RhbmNlLmV0aC5uZXQuZ2V0SWQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveWVkTmV0d29yayA9IE1hcmtldEJ1aWxkLm5ldHdvcmtzW25ldHdvcmtJZF07XG4gICAgICAgICAgICBtYXJrZXRDb250cmFjdCA9IG5ldyB3ZWIzSW5zdGFuY2UuZXRoLkNvbnRyYWN0KFxuICAgICAgICAgICAgICAgIE1hcmtldEJ1aWxkLmFiaSxcbiAgICAgICAgICAgICAgICBkZXBsb3llZE5ldHdvcmsgJiYgZGVwbG95ZWROZXR3b3JrLmFkZHJlc3NcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgYXdhaXQgbG9hZE1hcmtldENvbnRyYWN0KCk7XG59XG5cbmluaXQoKTtcblxuZXhwb3J0IGNvbnN0IGdldEFjY291bnQgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAvLyBsZXQgd2ViMztcbiAgICBsZXQgYWNjb3VudDtcblxuICAgIC8vIGNvbnN0IGxvYWRXZWIzID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XG4gICAgLy8gICAgICAgICB3aW5kb3cud2ViMyA9IG5ldyBXZWIzKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgLy8gICAgICAgICBhd2FpdCB3aW5kb3cuZXRoZXJldW0uZW5hYmxlKCk7XG4gICAgLy8gICAgICAgICB3ZWIzSW5zdGFuY2UgPSB3aW5kb3cud2ViMztcbiAgICAvLyAgICAgfVxuICAgIC8vIH07XG5cbiAgICBjb25zdCBsb2FkQWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHdlYjMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICAgICAgIGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGF3YWl0IGxvYWRXZWIzKCk7XG4gICAgYXdhaXQgbG9hZEFjY291bnQoKTtcblxuICAgIHJldHVybiBhY2NvdW50O1xufVxuXG5cbiJdLCJuYW1lcyI6WyJHb29kc05GVEJ1aWxkIiwiUHJhZGFORlRCdWlsZCIsIk1hcmtldEJ1aWxkIiwiV2ViMyIsIndlYjNJbnN0YW5jZSIsImdvb2RzTkZUQ29udHJhY3QiLCJwcmFkYU5GVENvbnRyYWN0IiwibWFya2V0Q29udHJhY3QiLCJpbml0IiwibG9hZFdlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndlYjMiLCJlbmFibGUiLCJsb2FkR29vZHNORlRDb250cmFjdCIsIm5ldHdvcmtJZCIsImV0aCIsIm5ldCIsImdldElkIiwiZGVwbG95ZWROZXR3b3JrIiwibmV0d29ya3MiLCJDb250cmFjdCIsImFiaSIsImFkZHJlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2FkUHJhZGFORlRDb250cmFjdCIsImxvYWRNYXJrZXRDb250cmFjdCIsImdldEFjY291bnQiLCJhY2NvdW50IiwibG9hZEFjY291bnQiLCJhY2NvdW50cyIsImdldEFjY291bnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Web3Client.js\n"));

/***/ })

});