import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { AuthCoreModule } from '../core.module/auth/auth.core.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UserRoutingModule],
})
export class UserModule {}




