import {InMemoryDbService} from 'angular-in-memory-web-api';
import {buildUser} from './user-module/user.factory';

export class FakeBackendService implements InMemoryDbService {

  createDb() {
    const users = [
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
    ];

    return {users};
  }

}
