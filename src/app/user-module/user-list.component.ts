import {Component, Input} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-user-list',
  template: `
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let user of users" routerLink="/users/{{user.id}}">
        <td>{{user.lastName}}, {{user.firstName}}</td>
        <td>{{user.email}}</td>
      </tr>
      </tbody>
    </table>
  `
})
export class UserListComponent {

  @Input()
  users: User[];

}
