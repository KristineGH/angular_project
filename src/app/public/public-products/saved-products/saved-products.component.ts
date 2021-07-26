import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/user/products/product.model';
import { PublicProductService } from '../public-product.service';

@Component({
  selector: 'app-saved-products',
  templateUrl: './saved-products.component.html',
  styleUrls: ['./saved-products.component.scss'],
})
export class SavedProductsComponent implements OnInit {
  public savedProducts: Product[] = [];

  constructor(private publicProductService: PublicProductService) {}

  ngOnInit(): void {
    this.savedProducts =
      this.publicProductService.favoriteProductsArr.getValue();
  }
}
