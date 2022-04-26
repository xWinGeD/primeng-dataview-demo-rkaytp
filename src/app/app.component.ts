import {Component} from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
    products: Product[];

    constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);

        this.primengConfig.ripple = true;
    }
}
