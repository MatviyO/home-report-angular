import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../layout/models/category.model';
import {NgForm} from '@angular/forms';
import {EventModel} from '../../../shared/models/event.model';
import * as moment from 'moment';
import {EventsService} from '../../layout/services/events.service';
import {AccountService} from '../../layout/services/account.service';

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

  constructor(private eventsService: EventsService,
              private accountService: AccountService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const {amount, description, category, type} = form.value;
    const event = new EventModel(type, amount, +category, moment().format('DD.MM.YYYYY HH:mm:ss'), description);
    this.eventsService.addEvent(event);
  }

}
