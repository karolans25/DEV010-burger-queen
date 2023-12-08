import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChefRoutingModule } from './chef-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    OrdersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ChefRoutingModule
  ]
})
export class ChefModule { }
