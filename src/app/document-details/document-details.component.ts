import { Component, OnInit, Input} from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {
  @Input() documents:Document[];
  constructor() { }

  ngOnInit() {
  }

}
