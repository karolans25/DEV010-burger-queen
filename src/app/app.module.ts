import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ToastrModule } from 'ngx-toastr';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LoginComponent } from './components/login/login.component';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';
// import { HomeComponent } from './components/home/home.component';
// import { ErrorComponent } from './components/error/error.component';
// import { RegisterComponent } from './components/register/register.component';
// import { LoginComponent } from './components/login/login.component';
// import { UserListingComponent } from './components/admin/user-listing/user-listing.component';
// import { UpdatePopupComponent } from './components/admin/update-popup/update-popup.component';
// import { OrderListingComponent } from './components/home/order-listing/order-listing.component';
// import { ProductCardComponent } from './components/home/product-card/product-card.component';
// import { OrderTicketComponent } from './components/home/order-ticket/order-ticket.component';
// import { OrderProductsComponent } from './components/home/order-products/order-products.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    RegisterComponent,
    ErrorComponent
    // HomeComponent,
    // ErrorComponent,
    // RegisterComponent,
    // LoginComponent,
    // UserListingComponent,
    // UpdatePopupComponent,
    // OrderListingComponent,
    // ProductCardComponent,
    // OrderTicketComponent,
    // OrderProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ToastrModule.forRoot(),
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
