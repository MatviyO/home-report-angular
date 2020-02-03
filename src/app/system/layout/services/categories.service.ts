import {Injectable} from '@angular/core';
import {BaseApi} from '../../../shared/core/base-api';
import {Http} from '@angular/http';
import {CategoryModel} from '../models/category.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriesService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }
  addCategory(category: CategoryModel): Observable<CategoryModel> {
      return this.post('categories', category);
  }
}
