import { Injectable } from '@angular/core';
import { Category } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): Category[] {
    return [
      { id: 1, name: 'Category A', description: 'Category A description' },
      { id: 2, name: 'Category B', description: 'Category B description' },
      { id: 3, name: 'Category C', description: 'Category C description' },
    ]
  }
}
