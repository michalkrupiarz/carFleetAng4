import { Component, OnInit, Input } from '@angular/core';
import { Insurance } from '../insurance.model';
@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css']
})
export class InsuranceDetailsComponent implements OnInit {
  @Input() insurances:Insurance[];
  constructor() { }

  ngOnInit() {
  }

}
