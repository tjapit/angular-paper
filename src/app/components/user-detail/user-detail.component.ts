import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  userId = 0;

  constructor() {
    this.userId = Number(this.route.snapshot.params['id']);
  }
}
