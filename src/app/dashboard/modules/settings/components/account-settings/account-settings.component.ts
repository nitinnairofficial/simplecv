import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";
import { CoreService } from "src/app/core/services/core/core.service";
import { finalize } from "rxjs/operators";
import { WebStorageService } from "src/app/core/services/web-storage/web-storage.service";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styleUrls: ["./account-settings.component.scss"],
})
export class AccountSettingsComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public changePasswordloader = false;
  public deleteAccountLoader = false;
  public userEmail: string;
  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private coreService: CoreService,
    private webStorageService: WebStorageService
  ) {}

  ngOnInit(): void {
    const userDetail = this.webStorageService.getStorageValue("USER_DETAILS");
    this.userEmail = userDetail && userDetail.email;

    this.changePasswordForm = this.formBuilder.group({
      newPassword: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
    });
  }

  public onChangePassword() {
    this.changePasswordloader = true;
    const changePasswordFormValue = this.changePasswordForm.value;

    this.coreService
      .changeUserPassword("")
      .pipe(finalize(() => (this.changePasswordloader = false)))
      .subscribe(
        (res) => {
          this.snackbarService.show("", "");
        },
        (err) => {
          this.snackbarService.show("", "");
        }
      );
  }

  public onDeleteAccount() {
    if (confirm("Are you sure you want to delete your account?")) {
      this.coreService
        .deleteUserAccount("")
        .pipe(finalize(() => (this.deleteAccountLoader = false)))
        .subscribe(
          (res) => {
            this.snackbarService.show("", "");
          },
          (err) => {
            this.snackbarService.show("", "");
          }
        );
    } else {
      return;
    }
  }
}
