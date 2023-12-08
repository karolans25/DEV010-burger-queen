import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from 'src/app/core/guard/auth/auth.guard';
import { NewOrderComponent } from './components/layout/waiter/new-order/new-order.component';
import { OrdersComponent } from './components/layout/shared/orders/orders.component';
import { WaiterDashboardComponent } from './components/layout/waiter/waiter-dashboard/waiter-dashboard.component';
import { ChefDashboardComponent } from './components/layout/chef/chef-dashboard/chef-dashboard.component';
// import { WaiterHomeComponent } from './components/layout/waiter/home/home.component';
import { WaiterHomeComponent } from './components/layout/waiter/waiter-home/waiter-home.component';
import { ChefHomeComponent } from './components/layout/chef/chef-home/chef-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  // { path: 'w',
  // loadChildren: () =>
    // import('./components/layout/waiter/waiter.module').then(
      // (m) => m.WaiterModule
    // ),
    // canActivate: [AuthGuard],
    // canActivate: [AuthGuard, RoleGuard],
    // data: {
    //   allowedRoles: ['mesera'],
    // },
  // },
  {
    path: 'db',
    component: LayoutComponent,
    children:[
      {
        path: 'w',
        loadChildren: () =>
          import('./components/layout/waiter/waiter.module').then(
            (m) => m.WaiterModule
          ),
        // component: WaiterHomeComponent,
        // children:[
        //   { path: 'orders', component: WaiterDashboardComponent },
        //   { path: 'newOrder', component: NewOrderComponent },
        //   // { path: 'c/orders', component: ChefDashboardComponent },
        //   // { path: 'newOrder', component: NewOrderComponent },
        //   // { path: 'orders', component: OrdersComponent }
        // ],
        // canActivate: [AuthGuard]
      },    
      // { path: 'orders', component: WaiterDashboardComponent },
      // { path: 'newOrder', component: NewOrderComponent },
      // { path: 'c/orders', component: ChefDashboardComponent },
      // { path: 'newOrder', component: NewOrderComponent },
      // { path: 'orders', component: OrdersComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'c',
    component: ChefHomeComponent,
    children:[
      { path: 'orders', component: ChefDashboardComponent }
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
