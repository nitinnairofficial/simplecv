import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { CoreService } from 'src/app/core/services/core/core.service';
import { AccessService } from 'src/app/core/services/access/access.service';
import { WebStorageService } from 'src/app/core/services/web-storage/web-storage.service';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from 'src/app/core/constants/core.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loader = false;
  public googleLoader = false;
  public githubLoader = false;
  constructor(
    private fb: FormBuilder,
    public angularFireAuth: AngularFireAuth,
    private router: Router,
    private snackbarService: SnackbarService,
    private accessService: AccessService,
    private webStorageService: WebStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PATTERN)]],
      // password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
      password: ['', [Validators.required]],
    });
  }

  public get emailId() {
    return this.loginForm.get('emailId');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  public onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loader = true;
    const loginFormValue = this.loginForm.value;
    this.login(loginFormValue.emailId, loginFormValue.password);
  }

  /* log in */
  public login(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user.emailVerified !== true) {
          this.snackbarService.show('Please verify your email address.');
        } else {
          this.webStorageService.setStorageValue('USER_DETAILS', res.user);
          this.accessService.setLoginInfo(res.user);

          setTimeout(() => {
            this.router.navigate(['/dashboard']);
          }, 100);
        }
        this.loader = false;
      })
      .catch((err) => {
        this.snackbarService.show(err.message);
        this.loader = false;
      });
  }

  // Firebase SignInWithPopup
  public oAuthProvider(provider) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Firebase Google Sign-in
  public loginWithGoogle() {
    this.googleLoader = true;
    this.oAuthProvider(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        console.log('Successfully logged in!');
        this.googleLoader = false;
        setTimeout(() => {
          this.router.navigate(['dashboard']);
        }, 100);
      })
      .catch((error) => {
        console.log(error);
        this.googleLoader = false;
      });
  }
}
