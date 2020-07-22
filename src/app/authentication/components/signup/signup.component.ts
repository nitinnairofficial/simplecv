import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      emailId: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  public onSignup() {
    const signupFormValue = this.signupForm.value;
    this.authenticationService.signUp(
      signupFormValue.emailId,
      signupFormValue.password
    );
  }
}
