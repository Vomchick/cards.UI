import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;
  title = 'Cards';

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  isInfoPage(): boolean {
    return this.router.url === '/info';
  }

  isAdminPage(): boolean {
    return this.router.url === '/admin';
  }

  logOut() {
    this.authService.logout();
  }
}
