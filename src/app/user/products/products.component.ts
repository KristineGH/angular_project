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
  private getProductsSubscription: Subscription;
  private deleteProductSubscription: Subscription;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.deleteProductSubscription = this.productService
      .getProducts()
      .subscribe((data) => {
        this.products = JSON.parse(JSON.stringify(data));
        console.log(data);
      });
  }

  onCreateProduct() {
    this.router.navigate(['user/products/add']);
  }

  onDeleteProduct(id) {
    this.deleteProductSubscription = this.productService
      .deleteProduct(id)
      .subscribe((data) => {
        this.getProductsSubscription = this.productService
          .getProducts()
          .subscribe((data) => {
            this.products = JSON.parse(JSON.stringify(data));
          });
      });
  }

  onEditProduct(id) {
    this.router.navigate([`user/products/edit/${id}`]);
  }

  ngOnDestroy() {
    if (this.getProductsSubscription) {
      this.getProductsSubscription.unsubscribe();
    }
    if (this.deleteProductSubscription) {
      this.deleteProductSubscription.unsubscribe();
    }
  }
}
