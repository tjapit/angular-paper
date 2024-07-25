import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { provideHttpClient } from '@angular/common/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListComponent, RouterTestingModule],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with Name, Email, and Website as headers', () => {
    const headers = fixture.nativeElement.querySelectorAll('th');

    expect(headers[0].textContent).toEqual('Name');
    expect(headers[1].textContent).toEqual('Email');
    expect(headers[2].textContent).toEqual('Website');
  });
});
