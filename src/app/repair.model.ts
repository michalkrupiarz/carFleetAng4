import {Car} from './car.model';

export class Repair {
  id: number;
  dateStart : Date;
  dateEnd: Date;
  note:String;
  cost:number;
  car:Car;

  constructor (obj?:any){
    this.id = obj.id;
    this.dateStart = obj.dateStart;
    this.dateEnd = obj.dateEnd;
    this.note = obj.note;
    this.cost = obj.cost;
    this.car = obj.car;
  }
}
