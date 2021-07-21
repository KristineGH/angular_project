import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  UrlTree,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(
    route: ActivatedRouteSnapshot, 
    router: RouterStateSnapshot
  ):| boolean | UrlTree| Promise<boolean | UrlTree>| Observable<boolean | UrlTree> {
    return this.authService.user.pipe(
      map((user) => {
        if (user) {
          return true;
        }
        this.router.navigate(['/signin']);
        return false;
      })
    );
  }
}
