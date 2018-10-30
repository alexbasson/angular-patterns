import {FetchUsersUsecase} from './fetch-users.usecase';
import {UserServiceSpy} from './user.service.spy';
import {async} from '@angular/core/testing';
import {User} from './user';
import {buildUser} from './user.factory';

describe('FetchUsers', () => {
  let fetchUsers: FetchUsersUsecase;
  let userServiceSpy: UserServiceSpy;

  beforeEach(() => {
    userServiceSpy = new UserServiceSpy();

    fetchUsers = new FetchUsersUsecase(userServiceSpy);
  });

  describe('by default', () => {
    it('returns the correct loading state', () => {
      expect(fetchUsers.notLoaded).toBe(true);
      expect(fetchUsers.isLoading).toBe(false);
      expect(fetchUsers.loaded).toBe(false);
    });
  });

  describe('on execute', () => {
    beforeEach(() => {
      fetchUsers.execute();
    });

    it('calls the user service to fetch all users', () => {
      expect(userServiceSpy.fetchAll).toHaveBeenCalled();
    });

    it('returns the correct loading state', () => {
      expect(fetchUsers.notLoaded).toBe(false);
      expect(fetchUsers.isLoading).toBe(true);
      expect(fetchUsers.loaded).toBe(false);
    });

    describe('when the response returns with users', () => {
      const users: User[] = [
        buildUser(),
        buildUser()
      ];

      beforeEach(async(() => {
        userServiceSpy.fetchAllSubject.next(users);
      }));

      it('returns the correct loading state', () => {
        expect(fetchUsers.notLoaded).toBe(false);
        expect(fetchUsers.isLoading).toBe(false);
        expect(fetchUsers.loaded).toBe(true);
      });

      it('stores the users', () => {
        expect(fetchUsers.users).toEqual(users);
      });

      it('sets noUsers to false', () => {
        expect(fetchUsers.noUsers).toBe(false);
      });
    });

    describe('when the response returns with an empty list of users', () => {
      beforeEach(async(() => {
        userServiceSpy.fetchAllSubject.next([]);
      }));

      it('returns the correct loading state', () => {
        expect(fetchUsers.isLoading).toBe(false);
        expect(fetchUsers.notLoaded).toBe(false);
        expect(fetchUsers.loaded).toBe(true);
      });

      it('sets noUsers to true', () => {
        expect(fetchUsers.noUsers).toBe(true);
      });
    });
  });
});
