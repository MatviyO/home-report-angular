import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service';
import {User} from '../../../../shared/models/user.model';
import {AuthService} from '../../../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {
  date: Date = new Date();
  title = '';
  user: User;
  subscribtion: any;
  constructor(private titleService: HeaderService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.subscribtion = this.titleService.getTitle().subscribe(res => this.title = res);
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
