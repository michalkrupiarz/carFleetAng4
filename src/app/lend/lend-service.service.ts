import { Injectable, Inject } from '@angular/core';
import {DataService} from '../data.service';
import {Lend} from '../lend.model';


@Injectable()
export class LendServiceService {

  constructor(private dS:DataService) { }

  private getAllLendsURL = 'getAllLends';
  private postNewLendUrl = 'addLend';
  private getNumberOfFreeCarsUrl = 'getFreeCarsNumber';
  private getNumberOfTakenCarsUrl = 'getTakenCarsNumber';

  getAllLends(){
    return this.dS.getData(this.getAllLendsURL);
  }
  postNewLend(body:any){
    return this.dS.postData(this.postNewLendUrl,body);
  }
  getNumberOfFreeCars(){
    return this.dS.getData(this.getNumberOfFreeCarsUrl);
  }
  getNumberOfTakenCars(){
    return this.dS.getData(this.getNumberOfTakenCarsUrl);
  }
}
