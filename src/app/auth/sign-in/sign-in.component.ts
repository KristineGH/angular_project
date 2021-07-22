import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit, OnDestroy {
  public signInForm: any;
  public userSignInSubscription: Subscription;
  public error: Error;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;

    this.userSignInSubscription = this.authService.signIn(email, password).subscribe(
      (data) => {
        if (data.accessToken) {
          this.router.navigate(['/user/products']);
        }
      },
      (errorMessage) => {
        this.error = errorMessage;
      }
    );
  }

  onRegister() {
    this.router.navigate(['register']);
  }

  ngOnDestroy() {
    if (this.userSignInSubscription) {
      this.userSignInSubscription.unsubscribe();
    }
  }
}
