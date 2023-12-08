import { Component, Input } from '@angular/core';
import { CredentialOrder } from 'src/app/core/interfaces';

interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.scss']
})
export class TicketOrderComponent {
  @Input() ticket !: CredentialOrder;
  @Input() client !: string;

  displayedColumns: string[] = ['Qty', 'Item', 'Type', 'Price', 'Cost'];
  // transactions: Transaction[] = [
  //   {item: 'Beach ball', cost: 4},
  //   {item: 'Towel', cost: 5},
  //   {item: 'Frisbee', cost: 2},
  //   {item: 'Sunscreen', cost: 4},
  //   {item: 'Cooler', cost: 25},
  //   {item: 'Swim suit', cost: 15},
  // ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.ticket.products.map(t => t.qty*t.product.price).reduce((acc, value) => acc + value, 0);
  }
}
