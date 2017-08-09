import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { Car} from './car.model';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { DataService} from './data.service';
import {CarService} from './car/car.service';
import { CarListComponent } from './car-list/car-list.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RepairsListComponent } from './repairs-list/repairs-list.component';
import { RepairService} from './repair/repair.service';
import { RepairComponent } from './repair/repair.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TireComponent } from './tire/tire.component';
import { TireListComponent } from './tire-list/tire-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { LendsListComponent } from './lends-list/lends-list.component';
import { LendComponent } from './lend/lend.component';
import { LendServiceService} from './lend/lend-service.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutsListComponent } from './checkouts-list/checkouts-list.component';
import { CheckoutService } from './checkout/checkout.service';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsurancesListComponent } from './insurances-list/insurances-list.component';
import { InsuranceService } from './insurance/insurance.service';
import { TireServiceService} from './tire/tire.service';
import { SortingService } from './usableServices/sorting.service';
import { DocumentComponent } from './document/document.component';
import { DocumentListComponent } from './document-list/document-list.component';
import {DocumentService} from './document/document.service';
import { AddCarComponent } from './add-car/add-car.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AddRepairComponent } from './add-repair/add-repair.component';
import { DatepickerModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { DateModalComponent } from './date-modal/date-modal.component';
import {StatusService} from './usableServices/status.service';
import { AddLendsComponent } from './add-lends/add-lends.component';

const routes:Routes=[
    {path: '', redirectTo: 'start', pathMatch:'full'},
    {path: 'start', component:DashboardComponent},
    {path: 'addCar',component:AddCarComponent},
    {path: 'addRepair',component: AddRepairComponent},
    {path: 'addLend',component: AddLendsComponent},
    {path: '**', component:DashboardComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarListComponent,
    RepairsListComponent,
    RepairComponent,
    DashboardComponent,
    TireComponent,
    TireListComponent,
    CarDetailsComponent,
    LendsListComponent,
    LendComponent,
    CheckoutComponent,
    CheckoutsListComponent,
    InsuranceComponent,
    InsurancesListComponent,
    DocumentComponent,
    DocumentListComponent,
    AddCarComponent,
    NavbarComponent,
    AddRepairComponent,
    DateModalComponent,
    AddLendsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(routes),
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
      FormsModule
  ],
  providers: [DataService,
    CarService,
    RepairService,
    LendServiceService,
    CheckoutService,
    InsuranceService,
    TireServiceService,
    SortingService,
    DocumentService,
    StatusService],
  bootstrap: [AppComponent]
})


export class AppModule {

}
