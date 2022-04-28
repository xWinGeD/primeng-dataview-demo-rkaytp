import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product.model';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts() {
      return this.http.get<any>('assets/products.json')
      .toPromise()
      .then(res => <Product[]>res.data)
      .then(data => { return data; });
    }
}