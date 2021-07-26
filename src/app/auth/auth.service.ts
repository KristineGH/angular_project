import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { BehaviorSubject, throwError } from 'rxjs';

export interface AuthResponseData {
  accessToken: string;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string) {
    return this.http
      .post(`${environment.heroku}/login`, {
        email,
        password,
      })
      .pipe(
        catchError(this.handleError),
        tap((res: AuthResponseData) => {
          console.log(res);
          this.handleAuthentication(res.accessToken);
        })
      );
  }

  signUp(email: string, password: string) {
    return this.http
      .post(`${environment.heroku}/register`, {
        email,
        password,
      })
      .pipe(
        catchError(this.handleError),
        tap((res: AuthResponseData) => {
          console.log(res);
          this.handleAuthentication(res.accessToken);
        })
      );
  }

  handleAuthentication(token: string) {
    const user = new User(token);
    this.user.next(user);
    localStorage.setItem('token', token);
  }

  autoLogin() {
    const userData: {
      _token: string;
    } = { _token: localStorage.getItem('token') };
    if (!userData) {
      return;
    }
    const loadedUser = new User(userData._token);
    if (loadedUser.getToken()) {
      this.user.next(loadedUser);
    }
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorRes);
  }

  logout(){
    localStorage.removeItem("token")
  }
}
