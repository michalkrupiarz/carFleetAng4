import { Component, OnInit } from '@angular/core';
import {Lend} from '../lend.model';
import {LendServiceService} from '../lend/lend-service.service';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SortingService} from '../usableServices/sorting.service';

@Component({
  selector: 'app-lends-list',
  templateUrl: './lends-list.component.html',
  styleUrls: ['./lends-list.component.css']
})
export class LendsListComponent implements OnInit {

  constructor(private lS:LendServiceService,
  private sS:SortingService) { }

  private allLends:Lend[];
  private obj = {'reg':false,
                'name':false,
                'end':false,
                'start':false};

  ngOnInit() {
    this.getAllLends();
  }

  oneFunction(lends:Lend[],action:string,isCar:boolean,objKey:string,fieldName:string){
    this.obj[objKey] = !this.obj[objKey];
    this.allLends = this.sS.generalSortFunct(lends,action,fieldName,isCar);
  }

  getAllLends(){
    this.lS.getAllLends().subscribe((source)=>{
      this.allLends = source;
    })
  }
  cleanSorting(){
    this.getAllLends();
  }



}
