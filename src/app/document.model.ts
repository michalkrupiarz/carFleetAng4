import {Car} from './car.model';
import {Status} from './status.model';

export class Document {

  id: number;
  type:string;
  expirationDate:Date;
  car:Car;
  status:Status;

  constructor (obj?:any){
    this.id = obj.id;
    this.type = obj.type;
    this.expirationDate = obj.expirationDate;
    this.car = obj.car;
    this.status = obj.status
  }

}
