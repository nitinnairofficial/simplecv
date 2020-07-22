import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication/authentication.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      emailId: ["", [Validators.required, Validators.email]],
    });
  }

  public onForgotPassword() {
    const forgotPasswordFormValue = this.forgotPasswordForm.value;
    this.authenticationService.forgotPassword(forgotPasswordFormValue.email);
  }
}
