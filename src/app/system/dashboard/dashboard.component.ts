import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../layout/services/header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private titleService: HeaderService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Dashboard');
  }

}
