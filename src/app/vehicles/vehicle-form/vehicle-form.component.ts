import { Component , OnInit} from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.scss',
})
export class VehicleFormComponent implements OnInit {
  vehicleTypes: any = ['100', '200', '400', '600'];
  model: any = {};
  action: any = "create";

  constructor(private router: Router,
     private vehicleService: VehicleService,
     private route: ActivatedRoute
     ) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe((data: any) =>{
      if (data.params.id != "new"){
        this.get_vehicle(data.params.id)
        this.action = 'update'
      }
    })
  }

  get_vehicle(id : any){
    this.vehicleService.getVehicleById(id).subscribe((value: any)=>{
      this.model = value
    })
  }

  change() {
    console.log(this.model);
  }

  submit(form: any) {
    if(this.action == "create"){
      this.vehicleService.createVehicle(this.model).subscribe((data: any) => {});
      this.router.navigate(['/vehicles']);
    }else{
      this.vehicleService.updateVehicle(this.model).subscribe((data: any) => {});
      this.router.navigate(['/vehicles']);
    }
  }
}
