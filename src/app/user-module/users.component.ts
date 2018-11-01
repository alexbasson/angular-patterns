import {Component} from '@angular/core';
import {FetchUsersUsecase} from './fetch-users.usecase';

@Component({
  selector: 'app-users',
  template: `
    <ng-container *ngIf="fetchUsers.notLoaded">
      <button
        (click)="fetchUsers.execute()"
      >
        <svg icon-gear width="25px" height="25px" />
        <span>Load users</span>
      </button>
    </ng-container>

    <app-loading-users *ngIf="fetchUsers.isLoading">
    </app-loading-users>

    <ng-container *ngIf="fetchUsers.loaded">
      <app-empty-users *ngIf="fetchUsers.noUsers"></app-empty-users>
      <app-user-list *ngIf="!fetchUsers.noUsers" [users]="fetchUsers.users"></app-user-list>
    </ng-container>

    <app-new-user-form></app-new-user-form>
  `
})
export class UsersComponent {

  constructor(public fetchUsers: FetchUsersUsecase) {}

}
