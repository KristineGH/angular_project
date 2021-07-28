import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
} from '@angular/common/http';
import { exhaustMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      exhaustMap((user) => {
        if (!user && !localStorage.getItem("token")) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          headers: req.headers.set(
            'Authorization',
            `Bearer ${localStorage.getItem('token')}`
          ),
        });
        console.log('auth');
        return next.handle(modifiedReq);
      })
    );
  }
}
