import {Repair} from './repair.model';

export class Car {
  id: number;
  carName:string;
  carRegistration:string;
  repairs:Repair[];


  constructor(obj?:any){
    this.id=obj.id;
    this.carName=obj.carName;
    this.carRegistration = obj.carRegistration;
    this.repairs = obj.repairs;
  }
}
