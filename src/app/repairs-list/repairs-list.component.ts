import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import {RepairService} from '../repair/repair.service';
import {Repair} from '../repair.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.css']
})
export class RepairsListComponent implements OnInit {

  constructor(private rS: RepairService) { }
    private repairsWholeList: Repair[];
  ngOnInit() {
    this.getRepairsWholeList();
  }

  getRepairsWholeList(){
    this.rS.getAllRepairs()
    .subscribe((source)=>{
      console.log("repairs", source);
      this.repairsWholeList = source;
    });
  }

}
