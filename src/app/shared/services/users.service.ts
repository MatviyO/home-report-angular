
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import 'rxjs/add/operator/map';
import {BaseApi} from '../core/base-api';

@Injectable()
export class UsersService extends BaseApi {

  constructor(public http: Http) {
    super(http);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.get(`email=${email}`);
  }
  createUser(user: User): Observable<User> {
    return this.post('users', user);
  }
}
