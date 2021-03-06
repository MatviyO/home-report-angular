import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CategoryModel} from '../../layout/models/category.model';
import {NgForm} from '@angular/forms';
import {EventModel} from '../../../shared/models/event.model';
import * as moment from 'moment';
import {EventsService} from '../../layout/services/events.service';
import {AccountService} from '../../layout/services/account.service';
import {AccountModel} from '../../layout/models/account.model';
import {Message} from '../../../shared/models/message';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {
  sub1: Subscription;
  sub2: Subscription;
  @Input() categories: CategoryModel[] = [];
  types = [
    {type: 'outcome', label: 'Cost'},
    {type: 'income', lable: 'Profit'}
  ];
  message: Message;

  constructor(private eventsService: EventsService,
              private accountService: AccountService) {
  }

  ngOnInit() {
    this.message = new Message('danger', '');
  }

  private showMessage(text: string) {
    this.message.text = text;
    window.setTimeout(() => this.message.text = '', 5000);
  }

  onSubmit(form: NgForm) {
    const {amount, description, category, type} = form.value;
    const event = new EventModel(type, amount, +category, moment().format('DD.MM.YYYYY HH:mm:ss'), description);
    this.sub1 = this.accountService.getAccount()
      .subscribe((account: AccountModel) => {
        let value = 0;
        if (type === 'outcome') {
          if (amount > account.value) {
            this.showMessage(`in the account there is not ${amount - account.value} money `)
          } else {
            value = account.value - amount;
          }
        } else {
          value = account.value + amount;
        }
        this.sub2 = this.accountService.updateAccount({value, currency: account.currency})
          .mergeMap(() => this.eventsService.addEvent(event))
          .subscribe(() => {
            form.setValue({
              amount: 0,
              description: ' ',
              category: 1,
              type: 'outcome'
            });
          });
      });
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
