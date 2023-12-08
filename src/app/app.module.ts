import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { LayoutComponent } from './components/layout/layout/layout.component';
// import { NewOrderComponent } from './components/layout/waiter/new-order/new-order.component';
// import { CardComponent } from './components/layout/waiter/card/card.component';
// import { AvailableProductsComponent } from './components/layout/waiter/available-products/available-products.component';
// import { ProductsOrderComponent } from './components/layout/waiter/products-order/products-order.component';
// import { TicketOrderComponent } from './components/layout/waiter/ticket-order/ticket-order.component';
// import { OrdersComponent } from './components/layout/shared/orders/orders.component';
// import { WaiterDashboardComponent } from './components/layout/waiter/waiter-dashboard/waiter-dashboard.component';
// import { ChefDashboardComponent } from './components/layout/chef/chef-dashboard/chef-dashboard.component';
// import { ChefHomeComponent } from './components/layout/chef/chef-home/chef-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // LayoutComponent,
    RegisterComponent,
    ErrorComponent,
    // NewOrderComponent,
    // CardComponent,
    // AvailableProductsComponent,
    // ProductsOrderComponent,
    // TicketOrderComponent,
    // OrdersComponent,
    // WaiterDashboardComponent,
    // ChefDashboardComponent,
    // ChefHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
