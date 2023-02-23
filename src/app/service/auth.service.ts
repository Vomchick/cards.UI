import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { auth_api_url } from '../app-ijection-tokens';
import { Token } from '../models/token.model';
import { User } from '../models/user.model';

export const access_token_key = 'card_access_token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    @Inject(auth_api_url) private apiUrl: string,
    private router: Router
  ) {}

  login(userInfo: { userName: string; password: string }): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + 'api/auth/login', userInfo).pipe(
      tap((token) => {
        debugger;
        localStorage.setItem(access_token_key, token.access_token);
      })
    );
  }

  isAuthenticated(): boolean {
    debugger;
    var token = localStorage.getItem(access_token_key);
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem(access_token_key);
    this.router.navigate(['']);
  }
}
