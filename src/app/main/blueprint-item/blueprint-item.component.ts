import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/productservice';

@Component({
  selector: 'app-blueprint-item',
  templateUrl: './blueprint-item.component.html',
  styleUrls: ['./blueprint-item.component.scss']
})
export class BlueprintItemComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().then(data => this.products = data);
  }
}
