import {Car} from './car.model';
import {Status} from './status.model';

export class Lend {
  id:number;
  lendStart:Date;
  lendEnd:Date;
  person:String;
  status:Status;

  constructor(obj?:any){
    this.id = obj.id;
    this.lendStart=obj.lendStart;
    this.lendEnd = obj.lendEnd;
    this.person = obj.person;
    this.status = obj.status;
  }

}
