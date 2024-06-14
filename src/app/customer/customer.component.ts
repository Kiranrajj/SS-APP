import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { VehicleService } from '../services/vehicle.service';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AlertComponent } from '../Components/alert/alert.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  customers: any = {
    docs: [],
  };
  tableConfig: any = [];
  tabs: any = ['Active', 'Deleted'];
  isDeleted: any = false;
  filter: any = {
    isDeleted: false,
    userType: "customer",
    page: 1,
  };
  userTypes: any = ['user', 'admin'];

  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private userService: UserService,
    private model: MdbModalService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers(this.filter).subscribe((data) => {
      this.customers.docs = data;
      console.log(this.customers);
      // Initialize table configuration after data is fetched
      this.tableConfig = [
        { column: 'Customer Name', columnVal: 'name' },
        { column: 'Customer Number', columnVal: 'mobile' },
        // { column: 'Amount', columnVal: 'amount' },
        {
          column: 'Action',
          actions: [
            {
              if: true, // condition wether it would be visible or not
              title: 'Edit',
              icon: 'fa-solid fa-pencil', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
              handler: (row: any) => {
                this.router.navigate([`/customer/${row._id}`]);
              },
            },
            {
              if: true, // condition wether it would be visible or not
              title: 'Delete',
              icon: 'fa fa-trash', // `fa fa-trash` will change like <i class="fa fa-trash"></i>
              handler: (row: any) => {
                this.deleteCustomer(row?._id);
              },
            },
          ],
        },
      ];
    });
   }

  change() {
    console.log(this.model);
  }

  selectTab(event: any) {}

  navigateToPage(page: any) {}
  view(category: any) {}

  deleteCustomer(id: any){
    this.model.open(AlertComponent, {
      data: {
        title: 'Delete Customer',
        message: 'Are you sure you want to delete this customer?',
        actions: [
          { title: 'No', class: 'btn btn-secondary' },
          {
            title: 'Yes',
            class: 'btn btn-primary',
            handler: () => {
              this.userService.deleteUser(id).subscribe((value: any) => {
                this.ngOnInit();
              });
            },
          },
        ],
      },
    });}
}
