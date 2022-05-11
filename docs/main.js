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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








function HomeRoute_pre_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 10)(1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-height", 40, "vh");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.campaign), "");
} }
function HomeRoute_ng_container_17_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r4.name);
} }
function HomeRoute_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeRoute_ng_container_17_p_1_Template, 2, 1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.data);
} }
function HomeRoute_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Campaigns Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeRoute {
    constructor() {
        this.name = 'Onyx Dawn';
        this.cardSize = 'auto';
        this.store = new core__WEBPACK_IMPORTED_MODULE_1__.StoreManager('parsecs');
        this.initCampaign = () => {
            const c = new core__WEBPACK_IMPORTED_MODULE_1__.CampaignConfig(this.name);
            for (var i = 0; i < c.crew.roster.length; i++)
                c.crew.roster[i].name = `Character ${i}`;
            c.leader = c.crew.roster[0];
            c.victory = c.victoryConditions[0].value;
            this.campaign = c.finalize();
        };
        this.saveCampaign = () => {
            this.campaign.name = this.name;
            this.store.save(this.campaign.name, this.campaign);
            this.data = this.store.getAll();
        };
    }
    ngOnInit() {
        this.initCampaign();
        this.data = this.store.getAll();
        console.log('saved campaigns', this.data);
        console.log('campaign is saved', this.store.exists(this.campaign.name));
    }
}
HomeRoute.ɵfac = function HomeRoute_Factory(t) { return new (t || HomeRoute)(); };
HomeRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeRoute, selectors: [["home-route"]], decls: 19, vars: 4, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "p8"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "m4", "p4"], [1, "mat-title", "m4"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "p4"], [1, "m4"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", 1, "m4", 3, "click"], ["class", "m4 pre-wrap overflow", 3, "max-height", 4, "ngIf"], [4, "ngIf"], ["class", "mat-subheading-1 m4", 4, "ngIf"], [1, "m4", "pre-wrap", "overflow"], [4, "ngFor", "ngForOf"], [1, "mat-subheading-1", "m4"]], template: function HomeRoute_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "section", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Generate Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "mat-form-field", 4)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Campaign Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeRoute_Template_input_ngModelChange_8_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_9_listener() { return ctx.saveCampaign(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeRoute_Template_button_click_11_listener() { return ctx.initCampaign(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Generate Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeRoute_pre_13_Template, 4, 5, "pre", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 1)(15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Saved Campaigns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeRoute_ng_container_17_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HomeRoute_p_18_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campaign);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.data.length > 0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.JsonPipe], encapsulation: 2 });


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
/* harmony export */   "AvailableVictoryConditions": () => (/* binding */ AvailableVictoryConditions),
/* harmony export */   "BackdropDirective": () => (/* binding */ BackdropDirective),
/* harmony export */   "BackgroundList": () => (/* binding */ BackgroundList),
/* harmony export */   "Backgrounds": () => (/* binding */ Backgrounds),
/* harmony export */   "BytesPipe": () => (/* binding */ BytesPipe),
/* harmony export */   "Campaign": () => (/* binding */ Campaign),
/* harmony export */   "CampaignConfig": () => (/* binding */ CampaignConfig),
/* harmony export */   "CampaignResource": () => (/* binding */ CampaignResource),
/* harmony export */   "Character": () => (/* binding */ Character),
/* harmony export */   "CharacterDetail": () => (/* binding */ CharacterDetail),
/* harmony export */   "CharacterGenerator": () => (/* binding */ CharacterGenerator),
/* harmony export */   "CharacterList": () => (/* binding */ CharacterList),
/* harmony export */   "CharacterProfile": () => (/* binding */ CharacterProfile),
/* harmony export */   "CharacterRace": () => (/* binding */ CharacterRace),
/* harmony export */   "CharacterSpecies": () => (/* binding */ CharacterSpecies),
/* harmony export */   "CharacterStat": () => (/* binding */ CharacterStat),
/* harmony export */   "Characters": () => (/* binding */ Characters),
/* harmony export */   "ClassList": () => (/* binding */ ClassList),
/* harmony export */   "Classes": () => (/* binding */ Classes),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog),
/* harmony export */   "Consumable": () => (/* binding */ Consumable),
/* harmony export */   "ConsumableList": () => (/* binding */ ConsumableList),
/* harmony export */   "Consumables": () => (/* binding */ Consumables),
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule),
/* harmony export */   "CoreService": () => (/* binding */ CoreService),
/* harmony export */   "Crew": () => (/* binding */ Crew),
/* harmony export */   "Datalist": () => (/* binding */ Datalist),
/* harmony export */   "Dialogs": () => (/* binding */ Dialogs),
/* harmony export */   "Difficulty": () => (/* binding */ Difficulty),
/* harmony export */   "DifficultyDescription": () => (/* binding */ DifficultyDescription),
/* harmony export */   "Directives": () => (/* binding */ Directives),
/* harmony export */   "Equipment": () => (/* binding */ Equipment),
/* harmony export */   "EquipmentGenerator": () => (/* binding */ EquipmentGenerator),
/* harmony export */   "EquipmentType": () => (/* binding */ EquipmentType),
/* harmony export */   "Generator": () => (/* binding */ Generator),
/* harmony export */   "GeneratorOption": () => (/* binding */ GeneratorOption),
/* harmony export */   "HighTechWeaponList": () => (/* binding */ HighTechWeaponList),
/* harmony export */   "HighTechWeapons": () => (/* binding */ HighTechWeapons),
/* harmony export */   "Implant": () => (/* binding */ Implant),
/* harmony export */   "ImplantList": () => (/* binding */ ImplantList),
/* harmony export */   "Implants": () => (/* binding */ Implants),
/* harmony export */   "KeyValue": () => (/* binding */ KeyValue),
/* harmony export */   "LowTechWeaponList": () => (/* binding */ LowTechWeaponList),
/* harmony export */   "LowTechWeapons": () => (/* binding */ LowTechWeapons),
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule),
/* harmony export */   "Melee": () => (/* binding */ Melee),
/* harmony export */   "MilitaryWeaponList": () => (/* binding */ MilitaryWeaponList),
/* harmony export */   "MilitaryWeapons": () => (/* binding */ MilitaryWeapons),
/* harmony export */   "MotivationList": () => (/* binding */ MotivationList),
/* harmony export */   "Motivations": () => (/* binding */ Motivations),
/* harmony export */   "OnBoardItem": () => (/* binding */ OnBoardItem),
/* harmony export */   "OnBoardItemList": () => (/* binding */ OnBoardItemList),
/* harmony export */   "OnBoardItems": () => (/* binding */ OnBoardItems),
/* harmony export */   "Pipes": () => (/* binding */ Pipes),
/* harmony export */   "Pistol": () => (/* binding */ Pistol),
/* harmony export */   "ProtectiveDevice": () => (/* binding */ ProtectiveDevice),
/* harmony export */   "ProtectiveDeviceList": () => (/* binding */ ProtectiveDeviceList),
/* harmony export */   "ProtectiveDeviceType": () => (/* binding */ ProtectiveDeviceType),
/* harmony export */   "ProtectiveDevices": () => (/* binding */ ProtectiveDevices),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "ShipGenerator": () => (/* binding */ ShipGenerator),
/* harmony export */   "ShipList": () => (/* binding */ ShipList),
/* harmony export */   "ShipTrait": () => (/* binding */ ShipTrait),
/* harmony export */   "Ships": () => (/* binding */ Ships),
/* harmony export */   "Sidearm": () => (/* binding */ Sidearm),
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService),
/* harmony export */   "StoreManager": () => (/* binding */ StoreManager),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService),
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe),
/* harmony export */   "UtilityDevice": () => (/* binding */ UtilityDevice),
/* harmony export */   "UtilityDeviceList": () => (/* binding */ UtilityDeviceList),
/* harmony export */   "UtilityDevices": () => (/* binding */ UtilityDevices),
/* harmony export */   "VictoryCondition": () => (/* binding */ VictoryCondition),
/* harmony export */   "VictoryConditions": () => (/* binding */ VictoryConditions),
/* harmony export */   "VictoryType": () => (/* binding */ VictoryType),
/* harmony export */   "Weapon": () => (/* binding */ Weapon),
/* harmony export */   "WeaponGenerator": () => (/* binding */ WeaponGenerator),
/* harmony export */   "WeaponMod": () => (/* binding */ WeaponMod),
/* harmony export */   "WeaponModList": () => (/* binding */ WeaponModList),
/* harmony export */   "WeaponMods": () => (/* binding */ WeaponMods),
/* harmony export */   "WeaponSight": () => (/* binding */ WeaponSight),
/* harmony export */   "WeaponSightList": () => (/* binding */ WeaponSightList),
/* harmony export */   "WeaponSights": () => (/* binding */ WeaponSights),
/* harmony export */   "WeaponStat": () => (/* binding */ WeaponStat),
/* harmony export */   "WeaponTrait": () => (/* binding */ WeaponTrait),
/* harmony export */   "WeaponType": () => (/* binding */ WeaponType),
/* harmony export */   "camelize": () => (/* binding */ camelize),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "classify": () => (/* binding */ classify),
/* harmony export */   "d10": () => (/* binding */ d10),
/* harmony export */   "d100": () => (/* binding */ d100),
/* harmony export */   "d12": () => (/* binding */ d12),
/* harmony export */   "d20": () => (/* binding */ d20),
/* harmony export */   "d4": () => (/* binding */ d4),
/* harmony export */   "d6": () => (/* binding */ d6),
/* harmony export */   "d8": () => (/* binding */ d8),
/* harmony export */   "dasherize": () => (/* binding */ dasherize),
/* harmony export */   "decamelize": () => (/* binding */ decamelize),
/* harmony export */   "dice": () => (/* binding */ dice),
/* harmony export */   "die": () => (/* binding */ die),
/* harmony export */   "titlecase": () => (/* binding */ titlecase),
/* harmony export */   "underscore": () => (/* binding */ underscore)
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

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const STRING_DASHERIZE_REGEXP = /[ _]/g;
const STRING_DECAMELIZE_REGEXP = /([a-z\d])([A-Z])/g;
const STRING_CAMELIZE_REGEXP = /(-|_|\.|\s)+(.)?/g;
const STRING_UNDERSCORE_REGEXP_1 = /([a-z\d])([A-Z]+)/g;
const STRING_UNDERSCORE_REGEXP_2 = /-|\s+/g;
/**
 * Converts a camelized string into all lower case separated by underscores.
 *
 ```javascript
 decamelize('innerHTML');         // 'inner_html'
 decamelize('action_name');       // 'action_name'
 decamelize('css-class-name');    // 'css-class-name'
 decamelize('my favorite items'); // 'my favorite items'
 ```

 @method decamelize
 @param {String} str The string to decamelize.
 @return {String} the decamelized string.
 */
function decamelize(str) {
    return str.replace(STRING_DECAMELIZE_REGEXP, '$1_$2').toLowerCase();
}
/**
 Replaces underscores, spaces, or camelCase with dashes.

 ```javascript
 dasherize('innerHTML');         // 'inner-html'
 dasherize('action_name');       // 'action-name'
 dasherize('css-class-name');    // 'css-class-name'
 dasherize('my favorite items'); // 'my-favorite-items'
 ```

 @method dasherize
 @param {String} str The string to dasherize.
 @return {String} the dasherized string.
 */
function dasherize(str) {
    return decamelize(str).replace(STRING_DASHERIZE_REGEXP, '-');
}
/**
 Returns the lowerCamelCase form of a string.

 ```javascript
 camelize('innerHTML');          // 'innerHTML'
 camelize('action_name');        // 'actionName'
 camelize('css-class-name');     // 'cssClassName'
 camelize('my favorite items');  // 'myFavoriteItems'
 camelize('My Favorite Items');  // 'myFavoriteItems'
 ```

 @method camelize
 @param {String} str The string to camelize.
 @return {String} the camelized string.
 */
function camelize(str) {
    return str
        .replace(STRING_CAMELIZE_REGEXP, (_match, _separator, chr) => {
        return chr ? chr.toUpperCase() : '';
    })
        .replace(/^([A-Z])/, (match) => match.toLowerCase());
}
/**
 Returns the UpperCamelCase form of a string.

 ```javascript
 'innerHTML'.classify();          // 'InnerHTML'
 'action_name'.classify();        // 'ActionName'
 'css-class-name'.classify();     // 'CssClassName'
 'my favorite items'.classify();  // 'MyFavoriteItems'
 ```

 @method classify
 @param {String} str the string to classify
 @return {String} the classified string
 */
function classify(str) {
    return str
        .split('.')
        .map((part) => capitalize(camelize(part)))
        .join('.');
}
/**
 More general than decamelize. Returns the lower\_case\_and\_underscored
 form of a string.

 ```javascript
 'innerHTML'.underscore();          // 'inner_html'
 'action_name'.underscore();        // 'action_name'
 'css-class-name'.underscore();     // 'css_class_name'
 'my favorite items'.underscore();  // 'my_favorite_items'
 ```

 @method underscore
 @param {String} str The string to underscore.
 @return {String} the underscored string.
 */
function underscore(str) {
    return str
        .replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2')
        .replace(STRING_UNDERSCORE_REGEXP_2, '_')
        .toLowerCase();
}
/**
 Returns the Capitalized form of a string

 ```javascript
 'innerHTML'.capitalize()         // 'InnerHTML'
 'action_name'.capitalize()       // 'Action_name'
 'css-class-name'.capitalize()    // 'Css-class-name'
 'my favorite items'.capitalize() // 'My favorite items'
 ```

 @method capitalize
 @param {String} str The string to capitalize.
 @return {String} The capitalized string.
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}
/**
 Returns the Titlecase form of a string

 ```javascript
 'innerHTML'.titlecase()         // 'Inner HTML'
 'action_name'.titlecase()       // 'Action Name'
 'css-class-name'.titlecase()    // 'Css Class Name'
 'my favorite items'.titlecase() // 'My Favorite Items'
 ```
 */
function titlecase(str) {
    return dasherize(str)
        .split('-')
        .map((part) => capitalize(part))
        .join(' ');
}

const Datalist = (data) => Object.entries(data)
    .map(([key, value]) => {
    return {
        id: Symbol(key),
        label: titlecase(key),
        value: value
    };
});

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

class KeyValue {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class StoreManager {
    constructor(prefix) {
        this.urlEncode = (value) => {
            const regex = /[^a-zA-Z0-9-.]/gi;
            let newValue = value.replace(/\s/g, '-').toLowerCase();
            newValue = newValue.replace(regex, '');
            return newValue;
        };
        this.processKey = (value) => value = value.startsWith(this.prefix)
            ? this.urlEncode(value)
            : this.urlEncode(`${this.prefix}-${value}`);
        this.exists = (key) => Object.keys(localStorage)
            .some(x => x === this.processKey(key));
        this.getAll = () => Object.entries(localStorage)
            .filter(([key, value]) => key.startsWith(this.prefix))
            .map(([key, value]) => JSON.parse(value));
        this.get = (key) => {
            const item = localStorage.getItem(this.processKey(key));
            return item
                ? JSON.parse(item)
                : null;
        };
        this.save = (key, data) => localStorage.setItem(this.processKey(key), JSON.stringify(data));
        this.delete = (key) => localStorage.removeItem(this.processKey(key));
        this.prefix = prefix;
    }
}

var CharacterRace;
(function (CharacterRace) {
    CharacterRace["Alien"] = "Alien";
    CharacterRace["Bot"] = "Bot";
    CharacterRace["Human"] = "Human";
    CharacterRace["Strange"] = "Strange";
})(CharacterRace || (CharacterRace = {}));
var CharacterSpecies;
(function (CharacterSpecies) {
    CharacterSpecies["AssaultBot"] = "Assault Bot";
    CharacterSpecies["BioUpgrade"] = "Bio-upgrade";
    CharacterSpecies["Bot"] = "Bot";
    CharacterSpecies["DeConverted"] = "De-converted";
    CharacterSpecies["EmoSuppressed"] = "Emo-suppressed";
    CharacterSpecies["Empath"] = "Empath";
    CharacterSpecies["Engineer"] = "Engineer";
    CharacterSpecies["Feeler"] = "Feeler";
    CharacterSpecies["Feral"] = "Feral";
    CharacterSpecies["GeneticUplift"] = "Genetic Uplift";
    CharacterSpecies["Hakshan"] = "Hakshan";
    CharacterSpecies["HopefulRookie"] = "Hopeful Rookie";
    CharacterSpecies["Hulker"] = "Hulker";
    CharacterSpecies["Human"] = "Human";
    CharacterSpecies["KErin"] = "K'Erin";
    CharacterSpecies["Manipulator"] = "Manipulator";
    CharacterSpecies["MinorAlien"] = "Minor Alien";
    CharacterSpecies["Mutant"] = "Mutant";
    CharacterSpecies["MysteriousPast"] = "Mysterious Past";
    CharacterSpecies["Precursor"] = "Precursor";
    CharacterSpecies["Primitive"] = "Primitive";
    CharacterSpecies["Soulless"] = "Soulless";
    CharacterSpecies["Stalker"] = "Stalker";
    CharacterSpecies["Swift"] = "Swift";
    CharacterSpecies["Traveler"] = "Traveler";
    CharacterSpecies["UnityAgent"] = "Unity Agent";
})(CharacterSpecies || (CharacterSpecies = {}));
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
var EquipmentType;
(function (EquipmentType) {
    EquipmentType["Equipment"] = "Equipment";
    EquipmentType["ProtectiveDevice"] = "Protective Device";
    EquipmentType["WeaponMod"] = "Weapon Mod";
    EquipmentType["WeaponSight"] = "Weapon Sight";
    EquipmentType["Consumable"] = "Consumable";
    EquipmentType["Implant"] = "Implant";
    EquipmentType["UtilityDevice"] = "Utility Device";
    EquipmentType["OnBoardItem"] = "On-Board Item";
})(EquipmentType || (EquipmentType = {}));
var ProtectiveDeviceType;
(function (ProtectiveDeviceType) {
    ProtectiveDeviceType["Armor"] = "Armor";
    ProtectiveDeviceType["Screen"] = "Screen";
})(ProtectiveDeviceType || (ProtectiveDeviceType = {}));
var ShipTrait;
(function (ShipTrait) {
    ShipTrait["EmergencyDrives"] = "Emergency Drives: If you have to perform an emergency take-off while your ship is damaged, reduce the Hull damage sustained on the roll by 3.";
    ShipTrait["FuelEfficient"] = "Fuel Efficient: When traveling to a new world, the fuel cost is reduced by 1 credit.";
    ShipTrait["FuelHog"] = "Fuel Hog: When traveling to a new world, the fuel cost is increased by 1 credit.";
    ShipTrait["DodgyDrive"] = "Dodgy Drive: Any time the ship takes Hull damage, roll 2D6. If the roll is equal to or below the amount of damage sustained, the drive is misbehaving, and 2 additional points of damage are sustained.";
    ShipTrait["StandardIssue"] = "Standard Issue: The cost of all Starship Components is reduced by 1 credit.";
    ShipTrait["Armored"] = "Armored: Any time the ship takes damage, you lose 1 Hull Point less than indicated by the rules.";
})(ShipTrait || (ShipTrait = {}));
var VictoryType;
(function (VictoryType) {
    VictoryType["CampaignTurns"] = "Campaign Turns";
    VictoryType["Quests"] = "Quests";
    VictoryType["TabletopBattles"] = "Tabletop Battles";
    VictoryType["UniqueIndividuals"] = "Unique Individuals";
    VictoryType["UpgradeCharacters"] = "Upgrade Characters";
    VictoryType["ChallengingCampaignTurns"] = "Campaign Turns: Challenging";
    VictoryType["HardcoreCampaignTurns"] = "Campaign Turns: Hardcore";
    VictoryType["InsanityCampaignTurns"] = "Campaign Turns: Insanity";
})(VictoryType || (VictoryType = {}));
var WeaponStat;
(function (WeaponStat) {
    WeaponStat["Range"] = "Range";
    WeaponStat["Shots"] = "Shots";
    WeaponStat["Damage"] = "Damage";
    WeaponStat["Hit"] = "Hit";
})(WeaponStat || (WeaponStat = {}));
var WeaponTrait;
(function (WeaponTrait) {
    WeaponTrait["Area"] = "Area: Resolve all shots against the initial target. They cannot be spread. Then resolve one bonus shot against every figure within 2\".";
    WeaponTrait["Clumsy"] = "Clumsy: -1 to Brawling rolls, if opponent has higher Speed.";
    WeaponTrait["Critical"] = "Critical: A natural 6 on the to Hit roll will inflict 2 Hits on the target.";
    WeaponTrait["Elegant"] = "Elegant: When Brawling, the fighter may reroll the die. Enemies will always reroll if they have a lower total than their opponent, and can improve the result.";
    WeaponTrait["Focused"] = "Focused: All shots must be against a single target.";
    WeaponTrait["Heavy"] = "Heavy: -1 penalty to Hit if the firer moved this round.";
    WeaponTrait["Impact"] = "Impact: If target is Stunned, place a second Stun marker.";
    WeaponTrait["Melee"] = "Melee: +2 to Brawling rolls.";
    WeaponTrait["Piercing"] = "Piercing: Ignore Armor Saving Throws.";
    WeaponTrait["Pistol"] = "Pistol: +1 to Brawling rolls.";
    WeaponTrait["SingleUse"] = "Single Use: The item can be used only once and must be deducted from the available supply. The Panic Fire rule cannot be used with Single Use weapons.";
    WeaponTrait["SnapShot"] = "Snapshot: +1 to Hit within 6\".";
    WeaponTrait["Stun"] = "Stun: All targets are automatically Stunned. No damage rolls ake place.";
    WeaponTrait["Terrifying"] = "Terrifying: Any target hit must retreat 1D6\" away from the firer.";
})(WeaponTrait || (WeaponTrait = {}));
var WeaponType;
(function (WeaponType) {
    WeaponType["Weapon"] = "Weapon";
    WeaponType["Sidearm"] = "Sidearm";
    WeaponType["Pistol"] = "Pistol";
    WeaponType["Melee"] = "Melee";
})(WeaponType || (WeaponType = {}));

class VictoryCondition {
    constructor(iterations, type, difficulties = null) {
        this.difficulties = new Array(Difficulty.Normal, Difficulty.Challenging, Difficulty.Hardcore, Difficulty.Insanity);
        this.iterations = iterations;
        this.type = type;
        this.difficulties = difficulties !== null && difficulties !== void 0 ? difficulties : this.difficulties;
    }
}

const EASY = [
    `After every battle, select a crew member to receive +1 XP.`,
    `Increase post-battle rewards by +1 credit.`,
    `When setting up a tabletop battle, if you would face 5+ opponents, remove one Basic enemy.`,
    `Only the Play 20 campaign turns and Win 20 tabletop battles Victory Conditions can be completed in the Easy difficulty mode.`
];
const CHALLENGING = [
    `When rolling to determine enemy numbers faced in battle, count any die rolling a 1 or 2 as a 3.`
];
const HARDCORE = [
    ...CHALLENGING,
    `Add an additional Basic enemy to every battle.`,
    `Add +2 to all Invasion rolls.`,
    `Add a -2 penalty to all Seize the Initiative rolls.`,
    `Add +1 when rolling for Unique Individuals.`,
    `Begin the campaign wiht one less story point`
];
const INSANITY = [
    ...HARDCORE,
    `Add an additional Specialist enemy to every battle.`,
    `Add +3 to all Invasion rolls.`,
    `Apply a -3 penalty to all Seize the Initiative rolls.`,
    `The opposing side always includes a Unique Individual, even for Roving Threats.`,
    `Roll 2d6. On all 11-12, they include two Unique Individuals.`,
    `Receive no 'Stars of the Story' options.`,
    `Receive no story points. If any item or event would grant them, it has no effect and the item or event is not re-rolled.`
];
const DifficultyDescription = (difficulty) => {
    switch (difficulty) {
        case Difficulty.Easy:
            return EASY;
        case Difficulty.Challenging:
            return CHALLENGING;
        case Difficulty.Hardcore:
            return HARDCORE;
        case Difficulty.Insanity:
            return INSANITY;
        default:
            return [`No changes to game mechanics. All rules apply as written.`];
    }
};
const ALL_DIFFICULTIES = [
    Difficulty.Easy,
    Difficulty.Normal,
    Difficulty.Challenging,
    Difficulty.Hardcore,
    Difficulty.Insanity
];
const VictoryConditions = [
    new KeyValue('Play 20 Campaign Turns', new VictoryCondition(20, VictoryType.CampaignTurns, ALL_DIFFICULTIES)),
    new KeyValue(`Play 50 Campaign Turns`, new VictoryCondition(50, VictoryType.CampaignTurns)),
    new KeyValue(`Play 100 Campaign Turns`, new VictoryCondition(100, VictoryType.CampaignTurns)),
    new KeyValue(`Complete 3 Quests`, new VictoryCondition(3, VictoryType.Quests)),
    new KeyValue(`Complete 5 Quests`, new VictoryCondition(5, VictoryType.Quests)),
    new KeyValue(`Complete 10 Quests`, new VictoryCondition(10, VictoryType.Quests)),
    new KeyValue(`Win 20 Tabletop Battles`, new VictoryCondition(20, VictoryType.TabletopBattles, ALL_DIFFICULTIES)),
    new KeyValue(`Win 50 Tabletop Battles`, new VictoryCondition(50, VictoryType.TabletopBattles)),
    new KeyValue(`Win 100 Tabletop Battles`, new VictoryCondition(100, VictoryType.TabletopBattles)),
    new KeyValue(`Kill 10 Unique Individuals`, new VictoryCondition(10, VictoryType.UniqueIndividuals)),
    new KeyValue(`Kill 25 Unique Individuals`, new VictoryCondition(25, VictoryType.UniqueIndividuals)),
    new KeyValue(`Upgrade a Single Character 10 Times`, new VictoryCondition(1, VictoryType.UpgradeCharacters)),
    new KeyValue(`Upgrade 3 Characters 10 Times`, new VictoryCondition(3, VictoryType.UpgradeCharacters)),
    new KeyValue(`Upgrade 5 Characters 10 Times`, new VictoryCondition(5, VictoryType.UpgradeCharacters)),
    new KeyValue(`Play 50 Campaign Turns in Challenging Mode`, new VictoryCondition(50, VictoryType.ChallengingCampaignTurns, [Difficulty.Challenging])),
    new KeyValue(`Play 50 Campaign Turns in Hardcore Mode`, new VictoryCondition(50, VictoryType.HardcoreCampaignTurns, [Difficulty.Hardcore])),
    new KeyValue(`Play 50 Campaign Turns in Insanity Mode`, new VictoryCondition(50, VictoryType.InsanityCampaignTurns, [Difficulty.Insanity]))
];
const AvailableVictoryConditions = (difficulty) => VictoryConditions
    .filter((vc) => vc.value.difficulties.includes(difficulty));

class Weapon {
    constructor(model, description, { damaged = false, range = 0, shots = 0, damage = 0, traits = new Array(), mod = null, sight = null } = {}) {
        this._damaged = false;
        this.hitBonus = 0;
        this.hasTrait = (trait) => this.traits.some((t) => t === trait);
        this.isType = (t) => this instanceof t;
        this.getType = () => {
            switch (true) {
                case (this.isType(Melee)):
                    return WeaponType.Melee;
                case (this.isType(Pistol)):
                    return WeaponType.Pistol;
                case (this.isType(Sidearm)):
                    return WeaponType.Sidearm;
                default:
                    return WeaponType.Weapon;
            }
        };
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
        this.type = this.getType();
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

const HighTechWeapons = {
    DuelingPistol: () => new Pistol("Dueling Pistol", "High Tech", {
        range: 8,
        shots: 1,
        traits: [
            WeaponTrait.Pistol,
            WeaponTrait.Critical
        ]
    }),
    HandCannon: () => new Pistol("Hand Cannon", "High Tech", {
        range: 8,
        shots: 1,
        damage: 2,
        traits: [WeaponTrait.Pistol]
    }),
    HandLaser: () => new Pistol("Hand Laser", "High Tech", {
        range: 12,
        shots: 1,
        traits: [
            WeaponTrait.Pistol,
            WeaponTrait.SnapShot
        ]
    }),
    BeamPistol: () => new Pistol("Beam Pistol", "High Tech", {
        range: 10,
        shots: 1,
        damage: 1,
        traits: [
            WeaponTrait.Pistol,
            WeaponTrait.Critical
        ]
    }),
    InfantryLaser: () => new Weapon("Infantry Laser", "High Tech", {
        range: 30,
        shots: 1,
        traits: [WeaponTrait.SnapShot]
    }),
    BlastPistol: () => new Pistol("Blast Pistol", "High Tech", {
        range: 8,
        shots: 1,
        damage: 1,
        traits: [WeaponTrait.Pistol]
    }),
    BlastRifle: () => new Weapon("Blast Rifle", "High Tech", {
        range: 16,
        shots: 1,
        damage: 1
    }),
    PlasmaRifle: () => new Weapon("Plasma Rifle", "High Tech", {
        range: 20,
        shots: 2,
        damage: 1,
        traits: [
            WeaponTrait.Focused,
            WeaponTrait.Piercing
        ]
    }),
    GlareSword: () => new Melee("Glare Sword", "High Tech", {
        traits: [
            WeaponTrait.Melee,
            WeaponTrait.Elegant,
            WeaponTrait.Piercing
        ]
    })
};
const HighTechWeaponList = Datalist(HighTechWeapons);
const LowTechWeapons = {
    Handgun: () => new Pistol(`Handgun`, `Low Tech`, {
        range: 12,
        shots: 1,
        traits: [WeaponTrait.Pistol]
    }),
    ScrapPistol: () => new Pistol("Scrap Pistol", "Low Tech", {
        range: 9,
        shots: 1,
        traits: [WeaponTrait.Pistol]
    }),
    MachinePistol: () => new Pistol("Machine Pistol", "Low Tech", {
        range: 8,
        shots: 2,
        traits: [
            WeaponTrait.Pistol,
            WeaponTrait.Focused
        ]
    }),
    ColonyRifle: () => new Weapon("Colony Rifle", "Low Tech", {
        range: 18,
        shots: 1
    }),
    Shotgun: () => new Weapon("Shotgun", "Low Tech", {
        range: 12,
        shots: 2,
        damage: 1,
        traits: [WeaponTrait.Focused]
    }),
    HuntingRifle: () => new Weapon("Hunting Rifle", "Low Tech", {
        range: 30,
        shots: 1,
        damage: 1,
        traits: [WeaponTrait.Heavy]
    }),
    Blade: () => new Melee("Blade", "Low Tech", {
        traits: [WeaponTrait.Melee]
    }),
    BrutalMeleeWeapon: () => new Melee("Brutal Melee Weapon", "Low Tech", {
        damage: 1,
        traits: [
            WeaponTrait.Melee,
            WeaponTrait.Clumsy
        ]
    })
};
const LowTechWeaponList = Datalist(LowTechWeapons);
const MilitaryWeapons = {
    MilitaryRifle: () => new Weapon("Military Rifle", "Military", {
        range: 24,
        shots: 1
    }),
    InfantryLaser: () => new Weapon("Infantry Laser", "Military", {
        range: 30,
        shots: 1,
        traits: [WeaponTrait.SnapShot]
    }),
    MarksmansRifle: () => new Weapon("Marksman's Rifle", "Military", {
        range: 36,
        shots: 1,
        traits: [WeaponTrait.Heavy]
    }),
    NeedleRifle: () => new Weapon("Needle Rifle", "Military", {
        range: 18,
        shots: 2,
        traits: [WeaponTrait.Critical]
    }),
    AutoRifle: () => new Weapon("Auto Rifle", "Military", {
        range: 24,
        shots: 2
    }),
    RattleGun: () => new Weapon("Rattle Gun", "Military", {
        range: 24,
        shots: 3,
        traits: [WeaponTrait.Heavy]
    }),
    BoardingSaber: () => new Melee("Boarding Saber", "Military", {
        damage: 1,
        traits: [
            WeaponTrait.Melee,
            WeaponTrait.Elegant
        ]
    }),
    ShatterAxe: () => new Melee("Shatter Axe", "Military", {
        damage: 2,
        traits: [WeaponTrait.Melee]
    })
};
const MilitaryWeaponList = Datalist(MilitaryWeapons);

class WeaponGenerator {
}
WeaponGenerator.GenerateHighTech = () => Generator(d100, [
    new GeneratorOption([1, 5], HighTechWeapons.DuelingPistol()),
    new GeneratorOption([6, 15], HighTechWeapons.HandCannon()),
    new GeneratorOption([16, 30], HighTechWeapons.HandLaser()),
    new GeneratorOption([31, 45], HighTechWeapons.BeamPistol()),
    new GeneratorOption([46, 55], HighTechWeapons.InfantryLaser()),
    new GeneratorOption([56, 70], HighTechWeapons.BlastPistol()),
    new GeneratorOption([71, 80], HighTechWeapons.BlastRifle()),
    new GeneratorOption([81, 85], HighTechWeapons.PlasmaRifle()),
    new GeneratorOption([86, 100], HighTechWeapons.GlareSword())
]);
WeaponGenerator.GenerateLowTech = () => Generator(d100, [
    new GeneratorOption([1, 15], LowTechWeapons.Handgun()),
    new GeneratorOption([16, 35], LowTechWeapons.ScrapPistol()),
    new GeneratorOption([36, 40], LowTechWeapons.MachinePistol()),
    new GeneratorOption([41, 65], LowTechWeapons.ColonyRifle()),
    new GeneratorOption([66, 75], LowTechWeapons.Shotgun()),
    new GeneratorOption([76, 80], LowTechWeapons.HuntingRifle()),
    new GeneratorOption([81, 95], LowTechWeapons.Blade()),
    new GeneratorOption([96, 100], LowTechWeapons.BrutalMeleeWeapon())
]);
WeaponGenerator.GenerateMilitary = () => Generator(d100, [
    new GeneratorOption([1, 25], MilitaryWeapons.MilitaryRifle()),
    new GeneratorOption([26, 45], MilitaryWeapons.InfantryLaser()),
    new GeneratorOption([46, 50], MilitaryWeapons.MarksmansRifle()),
    new GeneratorOption([51, 60], MilitaryWeapons.NeedleRifle()),
    new GeneratorOption([61, 75], MilitaryWeapons.AutoRifle()),
    new GeneratorOption([76, 80], MilitaryWeapons.RattleGun()),
    new GeneratorOption([81, 95], MilitaryWeapons.BoardingSaber()),
    new GeneratorOption([96, 100], MilitaryWeapons.ShatterAxe())
]);

class Equipment {
    constructor(name, description, type) {
        this.id = Symbol();
        this.name = name;
        this.description = description;
        this.type = type;
    }
}
class ProtectiveDevice extends Equipment {
    constructor(name, description, type, deviceType) {
        super(name, description, type);
        this.deviceType = deviceType;
    }
}
class WeaponMod extends Equipment {
    constructor(name, description, type, allowPistol) {
        super(name, description, type);
        this.allowPistol = allowPistol;
    }
}
class WeaponSight extends Equipment {
    constructor(name, description, type, pistolOnly, damaged = false) {
        super(name, description, type);
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

const Consumables = {
    BoosterPills: () => new Consumable(`Booster Pills`, `When taken, the character removes all Stun markers. They may move at double normal Speed this round.`, EquipmentType.Consumable),
    CombatSerum: () => new Consumable(`Combat Serum`, `The character receives +2" Speed and +2 Reactions for the rest of the battle.`, EquipmentType.Consumable),
    KiraninCrystals: () => new Consumable(`Kiranin Crystals`, `A bright, dazzling display of hypnotic lights will daze any character within 4" of the user, making them unable to act this round. The crystals have no effect on characters that already acted earlier in the round, and do not affect the user. A character that is attacked in Brawling combat will defend themselves normally.`, EquipmentType.Consumable),
    RageOut: () => new Consumable(`Rage Out`, `The user gains +2" Speed an +1 to all Brawling rolls for the rest of this and the following round. A K'Erin user gets the benefits for the rest of the battle.`, EquipmentType.Consumable),
    Still: () => new Consumable(`Still`, `The user gains +1 to Hit, but cannot Move during this and the next round.`, EquipmentType.Consumable),
    StimPack: () => new Consumable(`Stim-pack`, `If a character would become a casualty, they remain on the table with a single Stun marker. This item can be used reflexively upon becoming a casualty. It does not require an action.`, EquipmentType.Consumable)
};
const ConsumableList = Datalist(Consumables);
const Implants = {
    AICompanion: () => new Implant(`AI Companion`, `When making Savvy rolls, the character may roll twice and pick the better score.`, EquipmentType.Implant),
    BodyWire: () => new Implant(`Body Wire`, `+1 Reactions`, EquipmentType.Implant),
    BoostedArm: () => new Implant(`Boosted Arm`, `Increase Grenade range by 2+". If the character ends their Move in contact with an obstacle that is no taller than the miniature, they may pull themselves up on top (bot not cross) as a Free Action.`, EquipmentType.Implant),
    BoostedLeg: () => new Implant(`Boosted Leg`, `Increase base move and Dash speed by +1" each.`, EquipmentType.Implant),
    CyberHand: () => new Implant(`Cyber Hand`, `The character may take any one Pistol they own and build it into their hand. Range is reduced to half, but the weapon always shoots with +1 to Hit and an additional +1 bonus when Brawling.`, EquipmentType.Implant),
    GeneticDefenses: () => new Implant(`Genetic Defenses`, `5+ Saving Throw, if subjected to any poison, virus, gas, or disease.`, EquipmentType.Implant),
    HealthBoost: () => new Implant(`Health Boost`, `If a post-battle Injury would result in 2+ campaign turns of recovery time, reduce the time by 1. If the character has Toughness 3 when receving this ipmlant, raise it to 4.`, EquipmentType.Implant),
    NerveAdjuster: () => new Implant(`Nerve Adjuster`, `Whenever the character is Stunned for any reason, they receive a 5+ Saving Throw to avoid the Stun.`, EquipmentType.Implant),
    NeuralOptimization: () => new Implant(`Neural Optimization`, `The character cannot be Stunned.`, EquipmentType.Implant),
    NightSight: () => new Implant(`Night Sight`, `The character does not suffer visibility reductions due to darkness, but is affected by smoke, gas, etc. normally.`, EquipmentType.Implant),
    PainSuppressor: () => new Implant(`Pain Suppressor`, `The character can perform crew tasks while in Sick Bay, though they cannot participate in battles.`, EquipmentType.Implant)
};
const ImplantList = Datalist(Implants);
const OnBoardItems = {
    Analyzer: () => new OnBoardItem(`Analyzer`, `Add +1 when rolling to see if Rumors result in a Quest and when rolling for Quest resolution`, EquipmentType.OnBoardItem),
    ColonistRationPacks: () => new OnBoardItem(`Colonist Ration Packs`, `Ignore Upkeep costs for one campaign turn. +1 story point. Single-use.`, EquipmentType.OnBoardItem),
    Duplicator: () => new OnBoardItem(`Duplicator`, `Create a perfect copy of one item in your inventory. A Duplicator cannot copy a Duplicator, due to the same proprietary nano-bot lock-out codes that makes your printer say it's out of ink after printing 17 pages. Single-use`, EquipmentType.OnBoardItem),
    FakeId: () => new OnBoardItem(`Fake ID`, `Add +1 to all attempts to obtain a licesne or other legal document`, EquipmentType.OnBoardItem),
    Fixer: () => new OnBoardItem(`Fixer`, `One piece of damaged or destroyed personal equipment can be repaired automatically, and at no cost. Single-use.`, EquipmentType.OnBoardItem),
    GeneticReconfigurationKit: () => new OnBoardItem(`Genetic Reconfiguration Kit`, `Reduce the cost of an ability score upgrade by 2 XP. Has no effect on Bots or Soulless. K'Erin may only use this to increase Toughness. Single-use.`, EquipmentType.OnBoardItem),
    LoadedDice: () => new OnBoardItem(`Loaded Dice`, `Each campaign turn, one crew member may gamble on the side. Roll 1D6. On a 1-4, earh that may credits. On a 5, earn nothing. On a 6, the locals don't take kindly to losing: The dice are lost and the crew member must roll on the post-battle Injury Table.`, EquipmentType.OnBoardItem),
    LuckyDice: () => new OnBoardItem(`Lucky Dice`, `Each campaign turn, one crew member may gamble on the sdie, earning +1 credit. If you have both Lucky and Loaded Dice, you can use both, but rolling a 6 for the Loaded dice means you lose both sets of dice.`, EquipmentType.OnBoardItem),
    MkIITranslator: () => new OnBoardItem(`Mk II Translator`, `When rolling to Recruit, you may roll an additional D6.`, EquipmentType.OnBoardItem),
    MedPatch: () => new OnBoardItem(`Med-patch`, `A character recovering from an Injury may subtract one campaign turn from the recovery duration required. If this reduces the time to zero turns, they may act normally this campaign turn. Single-use.`, EquipmentType.OnBoardItem),
    MeditationOrb: () => new OnBoardItem(`Meditation Orb`, `The crew all feel reassured of their karmic balance. Add +2 story points. All Swift or Precursor in the crew may also add +1 XP. Single-use.`, EquipmentType.OnBoardItem),
    NanoDoc: () => new OnBoardItem(`Nano-doc`, `Prevent one roll on the post-battle Injury Table, no matter the source of the injury. You must decide before rolling the dice. Single-use.`, EquipmentType.OnBoardItem),
    NoveltyStuffedAnimal: () => new OnBoardItem(`Novelty Stuffed Animal`, `Give to any character that isn't Soulless, K'Erin, or a Bot. The character receives +1 XP, and may roll 1D6. On a 6, you may add +1 story point as well. Single-use.`, EquipmentType.OnBoardItem),
    Purifier: () => new OnBoardItem(`Purifier`, `Each campaign turn, the Purifier can be used to generate clean water which can be sold off for 1 credit. This does not require a crew member to operate, but only one Purifier may be used at a time.`, EquipmentType.OnBoardItem),
    RepairBot: () => new OnBoardItem(`Repair Bot`, `+1 to all Repair attempts`, EquipmentType.OnBoardItem),
    SectorPermit: () => new OnBoardItem(`Sector Permit`, `Whenever you arrive at a planet where a license is required, roll 1D6. On a 4+, the Sector Permit is accepted. You must roll for each license type, on each planet.`, EquipmentType.OnBoardItem),
    SpareParts: () => new OnBoardItem(`Spare Parts`, `Add +1 when making a Repair attempt. If the roll is a natural 1, the Spare Parts are used up and must be erased from your roster.`, EquipmentType.OnBoardItem),
    TeachBot: () => new OnBoardItem(`Teach-bot`, `A character engaging in the Train crew task will earn 1D6 additional XP. Single-use.`, EquipmentType.OnBoardItem),
    Transcender: () => new OnBoardItem(`Transcender`, `The character activating this mysterious device receives +1 XP. The entire crew makes realizations about thier place in the cosmos. Add +2 story points. Single-use.`, EquipmentType.OnBoardItem)
};
const OnBoardItemList = Datalist(OnBoardItems);
const ProtectiveDevices = {
    BattleDress: () => new ProtectiveDevice(`Battle Dress`, `The character counts as +1 Reactions (maximum 4) and receives a Saving Throw of 5+`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Armor),
    CamoCloak: () => new ProtectiveDevice(`Camo Cloak`, `If character is within 2" of Cover, they are counted as being in Cover. Does not apply if the shooter is within 4".`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Screen),
    CombatArmor: () => new ProtectiveDevice(`Combat Armor`, `Saving Throw 5+`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Armor),
    DeflectorField: () => new ProtectiveDevice(`Deflector Field`, `Automatically deflects a single ranged weapon's Hit per battle. After a Hit is scored, decide if you wish to use the field before any rolls for Toughness or armor are made.`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Screen),
    FlakScreen: () => new ProtectiveDevice(`Falk Screen`, `All Area weapons striking the wearer, whether through the initial shots or additional attacks fro the Area trait have their Damage reduced by -1 (to a cap of +0).`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Screen),
    FlexArmor: () => new ProtectiveDevice(`Flex-armor`, `If the character did not move on their last activation, they count as +1 Toughness (to a maximum of 6).`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Screen),
    FragVest: () => new ProtectiveDevice(`Frag Vest`, `The wearer receives a 6+ Saving Throw, improved to 5+ against any Area attack.`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Armor),
    ScreenGenerator: () => new ProtectiveDevice(`Screen Generator`, `Receives a 5+ Saving Throw against gunfire. No effect against Area or Melee attacks.`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Screen),
    StealthGear: () => new ProtectiveDevice(`Stealth Gear`, `Enemies firing from a range over 9" are -1 to Hit.`, EquipmentType.ProtectiveDevice, ProtectiveDeviceType.Armor)
};
const ProtectiveDeviceList = Datalist(ProtectiveDevices);
const UtilityDevices = {
    AutoSensor: () => new UtilityDevice(`Auto Sensor`, `If an enemy begins or ends a move within 4" and Line of Sight of the character, you may immediately fire one shot form any Pistol carried. The shot is resolved `, EquipmentType.UtilityDevice),
    BattleVisor: () => new UtilityDevice(`Battle Visor`, `When shooting, the character may reroll any 1s on the firing dice.`, EquipmentType.UtilityDevice),
    Communicator: () => new UtilityDevice(`Communicator`, `When making the Reaction roll each round, you may roll one additional die, then choose a die to discard.`, EquipmentType.UtilityDevice),
    ConcealedBlade: () => new UtilityDevice(`Concealed Blade`, `If the character begins the round within 2" of an opponent, they may throw the blade as a Free Action before doing anything else. Roll to Hit normally, resolving the Hit with Damage +0. The blade can be used once per battle, and is replaced afterwards for free.`, EquipmentType.UtilityDevice),
    Displacer: () => new UtilityDevice(`Displacer`, `Usable once permission instead of Moving. Aim anywhere in sight. The character teleports to a point 1D6" away in a random direction. If the teleport would end up within a solid obstacle, the device fails and must be Repaired before it can be used again. The character emerges on the same height as the aiming point, which may cause them to fall if they emerge in open air. The character may take a Combat Action after teleporting. If used by a Precursor character, you may establish two "landing points", and select to use either.`, EquipmentType.UtilityDevice),
    DistractionBot: () => new UtilityDevice(`Distraction Bot`, `Usable once per battle as a Combat Action. Select an enemy within 12". Next time they would become active, they are unable to act, though they remove Stun markers as normal. Use a small marker to remember.`, EquipmentType.UtilityDevice),
    GrappleLauncher: () => new UtilityDevice(`Grapple Launcher`, `As a Combat Action, the character may use the launcher to scale a terrain feature within 1". The character can ascend up to 12" but must reach a surface they can stand on.`, EquipmentType.UtilityDevice),
    GravDampener: () => new UtilityDevice(`Grav Dampener`, `The character suffers no damage from faling and can descend from any height with no risk. If dropping more than 6", it counts as the character's Move for the round.`, EquipmentType.UtilityDevice),
    HazardSuit: () => new UtilityDevice(`Hazard Suit`, `If the character takes a Hit from an environmental hazard, they receive a 5+ Saving Throw.`, EquipmentType.UtilityDevice),
    HoverBoard: () => new UtilityDevice(`Hover Board`, `The character may use the board to move instead of walking. When used, the character can move up to 9" and can ignore any terrain that is man-height or lower. While hover-boarding, the character cannot engage in cobat, but can perform a non-Combat Action as needed.`, EquipmentType.UtilityDevice),
    InstaWall: () => new UtilityDevice(`Insta-wall`, `May be used once per mission as a Combat Action. Place a marker within 3", then place a 2" long force wall oriented any way you like, as long as it touches the marker. The wall is man-height an impenetrable to attacks (but does not block sight or mental abilities). At the start of each subsequent round, a D6 is rolled. On a 6, the wall dissipates.`, EquipmentType.UtilityDevice),
    JumpBelt: () => new UtilityDevice(`Jump Belt`, `Instead of Moving normally, the character may jump up to 9" directly forward and 3" upwards. Th character may take a Combat Action normally after landing.`, EquipmentType.UtilityDevice),
    MotionTracker: () => new UtilityDevice(`Motion Tracker`, `Add +1 to all rolls to Seize the Initiative.`, EquipmentType.UtilityDevice),
    MultiCutter: () => new UtilityDevice(`Multi-cutter`, `As a Combat Action, the character can cut a man-sized hole through any terrain feature up to 1" thick. The tool has no effect on force fields.`, EquipmentType.UtilityDevice),
    RoboRabbitsFoot: () => new UtilityDevice(`Robo-rabbit's Foot`, `A character with Luck 0 counts as having Luck 1. If the character would die while carrying this, the foot is destroyed (and cannot be Repaired), the character does not roll on the injury table.`, EquipmentType.UtilityDevice),
    ScannerBot: () => new UtilityDevice(`Scanner Bot`, `The crew adds +1 to all Seize the Initiative rolls.`, EquipmentType.UtilityDevice),
    SnooperBot: () => new UtilityDevice(`Snooper Bot`, `May be deployed before a battle, if the Seize the Initiative roll would be penalized or negated. The penalty can be ignored, but the Bot is Damaged on a D6 roll of a 1.`, EquipmentType.UtilityDevice),
    SonicEmitter: () => new UtilityDevice(`Sonic Emitter`, `Any enemy within 5" suffers -1 to all Hit rolls when shooting.`, EquipmentType.UtilityDevice),
    SteelBoots: () => new UtilityDevice(`Steel Boots`, `If the character rolls a natural 5 or 6 in a Brawl and wins the Brawl, they may opt to kick instead of striking normally. This hits with Damage +0 and knocks them 1D3" directly backwards. If the opponent is kicked into another character, that character is knocked 1D3" in a random direction.`, EquipmentType.UtilityDevice),
    TimeDistorter: () => new UtilityDevice(`Time Distorter`, `Activated as a Free Action. Select up to 3 enemy figures on the battlefield. They are frozen in time until the end of the following round. While in this state, they cannot Move, take Actions, or be affected by attacks or effects in any way. They are unaffected by Morale rolls as well. Single-use`, EquipmentType.UtilityDevice)
};
const UtilityDeviceList = Datalist(UtilityDevices);
const WeaponMods = {
    AssaultBlade: () => new WeaponMod(`Assault Blade`, `The weapon gains the Melee trait. Damage +1, and wins combat on a Draw.`, EquipmentType.WeaponMod, false),
    BeamLight: () => new WeaponMod(`Beam Light`, `When using the weapon in conditions of reduced visibility, increase visibility by +3".`, EquipmentType.WeaponMod, true),
    Bipod: () => new WeaponMod(`Bipod`, `The weapon recieve +1 to Hit at ranges over 8" when Aiming or when firing from Cover.`, EquipmentType.WeaponMod, false),
    HotShotPack: () => new WeaponMod(`Hot Shot Pack`, `If fittedto a Blast Pistol, Blast Rifle, Hand Laser, or Infantry Laser, +1 Damage. Any natural 6 on the shooting dice causes an overheat, rendering the weapon inoperable for the rest of the fight.`, EquipmentType.WeaponMod, true),
    CyberConfigurableNanoSludge: () => new WeaponMod(`Cyber-configurable Nano-sludge`, `The weapon receives a permanent +1 Hit bonus.`, EquipmentType.WeaponMod, true),
    Stabilizer: () => new WeaponMod(`Stabilizer`, `Weapon may ignore Heavy trait.`, EquipmentType.WeaponMod, true),
    ShockAttachment: () => new WeaponMod(`Shock Attachment`, `The weapon receives the Impact trait against targets within 8".`, EquipmentType.WeaponMod, true),
    UpgradeKit: () => new WeaponMod(`Upgrade Kit`, `+2" Range increase.`, EquipmentType.WeaponMod, true)
};
const WeaponModList = Datalist(WeaponMods);
const WeaponSights = {
    LaserSight: () => new WeaponSight(`Laser Sight`, `The weapon receives thet Snap Shot trait.`, EquipmentType.WeaponSight, true),
    QualitySight: () => new WeaponSight(`Quality Sight`, `+2" Range increase. Reroll 1s when firing only 1 shot.`, EquipmentType.WeaponSight, false),
    SeekerSight: () => new WeaponSight(`Seeker Sight`, `The weapon receives a +1 to Hit if the shooter did not Move this round.`, EquipmentType.WeaponSight, false),
    TrackerSight: () => new WeaponSight(`Tracker Sight`, `+1 to Hit if you fired at the same target during your previous round.`, EquipmentType.WeaponSight, false),
    UnityBattleSight: () => new WeaponSight(`Unity Battle Sight`, `+1 to all Hit rolls.`, EquipmentType.WeaponSight, false)
};
const WeaponSightList = Datalist(WeaponSights);

var _a$1;
class EquipmentGenerator {
}
_a$1 = EquipmentGenerator;
EquipmentGenerator.GenerateStash = (savvyUpgrades = 0) => {
    const stash = new Array();
    for (let i = 0; i < 3; i++) {
        stash.push(savvyUpgrades > i
            ? WeaponGenerator.GenerateHighTech()
            : WeaponGenerator.GenerateMilitary());
        stash.push(WeaponGenerator.GenerateLowTech());
    }
    stash.push(_a$1.GenerateGear());
    stash.push(_a$1.GenerateGadget());
    return stash;
};
EquipmentGenerator.GenerateGear = () => Generator(d100, [
    new GeneratorOption([1, 4], WeaponMods.AssaultBlade()),
    new GeneratorOption([5, 10], WeaponMods.BeamLight()),
    new GeneratorOption([11, 15], WeaponMods.Bipod()),
    new GeneratorOption([16, 20], Consumables.BoosterPills()),
    new GeneratorOption([21, 24], ProtectiveDevices.CamoCloak()),
    new GeneratorOption([25, 28], ProtectiveDevices.CombatArmor()),
    new GeneratorOption([29, 33], UtilityDevices.Communicator()),
    new GeneratorOption([34, 37], UtilityDevices.ConcealedBlade()),
    new GeneratorOption([38, 42], OnBoardItems.FakeId()),
    new GeneratorOption([43, 46], OnBoardItems.Fixer()),
    new GeneratorOption([47, 52], ProtectiveDevices.FragVest()),
    new GeneratorOption([53, 57], UtilityDevices.GrappleLauncher()),
    new GeneratorOption([58, 61], UtilityDevices.HazardSuit()),
    new GeneratorOption([62, 65], WeaponSights.LaserSight()),
    new GeneratorOption([66, 69], OnBoardItems.LoadedDice()),
    new GeneratorOption([70, 75], OnBoardItems.MedPatch()),
    new GeneratorOption([76, 81], OnBoardItems.NanoDoc()),
    new GeneratorOption([82, 85], OnBoardItems.Purifier()),
    new GeneratorOption([86, 89], UtilityDevices.ScannerBot()),
    new GeneratorOption([90, 92], OnBoardItems.SectorPermit()),
    new GeneratorOption([93, 96], UtilityDevices.SteelBoots()),
    new GeneratorOption([97, 100], WeaponSights.TrackerSight())
]);
EquipmentGenerator.GenerateGadget = () => Generator(d100, [
    new GeneratorOption([1, 4], Implants.AICompanion()),
    new GeneratorOption([5, 9], OnBoardItems.Analyzer()),
    new GeneratorOption([10, 13], UtilityDevices.BattleVisor()),
    new GeneratorOption([14, 17], Implants.BoostedArm()),
    new GeneratorOption([18, 21], Implants.BoostedLeg()),
    new GeneratorOption([22, 24], Implants.CyberHand()),
    new GeneratorOption([25, 27], UtilityDevices.Displacer()),
    new GeneratorOption([28, 31], UtilityDevices.DistractionBot()),
    new GeneratorOption([32, 36], OnBoardItems.Duplicator()),
    new GeneratorOption([37, 41], UtilityDevices.InstaWall()),
    new GeneratorOption([42, 46], UtilityDevices.JumpBelt()),
    new GeneratorOption([47, 50], Implants.NerveAdjuster()),
    new GeneratorOption([51, 55], OnBoardItems.RepairBot()),
    new GeneratorOption([56, 60], UtilityDevices.ScannerBot()),
    new GeneratorOption([61, 65], ProtectiveDevices.ScreenGenerator()),
    new GeneratorOption([66, 69], WeaponSights.SeekerSight()),
    new GeneratorOption([70, 73], WeaponMods.ShockAttachment()),
    new GeneratorOption([74, 79], UtilityDevices.SnooperBot()),
    new GeneratorOption([80, 83], UtilityDevices.SonicEmitter()),
    new GeneratorOption([84, 89], WeaponMods.Stabilizer()),
    new GeneratorOption([90, 93], ProtectiveDevices.StealthGear()),
    new GeneratorOption([94, 100], Consumables.StimPack())
]);

class CampaignResource {
    constructor({ credits = 0, storyPoints = 0, rumors = 0, patrons = 0, rivals = 0 } = {}) {
        this.consolidate = (resources) => resources.forEach(r => {
            this.credits += r.credits;
            this.patrons += r.patrons;
            this.rivals += r.rivals;
            this.rumors += r.rumors;
            this.storyPoints += r.storyPoints;
        });
        this.credits = credits;
        this.storyPoints = storyPoints;
        this.rumors = rumors;
        this.patrons = patrons;
        this.rivals = rivals;
    }
}

class CharacterProfile {
    constructor({ maxCombatSkill = 5, maxReaction = 6, maxSpeed = 8, maxToughness = 6, maxSavvy = 5, maxLuck = 1, maxXp = Number.MAX_VALUE, reaction = 1, speed = 4, combatSkill = 0, toughness = 3, savvy = 0, luck = 0, xp = 0, useConsumables = true, useImplants = true, eventTarget = true } = {}) {
        this._reaction = 0;
        this._speed = 0;
        this._combatSkill = 0;
        this._toughness = 0;
        this._savvy = 0;
        this._luck = 0;
        this._xp = 0;
        this.applyEffects = (effects) => effects.forEach(effect => this.applyEffect(effect));
        this.applyEffect = (effect) => {
            switch (effect.stat) {
                case CharacterStat.CombatSkill:
                    this.combatSkill += effect.points;
                    break;
                case CharacterStat.Luck:
                    this.luck += effect.points;
                    break;
                case CharacterStat.Reactions:
                    this.reaction += effect.points;
                    break;
                case CharacterStat.Savvy:
                    this.savvy += effect.points;
                    break;
                case CharacterStat.Speed:
                    this.speed += effect.points;
                    break;
                case CharacterStat.Toughness:
                    this.toughness += effect.points;
                    break;
                case CharacterStat.XP:
                    this.xp += effect.points;
                    break;
            }
        };
        this.maxCombatSkill = maxCombatSkill;
        this.maxReaction = maxReaction;
        this.maxSpeed = maxSpeed;
        this.maxToughness = maxToughness;
        this.maxSavvy = maxSavvy;
        this.maxLuck = maxLuck;
        this.maxXp = maxXp;
        this.reaction = reaction;
        this.speed = speed;
        this.combatSkill = combatSkill;
        this.toughness = toughness;
        this.savvy = savvy;
        this.luck = luck;
        this.xp = xp;
        this.useConsumables = useConsumables;
        this.useImplants = useImplants;
        this.eventTarget = eventTarget;
    }
    get reaction() { return this._reaction; }
    set reaction(value) {
        this._reaction = value > this.maxReaction
            ? this.maxReaction
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
        this._combatSkill = value > this.maxCombatSkill
            ? this.maxCombatSkill
            : value;
    }
    get toughness() { return this._toughness; }
    set toughness(value) {
        this._toughness = value > this.maxToughness
            ? this.maxToughness
            : value;
    }
    get savvy() { return this._savvy; }
    set savvy(value) {
        this._savvy = value > this.maxSavvy
            ? this.maxSavvy
            : value;
    }
    get luck() { return this._luck; }
    set luck(value) {
        this._luck = value > this.maxLuck
            ? this.maxLuck
            : value;
    }
    get xp() { return this._xp; }
    set xp(value) {
        this._xp = value > this.maxXp
            ? this.maxXp
            : value;
    }
}

class Character {
    constructor(species, { maxCombatSkill = 5, maxReaction = 6, maxSpeed = 8, maxToughness = 6, maxSavvy = 5, maxLuck = 1, maxXp = Number.MAX_VALUE, reaction = 1, speed = 4, combatSkill = 0, toughness = 3, savvy = 0, luck = 0, xp = 0, useConsumables = true, useImplants = true, eventTarget = true } = {}) {
        this._weapons = [];
        this._devices = [];
        this.gear = new Array();
        this.sidearm = null;
        this.isLeader = false;
        this.setRace = () => {
            switch (this.species) {
                case CharacterSpecies.Engineer:
                case CharacterSpecies.Feral:
                case CharacterSpecies.Hakshan:
                case CharacterSpecies.KErin:
                case CharacterSpecies.Manipulator:
                case CharacterSpecies.Precursor:
                case CharacterSpecies.Soulless:
                case CharacterSpecies.Swift:
                    return CharacterRace.Alien;
                case CharacterSpecies.AssaultBot:
                case CharacterSpecies.Bot:
                    return CharacterRace.Bot;
                case CharacterSpecies.BioUpgrade:
                case CharacterSpecies.EmoSuppressed:
                case CharacterSpecies.Empath:
                case CharacterSpecies.Feeler:
                case CharacterSpecies.Human:
                case CharacterSpecies.MinorAlien:
                case CharacterSpecies.Mutant:
                case CharacterSpecies.MysteriousPast:
                case CharacterSpecies.Primitive:
                    return CharacterRace.Human;
                default:
                    return CharacterRace.Strange;
            }
        };
        this.promoteLeader = () => {
            this.isLeader = true;
            this.profile.luck += 1;
        };
        this.applyDetail = (cd) => {
            if (cd.effects && cd.effects.length > 0)
                this.profile.applyEffects(cd.effects);
            if (cd.equipment && cd.equipment.length > 0)
                this.gear.push(...cd.equipment);
        };
        this.id = Symbol();
        this.species = species;
        this.profile = new CharacterProfile({
            reaction, maxReaction,
            speed, maxSpeed,
            combatSkill, maxCombatSkill,
            toughness, maxToughness,
            savvy, maxSavvy,
            luck, maxLuck,
            xp, maxXp,
            useConsumables, useImplants,
            eventTarget
        });
        this.race = this.setRace();
    }
    get weapons() { return this._weapons; }
    get devices() { return this._devices; }
}

class CharacterDetail {
    constructor(detail, { effects = null, resources = new CampaignResource(), equipment = null } = {}) {
        this.resources = new CampaignResource();
        this.equipment = null;
        this.mergeEffects = (cd) => {
            if (this.effects && cd.effects)
                this.effects.push(...cd.effects);
            else if (cd.effects)
                this.effects = cd.effects;
        };
        this.mergeEquipment = (cd) => {
            if (this.equipment && cd.equipment)
                this.equipment.push(...cd.equipment);
            else if (cd.equipment)
                this.equipment = cd.equipment;
        };
        this.merge = (cd) => {
            this.detail = `${this.detail} : ${cd.detail}`;
            this.mergeEffects(cd);
            this.resources.consolidate([cd.resources]);
            this.mergeEquipment(cd);
        };
        this.detail = detail;
        this.effects = effects;
        this.resources = resources;
        this.equipment = equipment;
    }
}

const Backgrounds = {
    PeacefulHighTechColony: () => new CharacterDetail(`Peaceful, High-Tech Colony`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        resources: new CampaignResource({ credits: d6() })
    }),
    GiantOvercrowdedDystopianCity: () => new CharacterDetail(`Giant, Overcrowded, Dystopian City`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }]
    }),
    LowTechColony: () => new CharacterDetail(`Low-Tech Colony`, {
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    MiningColony: () => new CharacterDetail(`Mining Colony`, {
        effects: [{ points: 1, stat: CharacterStat.Toughness }]
    }),
    MilitaryBrat: () => new CharacterDetail(`Military Brat`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }]
    }),
    SpaceStation: () => new CharacterDetail(`Space Station`, {
        equipment: [EquipmentGenerator.GenerateGear()]
    }),
    MilitaryOutpost: () => new CharacterDetail(`Military Outpost`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }]
    }),
    Drifter: () => new CharacterDetail(`Drifter`, {
        equipment: [EquipmentGenerator.GenerateGear()]
    }),
    LowerMegacityClass: () => new CharacterDetail(`Lower Megacity Class`, {
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    WealthyMerchantFamily: () => new CharacterDetail(`Wealthy Merchant Family`, {
        resources: new CampaignResource({ credits: dice({ six: 2 }).total })
    }),
    FrontierGang: () => new CharacterDetail(`Frontier Gang`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }]
    }),
    ReligiousCult: () => new CharacterDetail(`Religious Cult`, {
        resources: new CampaignResource({
            patrons: 1,
            storyPoints: 1
        })
    }),
    WarTornHellHole: () => new CharacterDetail(`War-Torn Hell-Hole`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        equipment: [WeaponGenerator.GenerateMilitary()]
    }),
    TechGuild: () => new CharacterDetail(`Tech Guild`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        resources: new CampaignResource({ credits: d6() }),
        equipment: [WeaponGenerator.GenerateHighTech()]
    }),
    SubjugatedColonyOnAlienWorld: () => new CharacterDetail(`Subjugated Colony on Alien World`, {
        equipment: [EquipmentGenerator.GenerateGadget()]
    }),
    LongTermSpaceMission: () => new CharacterDetail(`Long-Term Space Mission`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }]
    }),
    ResearchOutpost: () => new CharacterDetail(`Research Outpost`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: [EquipmentGenerator.GenerateGadget()]
    }),
    PrimitiveOrRegressedWorld: () => new CharacterDetail(`Primitive or Regressed World`, {
        effects: [{ points: 1, stat: CharacterStat.Toughness }],
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    OrphanUtilityProgram: () => new CharacterDetail(`Orphan Utility Program`, {
        resources: new CampaignResource({
            patrons: 1,
            storyPoints: 1
        })
    }),
    IsolationistEnclave: () => new CharacterDetail(`Isolationist Enclave`, {
        resources: new CampaignResource({ rumors: 2 })
    }),
    ComfortableMegacityClass: () => new CharacterDetail(`Comfortable Megacity Class`, {
        resources: new CampaignResource({ credits: d6() })
    }),
    IndustrialWorld: () => new CharacterDetail(`Industrial World`, {
        equipment: [EquipmentGenerator.GenerateGear()]
    }),
    Bureaucrat: () => new CharacterDetail(`Bureaucrat`, {
        resources: new CampaignResource({ credits: d6() })
    }),
    WastelandNomads: () => new CharacterDetail(`Wasteland Nomads`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    AlienCulture: () => new CharacterDetail(`Alien Culture`, {
        equipment: [WeaponGenerator.GenerateHighTech()]
    })
};
const BackgroundList = Datalist(Backgrounds);
const BOT_PROFILE = {
    reaction: 2,
    combatSkill: 1,
    toughness: 4,
    savvy: 2,
    maxLuck: 0,
    maxXp: 0,
    useConsumables: false,
    useImplants: false,
    eventTarget: false
};
const HUMAN_PROFILE = {
    maxLuck: 3
};
const Characters = {
    AssaultBot: () => new Character(CharacterSpecies.AssaultBot, BOT_PROFILE),
    BioUpgrade: () => new Character(CharacterSpecies.BioUpgrade, HUMAN_PROFILE),
    Bot: () => new Character(CharacterSpecies.Bot, BOT_PROFILE),
    DeConverted: () => new Character(CharacterSpecies.DeConverted, {
        maxSavvy: 0
    }),
    EmoSuppressed: () => new Character(CharacterSpecies.EmoSuppressed, {
        maxLuck: 0
    }),
    Empath: () => new Character(CharacterSpecies.Empath, HUMAN_PROFILE),
    Engineer: () => new Character(CharacterSpecies.Engineer, {
        maxToughness: 4,
        toughness: 2,
        savvy: 1
    }),
    Feeler: () => new Character(CharacterSpecies.Feeler, HUMAN_PROFILE),
    Feral: () => new Character(CharacterSpecies.Feral),
    GeneticUplift: () => new Character(CharacterSpecies.GeneticUplift, {
        reaction: 2,
        speed: 5,
        combatSkill: 1,
        toughness: 4,
        savvy: 1
    }),
    Hakshan: () => new Character(CharacterSpecies.Hakshan),
    HopefulRookie: () => new Character(CharacterSpecies.HopefulRookie, HUMAN_PROFILE),
    Hulker: () => new Character(CharacterSpecies.Hulker, {
        combatSkill: 1,
        toughness: 5
    }),
    Human: () => new Character(CharacterSpecies.Human, HUMAN_PROFILE),
    KErin: () => new Character(CharacterSpecies.KErin, {
        toughness: 4
    }),
    Manipulator: () => new Character(CharacterSpecies.Manipulator, {
        reaction: 2,
        savvy: 1
    }),
    MinorAlien: () => new Character(CharacterSpecies.MinorAlien, HUMAN_PROFILE),
    Mutant: () => new Character(CharacterSpecies.Mutant, HUMAN_PROFILE),
    MysteriousPast: () => new Character(CharacterSpecies.MysteriousPast, HUMAN_PROFILE),
    Precursor: () => new Character(CharacterSpecies.Precursor, {
        speed: 5,
        toughness: 2
    }),
    Primitive: () => new Character(CharacterSpecies.Primitive, HUMAN_PROFILE),
    Soulless: () => new Character(CharacterSpecies.Soulless, {
        toughness: 4,
        savvy: 1
    }),
    Stalker: () => new Character(CharacterSpecies.Stalker),
    Swift: () => new Character(CharacterSpecies.Swift, {
        speed: 5
    }),
    Traveler: () => new Character(CharacterSpecies.Traveler, {
        reaction: 3,
        toughness: 4,
        savvy: 2
    }),
    UnityAgent: () => new Character(CharacterSpecies.UnityAgent, {
        reaction: 2
    })
};
const CharacterList = Datalist(Characters);
const Classes = {
    WorkingClass: () => new CharacterDetail(`Working Class`, {
        effects: [
            { points: 1, stat: CharacterStat.Savvy },
            { points: 1, stat: CharacterStat.Luck }
        ]
    }),
    Technician: () => new CharacterDetail(`Technician`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: [EquipmentGenerator.GenerateGear()]
    }),
    Scientist: () => new CharacterDetail(`Scientist`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: [EquipmentGenerator.GenerateGadget()]
    }),
    Hacker: () => new CharacterDetail(`Hacker`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        resources: new CampaignResource({ rivals: 1 })
    }),
    Soldier: () => new CharacterDetail(`Soldier`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
        resources: new CampaignResource({ credits: d6() })
    }),
    Mercenary: () => new CharacterDetail(`Mercenary`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
        equipment: [WeaponGenerator.GenerateMilitary()]
    }),
    Agitator: () => new CharacterDetail(`Agitator`, {
        resources: new CampaignResource({ rivals: 1 })
    }),
    Primitive: () => new CharacterDetail(`Primitive`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }],
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    Artist: () => new CharacterDetail(`Artist`, {
        resources: new CampaignResource({ credits: d6() })
    }),
    Negotiator: () => new CharacterDetail(`Negotiator`, {
        resources: new CampaignResource({ patrons: 1, storyPoints: 1 })
    }),
    Trader: () => new CharacterDetail(`Trader`, {
        resources: new CampaignResource({ credits: dice({ six: 2 }).total })
    }),
    StarshipCrew: () => new CharacterDetail(`Starship Crew`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }]
    }),
    PettyCriminal: () => new CharacterDetail(`Petty Criminal`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }]
    }),
    Ganger: () => new CharacterDetail(`Ganger`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    Scoundrel: () => new CharacterDetail(`Scoundrel`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }]
    }),
    Enforcer: () => new CharacterDetail(`Enforcer`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
        resources: new CampaignResource({ patrons: 1 })
    }),
    SpecialAgent: () => new CharacterDetail(`Special Agent`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        resources: new CampaignResource({ patrons: 1 }),
        equipment: [EquipmentGenerator.GenerateGadget()]
    }),
    Troubleshooter: () => new CharacterDetail(`Troubleshooter`, {
        effects: [{ points: 1, stat: CharacterStat.Reactions }],
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    BountyHunter: () => new CharacterDetail(`Bounty Hunter`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }],
        resources: new CampaignResource({ rumors: 1 }),
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    Nomad: () => new CharacterDetail(`Nomad`, {
        equipment: [EquipmentGenerator.GenerateGear()]
    }),
    Explorer: () => new CharacterDetail(`Explorer`, {
        effects: [{ points: 2, stat: CharacterStat.XP }],
        equipment: [EquipmentGenerator.GenerateGear()]
    }),
    Punk: () => new CharacterDetail(`Punk`, {
        effects: [{ points: 2, stat: CharacterStat.XP }],
        resources: new CampaignResource({ rivals: 1 })
    }),
    Scavenger: () => new CharacterDetail(`Scavenger`, {
        resources: new CampaignResource({ rumors: 1 }),
        equipment: [WeaponGenerator.GenerateHighTech()]
    })
};
const ClassList = Datalist(Classes);
const Motivations = {
    Wealth: () => new CharacterDetail(`Wealth`, {
        resources: new CampaignResource({ credits: d6() })
    }),
    Fame: () => new CharacterDetail(`Fame`, {
        resources: new CampaignResource({ storyPoints: 1 })
    }),
    Glory: () => new CharacterDetail(`Glory`, {
        effects: [{ points: 1, stat: CharacterStat.CombatSkill }],
        equipment: [WeaponGenerator.GenerateMilitary()]
    }),
    Survival: () => new CharacterDetail(`Survival`, {
        effects: [{ points: 1, stat: CharacterStat.Toughness }]
    }),
    Escape: () => new CharacterDetail(`Escape`, {
        effects: [{ points: 1, stat: CharacterStat.Speed }]
    }),
    Adventure: () => new CharacterDetail(`Adventure`, {
        resources: new CampaignResource({ credits: d6() }),
        equipment: [WeaponGenerator.GenerateLowTech()]
    }),
    Truth: () => new CharacterDetail(`Truth`, {
        resources: new CampaignResource({
            rumors: 1,
            storyPoints: 1
        })
    }),
    Technology: () => new CharacterDetail(`Technology`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: [EquipmentGenerator.GenerateGadget()]
    }),
    Discovery: () => new CharacterDetail(`Discovery`, {
        effects: [{ points: 1, stat: CharacterStat.Savvy }],
        equipment: [EquipmentGenerator.GenerateGear()]
    }),
    Loyalty: () => new CharacterDetail(`Loyalty`, {
        resources: new CampaignResource({ patrons: 1, storyPoints: 1 })
    }),
    Revenge: () => new CharacterDetail(`Revenge`, {
        effects: [{ points: 2, stat: CharacterStat.XP }],
        resources: new CampaignResource({ rivals: 1 })
    }),
    Romance: () => new CharacterDetail(`Romance`, {
        resources: new CampaignResource({ rumors: 1, storyPoints: 1 })
    }),
    Faith: () => new CharacterDetail(`Faith`, {
        resources: new CampaignResource({ rumors: 1, storyPoints: 1 })
    }),
    Political: () => new CharacterDetail(`Political`, {
        resources: new CampaignResource({ patrons: 1, storyPoints: 1 })
    }),
    Power: () => new CharacterDetail(`Power`, {
        effects: [{ points: 2, stat: CharacterStat.XP }],
        resources: new CampaignResource({ rivals: 1 })
    }),
    Order: () => new CharacterDetail(`Order`, {
        resources: new CampaignResource({ patrons: 1, storyPoints: 1 })
    }),
    Freedom: () => new CharacterDetail(`Freedom`, {
        effects: [{ points: 2, stat: CharacterStat.XP }]
    })
};
const MotivationList = Datalist(Motivations);

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

const Ships = {
    WornFreighter: () => new Ship("Worn freighter", d6() + 20, 30),
    RetiredTroopTransport: () => new Ship("Retired troop transport", d6() + 30, 35),
    StrangeAlienVessel: () => new Ship("Strange alien vessel", d6() + 15, 25),
    UpgradedShuttle: () => new Ship("Upgraded shuttle", d6() + 10, 20),
    RetiredScoutShip: () => new Ship("Retired scout ship", d6() + 20, 25, ShipTrait.FuelEfficient),
    RepurposedScienceVessel: () => new Ship("Repurposed science vessel", d6() + 10, 20),
    BatteredMiningShip: () => new Ship("Battered mining ship", d6() + 20, 35, ShipTrait.FuelHog),
    UnreliableMerchantCruiser: () => new Ship("Unreliable merchant cruiser", d6() + 20, 30),
    FormerDiplomaticVessel: () => new Ship("Former diplomatic vessel", d6() + 15, 25),
    AncientLowTechCraft: () => new Ship("Ancient low-tech craft", d6() + 20, 35, ShipTrait.DodgyDrive),
    BuiltFromSalvagedWrecks: () => new Ship("Built from salvaged wrecks", d6() + 20, 30),
    WornColonyShip: () => new Ship("Worn colony ship", d6() + 20, 25, ShipTrait.StandardIssue),
    RetiredMilitaryPatrolShip: () => new Ship("Retired military patrol ship", d6() + 35, 40, ShipTrait.Armored)
};
const ShipList = Datalist(Ships);

var _a;
class CharacterGenerator {
}
_a = CharacterGenerator;
CharacterGenerator.savvyUpgraded = (details) => details
    .some(d => d.effects
    && d.effects.some(e => e.points > 0 && e.stat === CharacterStat.Savvy));
CharacterGenerator.GenerateRoster = (size) => {
    const roster = new Array();
    for (var i = 0; i < size; i++)
        roster.push(_a.GenerateCharacter());
    return roster;
};
CharacterGenerator.DevelopCharacter = (character) => {
    var _b, _c;
    if (character.race === CharacterRace.Bot) {
        character.background = 'NULL_REFERENCE_EXCEPTION';
        character.motivation = 'ROBOTS_ARE_NOT_SENTIENT';
        character.class = 'ASSIGNED_FUNCTIONALITY';
        return { resources: new CampaignResource(), savvyUpgraded: false };
    }
    else {
        const details = [
            _a.DevelopBackground(character),
            _a.DevelopMotivation(character),
            _a.DevelopClass(character)
        ];
        const resources = new CampaignResource();
        resources.consolidate(details.map(d => d.resources));
        let savvyUpgraded;
        switch (character.species) {
            case CharacterSpecies.DeConverted:
                savvyUpgraded = false;
                break;
            case CharacterSpecies.MinorAlien:
                if (resources.credits)
                    resources.credits -= 1;
                if (resources.storyPoints)
                    resources.storyPoints -= 1;
                savvyUpgraded = _a.savvyUpgraded(details);
                break;
            case CharacterSpecies.Traveler:
                resources.storyPoints = ((_b = resources.storyPoints) !== null && _b !== void 0 ? _b : 0) + 2;
                resources.rumors = ((_c = resources.rumors) !== null && _c !== void 0 ? _c : 0) + 2;
                savvyUpgraded = _a.savvyUpgraded(details);
                break;
            default:
                savvyUpgraded = _a.savvyUpgraded(details);
                break;
        }
        return {
            resources,
            savvyUpgraded
        };
    }
};
CharacterGenerator.DevelopBackground = (character) => {
    var _b, _c;
    let b;
    let roll;
    switch (character.species) {
        case CharacterSpecies.MysteriousPast:
            b = _a.GenerateBackground();
            b.merge(_a.GenerateBackground());
            if ((_b = b.resources) === null || _b === void 0 ? void 0 : _b.storyPoints)
                b.resources.storyPoints = 0;
            break;
        case CharacterSpecies.Mutant:
            b = Backgrounds.LowerMegacityClass();
            break;
        case CharacterSpecies.Manipulator:
            b = Backgrounds.Bureaucrat();
            break;
        case CharacterSpecies.Primitive:
            b = Backgrounds.PrimitiveOrRegressedWorld();
            break;
        case CharacterSpecies.BioUpgrade:
            b = _a.GenerateBackground();
            if ((_c = b.resources) === null || _c === void 0 ? void 0 : _c.credits)
                b.resources.credits >= 2
                    ? b.resources.credits -= 2
                    : b.resources.credits = 0;
            break;
        default:
            b = _a.GenerateBackground();
            break;
    }
    character.background = b.detail;
    character.applyDetail(b);
    return b;
};
CharacterGenerator.DevelopMotivation = (character) => {
    var _b;
    let m;
    switch (character.species) {
        case CharacterSpecies.DeConverted:
            m = Motivations.Revenge();
            break;
        case CharacterSpecies.UnityAgent:
            m = Motivations.Order();
            break;
        case CharacterSpecies.MysteriousPast:
            m = _a.GenerateMotivation();
            if ((_b = m.resources) === null || _b === void 0 ? void 0 : _b.storyPoints)
                m.resources.storyPoints = 0;
            break;
        case CharacterSpecies.Feeler:
            m = _a.GenerateMotivation();
            m.merge(_a.GenerateMotivation());
            break;
        case CharacterSpecies.EmoSuppressed:
            m = Motivations.Survival();
            break;
        case CharacterSpecies.Traveler:
            m = Motivations.Truth();
            break;
        default:
            m = _a.GenerateMotivation();
    }
    character.motivation = m.detail;
    character.applyDetail(m);
    return m;
};
CharacterGenerator.DevelopClass = (character) => {
    var _b;
    let c;
    switch (character.species) {
        case CharacterSpecies.MysteriousPast:
            c = _a.GenerateClass();
            if ((_b = c.resources) === null || _b === void 0 ? void 0 : _b.storyPoints)
                c.resources.storyPoints = 0;
            break;
        case CharacterSpecies.Hulker:
            c = _a.GenerateClass();
            switch (c.detail) {
                case "Technician":
                case "Scientist":
                case "Hacker":
                    c = Classes.Primitive();
            }
            break;
        default:
            c = _a.GenerateClass();
            break;
    }
    character.class = c.detail;
    character.applyDetail(c);
    return c;
};
CharacterGenerator.GenerateCharacter = () => Generator(d100, [
    new GeneratorOption([1, 60], Characters.Human()),
    new GeneratorOption([61, 80], _a.GenerateAlien()),
    new GeneratorOption([81, 90], Characters.Bot()),
    new GeneratorOption([91, 100], _a.GenerateStrange())
]);
CharacterGenerator.GenerateAlien = () => Generator(d100, [
    new GeneratorOption([1, 20], Characters.Engineer()),
    new GeneratorOption([21, 40], Characters.KErin()),
    new GeneratorOption([41, 55], Characters.Soulless()),
    new GeneratorOption([56, 70], Characters.Precursor()),
    new GeneratorOption([71, 90], Characters.Feral()),
    new GeneratorOption([91, 100], Characters.Swift())
]);
CharacterGenerator.GenerateStrange = () => Generator(d100, [
    new GeneratorOption([1, 2], Characters.DeConverted()),
    new GeneratorOption([3, 8], Characters.UnityAgent()),
    new GeneratorOption([9, 17], Characters.MysteriousPast()),
    new GeneratorOption([18, 22], Characters.Hakshan()),
    new GeneratorOption([23, 27], Characters.Stalker()),
    new GeneratorOption([28, 34], Characters.Hulker()),
    new GeneratorOption([35, 41], Characters.HopefulRookie()),
    new GeneratorOption([42, 47], Characters.GeneticUplift()),
    new GeneratorOption([48, 53], Characters.Mutant()),
    new GeneratorOption([54, 58], Characters.AssaultBot()),
    new GeneratorOption([59, 62], Characters.Manipulator()),
    new GeneratorOption([63, 67], Characters.Primitive()),
    new GeneratorOption([68, 73], Characters.Feeler()),
    new GeneratorOption([74, 79], Characters.EmoSuppressed()),
    new GeneratorOption([80, 85], Characters.MinorAlien()),
    new GeneratorOption([86, 87], Characters.Traveler()),
    new GeneratorOption([88, 93], Characters.Empath()),
    new GeneratorOption([94, 100], Characters.BioUpgrade())
]);
CharacterGenerator.GenerateBackground = () => Generator(d100, [
    new GeneratorOption([1, 4], Backgrounds.PeacefulHighTechColony()),
    new GeneratorOption([5, 9], Backgrounds.GiantOvercrowdedDystopianCity()),
    new GeneratorOption([10, 13], Backgrounds.LowTechColony()),
    new GeneratorOption([14, 17], Backgrounds.MiningColony()),
    new GeneratorOption([18, 21], Backgrounds.MilitaryBrat()),
    new GeneratorOption([22, 25], Backgrounds.SpaceStation()),
    new GeneratorOption([26, 29], Backgrounds.MilitaryOutpost()),
    new GeneratorOption([30, 34], Backgrounds.Drifter()),
    new GeneratorOption([35, 39], Backgrounds.LowerMegacityClass()),
    new GeneratorOption([40, 42], Backgrounds.WealthyMerchantFamily()),
    new GeneratorOption([43, 46], Backgrounds.FrontierGang()),
    new GeneratorOption([47, 49], Backgrounds.ReligiousCult()),
    new GeneratorOption([50, 52], Backgrounds.WarTornHellHole()),
    new GeneratorOption([53, 55], Backgrounds.TechGuild()),
    new GeneratorOption([56, 59], Backgrounds.SubjugatedColonyOnAlienWorld()),
    new GeneratorOption([60, 64], Backgrounds.LongTermSpaceMission()),
    new GeneratorOption([65, 68], Backgrounds.ResearchOutpost()),
    new GeneratorOption([69, 72], Backgrounds.PrimitiveOrRegressedWorld()),
    new GeneratorOption([73, 76], Backgrounds.OrphanUtilityProgram()),
    new GeneratorOption([77, 80], Backgrounds.IsolationistEnclave()),
    new GeneratorOption([81, 84], Backgrounds.ComfortableMegacityClass()),
    new GeneratorOption([85, 89], Backgrounds.IndustrialWorld()),
    new GeneratorOption([90, 93], Backgrounds.Bureaucrat()),
    new GeneratorOption([94, 97], Backgrounds.WastelandNomads()),
    new GeneratorOption([97, 100], Backgrounds.AlienCulture())
]);
CharacterGenerator.GenerateMotivation = () => Generator(d100, [
    new GeneratorOption([1, 8], Motivations.Wealth()),
    new GeneratorOption([9, 14], Motivations.Fame()),
    new GeneratorOption([15, 19], Motivations.Glory()),
    new GeneratorOption([20, 26], Motivations.Survival()),
    new GeneratorOption([27, 32], Motivations.Escape()),
    new GeneratorOption([33, 39], Motivations.Adventure()),
    new GeneratorOption([40, 44], Motivations.Truth()),
    new GeneratorOption([45, 49], Motivations.Technology()),
    new GeneratorOption([50, 56], Motivations.Discovery()),
    new GeneratorOption([57, 63], Motivations.Loyalty()),
    new GeneratorOption([64, 69], Motivations.Revenge()),
    new GeneratorOption([70, 74], Motivations.Romance()),
    new GeneratorOption([75, 79], Motivations.Faith()),
    new GeneratorOption([80, 84], Motivations.Political()),
    new GeneratorOption([85, 90], Motivations.Power()),
    new GeneratorOption([91, 95], Motivations.Order()),
    new GeneratorOption([96, 100], Motivations.Freedom())
]);
CharacterGenerator.GenerateClass = () => Generator(d100, [
    new GeneratorOption([1, 5], Classes.WorkingClass()),
    new GeneratorOption([6, 9], Classes.Technician()),
    new GeneratorOption([10, 13], Classes.Scientist()),
    new GeneratorOption([14, 17], Classes.Hacker()),
    new GeneratorOption([18, 22], Classes.Soldier()),
    new GeneratorOption([23, 27], Classes.Mercenary()),
    new GeneratorOption([28, 32], Classes.Agitator()),
    new GeneratorOption([33, 36], Classes.Primitive()),
    new GeneratorOption([37, 40], Classes.Artist()),
    new GeneratorOption([41, 44], Classes.Negotiator()),
    new GeneratorOption([45, 49], Classes.Trader()),
    new GeneratorOption([50, 54], Classes.StarshipCrew()),
    new GeneratorOption([55, 58], Classes.PettyCriminal()),
    new GeneratorOption([59, 63], Classes.Ganger()),
    new GeneratorOption([64, 67], Classes.Scoundrel()),
    new GeneratorOption([68, 71], Classes.Enforcer()),
    new GeneratorOption([72, 75], Classes.SpecialAgent()),
    new GeneratorOption([76, 79], Classes.Troubleshooter()),
    new GeneratorOption([80, 83], Classes.BountyHunter()),
    new GeneratorOption([84, 88], Classes.Nomad()),
    new GeneratorOption([89, 92], Classes.Explorer()),
    new GeneratorOption([93, 96], Classes.Punk()),
    new GeneratorOption([97, 100], Classes.Scavenger())
]);

class ShipGenerator {
}
ShipGenerator.Generate = () => Generator(d100, [
    new GeneratorOption([1, 12], Ships.WornFreighter()),
    new GeneratorOption([13, 18], Ships.RetiredTroopTransport()),
    new GeneratorOption([19, 23], Ships.StrangeAlienVessel()),
    new GeneratorOption([24, 31], Ships.UpgradedShuttle()),
    new GeneratorOption([32, 38], Ships.RetiredScoutShip()),
    new GeneratorOption([39, 45], Ships.RepurposedScienceVessel()),
    new GeneratorOption([46, 56], Ships.BatteredMiningShip()),
    new GeneratorOption([57, 65], Ships.UnreliableMerchantCruiser()),
    new GeneratorOption([66, 70], Ships.FormerDiplomaticVessel()),
    new GeneratorOption([71, 76], Ships.AncientLowTechCraft()),
    new GeneratorOption([77, 84], Ships.BuiltFromSalvagedWrecks()),
    new GeneratorOption([85, 95], Ships.WornColonyShip()),
    new GeneratorOption([96, 100], Ships.RetiredMilitaryPatrolShip())
]);

class Campaign {
    constructor(config, resources) {
        this.id = Symbol();
        this.name = config.name;
        this.crewSize = config.crewSize;
        this.useStory = config.useStory;
        this.useStars = config.useStars;
        this.difficulty = config.difficulty;
        this.crew = config.crew;
        this.ship = config.ship;
        this.victory = config.victory;
        this.resources = resources;
    }
}

class Crew {
    constructor() {
        this.stash = [];
        this._leader = null;
        this._roster = new Array();
        this.clearRoster = () => this._roster = this.roster.length > 0
            ? this._roster = new Array()
            : this.roster;
        this.addCharacter = (character) => !(this.roster.some(c => c.id === character.id))
            && this.roster.push(character);
        this.addCharacters = (characters) => characters.forEach(c => this.addCharacter(c));
        this.removeCharacter = (character) => this._roster = this.roster.filter(c => !(c.id === character.id));
        this.removeCharacters = (characters) => this._roster = this.roster.filter(c => !characters.includes(c));
    }
    get leader() { return this._leader; }
    set leader(character) {
        if (this._leader && character)
            return;
        this._leader = character;
        if (character)
            character.promoteLeader();
    }
    get roster() { return this._roster; }
}

class CampaignConfig {
    constructor(name) {
        this.minCrew = 4;
        this.maxCrew = 6;
        this._name = '';
        this._crewSize = 6;
        this._useStars = true;
        this._useStory = true;
        this._difficulty = Difficulty.Normal;
        this.crew = new Crew();
        this.crewSizeOptions = [4, 5, 6];
        this.savvyUpgradeOptions = [0, 1, 2, 3];
        this.victory = null;
        this.leader = null;
        this.savvyUpgrades = 3;
        this.victoryConditions = AvailableVictoryConditions(this.difficulty);
        this.containsVictory = (victory) => this.victoryConditions
            .map(v => v.value)
            .includes(victory);
        this.updateVictory = (difficulty) => {
            this.victoryConditions = AvailableVictoryConditions(difficulty);
            if (this.victory && !this.containsVictory(this.victory))
                this.victory = null;
        };
        this.initStoryPoints = () => {
            const roll = d6();
            switch (this.difficulty) {
                case Difficulty.Insanity:
                    return 0;
                case Difficulty.Hardcore:
                    return roll;
                default:
                    return roll + 1;
            }
        };
        this.initRoster = () => {
            if (this.crew.roster.length > 0)
                this.crew.clearRoster();
            this.crew.addCharacters(CharacterGenerator.GenerateRoster(this.crewSize));
        };
        this.finalize = () => {
            var _a, _b;
            console.log('Finalizing campaign...');
            this.ship = ShipGenerator.Generate();
            console.log('Ship', this.ship);
            const resources = new CampaignResource();
            let savvyUpgrades = 0;
            for (let character of this.crew.roster) {
                const res = CharacterGenerator.DevelopCharacter(character);
                resources.consolidate([res.resources]);
                if (res.savvyUpgraded)
                    savvyUpgrades += 1;
            }
            this.savvyUpgrades = savvyUpgrades >= this.savvyUpgrades
                ? this.savvyUpgrades
                : savvyUpgrades;
            resources.storyPoints = (this.difficulty === Difficulty.Insanity || !this.useStory)
                ? 0
                : resources.storyPoints;
            resources.storyPoints = ((_a = resources.storyPoints) !== null && _a !== void 0 ? _a : 0) + this.initStoryPoints();
            resources.credits = ((_b = resources.credits) !== null && _b !== void 0 ? _b : 0) + this.crewSize;
            this.crew.stash.push(...EquipmentGenerator.GenerateStash(this.savvyUpgrades));
            this.crew.leader = this.leader;
            console.log('Campaign Resources', resources);
            console.log('Savvy Upgrades', savvyUpgrades);
            console.log('Leader', this.leader);
            console.log('Crew', this.crew);
            return new Campaign(this, resources);
        };
        this.name = name;
        this.initRoster();
    }
    get name() { return this._name; }
    get crewSize() { return this._crewSize; }
    get useStars() { return this._useStars; }
    get useStory() { return this._useStory; }
    get difficulty() { return this._difficulty; }
    set name(value) { this._name = value; }
    set crewSize(value) {
        this._crewSize = value > this.maxCrew
            ? this.maxCrew
            : value < this.minCrew
                ? this.minCrew
                : value;
        this.initRoster();
    }
    set useStars(value) {
        this._useStars = this.difficulty === Difficulty.Insanity
            ? false
            : value;
    }
    set useStory(value) {
        this._useStory = this.difficulty === Difficulty.Insanity
            ? false
            : value;
    }
    set difficulty(value) {
        this._difficulty = value;
        this.updateVictory(value);
        if (value === Difficulty.Insanity) {
            this.useStars = false;
            this.useStory = false;
        }
    }
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