import {Repair} from './repair.model';
import {Checkout} from './checkout.model';
import {Insurance} from './insurance.model';
import {Lend} from './lend.model';
import {Document} from './document.model';
import {Tire} from './tire.model';

export class Car {
  id: number;
  carName:string;
  carRegistration:string;
  repairs:Repair[];
  checkouts:Checkout[];
  insurances:Insurance[];
  lends: Lend[];
  documents: Document[];
  tires: Tire[];


  constructor(obj?:any){
    this.id=obj.id;
    this.carName=obj.carName;
    this.carRegistration = obj.carRegistration;
    this.repairs = obj.repairs;
    this.checkouts = obj.checkouts;
    this.insurances = obj.insurances;
    this.lends = obj.lends;
    this.documents = obj.documents;
    this.tires = obj.tires;
  }
}
