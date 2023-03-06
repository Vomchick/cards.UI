import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { auth_api_url } from '../app-ijection-tokens';
import { Token } from '../models/token.model';

export const access_token_key = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    //private jwtHelper: JwtHelperService,
    private cookieService: CookieService,
    @Inject(auth_api_url) private apiUrl: string,
    private router: Router
  ) {}

  login(userInfo: { userName: string; password: string }): Observable<Token> {
    return this.http.post<Token>(this.apiUrl + 'api/auth/login', userInfo, {
      withCredentials: true,
    }); /*.pipe(
      tap((token) => {
        this.cookieService.set(access_token_key, token.access_token, {
          expires: 1,
          sameSite: 'Strict',
        });
      })
    )*/
  }

  isAuthenticated(): boolean {
    this.cookieService.set('smth', 'test');
    debugger;
    var token = this.cookieService.get(access_token_key);
    var smth = this.cookieService.get('smth');
    return !!token; //&& !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    this.cookieService.delete(access_token_key);
    this.router.navigate(['']);
  }

  tokenGetter() {
    return this.cookieService.get(access_token_key);
  }
}
