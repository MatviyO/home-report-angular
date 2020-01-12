import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Message} from '../../shared/models/message';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  message: Message;
  form: FormGroup
  constructor() { }

  ngOnInit() {
    this.message = new Message('danger', '');
    this.form = new FormGroup({
        email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.minLength(5), Validators.required]),
      name: new FormControl(null, [Validators.required]),
      agree: new FormControl(false, [Validators.requiredTrue])

    })
  }

  onSubmit() {
    console.log(this.form)
    сonsole.log('fdsfjsdhjfsdfhjsdhfhjsdhfhsjksfdjjh ')
    console.log('djufudsufsidfi')
    console.log(this.message)
    console.log('dsflkjsdfkksd')
    console.log('dsflkjsdfkksd')
    console.log('dsflkjsdfkksd')
  }

}
