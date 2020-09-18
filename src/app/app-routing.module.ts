import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  LoginComponent
} from './login/login.component';
import {
  AdminComponent
} from './admin/admin.component';
import {
  AuthGuard
} from './guards/auth.guard';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  UsersComponent
} from './users/users.component';
import {
  CategoryComponent
} from './category/category.component';
import {
  CategoryAddComponent
} from './category-add/category-add.component';
import {
  CategoryEditComponent
} from './category-edit/category-edit.component';
import {
  ProductComponent
} from './product/product.component';
import {
  ProductAddComponent
} from './product-add/product-add.component';
import {
  ProductEditComponent
} from './product-edit/product-edit.component';

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'user',
    component: UsersComponent
  },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'create_category',
    component: CategoryAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'edit_category/:id',
    component: CategoryEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
