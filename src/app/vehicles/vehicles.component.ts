import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent {
  vehicleTypes: any = ['100', '200', '400', '600'];
  model: any = {};

  constructor(private router: Router, private vehicleService: VehicleService) {}

  change() {
    console.log(this.model);
  }

  submit(form: any) {
    console.log('yes');
    console.log(this.model);
    this.vehicleService.createVehicle(this.model).subscribe((data: any) => {});
  }
}
