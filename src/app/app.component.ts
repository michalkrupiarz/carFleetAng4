import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Car} from './car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarService} from './car/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:Object;
  loading:boolean;
  allCarsUrl = 'http://localhost:8100/cfsh/getAllCars';
  carResult: Car[];
  carRes2: Car[];

  constructor (private http:Http,
  private cS: CarService){
  }


    // getCarsWithClass():void{
    //   this.gAC().subscribe((cars)=>{
    //     console.log(cars);
    //     this.carResult = cars;
    //   });
    // }

    gAC(){
      return this.http.get(this.allCarsUrl).map(r=>r.json());
    }
    getAllCarsWithService():void{
     this.cS.getAllCars()
      .subscribe((source)=>{
        console.log("this is car from app component ",source);
        this.carRes2 = source;
      });
    }

  }
