import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { model } from 'mongoose';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(input: any) {
    let url = `http://localhost:8080/user`;
    return this.http.post(url, input).pipe(map((data: any) => data?.data));
  }

  updateUser2(input: any){
    console.log(input)
  }

  updateUser(
    input: any,
    conversion: any = (input: any) => input): Observable<any> {
    let url = `http://localhost:8080/user/${input._id}`;
    let payload = conversion(input);
    return this.http.put<any>(url, payload).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  getAllUsers(input: any): Observable<any> {
    let url = `http://localhost:8080/user/`;
    return this.http.get<any>(url, { params: input }).pipe(
      map((data) => {
        return data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  getUserById(id: any): Observable<any> {
    let url = `http://localhost:8080/user/${id}`;
    return this.http.get<any>(url).pipe(
      map((data) => {
        return data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  deleteUser(id: any): Observable<any> {
    let url = `http://localhost:8080/user/${id}`;
    return this.http.delete<any>(url).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

  restoreUser(id: any): Observable<any> {
    let url = `http://localhost:8080/user/restore/${id}`;
    return this.http.put<any>(url,null).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(() => throwError('Unable to Authorized'))
    );
  }

}
