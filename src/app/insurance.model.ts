import {Status} from './status.model';
import {Car} from './car.model';

export class Insurance {
  private id:number;
  private dateStart: Date;
  private dateEnd: Date;
  private cost: number;
  private insCompany: string;
  private payDate : Date;
  private car : Car ;
  private status: Status;

  constructor(obj?:any){
    this.id = obj.id;
    this.dateStart=obj.dateStart;
    this.dateEnd = obj.dateEnd;
    this.cost = obj.cost;
    this.payDate = obj.payDate;
    this.insCompany = obj.insCompany;
    this.car = obj.car;
    this.status = obj.status;
  }
}
