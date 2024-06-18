import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AlertComponent } from '../Components/alert/alert.component';

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
  filter: any = {
    isDeleted: false,
    page: 1,
  };

  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private modal: MdbModalService
  ) {}

  ngOnInit(): void {
    this.vehicleService.getAllVehicles(this.filter).subscribe((data) => {
      this.vehicles.docs = data;
      console.log(this.vehicles);

      // Initialize table configuration after data is fetched
      this.tableConfig = [
        { column: 'Vehicle Name', columnVal: 'vehicleName' },
        { column: 'Vehicle Number', columnVal: 'vehicleNumber' },
        { column: 'Amount', columnVal: 'amount' },
        {
          column: 'Action',
          actions: [
            {
              if: !this.filter.isDeleted, // condition wether it would be visible or not
              title: 'Edit',
              icon: 'fa-solid fa-pencil', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
              handler: (row: any) => {
                this.router.navigate([`/vehicles/${row._id}`]);
              },
            },
            {
              if: !this.filter.isDeleted, // condition wether it would be visible or not
              title: 'Delete',
              icon: 'fa fa-trash', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
              handler: (row: any) => {
                this.popAlert('Delete',row._id);
              },
            },
            {
              if: this.filter.isDeleted, // condition wether it would be visible or not
              title: 'Restore',
              icon: 'fa fa-backward', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
              handler: (row: any) => {
                this.popAlert('Restore',row._id);
              },
            },
          ],
        },
      ];
    });
  }

  async loadVehicles() {
    await this.vehicleService.getAllVehicles(this.filter).subscribe((data) => {
      this.vehicles.docs = data;
    });
  }

  async selectTab(event: any) {
    this.filter.isDeleted = event ===1;
    await this.ngOnInit();
  }

  navigateToPage(page: any) {}
  view(vehicle: any) {}

  async popAlert(action:any,id: any) {
    this.modal.open(AlertComponent, {
      data: {
        title: `${action} Vehicle`,
        message: `Are you sure you want to ${action.toLowerCase()} this vehicle?`,
        actions: [
          { title: 'No', class: 'btn btn-secondary' },
          {
            title: 'Yes',
            class: 'btn btn-primary',
            handler: () => {
              if (action == "Delete") {
                this.vehicleService.deleteVehicle(id).subscribe((value: any) => {
                });
                this.ngOnInit();
              } else {
                this.vehicleService.restoreVehicle(id).subscribe((value: any) => {
                });
                this.ngOnInit();
              }
            },
          },
        ],
      },
    });
  }
}
