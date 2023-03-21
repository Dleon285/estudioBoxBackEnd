(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-content-pages-content-pages-module"],{

/***/ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Coming soon starts-->\r\n<section id=\"coming-soon\">\r\n  <div class=\"container-fluid gradient-flickr white\">\r\n    <div class=\"row full-height-vh\">\r\n      <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n        <div class=\"card card-transparent box-shadow-0 no-border\">\r\n          <div class=\"card-body\">\r\n            <div class=\"text-center\">\r\n              <h5 class=\"card-text pb-2\">WE ARE LAUNCHING SOON.</h5>\r\n              <img alt=\"avtar\" class=\"img-fluid mb-2\" src=\"assets/img/logos/logo-big-white.png\" width=\"100\">\r\n              <h1>Apex</h1>\r\n              <div id=\"clockFlat\" class=\"card-text getting-started pt-1 mt-2 display-inline-block\">\r\n                <div class=\"clockCard px-3 py-3 mr-3 mb-3 bg-pink bg-darken-2 box-shadow-2\"> <span>57</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Weeks </p>\r\n                </div>\r\n                <div class=\"clockCard px-3 py-3 mr-3 mb-3 bg-pink bg-darken-2 box-shadow-2\"> <span>05</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Days </p>\r\n                </div>\r\n                <div class=\"clockCard px-3 py-3 mr-3 mb-3 bg-pink bg-darken-2 box-shadow-2\"> <span>11</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Hours </p>\r\n                </div>\r\n                <div class=\"clockCard px-2 py-3 mr-3 mb-3 bg-pink bg-darken-2 box-shadow-2\"> <span>12</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Minutes </p>\r\n                </div>\r\n                <div class=\"clockCard px-2 py-3 mr-3 mb-3 bg-pink bg-darken-2 box-shadow-2\"> <span>34</span> <br>\r\n                  <p class=\"lead mt-2 mb-0\"> Seconds </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 pt-1\">\r\n                <p class=\"card-text lead\">Our website is under construction.</p>\r\n              </div>\r\n              <div class=\"col-12 text-center pt-2\">\r\n                <p class=\"socialIcon card-text\">\r\n                  <a class=\"white\"><i class=\"fa fa-facebook-square\"></i></a>\r\n                  <a class=\"white\"><i class=\"fa fa-twitter-square\"></i></a>\r\n                  <a class=\"white\"><i class=\"fa fa-google-plus-square\"></i></a>\r\n                  <a class=\"white\"><i class=\"fa fa-linkedin-square\"></i></a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--Coming soon ends-->"

/***/ }),

/***/ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvY29taW5nLXNvb24vY29taW5nLXNvb24tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ComingSoonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonPageComponent", function() { return ComingSoonPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ComingSoonPageComponent = /** @class */ (function () {
    function ComingSoonPageComponent() {
    }
    ComingSoonPageComponent.prototype.ngOnInit = function () {
        // countdown JS
        $.getScript('./assets/js/coming-soon/jquery.countdown.min.js');
        // coming soon JS start working after page load
        $.getScript('./assets/js/coming-soon/coming-soon.js');
    };
    ComingSoonPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coming-soon-page',
            template: __webpack_require__(/*! ./coming-soon-page.component.html */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon-page.component.scss */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.scss")]
        })
    ], ComingSoonPageComponent);
    return ComingSoonPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/content-pages-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContentPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesRoutingModule", function() { return ContentPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/pages/content-pages/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/pages/content-pages/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/pages/content-pages/register/register-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        children: [
            {
                path: 'comingsoon',
                component: _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_2__["ComingSoonPageComponent"],
                data: {
                    title: 'Coming Soon page'
                }
            },
            {
                path: 'error',
                component: _error_error_page_component__WEBPACK_IMPORTED_MODULE_3__["ErrorPageComponent"],
                data: {
                    title: 'Error Page'
                }
            },
            {
                path: 'forgotpassword',
                component: _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordPageComponent"],
                data: {
                    title: 'Forgot Password Page'
                }
            },
            {
                path: 'lockscreen',
                component: _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_5__["LockScreenPageComponent"],
                data: {
                    title: 'Lock Screen page'
                }
            },
            {
                path: 'login',
                component: _login_login_page_component__WEBPACK_IMPORTED_MODULE_6__["LoginPageComponent"],
                data: {
                    title: 'Login Page'
                }
            },
            {
                path: 'maintenance',
                component: _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_7__["MaintenancePageComponent"],
                data: {
                    title: 'Maintenance Page'
                }
            },
            {
                path: 'register',
                component: _register_register_page_component__WEBPACK_IMPORTED_MODULE_8__["RegisterPageComponent"],
                data: {
                    title: 'Register Page'
                }
            }
        ]
    }
];
var ContentPagesRoutingModule = /** @class */ (function () {
    function ContentPagesRoutingModule() {
    }
    ContentPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ContentPagesRoutingModule);
    return ContentPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/content-pages.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/content-pages/content-pages.module.ts ***!
  \*************************************************************/
/*! exports provided: ContentPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPagesModule", function() { return ContentPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content-pages-routing.module */ "./src/app/pages/content-pages/content-pages-routing.module.ts");
/* harmony import */ var _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coming-soon/coming-soon-page.component */ "./src/app/pages/content-pages/coming-soon/coming-soon-page.component.ts");
/* harmony import */ var _error_error_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error-page.component */ "./src/app/pages/content-pages/error/error-page.component.ts");
/* harmony import */ var _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password-page.component */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts");
/* harmony import */ var _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lock-screen/lock-screen-page.component */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts");
/* harmony import */ var _login_login_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login-page.component */ "./src/app/pages/content-pages/login/login-page.component.ts");
/* harmony import */ var _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./maintenance/maintenance-page.component */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts");
/* harmony import */ var _register_register_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register-page.component */ "./src/app/pages/content-pages/register/register-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ContentPagesModule = /** @class */ (function () {
    function ContentPagesModule() {
    }
    ContentPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["ContentPagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _coming_soon_coming_soon_page_component__WEBPACK_IMPORTED_MODULE_4__["ComingSoonPageComponent"],
                _error_error_page_component__WEBPACK_IMPORTED_MODULE_5__["ErrorPageComponent"],
                _forgot_password_forgot_password_page_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPageComponent"],
                _lock_screen_lock_screen_page_component__WEBPACK_IMPORTED_MODULE_7__["LockScreenPageComponent"],
                _login_login_page_component__WEBPACK_IMPORTED_MODULE_8__["LoginPageComponent"],
                _maintenance_maintenance_page_component__WEBPACK_IMPORTED_MODULE_9__["MaintenancePageComponent"],
                _register_register_page_component__WEBPACK_IMPORTED_MODULE_10__["RegisterPageComponent"]
            ]
        })
    ], ContentPagesModule);
    return ContentPagesModule;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/error/error-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Error page starts-->\r\n<section id=\"error\">\r\n    <div class=\"container-fluid bg-grey bg-lighten-3\">\r\n        <div class=\"container\">\r\n            <div class=\"row full-height-vh\">\r\n                <div class=\"col-md-12 col-lg-3 ml-auto d-flex align-items-center\">\r\n                    <div class=\"row text-center mb-3\">\r\n                        <div class=\"col-12\">\r\n                            <h4 class=\"grey darken-2 font-large-5\">Opps...</h4>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12 col-lg-8 d-flex align-items-center justify-content-center\">\r\n                    <div class=\"error-container\">\r\n                        <div class=\"no-border\">\r\n                            <div class=\"text-center text-bold-700 grey darken-2 mt-5\" style=\"font-size: 11rem; margin-bottom: 4rem;\">404</div>\r\n                        </div>\r\n                        <div class=\"error-body\">\r\n                            <fieldset class=\"row py-2\">\r\n                                <div class=\"col-12\">\r\n                                    <div class=\"text-center text-bold-100 grey darken-2 mt-2\" style=\"font-size: 2rem; margin-bottom: 1rem;\">La pagina que esta buscando no existe</div>\r\n                                </div>\r\n                            </fieldset>\r\n                            <div class=\"row py-2 justify-content-center\">\r\n                                <div class=\"col-8\">\r\n                                    <a class=\"btn btn-brown btn-raised btn-block font-medium-2\" [routerLink]=\"['/pages/login']\"><i class=\"ft-home\"></i> Volver al Login</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"error-footer bg-transparent\">\r\n                            <div class=\"row\">\r\n                                <p class=\"text-muted text-center col-12 py-1\">© Copyright 2019 <a href=\"http://massvision.tv/\" target=\"_blank\">MASSVISION</a>, All rights reserved. </p>\r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Error page ends-->"

/***/ }),

/***/ "./src/app/pages/content-pages/error/error-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvZXJyb3IvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/content-pages/error/error-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/error/error-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/pages/content-pages/error/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/pages/content-pages/error/error-page.component.scss")]
        })
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Forgot Password Starts-->\r\n<section id=\"forgot-password\" style=\"background-image: url('assets/img/photos/restaurante4.jpg');background-size: cover;\">\r\n    <div class=\"container-fluid\" style=\"background-color:rgb(0, 0, 0,0.5)\">\r\n        <div class=\"row text-left full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card bg-blue-grey bg-darken-3 px-4\">\r\n                    <div class=\"card-header\">\r\n                        <div class=\"card-image text-center\">\r\n                            <i class=\"fa fa-key font-large-5 blue-grey lighten-4\"></i>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"text-center\">\r\n                                <h4 class=\"text-uppercase text-bold-400 white\">Recuperar clave</h4>\r\n                            </div>\r\n                            <form class=\"pt-4\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n                                <div class=\"form-group\" align=\"center\">\r\n                                    <p class=\"white\">\r\n                                        Ingrese su dirección de correo electrónico <br>y le enviaremos una clave temporal.\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" name=\"inputEmail\" id=\"inputEmail\" [(ngModel)]=\"correo\" placeholder=\"Su correo electrónico\">\r\n                                </div>\r\n                                <div class=\"form-group pt-2\">\r\n                                    <div class=\"text-center mt-3\">\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-raised btn-block\" (click)=\"enviarCorreo()\">Enviar correo</button>\r\n                                        <button type=\"button\" class=\"btn btn-secondary btn-raised btn-block\" (click)=\"onLogin()\">Volver a Login</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Forgot Password Ends-->"

/***/ }),

/***/ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/content-pages/forgot-password/forgot-password-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ForgotPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageComponent", function() { return ForgotPasswordPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/_services/usuario.service */ "./src/app/_services/usuario.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPasswordPageComponent = /** @class */ (function () {
    function ForgotPasswordPageComponent(router, route, usuarioService) {
        this.router = router;
        this.route = route;
        this.usuarioService = usuarioService;
    }
    // On submit click, reset form fields
    ForgotPasswordPageComponent.prototype.onSubmit = function () {
        this.forogtPasswordForm.reset();
    };
    // On login link click
    ForgotPasswordPageComponent.prototype.onLogin = function () {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    };
    // On registration link click
    ForgotPasswordPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    ForgotPasswordPageComponent.prototype.enviarCorreo = function () {
        var _this = this;
        this.usuarioService.generarPass(this.correo)
            .subscribe(function (data) {
            if (data['status'] == 404) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({ title: 'Error al generar clave', text: data['resultado'], type: "error", showConfirmButton: true })
                    .then(function (result) {
                    if (result.value)
                        _this.router.navigate(['/pages/forgotpassword']);
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({ title: _this.correo, text: data['resultado'], type: "success", showConfirmButton: true })
                    .then(function (result) {
                    if (result.value)
                        _this.router.navigate(['/pages/login']);
                });
            }
        }, function (error) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ForgotPasswordPageComponent.prototype, "forogtPasswordForm", void 0);
    ForgotPasswordPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password-page',
            template: __webpack_require__(/*! ./forgot-password-page.component.html */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-page.component.scss */ "./src/app/pages/content-pages/forgot-password/forgot-password-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
    ], ForgotPasswordPageComponent);
    return ForgotPasswordPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Lock Screen Starts-->\r\n<section id=\"lock-screen\">\r\n    <div class=\"container-fluid gradient-crystal-clear\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card width-400\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-8\">\r\n                            <div class=\"card-title font-medium-5 pt-2 ml-2\">Peter Andil</div>\r\n                        </div>\r\n                        <div class=\"col-sm-4\">\r\n                            <div class=\"text-right card-img overlap\">\r\n                                <img alt=\"avtar\" class=\"mb-1\" src=\"assets/img/portrait/avatars/avatar-03.png\" width=\"150\">\r\n                            </div>                   \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate=\"\">\r\n                                <div class=\"form-group mt-3\">\r\n                                    <h3 class=\"text-center text-uppercase text-bold-400\">Unlock User</h3>\r\n                                </div>\r\n                                <div class=\"form-group pt-3\">\r\n                                    <input type=\"password\" class=\"form-control\" id=\"inputPass\" name=\"inputPass\" placeholder=\"Password\" ngModel required>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"text-center mt-3\">\r\n                                        <button type=\"button\" class=\"btn btn-info btn-raised btn-lg py-1 mt-3 font-small-5 btn-block\">Unlock</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Lock Screen Ends-->"

/***/ }),

/***/ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvbG9jay1zY3JlZW4vbG9jay1zY3JlZW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/lock-screen/lock-screen-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LockScreenPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockScreenPageComponent", function() { return LockScreenPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockScreenPageComponent = /** @class */ (function () {
    function LockScreenPageComponent() {
    }
    LockScreenPageComponent.prototype.onSubmit = function () {
        this.lockScreenForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LockScreenPageComponent.prototype, "lockScreenForm", void 0);
    LockScreenPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock-screen-page',
            template: __webpack_require__(/*! ./lock-screen-page.component.html */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.html"),
            styles: [__webpack_require__(/*! ./lock-screen-page.component.scss */ "./src/app/pages/content-pages/lock-screen/lock-screen-page.component.scss")]
        })
    ], LockScreenPageComponent);
    return LockScreenPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/login/login-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\r\n<section id=\"login\" [style.background]=\"'url('+ruta_bg+')'\" style.background-size=\"{{'cover'}}\">\r\n    <div class=\"container-fluid\" style=\"background-color:rgb(0, 0, 0,0.5)\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card gradient-massvision text-center width-400\">\r\n                    <div class=\"card-img \">\r\n                        <img alt=\"element 06\" class=\"mb-1 mt-3\" src=\"assets/img/logos/estudioBoxLogo.png\" width=\"190\">\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <h2 class=\"white\">Bienvenido</h2>\r\n                            <form novalidate=\"\" (ngSubmit)=\"login()\" #f=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"text\" class=\"form-control\" name=\"inputEmail\" id=\"inputEmail\"\r\n                                            placeholder=\"Email\" [(ngModel)]=\"user.strCorreo\" required>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"password\" class=\"form-control\" name=\"inputPass\" id=\"inputPass\"\r\n                                            placeholder=\"Password\" [(ngModel)]=\"user.strContrasenia\" required>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <button type=\"submit\" class=\"btn btn-block btn-raised\"\r\n                                            style=\"background-color: #65a8ea;color: #ffffff\">Iniciar Sesion</button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12 text-center\">\r\n                                        <div *ngIf=\"loading\" style=\"width: 3rem; height: 3rem;\"\r\n                                            class=\"spinner-border text-default\" role=\"status\">\r\n                                            <span class=\"sr-only\">Loading...</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer\">\r\n                        <div class=\"float-left\"><a (click)=\"onForgotPassword()\" class=\"white\">Recuperar Contraseña</a>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"col-md-12\">\r\n                            <button type=\"submit\" class=\"btn btn-block btn-raised\"\r\n                                style=\"background-color: #FF8C00;color: #ffffff\"><a\r\n                                    href=\"https://la.bitte.app/descargar-app/\" class=\"white\">Descargar\r\n                                    EstudioBox</a></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Login Page Ends-->"

/***/ }),

/***/ "./src/app/pages/content-pages/login/login-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvbG9naW4vbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/content-pages/login/login-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/content-pages/login/login-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/_services/login.service */ "./src/app/_services/login.service.ts");
/* harmony import */ var app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/_services/usuario.service */ "./src/app/_services/usuario.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, route, toastr, objLoginService, usuarioService) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.objLoginService = objLoginService;
        this.usuarioService = usuarioService;
        this.user = {
            strCorreo: '',
            strContrasenia: ''
        };
        toastr.toastrConfig.timeOut = 3000;
        this.ruta_bg = "assets/img/photos/";
        this.num_bg = (Math.floor(Math.random() * 3) + 1);
        this.ruta_bg += this.num_bg == 1 ? 'fondo.jpg' : this.num_bg == 2 ? 'fondo.jpg' : 'fondo.jpg';
        this.permisos = [];
        this.loading = false;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('usuario');
        localStorage.removeItem('permisos');
    };
    // On submit button click    
    LoginPageComponent.prototype.onSubmit = function () {
    };
    // On Forgot password link click
    LoginPageComponent.prototype.onForgotPassword = function () {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    };
    // On registration link click
    LoginPageComponent.prototype.onRegister = function () {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    };
    LoginPageComponent.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loading = true;
            this.objLoginService.getLogin(this.user)
                .subscribe(function (data) {
                if (data["intStatus"] != 200) {
                    _this.loading = false;
                    _this.toastr.warning(data["strMensaje"], 'Datos incorrectos');
                }
                else {
                    localStorage.setItem('usuario', JSON.stringify(data["arrayUsuario"]));
                    _this.getPermisos(data["arrayUsuario"]['intIdUsuario']);
                }
            }, function (error) {
                _this.toastr.warning('Hubo un error, por favor comuníquese con el departamento de sistemas.', 'Error');
                _this.loading = false;
            });
        }
        else {
            this.toastr.warning('Ingrese usuario y contraseña', 'Datos incompletos');
        }
    };
    LoginPageComponent.prototype.getPermisos = function (idUsuario) {
        var _this = this;
        this.usuarioService.getPermisosByUsuario(idUsuario)
            .subscribe(function (data) {
            if (data["intStatus"] != 200) {
                _this.loading = false;
                _this.toastr.warning(data["strMensaje"], 'Datos incorrectos');
            }
            else {
                _this.loading = false;
                _this.permisos = data['arrayPerfil'];
                localStorage.setItem('permisos', JSON.stringify(data['arrayPerfil']));
                _this.router.navigate(['/dashboard/dashboard1']);
            }
        }, function (error) {
            _this.loading = false;
            _this.toastr.warning('Hubo un error, por favor comuníquese con el departamento de sistemas.', 'Error');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], LoginPageComponent.prototype, "loginForm", void 0);
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/content-pages/login/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/content-pages/login/login-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/maintenance/maintenance-page.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Under Maintenance Starts-->\r\n<section id=\"maintenance\">\r\n    <div class=\"container-fluid gradient-ibiza-sunset\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card border-grey border-lighten-3 px-1 py-1 box-shadow-3\">\r\n                    <div class=\"card-block\">\r\n                        <span class=\"card-title text-center\">\r\n                        <img alt=\"avtar\" class=\"img-fluid mx-auto d-block pt-2 mb-1\" src=\"assets/img/logos/logo-color-big.png\" width=\"100\">\r\n                    </span>\r\n                    </div>\r\n                    <div class=\"card-block text-center\">\r\n                        <h3>This page is under maintenance</h3>\r\n                        <p>We're sorry for the inconvenience.\r\n                            <br> Please come back later.</p>\r\n                        <div class=\"mt-2\"><i class=\"fa fa-cog spinner font-large-2\"></i></div>\r\n                    </div>\r\n                    <hr>\r\n                    <p class=\"socialIcon card-text text-center pt-2 pb-2\">\r\n                        <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-facebook\">\r\n                        <span class=\"fa fa-facebook\"></span>\r\n                    </a>\r\n                        <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-twitter\">\r\n                        <span class=\"fa fa-twitter\"></span>\r\n                    </a>\r\n                        <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-linkedin\">\r\n                        <span class=\"fa fa-linkedin font-medium-4\"></span>\r\n                    </a>\r\n                        <a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-github\">\r\n                        <span class=\"fa fa-github font-medium-4\"></span>\r\n                    </a>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Under Maintenance Starts-->"

/***/ }),

/***/ "./src/app/pages/content-pages/maintenance/maintenance-page.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvbWFpbnRlbmFuY2UvbWFpbnRlbmFuY2UtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/content-pages/maintenance/maintenance-page.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/content-pages/maintenance/maintenance-page.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MaintenancePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenancePageComponent", function() { return MaintenancePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MaintenancePageComponent = /** @class */ (function () {
    function MaintenancePageComponent() {
    }
    MaintenancePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintenance-page',
            template: __webpack_require__(/*! ./maintenance-page.component.html */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.html"),
            styles: [__webpack_require__(/*! ./maintenance-page.component.scss */ "./src/app/pages/content-pages/maintenance/maintenance-page.component.scss")]
        })
    ], MaintenancePageComponent);
    return MaintenancePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/content-pages/register/register-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Registration Page Starts-->\r\n<section id=\"regestration\">\r\n    <div class=\"container\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row d-flex\">\r\n                            <div class=\"col-12 col-sm-12 col-md-6 gradient-deep-orange-orange\">\r\n                                <div class=\"card-block\">\r\n                                    <div class=\"card-img overlap\">  \r\n                                        <img alt=\"Card image cap\" src=\"assets/img/elements/13.png\" width=\"350\" class=\"mx-auto d-block\">\r\n                                    </div>\r\n                                    <h2 class=\"card-title font-large-1 text-center white mt-3\">Registration</h2>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-12 col-sm-12 col-md-6 d-flex align-items-center\">\r\n                                <div class=\"card-block mx-auto\">\r\n                                    <form   (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n                                        <div class=\"input-group mb-3\">\r\n                                            <div class=\"input-group-prepend\">\r\n                                                <span class=\"input-group-text\">\r\n                                                    <i class=\"icon-user\"></i>\r\n                                                </span>\r\n                                            </div>\r\n                                            <input type=\"text\" class=\"form-control\" name=\"fname\" id=\"fname\" placeholder=\"Name\" ngModel required >\r\n                                        </div>\r\n                                        <div class=\"input-group mb-3\">\r\n                                            <div class=\"input-group-prepend\">\r\n                                                <span class=\"input-group-text\">\r\n                                                    <i class=\"ft-mail\"></i>\r\n                                                </span>\r\n                                            </div>\r\n                                            <input type=\"email\" class=\"form-control\" name=\"inputEmail\" id=\"inputEmail\" placeholder=\"Email\" ngModel required email >\r\n                                        </div>\r\n                                        <div class=\"input-group mb-3\">\r\n                                            <div class=\"input-group-prepend\">\r\n                                                <span class=\"input-group-text\">\r\n                                                    <i class=\"ft-lock\"></i>\r\n                                                </span>\r\n                                            </div>\r\n                                            <input type=\"password\" class=\"form-control\" name=\"inputPass\" id=\"inputPass\" placeholder=\"Password\" ngModel required >\r\n                                        </div>\r\n                                        <div class=\"form-group col-sm-offset-1\">\r\n                                            <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                                                <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"terms\">\r\n                                                <label class=\"custom-control-label pl-2\" for=\"terms\">I agree <a>terms and conditions</a></label>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"form-group text-center\">\r\n                                            <button type=\"button\" class=\"btn btn-warning btn-raised\" [disabled]=\"!f.valid\">Get Started</button>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Registration Page Ends-->"

/***/ }),

/***/ "./src/app/pages/content-pages/register/register-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register-page.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRlbnQtcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXItcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/content-pages/register/register-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/content-pages/register/register-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent() {
    }
    //  On submit click, reset field value
    RegisterPageComponent.prototype.onSubmit = function () {
        this.registerForm.reset();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], RegisterPageComponent.prototype, "registerForm", void 0);
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/content-pages/register/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.scss */ "./src/app/pages/content-pages/register/register-page.component.scss")]
        })
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-content-pages-content-pages-module.js.map