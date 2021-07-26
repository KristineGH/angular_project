import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from 'src/app/user/products/products.component';
import { HeaderSharedModule } from '../shared/components/header-shared.module';
import { PublicProductsRoutingModule } from './public-products-routing.module';
import { SavedProductsComponent } from './saved-products/saved-products.component';

@NgModule({
  declarations: [SavedProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicProductsRoutingModule,
    HeaderSharedModule,
  ],
})
export class PublicProductsModule {}
