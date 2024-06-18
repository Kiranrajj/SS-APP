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

  getVehicleById(id: any): Observable<any> {
    let url = `http://localhost:8080/vehicle/${id}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  updateVehicle(
    input: any,
    conversion: any = (input: any) => input
  ): Observable<any> {
    let url = `http://localhost:8080/vehicle/${input._id}`;
    let payload = conversion(input);
    return this.http.put<any>(url, payload).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  deleteVehicle(id: any): Observable<any> {
    let url = `http://localhost:8080/vehicle/${id}`;
    return this.http.delete<any>(url).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }
  restoreVehicle(id: any): Observable<any> {
    let url = `http://localhost:8080/vehicle/restore/${id}`;
    return this.http.put<any>(url,null).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }
}
