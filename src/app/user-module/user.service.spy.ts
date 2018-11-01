import {UserService} from './user.service';
import {Observable, Subject} from 'rxjs';
import {User} from './user';

export class UserServiceSpy implements UserService {

  fetchAllSubject = new Subject<User[]>();
  fetchByIdSubject = new Subject<User>();
  createUserSubject = new Subject<User>();

  constructor() {
    spyOn(this, 'fetchAll').and.callThrough();
    spyOn(this, 'fetchById').and.callThrough();
    spyOn(this, 'createUser').and.callThrough();
  }

  fetchAll(): Observable<User[]> {
    return this.fetchAllSubject.asObservable();
  }

  fetchById(id: number): Observable<User> {
    return this.fetchByIdSubject.asObservable();
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.createUserSubject.asObservable();
  }

}
