"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.username = '';
        this.password = '';
        this.message = '';
        this.login = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (parseInt(this.accountService.getLogin()) == 1) {
            this.login = false;
        }
    };
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        var result;
        this.accountService.login(this.username, this.password).subscribe(function (res) {
            result = res;
        }, function (err) {
            _this.message = err.error.message;
        }, function () {
            _this.accountService.setToken(result.object.accessToken);
            _this.accountService.setLogin(1);
            _this.accountService.setACC(result.object.userName);
            if (_this.username !== 'thanh') {
                _this.router.navigateByUrl('/dashboard');
            }
            else {
                _this.router.navigateByUrl('/admin');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
