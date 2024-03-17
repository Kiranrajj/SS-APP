import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  vehicles: any = [];
  userTypes: any = ['user', 'admin'];
  model: any = {};
  countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    // Other countries...
  ];

  change() {
    console.log(this.model);
  }
}
