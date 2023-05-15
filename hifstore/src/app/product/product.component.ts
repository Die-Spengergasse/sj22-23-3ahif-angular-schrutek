import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product-model';

@Component({
  selector: 'spg-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  public productItem: Product | null;

  constructor() {
    this.productItem = null;
  }
}
