import { Injectable, Inject } from '@angular/core';
import {DataService} from '../data.service';
import {Lend} from '../lend.model';


@Injectable()
export class LendServiceService {

  constructor(private dS:DataService) { }

  private getAllLendsURL = 'getAllLends';
  private postNewLendUrl = 'addLend';

  getAllLends(){
    return this.dS.getData(this.getAllLendsURL);
  }
  postNewLend(body:any){
    console.log('from service',body);
    return this.dS.postData(this.postNewLendUrl,body);
  }
}
