import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {User} from './user';

@Component({
  selector: 'app-user-detail',
  template: `
    <div *ngIf="user">
      <h1 data-name>{{name}}</h1>
      <h2 data-email>{{email}}</h2>
    </div>
  `
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.userId;
    this.userService.fetchById(id).subscribe((user) => {
      this.user = user;
    });
  }

  get name(): string {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  get email(): string {
    return this.user.email;
  }

}
