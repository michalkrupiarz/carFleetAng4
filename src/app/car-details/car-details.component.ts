import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  @Input() pickedCar : Car;
  constructor() { }

  ngOnInit() {
  }

}
