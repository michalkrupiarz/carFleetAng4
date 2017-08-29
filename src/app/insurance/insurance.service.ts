import { Injectable } from '@angular/core';
import {DataService} from '../data.service';

@Injectable()
export class InsuranceService {

  constructor(private dS:DataService) { }

  private allInsurancesUrl = 'getAllInsurances';
  private addInsuranceUrl = 'addInsurance';
  private insurancesEndingInUrl = 'insurancesEndingIn';

  getAllInsurances(){
    return this.dS.getData(this.allInsurancesUrl);
  }
  postNewInsurance(body:any){
    return this.dS.postData(this.addInsuranceUrl,body);
  }
  getInsurancesEndingInDays(days:number){
    return this.dS.getData(this.insurancesEndingInUrl+'/'+days);
  }

}
