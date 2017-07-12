import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Car} from './car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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

  constructor (private http:Http){
  }

  getAllCars():void{
    this.loading = true;
    this.http.request(this.allCarsUrl)
    .subscribe((res: Response)=>{
      this.data = res.json();
      this.loading=false;
    });



    }

    getCarsWithClass():void{
      this.gAC().subscribe((cars)=>{
        console.log(cars);
        this.carResult = cars;
      });
    }

    gAC(){
      return this.http.get(this.allCarsUrl).map(r=>r.json());
    }

    getAllCarsWithCarClass():Observable<Car[]>{
      return this.http.get(this.allCarsUrl).map((r:Response)=>{
        return(<any>r.json()).items.map(item=>{
          return new Car({
            id:item.id,
            carName:item.carName,
            carRegistration:item.carRegistration
          });
        });
      });
    }
  }
