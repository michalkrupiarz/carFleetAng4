import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
import {Checkout} from '../checkout.model';

@Injectable()
export class CheckoutService {

  constructor(private dS: DataService) { }
  private getAllCheckoutsUrl = 'getAllCheckouts';
  private postNewCheckoutUrl='addCheckout';
  private checkoutsUpcomingIn = 'getCheckoutsUpcomingIn';

  getAllCheckouts(){
    return this.dS.getData(this.getAllCheckoutsUrl);
  }

  potNewCheckout(body:any){
    return this.dS.postData(this.postNewCheckoutUrl,body);
  }
  getCheckoutsUpcomingIn(days:number){
    return this.dS.getData(this.checkoutsUpcomingIn+'/'+days);
  }
}
