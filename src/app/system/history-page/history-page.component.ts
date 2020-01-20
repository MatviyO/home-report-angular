import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  constructor(private titleService: HeaderService) { }

  ngOnInit() {
    this.titleService.setTitle('History');
  }

}
