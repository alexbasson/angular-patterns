import {UserService} from './user.service';
import {User} from './user';
import {Injectable} from '@angular/core';

@Injectable()
export class FetchUsersUsecase {

  users: User[];

  private loadingState = 'not loaded';

  constructor(private userService: UserService) {}

  execute() {
    this.loadingState = 'loading';
    this.userService.fetchAll().subscribe((users) => {
      this.users = users;
      this.loadingState = 'loaded';
    });
  }

  get noUsers(): boolean {
    return this.users.length === 0;
  }

  get notLoaded(): boolean {
    return this.loadingState === 'not loaded';
  }

  get isLoading(): boolean {
    return this.loadingState === 'loading';
  }

  get loaded(): boolean {
    return this.loadingState === 'loaded';
  }

}
