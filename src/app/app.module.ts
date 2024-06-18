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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { VehicleFormComponent } from './vehicles/vehicle-form/vehicle-form.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatGridComponent } from './Components/mat-grid/mat-grid.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { AlertComponent } from './Components/alert/alert.component';
import { SupplyEntryFormComponent } from './supply-entry/supply-entry-form/supply-entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    CustomerComponent,
    ServicePageComponent,
    SupplyEntryComponent,
    VehicleFormComponent,
    CustomerFormComponent,
    MatGridComponent,
    AlertComponent,
    SupplyEntryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    NgxMatDatetimePickerModule,
    HttpClientModule,
    TabsModule.forRoot(),
    MatTableModule,
    MatTabsModule,
    MdbModalModule,
  ],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter()],
  bootstrap: [AppComponent],
})
export class AppModule {}
