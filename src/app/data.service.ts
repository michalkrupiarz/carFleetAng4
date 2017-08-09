import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {
  private baseUrl:String = "http://localhost:8100/cfsh/";
  constructor(private http:Http) { }

  getData(url:string){
    return this.http.get(this.baseUrl+url).map(r=>r.json());
  }
  postData(url:string,body:string){
    console.log('from data service',body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl+url,body,headers).subscribe();
  }
}
