import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../layout/models/category.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Input() categories: CategoryModel[] = [];
  types = [
    {type: 'outcome', label: 'Cost'},
    {type: 'income', lable: 'Profit'}
  ];
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

  }

}
