import { Component, OnInit } from "@angular/core";
import { CvBuilderService } from "../../services/cv/cv-builder.service";
import { DialogService } from "src/app/core/services/dialog/dialog.service";
import { TemplateListComponent } from "src/app/shared/components/template-list/template-list.component";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
})
export class PreviewComponent implements OnInit {
  public sendData = {};
  constructor(
    private CvBuilderService: CvBuilderService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.CvBuilderService.cvData.subscribe((data) => {
      this.sendData = data;
    });
  }

  public OpenChangeTemplateDialog() {
    this.dialogService.open(TemplateListComponent, {});
  }
}
