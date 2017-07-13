import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {Car} from '../car.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CarService} from '../car/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private cS: CarService) { }
  private wholeCarsList: Car[];
  ngOnInit() {
  }

  getWholeCarsList(){
    this.cS.getAllCars()
      .subscribe((source)=>{
        console.log("CarLIstComponent GetWholeCarsList ",source);
        this.wholeCarsList = source;
      });
  }

}
