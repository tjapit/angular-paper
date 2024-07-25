import { Component } from '@angular/core';
import { User } from '../../../types/users';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService
      .getUsers('http://jsonplaceholder.typicode.com/users', {})
      .subscribe({
        next: (data: User[]) => {
          this.users = data;
        },
        error: (error) => console.log(error),
      });
  }
}
