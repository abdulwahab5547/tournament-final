"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/display/duringregistration/page",{

/***/ "(app-pages-browser)/./src/app/display/duringregistration/page.tsx":
/*!*****************************************************!*\
  !*** ./src/app/display/duringregistration/page.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_registeredteam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/registeredteam */ \"(app-pages-browser)/./src/app/components/registeredteam.tsx\");\n/* harmony import */ var _app_functions_tournamentcontext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/functions/tournamentcontext */ \"(app-pages-browser)/./src/app/functions/tournamentcontext.tsx\");\n/* harmony import */ var _app_components_tournamentname__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/tournamentname */ \"(app-pages-browser)/./src/app/components/tournamentname.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction DuringRegistration() {\n    _s();\n    const [tournamentDetails, setTournamentDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTournamentDetails = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(\"http://localhost:8000\", \"/api/tournaments\"));\n                const tournaments = response.data.tournaments;\n                if (tournaments.length > 0) {\n                    setTournamentDetails(tournaments[0]);\n                } else {\n                    console.log(\"No tournaments found.\");\n                    setTournamentDetails(null);\n                }\n            } catch (error) {\n                console.error(\"Error fetching tournament details:\", error);\n            }\n        };\n        fetchTournamentDetails();\n    }, []);\n    const { tournament } = (0,_app_functions_tournamentcontext__WEBPACK_IMPORTED_MODULE_3__.useTournament)();\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchTeams = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"\".concat(\"http://localhost:8000\", \"/api/teams\"));\n                setTeams(response.data.teams);\n            } catch (err) {\n                console.error(err);\n            }\n        };\n        fetchTeams(); // Initial fetch\n        // Set up an interval to fetch teams every 30 seconds\n        const intervalId = setInterval(fetchTeams, 30000);\n        // Clean up the interval on component unmount\n        return ()=>clearInterval(intervalId);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center text-white pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center pt-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-lightYellow p-3 px-5 rounded-xl shadow-xl max-w-96 flex justify-between\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_tournamentname__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 21\n                            }, this),\n                            tournamentDetails && tournamentDetails.qrCodeImageUrl && tournamentDetails.registrationStatus == \"Open\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"border-8 border-stone-900 bg-white w-[20%] h-[20%] flex justify-center items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative w-full h-full\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        src: tournamentDetails.qrCodeImageUrl,\n                                        layout: \"fill\",\n                                        objectFit: \"contain\",\n                                        alt: \"QR code\"\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, this) : null\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-20\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center font-bold text-3xl\",\n                            children: \"Registered Teams\"\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-3 pt-5 flex-wrap px-5 justify-center overflow-y-auto\",\n                children: teams.map((team, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_registeredteam__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            teamName: team.teamName,\n                            players: team.players.map((player)=>player.name)\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 25\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/display/duringregistration/page.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, this);\n}\n_s(DuringRegistration, \"srAH4FUjYezCSclOkmAUAiUQM3g=\", false, function() {\n    return [\n        _app_functions_tournamentcontext__WEBPACK_IMPORTED_MODULE_3__.useTournament\n    ];\n});\n_c = DuringRegistration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DuringRegistration);\nvar _c;\n$RefreshReg$(_c, \"DuringRegistration\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGlzcGxheS9kdXJpbmdyZWdpc3RyYXRpb24vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMEI7QUFDa0I7QUFDbEI7QUFFbUM7QUFDSztBQUNMO0FBQzlCO0FBMkIvQixTQUFTUTs7SUFDTCxNQUFNLENBQUNDLG1CQUFtQkMscUJBQXFCLEdBQUdSLCtDQUFRQSxDQUEyQjtJQUVyRkQsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSx5QkFBeUI7WUFDM0IsSUFBSTtnQkFDQSxNQUFNQyxXQUFXLE1BQU1aLDZDQUFLQSxDQUFDYSxHQUFHLENBQUMsR0FBdUMsT0FBcENDLHVCQUFtQyxFQUFDO2dCQUN4RSxNQUFNRyxjQUFtQ0wsU0FBU00sSUFBSSxDQUFDRCxXQUFXO2dCQUVsRSxJQUFJQSxZQUFZRSxNQUFNLEdBQUcsR0FBRztvQkFDeEJULHFCQUFxQk8sV0FBVyxDQUFDLEVBQUU7Z0JBQ3ZDLE9BQU87b0JBQ0hHLFFBQVFDLEdBQUcsQ0FBQztvQkFDWlgscUJBQXFCO2dCQUN6QjtZQUNKLEVBQUUsT0FBT1ksT0FBTztnQkFDWkYsUUFBUUUsS0FBSyxDQUFDLHNDQUFzQ0E7WUFDeEQ7UUFDSjtRQUVBWDtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU0sRUFBRVksVUFBVSxFQUFFLEdBQUdsQiwrRUFBYUE7SUFDcEMsTUFBTSxDQUFDbUIsT0FBT0MsU0FBUyxHQUFHdkIsK0NBQVFBLENBQVMsRUFBRTtJQUU3Q0QsZ0RBQVNBLENBQUM7UUFDTixNQUFNeUIsYUFBYTtZQUNmLElBQUk7Z0JBQ0EsTUFBTWQsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUFDLEdBQXVDLE9BQXBDQyx1QkFBbUMsRUFBQztnQkFDeEVXLFNBQVNiLFNBQVNNLElBQUksQ0FBQ00sS0FBSztZQUNoQyxFQUFFLE9BQU9HLEtBQUs7Z0JBQ1ZQLFFBQVFFLEtBQUssQ0FBQ0s7WUFDbEI7UUFDSjtRQUVBRCxjQUFjLGdCQUFnQjtRQUU5QixxREFBcUQ7UUFDckQsTUFBTUUsYUFBYUMsWUFBWUgsWUFBWTtRQUUzQyw2Q0FBNkM7UUFDN0MsT0FBTyxJQUFNSSxjQUFjRjtJQUMvQixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQzFCLHNFQUFjQTs7Ozs7Ozs7Ozs0QkFFbEJHLHFCQUFxQkEsa0JBQWtCd0IsY0FBYyxJQUFJeEIsa0JBQWtCeUIsa0JBQWtCLElBQUksdUJBQzlGLDhEQUFDSDtnQ0FBSUMsV0FBVTswQ0FDWCw0RUFBQ0Q7b0NBQUlDLFdBQVU7OENBQ1gsNEVBQUN6QixrREFBS0E7d0NBQ0Y0QixLQUFLMUIsa0JBQWtCd0IsY0FBYzt3Q0FDckNHLFFBQU87d0NBQ1BDLFdBQVU7d0NBQ1ZDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FJakI7Ozs7Ozs7a0NBR1AsOERBQUNQO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDTzs0QkFBRVAsV0FBVTtzQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZSLE1BQU1nQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUNYO2tDQUNHLDRFQUFDM0Isc0VBQWNBOzRCQUNYdUMsVUFBVUYsS0FBS0UsUUFBUTs0QkFDdkJDLFNBQVNILEtBQUtHLE9BQU8sQ0FBQ0osR0FBRyxDQUFDSyxDQUFBQSxTQUFVQSxPQUFPQyxJQUFJOzs7Ozs7dUJBSDdDSjs7Ozs7Ozs7Ozs7Ozs7OztBQVU5QjtHQW5GU2xDOztRQXVCa0JILDJFQUFhQTs7O0tBdkIvQkc7QUFxRlQsK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2Rpc3BsYXkvZHVyaW5ncmVnaXN0cmF0aW9uL3BhZ2UudHN4P2E4MWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUmVnaXN0ZXJlZFRlYW0gZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXJlZHRlYW1cIjtcbmltcG9ydCB7IHVzZVRvdXJuYW1lbnQgfSBmcm9tICdAL2FwcC9mdW5jdGlvbnMvdG91cm5hbWVudGNvbnRleHQnO1xuaW1wb3J0IFRvdXJuYW1lbnROYW1lIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvdG91cm5hbWVudG5hbWUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEJhbGwgZnJvbSAnQC9hcHAvYXNzZXRzL2JhbGwucG5nJztcblxuaW50ZXJmYWNlIFBsYXllciB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHNjb3Jlczoge1xuICAgICAgICBzY29yZTE6IG51bWJlcjtcbiAgICAgICAgc2NvcmUyOiBudW1iZXI7XG4gICAgICAgIHNjb3JlMzogbnVtYmVyO1xuICAgICAgICBzY29yZTQ6IG51bWJlcjtcbiAgICAgICAgdG90YWxTY29yZTogbnVtYmVyO1xuICAgIH07XG59XG5cbmludGVyZmFjZSBUZWFtIHtcbiAgICB0ZWFtTmFtZTogc3RyaW5nO1xuICAgIHBsYXllcnM6IFBsYXllcltdO1xuICAgIGF2YXRhck5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFRvdXJuYW1lbnREZXRhaWxzIHtcbiAgICBfaWQ6IHN0cmluZzsgXG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHJlZ2lzdHJhdGlvblN0YXR1czogc3RyaW5nO1xuICAgIHFyQ29kZUltYWdlVXJsPzogc3RyaW5nOyBcbn1cblxuZnVuY3Rpb24gRHVyaW5nUmVnaXN0cmF0aW9uKCl7XG4gICAgY29uc3QgW3RvdXJuYW1lbnREZXRhaWxzLCBzZXRUb3VybmFtZW50RGV0YWlsc10gPSB1c2VTdGF0ZTxUb3VybmFtZW50RGV0YWlscyB8IG51bGw+KG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hUb3VybmFtZW50RGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQkFDS0VORF9VUkx9L2FwaS90b3VybmFtZW50c2ApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvdXJuYW1lbnRzOiBUb3VybmFtZW50RGV0YWlsc1tdID0gcmVzcG9uc2UuZGF0YS50b3VybmFtZW50czsgXG5cbiAgICAgICAgICAgICAgICBpZiAodG91cm5hbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUb3VybmFtZW50RGV0YWlscyh0b3VybmFtZW50c1swXSk7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gdG91cm5hbWVudHMgZm91bmQuXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUb3VybmFtZW50RGV0YWlscyhudWxsKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdG91cm5hbWVudCBkZXRhaWxzOlwiLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hUb3VybmFtZW50RGV0YWlscygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHsgdG91cm5hbWVudCB9ID0gdXNlVG91cm5hbWVudCgpO1xuICAgIGNvbnN0IFt0ZWFtcywgc2V0VGVhbXNdID0gdXNlU3RhdGU8VGVhbVtdPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaFRlYW1zID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19CQUNLRU5EX1VSTH0vYXBpL3RlYW1zYCk7XG4gICAgICAgICAgICAgICAgc2V0VGVhbXMocmVzcG9uc2UuZGF0YS50ZWFtcyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2hUZWFtcygpOyAvLyBJbml0aWFsIGZldGNoXG5cbiAgICAgICAgLy8gU2V0IHVwIGFuIGludGVydmFsIHRvIGZldGNoIHRlYW1zIGV2ZXJ5IDMwIHNlY29uZHNcbiAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZldGNoVGVhbXMsIDMwMDAwKTtcblxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgaW50ZXJ2YWwgb24gY29tcG9uZW50IHVubW91bnRcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgcGItMTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHRZZWxsb3cgcC0zIHB4LTUgcm91bmRlZC14bCBzaGFkb3cteGwgbWF4LXctOTYgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb3VybmFtZW50TmFtZS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dG91cm5hbWVudERldGFpbHMgJiYgdG91cm5hbWVudERldGFpbHMucXJDb2RlSW1hZ2VVcmwgJiYgdG91cm5hbWVudERldGFpbHMucmVnaXN0cmF0aW9uU3RhdHVzID09IFwiT3BlblwiID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItOCBib3JkZXItc3RvbmUtOTAwIGJnLXdoaXRlIHctWzIwJV0gaC1bMjAlXSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3RvdXJuYW1lbnREZXRhaWxzLnFyQ29kZUltYWdlVXJsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J1FSIGNvZGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bFwiPlJlZ2lzdGVyZWQgVGVhbXM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIHB0LTUgZmxleC13cmFwIHB4LTUganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgICAgICAgICAgICAge3RlYW1zLm1hcCgodGVhbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWdpc3RlcmVkVGVhbSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWFtTmFtZT17dGVhbS50ZWFtTmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVycz17dGVhbS5wbGF5ZXJzLm1hcChwbGF5ZXIgPT4gcGxheWVyLm5hbWUpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHVyaW5nUmVnaXN0cmF0aW9uOyJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3QiLCJSZWdpc3RlcmVkVGVhbSIsInVzZVRvdXJuYW1lbnQiLCJUb3VybmFtZW50TmFtZSIsIkltYWdlIiwiRHVyaW5nUmVnaXN0cmF0aW9uIiwidG91cm5hbWVudERldGFpbHMiLCJzZXRUb3VybmFtZW50RGV0YWlscyIsImZldGNoVG91cm5hbWVudERldGFpbHMiLCJyZXNwb25zZSIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19CQUNLRU5EX1VSTCIsInRvdXJuYW1lbnRzIiwiZGF0YSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRvdXJuYW1lbnQiLCJ0ZWFtcyIsInNldFRlYW1zIiwiZmV0Y2hUZWFtcyIsImVyciIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJxckNvZGVJbWFnZVVybCIsInJlZ2lzdHJhdGlvblN0YXR1cyIsInNyYyIsImxheW91dCIsIm9iamVjdEZpdCIsImFsdCIsInAiLCJtYXAiLCJ0ZWFtIiwiaW5kZXgiLCJ0ZWFtTmFtZSIsInBsYXllcnMiLCJwbGF5ZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/display/duringregistration/page.tsx\n"));

/***/ })

});