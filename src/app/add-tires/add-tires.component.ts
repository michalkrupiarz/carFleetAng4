import { Component, OnInit,TemplateRef  } from '@angular/core';
import {Form} from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';
  import { BsModalService } from 'ngx-bootstrap/modal';
  import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
  import { FormsModule } from '@angular/forms';
  import {CarService} from '../car/car.service';
  import {Car} from '../car.model';
  import {TireServiceService} from '../tire/tire.service';
  import {StatusService} from '../usableServices/status.service';
  import {Status} from '../status.model';

@Component({
  selector: 'app-add-tires',
  templateUrl: './add-tires.component.html',
  styleUrls: ['./add-tires.component.css']
})
export class AddTiresComponent implements OnInit {

  constructor(private cS:CarService,
  private tS: TireServiceService,
  private sS: StatusService,
  private modalService: BsModalService) { }

  private cars:Car[];
  private statuses: Status[];

  public modalRef: BsModalRef;
  public config = {
   ignoreBackdropClick: true
 };

 private report:any;
 private changeDate:Date;

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
 getChangeDate():Date{
   return this.changeDate;
 }
 public sendDateChange(){
   this.getChangeDate();
   this.modalRef.hide();
 }
 public addTires(car:Car,changeDate:Date,type:string,status:Status){
   const body = {type:type,changeDate:changeDate,car:car,status:status};
   this.tS.postNewTires(body).subscribe((s)=>{
     this.report = s;
     console.log(this.report);
   })
 }
}
