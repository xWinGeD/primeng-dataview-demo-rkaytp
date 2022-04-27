import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';

interface IData {
  "name": string;
  "category": string;
  "version": string;
  "url": string;
}

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