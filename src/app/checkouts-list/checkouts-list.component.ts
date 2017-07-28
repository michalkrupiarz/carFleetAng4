import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CheckoutService} from '../checkout/checkout.service';
import {Checkout} from '../checkout.model';

@Component({
  selector: 'app-checkouts-list',
  templateUrl: './checkouts-list.component.html',
  styleUrls: ['./checkouts-list.component.css']
})
export class CheckoutsListComponent implements OnInit {

  constructor(private cS:CheckoutService) { }
    private allCheckouts:Checkout[];
  ngOnInit() {
    this.getAllCheckouts();
  }

  getAllCheckouts(){
    this.cS.getAllCheckouts().subscribe((source)=>{
      this.allCheckouts=source;
    })
  }
}
