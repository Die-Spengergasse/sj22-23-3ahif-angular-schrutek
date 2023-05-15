import { Component } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  //public productList: Product[];

  constructor(private productService: ProductService) { 
    //this.productList = this.productService.getData();
  }

  getData(): Product[] {
    return this.productService.getData();
  }
}
