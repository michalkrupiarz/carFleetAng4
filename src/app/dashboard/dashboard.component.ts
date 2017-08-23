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
import {Repair} from '../repair.model';
import {LendServiceService} from '../lend/lend-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private cars:Car[];

  private pendingRepairsNumber:number;
  private wholeCarsListLength:number;
  private pendingTiresNumber:number;
  private freeCarsNumber:number;
  private takenCarsNumber:number;
  constructor(private cS:CarService,
  private rS:RepairService,
  private lS:LendServiceService) { }

  ngOnInit() {
    this.getWholeCarsList();
    this.getPendingRepairsNumber();
    this.getFreeCarsNumber();
    this.getTakenCarsNumber();
  }

  getWholeCarsList(){
    this.cS.getAllCars()
      .subscribe((source)=>{
        this.cars = source;
            this.wholeCarsListLength = this.cars.length;
            console.log(this.cars);
      });
  }
  getPendingRepairsNumber(){
    let repairs:Repair[];
    this.rS.getAllPendingRepairs()
      .subscribe((source)=>{
        repairs = source;
        console.log('repairs ',repairs);
        this.pendingRepairsNumber = repairs.length;
      })
  }
  getFreeCarsNumber(){
    this.lS.getNumberOfFreeCars().subscribe((s)=>{
      this.freeCarsNumber = s;
    });
  }
  getTakenCarsNumber(){
    this.lS.getNumberOfTakenCars().subscribe((s)=>{
      this.takenCarsNumber = s;
    });
  }
}
