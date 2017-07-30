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

  private carRegSorted : boolean = false;
  private carNameSorted: boolean = false;
  private lendStartSorted:boolean = false;
  private lendEndSorted: boolean = false;

  private obj = {'reg':true,
'name':true};

  ngOnInit() {
    this.getAllLends();
  }

  getAllLends(){
    this.lS.getAllLends().subscribe((source)=>{
      this.allLends = source;
    })
  }
  cleanSorting(){
    this.getAllLends();
  }

  sortCarRegAlphaOrder(key:string){
    console.log(key,this.obj[key]);
    this.carRegSorted = true;
    this.allLends = this.sS.sortInAlphabeticalOrder(this.allLends,'car.carRegistration',false);
  }
  sortcarRegReversAlphOrder(){
    this.carRegSorted = false;
    this.allLends = this.sS.sortInReversedAlphabeticalOrder(this.allLends,'car.carRegistration',false);
  }
  sortCarNameAlphOrder(){
    this.carNameSorted = true;
    this.allLends= this.sS.sortInAlphabeticalOrder(this.allLends,'car.carName',false);
  }
  sortCarNameReversAlphOrder(){
    this.carNameSorted = false;
    this.allLends = this.sS.sortInReversedAlphabeticalOrder(this.allLends,'car.carName',false);
  }
  sortLendStartAsc(){
    this.lendStartSorted = true;
    this.allLends = this.sS.sortDatesFromAsc(this.allLends,'lendStart',true);
  }
  sortLendStartDesc(){
    this.lendStartSorted = false;
    this.allLends = this.sS.sortDatesFromDesc(this.allLends,'lednStart',true);
  }
  sortLendEndAsc(){
    this.lendEndSorted = true;
    this.allLends = this.sS.sortDatesFromAsc(this.allLends,'lendEnd',true);
  }
  sortLendEndDesc(){
    this.lendEndSorted= false;
    this.allLends = this.sS.sortDatesFromDesc(this.allLends,'lednEnd',true);
  }
}
