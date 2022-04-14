import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { FORM_CONFIG, DUMMY_FORM, INITIAL_FORM } from '../../constants/resume-builder.constants';
import { CoreService } from 'src/app/core/services/core/core.service';
import { finalize } from 'rxjs/operators';
import { ResumeBuilderService } from '../../services/resume-builder/resume-builder.service';
import { WebStorageService } from 'src/app/core/services/web-storage/web-storage.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  public resumeEditorForm: FormGroup;
  public config = FORM_CONFIG;
  public formLoader = false;
  public loader = false;
  public userId: string;
  public data: any;

  constructor(
    private fb: FormBuilder,
    private resumeBuilderService: ResumeBuilderService,
    private snackbarService: SnackbarService,
    private coreService: CoreService,
    private webStorageService: WebStorageService
  ) {}

  ngOnInit() {
    // accordion-start
    const accordion = document.querySelectorAll('.accordion-header');

    accordion.forEach((el) =>
      el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        } else {
          accordion.forEach((el2) => el2.classList.remove('active'));
          el.classList.add('active');
        }
      })
    );
    // accordion-end

    this.resumeEditorForm = this.fb.group({
      aboutSection: this.fb.array([]),
      workExperienceSection: this.fb.array([]),
      educationSection: this.fb.array([]),
      projectsSection: this.fb.array([]),
      skillsSection: this.fb.array([]),
      languagesSection: this.fb.array([]),
      awardsSection: this.fb.array([]),
    });

    this.getResumeData();

    if (this.webStorageService.getStorageValue('RESUME_DETAILS') == null) {
      this.webStorageService.setStorageValue('RESUME_DETAILS', DUMMY_FORM);
    }

    this.resumeEditorForm.valueChanges.subscribe((val) => {
      this.webStorageService.setStorageValue('RESUME_DETAILS', {
        resumeData: val,
      });
      this.resumeBuilderService.modifyData({
        ...this.data,
        resumeData: {
          ...this.data.resumeData,
          ...val,
        },
      });
    });
  }

  private loadDataFromResponse(data: any) {
    Object.keys(data).forEach((x) => {
      const formConfig = data[x];
      const getCon = this.resumeEditorForm.get(x) as FormArray;
      formConfig.forEach((y) => {
        getCon.push(this.fb.group(y));
      });
    });
  }

  removeFormControl(controlName, i) {
    if (confirm('Are you sure you want to delete this section?')) {
      const Array = this.resumeEditorForm.controls[controlName] as FormArray;
      Array.removeAt(i);
      console.log(this.resumeEditorForm.value);
    } else {
      return;
    }
  }

  addFormControl(controlName, formConfig) {
    const Array = this.resumeEditorForm.controls[controlName] as FormArray;
    const arraylen = Array.length;
    const newUsergroup: FormGroup = this.fb.group(this.config[formConfig]);
    Array.insert(arraylen, newUsergroup);
  }

  public onSubmit() {
    this.formLoader = true;

    const formChanges = this.resumeEditorForm.value;
    this.coreService
      .updateResumeDetails({
        ...this.data,
        resumeData: formChanges,
      })
      .pipe(
        finalize(() => {
          this.formLoader = false;
        })
      )
      .subscribe(
        () => {
          this.resumeBuilderService.modifyData({
            ...this.data,
            resumeData: formChanges,
          });
          this.snackbarService.show('Resume details saved successfully.');
        },
        (err) => {
          this.snackbarService.show('Resume details saving failed. Please try again later.');
        }
      );
  }

  public resetForm() {
    if (confirm('Are you sure you want to delete all form data?')) {
      this.resumeEditorForm.reset();
      this.webStorageService.setStorageValue('RESUME_DETAILS', INITIAL_FORM);
    } else {
      return;
    }
  }

  public getDirtyValues(form) {
    const dirtyValues = {};

    Object.keys(form.controls).forEach((key) => {
      const currentControl = form.controls[key];

      if (currentControl.dirty) {
        if (currentControl.controls) {
          dirtyValues[key] = this.getDirtyValues(currentControl);
        } else {
          dirtyValues[key] = currentControl.value;
        }
      }
    });

    return dirtyValues;
  }

  public getResumeData() {
    this.coreService
      .getResumeDetails()
      .pipe(
        finalize(() => {
          this.loader = false;
        })
      )
      .subscribe(
        (res) => {
          this.data = res;
          const { resumeData = {} } = res;
          this.loadDataFromResponse(resumeData);
        },
        () => {}
      );
  }
}
