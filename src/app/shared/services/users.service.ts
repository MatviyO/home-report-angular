
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import 'rxjs/add/operator/map';
import {BaseApi} from '../core/base-api';

@Injectable()
export class UsersService extends BaseApi  {

  constructor(public http: Http) {
    super(http);
  }
  getUserByEmail(email: string): Observable<User> {
    return this.get(`users?email=${email}`).map((users: User[]) => {
        return users[0] ? users[0] : undefined
      });
  }

  createUser(user: User): Observable<User> {
    return this.post('users', user);
  }


















  // getUserByEmail(email: string): Observable<User> {
  //   return this.http.get(`http://localhost:3000/users?email=${email}`)
  //     .map((response: Response) => response.json())
  //     .map((user: User) => user[0] ? user[0] : undefined);
  // }
  // createUser(user: User): Observable<User> {
  //   return this.http.post('http://localhost:3000/users', user)
  //     .map((response: Response) => response.json());
  // }
}
