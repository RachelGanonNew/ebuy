import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Customer } from '../class/customer'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: Customer;
  constructor(private http: HttpClient) {
   }

  url: string = "https://localhost:44389/api/user";

  AddUser(): Observable<any> {
    return this.http.post<any>(this.url, this.currentUser);
  }
}
