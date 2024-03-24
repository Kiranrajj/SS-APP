import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  // createUser(input: any) {
  //   let url = `${environment.base_url}/user`;
  //   return this.http.post(url, input).pipe(map((data: any) => data?.data));
  // }
}
