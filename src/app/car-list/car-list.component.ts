import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {Car} from '../car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarService} from '../car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private cS: CarService) { }
  private wholeCarsList: Car[];
  private initView:boolean;
  private initCarsList: Car[];
  ngOnInit() {
    this.setInitCarsList();
    //console.log(this.initCarsList[1]);
  }

  getWholeCarsList(){
    this.cS.getAllCars()
      .subscribe((source)=>{
        console.log("CarLIstComponent GetWholeCarsList ",source);
        this.wholeCarsList = source;
      });
  }

  setInitCarsList(){
    let cars:Car[];
    this.cS.getAllCars()
      .subscribe((source)=>{
        console.log("CarLIstComponent GetWholeCarsList ",source);
        cars = source;
        this.initCarsList = this.firstTwoCars(cars);
      });

  }

  firstTwoCars(list:Car[]):Car[]{
    let newList:Car[];

    return newList;
  }
}
