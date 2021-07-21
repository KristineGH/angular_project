import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit, OnDestroy {
  public editForm;
  public product: Product;
  private id;
  private productSubscription: Subscription;
  private productEditSubscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      address: [''],
      title: ['', Validators.required],
      info: ['', [Validators.required, Validators.maxLength(125)]],
      price: ['', [Validators.required, Validators.min(0.1)]],
    });

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.productSubscription = this.productService
        .getProductById(this.id)
        .subscribe((data: Product) => {
          this.product = data;
          this.editForm.controls['address'].setValue(this.product.image);
          this.editForm.controls['title'].setValue(this.product.title);
          this.editForm.controls['info'].setValue(this.product.info);
          this.editForm.controls['price'].setValue(this.product.price);
        });
    });
  }

  onSubmitForm() {
    const image = this.editForm.controls['address'].value;
    const title = this.editForm.controls['title'].value;
    const info = this.editForm.controls['info'].value;
    const price = this.editForm.controls['price'].value;
    const userId = this.product.userId;

    this.productEditSubscription = this.productService
      .editProduct(this.id, image, title, info, price, userId)
      .subscribe();

    this.editForm.reset();
    this.router.navigate(['/products']);
  }

  ngOnDestroy() {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
    if (this.productEditSubscription) {
      this.productEditSubscription.unsubscribe();
    }
  }
}
