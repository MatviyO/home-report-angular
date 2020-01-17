import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  constructor(private titleService: HeaderService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Account');
  }
}
