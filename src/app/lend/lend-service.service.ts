import { Injectable, Inject } from '@angular/core';
import {DataService} from '../data.service';
import {Lend} from '../lend.model';


@Injectable()
export class LendServiceService {

  constructor(private dS:DataService) { }

  private getAllLendsURL = 'getAllLends';

  getAllLends(){
    return this.dS.getData(this.getAllLendsURL);
  }
}
