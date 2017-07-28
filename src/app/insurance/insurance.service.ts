import { Injectable } from '@angular/core';
import {DataService} from '../data.service';

@Injectable()
export class InsuranceService {

  constructor(private dS:DataService) { }

  private allInsurancesUrl = 'getAllInsurances';

  getAllInsurances(){
    return this.dS.getData(this.allInsurancesUrl);
  }

}
