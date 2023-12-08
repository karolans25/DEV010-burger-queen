import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
// import { AuthGuard } from 'src/app/core/guard/auth/auth.guard';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'waiter',
    loadChildren: () => import('./modules/waiter/waiter.module').then(m => m.WaiterModule),
    canLoad: [authGuard], 
    data: { roles: ['waiter'] }
  },
  { path: 'chef',
    loadChildren: () => import('./modules/chef/chef.module').then(m => m.ChefModule),
    canLoad: [authGuard], 
    data: { roles: ['chef'] }
  },
  { path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canLoad: [authGuard], 
    data: { roles: ['admin'] }
  },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
