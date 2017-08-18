import { Component, OnInit, Input } from '@angular/core';
import { Tire } from '../tire.model';
@Component({
  selector: 'app-tire-details',
  templateUrl: './tire-details.component.html',
  styleUrls: ['./tire-details.component.css']
})
export class TireDetailsComponent implements OnInit {
  @Input() tires:Tire[];
  constructor() { }

  ngOnInit() {
  }

}
