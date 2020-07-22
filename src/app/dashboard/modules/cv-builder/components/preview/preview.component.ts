import { Component, OnInit } from "@angular/core";
import { CvBuilderService } from "../../services/cv/cv-builder.service";
import { DialogService } from "src/app/core/services/dialog/dialog.service";
import { TemplateListComponent } from "src/app/shared/components/template-list/template-list.component";
import { ThemeListComponent } from "src/app/shared/components/theme-list/theme-list.component";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
})
export class PreviewComponent implements OnInit {
  public sendData: any;
  public defaultTemplate = "tokyo";
  constructor(
    private CvBuilderService: CvBuilderService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.CvBuilderService.cvData.subscribe((data) => {
      this.sendData = {
        ...data,
        cvSettings: {
          templateName: this.defaultTemplate,
        },
        styleSettings: {
          cvBackgroundColor: "#DDEBFF",
          cvSectionTextColor: "#0052CC",
        },
      };
    });
  }

  public OpenChangeTemplateDialog() {
    const dialogRef = this.dialogService.open(TemplateListComponent, {});

    dialogRef.afterClosed.subscribe((templateName) => {
      this.sendData = {
        ...this.sendData,
        cvSettings: {
          templateName: templateName,
        },
      };
    });
  }

  public OpenChangeThemeDialog() {
    const dialogRef = this.dialogService.open(ThemeListComponent, {});

    dialogRef.afterClosed.subscribe((themeName) => {
      this.sendData = {
        ...this.sendData,
        styleSettings: {
          cvBackgroundColor: themeName.cvBackgroundColor,
          cvSectionTextColor: themeName.cvSectionTextColor,
        },
      };
    });
  }
}
