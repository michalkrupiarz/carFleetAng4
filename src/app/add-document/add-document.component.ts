import { Component, OnInit,TemplateRef  } from '@angular/core';
import {Form} from '@angular/forms';
import { DatepickerModule } from 'ngx-bootstrap';
  import { BsModalService } from 'ngx-bootstrap/modal';
  import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
  import { FormsModule } from '@angular/forms';
  import {CarService} from '../car/car.service';
  import {Car} from '../car.model';
  import {DocumentService} from '../document/document.service';
  import {StatusService} from '../usableServices/status.service';
  import {Status} from '../status.model';
  import {Router} from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  constructor(private cS: CarService,
    private dS: DocumentService,
    private sS: StatusService,
    private modalService:BsModalService,
    private router:Router) {  }

    private cars:Car[];
    private statuses:Status[];
    public modalRef: BsModalRef;
    public config = {
     ignoreBackdropClick: true
    };
    private report:any;
    expDate: Date;
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
  public getExpDate():Date{
    return this.expDate;
  }
  public sendExpDate(){
    this.getExpDate();
    this.modalRef.hide();
  }

  public addDocument(car:Car,eDate:Date,st:Status,type:string){
    const body = {car:car,expirationDate:eDate,status:st,type:type}
    this.dS.postNewDocument(body).subscribe((s)=>{
      if (s.status === 200) this.router.navigate(['/start']);
    })
  }

}
