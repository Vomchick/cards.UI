import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    //тут должен быть subscribe
    this.authService.login(this.user);
    this.clearUser();
  }

  onLogout() {
    this.authService.logout();
  }

  clearUser() {
    this.user = {
      email: '',
      password: '',
    };
  }
}
