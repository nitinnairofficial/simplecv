import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { TemplateListComponent } from 'src/app/shared/components/template-list/template-list.component';
import { ThemeListComponent } from 'src/app/shared/components/theme-list/theme-list.component';
import { WebStorageService } from 'src/app/core/services/web-storage/web-storage.service';
import { CoreService } from 'src/app/core/services/core/core.service';
import { finalize } from 'rxjs/operators';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { ResumeBuilderService } from '../../services/resume-builder/resume-builder.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {
  public sendData: any;
  public defaultTemplate = 'tokyo';
  public defaultThemeColor = 'blue';
  public loader = false;

  constructor(
    private dialogService: DialogService,
    private webStorageService: WebStorageService,
    private coreService: CoreService,
    private snackbarService: SnackbarService,
    private resumeBuilderService: ResumeBuilderService
  ) {}

  ngOnInit(): void {
    this.resumeBuilderService.resumeData.subscribe((val) => {
      this.sendData = val;
      if (this.sendData) {
        const { resumeSettings = {} } = this.sendData;
        const { themeColor = 'blue', templateName = 'oslo' } = resumeSettings;
        this.defaultTemplate = templateName;
        this.defaultThemeColor = themeColor;
      }
    });
  }

  public OpenChangeTemplateDialog() {
    const dialogRef = this.dialogService.open(TemplateListComponent, {
      data: {
        templateName: this.sendData.resumeSettings.templateName,
      },
    });

    dialogRef.afterClosed.subscribe((templateName) => {
      this.defaultTemplate = templateName;
      this.sendData = {
        ...this.sendData,
        resumeSettings: {
          ...this.sendData.resumeSettings,
          templateName,
        },
      };
    });
  }

  public OpenChangeThemeDialog() {
    const dialogRef = this.dialogService.open(ThemeListComponent, {
      data: {
        themeColor: this.sendData.resumeSettings.themeColor,
      },
    });

    dialogRef.afterClosed.subscribe((themeColorName) => {
      this.defaultThemeColor = themeColorName;
      this.sendData = {
        ...this.sendData,
        resumeSettings: {
          ...this.sendData.resumeSettings,
          themeColor: themeColorName,
        },
      };
    });
  }

  public saveResumeSettings() {
    this.loader = true;
    const params = {
      ...this.sendData,
      resumeSettings: {
        ...this.sendData.resumeSettings,
        templateName: this.defaultTemplate,
        themeColor: this.defaultThemeColor,
      },
    };
    this.coreService
      .updateResumeDetails(params)
      .pipe(
        finalize(() => {
          this.loader = false;
        })
      )
      .subscribe(
        () => {
          this.resumeBuilderService.modifyData(this.sendData);
          this.snackbarService.show('Resume settings saved successfully');
        },
        () => {
          this.snackbarService.show('Saving resume settings failed');
        }
      );
  }
}
