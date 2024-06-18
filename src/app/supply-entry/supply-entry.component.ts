import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplyEntryService } from '../services/supply-entry.service';
import { VehicleService } from '../services/vehicle.service';
import { UserService } from '../services/user.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AlertComponent } from '../Components/alert/alert.component';

@Component({
  selector: 'app-supply-entry',
  templateUrl: './supply-entry.component.html',
  styleUrl: './supply-entry.component.scss',
})
export class SupplyEntryComponent {
  selected: Date | null;
  vehicleTypes: any = ['100', '200', '400', '600'];
  model: any = {};
  vehicles: any = [];
  customers: any = {};
  action: any = 'create';
  entries: any = {
    docs: [],
  };
  tableConfig: any = [];
  tabs: any = ['Active', 'Deleted'];
  filter: any = {
    isDeleted: false,
    page: 1,
  };

  constructor(

    private modal: MdbModalService,
    private router: Router,
    private vehicleService: VehicleService,
    private supplyEntryService: SupplyEntryService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {
    this.selected = null;
}


  change() {
    console.log(this.model);
  }

  // ngOnInit(): void {
  //   this.getVehicles();
  //   this.getCustomers();
  //   this.route.paramMap.subscribe((data: any) => {
  //     if (data.params.id != 'new') {
  //       this.action = 'update';
  //     }
  //   });
  // }
  ngOnInit(): void {
    this.supplyEntryService.getAllSupplyEntrys(this.filter).subscribe((data) => {
      this.entries.docs = data;
      console.log(this.entries);

      // Initialize table configuration after data is fetched
      this.tableConfig = [
        { column: 'Customer Name', columnVal: 'customerId', conversion: (customerId: any)=> customerId?.name?.toUpperCase()},
        { column: 'Vehicle Number', columnVal: 'vehicleId',conversion: (vehicleId: any)=> vehicleId?.vehicleNumber?.toUpperCase() },
        { column: 'Amount', columnVal: 'amount' },
        { column: 'Date Of Supply', columnVal: 'dateOfSupply' },
        {
          column: 'Action',
          actions: [
            {
              if: !this.filter.isDeleted, // condition wether it would be visible or not
              title: 'Edit',
              icon: 'fa-solid fa-pencil', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
              handler: (row: any) => {
                this.router.navigate([`/supplyentry/${row._id}`]);
              },
            },
            {
              if: !this.filter.isDeleted, // condition wether it would be visible or not
              title: 'Delete',
              icon: 'fa fa-trash', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
              handler: (row: any) => {
                this.popAlert("Delete",row._id);
              },
            },
            {
              if: this.filter.isDeleted, // condition wether it would be visible or not
              title: 'Restore',
              icon: 'fa fa-backward', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
              handler: (row: any) => {
                this.popAlert("Restore",row._id);
              },
            },
          ],
        },
      ];
    });
  }


  async getVehicles(){
    await this.vehicleService.getAllVehicles(this.filter).subscribe((value: any) => {
      this.vehicles = value;
    })
  }

  async getCustomers(){
    await this.userService.getAllUsers(this.filter).subscribe((value: any) => {
      this.customers = value;
    })
  }

  async selectTab(event: any) {
    this.filter.isDeleted = event ===1;
    await this.ngOnInit();
  }


  navigateToPage(page: any) {}
  view(vehicle: any) {}

  submit(form: any) {
    if (this.action == 'create') {
      this.supplyEntryService
        .createSupplyEntry(this.model)
        .subscribe((data: any) => {});
      this.router.navigate(['/supplyentry']);
    } else {
      this.supplyEntryService
        .updateSupplyEntry(this.model)
        .subscribe((data: any) => {});
      this.router.navigate(['/supplyentry']);
    }
  }

  setDate(){
    this.model.dateOfSupply = this.selected;
    this.change()
  }

  async popAlert(action:any,id: any) {
    this.modal.open(AlertComponent, {
      data: {
        title: `${action} Water Supply Entry?`,
        message: `Are you sure you want to ${action.toLowerCase()} this entry?`,
        actions: [
          { title: 'No', class: 'btn btn-secondary' },
          {
            title: 'Yes',
            class: 'btn btn-primary',
            handler: () => {
              if (action == "Delete") {
                this.supplyEntryService.deleteSupplyEntry(id).subscribe((value: any) => {
                });
                this.ngOnInit();
              } else {
                this.supplyEntryService.restoreSupplyEntry(id).subscribe((value: any) => {
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
