import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {CheckoutService} from '../checkout/checkout.service';
import {Checkout} from '../checkout.model';
import {SortingService} from '../usableServices/sorting.service';

@Component({
  selector: 'app-checkouts-list',
  templateUrl: './checkouts-list.component.html',
  styleUrls: ['./checkouts-list.component.css']
})
export class CheckoutsListComponent implements OnInit {

  constructor(private cS:CheckoutService,private sS:SortingService) { }
    private allCheckouts:Checkout[];
    private names = {
      'reg':false,
      'name':false,
      'start':false,
      'end':false,
      'status':false
    }
  ngOnInit() {
    this.getAllCheckouts();
      console.log('these are checkouts ',this.allCheckouts);
  }

  getAllCheckouts(){
    this.cS.getAllCheckouts().subscribe((source)=>{
      this.allCheckouts=source;
    })
  }

  sortFunction(check:Checkout[],action:string,depth:boolean,objKey:string,fieldName:string){
      this.names[objKey] = !this.names[objKey];
      this.allCheckouts = this.sS.generalSortFunct(check,action,fieldName,depth);
    }

    filterFunction(check:Checkout[],namesKey:string,fieldName:string,fieldValue:string,depth:number){
      this.names[namesKey] = !this.names[namesKey];
        this.allCheckouts = this.sS.generalFilter(check,fieldName,fieldValue,depth);

    }

    clearSorting(namesKey:string){
      this.names[namesKey] = !this.names[namesKey];
      this.getAllCheckouts();
    }
}
