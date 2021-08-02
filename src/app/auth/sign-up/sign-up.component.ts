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
  private userSignUpSubscription: Subscription;
  private isAdmin = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      admin: [false],
    });
  }

//   onBasicUpload(event) {
//     console.log(event.files)
//     //event.files == files to upload
// }
  onSubmit() {
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    const name = this.signUpForm.value.name;
    const admin = this.signUpForm.value.admin;
    console.log(admin);
    console.log(this.signUpForm);
    this.userSignUpSubscription = this.authService
      .signUp(email, password, name, this.isAdmin)
      .subscribe((data) => {
        // if (data.token && data.isAdmin) {
        //   this.router.navigate(['/admin']);
        // } else if(data.token && !data.isAdmin) {
        //   this.router.navigate(['/user/products']);
        // }
        if(data.accessToken) {
          this.router.navigate(["user/products"])
        }
      });
  }

  // onCheckChange(){
  //   this.isAdmin = !this.isAdmin
  //   console.log(this.isAdmin)
  // }

  ngOnDestroy() {
    if (this.userSignUpSubscription) {
      this.userSignUpSubscription.unsubscribe();
    }
  }
}
