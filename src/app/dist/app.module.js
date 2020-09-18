"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
//services
var api_1 = require("./services/api");
var account_service_1 = require("./services/account.service");
var admin_component_1 = require("./admin/admin.component");
var category_service_1 = require("./services/category.service");
var category_component_1 = require("./category/category.component");
var category_add_component_1 = require("./category-add/category-add.component");
var category_edit_component_1 = require("./category-edit/category-edit.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var users_component_1 = require("./users/users.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                admin_component_1.AdminComponent,
                category_component_1.CategoryComponent,
                category_add_component_1.CategoryAddComponent,
                category_edit_component_1.CategoryEditComponent,
                dashboard_component_1.DashboardComponent,
                users_component_1.UsersComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule,
                angular_fontawesome_1.FontAwesomeModule
            ],
            providers: [api_1.API, account_service_1.AccountService, category_service_1.CategoryService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
