import {User} from './user';
import {buildFactory} from 'ts-factory';

export const buildUser = buildFactory<User>({
  id: 1,
  firstName: 'Rob',
  lastName: 'Mee',
  email: 'rmee@pivotal.io'
});
