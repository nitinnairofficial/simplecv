import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { TemplateListComponent } from 'src/app/shared/components/template-list/template-list.component';
import { ThemeListComponent } from 'src/app/shared/components/theme-list/theme-list.component';
import { WebStorageService } from 'src/app/core/services/web-storage/web-storage.service';
import { CoreService } from 'src/app/core/services/core/core.service';
import { finalize } from 'rxjs/operators';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';

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
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    const savedForm = this.webStorageService.getStorageValue('RESUME_DETAILS');
    this.sendData = savedForm;
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

      this.webStorageService.setStorageValue('RESUME_DETAILS', this.sendData);
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
      this.webStorageService.setStorageValue('RESUME_DETAILS', this.sendData);
    });
  }

  public saveResumeSettings() {
    this.loader = true;
    const params = {
      templateName: this.defaultTemplate,
      themeColor: this.defaultThemeColor,
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
          this.snackbarService.show(
            'Resume settings saved successfully',
            'success'
          );
        },
        () => {
          this.snackbarService.show('Saving Failed', 'error');
        }
      );
  }
}
