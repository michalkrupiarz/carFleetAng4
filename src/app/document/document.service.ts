import { Injectable } from '@angular/core';
import {DataService} from '../data.service';

@Injectable()
export class DocumentService {

  constructor(private dS:DataService) { }

  private allDocumentsUrl = 'getAllDocuments';
  private postNewDocumentUrl = 'addDocument';
  private documentsToExpireInURL = 'documentsExpiratingIn';

  getAllDocuments(){
    return this.dS.getData(this.allDocumentsUrl);
  }
  postNewDocument(body:any){
      return this.dS.postData(this.postNewDocumentUrl,body);
  }
  getDocumentsExpirationgIn(days:number){
    console.log('from console',days)
    return this.dS.getData(this.documentsToExpireInURL+'/'+days);
  }
}
