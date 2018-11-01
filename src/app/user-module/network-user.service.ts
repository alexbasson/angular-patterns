import {UserService} from './user.service';
import {Observable} from 'rxjs';
import {User} from './user';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NetworkUserService implements UserService {

  baseUrl = 'http://mybackend.com/api';

  constructor(private http: HttpClient) {}

  fetchAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/users');
  }

  fetchById(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + '/users/' + id);
  }

  createUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/users', user);
  }

}
