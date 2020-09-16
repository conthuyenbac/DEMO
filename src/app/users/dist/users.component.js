"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var core_1 = require("@angular/core");
var UserModel_1 = require("../models/UserModel");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(UserService, router) {
        this.UserService = UserService;
        this.router = router;
        this.model = new UserModel_1.UserModel();
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.submitData = function () {
        var _this = this;
        if (this.model.formGroup.valid) {
            this.UserService
                .add({
                username: this.model.username,
                password: this.model.password,
                confirmPassword: this.model.confirmPassword,
                email: this.model.email,
                firstName: this.model.firstName,
                lastName: this.model.lastName,
                organization: "VNPT"
            })
                .subscribe(function (res) { }, function (err) {
                var loi = "";
                for (var i = 0; i < err.error.object.length; i++) {
                    loi = loi + "Lỗi " + (i + 1).toString() + " " + err.error.object[i].fieldName + " " + err.error.object[i].message + " \n";
                }
                alert('Thêm mới không thành công ' + loi);
            }, function () {
                _this.router.navigateByUrl('/login');
            });
        }
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
