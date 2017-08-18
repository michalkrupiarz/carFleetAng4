import { Component, OnInit, Input} from '@angular/core';
import { Lend } from '../lend.model';
@Component({
  selector: 'app-lend-details',
  templateUrl: './lend-details.component.html',
  styleUrls: ['./lend-details.component.css']
})
export class LendDetailsComponent implements OnInit {
  @Input() lends:Lend[];
  constructor() { }

  ngOnInit() {
  }

}
