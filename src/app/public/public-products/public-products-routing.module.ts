import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicProductsComponent } from './public-products.component';
import { SavedProductsComponent } from './saved-products/saved-products.component';

const routes: Routes = [
  { path: 'products', component: PublicProductsComponent },
  { path: 'products/saved', component: SavedProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicProductsRoutingModule {}
