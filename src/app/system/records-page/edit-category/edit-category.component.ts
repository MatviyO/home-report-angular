import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CategoryModel} from '../../layout/models/category.model';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  @Input() categories: CategoryModel[] = [];
  @Output() onCategoryAdd = new EventEmitter<CategoryModel>();
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

  }

}
