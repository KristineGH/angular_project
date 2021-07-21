import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    router: RouterStateSnapshot
  ):| boolean | UrlTree| Promise<boolean | UrlTree>| Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      map((user) => {
        if (user) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}
