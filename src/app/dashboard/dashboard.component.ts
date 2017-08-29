import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {Car} from '../car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarService} from '../car/car.service';
import {RepairService} from '../repair/repair.service';
import {Event} from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {Repair} from '../repair.model';
import {LendServiceService} from '../lend/lend-service.service';
import {CheckoutService} from '../checkout/checkout.service';
import {InsuranceService} from '../insurance/insurance.service';
import {TireServiceService} from '../tire/tire.service';
import {DocumentService} from '../document/document.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private cars:Car[];

  private pendingRepairsNumber:number;
  private wholeCarsListLength:number;
  private pendingTiresNumber:number;
  private freeCarsNumber:number;
  private takenCarsNumber:number;
  private checkoutsUpcomingIn:number;
  private insurancesEndingIn:number;
  private tiresToChangeIn:number;
  private documentsExpirating:number;
  private daysToUpcomingCheckouts = 30;
  private daysInsurancesEndingIn = 30;
  private daysTireToChange = 30;
  private daysDocumentsExpiratingIn = 30;
  constructor(private cS:CarService,
  private rS:RepairService,
  private lS:LendServiceService,
  private chS:CheckoutService,
  private iS:InsuranceService,
  private tSS:TireServiceService,
  private dS:DocumentService) { }

  ngOnInit() {
    this.getWholeCarsList();
    this.getPendingRepairsNumber();
    this.getFreeCarsNumber();
    this.getTakenCarsNumber();
    this.getCheckoutsUpcomingIn();
    this.getInsurancesEndingIn();
    this.getTiresToChangeIn();
    this.getDocumentsExpiratingIn();
  }

  getTiresToChangeIn(){
    this.tSS.getAllTiresToChangeIn(this.daysTireToChange).subscribe((s)=>{
      this.tiresToChangeIn = s.length;
    })
  }

  getDocumentsExpiratingIn(){
    this.dS.getDocumentsExpirationgIn(this.daysDocumentsExpiratingIn).subscribe((s)=>{
      console.log('documents', s);
      this.documentsExpirating = s.length;
    })
  }
  getWholeCarsList(){
    this.cS.getAllCars()
      .subscribe((source)=>{
        this.cars = source;
            this.wholeCarsListLength = this.cars.length;
            console.log(this.cars);
      });
  }
  getPendingRepairsNumber(){
    let repairs:Repair[];
    this.rS.getAllPendingRepairs()
      .subscribe((source)=>{
        repairs = source;
        console.log('repairs ',repairs);
        this.pendingRepairsNumber = repairs.length;
      })
  }
  getFreeCarsNumber(){
    this.lS.getNumberOfFreeCars().subscribe((s)=>{
      this.freeCarsNumber = s;
    });
  }
  getTakenCarsNumber(){
    this.lS.getNumberOfTakenCars().subscribe((s)=>{
      this.takenCarsNumber = s;
    });
  }
  public getCheckoutsUpcomingIn(){
    this.chS.getCheckoutsUpcomingIn(this.daysToUpcomingCheckouts).subscribe((s)=>{
      this.checkoutsUpcomingIn = s.length;
    });
  }
  public getInsurancesEndingIn(){
    this.iS.getInsurancesEndingInDays(this.daysInsurancesEndingIn).subscribe((s)=>{
      this.insurancesEndingIn = s.length;
    })
  }
}
