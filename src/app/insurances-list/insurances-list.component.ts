import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../insurance/insurance.service';
import {Insurance} from '../insurance.model';
import {SortingService} from '../usableServices/sorting.service';

@Component({
  selector: 'app-insurances-list',
  templateUrl: './insurances-list.component.html',
  styleUrls: ['./insurances-list.component.css']
})
export class InsurancesListComponent implements OnInit {

  constructor(private iS:InsuranceService,
  private sS:SortingService) { }

  private allInsurances : Insurance[];

  private names = {
    'mark':false,
    'reg' :false,
    'start':false,
    'end':false,
    'pay':false,
    'status':false
  }

  ngOnInit() {
    this.getAllInsurances();
  }

  getAllInsurances(){
    this.iS.getAllInsurances().subscribe((source)=>{
      this.allInsurances = source;
    })
  }

sortFunction(ins:Insurance[],action:string,depth:boolean,objKey:string,fieldName:string){
    this.names[objKey] = !this.names[objKey];
    this.allInsurances = this.sS.generalSortFunct(ins,action,fieldName,depth);
  }

  filterFunction(ins:Insurance[],namesKey:string,fieldName:string,fieldValue:string,depth:number){
    this.names[namesKey] = !this.names[namesKey];
      this.allInsurances = this.sS.generalFilter(ins,fieldName,fieldValue,depth);

  }
}
