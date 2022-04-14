import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { WebStorageService } from 'src/app/core/services/web-storage/web-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public userData: any; // Save logged in user data
  constructor(
    public angularFireAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    private webStorageService: WebStorageService
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.webStorageService.setStorageValue('USER_DETAILS', this.userData);
      } else {
        this.webStorageService.setStorageValue('USER_DETAILS', null);
      }
    });
  }

  public setUserData() {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        this.webStorageService.setStorageValue('USER_DETAILS', this.userData);
      } else {
        this.webStorageService.setStorageValue('USER_DETAILS', null);
      }
    });
  }

  // Send email verfificaiton when new user sign up
  public sendVerificationMail() {
    return this.angularFireAuth.currentUser
      .then((user) => {
        return user.sendEmailVerification();
      })
      .then(() => {
        console.log('sent');
      });
  }

  /* Sign up */
  public signUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Successfully signed up!', res);
        this.sendVerificationMail();
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* log in */
  public login(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        if (res.user.emailVerified !== true) {
          this.sendVerificationMail();
          window.alert('Please validate your email address. Kindly check your inbox.');
        } else {
          console.log('Successfully signed in!');
        }
      })
      .catch((err) => {
        console.log('Something is wrong:', err.message);
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
  public signinWithGoogle() {
    return this.oAuthProvider(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        console.log('Successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Reset Forggot password
  public forgotPassword(passwordResetEmail) {
    return this.angularFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = this.webStorageService.getStorageValue('USER_DETAILS');
    return user !== null && user.emailVerified !== false ? true : false;
  }

  public getUserId() {
    const { uid = '' } = this.webStorageService.getStorageValue('USER_DETAILS');
    return uid;
  }

  /* log out */
  public logout() {
    return this.angularFireAuth.signOut().then(() => {
      this.webStorageService.clearAll();
      this.router.navigate(['/auth/login']);
    });
  }
}
