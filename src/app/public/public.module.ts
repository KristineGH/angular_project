import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PublicRoutingModule } from "./public-routing.module";
import { PublicComponent } from "./public.component";
import { PublicProductsComponent } from './public-products/public-products.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { HeaderSharedModule } from "./shared/components/header-shared.module";

@NgModule({
    declarations:[PublicComponent, PublicProductsComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, PublicRoutingModule, HeaderSharedModule]
})
export class PublicModule {}