import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styleUrls: ["./account-settings.component.scss"],
})
export class AccountSettingsComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public loader = false;
  public userEmail: string;
  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    public angularFireAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    const userDetail = JSON.parse(localStorage.getItem("user"));
    this.userEmail = userDetail && userDetail.email;

    this.changePasswordForm = this.formBuilder.group({
      newPassword: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
    });
  }

  public onChangePassword() {
    this.snackbarService.show("Password changed successfully", "success");
  }
}
