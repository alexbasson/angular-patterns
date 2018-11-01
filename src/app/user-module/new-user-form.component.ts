import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {FetchUsersUsecase} from './fetch-users.usecase';

@Component({
  selector: 'app-new-user-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div>
        <label for="first-name">First Name</label>
        <input
          type="text"
          name="first-name"
          formControlName="firstName"
        >
      </div>

      <div>
        <label for="last-name">Last Name</label>
        <input
          type="text"
          name="last-name"
          formControlName="lastName"
        >
      </div>


      <div>
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          formControlName="email"
        >
      </div>

      <div>
        <button
          type="submit"
          [disabled]="form.invalid"
        >Add User</button>
      </div>
    </form>
  `
})
export class NewUserFormComponent {

  form: FormGroup;

  constructor(private userService: UserService,
              private fetchUsers: FetchUsersUsecase,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  submit() {
    const {firstName, lastName, email} = this.form.value;
    this.userService.createUser({firstName, lastName, email}).subscribe(() => {
      this.fetchUsers.execute();
    });
  }

}
