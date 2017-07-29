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
    this.wholeCarsList =this.sS.sortInAlphabeticalOrder(this.wholeCarsList,'carName',true);
  }
  sortByCarNameReversedAlphabeticaly(){
    this.alphSortedNames = true;
    this.wholeCarsList =
    this.sS.sortInReversedAlphabeticalOrder(this.wholeCarsList,'carName',true);
  }
  sortByCarRegAlphabeticaly(){
    this.alphSortedReg = false;
    this.wholeCarsList =
    this.sS.sortInAlphabeticalOrder(this.wholeCarsList,'carRegistration',true);
  }
  sortByCarRegReversedAlphabeticaly(){
    this.alphSortedReg = true;
    this.wholeCarsList =
    this.sS.sortInReversedAlphabeticalOrder(this.wholeCarsList,'carRegistration',true);
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
    this.cS.getAllCarsChecouts()
    .subscribe((source)=>{
      this.wholeCarsList=source
    });
  }
  clearInsurancesFilter(){
    this.insurancesFilter=false;
    this.clearFilters();
  }
  filterCarsWithInsurances(){
    this.insurancesFilter=true;
    this.cS.getAllCarsInsurances()
    .subscribe((s)=>{
      this.wholeCarsList=s;
    })
  }

  clearTiresFilter(){
    this.tiresFilter=false;
    this.clearFilters();
  }
  filterCarsWithoutTires(){
    this.cS.getAllCarsSortedByTires()
    .subscribe((s)=>{
      this.wholeCarsList = s;
    });
    this.tiresFilter=true;
  }
}
