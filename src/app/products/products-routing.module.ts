import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from '../auth/auth.guard';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'add', component: AddProductComponent, canActivate: [AuthGuard] },
  {
    path: 'edit/:id',
    component: EditProductComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
