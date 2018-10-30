import {User} from './user';
import {buildFactory} from 'ts-factory';

export const buildUser = buildFactory<User>({
  firstName: 'Rob',
  lastName: 'Mee',
  email: 'rmee@pivotal.io'
});
