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
  constructor() { }

  ngOnInit() {

  }

}
