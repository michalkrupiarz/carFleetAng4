import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DataService} from '../data.service';
import {Car} from '../car.model';

@Injectable()
export class CarService {

  constructor(private ds:DataService) { }
  cars: Car[];
  getAllCarsUlr='http://localhost:8100/cfsh/getAllCars';

  getAllCars(){
  return this.ds.getData(this.getAllCarsUlr);
    // .subscribe((cars)=>{
      // console.log("cars from service ",cars);
      // this.cars = cars;
  // });

  }

}
