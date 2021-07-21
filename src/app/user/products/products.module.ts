import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { StartProductsComponent } from './start-products/start-products.component';

@NgModule({
  declarations: [AddProductComponent, EditProductComponent, StartProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
