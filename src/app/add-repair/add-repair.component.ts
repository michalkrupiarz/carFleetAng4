import { Component, OnInit,TemplateRef  } from '@angular/core';
import {Form} from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';
  import { BsModalService } from 'ngx-bootstrap/modal';
  import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
  import { FormsModule } from '@angular/forms';
  import {CarService} from '../car/car.service';
  import {Car} from '../car.model';
  import {RepairService} from '../repair/repair.service';
  import {StatusService} from '../usableServices/status.service';
  import {Status} from '../status.model';
  import {Router} from '@angular/router';

@Component({
  selector: 'app-add-repair',
  templateUrl: './add-repair.component.html',
  styleUrls: ['./add-repair.component.css']
})
export class AddRepairComponent implements OnInit {
  private statuses:Status[];
  private cars: Car[];
  public addEndDate : Date;
  public startDate: Date;
  public endDate : Date;
  private dt:Date;
  public config = {
   ignoreBackdropClick: true
 };
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    private cS:CarService,
    private rS:RepairService,
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
  public addRepair(car:Car, dStart:Date, dEnd:Date, cost:number,st:Status){
    const body = {car:car,dateStart:dStart,dateEnd:dEnd,cost:cost,status:st};
    this.rS.postNewRepair(body).subscribe((s)=>{
      if (s.status === 200) this.router.navigate(['/start']);
    });
  }
  public getAllCars(){
    this.cS.getAllCars().subscribe((source)=>{
      this.cars = source;
    })
  }

}
