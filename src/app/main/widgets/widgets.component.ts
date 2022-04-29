import { Component, OnInit } from '@angular/core';
import { IWidget } from 'src/app/product.model';
import { widgetsData } from 'src/assets/widgets';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  products: IWidget[];

  constructor() {
    this.products = widgetsData;
    setTimeout(() => console.log(this.products), 0);
  }

  ngOnInit(): void {
  }
}
