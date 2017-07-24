import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DataService} from '../data.service';
import {Car} from '../car.model';

@Injectable()
export class TireServiceService {

  constructor(private ds:DataService) {
   }

}
