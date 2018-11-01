import {async, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NetworkUserService} from './network-user.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FakeBackendService} from '../fake-backend.service';
import {buildUser} from './user.factory';

describe('NetworkUserService', () => {
  let service: NetworkUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(FakeBackendService)
      ]
    });

    service = new NetworkUserService(TestBed.get(HttpClient));
  });

  describe('fetchAll', () => {
    it('returns all the users', async(() => {
      service.fetchAll().subscribe((users) => {
        expect(users).toEqual([
          buildUser(),
          buildUser({
            id: 2,
            firstName: 'Jane',
            lastName: 'Roe',
            email: 'jane.roe@example.com'
          }),
          buildUser({
            id: 3,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com'
          })
        ]);
      }, fail);
    }));
  });

  describe('fetchById', () => {
    it('returns the user for the given id', async(() => {
      service.fetchById('2').subscribe((user) => {
        expect(user).toEqual(
          buildUser({
            id: 2,
            firstName: 'Jane',
            lastName: 'Roe',
            email: 'jane.roe@example.com'
          })
        );
      }, fail);
    }));
  });
});
