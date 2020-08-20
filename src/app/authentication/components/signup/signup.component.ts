import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public loader = false;
  public googleLoader = false;
  public githubLoader = false;

  constructor(
    private fb: FormBuilder,
    public angularFireAuth: AngularFireAuth,
    private router: Router,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  public onSignup() {
    this.loader = true;
    const signupFormValue = this.signupForm.value;
    this.signUp(signupFormValue.emailId, signupFormValue.password);
  }

  // Send email verfificaiton when new user sign up
  public sendVerificationMail() {
    this.loader = true;
    return this.angularFireAuth.currentUser
      .then((user) => {
        this.loader = false;
        return user.sendEmailVerification();
      })
      .then(() => {
        console.log('sent');
        this.loader = false;
      });
  }

  /* Sign up */
  public signUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.sendVerificationMail();
        this.loader = false;
        this.router.navigate(['/auth/verify-email']);
      })
      .catch((error) => {
        this.loader = false;
        this.snackbarService.show(error.message, 'error');
      });
  }

  // Firebase SignInWithPopup
  public oAuthProvider(provider) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then((res) => {})
      .catch((error) => {
        window.alert(error);
      });
  }

  // Firebase Google Sign-in
  public loginWithGoogle() {
    this.googleLoader = true;
    return this.oAuthProvider(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        console.log('Successfully logged in!');
        this.googleLoader = false;
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 100);
      })
      .catch((error) => {
        console.log(error);
        this.googleLoader = false;
      });
  }
}
