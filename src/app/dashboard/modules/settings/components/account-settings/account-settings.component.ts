import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { CoreService } from 'src/app/core/services/core/core.service';
import { finalize } from 'rxjs/operators';
import { WebStorageService } from 'src/app/core/services/web-storage/web-storage.service';
import { AuthenticationService } from 'src/app/authentication/services/authentication/authentication.service';
import { PASSWORD_PATTERN } from 'src/app/core/constants/core.constants';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public changePasswordloader = false;
  public deleteAccountLoader = false;
  public userEmail: string;

  public passwordTextType = false;
  public confirmPasswordTextType = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private coreService: CoreService,
    private webStorageService: WebStorageService,
    private authenticationService: AuthenticationService
  ) {}

  public ngOnInit(): void {
    const userDetail = this.webStorageService.getStorageValue('USER_DETAILS');
    this.userEmail = userDetail && userDetail.email;

    this.changePasswordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
      confirmPassword: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
    });
  }

  public get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  public get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  public onChangePassword() {
    if (this.changePasswordForm.invalid || this.newPassword.value !== this.confirmPassword.value) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    this.changePasswordloader = true;
    const changePasswordFormValue = this.changePasswordForm.value;

    this.coreService
      .changeUserPassword('')
      .pipe(finalize(() => (this.changePasswordloader = false)))
      .subscribe(
        (res) => {
          this.snackbarService.show('Password changed successfully.');
          this.authenticationService.logout();
        },
        (err) => {
          this.snackbarService.show('Password change failed');
        }
      );
  }

  public onDeleteAccount() {
    if (confirm('Are you sure you want to delete your account?')) {
      this.coreService
        .deleteUserAccount('')
        .pipe(finalize(() => (this.deleteAccountLoader = false)))
        .subscribe(
          (res) => {
            this.snackbarService.show('Your account has been deleted successfully.');
            this.authenticationService.logout();
          },
          (err) => {
            this.snackbarService.show('Facing error while deleting your account, please try later.');
          }
        );
    } else {
      return;
    }
  }

  public togglePasswordType() {
    this.passwordTextType = !this.passwordTextType;
  }

  public toggleConfirmPasswordType() {
    this.confirmPasswordTextType = !this.confirmPasswordTextType;
  }
}
