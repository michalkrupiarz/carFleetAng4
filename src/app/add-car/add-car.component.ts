import { Component, OnInit } from '@angular/core';
import {CarService} from '../car/car.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private cS:CarService,
  private router:Router) { }

  ngOnInit() {
  }

  addCar(cName:string,cReg:string){
    const body = {carName:cName,carRegistration:cReg};
    this.cS.postNewCar(body).subscribe((s)=>{
      if (s.status === 200) this.router.navigate(['/start']);
    });

  }


}
