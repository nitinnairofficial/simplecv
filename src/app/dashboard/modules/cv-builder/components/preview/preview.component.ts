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
  public loader = false;

  constructor(
    private CvBuilderService: CvBuilderService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    const savedForm = JSON.parse(localStorage.getItem("CV_DETAILS"));
    this.sendData = savedForm;
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

      localStorage.setItem(
        "CV_DETAILS",
        JSON.stringify({
          ...this.sendData,
          cvSettings: {
            templateName: templateName,
          },
        })
      );
    });
  }

  public OpenChangeThemeDialog() {
    const dialogRef = this.dialogService.open(ThemeListComponent, {
      data: {
        themeColor: this.sendData.styleSettings.themeColor
      }
    });

    dialogRef.afterClosed.subscribe((themeName) => {
      this.sendData = {
        ...this.sendData,
        styleSettings: {
          themeColor: themeName.themeColor,
        },
      };
      localStorage.setItem(
        "CV_DETAILS",
        JSON.stringify({
          ...this.sendData,
          styleSettings: {
            themeColor: themeName.themeColor,
          },
        })
      );
    });
  }
}
