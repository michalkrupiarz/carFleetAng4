import { Component, OnInit,TemplateRef  } from '@angular/core';
import {Form} from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';
  import { BsModalService } from 'ngx-bootstrap/modal';
  import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
  import { FormsModule } from '@angular/forms';
  import {CarService} from '../car/car.service';
  import {Car} from '../car.model';
  import {CheckoutService} from '../checkout/checkout.service';
  import {StatusService} from '../usableServices/status.service';
  import {Status} from '../status.model';
  import {Router} from '@angular/router';

@Component({
  selector: 'app-add-checkout',
  templateUrl: './add-checkout.component.html',
  styleUrls: ['./add-checkout.component.css']
})
export class AddCheckoutComponent implements OnInit {
  private cars:Car[];
  private statuses:Status[];
  private dateFrom:Date;
  private dateTo:Date;
  public modalRef: BsModalRef;
  public config = {
   ignoreBackdropClick: true
 };

 private report:any;

  constructor(private cS:CarService,
              private sS:StatusService,
              private checkS:CheckoutService,
              private modalService: BsModalService,
              private router:Router) { }

  ngOnInit() {
    this.getAllCars();
    this.getAllStatuses();
  }
  getAllCars(){
    this.cS.getAllCars().subscribe((s)=>{
      this.cars = s;
    })
  }
  getAllStatuses(){
    this.sS.getAllStatuses().subscribe((s)=>{
      this.statuses = s;
    })
  }
  public openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template,this.config);
 }
 public getDateFrom():Date{
   return this.dateFrom;
 }

 public getDateTo():Date{
   return this.dateTo;
 }

 public sendDateFrom(){
   this.getDateFrom();
   this.modalRef.hide();
 }

 public sendDateTo(){
   this.getDateTo();
   this.modalRef.hide();
 }
 public addCheckout(car:Car, dateFrom:Date, dateTo:Date, note:string,st:Status,cost:number){
   const body = {car:car,dateFrom:dateFrom,dateTo:dateTo,note:note,status:st,cost:cost};
    this.checkS.potNewCheckout(body).subscribe((s)=>{
      if (s.status === 200) this.router.navigate(['/start']);
    });
 }
}
