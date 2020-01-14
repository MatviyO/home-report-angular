import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Message} from '../../shared/models/message';
import {UsersService} from '../../shared/services/users.service';
import {User} from '../../shared/models/user.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  message: Message;
  form: FormGroup
  constructor(private usersService: UsersService,
              authService:  AuthService,
              private router: Router) { }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmails.bind(this)),
      password: new FormControl(null, [Validators.minLength(5), Validators.required]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue])

    })
  }
  onSubmit() {
    const {email, password, name} = this.form.value;
    const user = new User(email, password, name)
    this.usersService.createUser(user)
      .subscribe(() => {
         this.router.navigate(['/login'], { queryParams: {nowCanLogin: true}});
      })
  }
  forbiddenEmails(control: FormControl): Promise<any> {
    return new Promise( (resolve, reject) => {
       this.usersService.getUserByEmail(control.value)
         .subscribe((user: User) => {
           if (user) {
             resolve({forbiddenemail: true})
           } else {
             resolve(null);
           }
         })
    })
  }

}
