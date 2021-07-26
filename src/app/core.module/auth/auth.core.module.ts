import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from 'src/app/auth/auth-interceptor.service';
import { AuthService } from 'src/app/auth/auth.service';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  providers: [
      AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
})
export class AuthCoreModule {}