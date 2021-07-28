import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { BehaviorSubject, throwError } from 'rxjs';
import { Router } from '@angular/router';

export interface AuthResponseData {
  accessToken: string;
}

@Injectable()
export class AuthService {
  user = new BehaviorSubject<User | null>(null);
  public errorMessage: string

  constructor(private http: HttpClient, private router: Router) {}

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
          // this.tokenExpired(res.accessToken)
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

  tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  

  handleError(errorRes: HttpErrorResponse) {
    this.errorMessage = 'Invalid email or password';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(this.errorMessage);
    }
    return throwError(errorRes);
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["/signin"])
  }
}
