import { Component, OnInit,EventEmitter,Output,Input } from '@angular/core';
import {Response} from '@angular/http';
import {Car} from '../car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarService} from '../car/car.service';
import {RepairService} from '../repair/repair.service';
import {Event} from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {SortingService} from '../usableServices/sorting.service';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {
  @Output() pickedCar:EventEmitter<Car> = new EventEmitter<Car>();

  constructor(private cS: CarService
    ,private rS: RepairService,
    private sS:SortingService) { }

  private wholeCarsList: Car[];
  private carsWithRepairsPendingList:Car[];
  private carsWithPendingTires:Car[];

  private pendingRepairsNumber:number;
  private wholeCarsListLength:number;
  private pendingTiresNumber:number;

  private alphSortedNames:boolean = true;
  private alphSortedReg:boolean = true;
  private filteredByRepairs:boolean = false;
  private lendsAllCars:boolean  = true;
  private takenCars:boolean = false;
  private freeCars:boolean = false;
  private checkoutsFiltr:boolean = false;
  private insurancesFilter:boolean = false;
  private tiresFilter:boolean = false;
  private isExpanded:boolean=true;

  private names = {'mark':false,
'registration':false,
'repairs':false,
'lendsAll':false,
'lendsOut':false,
'lendsIn':false,
'checkouts':false,
'insurances':false,
'tires':false,
'documents':false};

  ngOnInit() {
    this.getWholeCarsList();
    this.getCarsWithPendingRepairsNumber();
    this.getCarsWithPendingTires();
  }

  oneFunction(cars:Car[],action:string,isCar:boolean,objKey:string,fieldName:string){
    this.names[objKey] = !this.names[objKey];
    this.wholeCarsList = this.sS.generalSortFunct(cars,action,fieldName,isCar);
  }

  filterFunction(cars:Car[],namesKey:string,fieldName:string,fieldValue:string,depth:number){
    this.names[namesKey] = !this.names[namesKey];
      this.wholeCarsList = this.sS.generalFilter(cars,fieldName,fieldValue,depth);

  }

  clearSorting(namesKey:string){
    this.names[namesKey] = !this.names[namesKey];
    this.getWholeCarsList();
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
      this.carsWithPendingTires = source;
    this.pendingTiresNumber = this.carsWithPendingTires.length
    });
  }

  switchFiltering(namesKey:string,fieldName:string,fieldValue:string,depth:number,switching:string){
    this.names[switching]=!this.names[switching];
    let cars:Car[];
    this.cS.getAllCars().subscribe((source)=>{
      cars=source;
        this.filterFunction(cars,namesKey,fieldName,fieldValue,depth);
    })
  }

}
