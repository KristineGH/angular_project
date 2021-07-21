import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products = [];
  private getProducts: Subscription;
  private deleteProduct: Subscription;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getProducts = this.productService.getProducts().subscribe((data) => {
      this.products = JSON.parse(JSON.stringify(data));
      console.log(data);
    });
  }

  onCreateProduct() {
    this.router.navigate(['/products/add']);
  }

  onDeleteProduct(id) {
    this.deleteProduct = this.productService
      .deleteProduct(id)
      .subscribe((data) => {
        this.getProducts = this.productService
          .getProducts()
          .subscribe((data) => {
            this.products = JSON.parse(JSON.stringify(data));
          });
      });
  }

  ngOnDestroy() {
    if (this.getProducts) {
      this.getProducts.unsubscribe();
    }
    if (this.deleteProduct) {
      this.deleteProduct.unsubscribe();
    }
  }
}
