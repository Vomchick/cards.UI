import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  loginForm!: UntypedFormGroup;

  constructor(
    private authService: AuthService,
    private ufb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.ufb.group({
      userName: [null, [Validators.required, Validators.maxLength(20)]],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (res) => {},
        (error) => {
          alert('Wrong Username or password');
        }
      );
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    //тут должен быть subscribe
    //this.authService.login(this.user);
    //this.clearUser();
  }

  onLogout() {
    this.authService.logout();
  }
}
