import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HeaderService} from './header.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {
  title = '';
  subscribtion: any;
  constructor(private router: Router,
              private titleService: HeaderService) {
  }

  ngOnInit() {
    this.router.navigate(['/system', 'dashboard']);
    this.subscribtion = this.titleService.getTitle().subscribe(res => this.title = res);
  }
}
