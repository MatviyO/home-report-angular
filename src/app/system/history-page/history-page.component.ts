import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../layout/services/header.service';


@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {
  // Pie
  public pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData = [300, 500, 100];
  public pieChartType = 'pie';
  constructor(private titleService: HeaderService) { }

  ngOnInit() {
    this.titleService.setTitle('History');
  }

  // events
  public chartClicked(e: any ): void {
    console.log(e);
  }

  public chartHovered(e: any ): void {
    console.log(e);
  }
}
