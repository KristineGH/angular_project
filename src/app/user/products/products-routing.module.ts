import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: ProductsComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
