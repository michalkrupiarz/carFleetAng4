import { Component, OnInit, Input} from '@angular/core';
import { Checkout } from '../checkout.model';
@Component({
  selector: 'app-checkout-details',
  templateUrl: './checkout-details.component.html',
  styleUrls: ['./checkout-details.component.css']
})
export class CheckoutDetailsComponent implements OnInit {
  @Input() checkouts:Checkout[];
  constructor() { }

  ngOnInit() {
  }

}
