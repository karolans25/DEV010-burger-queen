import { Component, Input, OnInit } from '@angular/core';
import { ProductInformation } from 'src/app/core/interfaces';

@Component({
  selector: 'app-available-products',
  templateUrl: './available-products.component.html',
  styleUrls: ['./available-products.component.scss']
})
export class AvailableProductsComponent {
  @Input() products !: ProductInformation[];
  @Input() categories !: Set<string>;
}
