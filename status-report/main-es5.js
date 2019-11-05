(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-container\">\n  <app-header></app-header>\n  <section class=\"app-center\">\n    <app-main-form class=\"mf-container\"></app-main-form>\n  </section>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"app-header\" color=\"primary\">\n  <mat-toolbar-row>\n    <div class=\"header-logo\">\n      <img src=\"../../assets/images/javen_logo.png\" />\n    </div>\n    <div class=\"header-title\"><h1>Weekly Status Report</h1></div>\n  </mat-toolbar-row>\n</mat-toolbar>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-form/main-form.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-form/main-form.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"main-form-container\">\n  <form [formGroup]=\"statusForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"mf-col-1\">\n      <mat-form-field class=\"mf-item-1\" appearance=\"outline\">\n        <mat-label>First name</mat-label>\n        <input matInput placeholder=\"first name\" formControlName=\"firstName\" />\n      </mat-form-field>\n      <mat-form-field class=\"mf-item-2\" appearance=\"outline\">\n        <mat-label>Last name</mat-label>\n        <input matInput placeholder=\"last name\" formControlName=\"lastName\" />\n      </mat-form-field>\n    </div>\n\n    <div class=\"mf-col-1\">\n      <mat-form-field class=\"mf-item-1\" appearance=\"outline\">\n        <mat-label>Start date</mat-label>\n        <input\n          matInput\n          [matDatepicker]=\"startDate\"\n          placeholder=\"Choose a date\"\n          formControlName=\"startDate\"\n        />\n        <mat-datepicker-toggle\n          matSuffix\n          [for]=\"startDate\"\n        ></mat-datepicker-toggle>\n        <mat-datepicker #startDate></mat-datepicker>\n      </mat-form-field>\n      <mat-form-field class=\"mf-item-2\" appearance=\"outline\">\n        <mat-label>End date</mat-label>\n        <input\n          matInput\n          [matDatepicker]=\"endDate\"\n          placeholder=\"Choose a date\"\n          formControlName=\"endDate\"\n        />\n        <mat-datepicker-toggle\n          matSuffix\n          [for]=\"endDate\"\n        ></mat-datepicker-toggle>\n        <mat-datepicker #endDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n\n    <div class=\"mf-col-1\">\n      <mat-form-field class=\"mf-item-1\" appearance=\"outline\">\n        <mat-label>Client</mat-label>\n        <input matInput placeholder=\"Client\" formControlName=\"client\" />\n      </mat-form-field>\n      <mat-form-field class=\"mf-item-2\" appearance=\"outline\">\n        <mat-label>Project</mat-label>\n        <input matInput placeholder=\"project\" formControlName=\"project\" />\n      </mat-form-field>\n    </div>\n\n    <div class=\"mf-col-completed\" formArrayName=\"completed\">\n      <div class=\"completed-col-1\">\n        <h1>Tasks completed this week</h1>\n        <button\n          mat-icon-button\n          type=\"button\"\n          color=\"primary\"\n          (click)=\"addToList('completedList')\"\n        >\n          <em class=\"material-icons\">\n            add_circle\n          </em>\n        </button>\n      </div>\n      <div class=\"completed-col-2\">\n        <div\n          class=\"completed-col-2-each\"\n          *ngFor=\"let item of completedList.controls; let i = index\"\n        >\n          <mat-form-field class=\"completed-col-2-ff\" appearance=\"outline\">\n            <textarea\n              matInput\n              placeholder=\"tasks completed this week\"\n              formControlName=\"{{ i }}\"\n            ></textarea>\n          </mat-form-field>\n          <button\n            mat-icon-button\n            type=\"button\"\n            color=\"accent\"\n            (click)=\"removeFromList('completedList', i)\"\n          >\n            <em class=\"material-icons\">\n              delete\n            </em>\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mf-col-completed\" formArrayName=\"inProgress\">\n      <div class=\"completed-col-1\">\n        <h1>Tasks in progress this week</h1>\n        <button\n          mat-icon-button\n          type=\"button\"\n          color=\"primary\"\n          (click)=\"addToList('inProgressList')\"\n        >\n          <em class=\"material-icons\">\n            add_circle\n          </em>\n        </button>\n      </div>\n      <div class=\"completed-col-2\">\n        <div\n          class=\"completed-col-2-each\"\n          *ngFor=\"let item of inProgressList.controls; let i = index\"\n        >\n          <mat-form-field class=\"completed-col-2-ff\" appearance=\"outline\">\n            <textarea\n              matInput\n              placeholder=\"tasks in progress this week\"\n              formControlName=\"{{ i }}\"\n            ></textarea>\n          </mat-form-field>\n          <button\n            mat-icon-button\n            type=\"button\"\n            color=\"accent\"\n            (click)=\"removeFromList('inProgressList', i)\"\n          >\n            <em class=\"material-icons\">\n              delete\n            </em>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"mf-col-completed\" formArrayName=\"starting\">\n      <div class=\"completed-col-1\">\n        <h1>Tasks starting next week</h1>\n        <button\n          mat-icon-button\n          type=\"button\"\n          color=\"primary\"\n          (click)=\"addToList('startingList')\"\n        >\n          <em class=\"material-icons\">\n            add_circle\n          </em>\n        </button>\n      </div>\n      <div class=\"completed-col-2\">\n        <div\n          class=\"completed-col-2-each\"\n          *ngFor=\"let item of startingList.controls; let i = index\"\n        >\n          <mat-form-field class=\"completed-col-2-ff\" appearance=\"outline\">\n            <textarea\n              matInput\n              placeholder=\"Tasks starting next week\"\n              formControlName=\"{{ i }}\"\n            ></textarea>\n          </mat-form-field>\n          <button\n            mat-icon-button\n            type=\"button\"\n            color=\"accent\"\n            (click)=\"removeFromList('startingList', i)\"\n          >\n            <em class=\"material-icons\">\n              delete\n            </em>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"mf-col-completed\" formArrayName=\"issues\">\n      <div class=\"completed-col-1\">\n        <h1>Issues for immediate attention</h1>\n        <button\n          mat-icon-button\n          type=\"button\"\n          color=\"primary\"\n          (click)=\"addToList('issuesList')\"\n        >\n          <em class=\"material-icons\">\n            add_circle\n          </em>\n        </button>\n      </div>\n      <div class=\"completed-col-2\">\n        <div\n          class=\"completed-col-2-each\"\n          *ngFor=\"let item of issuesList.controls; let i = index\"\n        >\n          <mat-form-field class=\"completed-col-2-ff\" appearance=\"outline\">\n            <textarea\n              matInput\n              placeholder=\"Issues for immediate attention\"\n              formControlName=\"{{ i }}\"\n            ></textarea>\n          </mat-form-field>\n          <button\n            mat-icon-button\n            type=\"button\"\n            color=\"accent\"\n            (click)=\"removeFromList('issuesList', i)\"\n          >\n            <em class=\"material-icons\">\n              delete\n            </em>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        type=\"submit\"\n        [disabled]=\"!statusForm.valid\"\n      >\n        Submit it\n      </button>\n    </div>\n  </form>\n</mat-card>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".app-container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n\n.app-center {\n  display: flex;\n  justify-content: center;\n  padding: 15px;\n}\n\n.mf-container {\n  width: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGhlZWd1bC9Eb2N1bWVudHMvcHJvamVjdC9zdGF0dXMtcmVwb3J0L3N0YXR1cy1yZXBvcnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hcHAtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5tZi1jb250YWluZXIge1xuICB3aWR0aDogNjAlO1xufVxuIiwiLmFwcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYXBwLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ubWYtY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwJTtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'status-report';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _components_main_form_main_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main-form/main-form.component */ "./src/app/components/main-form/main-form.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_main_form_main_form_component__WEBPACK_IMPORTED_MODULE_10__["MainFormComponent"]],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/header/header.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".header-logo {\n  flex-grow: 1;\n}\n.header-title {\n  flex-grow: 1;\n}\n.app-header {\n  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(192, 192, 192, 0.75);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBR0UsNkRBQTZEO0FBQy9EIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ28ge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uaGVhZGVyLXRpdGxlIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmFwcC1oZWFkZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4xODc1cmVtIDAuMTg3NXJlbSAwIHJnYmEoMTkyLCAxOTIsIDE5MiwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4xODc1cmVtIDAgcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4xODc1cmVtIDAgcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjc1KTtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/main-form/main-form.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/main-form/main-form.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mf-col-completed {\n  display: flex;\n  flex-direction: column;\n}\n.completed-col-1 {\n  display: flex;\n  align-items: center;\n}\n.completed-col-2-each {\n  display: flex;\n  align-items: center;\n}\n.completed-col-2-ff {\n  flex-grow: 1;\n}\n.main-form-container {\n  width: 100%;\n}\n.mf-col-1 {\n  display: flex;\n  flex-wrap: wrap;\n}\n.mf-item-1 {\n  flex-grow: 1;\n  padding-right: 5px;\n}\n.mf-item-2 {\n  flex-grow: 1;\n  padding-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWZvcm0vbWFpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4tZm9ybS9tYWluLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZi1jb2wtY29tcGxldGVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb21wbGV0ZWQtY29sLTEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29tcGxldGVkLWNvbC0yLWVhY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29tcGxldGVkLWNvbC0yLWZmIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLm1haW4tZm9ybS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1mLWNvbC0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1mLWl0ZW0tMSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4ubWYtaXRlbS0yIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/main-form/main-form.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/main-form/main-form.component.ts ***!
          \*************************************************************/
        /*! exports provided: MainFormComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFormComponent", function () { return MainFormComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
            /* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
            /* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/constants */ "./src/app/constants.ts");
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;
            var MainFormComponent = /** @class */ (function () {
                function MainFormComponent() {
                    this.statusForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        client: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                        completed: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')]),
                        inProgress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')]),
                        starting: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')]),
                        issues: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')])
                    });
                }
                MainFormComponent.prototype.ngOnInit = function () {
                    console.log(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a);
                };
                Object.defineProperty(MainFormComponent.prototype, "completedList", {
                    get: function () {
                        return this.statusForm.get('completed');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MainFormComponent.prototype, "inProgressList", {
                    get: function () {
                        return this.statusForm.get('inProgress');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MainFormComponent.prototype, "startingList", {
                    get: function () {
                        return this.statusForm.get('starting');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MainFormComponent.prototype, "issuesList", {
                    get: function () {
                        return this.statusForm.get('issues');
                    },
                    enumerable: true,
                    configurable: true
                });
                MainFormComponent.prototype.addToList = function (key) {
                    console.log(key);
                    this[key].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
                };
                MainFormComponent.prototype.removeFromList = function (key, index) {
                    console.log(key, index);
                    this[key].removeAt(index);
                };
                MainFormComponent.prototype.formatDate = function (date) {
                    if (!date)
                        return;
                    return [date.getMonth() + 1, date.getDate(), date.getFullYear()].join('/');
                };
                MainFormComponent.prototype.getList = function (header, list) {
                    var sectionHeader = {
                        margin: [0, 15, 0, 0],
                        table: {
                            widths: ['*'],
                            body: [
                                [
                                    {
                                        fontSize: 10,
                                        fillColor: 'lightgrey',
                                        alignment: 'left',
                                        columns: [
                                            {
                                                text: header,
                                                style: 'subheader'
                                            }
                                        ]
                                    }
                                ]
                            ]
                        }
                    };
                    var content = {
                        ol: list.map(function (each) { return ({
                            lineHeight: 1,
                            margin: [2, 5, 0, 0],
                            text: each
                        }); })
                    };
                    return [Object.assign({}, sectionHeader), Object.assign({}, content)];
                };
                MainFormComponent.prototype.onSubmit = function () {
                    var _a = this.statusForm.controls, firstName = _a.firstName, lastName = _a.lastName, startDate = _a.startDate, endDate = _a.endDate, client = _a.client, project = _a.project, completed = _a.completed, inProgress = _a.inProgress, starting = _a.starting, issues = _a.issues;
                    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a
                        .createPdf({
                        pageMargins: 72,
                        header: function (currentPage, pageCount) {
                            return {
                                columns: [
                                    {
                                        image: app_constants__WEBPACK_IMPORTED_MODULE_5__["IMAGE_BASE_64"],
                                        alignment: 'left',
                                        fit: [100, 100],
                                        margin: [0, 30]
                                    }
                                ]
                            };
                        },
                        footer: function (currentPage, pageCount) {
                            return {
                                columns: [
                                    {
                                        text: currentPage.toString() + ' of ' + pageCount,
                                        alignment: 'center',
                                        margin: [0, 20, 0, 30]
                                    }
                                ]
                            };
                        },
                        content: [
                            {
                                style: 'header',
                                text: 'weekly status report',
                                alignment: 'center'
                            },
                            {
                                style: 'tableExample',
                                table: {
                                    heights: 20,
                                    widths: [100, 325],
                                    body: [
                                        ['Employee', firstName.value + ' ' + lastName.value],
                                        ['Start Date', this.formatDate(startDate.value) || ''],
                                        ['End Date', this.formatDate(endDate.value) || ''],
                                        ['client', client.value],
                                        ['project', project.value]
                                    ]
                                }
                            },
                            this.getList('Tasks completed this week', completed.value),
                            this.getList('Tasks in progress this week', inProgress.value),
                            this.getList('Tasks starting next week', starting.value),
                            this.getList('Issues for Immediate attention', issues.value)
                        ],
                        styles: {
                            header: {
                                fontSize: 28,
                                bold: true,
                                margin: [0, 20]
                            },
                            subheader: {
                                fontSize: 16,
                                bold: true,
                                margin: [0, 10, 0, 5],
                                backgroundColor: 'red'
                            },
                            tableExample: {
                                margin: [0, 5, 0, 15],
                                height: 80
                            },
                            tableHeader: {
                                bold: true,
                                fontSize: 13,
                                color: 'black'
                            }
                        },
                        defaultStyle: {
                            alignment: 'justify'
                        }
                    })
                        .download();
                    console.log(this.statusForm);
                };
                return MainFormComponent;
            }());
            MainFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-main-form',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-form/main-form.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-form.component.css */ "./src/app/components/main-form/main-form.component.css")).default]
                })
            ], MainFormComponent);
            /***/ 
        }),
        /***/ "./src/app/constants.ts": 
        /*!******************************!*\
          !*** ./src/app/constants.ts ***!
          \******************************/
        /*! exports provided: IMAGE_BASE_64 */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_BASE_64", function () { return IMAGE_BASE_64; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var IMAGE_BASE_64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAAA8CAYAAAANHtQDAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAACDRSURBVHjaYvz//z/DKBgFo4A+ACCAmEaDYBSMAvoBgAAazXCjYBTQEQAE0GiGGwWjgI4AIIBGM9woGAV0BAABNJrhRsEooCMACKDRDDcKRgEdAUAAjWa4UTAK6AgAAmg0w42CUUBHABBAoxluFIwCOgKAABrNcKNgFNARAAQQy3DyzLFb36Qevv2i8P77N4GvX7/xcP7/842Dk/WHsCD3OxUZ4Tu6EtyfRqN8FAwkAAigIZ/h1p56ZnLkwlWbs4/eGj/4wqDw+TezDTMjE8O/fwwMfzn5Gdj+/2Pg+veDQYLj1yplnq/3nLSl99pbaB1SlZT6NRr9o4DeACCAGIfq4uVle45bHTy+22Hva37nex84nf7zyDAw8HEzsP35xiDBzcbAysvD8JCNi0GQk5WBj5WZQfDdQ4YPt08yqEh+YTBT5E8WYeF7Y2lucsJEyezVaDIYBfQCAAE05DLchsvPDA7v22339MsxaU6BM2Xcf6UY7r5yYbj105iBnf87g8j/Lwx/OUQYHrAxMHx4+5mBjYGZgVNalsFZ5C/Ds/vfGR6/v8cQYPib4d/HdwyvGF61GKhLnS+yyV43mhRGAT0AQAANqQzXu/ZCyPT1FzLFRO87GavcZODh+cfw8dkrBsHfagwc4pIMP4V5GN590Wc4/0GS4TLDRwZpfmGGF0++MXxl+ccgJ8nI8PcTC8Pbu+8YdES+M3Azv2X4zPuT4S/P4XXKP/juxdimLfbT0bs0mPz7IkFEAEitx6Pkg8SCN4GjyXjoAIAAGjJ9uNw5l0rmbb2a+ENAROvr9w8MGu/ZGP7+e8/w9p8IwzuuNwyaQmcZ/v3QYzj3Tpvh7u8PDIosXxkUf35h+PyHg+HTF2aG+385GZhZfgNrv+8Mp95+YdAC1njqjEIMrFwGQR/+3GRoWNWi8utLemuIhfOZQeRtAyB2wCN/YDQJDy0AEEBDIsMVzdqRN33X7cy/YpJKjOzfGFg5WBkYmf4wfGN8ySAGbC5++vWXgZ/VhOH7H0OGT994Gb795WLQUvjF4C18hkGTU5ThzCsxhpPfWBi+/mJmYGQXZfjPLMjw/P9Lhq8veBnEvqoxGEozM7AzHQ9YOWfqA4GfzB9c7B3uDBKv2xOQH81wQwwABNCgz3Btay5FLT7wLvYvn7ASAzcTA8tPZgYl5u8MfKzA2opHmeHT//cMUr++Mcj9t2Rgk/vAkMCwneHWY1UGeU4OBlWg7zSlXzPI8XIy/H/NyXD4HTMD809WBhZgz+79b2WGd39+MHx9/ZrBhf8nAwubKcP6j88Kvi9YwsbLz99sbmD4YhB434GA/MHRJDy0AEAAdsughWAADKDP2pbF7CJ24caBcpBfpfwbZz9ixdGFnKZWdpbiJJrZFtry2S9wnvJ+w3v1Ch2c4x4H07k/uYg5MjSdx12ocaLsO4R2ShLYSL6OWGV2Zx9ChZYWYWgu6rVD9BRuSoV93GZIgFgqq6iO6O88vIys9CJLm8TiUW2Y9Ls9ksNmvFiut3lws4Is5Te8v8K/xUcADeqVJlM3X85+/u2/BYMgI8Nvhh8MnFz/GQT+nmYQFH3EICz+l+H351cMbJfuMzy6/43hxqtnDLcfCjJcfmfE8IaXj+Hbr7sMrz7fYHjK9JvhNSMbw+vfUgzfv0kz/GVgZ/jH/JPhP+sXBiYuRoYvrMIMBz6rMHzjFmAIV3zIkG3OyiD57Yz8qb1LbAZ4wEQBSAngUfJAYsGbD6NJeGgBgAAatDXcpO3X/fbe/erCzMfD8P/Pd4Z/jLwMHH/eMogy3mcQFmRlUJYTY/j/iYWB8Qszw7v/wBqL+Q2DqNxrBkYeYQZRQW0GtvfXGX79ZmfgFXBiEGRWZDj5+S/D7b9fGZj+8TIwfmNkYGD7xfCf4Q/Db473DJc+qDJ8/P6NQUf+KYOp5FuGZ0wf624fXSUkJat2S0ZtwObpCDUnD5CQeQ2wZF7QCOegrCGho7MotTvQrQdobCeogFOgddgABBBVM9zZe59FHr/6JPP0xzeZtx8/Cn18/1ng56//bN+//+H68/sfMzMj018uxjff2Dk4fvGyc37i5+X6JMTP+46fl++DiAD7G1Fe5jfqslI/QGatP3w28C8TqxIzExsD878vDCyMPAzcDJ8YTKRZGNTe/2dge8rCwCnByCDqqscg/fMjw6vftxn+cHxmkBR+xMD28yXDPwZ+BlHNOIbfLBZAfYwMvD8eMvCw/WX4+ucvwy9GZgaGf/8Z/jOyMjCwAvGPzwwPP/Aw3OdjYHgCrBG/sfIyvP3yIefhvRurBzDD6ROQv4gn8YAyazw00yrgUQdOXNDMuxCYyDZgyaj9uJqzQPWFOMwNAFL5OPSB7EtEr52hbs6HulkAh1sfQN06kVCGgJpXj0O6EZSBoRkbpCYAPZyAciC7CtHDhFIAEEAUZ7htZ55p7Th3y+PElZuWD169VfjHya2hzsF2SVSA5yk3D9sXPn6u9+Ii/G84OFg+MTMx/OZiEf3Cysz4m4mR8e//v39Zv/76I/7z/Sfh959/Sr9j/bUfmOEY1p16wn362SczBkFlhv/f/zL8+ccMrIt+Mvxm/8WgLC3LoPjvA8P1J8+ATUcuhl98vxkUufkZJFgUGS4/e8nA//shgxAbK4O4hCODoIQrw6svfxlYWd4zcLFwMbAzMzMwsX1l+P/7DwMjsJnJ8OsvA+O/XwzMrExAOySAdrAzMP3/w/D2+WsGlh/fGC4d2+ivqWt1TEha5c9Q6L9BE9B8aAIiFghA1QcA9W9AzgygRA1NuKSCfjwZvQE5s0FrlvlE1OgMUDMTQBiobwKuDA8F9njMLATqT4C6UwCPXeuB6kDhsYBakQoQQBRluN6Fu0Im7byT++jNdzthcS6G7AifYhNNmYO+6kJnKTH38LWnFV9ZRbQYWFiBGeI7w38mdob/3D8YPjP9Y7j1RpRBll+V4d/v68As+JdB/uNvBs6//xi4pYUZdKS4GTj/AGs5ERMGfiEPYM31m+Hnl58MDH+BGJidfvz8yvD79z8GBiZgrfYXmId+/WJgYvzFwALMdH9+/2b4xczDwMbOw8D0+y2Doaosw7s/34q+vbk5H5jhrgy2JiV6Ewua2fYTkVHxgQBoLVKIlrENiHUfNCEr4Ol3NqLVQusJ9FVxgQKQn4HmJZIYfh+gNWkCCYUH1TIcQABRNGiy7uL1wEffmO0YBKQZRLnYGXxURZZQmtnAGe7mE08GNiFghvkDzGx/GFg52RkYmH8x/GQWYLj1Q4vhMY8GA5u8CIOYACeDDI84w6PvOgxX31kz8AiHMrAJODL8kjRmeMnOyfDozSuGZ5//M7z9ww7E3xg+/fkEzGfATMzAxvD/P7DmAzY8mdhZGcCLbb5+Ybj8W47hq6QOg6iqPtAsQQYhIWaGVy/vKwxAH4ac0cl8CjMbPCFTOBJaj0cuEc2P+8nMbDCQAM3gpLQQBEjIbGD1ZNbyWAFAAFGU4eRBw4X/mRkYuXgYnnz6xlA+c8XSiRuPx1Bi5qmHzyVe/fwrzcDGx8D0B1gLsf5jYGYC1lC/GIAZQ4rh5W9phhufuRh+svEysAH7diveyTPMZ/FiWMrswbDvrSLDo//6DBffSjLcfMvDcO8jM8Odz28Zbn5+zfDkGyvD7/9iDMwszAz//30E1nB/gX1DYL33j5HhHwsfsNnJzXD8ozTDLR45oMc0GC69eM1w+uolhhcv3ooM9gETaO1WgEd9AxALAmsDRhCNVoPh6v8Q7CuSWLttgNXKSLUxvgLFEepeRQI1TD0ZI7wDBgACiKIMVx7l0BlsxN3H9Pb6vS+MfAz7Xwq7FK64t1g3d+61mN5ts6dvvhJ648FXdlLMvPHiu+FHFnYJxn8/Gf4Ddf5n5WT4/ZOdgYOBC5g7PjHc/M3AsPW9KMPNVzwMom8fMTz8LMRw/y+wifnhC8OtT88YHn3+yvD52VWG1/euMFx99oHhyPtfDDe/MDJ8+vqG4e8vYCP0L9CA3z8YmL8DcxuwrmP8C+y/AWu4v9wfGH5+ZWK4+uAbw3ceQYb/MuYML+QEGV6KMv0bIgMmhdCMNQGaIQ8g9ZkakfploBG4CSSMcl4gMJpITO32AS2T4+s7wTLbAah7H0CbjbjcoYClRUBMjQQKA0Vopp5AQC3Vpl8AAoiiPpy+stSHNfWRxf0bzhxdd+RK4Nl770y+/+fQuPKISfPKwzuaS4/fTJHiZ3+rLSF4ykJDZb+phvI+X1P8Tc6n7z/JfwX1sxiYGRh+/mJgY/3L8O+vADhT/Pv/g+EfOzvDh3+sDC9+8DC8ZxJkUPl7jeHLn10MfEx3GT4wSwBrKXUGVZ6vDFIsnxle/H3L8Ovbf4bXP2UYfgJzL/v/bwwc37gZfvzjAGa170Bz/zIwAVl/mBjAzUrGr4wMF27LAfVfZmAX/cvw7GM0gxijwkBsWiWpSQnNTET3M9CGwAklsAsE3AmrterxmAka4HiAZDe+Jl0hjvnFDXjCxQHNnYQKLPQBl434WgjUnCIACCCqTAsUBpisA+Hlh29Z7Tt/3enyUzbdBy9fK7z6+sns2Yc/ws9ePvPcffGVJxP7eQY1Ca47eiqSJ2y0ZbYbyPEes9WQeoBsFiMLI8N/FlYGlr/A6o2Vl+Hfvx8MjKxfgRLfgZnjP7A5KMDw4y8fw71/xsBmoCiDAusthoi/ixieMr9hOMgUx3D7AyfDs/+KDCJMHAws3+4w/GcTYWACZrD/LN+B+n4wsP7+zMD4/x8wAwObwn9+AuV+M7CwMjMwMbIx/GVmZjjzgINBmO0HAyf/X4YtZ5UZWJg4daCRTa/+mwChDEdMAkDKVPZImUMAiSbKfFDihw6RKxBwM64EewF5oITACOoFMufb+EkosB5gGd1UIKeGJwcABBBV5+EibdWOgTCIffDsE4VrT19oXXr8Ru/qi3faj99+kXn96avDjXf/VG4cuKayav/tGFYBfgYdGeHzhkqSx1TFOK5oy/OffvieQRVYtzH8/vKKgZH5NwN489DPPwzAfMjAxMICzECswMzCxnDntwywBhNnOMxhyWD64wiDBuc1hlDhWwxrfnEyXP6ix/D/7yMGdY5vDK8ZvzHwfLzIwPP/I8MHJkWGX/+FgdXZF2B1CcrYnAz/mb4Cazdghga1HNmZGb58f8dw4JYMAwu3OMMHYOvz1nsG9UFWux3Ak+hBNYc/kU0qUhLYBQKJMh9PJkZP3P74/A70BzX2i+HzfyO24Qh6ZTiAAKLZShN7Y5kHIAxkbgPxT9x+JvHs4xepWw+/q9178VLpwavPik+//JO69eqt1/l7Lw0Zfv1jkODnYfjLy8jAwsPDICXCwvD353uG7/9/A/MbP7D5x8Xw59tvht9/PoMzxz9WdoZPbJwMHF/+MRxksGC49ceRwen/XQZGIU4GyV9vGax/LmAwZvzJ8PT3H4ZXwNry328uYAZ9w3CFxQiY8ZgYWH7/Z/jDJgzMdFwM/4Hsf6BMx/CXgZmdjeHtOz4Ghl9CDAw8Xxief2SSOPrwpYy1vPgTKtdkDjhKc5J3CEAnmudTaaDgAI5EF4Ajg1zAU7stwOJHAxokt4s4BnwYcDRNScmgF6npUIAAotvSLgtVKdDq+xcMJgznYGLXnrzmuvf+u9Ldt59UHr79J/fi2W/JWx/fqF359DeIk5efQVBIkoGTh52BmQXY02JkZ/j/lZnh9/fvDJ8/v2P4+uM3w7efPxhefgOtjvzF8PATF8PKj4IM4hK/GRzYbjBIc74HZjZOho/vgZnwPw+DvCgbgynrWwYr1vsMF3/IMNz6oMTw+Buw//ZPiIHxHwsDC7CZ+ff3N4Z/3zkYOBn/Mvxlew6sDfkY+PmEPgnzcb4hN1NBMxCseYfeXGQko4Y7iMWO9UTWXKDE/5ABsgrFgIQEdhFPUw5X7fYBx2goLUYPPxAZfhdw9A8d6FXDAQTQgK6l1JIR/aYlwwCaVIZPLG+5/0knZfFpmdsvv5nxsv1i4OJgYhDg/sIgxsfHIMEtwSAnLcAgwSPCwM8FSqusDG9/cTP8ev+M4f7nrwy3n4gxXH//m+H+vwcMf0V/M/zg/Mbwg1WKgfUPO8NVYO32gI2LwVRBicGTlYOB4/Znhk93WRk+/mIF1mZ/gE1M0ET4d4b/jD8YuH6zgZeJ/WLiZZAWZ3yiIcj3g0wv1pPRvHMgIuMgg/kE1E6EDskjr+7IJ6OGY8CReXANgDSSsbi6gZxARqtF9UlsHRiQYDbFACCABt3iZR9FvisyXKxPXoowmX0FZqQ/rwUYnj/9ynANWDmyM91jEOFgYxDl5WaQFBVmEBERYtATY2ewVmJh8BPRYOBg/8rw89dvhhfvtRnefXJkuPb6KsPnNzcY3rPwMXx6fYvh+bNHDJf+P2Kwk5JmkGH7whCu9pVBV+49w5ObggxrbjIx3GHhBtY5bxm+CrIw/PgHbNYDexMaIgw3aTlAgpYRCgjUABewLItSwFPqO+JYs6iAZ0DhAZZE9wCo7wMWtyXgcO8F6NQDVjvw2L8Qm/1ULLAuktiiOEDtOAcIoEG5W8BWU/bw2RP3g37zSjEwAWsdpj/A/twfTtDSR4ZXf/4xvPzykeHqm88MTBxPGJYw/WXgAfbVJAWEGaSERRm8JL8xGIsyM/xjlmAwk3Rm+CjnyfDw+3+Gv/zfGETePGV4BOwDHnrwgoGT5T6DJvcPBt0/XxgstD8wvPzKwXD/EjfDXxZWhv+CnAyMwIwtyPaHwVhNiZZHLuwHJuRGaOawJ6KEX0jK6BqOGqafzAR2AUtiJnagBN0OXLUiqJ84AUvBVAANowf4/AYdOFIg0X/69GpOggBAAA3KDOemIbJrzuFLV75wyev84frDwPzrG7j5+BdY5fwG9ucYmIGYlQm80l/g/y+GTz8kGW69+ctw6+UPhp/vbjO8Fz3L8PAPBwO3gAjD1/fAzMb+jYGPXYuBiUuZQYKBm+HDb1WGJwxSDLffMjNsfcIC7CM+Znjyk5GBVYQF2J9jYvj57wsDw7cvDKqCwgwmfHyUZLgDBEpcAyL7X7AaawEpJT2ouQQb4ofWhusJlOgPKPALDEwg0AzbiCfD1QPdeQDJzQLQAiIBS+aCudcQKfPh89sHHLUn3QZMQAAggAZlhvNU5r3mqCJyYPOdrzqMnMAMAVp//B9Yvf3+zQCapWZkYGZgZGZlYAJmjh9/PzOwsfAz/GRhZGAEZr6PwEL3EwMLgxrzdYYrnCoMbB/fMIhwPmb49u8mw/cvMsC+oAgDC/97Bv7/Xxl+MHMx/GJXZnj4Qobh+YsfDIxcvxj+MwkDa04Ohn9fXzK8ff2WoWn2+npJMf7nvDIin4zEhc4J8PJ8EBPkfaUkwkLMCpSF5PZLcCTkD+j9C2jCwwXOgxIwlsEaogZk0MBDIguFRgJ9og1QNzng6BOeh458fmAgPGeI3k+0J6O2MqBnDQcQQIN2A2qirc78kw9OmL36/d+MkQeYARi/MzB8/8vA/PsfA+OfP0D8g4HpBzDD8QAz3/9PwBzJzMDJ+Jvh3ntuBu7vqgz+nI8YZPkeMfBJczCw/+Bm+PmVleHN+1cM35neMPCLczIofmVi+MV6l+HVv48MN+/8Zvj0npPhP7sQAzMPD8O/Xz8ZdJUkt6Q7aM389+ED050X71Qe33oqe/n0ZV0WJsY/nKzM3/l5OT6JCwm8EBMReiXCz/VGWpD9GR8v7ydFcYF/aH0fUBOpgMLggA1+YAMLGPCv3HCgUpQQk/gKiRwoATU58S1cJqZwWIBl24wDiQMmDgRqRKpnOIAAGrQZLlCd/9wBM7mVk44/NPvNzMvAAOxTMfwH1kKghcw/fzD8+wOs7RiAafsLG8N/1u8MbP8ZGf6wsjD8BDYlL3zUYuD+w8jg+PEsg5w4NwPPVxFgbcbMIMHxm+H1z+8M3MAMKPv1BzCzyjJce6XE8OAzLwOzgBgDI6MAw2+mrwy8XL+vpDlozMy2EN/CwCCO4bZTd1+JPXv9Xurtx88i7758EXrz7q3InZvfVZiYmP/xcnF84efl/MDLzfWFB8g2X/CmEGlSmtxmaSCehFzIQGCjKVqmWYinHyeAp2a6QKA2PUDsvjGoWY4M5O8WKMQxKGNAYu1N19oNBAACaFAfIhRhJbdi950Xrtff/fNgYOVgYPkPWtzFDsxm7OAVIoz/vjEw/wE1A/8x/P/5C9jiBDY/OdiBzU4+hpNv9BjY/3Ey6Kh+YdAS5GR4/estUPgdg/K3/wwMXELAlukPhksPmBiOXOVh+MrEzMAiAOwhglqJv74yeFlob8uxkNuCy11mymKvGEAYDdx+8Yvt27cPXH9+/GT5++cX079/f5igCSwRmMBACT2fgfjNoeBajVAihi69MoT2zxzwNPUmQGtJATwZDtQk20BmP66QlLiFZjpFBsTeNEIFxgeo2xqx9cWI2CFwgcQBkwO0SNMAATToT15ecuGWTfGmW72vfrCZsTEyMvz69he8W/v/5/cMbD/eA2s8bgZg4mb4+/c7UPw/AysrsGn4n4Xh1w9OBnMNJoYOmwsMgsB89Oo7HwPfn38MssCuyI0/4gwTzrMwHHrExfCRR4qBgROYL7iBGfUvG4O9HMOi7lirUlNBHpocrYC0VhKUQNCXFH2EJowL5BwQBE10BmgJ6SCtzwOhUrjAwkQfy8DFg8F6/gqpACCAhsRR563HPsRM23s189nX71aMXKwMjF/fMTB//sPw7x8XA8uvL8DmJTCz/f3NwASs+/78+8vw5y8jeFAlWv0LQ4LwBQZONqAeAUkG5g+sDG/ZfzLMvCfFsO2qAAMHJxvDdy4+hr/CfAyMvz8waEoKbOuLNC50k2K9xTAKRgENAEAADYmTl6utBJYIMyu8mXjkfv6NjwweDMBaiZnrN8OfT18ZfnGC1j0C+3ffvzOwgrbbgBpxQJr1zzcGnn93GP4zP2UQZJJi+PvzK8PRF38Zln3TZDj0URLYNfvH8JsX2Cfh4Qc2Vl4wmIgwrOkN0yq2lWJ9NJosRgGtAEAADZm7BTLMpXeoiPHembH/cebW2x+9fvxn0GDg52QAtikZGP4BM93n7wy/PgP7dMAcx/iPmYGZ8TUDg+Q3hh8CLAyfP/9kOPiSg2Hua22Gh//FGZi5GRn+coI2wP1nYPl8746bGveuRj+LehNJvjejSWIU0BIABNCQvB+uYceDhIWXn8Q//vDJ4S9oZyo7MOMxAPtgv/8xMP2FLIuU/P+MIU91GwOHiCjDndvKDAffizBc4QDWaIw/GBh+8jBw/vjLoKvMvSpQj399haPaClq5tb6+cT4D/hFKxcbG+gdkmAvq79wHYkOg/gs0cPd5ILUQaPYECs0B+b0faI4gLdMErcODWgAggIbkDagNHgoL7LWFDm26+MTv4L3v9g9evw14/wOYkdi5GP6BNtOBNosDibMfuRjufFZmuPDeDLIu//d3BhGeXwx6clzzfNSEt3rri29RE+Ck9U2ooJFB2JIs2Mp6+OQwOZkNCgyg+mmVuEDmF1LBHNCAjSMdkgWtw4MqACCAhuyVw46yfPccZbUmHH71b931xy+mn3v40ujWux/qLz79kvj8k8njJ7MIwwFmFwa271wMumI/tyiLct3RFZG9bKTIc05bnvuaKi8HXa4cRk4AwFIYtHvgAFDsAJIY7FxI0IjlRaDcBiwlN0getBVmI5J5oNG8A1D9CVD5iUD5D1B9oAQIG+kEbcd5CJRbgGZ2ANQc0CqSDUh6HaBuP0BILZIfYG6AFS4CULcKILmDGP8mQOU+Qu0htkDSZ0Aayof6AXbEH2i64yCyfwj5iVYAIICG/B3ftmJMj2zFpB4xGEvtAvFPvvwm8f47g8D334xcjL+Z//Fx/PkkxvPvlY4Yz5dB4FwH5NoNmilgaylBCasBKDYBGPGFSIlvPgNiDgkkHwhNpA5QsftICQuUgAyh4qAmYQM0I4DMdgAldlATEZroQZPOCkh685H0GsDsJKQW6of9DIjFxQXQhC8ArdlA7gBdGvmACP/C1k3CdpjXA8UMicx0DkhudoC6qRDq1g9Qu8DNTSL8TzMAEEBMDMMMmItzvfBQ4LoRqMp5LkCL7YKTEte9wZDZoImNgQF1AnY+tMYD9eMcoRFeAKrVoDUbKAEmAuVACQUkt4ABcYQ4bJ2hIVRvIKxZhWSXApLZBxgQaw3roXphcqAJaAVoBofVFheIVDsfWjvA5BuhGf8AFj/j9C9UHpRZC0FyIDUMkIluBxKalBeRm5egjAa1yxApU8L8xIDkJ5C8AaxmpyUACCAWhlFAL2AATQDITT4Q3gBtaiIDBST1C5Cap4lIzUxwXxCp9DdgQKz2hyU49D7YBaSEHQhzC4gGmnmBATERb4DUNMSpFtokM0Duo0FrUFBBcRDJDw+I8O8DaKEwHyhvD/VbIgkDJgJI/gMXGOhNaCT5BGjG/oDUj2akRyIACCCm0XxAN6CPVrv5Q5s6Dmj4AFTcnwH3MivYAAGyvD1SH0YfWpN8QGtyHUTqn23Akug/IjcpiVCLYQ+sVoP2l5D9TMi/DNDaJhEqfh6pFiV1wMQAOeyQ+6RQtgADHU9iQwYAATRaw9G3hjuAXuJCExlKSQ3tZzBgGWzIh4566mMxywCpf2iANoCA3LQzwFJDOEAz0QEsiROnWmgmwnYY7AEcfsbnX5C+hdBaaQF0OoXYc/3RwwN9hNUArbBjQCskAnAULFQHAAE0WsPRd8AEeUPjQehAhgNSQj6P1M8AJZAEUEaDZjZQ4guAJhQH5AQETbgKSIkO3S4HaGL/ANX3Adasg9rbD62pLqAlTkJqN0L7PqDBDQdoJglA0o/sDkL+TYAOkgggDarA/YdUaBAzYILeV0au/WHqCpDUz6dXIgAIoNEMN0ADJtAmF2hSeT9Q/j901GwC0kQz7OiF91BswIC4DMMAS4Z6gNRXQk9w8KYdNNMVQgcr/iONMAaSqhaa6RKh/bz1SJnkILo7iPBvIDSzvofKFyDVUv0MuO+bwzZg8gCtOQ2Xh4qD3NyP5g66NDEBAmhIrjQZZpkRVjtdwDYPBC2BP1B7Qhdak8AS5wNy1EL7WA9g81vQphko4wnimtMi0r/oc4AO0BHXBfQKd1oBgAAazXCjgJJEC2tCTmBAHJm3ADavRsWMUU/siOVgBwABNJrhRgGltWQ+Uj9sI6VrL4c7AAig0Qw3CkYBHQFAAI0OmoyCUUBHABBgAINuBWzNLw9pAAAAAElFTkSuQmCC';
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/stheegul/Documents/project/status-report/status-report/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map