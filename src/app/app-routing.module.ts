import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SupplyEntryComponent } from './supply-entry/supply-entry.component';
import { ServicePageComponent } from './service-page/service-page.component';

const routes: Routes = [
  {
    path: 'vehicles',
    component: SupplyEntryComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: '',
    component: VehiclesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
