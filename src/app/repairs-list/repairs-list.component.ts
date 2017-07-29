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

  ngOnInit() {
    this.getRepairsWholeList();
  }

  getRepairsWholeList(){
    this.rS.getAllRepairs()
    .subscribe((source)=>{
      console.log("repairs", source);
      this.repairsWholeList = source;
      this.repairsWholeListNumber = this.repairsWholeList.length;
    });
  }
  sortByReg(){
    this.regSorted=true;
    this.repairsWholeList = this.sS.sortInAlphabeticalOrder(this.repairsWholeList,this.carRegFieldName,false);

  }
  sortByRegReversed(){
    this.regSorted=false;
    this.repairsWholeList = this.sS.sortInReversedAlphabeticalOrder(this.repairsWholeList,this.carRegFieldName,false);
  }

  sortByName(){
    this.nameSorted=true;
    this.repairsWholeList = this.sS.sortInAlphabeticalOrder(this.repairsWholeList,this.carNameFieldName,false);
  }
  sortByNameReversed(){
    this.nameSorted=false;
    this.repairsWholeList= this.sS.sortInReversedAlphabeticalOrder(this.repairsWholeList,this.carNameFieldName,false);
  }

  sortByDateStartAsc(){
    this.startSorted=true;
    this.repairsWholeList = this.sS.sortDatesFromAsc(this.repairsWholeList,this.repairDateStartFieldName,false)
  }

  sortByDateStartDesc(){
    this.startSorted=false;
    this.repairsWholeList = this.sS.sortDatesFromDesc(this.repairsWholeList,this.repairDateStartFieldName,false)
  }

  sortByDateEndAsc(){
    this.endSorted=true;
    this.repairsWholeList = this.sS.sortDatesFromAsc(this.repairsWholeList,this.repairDateEndFieldName,false)
  }

  sortByDateEndDesc(){
    this.endSorted=false;
    this.repairsWholeList = this.sS.sortDatesFromDesc(this.repairsWholeList,this.repairDateEndFieldName,false)
  }

  filterByStatus(){
    this.statusSorted = true;
    this.repairsWholeList = this.sS.filterOutStatus(this.repairsWholeList,this.repairStatusFieldName,false) ;
  }

  removeStatusFilter(){
    this.statusSorted = false;
    this.cleanFiltering();
  }

  cleanFiltering(){
    this.getRepairsWholeList();
  }


}
