import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {EventsService} from '../../layout/services/events.service';
import {CategoriesService} from '../../layout/services/categories.service';
import {EventModel} from '../../../shared/models/event.model';
import {CategoryModel} from '../../layout/models/category.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {
  event: EventModel;
  category: CategoryModel;
  isLoaded = false;
  s1: Subscription;

  constructor(private route: ActivatedRoute,
              private eventService: EventsService,
              private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.route.params
      .mergeMap((params: Params) => this.eventService.getEventById(params['id']))
      .mergeMap((event: any) => {
        this.event = event;
        return this.categoriesService.getCategoryById(event.category)
      })
      .subscribe((category: CategoryModel) =>  {
        this.category = category;
        this.isLoaded = true;
      })
  }
  ngOnDestroy() {
    if (this.s1) {
      this.s1.unsubscribe();
    }
  }
}
