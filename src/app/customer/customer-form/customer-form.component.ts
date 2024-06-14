import { Component, OnInit  } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent implements OnInit  {
  vehicles: any = [];
  userTypes: any = ['customer', 'admin'];
  model: any = {};
  action: any = 'create';
  filter: any = {
    isDeleted: false
  }

  constructor(
    private router: Router,
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getVehicles();
    this.route.paramMap.subscribe((data: any) => {
      if (data.params.id != 'new') {
        this.get_user(data.params.id);
        this.action = 'update';
      }
    });
  }

  change() {
    console.log(this.model);
  }

  async get_user(id: any) {
    await this.userService.getUserById(id).subscribe((value: any) => {
      this.model = value;
    });
  }

  getVehicles(){
    this.vehicleService.getAllVehicles(this.filter).subscribe((value: any) => {
      this.vehicles = value;
    })
  }

  submit(form: any) {
    if (this.action == 'create') {
      console.log(this.model)
      this.userService.createUser(this.model).subscribe((data: any) => {});
      this.router.navigate(['/customer']);
    } else {
      this.userService.updateUser(this.model).subscribe((data: any) => {});
      this.router.navigate(['/customer']);
    }
  }
}
