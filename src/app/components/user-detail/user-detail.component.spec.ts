import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersService } from '../../services/users.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { User } from '../../../types/users';

const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => 1, // Mock user ID
    },
  },
};

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let usersService: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent, RouterTestingModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user detail on init', () => {
    const mockUser: User = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    } as User; //https://jsonplaceholder.typicode.com/users/1

    spyOn(usersService, 'getUserById').and.returnValue(of(mockUser));

    component.ngOnInit();

    expect(component.user).toEqual(mockUser);
    expect(usersService.getUserById).toHaveBeenCalledWith(1);
  });
});
