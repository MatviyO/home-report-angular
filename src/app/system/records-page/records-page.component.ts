import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../layout/services/header.service';
import {CategoryModel} from '../layout/models/category.model';
import {CategoriesService} from '../layout/services/categories.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  categories: CategoryModel[] = [];
  isLoading = false;
  constructor(private titleService: HeaderService,
              private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.titleService.setTitle('Records');
    this.categoriesService.getCategories()
      .subscribe((categories: CategoryModel[]) => {
        this.categories = categories;
        this.isLoading = true;
      })
  }

  newCategoryAdded(category: CategoryModel) {
    this.categories.push(category);
    console.log(this.categories)
  }
}
