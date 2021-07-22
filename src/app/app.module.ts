import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import {TableModule} from 'primeng/table';
// import { BadgeModule } from 'primeng/badge';
// import { AccordionModule } from 'primeng/accordion';
// import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { ProductsComponent } from './user/products/products.component';
import { AuthCoreModule } from './core.module/auth/auth.core.module';
import { PublicComponent } from './public/public.component';


@NgModule({
  declarations: [AppComponent, PublicComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    // AccordionModule,
    // InputTextModule,
    // BadgeModule,
    AuthCoreModule,
    // TableModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
