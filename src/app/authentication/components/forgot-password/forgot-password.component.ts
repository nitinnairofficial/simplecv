import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  public loader = false;
  constructor(
    private fb: FormBuilder,
    public angularFireAuth: AngularFireAuth,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      emailId: ["", [Validators.required, Validators.email]],
    });
  }

  public onForgotPassword() {
    this.loader = true;
    const forgotPasswordFormValue = this.forgotPasswordForm.value;
    this.forgotPassword(forgotPasswordFormValue.emailId);
  }

  // Reset Forggot password
  public forgotPassword(passwordResetEmail) {
    return this.angularFireAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then((res) => {
        this.loader = false;
        console.log(res);
      })
      .catch((err) => {
        this.snackbarService.show(err.message, "error");
        this.loader = false;
      });
  }
}
