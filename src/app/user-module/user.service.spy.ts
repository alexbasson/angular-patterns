import {UserService} from './user.service';
import {Observable, Subject} from 'rxjs';
import {User} from './user';

export class UserServiceSpy implements UserService {

  fetchAllSubject = new Subject<User[]>();

  constructor() {
    spyOn(this, 'fetchAll').and.callThrough();
  }

  fetchAll(): Observable<User[]> {
    return this.fetchAllSubject.asObservable();
  }

}
