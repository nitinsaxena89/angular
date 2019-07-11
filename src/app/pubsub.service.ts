import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PubsubService {
private subject:Subject<any> = new Subject();
private loginSubject = new Subject();
  constructor() { }

  getPublisher(){
    return this.subject;
  }
  getSubscriber(){
    return this.subject.asObservable();
  }

  getLoginPublisher(){
    return this.loginSubject;
  }

  getLoginSubscriber(){
    return this.loginSubject.asObservable();
  }

}
