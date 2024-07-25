import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { User } from '../../types/users';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apiService: ApiService) {}

  getUsers(): Observable<User[]> {
    return this.apiService.get(API_URL);
  }

  getUserById(id: number): Observable<User> {
    return this.apiService.get(API_URL + `/${id}`);
  }
}
