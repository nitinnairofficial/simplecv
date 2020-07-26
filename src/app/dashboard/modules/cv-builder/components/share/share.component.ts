import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";
import { CvBuilderService } from "../../services/cv/cv-builder.service";
import { CoreService } from "src/app/core/services/core/core.service";

@Component({
  selector: "app-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.scss"],
})
export class ShareComponent implements OnInit {
  public sendData: any;
  public cvSettingsForm: FormGroup;
  public loader = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private CvBuilderService: CvBuilderService,
    private coreSerivce: CoreService
  ) {}

  ngOnInit(): void {
    this.cvSettingsForm = this.formBuilder.group({
      cvPermissionType: ["private", Validators.required],
      cvCustomUrl: ["", Validators.required],
      hideBranding: [false],
      hideEmailAndPhone: [false],
    });

    const cvSettingsFormValue = this.cvSettingsForm.value;

    this.CvBuilderService.cvData.subscribe((data) => {
      this.cvSettingsForm.patchValue({
        cvPermissionType: cvSettingsFormValue.cvPermissionType,
        cvCustomUrl: cvSettingsFormValue.cvCustomUrl,
        hideBranding: cvSettingsFormValue.hideBranding,
        hideEmailAndPhone: cvSettingsFormValue.hideEmailAndPhone,
      });
    });
  }

  public onSubmit() {
    const cvSettingsFormValue = this.cvSettingsForm.value;
    this.sendData = {
      ...this.sendData,
      cvSettings: {
        cvPermissionType: cvSettingsFormValue.cvPermissionType,
        cvCustomUrl: cvSettingsFormValue.cvCustomUrl,
        hideBranding: cvSettingsFormValue.hideBranding,
        hideEmailAndPhone: cvSettingsFormValue.hideEmailAndPhone,
      },
    };
    this.loader = true;
    setTimeout(() => {
      this.snackbarService.show("CV details saved successfully", "success");
      this.loader = false;
    }, 2000);
  }

  public downloadCV(fileType) {
    this.coreSerivce.downloadCV(fileType).subscribe(
      (res) => {},
      (err) => {}
    );
  }
}
