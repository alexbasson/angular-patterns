import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UserDetailComponent} from './user-detail.component';
import {ComponentTestHelper} from '../component-test-helper';
import {ActivatedRouteStub} from '../activated-route.stub';
import {UserServiceSpy} from './user.service.spy';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {buildUser} from './user.factory';

describe('UserDetailComponent', () => {
  let fixture: ComponentFixture<UserDetailComponent>;
  let cth: ComponentTestHelper<UserDetailComponent>;
  let activatedRouteStub: ActivatedRouteStub;
  let userServiceSpy: UserServiceSpy;

  beforeEach(async(() => {
    activatedRouteStub = new ActivatedRouteStub();
    activatedRouteStub.snapshot = {
      params: {
        userId: '1'
      }
    };
    userServiceSpy = new UserServiceSpy();

    TestBed.configureTestingModule({
      declarations: [
        UserDetailComponent
      ],
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteStub},
        {provide: UserService, useValue: userServiceSpy},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    cth = new ComponentTestHelper(fixture);
    fixture.detectChanges();
  });

  describe('when the component loads', () => {
    it('calls the user service with the id', () => {
      expect(userServiceSpy.fetchById).toHaveBeenCalledWith('1');
    });

    describe('when the service returns with a user', () => {
      beforeEach(async(() => {
        userServiceSpy.fetchByIdSubject.next(buildUser({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com'
        }));
        fixture.detectChanges();
      }));

      it('displays the user details', () => {
        expect(cth.el('[data-name]').nativeElement.textContent).toContain('John Doe');
        expect(cth.el('[data-email]').nativeElement.textContent).toContain('john.doe@example.com');
      });
    });
  });
});
