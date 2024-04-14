import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    page: 1,
  };
  userTypes: any = ['user', 'admin'];
  model: any = {};

  change() {
    console.log(this.model);
  }

  selectTab(event: any) {}

  navigateToPage(page: any) {}
  view(category: any) {}
}
