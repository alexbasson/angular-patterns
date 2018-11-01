import {Observable} from 'rxjs';
import {User} from './user';

export abstract class UserService {
  abstract fetchAll(): Observable<User[]>;
  abstract fetchById(id: number): Observable<User>;
  abstract createUser(user: Partial<User>): Observable<User>;
}
