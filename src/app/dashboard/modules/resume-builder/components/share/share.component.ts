import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form, FormControl } from '@angular/forms';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { CoreService } from 'src/app/core/services/core/core.service';
import { PRIVATE_RESUME_LIST, RESUME_ID_PATTERN } from '../../constants/resume-builder.constants';
import { ResumeBuilderService } from '../../services/resume-builder/resume-builder.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  public sendData: any;
  public resumeSettingsForm: FormGroup;
  public loader = false;
  public checkLoader = false;

  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private coreService: CoreService,
    private resumeBuilderService: ResumeBuilderService
  ) {}

  ngOnInit(): void {
    this.resumeSettingsForm = this.formBuilder.group({
      resumeId: new FormControl('', [Validators.required, Validators.pattern(RESUME_ID_PATTERN)]),
      hideBranding: new FormControl(false),
      hideEmailAndPhone: new FormControl(false),
      hideDownloadButton: new FormControl(false),
    });

    this.resumeBuilderService.resumeData.subscribe((val) => {
      this.sendData = val;
      if (this.sendData) {
        const { resumeSettings = {} } = this.sendData;
        const { resumeId = '', hideBranding = false, hideEmailAndPhone = false, hideDownloadButton = false } = resumeSettings;
        this.resumeSettingsForm.patchValue({
          resumeId,
          hideBranding,
          hideEmailAndPhone,
          hideDownloadButton,
        });
      }
    });
  }

  public get resumeId() {
    return this.resumeSettingsForm.get('resumeId');
  }

  public onSubmit() {
    if (this.resumeSettingsForm.invalid) {
      this.resumeSettingsForm.markAllAsTouched();
      return;
    }
    const { resumeId = '', hideBranding = false, hideEmailAndPhone = false, hideDownloadButton = false } = this.resumeSettingsForm.value;
    this.sendData = {
      ...this.sendData,
      resumeSettings: {
        ...this.sendData.resumeSettings,
        resumeId,
        hideBranding,
        hideEmailAndPhone,
        hideDownloadButton,
      },
    };
    this.loader = true;
    this.coreService
      .updateResumeDetails(this.sendData)
      .pipe(
        finalize(() => {
          this.loader = false;
        })
      )
      .subscribe(
        () => {
          this.resumeBuilderService.modifyData(this.sendData);
          this.snackbarService.show('Resume details saved successfully.');
        },
        (err) => {
          this.snackbarService.show('Resume details saving failed. Please try again later.');
        }
      );
  }

  public copyToClipboard(copyText: string) {
    const listener = (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', copyText);
      e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    this.snackbarService.show('Resume link copied');
  }

  public checkAvailabilty() {
    console.log(this.resumeSettingsForm.value.resumeId);
    this.checkLoader = true;
    setTimeout(() => {
      this.checkLoader = false;
    }, 2000);
  }
}
