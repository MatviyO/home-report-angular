import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent implements OnInit {

  // Pie
  public pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData = [300, 500, 100];
  public pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
  }
  // events
  public chartClicked(e: any ): void {
    console.log(e);
  }

  public chartHovered(e: any ): void {
    console.log(e);
  }

}
