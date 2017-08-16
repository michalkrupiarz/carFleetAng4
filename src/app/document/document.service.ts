import { Injectable } from '@angular/core';
import {DataService} from '../data.service';

@Injectable()
export class DocumentService {

  constructor(private dS:DataService) { }

  private allDocumentsUrl = 'getAllDocuments';
  private postNewDocumentUrl = 'addDocument';

  getAllDocuments(){
    return this.dS.getData(this.allDocumentsUrl);
  }
  postNewDocument(body:any){
      return this.dS.postData(this.postNewDocumentUrl,body);
  }
}
