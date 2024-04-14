import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  vehicles: any = [];
  userTypes: any = ['user', 'admin'];
  model: any = {};
  action: any = 'create';

  change() {
    console.log(this.model);
  }
}
