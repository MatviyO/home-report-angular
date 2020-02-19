import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../layout/models/category.model';
import {EventModel} from '../../../shared/models/event.model';

@Component({
  selector: 'app-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @Input() categories: CategoryModel[] = [];
  @Input() events: EventModel[] = [];
  searchValue = '';
  searchPlaceholder = 'Sum';
  searchFilt = 'amount';
  constructor() { }
  ngOnInit() {
    this.events.forEach((e) => {
      e.catName = this.categories.find((c) => c.id === e.category).name;
    })
  }

  getEventClass(e: EventModel) {
    return {
      'label': true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    }
  }
  changeCriteries(filt: string) {
    const namesMap = {
      amount: 'Sum',
      date: 'Date',
      category: 'Category',
      type: 'Type'
    };
    this.searchPlaceholder = namesMap[filt];
    this.searchFilt = filt;
  }

}
