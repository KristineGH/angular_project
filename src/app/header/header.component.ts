import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from '../auth/signin/auth.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
// import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;

  validUser = false;
  savedItemNumber;

  constructor(
    private router: Router,
    private authService: AuthService,
    // private productService: ProductService
  ) {}

  ngOnInit() {
    this.userSubscription = this.authService.user.subscribe((user) => {
      if (user) {
        this.validUser = true;
      }
    });

    // this.productService.savedItemArr.subscribe((data) => {
    //   this.savedItemNumber = data.length;
    // });
  }

  onLogin() {
    this.router.navigate(['/auth']);
  }

  onLogout() {
    this.authService.logout();
    this.validUser = false;
  }

  onSaved() {
    this.router.navigate(['/saved']);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
