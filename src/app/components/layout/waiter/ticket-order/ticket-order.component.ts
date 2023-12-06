import { Component, Input } from '@angular/core';
import { CredentialOrder } from 'src/app/core/interfaces';

@Component({
  selector: 'app-ticket-order',
  templateUrl: './ticket-order.component.html',
  styleUrls: ['./ticket-order.component.scss']
})
export class TicketOrderComponent {
  @Input() ticket !: CredentialOrder;

  
}
