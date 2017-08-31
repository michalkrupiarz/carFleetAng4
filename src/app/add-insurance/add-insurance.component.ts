import { Component, OnInit,TemplateRef  } from '@angular/core';
import {Form} from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';
  import { BsModalService } from 'ngx-bootstrap/modal';
  import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
  import { FormsModule } from '@angular/forms';
  import {CarService} from '../car/car.service';
  import {Car} from '../car.model';
  import {InsuranceService} from '../insurance/insurance.service';
  import {StatusService} from '../usableServices/status.service';
  import {Status} from '../status.model';
  import {Router} from '@angular/router';


@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {
  private cars:Car[];
  private statuses:Status[];
  private dateStart:Date;
  private dateEnd:Date;
  private payDate:Date;
  public modalRef: BsModalRef;
  public config = {
   ignoreBackdropClick: true
  };
  private report:any;

  constructor(private cS:CarService,
              private sS:StatusService,
              private iS:InsuranceService,
              private modalService:BsModalService,
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
  public openModal(template:TemplateRef<any>){
    this.modalRef = this.modalService.show(template,this.config);
  }
  public getDateStart():Date{
    return this.dateStart;
  }
  public getDateEnd():Date{
    return this.dateEnd;
  }
  public getPayDate():Date{
    return this.payDate;
  }
  public sendDateStart(){
    this.getDateStart();
    this.modalRef.hide();
  }
  public sendDateEnd(){
    this.getDateEnd();
    this.modalRef.hide();
  }
  public sendPayDate(){
    this.getPayDate();
    this.modalRef.hide();
  }
 public addInsurance(car:Car,start:Date,end:Date,pay:Date,st:Status,cost:number,company:string,note:string){
   const body = {car:car,dateStart:start,dateEnd:end,note:note,cost:cost,insCompany:company,payDate:pay,status:st}
   this.iS.postNewInsurance(body).subscribe((s)=>{
     if (s.status === 200) this.router.navigate(['/start']);
   })
 }

}
