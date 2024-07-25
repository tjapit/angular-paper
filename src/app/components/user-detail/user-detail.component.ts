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
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor(private usersService: UsersService) {
    this.userId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit() {
    this.fetchUser();
  }

  fetchUser() {
    this.usersService.getUserById(this.userId).subscribe({
      next: (data: User) => {
        this.user = data;
        console.log(data);
      },
      error: (error) => console.log(error),
    });
  }
}
