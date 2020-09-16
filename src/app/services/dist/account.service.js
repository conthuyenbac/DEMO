"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountService = void 0;
var core_1 = require("@angular/core");
var AccountService = /** @class */ (function () {
    function AccountService(api //inject API class
    ) {
        this.api = api;
    }
    AccountService.prototype.login = function (username, password) {
        return this.api.post('/api/Account/login', {
            "username": username,
            "password": password
        });
    };
    AccountService.prototype.setToken = function (token) {
        return localStorage.setItem('token', token);
    };
    AccountService.prototype.setLogin = function (token) {
        return localStorage.setItem('isLogged', token);
    };
    AccountService.prototype.setACC = function (acc) {
        return localStorage.setItem('UserName', acc);
    };
    AccountService.prototype.getToken = function () {
        return localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
    };
    AccountService.prototype.getLogin = function () {
        return localStorage.getItem('isLogged') ? localStorage.getItem('isLogged') : sessionStorage.getItem('isLogged');
    };
    AccountService.prototype.getAcc = function () {
        return localStorage.getItem('UserName') ? localStorage.getItem('UserName') : sessionStorage.getItem('UserName');
    };
    AccountService.prototype.clearLocalStorage = function () {
        localStorage.removeItem('token');
        localStorage.setItem("isLogged", "0");
        localStorage.setItem('UserName', "");
        location.reload(true);
    };
    AccountService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
