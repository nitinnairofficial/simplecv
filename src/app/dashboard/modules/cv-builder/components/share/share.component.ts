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
    const savedForm = JSON.parse(localStorage.getItem("CV_DETAILS"));
    this.sendData = savedForm;

    this.cvSettingsForm = this.formBuilder.group({
      cvPermissionType: ["private", Validators.required],
      cvId: ["", Validators.required],
      hideBranding: [false],
      hideEmailAndPhone: [false],
    });

    if (savedForm) {
      this.cvSettingsForm.patchValue({
        hideBranding: savedForm.cvSettings.hideBranding,
        cvPermissionType: savedForm.cvSettings.cvPermissionType,
        cvId: savedForm.cvSettings.cvId,
        hideEmailAndPhone: savedForm.cvSettings.hideEmailAndPhone,
      });
    }
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
