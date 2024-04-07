import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.scss',
})
export class VehicleFormComponent {
  vehicleTypes: any = ['100', '200', '400', '600'];
  model: any = {};

  constructor(private router: Router, private vehicleService: VehicleService) {}

  change() {
    console.log(this.model);
  }

  submit(form: any) {
    this.vehicleService.createVehicle(this.model).subscribe((data: any) => {});
    this.router.navigate(['/vehicles']);
  }
}
