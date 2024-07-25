import { Component } from '@angular/core';
import { Column, User } from '../../../types/users';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, TableModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: User[] = [];
  columns: Column[] = [
    { header: 'Name', field: 'name' },
    { header: 'Email', field: 'email' },
    { header: 'Website', field: 'website' },
  ];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
      },
      error: (error) => console.log(error),
    });
  }
}
