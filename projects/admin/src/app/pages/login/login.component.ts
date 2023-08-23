import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private title: Title,
    private loginService: LoginService,
    private router: Router,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Login');
  }

  loginReqDto = this.fb.group({
    userEmail: ['', Validators.required],
    userPass: ['', Validators.required],
  });

  loading = false;

  onLogin() {
    if (this.loginReqDto.valid) {
      this.loading = true;
      this.loginService
        .loginAdmin(this.loginReqDto.getRawValue())
        .subscribe({
          next: (result) => {
            this.loading = false;
            localStorage.setItem('data', JSON.stringify(result));
            this.router.navigateByUrl('/dashboard');
          },
          error: () => {
            this.loading = false;
          },
        });
    } else {
      console.log('Invalid!');
      this.loading = false;
    }
  }

}
