import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../header.service';

@Component({
  selector: 'app-planing-page',
  templateUrl: './planing-page.component.html',
  styleUrls: ['./planing-page.component.scss']
})
export class PlaningPageComponent implements OnInit {

  constructor(private titleService: HeaderService) { }

  ngOnInit() {
    this.titleService.setTitle('Planing');
  }

}
