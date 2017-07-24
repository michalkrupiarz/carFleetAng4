import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {Car} from '../car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarService} from '../car/car.service';
import {RepairService} from '../repair/repair.service';
import {Event} from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  constructor(private cS: CarService
    ,private rS: RepairService) { }

  private wholeCarsList: Car[];
  private carsWithRepairsPendingList:Car[];
  private carsWithPendingTires:Car[];

  private pendingRepairsNumber:number;
  private wholeCarsListLength:number;
  private pendingTiresNumber:number;

  ngOnInit() {
    this.getWholeCarsList();
    this.getCarsWithPendingRepairsNumber();
    this.getCarsWithPendingTires();
  }

  getWholeCarsList(){
    this.cS.getAllCars()
      .subscribe((source)=>{
        this.wholeCarsList = source;
            this.wholeCarsListLength = this.wholeCarsList.length;
      });
  }
  getCarsWithPendingRepairsNumber(){
    this.cS.getCarsWithPendingRepairs()
      .subscribe((source)=>{this.carsWithRepairsPendingList=source;
        this.pendingRepairsNumber = this.carsWithRepairsPendingList.length;
      });
  }
  getCarsWithPendingTires(){
    this.cS.getCarsWithPendingTires()
    .subscribe((source)=>{
      console.log("getPendingTires ",source);
      this.carsWithPendingTires = source;
    this.pendingTiresNumber = this.carsWithPendingTires.length
    });
  }

}
