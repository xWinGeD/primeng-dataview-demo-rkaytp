import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductService } from 'src/app/productservice';
import { data } from 'src/assets/products';

@Component({
  selector: 'app-blueprint-item',
  templateUrl: './blueprint-item.component.html',
  styleUrls: ['./blueprint-item.component.scss']
})
export class BlueprintItemComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = data;
    setTimeout(()=> console.log(this.products), 0)
  }
}
