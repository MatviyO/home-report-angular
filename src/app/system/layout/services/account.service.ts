import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AccountModel} from '../models/account.model';

@Injectable()

export class AccountService  {
  api_key = 'c2190a397cd345fe63ba4d2f5fa51f15';
  url = 'http://data.fixer.io/api/latest';
  constructor(private http: Http) {}

  getAccount(): Observable<AccountModel> {
    return this.http.get('http://localhost:3000/account')
      .map((res: Response) => res.json());
  }
  getCurrency(base: string = 'EUR'): Observable<any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=${this.api_key}&base=${base}`)
      .map((res: Response) => res.json());
  }
  updateAccount(account: AccountModel): Observable<AccountModel> {
    return this.http.put('http://localhost:3000/account', account)
      .map((res: Response) => res.json());
  }

}
