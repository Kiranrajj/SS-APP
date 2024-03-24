import { Component } from '@angular/core';

@Component({
  selector: 'app-supply-entry',
  templateUrl: './supply-entry.component.html',
  styleUrl: './supply-entry.component.scss',
})
export class SupplyEntryComponent {
  selected: Date | null;
  vehicleTypes: any = ['100', '200', '400', '600'];
  model: any = {};
  customers: any = {};

  constructor() {
    this.selected = null;
}

  change() {
    console.log(this.model);
  }
}
