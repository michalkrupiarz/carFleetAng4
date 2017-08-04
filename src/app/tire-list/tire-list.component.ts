import { Component, OnInit } from '@angular/core';
import { TireServiceService} from '../tire/tire.service';
import {Tire} from '../tire.model';
import {SortingService} from '../usableServices/sorting.service';

@Component({
  selector: 'app-tire-list',
  templateUrl: './tire-list.component.html',
  styleUrls: ['./tire-list.component.css']
})
export class TireListComponent implements OnInit {

  private allTires : Tire[];
  constructor(private tS: TireServiceService,
              private sS : SortingService) { }

  private names = {'name':false,
  'registration':false,
  'date':false,
  'winter':false,
  'summer':false,
  'changeDate':false,
  'status':false}

  ngOnInit() {
    this.getAllTires();
  }
  getAllTires(){
    this.tS.getAllTires().subscribe((source)=>{
      this.allTires=source;
    })
  }
  sortItems(tires:Tire[],action:string,isCar:boolean,objKey:string,fieldName:string){
    this.names[objKey] = !this.names[objKey];
    this.allTires = this.sS.generalSortFunct(tires,action,fieldName,isCar);
  }

  filterItems(tires:Tire[],namesKey:string,fieldName:string,fieldValue:string,depth:number){
    this.names[namesKey] = !this.names[namesKey];
      this.allTires= this.sS.generalFilter(tires,fieldName,fieldValue,depth);
  }

  clearSorting(namesKey:string){
    this.names[namesKey] = !this.names[namesKey];
    this.getAllTires();
  }

  switchFiltering(namesKey:string,fieldName:string,fieldValue:string,depth:number,switching:string){
    this.names[switching]=!this.names[switching];
    let tires:Tire[];
    this.tS.getAllTires().subscribe((source)=>{
      tires=source;
        this.filterItems(tires,namesKey,fieldName,fieldValue,depth);
    })

  }

}
