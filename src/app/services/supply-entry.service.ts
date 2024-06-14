import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupplyEntryService {

  constructor(private http: HttpClient) { }

  createSupplyEntry(input: any) {
    console.log(input, 'input');
    let url = `http://localhost:8080/supplyEntry`;
    return this.http.post(url, input);
  }

  getAllSupplyEntrys(input: any): Observable<any> {
    let url = `http://localhost:8080/supplyEntry/`;
    return this.http.get<any>(url, { params: input }).pipe(
      map((data) => {
        return data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  getSupplyEntryById(id: any): Observable<any> {
    let url = `http://localhost:8080/supplyEntry/${id}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  updateSupplyEntry(
    input: any,
    conversion: any = (input: any) => input
  ): Observable<any> {
    let url = `http://localhost:8080/supplyEntry/${input._id}`;
    let payload = conversion(input);
    return this.http.put<any>(url, payload).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  deleteSupplyEntry(id: any): Observable<any> {
    let url = `http://localhost:8080/supplyEntry/${id}`;
    return this.http.delete<any>(url).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }
}
