import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../auth/signin/auth.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

// import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;

  validUser = false;
  validToken: string;
  savedItemNumber;

  constructor(
    private router: Router,
    private authService: AuthService
  ) // private productService: ProductService
  {}

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe((user) => {
      if (user) {
        this.validUser = true;
        this.validToken = user.getToken();
      }
    });

    if (this.authService.tokenExpired(this.validToken)) {
      this.authService.logout();
      console.log('exp');
    }

    // this.productService.savedItemArr.subscribe((data) => {
    //   this.savedItemNumber = data.length;
    // });
  }

  onLogin() {
    this.router.navigate(['/signin']);
  }

  onLogout() {
    this.authService.logout();
    this.validUser = false;
    this.router.navigate(['/products']);
  }

  onSaved() {
    this.router.navigate(['/saved']);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
