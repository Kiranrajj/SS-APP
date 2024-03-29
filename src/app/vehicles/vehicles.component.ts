import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.scss',
})
export class VehiclesComponent {
  vehicles: any = {
    docs: [],
  };
  tableConfig: any = [];
  tabs: any = ['Active', 'Deleted'];
  isDeleted: any = false;
  filter: any = {
    isDeleted: false,
    page: 1,
  };

  constructor(private router: Router, private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicleService.getAllVehicles(this.filter).subscribe((data) => {
      this.vehicles = data;
    });
  }

  selectTab(event: any) {}

  navigateToPage(page: any) {}
  view(category: any) {
    if (category.s == 'A') {
      this.router.navigate(['/category/' + category._id + '/view']);
    }
  }
}
