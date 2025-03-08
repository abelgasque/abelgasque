"use strict";
(self["webpackChunkng_abel"] = self["webpackChunkng_abel"] || []).push([["main"],{

/***/ 5529:
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Config": function() { return /* binding */ Config; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);


var Config = /*#__PURE__*/(0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function Config() {
  (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Config);
});
Config.config = {
  theme: 'default',
  themeType: 'default' // default, dark, light

};

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ 4229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






var routes = [{
  path: '',
  component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__.LandingPageComponent
}, {
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: ''
}];
var AppRoutingModule = /*#__PURE__*/(0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};

AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




var AppComponent = /*#__PURE__*/(0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppComponent() {
  (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppComponent);
});

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/pt */ 7423);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.module */ 6781);











(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_2__["default"]);
var AppModule = /*#__PURE__*/(0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.LOCALE_ID,
    useValue: 'pt-BR'
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.HashLocationStrategy
  }],
  imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_5__.LandingPageModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent],
    imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_5__.LandingPageModule]
  });
})();

/***/ }),

/***/ 4229:
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": function() { return /* binding */ LandingPageComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-config */ 5529);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/scroll-spy/scroll-spy.service */ 7197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ 3530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/scroll-spy/scroll-spy.directive */ 9219);
/* harmony import */ var _shared_components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/sections/home/home.component */ 4726);
/* harmony import */ var _shared_components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/sections/about/about.component */ 1444);
/* harmony import */ var _shared_components_sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/sections/experience/experience.component */ 4872);
/* harmony import */ var _shared_components_sections_formation_formation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/components/sections/formation/formation.component */ 9851);
/* harmony import */ var _shared_components_sections_certification_certification_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/components/sections/certification/certification.component */ 4511);
/* harmony import */ var _shared_components_sections_language_language_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/sections/language/language.component */ 4568);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/components/loader/loader.component */ 605);





















function LandingPageComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "header", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("clickOutside", function LandingPageComponent_header_0_Template_header_clickOutside_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r3.openClass = "";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 16)(2, "div", 17)(3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LandingPageComponent_header_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r4);
      var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r5.openClass = ctx_r5.openClass === "open" ? "" : "open";
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 19)(6, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx_r0.openClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r0.mobileHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r0.name);
  }
}

function LandingPageComponent_header_1_li_10_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i");
  }

  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](item_r7.icon);
  }
}

function LandingPageComponent_header_1_li_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r7.name);
  }
}

var _c0 = function _c0(a0) {
  return {
    active: a0
  };
};

function LandingPageComponent_header_1_li_10_Template(rf, ctx) {
  if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LandingPageComponent_header_1_li_10_Template_li_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13);
      var item_r7 = restoredCtx.$implicit;
      var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r12.scrollTo(item_r7.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, LandingPageComponent_header_1_li_10_i_2_Template, 1, 3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, LandingPageComponent_header_1_li_10_span_3_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    var item_r7 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](4, _c0, ctx_r6.currentSection === item_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](6, _c0, ctx_r6.currentSection === item_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.themeConfig.theme !== "horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.themeConfig.theme !== "collapsed");
  }
}

function LandingPageComponent_header_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "header", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("resize", function LandingPageComponent_header_1_Template_header_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r14.onResize($event);
    }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 16)(2, "nav", 22)(3, "a", 23)(4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LandingPageComponent_header_1_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r15);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r16.collapsedCardToggle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 27)(9, "ul", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, LandingPageComponent_header_1_li_10_Template, 4, 8, "li", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.desktopHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r1.horizontalNavClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@collapsedCard", ctx_r1.collapsedCard);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.listMenu);
  }
}

function LandingPageComponent_header_2_li_7_Template(rf, ctx) {
  if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LandingPageComponent_header_2_li_7_Template_li_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20);
      var item_r18 = restoredCtx.$implicit;
      var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r19.scrollTo(item_r18.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var item_r18 = ctx.$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](6, _c0, ctx_r17.currentSection === item_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](8, _c0, ctx_r17.currentSection === item_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](item_r18.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r18.name);
  }
}

function LandingPageComponent_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "header", 3)(1, "div", 19)(2, "a", 34)(3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "nav")(6, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, LandingPageComponent_header_2_li_7_Template, 5, 10, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 37)(9, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("d-flex align-items-start flex-column ", ctx_r2.openClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r2.desktopHeaderClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r2.listMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("Diret\xF3rios reservados \xA9 ", ctx_r2.currentYear, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.version);
  }
}

var _c1 = function _c1() {
  return ["SECTION"];
};

var _c2 = function _c2(a0) {
  return {
    light: a0
  };
};

var LandingPageComponent = /*#__PURE__*/function () {
  function LandingPageComponent(scrollSpy, location) {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LandingPageComponent);

    this.scrollSpy = scrollSpy;
    this.location = location;
    this.openClass = '';
    this.contentClass = 'content';
    this.mobileHeaderClass = 'mobile-header-1';
    this.desktopHeaderClass = 'desktop-header-1';
    this.horizontalNavClass = 'navbar-dark';
    this.desktopLogo = 'assets/images/logo.svg';
    this.collapsedCard = 'collapsed';
    this.name = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.name;
    this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.version;
    this.listMenu = [{
      id: 'home',
      name: 'Principal',
      icon: 'icon-home'
    }, {
      id: 'about',
      name: 'Sobre',
      icon: 'icon-user-following'
    }, {
      id: 'experience',
      name: 'Experiência',
      icon: 'icon-briefcase'
    }, {
      id: 'formation',
      name: 'Formações',
      icon: 'icon-graduation'
    }, {
      id: 'certification',
      name: 'Certificados',
      icon: 'icon-graduation'
    }, {
      id: 'language',
      name: 'Idiomas',
      icon: 'icon-graduation'
    } // {
    //   id: 'blog',
    //   name: 'Blog',
    //   icon: 'icon-note'
    // },
    // {
    //   id: 'contact',
    //   name: 'Contato',
    //   icon: 'icon-bubbles'
    // },
    ];
    this.currentYear = new Date().getFullYear();
    this.themeConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__.Config.config;
    this.windowWidth = window.innerWidth;
    var currentURL = this.location.path();
    var baseHref = this.location['_baseHref'];

    if (baseHref) {
      currentURL = baseHref + this.location.path();
    }

    switch (currentURL) {
      case baseHref + '/theme/view/vertical/default':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'default';
        break;

      case baseHref + '/theme/view/vertical/dark':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'dark';
        break;

      case baseHref + '/theme/view/vertical/light':
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'light';
        break;

      case baseHref + '/theme/view/collapsed/default':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'default';
        break;

      case baseHref + '/theme/view/collapsed/dark':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'dark';
        break;

      case baseHref + '/theme/view/collapsed/light':
        this.themeConfig.theme = 'collapsed';
        this.themeConfig.themeType = 'light';
        break;

      case baseHref + '/theme/view/horizontal/default':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'default';
        break;

      case baseHref + '/theme/view/horizontal/dark':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'dark';
        break;

      case baseHref + '/theme/view/horizontal/light':
        this.themeConfig.theme = 'horizontal';
        this.themeConfig.themeType = 'light';
        break;

      default:
        this.themeConfig.theme = 'vertical';
        this.themeConfig.themeType = 'default';
        break;
    }
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LandingPageComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.scrollSpy.count.subscribe(function (c) {
        _this.currentSection = c;
      });
      document.querySelector('body').classList.add(this.themeConfig.themeType);

      switch (this.themeConfig.theme) {
        case 'vertical':
          this.mobileHeaderClass = 'mobile-header-1';
          this.desktopHeaderClass = 'desktop-header-1';

          switch (this.themeConfig.themeType) {
            case 'light':
              this.desktopLogo = 'assets/images/logo-dark.svg';
              break;

            default:
              this.desktopLogo = 'assets/images/logo.svg';
          }

          break;

        case 'collapsed':
          this.mobileHeaderClass = 'mobile-header-2';
          this.desktopHeaderClass = 'desktop-header-2';
          this.contentClass = 'content-2';

          switch (this.themeConfig.themeType) {
            case 'light':
              this.desktopLogo = 'assets/images/logo-b-dark.svg';
              break;

            default:
              this.desktopLogo = 'assets/images/logo-b-light.svg';
          }

          break;

        case 'horizontal':
          this.desktopHeaderClass = 'desktop-header-3 fixed-top';
          this.contentClass = 'content-3';

          switch (this.themeConfig.themeType) {
            case 'light':
              this.horizontalNavClass = 'navbar-light';
              this.desktopLogo = 'assets/images/logo-dark.svg';
              break;

            default:
              this.desktopLogo = 'assets/images/logo.svg';
          }

          break;
      }

      this.mobileHeaderClass = this.mobileHeaderClass + ' ' + this.themeConfig.themeType;
      this.desktopHeaderClass = this.desktopHeaderClass + ' ' + this.themeConfig.themeType;

      if (this.windowWidth > 991) {
        this.collapsedCard = 'false';
      }
    }
  }, {
    key: "onResize",
    value: function onResize(e) {
      if (this.windowWidth > 991) {
        this.collapsedCard = 'false';
      } else {
        this.collapsedCard = 'collapsed';
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(section) {
      this.currentSection = section;
      var sectionHtml = document.querySelector('#' + section);

      if (sectionHtml !== null) {
        sectionHtml.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }, {
    key: "collapsedCardToggle",
    value: function collapsedCardToggle() {
      this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
    }
  }, {
    key: "onSectionChange",
    value: function onSectionChange(sectionId) {
      this.currentSection = sectionId;
      this.scrollSpy.nextCount(sectionId);
    }
  }]);
}();

LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
  return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_components_scroll_spy_scroll_spy_service__WEBPACK_IMPORTED_MODULE_4__.ScrollSpyService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.Location));
};

LandingPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: LandingPageComponent,
  selectors: [["app-landing-page"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownConfig])],
  decls: 21,
  vars: 13,
  consts: [[3, "class", "ngClass", "clickOutside", 4, "ngIf"], [3, "ngClass", "resize", 4, "ngIf"], [3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["id", "parentDiv", "scrollSpy", "", 1, "main-content", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "home", "d-flex", "align-items-center", 3, "ngClass"], [1, "w-100", 3, "themeType"], ["id", "about"], ["id", "experience"], ["id", "formation"], ["id", "certification"], ["id", "language"], [1, "spacer-96"], ["href", "javascript:", "id", "return-to-top", 3, "click"], [1, "fas", "fa-arrow-up"], [3, "ngClass", "clickOutside"], [1, "container"], [1, "menu-icon", "d-inline-flex", "mr-4"], [3, "click"], [1, "site-logo"], ["routerLink", "/", 1, "copyright"], [3, "ngClass", "resize"], [1, "navbar", "navbar-expand-lg", 3, "ngClass"], ["routerLink", "/", 1, "navbar-brand"], [1, "copyright"], ["aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", "data-target", "#navbarNavDropdown", "data-toggle", "collapse", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "navbar-collapse"], [1, "navbar-nav", "ml-auto", "scrollspy"], ["class", "nav-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "nav-item", 3, "ngClass", "click"], ["href", "javascript:", 1, "nav-link", 3, "ngClass"], [3, "class", 4, "ngIf"], [4, "ngIf"], ["routerLink", "/"], [1, "vertical-menu", "scrollspy"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "footer", 2, "text-align", "center"], [3, "ngClass", "click"]],
  template: function LandingPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, LandingPageComponent_header_0_Template, 8, 5, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, LandingPageComponent_header_1_Template, 11, 5, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, LandingPageComponent_header_2_Template, 14, 8, "header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "main", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sectionChange", function LandingPageComponent_Template_div_sectionChange_4_listener($event) {
        return ctx.onSectionChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "app-home", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "section", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "app-about");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "section", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "app-experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "section", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "app-formation");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "section", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "app-certification");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "section", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "app-language");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "app-loader");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function LandingPageComponent_Template_a_click_19_listener() {
        return ctx.scrollTo("home");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme !== "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme === "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.themeConfig.theme !== "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx.openClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx.contentClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](10, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](11, _c2, ctx.themeConfig.themeType === "light"));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("themeType", ctx.themeConfig.themeType);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, ng_click_outside__WEBPACK_IMPORTED_MODULE_5__.ClickOutsideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _shared_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_6__.ScrollSpyDirective, _shared_components_sections_home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent, _shared_components_sections_about_about_component__WEBPACK_IMPORTED_MODULE_8__.AboutComponent, _shared_components_sections_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__.ExperienceComponent, _shared_components_sections_formation_formation_component__WEBPACK_IMPORTED_MODULE_10__.FormationComponent, _shared_components_sections_certification_certification_component__WEBPACK_IMPORTED_MODULE_11__.CertificationComponent, _shared_components_sections_language_language_component__WEBPACK_IMPORTED_MODULE_12__.LanguageComponent, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_13__.LoaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.trigger)('collapsedCard', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({
      overflow: 'hidden',
      height: '0px'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({
      overflow: 'hidden',
      height: _angular_animations__WEBPACK_IMPORTED_MODULE_18__.AUTO_STYLE
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.transition)('collapsed <=> expanded', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.animate)('400ms ease-in-out')])])]
  }
});

/***/ }),

/***/ 6781:
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": function() { return /* binding */ LandingPageModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-click-outside */ 3530);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/loader/loader.module */ 216);
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page.component */ 4229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









var LandingPageModule = /*#__PURE__*/(0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LandingPageModule() {
  (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LandingPageModule);
});

LandingPageModule.ɵfac = function LandingPageModule_Factory(t) {
  return new (t || LandingPageModule)();
};

LandingPageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: LandingPageModule
});
LandingPageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideModule, _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LandingPageModule, {
    declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_5__.LandingPageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, ng_click_outside__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideModule, _shared_components_loader_loader_module__WEBPACK_IMPORTED_MODULE_4__.LoaderModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 605:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": function() { return /* binding */ LoaderComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-config */ 5529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



/* spinner */







var _c0 = function _c0(a0) {
  return {
    light: a0
  };
};

function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div")(4, "div")(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "svg", 5)(14, "defs")(15, "filter", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "feGaussianBlur", 7)(17, "feColorMatrix", 8)(18, "feBlend", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx_r0.themeConfig.themeType === "light"));
  }
}

var LoaderComponent = /*#__PURE__*/function () {
  function LoaderComponent(router, document, activatedRoute) {
    var _this = this;

    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoaderComponent);

    this.router = router;
    this.document = document;
    this.activatedRoute = activatedRoute;
    this.isSpinnerVisible = true;
    this.router.events.subscribe(function (event) {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart) {
        _this.isSpinnerVisible = true;
      } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationError) {
        _this.isSpinnerVisible = false;
      }
    }, function () {
      _this.isSpinnerVisible = false;
    });
    this.themeConfig = src_app_app_config__WEBPACK_IMPORTED_MODULE_2__.Config.config;
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoaderComponent, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.isSpinnerVisible = false;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();

LoaderComponent.ɵfac = function LoaderComponent_Factory(t) {
  return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};

LoaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoaderComponent,
  selectors: [["app-loader"]],
  decls: 1,
  vars: 1,
  consts: [["id", "preloader", 3, "ngClass", 4, "ngIf"], ["id", "preloader", 3, "ngClass"], [1, "outer"], [1, "infinityChrome"], [1, "infinity"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", 1, "goo-outer"], ["id", "goo"], ["in", "SourceGraphic", "stdDeviation", "6", "result", "blur"], ["in", "blur", "values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", "result", "goo"], ["in", "SourceGraphic", "in2", "goo"]],
  template: function LoaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 19, 3, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 216:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/loader/loader.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderModule": function() { return /* binding */ LoaderModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.component */ 605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





var LoaderModule = /*#__PURE__*/(0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoaderModule() {
  (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoaderModule);
});

LoaderModule.ɵfac = function LoaderModule_Factory(t) {
  return new (t || LoaderModule)();
};

LoaderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LoaderModule
});
LoaderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoaderModule, {
    declarations: [_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
    exports: [_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent]
  });
})();

/***/ }),

/***/ 9219:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/scroll-spy/scroll-spy.directive.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyDirective": function() { return /* binding */ ScrollSpyDirective; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




var ScrollSpyDirective = /*#__PURE__*/function () {
  function ScrollSpyDirective(_el) {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollSpyDirective);

    this._el = _el;
    this.spiedTags = [];
    this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollSpyDirective, [{
    key: "onScroll",
    value: function onScroll(event) {
      var _this = this;

      var currentSection = '';
      var children = this._el.nativeElement.children;
      var scrollTop = event.target.scrollTop;
      var parentOffset = event.target.offsetTop;

      var _loop = function _loop() {
        var element = children[i];

        if (_this.spiedTags.some(function (spiedTag) {
          return spiedTag === element.tagName;
        })) {
          if (element.offsetTop - parentOffset <= scrollTop) {
            currentSection = element.id;
          }
        }
      };

      for (var i = 0; i < children.length; i++) {
        _loop();
      }

      if (currentSection && currentSection !== this.currentSection) {
        this.currentSection = currentSection;
        this.sectionChange.emit(this.currentSection);
      }

      if (currentSection === 'home' && document.querySelector('#return-to-top').hasAttribute('style')) {
        document.querySelector('#return-to-top').removeAttribute('style');
      } else if (!document.querySelector('#return-to-top').hasAttribute('style')) {
        document.querySelector('#return-to-top').style.display = 'block';
      }
    }
  }]);
}();

ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) {
  return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};

ScrollSpyDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: ScrollSpyDirective,
  selectors: [["", "scrollSpy", ""]],
  hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      });
    }
  },
  inputs: {
    spiedTags: "spiedTags"
  },
  outputs: {
    sectionChange: "sectionChange"
  }
});

/***/ }),

/***/ 7197:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/scroll-spy/scroll-spy.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyService": function() { return /* binding */ ScrollSpyService; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var ScrollSpyService = /*#__PURE__*/function () {
  function ScrollSpyService() {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ScrollSpyService);

    this.counter = 'home';
    this.count = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.counter);
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ScrollSpyService, [{
    key: "nextCount",
    value: function nextCount(value) {
      this.count.next(value);
    }
  }]);
}();

ScrollSpyService.ɵfac = function ScrollSpyService_Factory(t) {
  return new (t || ScrollSpyService)();
};

ScrollSpyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ScrollSpyService,
  factory: ScrollSpyService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1444:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/sections/about/about.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": function() { return /* binding */ AboutComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




var AboutComponent = /*#__PURE__*/function () {
  function AboutComponent() {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AboutComponent);

    this.avatarImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.avatarImg;
    this.cvImg = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.cvImg;
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AboutComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();

AboutComponent.ɵfac = function AboutComponent_Factory(t) {
  return new (t || AboutComponent)();
};

AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AboutComponent,
  selectors: [["app-about"]],
  decls: 21,
  vars: 2,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-3"], [1, "text-center", "text-md-left"], ["alt", "avatar", 3, "src"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "col-md-9", "triangle-left-md", "triangle-top-sm"], [1, "rounded", "bg-white", "shadow-dark", "padding-30"], [1, "col-md-12"], [1, "mt-3"], ["target", "_blank", 1, "btn", "btn-default", 3, "href"]],
  template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sobre");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 3)(12, "div", 10)(13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Ol\xE1 mundo! \uD83D\uDC4B ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Buscando uma posi\xE7\xE3o desafiadora como Desenvolvedor Full Stack ou Back End, com foco nas tecnologias avan\xE7adas, como .NET, NodeJS, NestJS e Angular, para impulsionar a constru\xE7\xE3o e manuten\xE7\xE3o de aplica\xE7\xF5es web em nuvem altamente escal\xE1veis. Comprometido em adquirir novas habilidades e experi\xEAncias profissionais, ofere\xE7o um hist\xF3rico comprovado de produtividade e colabora\xE7\xE3o eficaz, garantindo empatia e adaptabilidade \xE0s necessidades espec\xEDficas da organiza\xE7\xE3o. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11)(18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Download CV");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.avatarImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.cvImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 4511:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/sections/certification/certification.component.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CertificationComponent": function() { return /* binding */ CertificationComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function CertificationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.occupation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", item_r1.dtStart, " - ", item_r1.dtEnd, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.description);
  }
}

var CertificationComponent = /*#__PURE__*/function () {
  function CertificationComponent() {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CertificationComponent);

    this.listCertification = [{
      company: 'GDG Floripa',
      occupation: 'DevFest Sul 2022',
      dtStart: 'Dezembro de 2022',
      dtEnd: 'Sem data de expiração',
      description: null
    }, {
      company: 'Front in Floripa',
      occupation: 'Front in Floripa 2022',
      dtStart: 'Novembro de 2022',
      dtEnd: 'Sem data de expiração',
      description: null
    }, {
      company: 'Rocketseat',
      occupation: 'Assemble',
      dtStart: 'Agosto de 2022',
      dtEnd: 'Sem data de expiração',
      description: null
    }, {
      company: 'Floripa Tech Day',
      occupation: 'Floripa Tech Day 2022',
      dtStart: 'Julho de 2022',
      dtEnd: 'Sem data de expiração',
      description: null
    }, {
      company: 'Cisco Networking Academy',
      occupation: 'Cybersecurity Essentials',
      dtStart: 'Maio de 2020',
      dtEnd: 'Sem data de expiração',
      description: null
    }, {
      company: 'AlgaWorks',
      occupation: 'Fullstack Angular e Spring',
      dtStart: 'Abril de 2019',
      dtEnd: 'Sem data de expiração',
      description: null
    }];
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CertificationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();

CertificationComponent.ɵfac = function CertificationComponent_Factory(t) {
  return new (t || CertificationComponent)();
};

CertificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CertificationComponent,
  selectors: [["app-certification"]],
  decls: 10,
  vars: 1,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-12"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "timeline", "exp", "bg-white", "shadow-dark", "rounded", "padding-30", "overflow-hidden"], ["class", "timeline-container wow fadeInUp", 4, "ngFor", "ngForOf"], [1, "line"], [1, "timeline-container", "wow", "fadeInUp"], [1, "content"], [1, "title"], [1, "time"]],
  template: function CertificationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Licen\xE7as e certificados");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CertificationComponent_div_8_Template, 10, 5, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listCertification);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZXJ0aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 4872:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/sections/experience/experience.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": function() { return /* binding */ ExperienceComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function ExperienceComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.occupation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", item_r1.dtStart, " - ", item_r1.isPresent ? "O momento" : item_r1.dtEnd, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r1.company, " - ", item_r1.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.description);
  }
}

var ExperienceComponent = /*#__PURE__*/function () {
  function ExperienceComponent() {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExperienceComponent);

    this.listExperience = [{
      company: 'Hypeone | NeoBPO',
      occupation: 'Analista de desenvolvimento de sistemas',
      type: 'CLT',
      dtStart: 'Outubro de 2022',
      dtEnd: '',
      isPresent: true,
      description: 'Desenvolvedor full stack sênior com as tecnologias .NET e Angular na equipe do produto Nex | Send um sistema web de CRM para atendimentos entre operações de call centers e seus clientes, responsável por demandas para criação de novas funcionalidades, adaptação de funcionalidades existentes e correções de bugs ou erros em time ágil gerenciado pela nuvem do Azure DevOps.'
    }, {
      company: 'PTC Group',
      occupation: 'Analista de desenvolvimento de sistemas',
      type: 'PJ',
      dtStart: 'Junho de 2022',
      dtEnd: 'Outubro de 2022',
      isPresent: false,
      description: 'Prestação de serviços como desenvolvedor back end com PostgreSQL e NestJS na criação de novas funcionalidades, adaptação de funcionalidades existentes e correções de bugs ou erros em time ágil gerenciado pelo Jira e aplicação implantada na AWS. Alocado remotamente em uma fintech de serviços financeiros, responsável por demandas relacionadas à segurança da informação.'
    }, {
      company: 'Code7',
      occupation: 'Analista de desenvolvimento de sistemas',
      type: 'CLT',
      dtStart: 'Setembro de 2020',
      dtEnd: 'Junho de 2022',
      isPresent: false,
      description: 'Análise e desenvolvimento de aplicações para desktops de call centers, integrações com serviços windows e serviço de internet utilizando ASP .Net com banco de dados SQL Server. Análise de bug e erros em fila N3. Implantação de serviços windows e publicação de serviço de internet em Gerenciador IIS em servidores Windows.'
    }, {
      company: 'Grupo Floripark',
      occupation: 'Aprendiz',
      type: 'CLT',
      dtStart: 'Abril de 2019',
      dtEnd: 'Agosto de 2020',
      isPresent: false,
      description: 'Desenvolvimento de sistema web para intranet com Angular 2+, utilizando bibliotecas de componentes. Consumindo pontos finais de API REST com Spring Framework.'
    }];
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExperienceComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();

ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
  return new (t || ExperienceComponent)();
};

ExperienceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ExperienceComponent,
  selectors: [["app-experience"]],
  decls: 10,
  vars: 1,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-12"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "timeline", "exp", "bg-white", "shadow-dark", "rounded", "padding-30", "overflow-hidden"], ["class", "timeline-container wow fadeInUp", 4, "ngFor", "ngForOf"], [1, "line"], [1, "timeline-container", "wow", "fadeInUp"], [1, "content"], [1, "title"], [1, "time"]],
  template: function ExperienceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Experi\xEAncia");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ExperienceComponent_div_8_Template, 10, 6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listExperience);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 9851:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/sections/formation/formation.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormationComponent": function() { return /* binding */ FormationComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function FormationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.occupation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", item_r1.dtStart, " - ", item_r1.dtEnd, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.description);
  }
}

var FormationComponent = /*#__PURE__*/function () {
  function FormationComponent() {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FormationComponent);

    this.listFormation = [{
      company: 'Estácio de Sá',
      occupation: 'Sistemas de Informação',
      dtStart: 'Janeiro de 2020',
      dtEnd: 'Dezembro de 2024',
      description: 'O curso de Sistemas de Informação apresenta aos nossos alunos o universo do fluxo de dados que circulam por redes de computadores. Eles aprendem a desenvolver processos e sistemas de informática, com o objetivo de disponibilizar esse material para usuários de redes. O mercado de trabalho nesta área é amplo e segue em curva crescente no Brasil. O curso de Sistemas de Informação, com duração de 4 anos(8 períodos), apresenta aos nossos alunos, disciplinas como Matemática, Cálculo Diferencial e Algoritmos para o melhor entendimento das teorias aplicadas neste setor. Na parte específica do curso, os estudantes aprendem sobre linguagem de programação, bancos de dados e engenharia de software. A arquitetura de redes de computadores também está entre os conteúdos ensinados. A maior demanda por profissionais está nos grandes centros, que concentram os maiores desenvolvedores de software.'
    }, {
      company: 'SENAI/SC - Serviço Nacional de Aprendizagem Industrial',
      occupation: 'Técnico em Informática Integrado ao Ensino Médio',
      dtStart: 'Janeiro de 2017',
      dtEnd: 'Dezembro de 2019',
      description: 'Técnico focado no desenvolvimento de software com conceitos de algoritmos, lógica de programação, boas praticas para desenvolvimento de produtos de software, gestão de operações, desenvolvimento de sistemas web com JSF / JSP, desenvolvimento de aplicativos mobiles com Android Studio, desenvolvimento de banco de dados relacionais, modelagem de banco de dados relacionais e metodologias ágeis com Scrum.'
    }];
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FormationComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();

FormationComponent.ɵfac = function FormationComponent_Factory(t) {
  return new (t || FormationComponent)();
};

FormationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FormationComponent,
  selectors: [["app-formation"]],
  decls: 10,
  vars: 1,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-md-12"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "timeline", "edu", "rounded", "bg-white", "shadow-dark", "padding-30", "overflow-hidden"], ["class", "timeline-container wow fadeInUp", 4, "ngFor", "ngForOf"], [1, "line"], [1, "timeline-container", "wow", "fadeInUp"], [1, "content"], [1, "title"], [1, "time"]],
  template: function FormationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Forma\xE7\xE3o acad\xEAmica");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, FormationComponent_div_8_Template, 10, 5, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listFormation);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 4726:
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/sections/home/home.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-animate */ 4887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);







function HomeComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Desenvolvedor Back-End");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}

function HomeComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Desenvolvedor Front-End");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}

function HomeComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span")(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Desenvolvedor Full-stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@bounce", undefined);
  }
}

var _c0 = function _c0(a0) {
  return {
    light: a0
  };
};

var HomeComponent = /*#__PURE__*/function () {
  function HomeComponent() {
    var _this = this;

    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeComponent);

    this.bounce = 1;
    setInterval(function () {
      _this.bounce = _this.bounce < 3 ? _this.bounce + 1 : 1;
    }, 3000);
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      setTimeout(function () {
        var Parallax = __webpack_require__(/*! parallax-js */ 4360);

        var scene = document.getElementById('scene');
        var parallaxInstance1 = new Parallax(scene, {
          relativeInput: false
        });
      }, 2000);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(section) {
      var sectionHtml = document.querySelector('#' + section);

      if (sectionHtml !== null) {
        sectionHtml.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    }
  }]);
}();

HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)();
};

HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  inputs: {
    themeType: "themeType"
  },
  decls: 54,
  vars: 6,
  consts: [[1, "container"], [1, "intro"], [1, "mb-2", "mt-0"], [1, "text-rotating", "morphext"], [4, "ngIf"], [1, "social-icons", "light", "list-inline", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "https://github.com/abelgasque"], [1, "fab", "fa-github"], ["href", "https://g.dev/abelgasque"], [1, "fab", "fa-google"], ["href", "https://www.linkedin.com/in/abelgasque/"], [1, "fab", "fa-linkedin"], [1, "mt-4"], ["href", "mailto:abelgasque20@gmail.com", 1, "btn", "btn-default"], [1, "scroll-down", 3, "ngClass"], ["href", "javascript:", 1, "mouse-wrapper", 3, "click"], [1, "mouse"], [1, "wheel"], ["id", "scene", "data-relative-input", "true", 1, "parallax"], ["width", "27", "height", "29", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p1"], ["d", "M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z", "fill", "#FFD15C", "fill-rule", "evenodd"], ["width", "26", "height", "26", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p2"], ["d", "M13 3.3541L2.42705 24.5h21.1459L13 3.3541z", "stroke", "#FF4C60", "stroke-width", "3", "fill", "none", "fill-rule", "evenodd"], ["width", "30", "height", "25", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p3"], ["d", "M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z", "fill", "#44D7B6", "fill-rule", "evenodd"], ["width", "15", "height", "23", "data-depth", "0.6", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p4"], ["transform", "rotate(30 9.86603 10.13397)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#FFD15C", "fill-rule", "evenodd"], ["width", "15", "height", "23", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p5"], ["transform", "rotate(30 9.86603 10.13397)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "49", "height", "17", "data-depth", "0.5", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p6"], ["fill", "#FF4C60", "fill-rule", "evenodd"], ["d", "M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"], ["d", "M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"], ["width", "26", "height", "26", "data-depth", "0.4", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p7"], ["d", "M13 22.6459L2.42705 1.5h21.1459L13 22.6459z", "stroke", "#FFD15C", "stroke-width", "3", "fill", "none", "fill-rule", "evenodd"], ["width", "19", "height", "21", "data-depth", "0.3", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p8"], ["transform", "rotate(-40 6.25252 10.12626)", "x", "7", "width", "3", "height", "25", "rx", "1.5", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "30", "height", "25", "data-depth", "0.3", "data-depth-y", "-1.30", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p9"], ["d", "M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z", "fill", "#6C6CE5", "fill-rule", "evenodd"], ["width", "47", "height", "29", "data-depth", "0.2", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p10"], ["fill", "#44D7B6", "fill-rule", "evenodd"], ["d", "M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"], ["d", "M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"], ["width", "33", "height", "20", "data-depth", "0.5", "xmlns", "http://www.w3.org/2000/svg", 1, "layer", "p11"], ["d", "M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z", "fill", "#FFD15C", "fill-rule", "evenodd"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Abel Gasque Lacerda Silva");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Eu sou um ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomeComponent_span_7_Template, 3, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HomeComponent_span_8_Template, 3, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HomeComponent_span_9_Template, 3, 1, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ul", 5)(11, "li", 6)(12, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 6)(15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li", 6)(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Contrate-me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15)(24, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_24_listener() {
        return ctx.scrollTo("about");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "svg", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "svg", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "path", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "svg", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "path", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "svg", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "rect", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "rect", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "svg", 30)(39, "g", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 32)(41, "path", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "svg", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "path", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "svg", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "rect", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "svg", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "svg", 40)(49, "g", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "path", 42)(51, "path", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "svg", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "path", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bounce === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, ctx.themeType === "light"));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
  styles: [".avatar-img[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 125px;\n  border: solid 2px black;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhci1pbWcge1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBoZWlnaHQ6IDEyNXB4O1xuICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('bounce', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_5__.bounceIn, {
      // Set the duration to 5seconds and delay to 2seconds
      params: {
        timing: 3,
        delay: 0,
        a: '3000px',
        b: '-25px',
        c: '10px',
        d: '-5px'
      }
    }))])]
  }
});

/***/ }),

/***/ 4568:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/sections/language/language.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": function() { return /* binding */ LanguageComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);






function LanguageComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ngb-progressbar", 12)(7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.per);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", item_r1.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", item_r1.value);
  }
}

var LanguageComponent = /*#__PURE__*/function () {
  function LanguageComponent() {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LanguageComponent);

    this.listSkill = [{
      name: 'Português',
      description: 'Fluente ou nativo',
      per: '100%',
      value: 100,
      theme: 'success'
    }, {
      name: 'Inglês',
      description: 'Nível básico',
      per: '30%',
      value: 30,
      theme: 'warning'
    }];
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LanguageComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }]);
}();

LanguageComponent.ɵfac = function LanguageComponent_Factory(t) {
  return new (t || LanguageComponent)();
};

LanguageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LanguageComponent,
  selectors: [["app-language"]],
  decls: 10,
  vars: 1,
  consts: [[1, "container"], [1, "section-title", "wow", "fadeInUp"], [1, "spacer-60"], [1, "row"], [1, "col-12"], [1, "spacer-30", "d-md-none", "d-lg-none"], [1, "timeline", "exp", "bg-white", "shadow-dark", "rounded", "padding-30", "overflow-hidden"], ["class", "col-12 col-md-6 skill-item", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "skill-item"], [1, "skill-info", "clearfix"], [1, "float-left", "mb-3", "mt-0"], [1, "float-right"], [3, "type", "value"], [1, "spacer-20"]],
  template: function LanguageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Idiomas");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LanguageComponent_div_9_Template, 8, 4, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listSkill);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbProgressbar],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 6206:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/sections/sections.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionsModule": function() { return /* binding */ SectionsModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-lightbox */ 5015);
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-image-slider */ 6118);
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-responsive-carousel */ 6406);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 4726);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ 1444);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./experience/experience.component */ 4872);
/* harmony import */ var _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui-modal/ui-modal.component */ 4626);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngu/carousel */ 8804);
/* harmony import */ var _formation_formation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formation/formation.component */ 9851);
/* harmony import */ var _certification_certification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./certification/certification.component */ 4511);
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./language/language.component */ 4568);
/* harmony import */ var _services_pdf_generator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/pdf-generator.service */ 4955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);

















var SectionsModule = /*#__PURE__*/(0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SectionsModule() {
  (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SectionsModule);
});

SectionsModule.ɵfac = function SectionsModule_Factory(t) {
  return new (t || SectionsModule)();
};

SectionsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: SectionsModule
});
SectionsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [_services_pdf_generator_service__WEBPACK_IMPORTED_MODULE_10__.PdfGeneratorService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxModule, ng_image_slider__WEBPACK_IMPORTED_MODULE_13__.NgImageSliderModule, angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_14__.IvyCarouselModule, _ngu_carousel__WEBPACK_IMPORTED_MODULE_15__.NguCarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SectionsModule, {
    declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceComponent, _ui_modal_ui_modal_component__WEBPACK_IMPORTED_MODULE_6__.UiModalComponent, _formation_formation_component__WEBPACK_IMPORTED_MODULE_7__.FormationComponent, _certification_certification_component__WEBPACK_IMPORTED_MODULE_8__.CertificationComponent, _language_language_component__WEBPACK_IMPORTED_MODULE_9__.LanguageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__.LightboxModule, ng_image_slider__WEBPACK_IMPORTED_MODULE_13__.NgImageSliderModule, angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_14__.IvyCarouselModule, _ngu_carousel__WEBPACK_IMPORTED_MODULE_15__.NguCarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule],
    exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.ExperienceComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, _formation_formation_component__WEBPACK_IMPORTED_MODULE_7__.FormationComponent, _certification_certification_component__WEBPACK_IMPORTED_MODULE_8__.CertificationComponent, _language_language_component__WEBPACK_IMPORTED_MODULE_9__.LanguageComponent]
  });
})();

/***/ }),

/***/ 4626:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/sections/ui-modal/ui-modal.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModalComponent": function() { return /* binding */ UiModalComponent; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function UiModalComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function UiModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

var _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];

var _c1 = function _c1(a0) {
  return {
    in: a0
  };
};

var _c2 = function _c2(a0, a1) {
  return {
    display: a0,
    opacity: a1
  };
};

var _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];
var UiModalComponent = /*#__PURE__*/function () {
  function UiModalComponent() {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UiModalComponent);

    this.hideHeader = false;
    this.hideFooter = false;
    this.containerClick = true;
    this.visible = false;
    this.visibleAnimate = false;
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UiModalComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      this.visible = true;
      setTimeout(function () {
        return _this.visibleAnimate = true;
      }, 100);
      document.querySelector('body').classList.add('modal-open');
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      this.visibleAnimate = false;
      setTimeout(function () {
        return _this2.visible = false;
      }, 300);
      document.querySelector('body').classList.remove('modal-open');
    }
  }, {
    key: "onContainerClicked",
    value: function onContainerClicked(event) {
      if (event.target.classList.contains('modal') && this.containerClick === true) {
        this.hide();
      }
    }
  }]);
}();

UiModalComponent.ɵfac = function UiModalComponent_Factory(t) {
  return new (t || UiModalComponent)();
};

UiModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: UiModalComponent,
  selectors: [["app-ui-modal"]],
  inputs: {
    dialogClass: "dialogClass",
    hideHeader: "hideHeader",
    hideFooter: "hideFooter",
    containerClick: "containerClick"
  },
  ngContentSelectors: _c3,
  decls: 7,
  vars: 10,
  consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], ["role", "document", 1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]],
  template: function UiModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UiModalComponent_Template_div_click_0_listener($event) {
        return ctx.onContainerClicked($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, UiModalComponent_div_3_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, UiModalComponent_div_6_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.dialogClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideHeader);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".basic.modal {\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  /*overflow: hidden;*/\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.basic.fade {\n  opacity: 0;\n  transition: opacity 0.15s linear;\n}\n.basic.fade.in {\n  opacity: 1;\n}\n.basic.modal.fade.in .modal-dialog {\n  transform: translate(0, 0);\n}\n.basic.modal.fade .modal-dialog {\n  transition: all 0.3s ease-out;\n  transform: translate(0, -25%);\n}\n.basic .basic-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n.basic .basic-close-light-box {\n  position: absolute;\n  top: -31px;\n  right: -20px;\n  font-size: 30px;\n  color: white;\n  text-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtFQUdBLGdDQUFBO0FBQUo7QUFDSTtFQUNFLFVBQUE7QUFDTjtBQUdJO0VBSUUsMEJBQUE7QUFETjtBQUdJO0VBR0UsNkJBQUE7RUFJQSw2QkFBQTtBQUROO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBRko7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkoiLCJmaWxlIjoidWktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMge1xuICAmLm1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDUwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLypvdmVyZmxvdzogaGlkZGVuOyovXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgJi5mYWRlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG4gICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XG4gICAgJi5pbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAmLm1vZGFsLmZhZGUge1xuICAgICYuaW4gLm1vZGFsLWRpYWxvZyB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTI1JSk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMjUlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICAgIH1cbiAgfVxuICAuYmFzaWMtY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDE2cHg7XG4gIH1cbiAgLmJhc2ljLWNsb3NlLWxpZ2h0LWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTMxcHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHRleHQtc2hhZG93OiBub25lO1xuICB9XG59XG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 4955:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/pdf-generator.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfGeneratorService": function() { return /* binding */ PdfGeneratorService; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ 4177);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ 9266);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);






var PdfGeneratorService = /*#__PURE__*/function () {
  function PdfGeneratorService(http) {
    (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PdfGeneratorService);

    this.http = http;
  }

  return (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PdfGeneratorService, [{
    key: "generate",
    value: function generate() {
      this.http.get('assets/templates/cv.html', {
        responseType: 'text'
      }).subscribe(function (htmlContent) {
        var newWindow = window.open('', '_blank');

        if (newWindow) {
          newWindow.document.write(htmlContent);
          newWindow.document.close();

          newWindow.onload = function () {
            html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(newWindow.document.body).then(function (canvas) {
              var imgData = canvas.toDataURL('image/png');
              var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]('p', 'mm', 'a4');
              var pdfWidth = pdf.internal.pageSize.getWidth();
              var pdfHeight = canvas.height * pdfWidth / canvas.width;
              pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
              var pdfBlob = pdf.output('blob');
              var link = document.createElement('a');
              var pdfUrl = URL.createObjectURL(pdfBlob);
              link.href = pdfUrl;
              link.download = 'Curriculo-AbelGasque.pdf';
              link.click();
              newWindow.close();
            });
          };
        }
      }, function (error) {
        console.error('Erro ao carregar o arquivo HTML:', error);
      });
    }
  }]);
}();

PdfGeneratorService.ɵfac = function PdfGeneratorService_Factory(t) {
  return new (t || PdfGeneratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
};

PdfGeneratorService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PdfGeneratorService,
  factory: PdfGeneratorService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": function() { return /* binding */ SharedModule; }
/* harmony export */ });
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 8047);
/* harmony import */ var _home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 8069);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_sections_sections_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/sections/sections.module */ 6206);
/* harmony import */ var _shared_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/scroll-spy/scroll-spy.directive */ 9219);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var SharedModule = /*#__PURE__*/(0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SharedModule() {
  (0,_home_runner_work_abelgasque_abelgasque_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SharedModule);
});

SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};

SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_shared_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollSpyDirective],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _shared_components_sections_sections_module__WEBPACK_IMPORTED_MODULE_2__.SectionsModule], _shared_components_sections_sections_module__WEBPACK_IMPORTED_MODULE_2__.SectionsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_shared_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollSpyDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _shared_components_sections_sections_module__WEBPACK_IMPORTED_MODULE_2__.SectionsModule],
    exports: [_shared_components_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_3__.ScrollSpyDirective, _shared_components_sections_sections_module__WEBPACK_IMPORTED_MODULE_2__.SectionsModule]
  });
})();

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
var environment = {
  production: false,
  name: "abelgasque",
  version: "1.0.0",
  avatarImg: "assets/images/avatar.jpg",
  cvImg: "assets/images/cv.pdf"
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.error(err);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map