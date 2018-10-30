import {Observable} from 'rxjs';
import {User} from './user';

export abstract class UserService {
  abstract fetchAll(): Observable<User[]>;
}
