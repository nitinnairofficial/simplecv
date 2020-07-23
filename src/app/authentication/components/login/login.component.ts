import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import "firebase/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loader = false;
  public googleLoader = false;
  public githubLoader = false;
  constructor(
    private fb: FormBuilder,
    public angularFireAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailId: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  public onLogin() {
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
        } else {
          console.log("Successfully signed in!");
          setTimeout(() => {
            this.router.navigate(["/dashboard"]);
          }, 100);
        }
        this.loader = false;
      })
      .catch((err) => {
        console.log("Something is wrong:", err);
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
        console.log("Successfully logged in!");
        this.googleLoader = false;
        setTimeout(() => {
          this.router.navigate(["dashboard"]);
        }, 100);
      })
      .catch((error) => {
        console.log(error);
        this.googleLoader = false;
      });
  }

  // Firebase Github Sign-in
  public loginWithGithub() {
    this.githubLoader = true;
    this.oAuthProvider(new firebase.auth.GithubAuthProvider())
      .then((res) => {
        console.log("Successfully logged in!");
        setTimeout(() => {
          this.router.navigate(["dashboard"]);
        }, 100);
        this.githubLoader = false;
      })
      .catch((error) => {
        console.log(error);
        this.githubLoader = false;
      });
  }
}
