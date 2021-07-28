import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  // canActivateChild: [AuthGuard],
  {
    path: '',
    component: UserComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
