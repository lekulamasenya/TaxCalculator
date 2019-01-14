import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import '../../assets/login-animation.js';
import { AuthService } from '../_services/auth.service.js';
import { AlertifyService } from '../_services/alertify.service.js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../_models/user.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  displayMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    (window as any).initialize();
    this.InitLoginForm();
  }

  InitLoginForm(): any {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.user = Object.assign({}, this.loginForm.value);
      this.authService.login(this.user).subscribe(
        () => {
          this.loading = false;
          this.alertify.success('Logged in successfully');
        },
        error => {
          this.loading = false;
          this.displayMessage = error.status === 400 ? error.error : error.statusText;
          console.log('msg: ', this.displayMessage);
          this.alertify.error(this.displayMessage);
        },
        () => {
          this.router.navigate(['/home']);
        }
      );
    } else {
      const controls = this.loginForm.controls;
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return false;
    }
  }

  register() {
    this.router.navigate(['/register']);
  }

}
