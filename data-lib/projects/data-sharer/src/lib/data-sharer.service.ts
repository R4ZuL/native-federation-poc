import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharerService {
  private messageSource = new BehaviorSubject<any>(null);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  publishMessage<T>(message: T) {
    this.messageSource.next(message)
  }
}