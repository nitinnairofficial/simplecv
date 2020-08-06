import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";
import { CoreService } from "src/app/core/services/core/core.service";
import { PRIVATE_RESUME_LIST } from '../../constants/resume-builder.constants';

@Component({
  selector: "app-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.scss"],
})
export class ShareComponent implements OnInit {
  public sendData: any;
  public publicResumeForm: FormGroup;
  public privateResumeForm: FormGroup;
  public publicResumeLoader = false;
  public privateResumeLoader = false;
  public privateResumeList = PRIVATE_RESUME_LIST;

  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private coreSerivce: CoreService
  ) {}

  ngOnInit(): void {
    const savedForm = JSON.parse(localStorage.getItem("CV_DETAILS"));
    this.sendData = savedForm;

    this.publicResumeForm = this.formBuilder.group({
      cvPermissionType: ["private", Validators.required],
      cvId: ["", Validators.required],
      hideBranding: [false],
      hideEmailAndPhone: [false],
    });

    this.privateResumeForm = this.formBuilder.group({
      sharingWith: ["", Validators.required],
    });

    if (savedForm) {
      this.publicResumeForm.patchValue({
        hideBranding: savedForm.cvSettings.hideBranding,
        cvPermissionType: savedForm.cvSettings.cvPermissionType,
        cvId: savedForm.cvSettings.cvId,
        hideEmailAndPhone: savedForm.cvSettings.hideEmailAndPhone,
      });
    }
  }

  public onPublicResumeFormSubmit() {
    const publicResumeFormValue = this.publicResumeForm.value;
    this.sendData = {
      ...this.sendData,
      cvSettings: {
        cvPermissionType: publicResumeFormValue.cvPermissionType,
        cvCustomUrl: publicResumeFormValue.cvCustomUrl,
        hideBranding: publicResumeFormValue.hideBranding,
        hideEmailAndPhone: publicResumeFormValue.hideEmailAndPhone,
      },
    };
    this.publicResumeLoader = true;
    setTimeout(() => {
      this.snackbarService.show("Resume details saved successfully", "success");
      this.publicResumeLoader = false;
    }, 2000);
  }

  public onPrivateResumeFormSubmit() {
    const privateResumeFormValue = this.privateResumeForm.value;
    this.privateResumeLoader = true;
    setTimeout(() => {
      this.snackbarService.show(
        "Succesfully created private resume",
        "success"
      );
      this.privateResumeLoader = false;
    }, 2000);
  }

  public downloadCV(fileType) {
    this.coreSerivce.downloadCV(fileType).subscribe(
      (res) => {},
      (err) => {}
    );
  }
}
