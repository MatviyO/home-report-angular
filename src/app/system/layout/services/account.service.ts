import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AccountModel} from '../models/account.model';
import {BaseApi} from '../../../shared/core/base-api';

@Injectable()

export class AccountService extends BaseApi {
  api_key = 'c2190a397cd345fe63ba4d2f5fa51f15';
  url = 'http://data.fixer.io/api/latest';
  constructor(public http: Http) {
    super(http);
  }
  getAccount(): Observable<AccountModel> {
    return this.get('account');
  }
  getCurrency(base: string = 'RUB'): Observable<any> {
    return this.http.get(`${this.url}?access_key=${this.api_key}&base=${base}`)
      .map((res: Response) => res.json());
  }

}
