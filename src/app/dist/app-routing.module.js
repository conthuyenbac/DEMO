"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var login_component_1 = require("./login/login.component");
var admin_component_1 = require("./admin/admin.component");
var auth_guard_1 = require("./guards/auth.guard");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var users_component_1 = require("./users/users.component");
var category_component_1 = require("./category/category.component");
var category_add_component_1 = require("./category-add/category-add.component");
var category_edit_component_1 = require("./category-edit/category-edit.component");
var product_component_1 = require("./product/product.component");
var product_add_component_1 = require("./product-add/product-add.component");
var product_edit_component_1 = require("./product-edit/product-edit.component");
var routes = [{
        path: '',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard]
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard]
    },
    {
        path: 'user',
        component: users_component_1.UsersComponent
    },
    {
        path: 'category',
        component: category_component_1.CategoryComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard]
    },
    {
        path: 'create_category',
        component: category_add_component_1.CategoryAddComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard]
    },
    {
        path: 'edit_category/:id',
        component: category_edit_component_1.CategoryEditComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard]
    },
    {
        path: 'product',
        component: product_component_1.ProductComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard]
    },
    {
        path: 'product-add',
        component: product_add_component_1.ProductAddComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard]
    },
    {
        path: 'product-edit/:id',
        component: product_edit_component_1.ProductEditComponent,
        canActivate: [auth_guard_1.AuthGuard],
        canActivateChild: [auth_guard_1.AuthGuard]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
