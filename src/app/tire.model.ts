import {Car} from './car.model';
import {Status} from './status.model';

export class Repair {
  id:number;
  type: String;
  changeDate: Date;
  car:Car;
  status:Status;
}
