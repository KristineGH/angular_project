import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsModule),
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class UserRoutingModule {}
