import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeaderService} from '../layout/services/header.service';
import {CategoriesService} from '../layout/services/categories.service';
import {EventsService} from '../layout/services/events.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {CategoryModel} from '../layout/models/category.model';
import {EventModel} from '../../shared/models/event.model';
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  categories: CategoryModel[] = [];
  events: EventModel[] = [];
  isLoaded = false;
  chartData = [];

  constructor(private titleService: HeaderService,
              private categoriesService: CategoriesService,
              private eventService: EventsService) { }
  ngOnInit() {
    this.titleService.setTitle('History');
    this.sub1 = Observable.combineLatest(
      this.categoriesService.getCategories(),
      this.eventService.getAllEvents()
    ).subscribe((data: [CategoryModel[], EventModel[]]) => {
      this.categories = data[0];
      this.events = data[1];
      this.calculateChartData();

      this.isLoaded = true;
    })
  }
  calculateChartData(): void {
    this.chartData = [];
    this. categories.forEach((cat) => {
      const catEvents = this.events.filter((e) => e.category === cat.id && e.type === 'outcome' );
      this.chartData.push({
        name: cat.name,
        value: catEvents.reduce((total, event) => {
          total += event.amount;
          return total;
        }, 0)
      });

    })
  }

  ngOnDestroy() {
    if (this.sub1) {this.sub1.unsubscribe() }
  }
}
