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
      this.vehicles.docs = data;
      console.log(this.vehicles);
    });
    this.tableConfig = [
      { column: 'Vehicle Name', columnVal: 'vehicleName' },
      { column: 'Vehicle Number', columnVal: 'vehicleNumber' },
      { column: 'Type', columnVal: 'type' },
      { column: 'Amount', columnVal: 'amount' },
      {
        column: 'Action',
        actions: [
          {
            if: true, // condition wether it would be visible or not
            title: 'Edit',
            icon: 'fa fa-edit text-success', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
            handler: (row: any) => {
              this.router.navigate([`/vehicles/${row._id}`]);
            },
          },
          {
            if: true, // condition wether it would be visible or not
            title: 'Delete',
            icon: 'fa fa-trash', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
            handler: (row: any) => {
              this.deleteVehicle(row._id);
            },
          },
        ],
      },
    ];
  }

  selectTab(event: any) {}

  navigateToPage(page: any) {}
  view(category: any) {
    if (category.s == 'A') {
      this.router.navigate(['/category/' + category._id + '/view']);
    }
  }

  deleteVehicle(id: any) {}
}
