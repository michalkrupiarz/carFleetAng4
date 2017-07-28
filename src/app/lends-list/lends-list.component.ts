import { Component, OnInit } from '@angular/core';
import {Lend} from '../lend.model';
import {LendServiceService} from '../lend/lend-service.service';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-lends-list',
  templateUrl: './lends-list.component.html',
  styleUrls: ['./lends-list.component.css']
})
export class LendsListComponent implements OnInit {

  constructor(private lS:LendServiceService) { }

  private allLends:Lend[];

  ngOnInit() {
    this.getAllLends();
  }

  getAllLends(){
    this.lS.getAllLends().subscribe((source)=>{
      this.allLends = source;
    })
  }

}
