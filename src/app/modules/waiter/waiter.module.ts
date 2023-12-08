import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaiterRoutingModule } from './waiter-routing.module';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AvailableProductsComponent } from './components/new-order/available-products/available-products.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProductsOrderComponent } from './components/new-order/products-order/products-order.component';
import { TicketOrderComponent } from './components/new-order/ticket-order/ticket-order.component';


@NgModule({
  declarations: [
    HomeComponent,
    OrdersComponent,
    NewOrderComponent,
    AvailableProductsComponent,
    ProductsOrderComponent,
    TicketOrderComponent,
  ],
  imports: [
    CommonModule,
    WaiterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    DragDropModule,
  ]
})
export class WaiterModule { }
