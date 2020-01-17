import {EventEmitter, Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable()
export class HeaderService {
  eventEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private titleService: Title) {
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
    this.eventEmitter.emit(title);
  }

  getTitle() {
    return this.eventEmitter;
  }
}
