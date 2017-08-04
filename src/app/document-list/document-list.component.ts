import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document/document.service';
import {Document} from '../document.model';
import {SortingService} from '../usableServices/sorting.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  constructor(private iS:DocumentService,
              private sS:SortingService) { }

  private allDocuments : Document[];
  private names={'name':false,
'registration':false,
'expDate':false,
'status':false};
  ngOnInit() {
    this.getAllDocuments();
  }

  getAllDocuments(){
    this.iS.getAllDocuments().subscribe((source)=>{
      this.allDocuments = source;
    })
  }

  sortItems(documents:Document[],action:string,isCar:boolean,objKey:string,fieldName:string){
    this.names[objKey] = !this.names[objKey];
    this.allDocuments = this.sS.generalSortFunct(documents,action,fieldName,isCar);
  }

  filterItems(documents:Document[],namesKey:string,fieldName:string,fieldValue:string,depth:number){
    this.names[namesKey] = !this.names[namesKey];
      this.allDocuments= this.sS.generalFilter(documents,fieldName,fieldValue,depth);
  }

  clearSorting(namesKey:string){
    this.names[namesKey] = !this.names[namesKey];
    this.getAllDocuments();
  }
}
