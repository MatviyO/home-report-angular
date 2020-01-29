import {Component, Input, OnInit} from '@angular/core';
import {AccountModel} from '../../layout/models/account.model';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent implements OnInit {
  @Input() account: AccountModel;
  @Input() currency: any;
  dolar: number;
  rub: number;
  constructor() { }

  ngOnInit() {
    const {rates} = this.currency;
    this.dolar = rates['USD'] * this.account.value;
    this.rub = rates['UAH'] * this.account.value;
  }

}
