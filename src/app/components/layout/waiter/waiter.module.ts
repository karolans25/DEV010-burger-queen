import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomeComponent } from './home/home.component';
import { LayoutComponent } from '../layout/layout.component';
import { MaterialModule } from 'src/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WaiterHomeComponent } from './waiter-home/waiter-home.component';



@NgModule({
  declarations: [
    // HomeComponent,
    LayoutComponent,
    WaiterHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    // BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    // ToastrModule.forRoot(),
    DragDropModule,

  ]
})
export class WaiterModule { }
