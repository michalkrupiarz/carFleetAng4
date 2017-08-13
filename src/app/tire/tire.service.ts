import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DataService} from '../data.service';
import {Car} from '../car.model';

@Injectable()
export class TireServiceService {

  constructor(private ds:DataService) {
   }
   private allTiresUrl = 'getAllTires';
   private postNewTireUrl = 'addTires'

  getAllTires(){
    console.log('weszlo do servicu')
    return this.ds.getData(this.allTiresUrl);
  }
  postNewTires(body:any){
    return this.ds.postData(this.postNewTireUrl,body);
  }
}
