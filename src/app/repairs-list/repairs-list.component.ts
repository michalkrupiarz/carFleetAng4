import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {RepairService} from '../repair/repair.service';
import {Repair} from '../repair.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {SortingService} from '../usableServices/sorting.service';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.css']
})
export class RepairsListComponent implements OnInit {

  constructor(private rS: RepairService,
              private sS: SortingService) { }
    private repairsWholeList: Repair[];
    private repairsWholeListNumber:number;

    private nameSorted : boolean = false;
    private regSorted : boolean = false;
    private startSorted : boolean = false;
    private endSorted : boolean = false;
    private statusSorted : boolean = false;

    private carRegFieldName : string = 'car.carRegistration';
    private carNameFieldName : string = 'car.carName';
    private repairDateStartFieldName : string = 'dateStart';
    private repairDateEndFieldName : string = 'dateEnd';
    private repairStatusFieldName : string = 'status.progress';

    private names={'name':false,
    'registration':false,
    'start':false,
    'end':false,
    'status':false
    }

  ngOnInit() {
    this.getRepairsWholeList();
  }

  sortItems(reps:Repair[],action:string,isCar:boolean,objKey:string,fieldName:string){
    this.names[objKey] = !this.names[objKey];
    this.repairsWholeList = this.sS.generalSortFunct(reps,action,fieldName,isCar);
  }

  filterItems(reps:Repair[],namesKey:string,fieldName:string,fieldValue:string,depth:number){
    this.names[namesKey] = !this.names[namesKey];
      this.repairsWholeList= this.sS.generalFilter(reps,fieldName,fieldValue,depth);

  }

  clearSorting(namesKey:string){
    this.names[namesKey] = !this.names[namesKey];
    this.getRepairsWholeList();
  }

  getRepairsWholeList(){
    this.rS.getAllRepairs()
    .subscribe((source)=>{
      this.repairsWholeList = source;
      this.repairsWholeListNumber = this.repairsWholeList.length;
    });
  }
}
