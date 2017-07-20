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

  getAllPendingRepairs(){
    return this.ds.getData(this.getPendingRepairsUrl);
  }
  getAllRepairs(){
    return this.ds.getData(this.getAllRepairsUrl);
  }
}
