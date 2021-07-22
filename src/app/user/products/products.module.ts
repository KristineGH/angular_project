import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { StartProductsComponent } from './start-products/start-products.component';
import { HeaderComponent } from '../header/header.component';
import { ButtonModule } from 'primeng/button';
import { ProductsComponent } from './products.component';
import { UserSharedModule } from '../shared/components/user-shared.module';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [AddProductComponent, EditProductComponent, StartProductsComponent, HeaderComponent, ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    UserSharedModule,
    TableModule
  ],
})
export class ProductsModule {}
