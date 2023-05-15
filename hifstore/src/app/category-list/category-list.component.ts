import { Component } from '@angular/core';
import { CategoryService } from '../shared/services/category.service';
import { Category } from '../shared/models/category-model';

@Component({
  selector: 'spg-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  constructor(private categoryService: CategoryService) { }

  getCategories(): Category[] {
    return this.categoryService.getCategories();
  }
}
