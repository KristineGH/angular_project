import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from 'src/app/user/products/products.component';
import { HeaderSharedModule } from '../shared/components/header-shared.module';
import { PublicProductsRoutingModule } from './public-products-routing.module';
import { SavedProductsComponent } from './saved-products/saved-products.component';
import { DialogModule } from 'primeng/dialog';
import { BadgeModule } from 'primeng/badge';
import { PublicProductsComponent } from './public-products.component';

@NgModule({
  declarations: [SavedProductsComponent, PublicProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicProductsRoutingModule,
    HeaderSharedModule,
    DialogModule,
    BadgeModule,
  ],
})
export class PublicProductsModule {}
