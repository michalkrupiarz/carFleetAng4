import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormsModule } from '@angular/forms';
import {CarService} from '../car/car.service';
import {Car} from '../car.model';


@Component({
  selector: 'app-date-modal',
  templateUrl: './date-modal.component.html',
  styleUrls: ['./date-modal.component.css']
})
export class DateModalComponent implements OnInit {
  public config = {
   ignoreBackdropClick: true
 };
private template : TemplateRef<any>;
private cars: Car[];
public modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
  private cS:CarService) { }

  ngOnInit() {
    this.modalRef = this.modalService.show(this.template,this.config);
  }

getAllCars(){
  this.cS.getAllCars().subscribe((source)=>{
    this.cars = source;
  })
  }

}
