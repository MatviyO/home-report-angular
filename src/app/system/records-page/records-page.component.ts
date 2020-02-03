import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../layout/services/header.service';
import {CategoryModel} from '../layout/models/category.model';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  constructor(private titleService: HeaderService) { }

  ngOnInit() {
    this.titleService.setTitle('Records');
    console.log('fdjgjfd')
  }
  newCategoryAdded(category: CategoryModel) {
  }
}
