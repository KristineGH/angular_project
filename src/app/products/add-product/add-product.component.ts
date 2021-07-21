import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit, OnDestroy {
  public createForm;
  private sendProduct: Subscription;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      address: [''],
      title: ['', Validators.required],
      info: ['', [Validators.required, Validators.maxLength(125)]],
      price: ['', [Validators.required, Validators.min(0.1)]],
    });
  }

  onSubmit() {
    const image = this.createForm.value.address;
    const title = this.createForm.value.title;
    const info = this.createForm.value.info;
    const price = this.createForm.value.price;

    this.productService
      .sendProduct(image, title, info, price)
      .subscribe((data) => console.log(data));

     this.createForm.reset() 
     this.router.navigate(["/products"])
  }

  ngOnDestroy() {
    if (this.sendProduct) {
      this.sendProduct.unsubscribe();
    }
  }
}
