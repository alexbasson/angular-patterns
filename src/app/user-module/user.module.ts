import {NgModule} from '@angular/core';
import {NetworkUserService} from './network-user.service';
import {UserService} from './user.service';
import {UserRoutingModule} from './user-routing.module';
import {UserListComponent} from './user-list.component';
import {CommonModule} from '@angular/common';
import {FetchUsersUsecase} from './fetch-users.usecase';
import {EmptyUsersComponent} from './empty-users.component';
import {UsersComponent} from './users.component';
import {LoadingUsersComponent} from './loading-users.component';
import {IconsModule} from '../icons-module/icons.module';
import {UserDetailComponent} from './user-detail.component';
import {NewUserFormComponent} from './new-user-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    UserRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailComponent,
    NewUserFormComponent,
    EmptyUsersComponent,
    LoadingUsersComponent,
  ],
  providers: [
    {provide: FetchUsersUsecase, useClass: FetchUsersUsecase},
    {provide: UserService, useClass: NetworkUserService},
  ]
})
export class UserModule {}
