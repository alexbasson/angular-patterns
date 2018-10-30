import {NgModule} from '@angular/core';
import {NetworkUserService} from './network-user.service';
import {UserService} from './user.service';
import {UserRoutingModule} from './user-routing.module';
import {UserListComponent} from './user-list.component';
import {CommonModule} from '@angular/common';
import {FetchUsersUsecase} from './fetch-users.usecase';
import {HttpClientModule} from '@angular/common/http';
import {EmptyUsersComponent} from './empty-users.component';
import {UsersComponent} from './users.component';
import {LoadingUsersComponent} from './loading-users.component';
import {IconsModule} from '../icons-module/icons.module';

@NgModule({
  imports: [
    CommonModule,
    IconsModule,
    HttpClientModule,
    UserRoutingModule,
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    EmptyUsersComponent,
    LoadingUsersComponent,
  ],
  providers: [
    {provide: FetchUsersUsecase, useClass: FetchUsersUsecase},
    {provide: UserService, useClass: NetworkUserService},
  ]
})
export class UserModule {}
