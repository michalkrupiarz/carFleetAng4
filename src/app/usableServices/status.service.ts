import { Injectable } from '@angular/core';
import {DataService} from '../data.service';
@Injectable()
export class StatusService {
  private getStatusesUrl = "getAllStatuses";
  constructor(private ds:DataService) { }
  getAllStatuses(){
    return this.ds.getData(this.getStatusesUrl);
  }
}
