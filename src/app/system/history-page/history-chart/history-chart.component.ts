import {Component, Input } from '@angular/core';
@Component({
  selector: 'app-history-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent  {
  @Input() data;
  colorScheme = {
    domain: ['rgb(168, 56, 93)', 'rgb(122, 163, 229)', 'rgb(170, 227, 245)', 'rgb(173, 205, 237)']
  };
}
