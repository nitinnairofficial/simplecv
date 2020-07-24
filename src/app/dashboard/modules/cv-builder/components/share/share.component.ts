import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";

@Component({
  selector: "app-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.scss"],
})
export class ShareComponent implements OnInit {
  public cvSettingsForm: FormGroup;
  public loader = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.cvSettingsForm = this.formBuilder.group({
      cvDisplayType: [""],
      hideBranding: [""],
      hideEmailAndPhone: [""],
    });
  }

  public onSubmit() {
    this.loader = true;
    setTimeout(() => {
      this.snackbarService.show("CV details saved successfully", "success");
      this.loader = false;
    }, 2000);
  }
}
