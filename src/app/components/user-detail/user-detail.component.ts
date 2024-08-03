import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../../../types/users';
import { UsersService } from '../../services/users.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, CardModule, RouterModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  user: User = {} as User;
  userId: number = 0;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchUser(this.userId);
  }

  fetchUser(id: number) {
    this.usersService.getUserById(id).subscribe({
      next: (data: User) => {
        this.user = data;
      },
      error: (error) => console.log(error),
    });
  }
}
