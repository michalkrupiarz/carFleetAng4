import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {Car} from './car.model';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { DataService} from './data.service';
import {CarService} from './car/car.service';
import { CarListComponent } from './car-list/car-list.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RepairsListComponent } from './repairs-list/repairs-list.component';
import {RepairService} from './repair/repair.service';
import { RepairComponent } from './repair/repair.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TireComponent } from './tire/tire.component';
import { TireListComponent } from './tire-list/tire-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarListComponent,
    RepairsListComponent,
    RepairComponent,
    DashboardComponent,
    TireComponent,
    TireListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [DataService,CarService,RepairService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
