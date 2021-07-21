import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  public signUpForm: any;
  private userSignUp: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    console.log(email, password);
    this.userSignUp = this.authService
      .signUp(email, password)
      .subscribe((data) => {
        if (data.accessToken) {
          this.router.navigate(['/products']);
        }
      });
  }

  ngOnDestroy() {
    if (this.userSignUp) {
      this.userSignUp.unsubscribe();
    }
  }
}
