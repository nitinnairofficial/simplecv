import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { CoreService } from 'src/app/core/services/core/core.service';
import { PRIVATE_RESUME_LIST, RESUME_ID_PATTERN } from '../../constants/resume-builder.constants';
import { WebStorageService } from 'src/app/core/services/web-storage/web-storage.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  public sendData: any;
  public publicResumeForm: FormGroup;
  public privateResumeForm: FormGroup;
  public publicResumeLoader = false;
  public privateResumeLoader = false;
  public checkLoader = false;
  public privateResumeList = PRIVATE_RESUME_LIST;
  private currentIndex: number;

  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private coreSerivce: CoreService,
    private webStorageService: WebStorageService
  ) {}

  ngOnInit(): void {
    const savedForm = this.webStorageService.getStorageValue('RESUME_DETAILS');
    this.sendData = savedForm;

    this.publicResumeForm = this.formBuilder.group({
      resumePermissionType: ['private', Validators.required],
      resumeId: ['', [Validators.required, Validators.pattern(RESUME_ID_PATTERN)]],
      hideBranding: [false],
      hideEmailAndPhone: [false],
      hideDownloadButton: [false],
    });

    this.privateResumeForm = this.formBuilder.group({
      sharingWith: ['', Validators.required],
    });

    if (savedForm) {
      this.publicResumeForm.patchValue({
        hideBranding: savedForm.resumeSettings.hideBranding,
        resumePermissionType: savedForm.resumeSettings.resumePermissionType,
        resumeId: savedForm.resumeSettings.resumeId,
        hideEmailAndPhone: savedForm.resumeSettings.hideEmailAndPhone,
        hideDownloadButton: savedForm.resumeSettings.hideDownloadButton,
      });
    }
  }

  public get resumeId() {
    return this.publicResumeForm.get('resumeId');
  }

  public onPublicResumeFormSubmit() {
    const publicResumeFormValue = this.publicResumeForm.value;
    this.sendData = {
      ...this.sendData,
      resumeSettings: {
        resumePermissionType: publicResumeFormValue.resumePermissionType,
        resumeCustomUrl: publicResumeFormValue.resumeCustomUrl,
        hideBranding: publicResumeFormValue.hideBranding,
        hideEmailAndPhone: publicResumeFormValue.hideEmailAndPhone,
        hideDownloadButton: publicResumeFormValue.hideDownloadButton,
      },
    };
    this.publicResumeLoader = true;
    setTimeout(() => {
      this.snackbarService.show('Resume details saved successfully', 'success');
      this.publicResumeLoader = false;
    }, 2000);
  }

  public onPrivateResumeFormSubmit() {
    const privateResumeFormValue = this.privateResumeForm.value;
    this.privateResumeLoader = true;
    setTimeout(() => {
      this.snackbarService.show('Succesfully created private resume', 'success');
      this.privateResumeLoader = false;
    }, 2000);
  }

  public downloadResume(fileType) {
    this.coreSerivce.downloadResume(fileType).subscribe(
      (res) => {},
      (err) => {}
    );
  }

  public openStatsPanel(index) {
    if (this.currentIndex === index) {
      this.privateResumeList[index].isOpened = false;
      this.currentIndex = null;
      return;
    }
    this.privateResumeList.map((item, i) => {
      if (i === index) {
        item.isOpened = true;
        this.currentIndex = index;
      } else {
        item.isOpened = false;
      }
    });
  }

  public copyToClipboard(copyText: string) {
    const listener = (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', copyText);
      e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    this.snackbarService.show('Private resume link copied', 'success');
  }

  public checkAvailabilty() {
    console.log(this.publicResumeForm.value.resumeId);
    this.checkLoader = true;
    setTimeout(() => {
      this.checkLoader = false;
    }, 2000);
  }
}
