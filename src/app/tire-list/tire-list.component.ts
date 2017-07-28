import { Component, OnInit } from '@angular/core';
import { TireServiceService} from '../tire/tire.service';
import {Tire} from '../tire.model';

@Component({
  selector: 'app-tire-list',
  templateUrl: './tire-list.component.html',
  styleUrls: ['./tire-list.component.css']
})
export class TireListComponent implements OnInit {

  private allTires : Tire[];
  constructor(private tS: TireServiceService) { }


  ngOnInit() {
    this.getAllTires();
  }
  getAllTires(){
    this.tS.getAllTires().subscribe((source)=>{
      this.allTires=source;
      console.log('all tires dig ',this.allTires);
    })
  }
}
