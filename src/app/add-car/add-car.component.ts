import { Component, OnInit } from '@angular/core';
import {CarService} from '../car/car.service';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private cS:CarService) { }

  ngOnInit() {
  }

  addCar(cName:string,cReg:string){
    const body = {carName:cName,carRegistration:cReg};
    this.cS.postNewCar(body); 
    console.log (cName,cReg);
  }

}
