import { Component, OnInit } from '@angular/core';
import { InsuranceService } from '../insurance/insurance.service';
import {Insurance} from '../insurance.model';

@Component({
  selector: 'app-insurances-list',
  templateUrl: './insurances-list.component.html',
  styleUrls: ['./insurances-list.component.css']
})
export class InsurancesListComponent implements OnInit {

  constructor(private iS:InsuranceService) { }

  private allInsurances : Insurance[];

  ngOnInit() {
    this.getAllInsurances();
  }

  getAllInsurances(){
    this.iS.getAllInsurances().subscribe((source)=>{
      this.allInsurances = source;
    })
  }

}
