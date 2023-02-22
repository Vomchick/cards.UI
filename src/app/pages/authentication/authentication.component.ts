import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  loginForm!: UntypedFormGroup;
  user: User = {
    userName: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
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
      console.log(this.loginForm.value);
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

  clearUser() {
    this.user = {
      userName: '',
      password: '',
    };
  }
}
