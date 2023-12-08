// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
import { StepperOrientation } from '@angular/cdk/stepper';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DataService } from 'src/app/core/services/data/data.service';
import { CredentialOrder, ProductInformation, TakeProduct } from 'src/app/core/interfaces';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit{
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;
  
  categories!: Set<string>;
  products: ProductInformation[] = [];
  takenProducts: TakeProduct[] = [];
  ticket!: CredentialOrder;
  client: string = '';

  constructor(
    private _formBuilder: FormBuilder,
    // breakpointObserver: ReportingObserver,
    breakpointObserver: BreakpointObserver,
    private data: DataService,
    private router: Router
  ) {
    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(){
    this.data.getAllProducts().subscribe(res => {
      // console.log(res);
      this.products = res as ProductInformation[];
      const cats = this.products.map(item => {
        // console.log(item.image);
        item.image = `url('${item.image}')`;
        // console.log(item.image);
        return item.type;
      });
      this.categories = new Set(cats);
      // console.log(this.categories);
    });
    this.ticket = {
      client: "",
      dataEntry: new Date().toString(),
      products: [],
      status: "pending"
    };
  }

  // drop(event: CdkDragDrop<MatCard[]>){
  // drop(event: CdkDragDrop<ProductInformation[]>){
  //   console.log(event);
  // }

  createTicket(orderProducts: any) {
    this.updateQtyProducts(orderProducts);
    this.ticket = {
      client: this.firstFormGroup.value.firstCtrl || '',
      products: this.takenProducts,
      status: 'pending',
      dataEntry: new Date().toString()
    }
    console.log(this.ticket);
  }

  updateQtyProducts(orderProducts: any) {
    this.takenProducts = [];
    const prods = new Set(orderProducts);
    for (let item of prods) {
      const quantity = orderProducts.filter((p:ProductInformation) => JSON.stringify(p) === JSON.stringify(item)).length;
      this.takenProducts.push({
        qty: quantity,
        product: item as ProductInformation
      });
    }
  }

  createOrder(){
    if(!this.firstFormGroup.valid){
      alert('Please write the client\'s name');
      return new Error('Please write the client\'s name');
    }
    if(this.ticket.products.length < 1){
      alert('Please add at least 1 product');
      return new Error('Please add at least 1 product');
    }
    return this.data.createOrder(this.ticket).subscribe(res => {
      console.log(res);
      alert('Order successfully taken!');
      this.router.navigate(['dashboard/orders']);
    });
  }

}
