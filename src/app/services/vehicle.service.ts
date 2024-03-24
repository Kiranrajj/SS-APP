import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  createVehicle(input: any) {
    console.log(input, 'input');
    let url = `http://localhost:8080/vehicle`;
    return this.http.post(url, input);
  }
}
