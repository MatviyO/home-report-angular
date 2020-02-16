import {BaseApi} from '../../../shared/core/base-api';
import { Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {EventModel} from '../../../shared/models/event.model';
@Injectable()
export class EventsService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }
  addEvent(event: EventModel): Observable<EventModel> {
    return this.post('events', event);
  }
}
