import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectComponent, NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CustomerComponent } from './customer/customer.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { FormsModule } from '@angular/forms';
import { SupplyEntryComponent } from './supply-entry/supply-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    CustomerComponent,
    ServicePageComponent,
    SupplyEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
