import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DIALOG_DATA } from 'src/app/core/services/dialog/dialog.service';
import { DialogRef } from 'src/app/core/models/dialog-ref';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  public jobDetailsForm: FormGroup;
  public loader = false;
  constructor(private formBuilder: FormBuilder, private dialogRef: DialogRef, @Optional() @Inject(DIALOG_DATA) public data: any = {}) {}

  ngOnInit(): void {
    this.jobDetailsForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      jobTitle: [''],
      jobCategory: ['', [Validators.required]],
      jobDescription: [''],
      createdDate: [''],
      jobLocation: [''],
      jobLink: [''],
      additionalNote: [''],
    });

    this.jobDetailsForm.patchValue({
      ...this.data,
    });
  }

  onSubmit() {}
}
