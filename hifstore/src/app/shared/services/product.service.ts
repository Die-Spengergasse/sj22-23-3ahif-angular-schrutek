import { Injectable } from '@angular/core';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getData(): Product[] {
    return [ 
      { id:  1, name: 'Product A', price: 10.1226,    isFavorite: false },
      { id:  2, name: 'Product B', price: 12.54147,   isFavorite: false },
      { id:  3, name: 'Product C', price: 5.8,        isFavorite: true  },
      { id:  4, name: 'Product D', price: 53,         isFavorite: false },
      { id:  5, name: 'Product E', price: 12,         isFavorite: false },
      { id:  6, name: 'Product F', price: 27,         isFavorite: false },
      { id:  7, name: 'Product G', price: 159.78,     isFavorite: true  },
      { id:  8, name: 'Product H', price: 18.74,      isFavorite: false },
      { id:  9, name: 'Product I', price: 156.789654, isFavorite: false },
      { id: 10, name: 'Product J', price: 12.4569,    isFavorite: false } 
    ]    
  }
}
