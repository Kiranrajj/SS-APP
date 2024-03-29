import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SupplyEntryComponent } from './supply-entry/supply-entry.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { VehicleFormComponent } from './vehicles/vehicle-form/vehicle-form.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';

const routes: Routes = [
  {
    path: 'vehicles',
    component: VehiclesComponent,
  },
  {
    path: 'vehicles/:id',
    component: VehicleFormComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'customer/:id',
    component: CustomerFormComponent,
  },
  {
    path: '',
    component: VehicleFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
