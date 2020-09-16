"use strict";
exports.__esModule = true;
exports.UserModel = void 0;
var forms_1 = require("@angular/forms");
var UserModel = /** @class */ (function () {
    function UserModel() {
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        this.organization = '';
        this.formGroup = null;
        var fb = new forms_1.FormBuilder();
        this.formGroup = fb.group({
            username: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required),
            confirmPassword: new forms_1.FormControl('', forms_1.Validators.required),
            email: new forms_1.FormControl('', forms_1.Validators.required),
            firstName: new forms_1.FormControl('', forms_1.Validators.required),
            lastName: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    return UserModel;
}());
exports.UserModel = UserModel;
