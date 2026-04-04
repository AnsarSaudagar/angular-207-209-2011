import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any = [];
  private API_URL = `https://69c7b5d963393440b3170810.mockapi.io/products`

  http = inject(HttpClient);

  productSubject = new Subject();

  getProducts() {
    return this.http.get(this.API_URL);
  }

  addProduct(productData: any) {
    // observable
    return this.http.post(this.API_URL, productData);
  }

  deleteProduct(id : string){
    return this.http.delete(this.API_URL + '/' + id);
  }
}
