import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {Car} from './car.model';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { DataService} from './data.service';
import {CarService} from './car/car.service';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService,CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
