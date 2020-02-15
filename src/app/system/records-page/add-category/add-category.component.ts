import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoriesService} from '../../layout/services/categories.service';
import {CategoryModel} from '../../layout/models/category.model';
import {Message} from '../../../shared/models/message';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit{
  @Output() onCategoryAdd = new EventEmitter<CategoryModel>();
  message: Message;
  constructor(private categoriesService: CategoriesService) { }
  ngOnInit() {
    this.message = new Message('success', '');
  }

  onSubmit(form: NgForm) {
    // tslint:disable-next-line:prefer-const
    let { name, capacity} = form.value;
    if (capacity < 0) { capacity *= -1; }
    const category = new CategoryModel(name, capacity );
    this.categoriesService.addCategory(category)
      .subscribe((ccategory: CategoryModel) => {
        form.reset();
        form.form.patchValue({capacity: 1});
        this.onCategoryAdd.emit(ccategory);
        this.message.text = 'Category well be good add';
        window.setTimeout( () => this.message.text = '', 5000)
      });
  }

}
