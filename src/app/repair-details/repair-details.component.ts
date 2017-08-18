import { Component, OnInit, Input } from '@angular/core';
import { Repair } from '../repair.model';

@Component({
  selector: 'app-repair-details',
  templateUrl: './repair-details.component.html',
  styleUrls: ['./repair-details.component.css']
})
export class RepairDetailsComponent implements OnInit {
  @Input() repairs:Repair[];
  constructor() { }

  ngOnInit() {
  }

}
