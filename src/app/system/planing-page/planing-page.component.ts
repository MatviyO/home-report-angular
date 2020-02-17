import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeaderService} from '../layout/services/header.service';
import {AccountService} from '../layout/services/account.service';
import {CategoriesService} from '../layout/services/categories.service';
import {EventsService} from '../layout/services/events.service';
import {Observable} from 'rxjs/Observable';
import {AccountModel} from '../layout/models/account.model';
import {CategoryModel} from '../layout/models/category.model';
import {EventModel} from '../../shared/models/event.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-planing-page',
  templateUrl: './planing-page.component.html',
  styleUrls: ['./planing-page.component.scss']
})
export class PlaningPageComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  isLoading = false;
  account: AccountModel;
  categories: CategoryModel[] = [];
  events: EventModel[] = [];

  constructor(private titleService: HeaderService,
              private accountService: AccountService,
              private categoriesService: CategoriesService,
              private eventService: EventsService) { }

  ngOnInit() {
    this.titleService.setTitle('Planing');
    this.sub1 = Observable.combineLatest(
      this.accountService.getAccount(),
      this.categoriesService.getCategories(),
      this.eventService.getAllEvents()
    ).subscribe( (data: [AccountModel, CategoryModel[], EventModel[]]) => {
      this.account = data[0]
      this.categories = data[1];
      this.events = data[2];
      this.isLoading = true;
    });
  }

  getCategoryCost(cat: CategoryModel): number {
    const catEvents = this.events.filter( e => e.category === cat.id && e.type === 'outcome')
    return catEvents.reduce( (total, e) => {
      total += e.amount;
      return total;
    }, 0);
  }
  private getPercent(cat: CategoryModel): number  {
      const percent = (100 * this.getCategoryCost(cat)) / cat.capacity;
      return percent > 100 ? 100 : percent;
  }
  getCatPercent(cat: CategoryModel): string {
    return this.getPercent(cat) + '%';
  }
  getCatColorClass(cat: CategoryModel): string {
    const percent = this.getPercent(cat);
    return percent < 60 ? 'success' : percent >= 100 ? 'danger' : 'warning';
  }

  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
  }
}
