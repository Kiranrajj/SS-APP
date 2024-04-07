import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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

  getAllVehicles(input: any): Observable<any> {
    let url = `http://localhost:8080/vehicle/`;
    return this.http.get<any>(url, { params: input }).pipe(
      map((data) => {
        return data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }
}
