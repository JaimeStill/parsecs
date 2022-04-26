"use strict";
(self["webpackChunkparsecs"] = self["webpackChunkparsecs"] || []).push([["main"],{

/***/ 5609:
/*!******************************************!*\
  !*** ./src/parsecs/app/app.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ 4666);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);








class AppComponent {
    constructor(themer) {
        this.themer = themer;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](core__WEBPACK_IMPORTED_MODULE_1__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 3, consts: [[1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "sticky-top", "p4"], ["fxFlex", "", 1, "mat-title", "m4"], ["mat-icon-button", "", 1, "m4", 3, "ngClass", "click"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "section", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Parsecs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "color-amber" : "color-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.themer.isLight ? "brightness_5" : "brightness_3", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 5094:
/*!***************************************!*\
  !*** ./src/parsecs/app/app.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core */ 4666);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5609);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ 6658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/home/home.route */ 9426);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            core__WEBPACK_IMPORTED_MODULE_7__.CoreModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_1__.Routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _routes_home_home_route__WEBPACK_IMPORTED_MODULE_2__.HomeRoute], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        core__WEBPACK_IMPORTED_MODULE_7__.CoreModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 9426:
/*!***************************************************!*\
  !*** ./src/parsecs/app/routes/home/home.route.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* binding */ HomeRoute)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);





function HomeRoute_pre_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 3)(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.characterColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.character), "\n");
} }
class HomeRoute {
    constructor(characterSvc) {
        this.characterSvc = characterSvc;
        this.characterColor = () => {
            var _a, _b;
            switch ((_b = (_a = this.character) === null || _a === void 0 ? void 0 : _a.race) === null || _b === void 0 ? void 0 : _b.species) {
                case 'Human':
                    return 'color-blue';
                case 'Alien':
                    return 'color-green';
                case 'Strange':
                    return 'color-red';
                default:
                    return 'color-amber';
            }
        };
        this.generate = () => this.character = this.characterSvc.generate();
    }
    ngOnInit() {
        this.generate();
    }
}
HomeRoute.ɵfac = function HomeRoute_Factory(t) { return new (t || HomeRoute)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](core__WEBPACK_IMPORTED_MODULE_1__.CharacterService)); };
HomeRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeRoute, selectors: [["home-route"]], decls: 6, vars: 1, consts: [[1, "mat-title", "m8"], ["mat-stroked-button", "", 3, "click"], ["class", "p4", 3, "ngClass", 4, "ngIf"], [1, "p4", 3, "ngClass"]], template: function HomeRoute_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate Character Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div")(3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_3_listener() { return ctx.generate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Generate Character");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeRoute_pre_5_Template, 4, 4, "pre", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.character);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], encapsulation: 2 });


/***/ }),

/***/ 2026:
/*!**********************************************!*\
  !*** ./src/parsecs/app/routes/home/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* reexport safe */ _home_route__WEBPACK_IMPORTED_MODULE_0__.HomeRoute)
/* harmony export */ });
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.route */ 9426);



/***/ }),

/***/ 6658:
/*!*****************************************!*\
  !*** ./src/parsecs/app/routes/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteComponents": () => (/* binding */ RouteComponents),
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 2026);

const RouteComponents = [
    _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute
];
const Routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


/***/ }),

/***/ 2568:
/*!*************************************************!*\
  !*** ./src/parsecs/environments/environment.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8253:
/*!*****************************!*\
  !*** ./src/parsecs/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 5094);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2568);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 4666:
/*!*************************************!*\
  !*** ./dist/core/fesm2015/core.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Alien": () => (/* binding */ Alien),
/* harmony export */   "AssaultBot": () => (/* binding */ AssaultBot),
/* harmony export */   "BackdropDirective": () => (/* binding */ BackdropDirective),
/* harmony export */   "BioUpgrade": () => (/* binding */ BioUpgrade),
/* harmony export */   "Bot": () => (/* binding */ Bot),
/* harmony export */   "BytesPipe": () => (/* binding */ BytesPipe),
/* harmony export */   "Campaign": () => (/* binding */ Campaign),
/* harmony export */   "Character": () => (/* binding */ Character),
/* harmony export */   "CharacterService": () => (/* binding */ CharacterService),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog),
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "CoreService": () => (/* binding */ CoreService),
/* harmony export */   "Crew": () => (/* binding */ Crew),
/* harmony export */   "DeConverted": () => (/* binding */ DeConverted),
/* harmony export */   "Dialogs": () => (/* binding */ Dialogs),
/* harmony export */   "Difficulty": () => (/* binding */ Difficulty),
/* harmony export */   "Directives": () => (/* binding */ Directives),
/* harmony export */   "EmoSuppressed": () => (/* binding */ EmoSuppressed),
/* harmony export */   "Empath": () => (/* binding */ Empath),
/* harmony export */   "Engineer": () => (/* binding */ Engineer),
/* harmony export */   "Feeler": () => (/* binding */ Feeler),
/* harmony export */   "Feral": () => (/* binding */ Feral),
/* harmony export */   "GeneticUplift": () => (/* binding */ GeneticUplift),
/* harmony export */   "Hakshan": () => (/* binding */ Hakshan),
/* harmony export */   "HopefulRookie": () => (/* binding */ HopefulRookie),
/* harmony export */   "Hulker": () => (/* binding */ Hulker),
/* harmony export */   "Human": () => (/* binding */ Human),
/* harmony export */   "KErin": () => (/* binding */ KErin),
/* harmony export */   "Manipulator": () => (/* binding */ Manipulator),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule),
/* harmony export */   "MinorAlien": () => (/* binding */ MinorAlien),
/* harmony export */   "Mutant": () => (/* binding */ Mutant),
/* harmony export */   "MysteriousPast": () => (/* binding */ MysteriousPast),
/* harmony export */   "Pipes": () => (/* binding */ Pipes),
/* harmony export */   "Precursor": () => (/* binding */ Precursor),
/* harmony export */   "Primitive": () => (/* binding */ Primitive),
/* harmony export */   "Race": () => (/* binding */ Race),
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService),
/* harmony export */   "Soulless": () => (/* binding */ Soulless),
/* harmony export */   "Stalker": () => (/* binding */ Stalker),
/* harmony export */   "Strange": () => (/* binding */ Strange),
/* harmony export */   "Swift": () => (/* binding */ Swift),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService),
/* harmony export */   "Traveler": () => (/* binding */ Traveler),
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe),
/* harmony export */   "UnityAgent": () => (/* binding */ UnityAgent),
/* harmony export */   "WeaponTrait": () => (/* binding */ WeaponTrait),
/* harmony export */   "d10": () => (/* binding */ d10),
/* harmony export */   "d100": () => (/* binding */ d100),
/* harmony export */   "d12": () => (/* binding */ d12),
/* harmony export */   "d20": () => (/* binding */ d20),
/* harmony export */   "d4": () => (/* binding */ d4),
/* harmony export */   "d6": () => (/* binding */ d6),
/* harmony export */   "d8": () => (/* binding */ d8),
/* harmony export */   "dice": () => (/* binding */ dice),
/* harmony export */   "roll": () => (/* binding */ roll)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ 8616);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 4941);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tree */ 4972);
















































const Components = [];

class ConfirmDialog {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        if (this.data) {
            this.data.title = this.data.title
                ? this.data.title
                : 'Confirm Action?';
            this.data.content = this.data.content
                ? this.data.content
                : 'Are you sure you would like to perform this action?';
        }
        else {
            this.data = {
                title: 'Confirm Action?',
                content: 'Are you sure you would like to perform this action?'
            };
        }
    }
}
ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) { return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialog, selectors: [["confirm-dialog"]], decls: 11, vars: 4, consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function ConfirmDialog_Template(rf, ctx) {
        if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions")(7, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.content);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        }
    }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialog, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
            args: [{ selector: 'confirm-dialog', template: "<div class=\"mat-typography\">\r\n  <h2 mat-dialog-title>{{data?.title}}</h2>\r\n  <mat-dialog-content>\r\n    <p>{{data?.content}}</p>\r\n  </mat-dialog-content>\r\n  <mat-dialog-actions>\r\n    <button mat-button\r\n            [mat-dialog-close]=\"false\">Cancel</button>\r\n    <button mat-button\r\n            [mat-dialog-close]=\"true\"\r\n            color=\"warn\">Confirm</button>\r\n  </mat-dialog-actions>\r\n</div>\r\n" }]
        }], function () {
        return [{ type: undefined, decorators: [{
                        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA]
                    }] }];
    }, null);
})();

const Dialogs = [
    ConfirmDialog
];

class BackdropDirective {
    constructor(el) {
        this.el = el;
        this.filters = 'blur(30px) brightness(1.8)';
        this.hover = 'blur(30px) brightness(1.8)';
    }
    ngOnInit() {
        this.el.nativeElement.style.backdropFilter = this.filters;
        this.el.nativeElement.classList.add('backdropped');
    }
    onMouseEnter() {
        this.el.nativeElement.style.backdropFilter = this.hover;
    }
    onMouseLeave() {
        this.el.nativeElement.style.backdropFilter = this.filters;
    }
}
BackdropDirective.ɵfac = function BackdropDirective_Factory(t) { return new (t || BackdropDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
BackdropDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BackdropDirective, selectors: [["", "backdrop", ""]], hostBindings: function BackdropDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function BackdropDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function BackdropDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
        }
    }, inputs: { filters: "filters", hover: "hover" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackdropDirective, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
            args: [{
                    selector: '[backdrop]'
                }]
        }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { filters: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], hover: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
            }], onMouseEnter: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
                args: ['mouseleave']
            }] });
})();

const Directives = [
    BackdropDirective
];

var Difficulty;
(function (Difficulty) {
    Difficulty["Easy"] = "Easy";
    Difficulty["Normal"] = "Normal";
    Difficulty["Challenging"] = "Challenging";
    Difficulty["Hardcore"] = "Hardcore";
    Difficulty["Insanity"] = "Insanity";
})(Difficulty || (Difficulty = {}));
var WeaponTrait;
(function (WeaponTrait) {
    WeaponTrait["Area"] = "Resolve all shots against the initial target. They cannot be spread. Then resolve one bonus shot against every figure within 2\".";
    WeaponTrait["Clumsy"] = "-1 to Brawling rolls, if opponent has higher Speed.";
    WeaponTrait["Critical"] = "A natural 6 on the to Hit roll will inflict 2 Hits on the target.";
    WeaponTrait["Elegant"] = "When Brawling, the fighter may reroll the die. Enemies will always reroll if they have a lower total than their opponent, and can improve the result.";
    WeaponTrait["Focused"] = "All shots must be against a single target.";
    WeaponTrait["Heavy"] = "-1 penalty to Hit if the firer moved this round.";
    WeaponTrait["Impact"] = "If target is Stunned, place a second Stun marker.";
    WeaponTrait["Melee"] = "+2 to Brawling rolls.";
    WeaponTrait["Piercing"] = "Ignore Armor Saving Throws.";
    WeaponTrait["Pistol"] = "+1 to Brawling rolls.";
    WeaponTrait["SingleUse"] = "The item can be used only once and must be deducted from the available supply. The Panic Fire rule cannot be used with Single Use weapons.";
    WeaponTrait["SnapShot"] = "+1 to Hit within 6\".";
    WeaponTrait["Stun"] = "All targets are automatically Stunned. No damage rolls ake place.";
    WeaponTrait["Terrifying"] = "Any target hit must retreat 1D6\" away from the firer.";
})(WeaponTrait || (WeaponTrait = {}));

class Race {
    constructor(species, kind, { reaction = 1, speed = 4, combatSkill = 0, toughness = 3, savvy = 0, luck = 0 } = {}) {
        this._species = species;
        this._kind = kind;
        this._reaction = reaction;
        this._speed = speed;
        this._combatSkill = combatSkill;
        this._toughness = toughness;
        this._savvy = savvy;
        this._luck = luck;
    }
    get species() {
        return this._species;
    }
    get kind() {
        return this._kind;
    }
    get reaction() {
        return this._reaction;
    }
    set reaction(value) {
        this._reaction = value > 6
            ? 6
            : value;
    }
    get speed() {
        return this._speed;
    }
    set speed(value) {
        this._speed = value > 8
            ? 8
            : value;
    }
    get combatSkill() {
        return this._combatSkill;
    }
    set combatSkill(value) {
        this._combatSkill = value > 5
            ? 5
            : value;
    }
    get toughness() {
        return this._toughness;
    }
    set toughness(value) {
        this._toughness = value > 6
            ? 6
            : value;
    }
    get savvy() {
        return this._savvy;
    }
    set savvy(value) {
        this._savvy = value > 5
            ? 5
            : value;
    }
    get luck() {
        return this._luck;
    }
    set luck(value) {
        this._luck = value > 1
            ? 1
            : value;
    }
}

class Alien extends Race {
    constructor(kind, config) {
        super('Alien', kind, config);
    }
}
class Engineer extends Alien {
    constructor() {
        super('Engineer', {
            toughness: 2,
            savvy: 1
        });
    }
    set toughness(value) {
        this._toughness = value > 4
            ? 4
            : value;
    }
}
class KErin extends Alien {
    constructor() {
        super(`K'Erin`, {
            toughness: 4
        });
    }
}
class Soulless extends Alien {
    constructor() {
        super('Soulless', {
            toughness: 4,
            savvy: 1
        });
    }
}
class Precursor extends Alien {
    constructor() {
        super('Precursor', {
            speed: 5,
            toughness: 2
        });
    }
}
class Swift extends Alien {
    constructor() {
        super('Swift', {
            speed: 5
        });
    }
}
class Feral extends Alien {
    constructor() {
        super('Feral');
    }
}
class Hakshan extends Alien {
    constructor() {
        super('Hakshan');
    }
}
class Manipulator extends Alien {
    constructor() {
        super('Manipulator', {
            reaction: 2,
            savvy: 1
        });
    }
}

class Bot extends Race {
    constructor(kind = 'Base', config = {
        reaction: 2,
        combatSkill: 1,
        toughness: 4,
        savvy: 2
    }) {
        super('Bot', kind, config);
    }
}
class AssaultBot extends Bot {
    constructor() {
        super('Assault Bot');
    }
}

class Human extends Race {
    constructor(kind = 'Base', config) {
        super('Human', kind, config);
    }
    set luck(value) {
        this._luck = value;
    }
}
class MysteriousPast extends Human {
    constructor() {
        super('Mysterious Past');
    }
}
class HopefulRookie extends Human {
    constructor() {
        super('Hopeful Rookie', {
            luck: 1
        });
    }
}
class Mutant extends Human {
    constructor() {
        super('Mutant');
    }
}
class Primitive extends Human {
    constructor() {
        super('Primitive');
    }
}
class Feeler extends Human {
    constructor() {
        super('Feeler');
    }
}
class EmoSuppressed extends Human {
    constructor() {
        super('Emo-suppressed');
    }
    set luck(value) {
        this._luck = 0;
    }
}
class MinorAlien extends Human {
    constructor() {
        super('Minor Alien');
    }
}
class Empath extends Human {
    constructor() {
        super('Empath');
    }
}
class BioUpgrade extends Human {
    constructor() {
        super('Bio-upgrade');
    }
}

class Strange extends Race {
    constructor(kind, config) {
        super('Strange', kind, config);
    }
}
class DeConverted extends Strange {
    constructor() {
        super('De-converted');
    }
    set savvy(value) {
        this._savvy = 0;
    }
}
class UnityAgent extends Strange {
    constructor() {
        super('Unity Agent', {
            reaction: 2
        });
    }
}
class Stalker extends Strange {
    constructor() {
        super('Stalker');
    }
}
class Hulker extends Strange {
    constructor() {
        super('Hulker', {
            combatSkill: 1,
            toughness: 5
        });
    }
}
class GeneticUplift extends Strange {
    constructor() {
        super('Genetic Uplift', {
            reaction: 2,
            speed: 5,
            combatSkill: 1,
            toughness: 4,
            savvy: 1
        });
    }
}
class Traveler extends Strange {
    constructor() {
        super('Traveler', {
            reaction: 3,
            toughness: 4,
            savvy: 2
        });
    }
}

const dice = (sides) => () => Math.floor(Math.random() * sides) + 1;
const d4 = dice(4);
const d6 = dice(6);
const d8 = dice(8);
const d10 = dice(10);
const d12 = dice(12);
const d20 = dice(20);
const d100 = dice(100);
const roll = ({ four = 0, six = 0, eight = 0, ten = 0, twelve = 0, twenty = 0, hundred = 0 }) => {
    const result = {};
    result.rolls = new Array();
    if (four > 0) {
        for (four; four > 0; four--)
            result.rolls.push({ sides: 4, result: d4() });
    }
    if (six > 0) {
        for (six; six > 0; six--)
            result.rolls.push({ sides: 6, result: d6() });
    }
    if (eight > 0) {
        for (eight; eight > 0; eight--)
            result.rolls.push({ sides: 8, result: d8() });
    }
    if (ten > 0) {
        for (ten; ten > 0; ten--)
            result.rolls.push({ sides: 10, result: d10() });
    }
    if (twelve > 0) {
        for (twelve; twelve > 0; twelve--)
            result.rolls.push({ sides: 12, result: d12() });
    }
    if (twenty > 0) {
        for (twenty; twenty > 0; twenty--)
            result.rolls.push({ sides: 20, result: d20() });
    }
    if (hundred > 0) {
        for (hundred; hundred > 0; hundred--)
            result.rolls.push({ sides: 100, result: d100() });
    }
    result.total = result
        .rolls
        .map((roll) => roll.result)
        .reduce((total = 0, current) => total + current);
    return result;
};

class Campaign {
    constructor({ crewSize = 6, useStory = true, useStars = true, difficulty = Difficulty.Normal } = {}) {
        this._crew = null;
        this.initStoryPoints = () => {
            const points = d6();
            switch (this._difficulty) {
                case Difficulty.Hardcore:
                    return points;
                case Difficulty.Insanity:
                    return 0;
                default:
                    return points + 1;
            }
        };
        this.initCrew = (crew) => this._crew = this.crew === null
            ? crew
            : this.crew;
        this.id = Symbol();
        this._crewSize = crewSize;
        this._useStory = useStory;
        this._difficulty = difficulty;
        this._useStars = difficulty === Difficulty.Insanity
            ? false
            : useStars;
        this._storyPoints = this.initStoryPoints();
    }
    get crewSize() { return this._crewSize; }
    get useStory() { return this._useStory; }
    get useStars() { return this._useStars; }
    get difficulty() { return this._difficulty; }
    get crew() { return this._crew; }
    get storyPoints() { return this._storyPoints; }
    set storyPoints(value) {
        this._storyPoints = this.difficulty === Difficulty.Insanity
            ? 0
            : value;
    }
}

class Character {
    constructor(race) {
        this.id = Symbol();
        this.race = race;
    }
}

class Crew {
    constructor(roster) {
        this._leader = null;
        this.addCharacter = (character) => !(this.roster.some(c => c.id === character.id))
            && this.roster.push(character);
        this.removeCharacter = (character) => this._roster = this.roster.filter(c => !(c.id === character.id));
        this._roster = roster;
    }
    get leader() { return this._leader; }
    set leader(crew) {
        this.leader && crew
            ? this.leader
            : crew;
    }
    get roster() { return this._roster; }
}

class BytesPipe {
    transform(value, precision = 2) {
        if (!value || value === 0)
            return '0 Bytes';
        const k = 1024, dm = precision <= 0 ? 0 : precision || 2, sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'], i = Math.floor(Math.log(value) / Math.log(k));
        return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}
BytesPipe.ɵfac = function BytesPipe_Factory(t) { return new (t || BytesPipe)(); };
BytesPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "bytes", type: BytesPipe, pure: true });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BytesPipe, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
            args: [{
                    name: 'bytes'
                }]
        }], null, null);
})();

class TruncatePipe {
    transform(value, limit = 50, ellipses = '...') {
        if (!value)
            return '';
        return value.length <= limit ? value : `${value.substr(0, limit)}${ellipses}`;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncate", type: TruncatePipe, pure: true });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncatePipe, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
            args: [{
                    name: 'truncate'
                }]
        }], null, null);
})();

const Pipes = [
    BytesPipe,
    TruncatePipe
];

class CharacterService {
    constructor() {
        this.generateAlien = () => {
            const alienRoll = d100();
            if (alienRoll >= 1 && alienRoll <= 20)
                return new Engineer();
            else if (alienRoll >= 21 && alienRoll <= 40)
                return new KErin();
            else if (alienRoll >= 41 && alienRoll <= 55)
                return new Soulless();
            else if (alienRoll >= 56 && alienRoll <= 70)
                return new Precursor();
            else if (alienRoll >= 71 && alienRoll <= 90)
                return new Feral();
            else
                return new Swift();
        };
        this.generateStrange = () => {
            const strangeRoll = d100();
            if (strangeRoll >= 1 && strangeRoll <= 2)
                return new DeConverted();
            else if (strangeRoll >= 3 && strangeRoll <= 8)
                return new UnityAgent();
            else if (strangeRoll >= 9 && strangeRoll <= 17)
                return new MysteriousPast();
            else if (strangeRoll >= 18 && strangeRoll <= 22)
                return new Hakshan();
            else if (strangeRoll >= 23 && strangeRoll <= 27)
                return new Stalker();
            else if (strangeRoll >= 28 && strangeRoll <= 34)
                return new Hulker();
            else if (strangeRoll >= 35 && strangeRoll <= 41)
                return new HopefulRookie();
            else if (strangeRoll >= 42 && strangeRoll <= 47)
                return new GeneticUplift();
            else if (strangeRoll >= 48 && strangeRoll <= 53)
                return new Mutant();
            else if (strangeRoll >= 54 && strangeRoll <= 58)
                return new AssaultBot();
            else if (strangeRoll >= 59 && strangeRoll <= 62)
                return new Manipulator();
            else if (strangeRoll >= 63 && strangeRoll <= 67)
                return new Primitive();
            else if (strangeRoll >= 68 && strangeRoll <= 73)
                return new Feeler();
            else if (strangeRoll >= 74 && strangeRoll <= 79)
                return new EmoSuppressed();
            else if (strangeRoll >= 80 && strangeRoll <= 85)
                return new MinorAlien();
            else if (strangeRoll >= 86 && strangeRoll <= 87)
                return new Traveler();
            else if (strangeRoll >= 88 && strangeRoll <= 93)
                return new Empath();
            else
                return new BioUpgrade();
        };
        this.generate = () => {
            let character;
            const typeRoll = d100();
            if (typeRoll >= 1 && typeRoll <= 60)
                character = new Character(new Human());
            else if (typeRoll >= 61 && typeRoll <= 80)
                character = new Character(this.generateAlien());
            else if (typeRoll >= 81 && typeRoll <= 90)
                character = new Character(new Bot());
            else
                character = new Character(this.generateStrange());
            return character;
        };
    }
}
CharacterService.ɵfac = function CharacterService_Factory(t) { return new (t || CharacterService)(); };
CharacterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CharacterService, factory: CharacterService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterService, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null);
})();

class CoreService {
    constructor() {
        this.ssnPattern = /^(?!(000|666|9))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/g;
        this.getUploadOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
            headers.set('Accept', 'application/json');
            headers.delete('Content-Type');
            return headers;
        };
        this.getTextOptions = () => {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
            headers.set('Content-Type', 'text/plain');
            headers.delete('Pragma');
            return headers;
        };
        this.urlEncode = (value) => {
            const regex = /[^a-zA-Z0-9-.]/gi;
            let newValue = value.replace(/\s/g, '-').toLowerCase();
            newValue = newValue.replace(regex, '');
            return newValue;
        };
        this.generateInputObservable = (input) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(input.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)());
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
CoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreService, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null);
})();

class SnackerService {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarConfig();
        this.sendMessage = (message) => this.snackbar.open(message, 'Close', this.config);
        this.setClasses = (classes) => {
            classes.push('snacker');
            this.config.panelClass = classes;
        };
        this.sendColorMessage = (message, colors) => {
            this.setClasses(colors);
            this.sendMessage(message);
        };
        this.sendErrorMessage = (message) => {
            this.setClasses(['snacker-red']);
            this.sendMessage(message);
        };
        this.sendWarningMessage = (message) => {
            this.setClasses(['snacker-orange']);
            this.sendMessage(message);
        };
        this.sendSuccessMessage = (message) => {
            this.setClasses(['snacker-green']);
            this.sendMessage(message);
        };
        this.config.duration = 5000;
        this.config.panelClass = [];
    }
    setDuration(duration) {
        this.config.duration = duration;
    }
}
SnackerService.ɵfac = function SnackerService_Factory(t) { return new (t || SnackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
SnackerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackerService, factory: SnackerService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackerService, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar }]; }, null);
})();

class ThemeService {
    constructor(overlay) {
        this.overlay = overlay;
        this.isLight = true;
        this.setOverlayContainerTheme = () => {
            if (this.isLight) {
                this.overlay.getContainerElement().classList.remove('app-dark');
                this.overlay.getContainerElement().classList.add('app-light');
            }
            else {
                this.overlay.getContainerElement().classList.remove('app-light');
                this.overlay.getContainerElement().classList.add('app-dark');
            }
        };
        this.toggleTheme = () => {
            this.isLight = !this.isLight;
            this.setOverlayContainerTheme();
        };
        this.isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        window.matchMedia('(prefers-color-scheme: light)')
            .addEventListener('change', (e) => this.isLight = e.matches);
        this.setOverlayContainerTheme();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayContainer)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayContainer }]; }, null);
})();

class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.GridModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatLineModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__.MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_40__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__.MatTreeModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
            args: [{
                    exports: [
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule,
                        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.GridModule,
                        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
                        _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule,
                        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.MatBottomSheetModule,
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
                        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule,
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
                        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule,
                        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule,
                        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule,
                        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule,
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
                        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__.MatGridListModule,
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatLineModule,
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule,
                        _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule,
                        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__.MatPaginatorModule,
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule,
                        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatPseudoCheckboxModule,
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule,
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule,
                        _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule,
                        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__.MatSidenavModule,
                        _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__.MatSliderModule,
                        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__.MatSlideToggleModule,
                        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
                        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule,
                        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__.MatStepperModule,
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_40__.MatTableModule,
                        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__.MatTabsModule,
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__.MatToolbarModule,
                        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__.MatTooltipModule,
                        _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__.MatTreeModule
                    ]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.DragDropModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__.GridModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__.MatBadgeModule,
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__.MatButtonToggleModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckboxModule,
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__.MatExpansionModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_25__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInputModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatLineModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatNativeDateModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__.MatPaginatorModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_31__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinnerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatPseudoCheckboxModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_33__.MatRadioModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_34__.MatSelectModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_35__.MatSidenavModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_36__.MatSliderModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_37__.MatSlideToggleModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__.MatSortModule,
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_39__.MatStepperModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_40__.MatTableModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_41__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__.MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_43__.MatTooltipModule,
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_44__.MatTreeModule] });
})();

class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule,
            MaterialModule
        ], MaterialModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
            args: [{
                    declarations: [
                        ...Components,
                        ...Dialogs,
                        ...Directives,
                        ...Pipes
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule,
                        MaterialModule
                    ],
                    exports: [
                        ...Components,
                        ...Dialogs,
                        ...Directives,
                        ...Pipes,
                        MaterialModule
                    ]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [ConfirmDialog, BackdropDirective, BytesPipe, TruncatePipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_45__.CommonModule,
            MaterialModule], exports: [ConfirmDialog, BackdropDirective, BytesPipe, TruncatePipe, MaterialModule] });
})();

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8253)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map