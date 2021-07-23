import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/user/products/product.model';
import { PublicProductService } from './public-product.service';

@Component({
  selector: 'app-public-products',
  templateUrl: './public-products.component.html',
  styleUrls: ['./public-products.component.scss']
})
export class PublicProductsComponent implements OnInit, OnDestroy{

  public products: Product[] = []
  private getProductsSubscription: Subscription
  constructor(private publicProductService: PublicProductService) { }

  ngOnInit(): void {
    this.getProductsSubscription = this.publicProductService.getProducts().subscribe((data) => {
      this.products = JSON.parse(JSON.stringify(data));
    })
  }

  onAddFavorites(product) {
  
      this.publicProductService.favoriteProductsArr.next([
        ...this.publicProductService.favoriteProductsArr.getValue(),
        product,
      ]);
  }

  ngOnDestroy() {
    if(this.getProductsSubscription){
      this.getProductsSubscription.unsubscribe()
    }
  }

}
