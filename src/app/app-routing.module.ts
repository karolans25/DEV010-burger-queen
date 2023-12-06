import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { ErrorComponent } from './components/error/error.component';
import { authGuard } from 'src/app/core/guard/auth/auth.guard';
import { NewOrderComponent } from './components/layout/waiter/new-order/new-order.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children:[
      { path: 'newOrder', component: NewOrderComponent }
    ]
  },
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
