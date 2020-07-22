import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailId: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  public onLogin() {
    const loginFormValue = this.loginForm.value;
    this.authenticationService.login(
      loginFormValue.email,
      loginFormValue.password
    );
  }
}
