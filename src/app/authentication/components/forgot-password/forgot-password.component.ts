import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      emailId: ["", [Validators.required, Validators.email]],
    });
  }

  public onForgotPassword() {
    const forgotPasswordFormValue = this.forgotPasswordForm.value;
    console.log(forgotPasswordFormValue);
  }
}
