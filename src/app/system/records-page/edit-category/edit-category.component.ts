import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoryModel} from '../../layout/models/category.model';
import {CategoriesService} from '../../layout/services/categories.service';
import {Message} from '../../../shared/models/message';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() categories: CategoryModel[] = [];
  @Output() onCategoryEdit = new EventEmitter<CategoryModel>();
  currentCategoryId = 1;
  currentCategory: CategoryModel;
  message: Message;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.message = new Message('success', '');
    this.onCategoryChange();
  }
  onCategoryChange() {
    this.currentCategory = this.categories.find(c => c.id === +this.currentCategoryId);
  }

  onSubmit(form: NgForm) {
    let {capacity, name} = form.value;
    if (capacity < 0) {capacity *= -1; }

    const category = new CategoryModel(name, capacity, +this.currentCategoryId)
    this.categoriesService.updateCategory(category)
      .subscribe((cattegory: CategoryModel) => {
        this.onCategoryEdit.emit(cattegory)
        this.message.text = 'Category well be good edit';
        window.setTimeout( () => this.message.text = '', 5000)
      })
  }

}
