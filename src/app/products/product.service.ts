import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${environment.heroku}/products`);
  }

  sendProduct(image: string, title: string, info: string, price: number) {
    // userId: userId,
    return this.http.post(
      `${environment.heroku}/products`,
      {
        image,
        title,
        info,
        price,
        userId: 4,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    );
  }

  deleteProduct(productId) {
    console.log(productId);
    console.log(localStorage.getItem('token'));
    return this.http.delete(`${environment.heroku}/products/${productId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
  }

  getProductById(id): Observable<object> {
    return this.http.get(`${environment.heroku}/products/${id}`);
  }

  editProduct(id, image, title, info, price, userId) {
    return this.http.put(
      `${environment.heroku}/products/${id}`,
      {
        image,
        title,
        info,
        price,
        userId,
      },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      }
    );
  }
}
