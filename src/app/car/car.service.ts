import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DataService} from '../data.service';
import {Car} from '../car.model';

@Injectable()
export class CarService {

  constructor(private ds:DataService) { }
  private cars: Car[];
  private getAllCarsUrl='getAllCars';
  private getCarsWithWithPendingRepairsUrl= 'getAllCarsWithPendingRepairs';
  private getCarsWithPendingTiresChangeUrl= 'getAllCarsWithPendingTires';
  getAllCars(){
  return this.ds.getData(this.getAllCarsUrl);
  }
  getCarsWithPendingRepairs(){
   return this.ds.getData(this.getCarsWithWithPendingRepairsUrl);
  }
  getCarsWithPendingTires(){
    return this.ds.getData(this.getCarsWithPendingTiresChangeUrl);
  }
}
