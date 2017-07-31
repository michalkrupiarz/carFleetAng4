import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document/document.service';
import {Document} from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  constructor(private iS:DocumentService) { }

  private allDocuments : Document[];

  ngOnInit() {
    this.getAllDocuments();
  }

  getAllDocuments(){
    this.iS.getAllDocuments().subscribe((source)=>{
      this.allDocuments = source;
    })
  }

}
