import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent {
  vehicleTypes: any = ['100', '200', '400', '600'];
  model: any = {};

  change() {
    console.log(this.model);
  }
}
