import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User) {
    //this.http.post()
    if (user.userName === 'admin' && user.password === 'admin') {
      localStorage.setItem('_auth', 'admin');
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('_auth');
  }

  isAdmin(): boolean {
    if (localStorage.getItem('_auth') == 'admin') {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('_auth');
  }
}
