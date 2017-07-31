import { Injectable } from '@angular/core';
import {DataService} from '../data.service';

@Injectable()
export class DocumentService {

  constructor(private dS:DataService) { }

  private allDocumentsUrl = 'getAllDocuments';

  getAllDocuments(){
    return this.dS.getData(this.allDocumentsUrl);
  }
}
