import { Component, OnInit,TemplateRef  } from '@angular/core';
import {Form} from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';
  import { BsModalService } from 'ngx-bootstrap/modal';
  import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
  import { FormsModule } from '@angular/forms';
  import {CarService} from '../car/car.service';
  import {Car} from '../car.model';
  import {LendServiceService} from '../lend/lend-service.service';
  import {StatusService} from '../usableServices/status.service';
  import {Status} from '../status.model';
  import {Router} from '@angular/Router';

@Component({
  selector: 'app-add-lends',
  templateUrl: './add-lends.component.html',
  styleUrls: ['./add-lends.component.css']
})
export class AddLendsComponent implements OnInit {

  private statuses:Status[];
  private cars: Car[];
  public addEndDate : Date;
  public startDate: Date;
  public endDate : Date;
  private dt:Date;
  public modalRef: BsModalRef;
  public config = {
   ignoreBackdropClick: true
 };

  constructor(private modalService: BsModalService,
    private cS:CarService,
    private lS:LendServiceService,
    private sS:StatusService,
    private router:Router) { }

  ngOnInit() {
    this.getAllCars();
    this.getAllStatuses();
  }

  public getAllStatuses(){
    this.sS.getAllStatuses().subscribe((s)=>{
      this.statuses = s;
    })
  }
  public openModal(template: TemplateRef<any>) {
   this.modalRef = this.modalService.show(template,this.config);
 }
 public getStartDate():Date{
   return this.startDate;
 }

 public getEndDate():Date{
   return this.endDate;
 }

 public sendDateStart(){
   this.addEndDate = this.getStartDate();
   this.modalRef.hide();
 }

 public sendDateEnd(){
   this.getEndDate();
   this.modalRef.hide();
 }

 public addLend(car:Car, dStart:Date, dEnd:Date, person:string,st:Status){
   const body = {car:car,lendStart:dStart,lendEnd:dEnd,person:person,status:st};

   this.lS.postNewLend(body).subscribe((s)=>{
     if (s.status === 200) this.router.navigate(['/start']);
   });
 }
 public getAllCars(){
   this.cS.getAllCars().subscribe((source)=>{
     this.cars = source;
   })
 }

}
