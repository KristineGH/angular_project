import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PublicProductService {
  public favoriteProductsArr: BehaviorSubject<Array<any>> = new BehaviorSubject(    
    []
  );

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${environment.heroku}/products`);
  }
}
