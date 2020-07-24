import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-share",
  templateUrl: "./share.component.html",
  styleUrls: ["./share.component.scss"],
})
export class ShareComponent implements OnInit {
  public cvSettingsForm: FormGroup;
  public loader = false;

  constructor(private formBuilder: FormBuilder) {}

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
      this.loader = false;
    }, 2000);
  }
}
