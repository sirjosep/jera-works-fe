import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsersService } from '@services/users.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'user-change-password',
  templateUrl: './user-changepassword.component.html',
})
export class UserChangePasswordComponent implements OnInit {
  loading = false;

  userPasswordDto = this.fb.group({
    oldPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmNewPassword: ['', Validators.required],
  });

  constructor(
    private title: Title,
    private userService: UsersService,
    private fb: NonNullableFormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Change Password');
  }

  onSubmit() {
    if (this.userPasswordDto.valid) {
      this.loading = true;
      const data = this.userPasswordDto.getRawValue();
      firstValueFrom(this.userService.changePasswordCandidate(data)).then(
        (res) => {
          this.loading = false;
          localStorage.clear();
          this.router.navigateByUrl('/login');
        }
      );
    } else {
      console.log('Invalid!');
    }
  }
}
