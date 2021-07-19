import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: "root"})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(email: string, password: string) {
    return this.http.post(`${environment.heroku}/login`, {
      email,
      password,
    });
  }

  signUp(email: string, password: string) {
    return this.http.post(`${environment.heroku}/register`, {
      email,
      password,
    });
  }
}
