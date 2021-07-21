import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CoreModule } from './core.module';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './user/products/products.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductsComponent, UserComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ButtonModule,
    AccordionModule,
    InputTextModule,
    BadgeModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
