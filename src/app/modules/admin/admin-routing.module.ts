import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from 'src/app/guards/role.guard';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [ roleGuard ], data: { roles: ['admin'] } },
  { path: 'products', component: ProductsComponent, canActivate: [ roleGuard ], data: { roles: ['admin'] } },
  { path: 'users', component: UsersComponent, canActivate: [ roleGuard ], data: { roles: ['admin'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
