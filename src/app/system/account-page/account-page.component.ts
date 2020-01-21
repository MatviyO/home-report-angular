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
  sub1: Subscription;
  sub2: Subscription;
  currency: any;
  account: AccountModel;

  constructor(private titleService: HeaderService,
              private accountService: AccountService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Account');
    this.sub1 = Observable.combineLatest(
      this.accountService.getAccount(),
      this.accountService.getCurrency()
    ).subscribe((data: [AccountModel, any]) => {
      this.account = data[0];
      this.currency = data[1];
    })
  }
  ngOnDestroy() {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
  onRefresh() {
   this.sub2 = this.accountService.getCurrency().subscribe((currency: any) => {
      this.currency = currency;
    })
  }
}
