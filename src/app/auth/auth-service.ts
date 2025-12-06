import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from './login-response';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  private token = 'auth_token';
  
  constructor(private http: HttpClient) { }
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.apiUrl + "api/Admin" , loginRequest)
    .pipe(tap(response => {
      if (response.success) {
        localStorage.setItem(this.token, response.token);
      }
    }));
  }
   logout() {
    localStorage.removeItem(this.token);
   } 

   isLoggedIn(): boolean {
    return localStorage.getItem(this.token) !== null;
   }
}

