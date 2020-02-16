import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../layout/models/category.model';
import {NgForm} from '@angular/forms';
import {EventModel} from '../../../shared/models/event.model';
import * as moment from 'moment';

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
    const {amount, description, category, type}  = form.value;
    const event = new EventModel(type, amount, +category, moment().format('DD.MM.YYYYY HH:mm:ss'), description)
  }

}
