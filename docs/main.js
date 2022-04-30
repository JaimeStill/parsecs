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
/* harmony import */ var core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);






function HomeRoute_pre_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 7)(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.characterColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r0.character), "\n");
} }
function HomeRoute_pre_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 7)(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.weaponColor());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r1.weapon), "\n");
} }
function HomeRoute_pre_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.ship), "\n");
} }
class HomeRoute {
    constructor() {
        this.cardSize = 'auto';
        this.characterColor = () => {
            var _a;
            switch ((_a = this.character) === null || _a === void 0 ? void 0 : _a.species) {
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
        this.generateCharacter = () => this.character = core__WEBPACK_IMPORTED_MODULE_1__.CharacterGenerator.GenerateCharacter();
        this.generateWeapon = () => {
            const roll = (0,core__WEBPACK_IMPORTED_MODULE_1__.d6)();
            if (roll >= 1 && roll <= 2)
                this.weapon = core__WEBPACK_IMPORTED_MODULE_1__.WeaponGenerator.GenerateLowTech();
            if (roll >= 3 && roll <= 4)
                this.weapon = core__WEBPACK_IMPORTED_MODULE_1__.WeaponGenerator.GenerateMilitary();
            else
                this.weapon = core__WEBPACK_IMPORTED_MODULE_1__.WeaponGenerator.GenerateHighTech();
        };
        this.weaponColor = () => {
            var _a;
            switch ((_a = this.weapon) === null || _a === void 0 ? void 0 : _a.description) {
                case 'Low Tech':
                    return 'color-blue';
                case 'Military':
                    return 'color-green';
                case 'High Tech':
                    return 'color-amber';
                default:
                    return 'color-red';
            }
        };
        this.generateShip = () => this.ship = core__WEBPACK_IMPORTED_MODULE_1__.ShipGenerator.Generate();
    }
    ngOnInit() {
        this.generateCharacter();
        this.generateShip();
        this.generateWeapon();
    }
}
HomeRoute.ɵfac = function HomeRoute_Factory(t) { return new (t || HomeRoute)(); };
HomeRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeRoute, selectors: [["home-route"]], decls: 22, vars: 9, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p8"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "m4", "p4"], [1, "mat-title", "m4"], [1, "p4"], ["mat-stroked-button", "", 3, "click"], ["class", "m4 pre-wrap", 3, "ngClass", 4, "ngIf"], ["class", "m4 pre-wrap", 4, "ngIf"], [1, "m4", "pre-wrap", 3, "ngClass"], [1, "m4", "pre-wrap"]], template: function HomeRoute_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "section", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Generate Character Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_5_listener() { return ctx.generateCharacter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Generate Character");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeRoute_pre_7_Template, 4, 4, "pre", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 1)(9, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Generate Weapon Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_12_listener() { return ctx.generateWeapon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Generate Weapon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeRoute_pre_14_Template, 4, 4, "pre", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 1)(16, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Generate Ship Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_19_listener() { return ctx.generateShip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Generate Ship");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeRoute_pre_21_Template, 3, 3, "pre", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.cardSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.character);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.cardSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weapon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.cardSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ship);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultClassDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe], encapsulation: 2 });


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
/* harmony export */   "CharacterDetail": () => (/* binding */ CharacterDetail),
/* harmony export */   "CharacterGenerator": () => (/* binding */ CharacterGenerator),
/* harmony export */   "CharacterStat": () => (/* binding */ CharacterStat),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog),
/* harmony export */   "Consumable": () => (/* binding */ Consumable),
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
/* harmony export */   "Equipment": () => (/* binding */ Equipment),
/* harmony export */   "EquipmentGenerator": () => (/* binding */ EquipmentGenerator),
/* harmony export */   "Feeler": () => (/* binding */ Feeler),
/* harmony export */   "Feral": () => (/* binding */ Feral),
/* harmony export */   "GeneticUplift": () => (/* binding */ GeneticUplift),
/* harmony export */   "Hakshan": () => (/* binding */ Hakshan),
/* harmony export */   "HopefulRookie": () => (/* binding */ HopefulRookie),
/* harmony export */   "Hulker": () => (/* binding */ Hulker),
/* harmony export */   "Human": () => (/* binding */ Human),
/* harmony export */   "Implant": () => (/* binding */ Implant),
/* harmony export */   "KErin": () => (/* binding */ KErin),
/* harmony export */   "Manipulator": () => (/* binding */ Manipulator),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule),
/* harmony export */   "Melee": () => (/* binding */ Melee),
/* harmony export */   "MinorAlien": () => (/* binding */ MinorAlien),
/* harmony export */   "Mutant": () => (/* binding */ Mutant),
/* harmony export */   "MysteriousPast": () => (/* binding */ MysteriousPast),
/* harmony export */   "OnBoardItem": () => (/* binding */ OnBoardItem),
/* harmony export */   "Pipes": () => (/* binding */ Pipes),
/* harmony export */   "Pistol": () => (/* binding */ Pistol),
/* harmony export */   "Precursor": () => (/* binding */ Precursor),
/* harmony export */   "Primitive": () => (/* binding */ Primitive),
/* harmony export */   "ProtectiveDevice": () => (/* binding */ ProtectiveDevice),
/* harmony export */   "ProtectiveDeviceType": () => (/* binding */ ProtectiveDeviceType),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "ShipGenerator": () => (/* binding */ ShipGenerator),
/* harmony export */   "ShipTrait": () => (/* binding */ ShipTrait),
/* harmony export */   "Sidearm": () => (/* binding */ Sidearm),
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService),
/* harmony export */   "Soulless": () => (/* binding */ Soulless),
/* harmony export */   "Stalker": () => (/* binding */ Stalker),
/* harmony export */   "Strange": () => (/* binding */ Strange),
/* harmony export */   "Swift": () => (/* binding */ Swift),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService),
/* harmony export */   "Traveler": () => (/* binding */ Traveler),
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe),
/* harmony export */   "UnityAgent": () => (/* binding */ UnityAgent),
/* harmony export */   "UtilityDevice": () => (/* binding */ UtilityDevice),
/* harmony export */   "Weapon": () => (/* binding */ Weapon),
/* harmony export */   "WeaponGenerator": () => (/* binding */ WeaponGenerator),
/* harmony export */   "WeaponMod": () => (/* binding */ WeaponMod),
/* harmony export */   "WeaponSight": () => (/* binding */ WeaponSight),
/* harmony export */   "WeaponStat": () => (/* binding */ WeaponStat),
/* harmony export */   "WeaponTrait": () => (/* binding */ WeaponTrait),
/* harmony export */   "d10": () => (/* binding */ d10),
/* harmony export */   "d100": () => (/* binding */ d100),
/* harmony export */   "d12": () => (/* binding */ d12),
/* harmony export */   "d20": () => (/* binding */ d20),
/* harmony export */   "d4": () => (/* binding */ d4),
/* harmony export */   "d6": () => (/* binding */ d6),
/* harmony export */   "d8": () => (/* binding */ d8),
/* harmony export */   "dice": () => (/* binding */ dice),
/* harmony export */   "die": () => (/* binding */ die)
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

class CharacterDetail {
    constructor(detail, { effects = null, resources = null, equipment = null } = {}) {
        this.detail = detail;
        this.effects = effects;
        this.resources = resources;
        this.equipment = equipment;
    }
}
class Character {
    constructor(species, type, { reaction = 1, speed = 4, combatSkill = 0, toughness = 3, savvy = 0, luck = 0 } = {}) {
        this.gear = new Array();
        this.sidearm = null;
        this.isLeader = false;
        this._weapons = [];
        this._devices = [];
        this.promoteLeader = () => {
            this.isLeader = true;
            this.luck += 1;
        };
        this.id = Symbol();
        this._species = species;
        this._type = type;
        this._reaction = reaction;
        this._speed = speed;
        this._combatSkill = combatSkill;
        this._toughness = toughness;
        this._savvy = savvy;
        this._luck = luck;
    }
    get species() { return this._species; }
    get type() { return this._type; }
    get reaction() { return this._reaction; }
    set reaction(value) {
        this._reaction = value > 6
            ? 6
            : value;
    }
    get speed() { return this._speed; }
    set speed(value) {
        this._speed = value > 8
            ? 8
            : value;
    }
    get combatSkill() { return this._combatSkill; }
    set combatSkill(value) {
        this._combatSkill = value > 5
            ? 5
            : value;
    }
    get toughness() { return this._toughness; }
    set toughness(value) {
        this._toughness = value > 6
            ? 6
            : value;
    }
    get savvy() { return this._savvy; }
    set savvy(value) {
        this._savvy = value > 5
            ? 5
            : value;
    }
    get luck() { return this._luck; }
    set luck(value) {
        this._luck = value > 1
            ? 1
            : value;
    }
    get weapons() { return this._weapons; }
    get devices() { return this._devices; }
}

class Alien extends Character {
    constructor(type, config) {
        super('Alien', type, config);
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

class Bot extends Character {
    constructor(type = 'Base', config = {
        reaction: 2,
        combatSkill: 1,
        toughness: 4,
        savvy: 2
    }) {
        super('Bot', type, config);
    }
}
class AssaultBot extends Bot {
    constructor() {
        super('Assault Bot');
    }
}

class Human extends Character {
    constructor(type = 'Base', config) {
        super('Human', type, config);
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

class Strange extends Character {
    constructor(type, config) {
        super('Strange', type, config);
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

var CharacterStat;
(function (CharacterStat) {
    CharacterStat["CombatSkill"] = "Combat Skill";
    CharacterStat["Luck"] = "Luck";
    CharacterStat["Reactions"] = "Reactions";
    CharacterStat["Savvy"] = "Savvy";
    CharacterStat["Speed"] = "Speed";
    CharacterStat["Toughness"] = "Toughness";
    CharacterStat["XP"] = "XP";
})(CharacterStat || (CharacterStat = {}));
var Difficulty;
(function (Difficulty) {
    Difficulty["Easy"] = "Easy";
    Difficulty["Normal"] = "Normal";
    Difficulty["Challenging"] = "Challenging";
    Difficulty["Hardcore"] = "Hardcore";
    Difficulty["Insanity"] = "Insanity";
})(Difficulty || (Difficulty = {}));
var ProtectiveDeviceType;
(function (ProtectiveDeviceType) {
    ProtectiveDeviceType["Armor"] = "Armor";
    ProtectiveDeviceType["Screen"] = "Screen";
})(ProtectiveDeviceType || (ProtectiveDeviceType = {}));
var ShipTrait;
(function (ShipTrait) {
    ShipTrait["EmergencyDrives"] = "If you have to perform an emergency take-off while your ship is damaged, reduce the Hull damage sustained on the roll by 3.";
    ShipTrait["FuelEfficient"] = "When traveling to a new world, the fuel cost is reduced by 1 credit.";
    ShipTrait["FuelHog"] = "When traveling to a new world, the fuel cost is increased by 1 credit.";
    ShipTrait["DodgyDrive"] = "Any time the ship takes Hull damage, roll 2D6. If the roll is equal to or below the amount of damage sustained, the drive is misbehaving, and 2 additional points of damage are sustained.";
    ShipTrait["StandardIssue"] = "The cost of all Starship Components is reduced by 1 credit.";
    ShipTrait["Armored"] = "Any time the ship takes damage, you lose 1 Hull Point less than indicated by the rules.";
})(ShipTrait || (ShipTrait = {}));
var WeaponStat;
(function (WeaponStat) {
    WeaponStat["Range"] = "Range";
    WeaponStat["Shots"] = "Shots";
    WeaponStat["Damage"] = "Damage";
    WeaponStat["Hit"] = "Hit";
})(WeaponStat || (WeaponStat = {}));
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

class Equipment {
    constructor(name, description) {
        this.id = Symbol();
        this.name = name;
        this.description = description;
    }
}
class ProtectiveDevice extends Equipment {
    constructor(name, description, type) {
        super(name, description);
        this.type = type;
    }
}
class WeaponMod extends Equipment {
    constructor(name, description, allowPistol) {
        super(name, description);
        this.allowPistol = allowPistol;
    }
}
class WeaponSight extends Equipment {
    constructor(name, description, pistolOnly, damaged = false) {
        super(name, description);
        this.pistolOnly = pistolOnly;
        this.damaged = damaged;
    }
}
class Consumable extends Equipment {
}
class Implant extends Equipment {
}
class UtilityDevice extends Equipment {
}
class OnBoardItem extends Equipment {
}

class Weapon {
    constructor(model, description, { damaged = false, range = 0, shots = 0, damage = 0, traits = new Array(), mod = null, sight = null } = {}) {
        this._damaged = false;
        this.hitBonus = 0;
        this.hasTrait = (trait) => this.traits.some((t) => t === trait);
        this.isType = (t) => this instanceof t;
        this.canAddMod = (mod) => {
            if (this.mod)
                return false;
            if (this.shots < 2)
                return false;
            if (this.isType(Melee))
                return false;
            if (!(mod.allowPistol) && this.isType(Pistol))
                return false;
            return true;
        };
        this.canAddSight = (sight) => {
            if (this.sight)
                return false;
            if (this.shots < 2)
                return false;
            if (this.isType(Melee))
                return false;
            if (sight.pistolOnly && !this.isType(Pistol))
                return false;
            return true;
        };
        this.addMod = (mod) => this.mod = this.canAddMod(mod)
            ? mod
            : this.mod;
        this.addSight = (sight) => this.sight = this.canAddSight(sight)
            ? sight
            : this.sight;
        this.removeSight = () => {
            const sight = this.sight;
            this.sight = null;
            return sight;
        };
        this.swapSight = (weapon) => {
            const swap = weapon.sight;
            weapon.sight = this.sight;
            this.sight = swap;
        };
        this.model = model;
        this.description = description;
        this.range = range;
        this.shots = shots;
        this.damage = damage;
        this.traits = traits;
        this.mod = mod;
        this.sight = sight;
        this.damaged = damaged;
    }
    get damaged() { return this._damaged; }
    set damaged(value) {
        if (this.sight)
            this.sight.damaged = value;
        this._damaged = value;
    }
}
class Sidearm extends Weapon {
}
class Pistol extends Sidearm {
}
class Melee extends Sidearm {
}

const die = (sides) => () => Math.floor(Math.random() * sides) + 1;
const d4 = die(4);
const d6 = die(6);
const d8 = die(8);
const d10 = die(10);
const d12 = die(12);
const d20 = die(20);
const d100 = die(100);
const dice = ({ four = 0, six = 0, eight = 0, ten = 0, twelve = 0, twenty = 0, hundred = 0 }) => {
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

class GeneratorOption {
    constructor(extent, value) {
        this.selected = (roll) => roll >= this.extent[0] && roll <= this.extent[1];
        this.extent = extent;
        this.value = value;
    }
}
const validateGenerator = (roll, values) => values.some(v => v.selected(roll));
const Generator = (die, values) => {
    var _a;
    let roll = die();
    if (!validateGenerator(roll, values))
        throw new RangeError(`Roll of ${roll} does not fall into the extent of any provided options`);
    const value = (_a = values.find(v => v.selected(roll))) === null || _a === void 0 ? void 0 : _a.value;
    if (value)
        return value;
    throw new Error(`Value resulting from roll of ${roll} was undefined`);
};

const Clone = (data, args = {}) => Object.assign({}, data, args, { id: Symbol() });

const Consumables = {
    BoosterPills: new Consumable(`Booster Pills`, `When taken, the character removes all Stun markers. They may move at double normal Speed this round.`),
    CombatSerum: new Consumable(`Combat Serum`, `The character receives +2" Speed and +2 Reactions for the rest of the battle.`),
    KiraninCrystals: new Consumable(`Kiranin Crystals`, `A bright, dazzling display of hypnotic lights will daze any character within 4" of the user, making them unable to act this round. The crystals have no effect on characters that already acted earlier in the round, and do not affect the user. A character that is attacked in Brawling combat will defend themselves normally.`),
    RageOut: new Consumable(`Rage Out`, `The user gains +2" Speed an +1 to all Brawling rolls for the rest of this and the following round. A K'Erin user gets the benefits for the rest of the battle.`),
    Still: new Consumable(`Still`, `The user gains +1 to Hit, but cannot Move during this and the next round.`),
    StimPack: new Consumable(`Stim-pack`, `If a character would become a casualty, they remain on the table with a single Stun marker. This item can be used reflexively upon becoming a casualty. It does not require an action.`)
};
const ConsumableList = [
    Consumables.BoosterPills,
    Consumables.CombatSerum,
    Consumables.KiraninCrystals,
    Consumables.RageOut,
    Consumables.Still,
    Consumables.StimPack
];
const Implants = {
    AICompanion: new Implant(`AI Companion`, `When making Savvy rolls, the character may roll twice and pick the better score.`),
    BodyWire: new Implant(`Body Wire`, `+1 Reactions`),
    BoostedArm: new Implant(`Boosted Arm`, `Increase Grenade range by 2+". If the character ends their Move in contact with an obstacle that is no taller than the miniature, they may pull themselves up on top (bot not cross) as a Free Action.`),
    BoostedLeg: new Implant(`Boosted Leg`, `Increase base move and Dash speed by +1" each.`),
    CyberHand: new Implant(`Cyber Hand`, `The character may take any one Pistol they own and build it into their hand. Range is reduced to half, but the weapon always shoots with +1 to Hit and an additional +1 bonus when Brawling.`),
    GeneticDefenses: new Implant(`Genetic Defenses`, `5+ Saving Throw, if subjected to any poison, virus, gas, or disease.`),
    HealthBoost: new Implant(`Health Boost`, `If a post-battle Injury would result in 2+ campaign turns of recovery time, reduce the time by 1. If the character has Toughness 3 when receving this ipmlant, raise it to 4.`),
    NerveAdjuster: new Implant(`Nerve Adjuster`, `Whenever the character is Stunned for any reason, they receive a 5+ Saving Throw to avoid the Stun.`),
    NeuralOptimization: new Implant(`Neural Optimization`, `The character cannot be Stunned.`),
    NightSight: new Implant(`Night Sight`, `The character does not suffer visibility reductions due to darkness, but is affected by smoke, gas, etc. normally.`),
    PainSuppressor: new Implant(`Pain Suppressor`, `The character can perform crew tasks while in Sick Bay, though they cannot participate in battles.`)
};
const ImplantList = [
    Implants.AICompanion,
    Implants.BodyWire,
    Implants.BoostedArm,
    Implants.BoostedLeg,
    Implants.CyberHand,
    Implants.GeneticDefenses,
    Implants.HealthBoost,
    Implants.NerveAdjuster,
    Implants.NeuralOptimization,
    Implants.NightSight,
    Implants.PainSuppressor
];
const OnBoardItems = {
    FakeId: new OnBoardItem(`Fake ID`, `Add +1 to all attempts to obtain a licesne or other legal document`),
    Fixer: new OnBoardItem(`Fixer`, `One piece of damaged or destroyed personal equipment can be repaired automatically, and at no cost. Single-use.`),
    LoadedDice: new OnBoardItem(`Loaded Dice`, `Each campaign turn, one crew member may gamble on the side. Roll 1D6. On a 1-4, earh that may credits. On a 5, earn nothing. On a 6, the locals don't take kindly to losing: The dice are lost and the crew member must roll on the post-battle Injury Table.`),
    MedPatch: new OnBoardItem(`Med-patch`, `A character recovering from an Injury may subtract one campaign turn from the recovery duration required. If this reduces the time to zero turns, they may act normally this campaign turn. Single-use.`),
    NanoDoc: new OnBoardItem(`Nano-doc`, `Prevent one roll on the post-battle Injury Table, no matter the source of the injury. YOu must decide before rolling the dice. Single-use.`),
    Purifier: new OnBoardItem(`Purifier`, `Each campaign turn, the Purifier can be used to generate clean water which can be sold off for 1 credit. This does not require a crew member to operate, but only one Purifier may be used at a time.`)
};
const OnBoardItemList = [
    OnBoardItems.FakeId,
    OnBoardItems.Fixer,
    OnBoardItems.LoadedDice,
    OnBoardItems.MedPatch,
    OnBoardItems.NanoDoc,
    OnBoardItems.Purifier
];
const ProtectiveDevices = {
    BattleDress: new ProtectiveDevice(`Battle Dress`, `The character counts as +1 Reactions (maximum 4) and receives a Saving Throw of 5+`, ProtectiveDeviceType.Armor),
    CamoCloak: new ProtectiveDevice(`Camo Cloak`, `If character is within 2" of Cover, they are counted as being in Cover. DOes not apply if the shooter is within 4".`, ProtectiveDeviceType.Screen),
    CombatArmor: new ProtectiveDevice(`Combat Armor`, `Saving Throw 5+`, ProtectiveDeviceType.Armor),
    DeflectorField: new ProtectiveDevice(`Deflector Field`, `Automatically deflects a single ranged weapon's Hit per battle. After a Hit is scored, decide if you wish to use the field before any rolls for Toughness or armor are made.`, ProtectiveDeviceType.Screen),
    FlakScreen: new ProtectiveDevice(`Falk Screen`, `All Area weapons striking the wearer, whether through the initial shots or additional attacks fro the Area trait have their Damage reduced by -1 (to a cap of +0).`, ProtectiveDeviceType.Screen),
    FlexArmor: new ProtectiveDevice(`Flex-armor`, `If the character did not move on their last activation, they count as +1 Toughness (to a maximum of 6).`, ProtectiveDeviceType.Screen),
    FragVest: new ProtectiveDevice(`Frag Vest`, `The wearer receives a 6+ Saving Throw, improved to 5+ against any Area attack.`, ProtectiveDeviceType.Armor),
    ScreenGenerator: new ProtectiveDevice(`Screen Generator`, `Receives a 5+ Saving Throw against gunfire. No effect against Area or Melee attacks.`, ProtectiveDeviceType.Screen),
    StealthGear: new ProtectiveDevice(`Stealth Gear`, `Enemies firing from a range over 9" are -1 to Hit.`, ProtectiveDeviceType.Armor)
};
const ProtectiveDeviceList = [
    ProtectiveDevices.BattleDress,
    ProtectiveDevices.CamoCloak,
    ProtectiveDevices.CombatArmor,
    ProtectiveDevices.DeflectorField,
    ProtectiveDevices.FlakScreen,
    ProtectiveDevices.FlexArmor,
    ProtectiveDevices.FragVest,
    ProtectiveDevices.ScreenGenerator,
    ProtectiveDevices.StealthGear
];
const UtilityDevices = {
    AutoSensor: new UtilityDevice(`Auto Sensor`, `If an enemy begins or ends a move within 4" and Line of Sight of the character, you may immediately fire one shot form any Pistol carried. The shot is resolved `),
    BattleVisor: new UtilityDevice(`Battle Visor`, `When shooting, the character may reroll any 1s on the firing dice.`),
    Communicator: new UtilityDevice(`Communicator`, `When making the Reaction roll each round, you may roll one additional die, then choose a die to discard.`),
    ConcealedBlade: new UtilityDevice(`Concealed Blade`, `If the character begins teh round within 2" of an opponent, they may throw the blade as a Free Action before doing anything else. Roll to Hit normally, resolving the Hit with Damage +0. The blade can be used once per battle, and is replaced afterwards for free.`),
    Displacer: new UtilityDevice(`Displacer`, `Usable once permission instead of Moving. Aim anywhere in sight. The character teleports to a point 1D6" away in a random direction. If the teleport would end up within a solid obstacle, the device fails and must be Repaired before it can be used again. The character emerges on the same height as the aiming point, which may cause them to fall if they emerge in open air. The character may take a Combat Action after teleporting. If used by a Precursor character, you may establish two "landing points", and select to use either.`),
    DistractionBot: new UtilityDevice(`Distraction Bot`, `Usable once per battle as a Combat Action. Select an enemy within 12". Next time they would become active, they are unable to act, though they remove Stun markers as normal. Use a small marker to remember.`),
    GrappleLauncher: new UtilityDevice(`Grapple Launcher`, `As a Combat Action, the character may use the launcher to scale a terrain feature within 1". The character can ascend up to 12" but must reach a surface they can stand on.`),
    GravDampener: new UtilityDevice(`Grav Dampener`, `The character suffers no damage from faling and can descend from any height with no risk. If dropping more than 6", it counts as the character's Move for the round.`),
    HazardSuit: new UtilityDevice(`Hazard Suit`, `If the character takes a Hit from an environmental hazard, they receive a 5+ Saving Throw.`),
    HoverBoard: new UtilityDevice(`Hover Board`, `The character may use the board to move instead of walking. When used, the character can move up to 9" and can ignore any terrain that is man-height or lower. While hover-boarding, the character cannot engage in cobat, but can perform a non-Combat Action as needed.`),
    InstaWall: new UtilityDevice(`Insta-wall`, `May be used once per mission as a Combat Action. Place a marker within 3", then place a 2" long force wall oriented any way you like, as long as it touches the marker. The wall is man-height an impenetrable to attacks (but does not block sight or mental abilities). At the start of each subsequent round, a D6 is rolled. On a 6, the wall dissipates.`),
    JumpBelt: new UtilityDevice(`Jump Belt`, `Instead of Moving normally, the character may jump up to 9" directly forward and 3" upwards. Th character may take a Combat Action normally after landing.`),
    MotionTracker: new UtilityDevice(`Motion Tracker`, `Add +1 to all rolls to Seize the Initiative.`),
    MultiCutter: new UtilityDevice(`Multi-cutter`, `As a Combat Action, the character can cut a man-sized hole through any terrain feature up to 1" thick. The tool has no effect on force fields.`),
    RoboRabbitsFoot: new UtilityDevice(`Robo-rabbit's Foot`, `A character with Luck 0 counts as having Luck 1. If the character would die while carrying this, the foot is destroyed (and cannot be Repaired), the character does not roll on the injury table.`),
    ScannerBot: new UtilityDevice(`Scanner Bot`, `The crew adds +1 to all Seize the Initiative rolls.`),
    SnooperBot: new UtilityDevice(`Snooper Bot`, `May be deployed before a battle, if the Seize the Initiative roll would be penalized or negated. The penalty can be ignored, but the Bot is Damaged on a D6 roll of a 1.`),
    SonicEmitter: new UtilityDevice(`Sonic Emitter`, `Any enemy within 5" suffers -1 to all Hit rolls when shooting.`),
    SteelBoots: new UtilityDevice(`Steel Boots`, `If the character rolls a natural 5 or 6 in a Brawl and wins the Brawl, they may opt to kick instead of striking normally. This hits with Damage +0 and knocks them 1D3" directly backwards. If the opponent is kicked into another character, that character is knocked 1D3" in a random direction.`),
    TimeDistorter: new UtilityDevice(`Time Distorter`, `Activated as a Free Action. Select up to 3 enemy figures on the battlefield. They are frozen in time until the end of the following round. While in this state, they cannot Move, take Actions, or be affected by attacks or effects in any way. They are unaffected by Morale rolls as well. Single-use`)
};
const UtilityDeviceList = [
    UtilityDevices.AutoSensor,
    UtilityDevices.BattleVisor,
    UtilityDevices.Communicator,
    UtilityDevices.ConcealedBlade,
    UtilityDevices.Displacer,
    UtilityDevices.DistractionBot,
    UtilityDevices.GrappleLauncher,
    UtilityDevices.GravDampener,
    UtilityDevices.HazardSuit,
    UtilityDevices.HoverBoard,
    UtilityDevices.InstaWall,
    UtilityDevices.JumpBelt,
    UtilityDevices.MotionTracker,
    UtilityDevices.MultiCutter,
    UtilityDevices.RoboRabbitsFoot,
    UtilityDevices.ScannerBot,
    UtilityDevices.SnooperBot,
    UtilityDevices.SonicEmitter,
    UtilityDevices.SteelBoots,
    UtilityDevices.TimeDistorter
];

const WeaponMods = {
    AssaultBlade: new WeaponMod(`Assault Blade`, `The weapon gains the Melee trait. Damage +1, and wins combat on a Draw.`, false),
    BeamLight: new WeaponMod(`Beam Light`, `When using the weapon in conditions of reduced visibility, increase visibility by +3".`, true),
    Bipod: new WeaponMod(`Bipod`, `The weapon recieve +1 to Hit at ranges over 8" when Aiming or when firing from Cover.`, false),
    HotShotPack: new WeaponMod(`Hot Shot Pack`, `If fittedto a Blast Pistol, Blast Rifle, Hand Laser, or Infantry Laser, +1 Damage. Any natural 6 on the shooting dice causes an overheat, rendering the weapon inoperable for the rest of the fight.`, true),
    CyberConfigurableNanoSludge: new WeaponMod(`Cyber-configurable Nano-sludge`, `The weapon receives a permanent +1 Hit bonus.`, true),
    Stabilizer: new WeaponMod(`Stabilizer`, `Weapon may ignore Heavy trait.`, true),
    ShockAttachment: new WeaponMod(`Shock Attachment`, `The weapon receives the Impact trait against targets within 8".`, true),
    UpgradeKit: new WeaponMod(`Upgrade Kit`, `+2" Range increase.`, true)
};
const WeaponSights = {
    LaserSight: new WeaponSight(`Laser Sight`, `The weapon receives thet Snap Shot trait.`, true),
    QualitySight: new WeaponSight(`Quality Sight`, `+2" Range increase. Reroll 1s when firing only 1 shot.`, false),
    SeekerSight: new WeaponSight(`Seeker Sight`, `The weapon receives a +1 to Hit if the shooter did not Move this round.`, false),
    TrackerSight: new WeaponSight(`Tracker Sight`, `+1 to Hit if you fired at the same target during your previous round.`, false),
    UnityBattleSight: new WeaponSight(`Unity Battle Sight`, `+1 to all Hit rolls.`, false)
};
const WeaponModList = [
    WeaponMods.AssaultBlade,
    WeaponMods.BeamLight,
    WeaponMods.Bipod,
    WeaponMods.CyberConfigurableNanoSludge,
    WeaponMods.HotShotPack,
    WeaponMods.ShockAttachment,
    WeaponMods.Stabilizer,
    WeaponMods.ShockAttachment,
    WeaponMods.UpgradeKit
];
const WeaponSightList = [
    WeaponSights.LaserSight,
    WeaponSights.QualitySight,
    WeaponSights.SeekerSight,
    WeaponSights.TrackerSight,
    WeaponSights.UnityBattleSight
];

var _a$2;
class EquipmentGenerator {
}
_a$2 = EquipmentGenerator;
EquipmentGenerator.GenerateGear = () => Generator(d100, _a$2.GearTable);
EquipmentGenerator.GenerateGadget = () => {
    return new Implant(`some`, `implant`);
};
EquipmentGenerator.GearTable = new Array(new GeneratorOption([1, 4], Clone(WeaponMods.AssaultBlade)), new GeneratorOption([5, 10], Clone(WeaponMods.BeamLight)), new GeneratorOption([11, 15], Clone(WeaponMods.Bipod)), new GeneratorOption([16, 20], Clone(Consumables.BoosterPills)), new GeneratorOption([21, 24], Clone(ProtectiveDevices.CamoCloak)), new GeneratorOption([25, 28], Clone(ProtectiveDevices.CombatArmor)), new GeneratorOption([29, 33], Clone(UtilityDevices.Communicator)), new GeneratorOption([34, 37], Clone(UtilityDevices.ConcealedBlade)), new GeneratorOption([38, 42], Clone(OnBoardItems.FakeId)), new GeneratorOption([43, 46], Clone(OnBoardItems.Fixer)), new GeneratorOption([47, 52], Clone(ProtectiveDevices.FragVest)), new GeneratorOption([53, 57], Clone(UtilityDevices.GrappleLauncher)), new GeneratorOption([58, 61], Clone(UtilityDevices.HazardSuit)), new GeneratorOption([62, 65], Clone(WeaponSights.LaserSight)), new GeneratorOption([66, 69], Clone(OnBoardItems.LoadedDice)), new GeneratorOption([70, 75], Clone(OnBoardItems.MedPatch)), new GeneratorOption([76, 81], Clone(OnBoardItems.NanoDoc)), new GeneratorOption([82, 85], Clone(OnBoardItems.Purifier)));

var _a$1;
class WeaponGenerator {
}
_a$1 = WeaponGenerator;
WeaponGenerator.GenerateLowTech = () => Generator(d100, _a$1.LowTechTable);
WeaponGenerator.GenerateMilitary = () => Generator(d100, _a$1.MilitaryTable);
WeaponGenerator.GenerateHighTech = () => Generator(d100, _a$1.HighTechTable);
WeaponGenerator.LowTechTable = new Array(new GeneratorOption([1, 15], new Pistol(`Handgun`, `Low Tech`, {
    range: 12,
    shots: 1,
    traits: [WeaponTrait.Pistol]
})), new GeneratorOption([16, 35], new Pistol("Scrap Pistol", "Low Tech", {
    range: 9,
    shots: 1,
    traits: [WeaponTrait.Pistol]
})), new GeneratorOption([36, 40], new Pistol("Machine Pistol", "Low Tech", {
    range: 8,
    shots: 2,
    traits: [
        WeaponTrait.Pistol,
        WeaponTrait.Focused
    ]
})), new GeneratorOption([41, 65], new Weapon("Colony Rifle", "Low Tech", {
    range: 18,
    shots: 1
})), new GeneratorOption([66, 75], new Weapon("Shotgun", "Low Tech", {
    range: 12,
    shots: 2,
    damage: 1,
    traits: [WeaponTrait.Focused]
})), new GeneratorOption([76, 80], new Weapon("Hunting Rifle", "Low Tech", {
    range: 30,
    shots: 1,
    damage: 1,
    traits: [WeaponTrait.Heavy]
})), new GeneratorOption([81, 95], new Melee("Blade", "Low Tech", {
    traits: [WeaponTrait.Melee]
})), new GeneratorOption([96, 100], new Melee("Brutal Melee Weapon", "Low Tech", {
    damage: 1,
    traits: [
        WeaponTrait.Melee,
        WeaponTrait.Clumsy
    ]
})));
WeaponGenerator.MilitaryTable = new Array(new GeneratorOption([1, 25], new Weapon("Military Rifle", "Military", {
    range: 24,
    shots: 1
})), new GeneratorOption([26, 45], new Weapon("Infantry Laser", "Military", {
    range: 30,
    shots: 1,
    traits: [WeaponTrait.SnapShot]
})), new GeneratorOption([46, 50], new Weapon("Marksman's Rifle", "Military", {
    range: 36,
    shots: 1,
    traits: [WeaponTrait.Heavy]
})), new GeneratorOption([51, 60], new Weapon("Needle Rifle", "Military", {
    range: 18,
    shots: 2,
    traits: [WeaponTrait.Critical]
})), new GeneratorOption([61, 75], new Weapon("Auto Rifle", "Military", {
    range: 24,
    shots: 2
})), new GeneratorOption([76, 80], new Weapon("Rattle Gun", "Military", {
    range: 24,
    shots: 3,
    traits: [WeaponTrait.Heavy]
})), new GeneratorOption([81, 95], new Melee("Boarding Saber", "Military", {
    damage: 1,
    traits: [
        WeaponTrait.Melee,
        WeaponTrait.Elegant
    ]
})), new GeneratorOption([96, 100], new Melee("Shatter Axe", "Military", {
    damage: 2,
    traits: [WeaponTrait.Melee]
})));
WeaponGenerator.HighTechTable = new Array(new GeneratorOption([1, 5], new Pistol("Dueling Pistol", "High Tech", {
    range: 8,
    shots: 1,
    traits: [
        WeaponTrait.Pistol,
        WeaponTrait.Critical
    ]
})), new GeneratorOption([6, 15], new Pistol("Hand Cannon", "High Tech", {
    range: 8,
    shots: 1,
    damage: 2,
    traits: [WeaponTrait.Pistol]
})), new GeneratorOption([16, 30], new Pistol("Hand Laser", "High Tech", {
    range: 12,
    shots: 1,
    traits: [
        WeaponTrait.Pistol,
        WeaponTrait.SnapShot
    ]
})), new GeneratorOption([31, 45], new Pistol("Beam Pistol", "High Tech", {
    range: 10,
    shots: 1,
    damage: 1,
    traits: [
        WeaponTrait.Pistol,
        WeaponTrait.Critical
    ]
})), new GeneratorOption([46, 55], new Weapon("Infantry Laser", "High Tech", {
    range: 30,
    shots: 1,
    traits: [WeaponTrait.SnapShot]
})), new GeneratorOption([56, 70], new Pistol("Blast Pistol", "High Tech", {
    range: 8,
    shots: 1,
    damage: 1,
    traits: [WeaponTrait.Pistol]
})), new GeneratorOption([71, 80], new Weapon("Blast Rifle", "High Tech", {
    range: 16,
    shots: 1,
    damage: 1
})), new GeneratorOption([81, 85], new Weapon("Plasma Rifle", "High Tech", {
    range: 20,
    shots: 2,
    damage: 1,
    traits: [
        WeaponTrait.Focused,
        WeaponTrait.Piercing
    ]
})), new GeneratorOption([86, 100], new Melee("Glare Sword", "High Tech", {
    traits: [
        WeaponTrait.Melee,
        WeaponTrait.Elegant,
        WeaponTrait.Piercing
    ]
})));

var _a;
class CharacterGenerator {
}
_a = CharacterGenerator;
CharacterGenerator.GenerateCharacter = () => Generator(d100, [
    new GeneratorOption([1, 60], new Human()),
    new GeneratorOption([61, 80], _a.GenerateAlien()),
    new GeneratorOption([81, 90], new Bot()),
    new GeneratorOption([91, 100], _a.GenerateStrange())
]);
CharacterGenerator.GenerateBackground = () => Generator(d100, _a.BackgroundTable);
CharacterGenerator.GenerateMotivation = () => Generator(d100, _a.MotivationTable);
CharacterGenerator.GenerateClass = () => Generator(d100, _a.ClassTable);
CharacterGenerator.GenerateAlien = () => Generator(d100, [
    new GeneratorOption([1, 20], new Engineer()),
    new GeneratorOption([21, 40], new KErin()),
    new GeneratorOption([41, 55], new Soulless()),
    new GeneratorOption([56, 70], new Precursor()),
    new GeneratorOption([71, 90], new Feral()),
    new GeneratorOption([91, 100], new Swift())
]);
CharacterGenerator.GenerateStrange = () => Generator(d100, [
    new GeneratorOption([1, 2], new DeConverted()),
    new GeneratorOption([3, 8], new UnityAgent()),
    new GeneratorOption([9, 17], new MysteriousPast()),
    new GeneratorOption([18, 22], new Hakshan()),
    new GeneratorOption([23, 27], new Stalker()),
    new GeneratorOption([28, 34], new Hulker()),
    new GeneratorOption([35, 41], new HopefulRookie()),
    new GeneratorOption([42, 47], new GeneticUplift()),
    new GeneratorOption([48, 53], new Mutant()),
    new GeneratorOption([54, 58], new AssaultBot()),
    new GeneratorOption([59, 62], new Manipulator()),
    new GeneratorOption([63, 67], new Primitive()),
    new GeneratorOption([68, 73], new Feeler()),
    new GeneratorOption([74, 79], new EmoSuppressed()),
    new GeneratorOption([80, 85], new MinorAlien()),
    new GeneratorOption([86, 87], new Traveler()),
    new GeneratorOption([88, 93], new Empath()),
    new GeneratorOption([94, 100], new BioUpgrade())
]);
CharacterGenerator.BackgroundTable = new Array(new GeneratorOption([1, 4], new CharacterDetail(`Peaceful, High-Tech Colony`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    resources: { credits: d6() }
})), new GeneratorOption([5, 9], new CharacterDetail(`Giant, Overcrowded, Dystopian City`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }]
})), new GeneratorOption([10, 13], new CharacterDetail(`Low-Tech Colony`, {
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([14, 17], new CharacterDetail(`Mining Colony`, {
    effects: [{ points: 1, stat: CharacterStat.Toughness }]
})), new GeneratorOption([18, 21], new CharacterDetail(`Military Brat`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }]
})), new GeneratorOption([22, 25], new CharacterDetail(`Space Station`, {
    equipment: EquipmentGenerator.GenerateGear()
})), new GeneratorOption([26, 29], new CharacterDetail(`Military Outpost`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }]
})), new GeneratorOption([30, 34], new CharacterDetail(`Drifter`, {
    equipment: EquipmentGenerator.GenerateGear()
})), new GeneratorOption([35, 39], new CharacterDetail(`Lower Megacity Class`, {
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([40, 42], new CharacterDetail(`Wealthy Merchantt Family`, {
    resources: { credits: dice({ six: 2 }).total }
})), new GeneratorOption([43, 46], new CharacterDetail(`Frontier Gang`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }]
})), new GeneratorOption([47, 49], new CharacterDetail(`Religious Cult`, {
    resources: {
        patron: true,
        storyPoints: 1
    }
})), new GeneratorOption([50, 52], new CharacterDetail(`War-Torn Hell-Hole`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    equipment: WeaponGenerator.GenerateMilitary()
})), new GeneratorOption([53, 55], new CharacterDetail(`Tech Guild`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    resources: { credits: d6() },
    equipment: WeaponGenerator.GenerateHighTech()
})), new GeneratorOption([56, 59], new CharacterDetail(`Subjugated Colony on Alien World`, {
    equipment: EquipmentGenerator.GenerateGadget()
})), new GeneratorOption([60, 64], new CharacterDetail(`Long-Term Space Mision`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }]
})), new GeneratorOption([65, 68], new CharacterDetail(`Research Outpost`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: EquipmentGenerator.GenerateGadget()
})), new GeneratorOption([69, 72], new CharacterDetail(`Primitive or Regressed World`, {
    effects: [{ points: 1, stat: CharacterStat.Toughness }],
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([73, 76], new CharacterDetail(`Orphan Utility Program`, {
    resources: {
        patron: true,
        storyPoints: 1
    }
})), new GeneratorOption([77, 80], new CharacterDetail(`Isolationist Enclave`, {
    resources: { rumors: 2 }
})), new GeneratorOption([81, 84], new CharacterDetail(`Comfortable Megacity Class`, {
    resources: { credits: d6() }
})), new GeneratorOption([85, 89], new CharacterDetail(`Industrial World`, {
    equipment: EquipmentGenerator.GenerateGear()
})), new GeneratorOption([90, 93], new CharacterDetail(`Bureaucrat`, {
    resources: { credits: d6() }
})), new GeneratorOption([94, 97], new CharacterDetail(`Wasteland Nomads`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([97, 100], new CharacterDetail(`Alien Culture`, {
    equipment: WeaponGenerator.GenerateHighTech()
})));
CharacterGenerator.MotivationTable = new Array(new GeneratorOption([1, 8], new CharacterDetail(`Wealth`, {
    resources: { credits: d6() }
})), new GeneratorOption([9, 14], new CharacterDetail(`Fame`, {
    resources: { storyPoints: 1 }
})), new GeneratorOption([15, 19], new CharacterDetail(`Glory`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
    equipment: WeaponGenerator.GenerateMilitary()
})), new GeneratorOption([20, 26], new CharacterDetail(`Survival`, {
    effects: [{ points: 1, stat: CharacterStat.Toughness }]
})), new GeneratorOption([27, 32], new CharacterDetail(`Escape`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }]
})), new GeneratorOption([33, 39], new CharacterDetail(`Adventure`, {
    resources: { credits: d6() },
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([40, 44], new CharacterDetail(`Truth`, {
    resources: {
        rumors: 1,
        storyPoints: 1
    }
})), new GeneratorOption([45, 49], new CharacterDetail(`Technology`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: EquipmentGenerator.GenerateGadget()
})), new GeneratorOption([50, 56], new CharacterDetail(`Discovery`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: EquipmentGenerator.GenerateGear()
})), new GeneratorOption([57, 63], new CharacterDetail(`Loyalty`, {
    resources: { patron: true, storyPoints: 1 }
})), new GeneratorOption([64, 69], new CharacterDetail(`Revenge`, {
    effects: [{ points: 2, stat: CharacterStat.XP }],
    resources: { rival: true }
})), new GeneratorOption([70, 74], new CharacterDetail(`Romance`, {
    resources: { rumors: 1, storyPoints: 1 }
})), new GeneratorOption([75, 79], new CharacterDetail(`Faith`, {
    resources: { rumors: 1, storyPoints: 1 }
})), new GeneratorOption([80, 84], new CharacterDetail(`Political`, {
    resources: { patron: true, storyPoints: 1 }
})), new GeneratorOption([85, 90], new CharacterDetail(`Power`, {
    effects: [{ points: 2, stat: CharacterStat.XP }],
    resources: { rival: true }
})), new GeneratorOption([91, 95], new CharacterDetail(`Order`, {
    resources: { patron: true, storyPoints: 1 }
})), new GeneratorOption([96, 100], new CharacterDetail(`Freedom`, {
    effects: [{ points: 2, stat: CharacterStat.XP }]
})));
CharacterGenerator.ClassTable = new Array(new GeneratorOption([1, 5], new CharacterDetail(`Working Class`, {
    effects: [
        { points: 1, stat: CharacterStat.Savvy },
        { points: 1, stat: CharacterStat.Luck }
    ]
})), new GeneratorOption([6, 9], new CharacterDetail(`Technician`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: EquipmentGenerator.GenerateGear()
})), new GeneratorOption([10, 13], new CharacterDetail(`Scientist`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    equipment: EquipmentGenerator.GenerateGadget()
})), new GeneratorOption([14, 17], new CharacterDetail(`Hacker`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }],
    resources: { rival: true }
})), new GeneratorOption([18, 22], new CharacterDetail(`Soldier`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
    resources: { credits: d6() }
})), new GeneratorOption([23, 27], new CharacterDetail(`Mercenary`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
    equipment: WeaponGenerator.GenerateMilitary()
})), new GeneratorOption([28, 32], new CharacterDetail(`Agitator`, {
    resources: { rival: true }
})), new GeneratorOption([33, 36], new CharacterDetail(`Primitive`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }],
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([37, 40], new CharacterDetail(`Artist`, {
    resources: { credits: d6() }
})), new GeneratorOption([41, 44], new CharacterDetail(`Negotiator`, {
    resources: { patron: true, storyPoints: 1 }
})), new GeneratorOption([45, 49], new CharacterDetail(`Trader`, {
    resources: { credits: dice({ six: 2 }).total }
})), new GeneratorOption([50, 54], new CharacterDetail(`Starship Crew`, {
    effects: [{ points: 1, stat: CharacterStat.Savvy }]
})), new GeneratorOption([55, 58], new CharacterDetail(`Petty Criminal`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }]
})), new GeneratorOption([59, 63], new CharacterDetail(`Ganger`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([64, 67], new CharacterDetail(`Scoundrel`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }]
})), new GeneratorOption([68, 71], new CharacterDetail(`Enforcer`, {
    effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
    resources: { patron: true }
})), new GeneratorOption([72, 75], new CharacterDetail(`Special Agent`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    resources: { patron: true },
    equipment: EquipmentGenerator.GenerateGadget()
})), new GeneratorOption([76, 79], new CharacterDetail(`Troubleshooter`, {
    effects: [{ points: 1, stat: CharacterStat.Reactions }],
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([80, 83], new CharacterDetail(`Bounty Hunter`, {
    effects: [{ points: 1, stat: CharacterStat.Speed }],
    resources: { rumors: 1 },
    equipment: WeaponGenerator.GenerateLowTech()
})), new GeneratorOption([84, 88], new CharacterDetail(`Nomad`, {
    equipment: EquipmentGenerator.GenerateGear()
})), new GeneratorOption([89, 92], new CharacterDetail(`Explorer`, {
    effects: [{ points: 2, stat: CharacterStat.XP }],
    equipment: EquipmentGenerator.GenerateGear()
})), new GeneratorOption([93, 96], new CharacterDetail(`Punk`, {
    effects: [{ points: 2, stat: CharacterStat.XP }],
    resources: { rival: true }
})), new GeneratorOption([97, 100], new CharacterDetail(`Scavenger`, {
    resources: { rumors: 1 },
    equipment: WeaponGenerator.GenerateHighTech()
})));

class Ship {
    constructor(model, debt, hull, trait = null) {
        this._damage = 0;
        this.model = model;
        this.debt = debt;
        this.hull = hull;
        this.trait = trait;
    }
    get damage() { return this._damage; }
    set damage(value) {
        this._damage = value;
    }
}

class ShipGenerator {
}
ShipGenerator.Generate = () => {
    const roll = d100();
    if (roll >= 1 && roll <= 12)
        return new Ship("Worn freighter", d6() + 20, 30);
    else if (roll >= 13 && roll <= 18)
        return new Ship("Retired troop transport", d6() + 30, 35);
    else if (roll >= 19 && roll <= 23)
        return new Ship("Strange alien vessel", d6() + 15, 25);
    else if (roll >= 24 && roll <= 31)
        return new Ship("Upgraded shuttle", d6() + 10, 20);
    else if (roll >= 32 && roll <= 38)
        return new Ship("Retired scout ship", d6() + 20, 25, ShipTrait.FuelEfficient);
    else if (roll >= 39 && roll <= 45)
        return new Ship("Repurposed science vessel", d6() + 10, 20);
    else if (roll >= 46 && roll <= 56)
        return new Ship("Battered mining ship", d6() + 20, 35, ShipTrait.FuelHog);
    else if (roll >= 57 && roll <= 65)
        return new Ship("Unreliable merchant cruiser", d6() + 20, 30);
    else if (roll >= 66 && roll <= 70)
        return new Ship("Former diplomatic vessel", d6() + 15, 25);
    else if (roll >= 71 && roll <= 76)
        return new Ship("Ancient low-tech craft", d6() + 20, 35, ShipTrait.DodgyDrive);
    else if (roll >= 77 && roll <= 84)
        return new Ship("Built from salvaged wrecks", d6() + 20, 30);
    else if (roll >= 85 && roll <= 95)
        return new Ship("Worn colony ship", d6() + 20, 25, ShipTrait.StandardIssue);
    else
        return new Ship("Retired military patrol ship", d6() + 35, 40, ShipTrait.Armored);
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

class Crew {
    constructor() {
        this._leader = null;
        this._roster = new Array();
        this.addCharacter = (character) => !(this.roster.some(c => c.id === character.id))
            && this.roster.push(character);
        this.removeCharacter = (character) => this._roster = this.roster.filter(c => !(c.id === character.id));
    }
    get leader() { return this._leader; }
    set leader(character) {
        if (this.leader && character)
            return;
        this.leader = character;
        if (character)
            character.promoteLeader();
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