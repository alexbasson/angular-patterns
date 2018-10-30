import {UserService} from './user.service';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {Injectable} from '@angular/core';
import {buildUser} from './user.factory';

@Injectable()
export class NetworkUserService implements UserService {

  constructor() {}

  fetchAll(): Observable<User[]> {
    return of([
      buildUser()
    ]);
  }

}
