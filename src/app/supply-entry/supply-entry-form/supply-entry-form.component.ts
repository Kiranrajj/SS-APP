import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplyEntryService } from '../../services/supply-entry.service';
import { VehicleService } from '../../services/vehicle.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-supply-entry-form',
  templateUrl: './supply-entry-form.component.html',
  styleUrl: './supply-entry-form.component.scss'
})
export class SupplyEntryFormComponent {
  selected: Date | null;
  vehicleTypes: any = ['100', '200', '400', '600'];
  model: any = {};
  vehicles: any[] = [];
  customers: any = [];
  action: any = 'create';
  filter: any = {
    isDeleted: false
  }

  constructor(
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

  ngOnInit(): void {
    this.getVehicles();
    this.getCustomers();
    this.route.paramMap.subscribe((data: any) => {
      if (data.params.id != 'new') {
        this.get_supplyEntry(data.params.id);
        this.action = 'update';
      }
    });
  }

  async get_supplyEntry(id: any) {
    await this.supplyEntryService.getSupplyEntryById(id).subscribe((value: any) => {
      this.model = value;
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

}
