import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { PublicProductsComponent } from './public-products/public-products.component';
import { HeaderSharedModule } from './shared/components/header-shared.module';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [PublicComponent, PublicProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicRoutingModule,
    HeaderSharedModule,
    BadgeModule,
  ],
})
export class PublicModule {}
