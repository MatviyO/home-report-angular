import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeaderService} from '../layout/services/header.service';
import {AccountService} from '../layout/services/account.service';
import {Observable} from 'rxjs/Observable';
import {AccountModel} from '../layout/models/account.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit, OnDestroy {
  subscribtion: Subscription;
  constructor(private titleService: HeaderService,
              private accountService: AccountService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Account');
    this.subscribtion = Observable.combineLatest(
      this.accountService.getAccount(),
      this.accountService.getCurrency()
    ).subscribe((data: [AccountModel, any]) => {
      console.log(data);
    })
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
