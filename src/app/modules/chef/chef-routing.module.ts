import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { roleGuard } from 'src/app/guards/role.guard';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [ roleGuard ], data: { roles: ['chef'] } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChefRoutingModule { }
