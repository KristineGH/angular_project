import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, AuthComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule, ReactiveFormsModule, FileUploadModule,HttpClientModule],
  
})
export class AuthModule {}
