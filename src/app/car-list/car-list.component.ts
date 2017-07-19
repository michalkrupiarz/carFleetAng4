import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {Car} from '../car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarService} from '../car/car.service';
import {Event} from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
@NgModule({
  imports: [CollapseModule.forRoot()]
})
export class CarListComponent implements OnInit {

  constructor(private cS: CarService) { }
  private wholeCarsList: Car[];
  private initView:boolean;
  private initCarsList: Car[];
   public isCollapsed:boolean = false;
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
        this.initCarsList = this.firstTwoCars(cars,3);
      });

  }

  firstTwoCars(list:Car[],items:number):Car[]{
    let newList:Car[];
    newList = [];
    let i=0;
    for (i=0; i<items ;i++){
      newList.push(list[i]);
    }
    return newList;
  }
  public collapsed(event:any):void {
    console.log(event);
  }
  public expanded(event:any):void {
    console.log(event);
  }
}
