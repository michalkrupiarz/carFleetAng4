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
import { SortingService} from '../usableServices/sorting.service';
import {SortCarService} from '../usableServices/sort-car.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent implements OnInit {

  constructor(private cS: CarService
    ,private rS: RepairService
    ,private sortCarServ: SortCarService) { }

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
  private checkoutsFiltr:boolean = false

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
      this.carsWithPendingTires = source;
    this.pendingTiresNumber = this.carsWithPendingTires.length
    });
  }
  sortByCarNameAlphabeticaly(){
    this.alphSortedNames = false;
    this.wholeCarsList =
    this.sortCarServ.sortNameInAlphabeticalOrder(this.wholeCarsList);
  }
  sortByCarNameReversedAlphabeticaly(){
    this.alphSortedNames = true;
    this.wholeCarsList =
    this.sortCarServ.sortNameInReversedAlphabeticalOrder(this.wholeCarsList);
  }
  sortByCarRegAlphabeticaly(){
    this.alphSortedReg = false;
    this.wholeCarsList =
    this.sortCarServ.sortRegInAlphabeticalOrder(this.wholeCarsList);
  }
  sortByCarRegReversedAlphabeticaly(){
    this.alphSortedReg = true;
    this.wholeCarsList =
    this.sortCarServ.sortRegInReversedAlphabeticalOrder(this.wholeCarsList);
  }
  filterCarsWithPendingRepairsRepair(){
    this.cS.getCarsWithPendingRepairs()
      .subscribe((source)=>{
        this.wholeCarsList=source;
        this.filteredByRepairs=true;
      });
  }
  clearFilters(){
    this.getWholeCarsList();
  }
  clearRepairsFilter(){
    this.filteredByRepairs = false;
    this.clearFilters();
  }
  clearLendsFilters(){
    this.lendsAllCars=true;
    this.clearFilters();
  }
  leaveFreeCarsOnly(){
    console.log("leave free cars only");
    this.lendsAllCars = false;
    this.freeCars=true;
    this.takenCars=false;
    this.cS.getAllCarsLendsFree()
      .subscribe((source)=>{
        this.wholeCarsList=source;
      })
  }
  leaveTakenCarsOnly(){
    console.log("leave taken cars only");
    this.lendsAllCars = false;
    this.takenCars=true;
    this.freeCars=false;
    this.cS.getAllCarsLendsTaken()
      .subscribe((source)=>{
        this.wholeCarsList=source;
      })
  }
  clearCheckoutsFilter(){
    this.checkoutsFiltr = false;
    this.clearFilters();
  }
  filterCarsWithoutCheckouts(){
    this.checkoutsFiltr = true;
  }
}
