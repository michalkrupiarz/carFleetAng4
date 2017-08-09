import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DataService} from '../data.service';
import {Repair} from '../repair.model';

@Injectable()
export class RepairService {

  constructor(private ds:DataService) { }
  getPendingRepairsUrl = "getPendingRepairs";
  getAllRepairsUrl = "getAllRepairs";
  private postNewRepairUrl = "addRepair";

  getAllPendingRepairs(){
    return this.ds.getData(this.getPendingRepairsUrl);
  }
  getAllRepairs(){
    return this.ds.getData(this.getAllRepairsUrl);
  }
  postNewRepair(body:any){
    console.log('from service',body);
    return this.ds.postData(this.postNewRepairUrl,body);
  }
}
