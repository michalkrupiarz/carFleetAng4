import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {Car} from '../car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarService} from '../car/car.service';
import {RepairService} from '../repair/repair.service';
import {Event} from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  constructor(private cS: CarService
    ,private rS: RepairService) { }
  private wholeCarsList: Car[];
  private pendingRepairsNumber:number;
  private wholeCarsListLength:number;
  ngOnInit() {
    this.getWholeCarsList();
    this.getPendingRepairsNumber();

  }

  getWholeCarsList(){
    this.cS.getAllCars()
      .subscribe((source)=>{
        console.log("CarLIstComponent GetWholeCarsList ",source);
        this.wholeCarsList = source;
            this.wholeCarsListLength = this.wholeCarsList.length;
      });
  }
  getPendingRepairsNumber(){
    this.rS.getAllPendingRepairs()
      .subscribe((source)=>{
        let items:any[];
        items = source;
        this.pendingRepairsNumber = items.length;
      })
  }


}
