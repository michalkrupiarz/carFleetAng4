import {Car} from './car.model';
import {Status} from './status.model';

export class Tire {
  id:number;
  type: String;
  changeDate: Date;
  car:Car;
  status:Status;

  constructor (obj?:any){
    this.id = obj.id;
    this.type = obj.type;
    this.changeDate = obj.changeDate;
    this.car = obj.car;
    this.status = obj.status;
  }
}
