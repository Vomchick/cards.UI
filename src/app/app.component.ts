import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;

  constructor(private authService: AuthService) {}

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
