import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { Token } from '../models/token.model';
import { User } from '../models/user.model';

export const access_token_key = 'card_access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:5220/api/auth';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + '/login', user).pipe(
      tap((token) => {
        localStorage.setItem(access_token_key, token.access_token);
      })
    );
  }

  isAuthenticated(): boolean {
    var token = localStorage.getItem(access_token_key);
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem(access_token_key);
    this.router.navigate(['']);
  }
}
