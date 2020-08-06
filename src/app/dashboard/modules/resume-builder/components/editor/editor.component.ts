import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";
import {
  FORM_CONFIG,
  DUMMY_FORM,
} from "../../constants/resume-builder.constants";
import { CoreService } from "src/app/core/services/core/core.service";
import { finalize } from "rxjs/operators";
import { ResumeBuilderService } from "../../services/resume-builder/resume-builder.service";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class EditorComponent implements OnInit {
  public cvForm: FormGroup;
  public config = FORM_CONFIG;
  public formLoader = false;

  constructor(
    private fb: FormBuilder,
    private resumeBuilderService: ResumeBuilderService,
    private snackbarService: SnackbarService,
    private coreService: CoreService
  ) {}

  ngOnInit() {
    // accordion-start
    const accordion = document.querySelectorAll(".accordion-header");

    accordion.forEach((el) =>
      el.addEventListener("click", () => {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
        } else {
          accordion.forEach((el2) => el2.classList.remove("active"));
          el.classList.add("active");
        }
      })
    );
    // accordion-end

    this.cvForm = this.fb.group({
      aboutSection: this.fb.array([]),
      workExperienceSection: this.fb.array([]),
      educationSection: this.fb.array([]),
      projectsSection: this.fb.array([]),
      skillsSection: this.fb.array([]),
      languagesSection: this.fb.array([]),
      awardsSection: this.fb.array([]),
    });

    if (localStorage.getItem("CV_DETAILS") == null) {
      localStorage.setItem("CV_DETAILS", JSON.stringify(DUMMY_FORM));
    }

    const savedForm = JSON.parse(localStorage.getItem("CV_DETAILS"));
    this.cvForm.valueChanges.subscribe((val) => {
      localStorage.setItem(
        "CV_DETAILS",
        JSON.stringify({
          ...DUMMY_FORM,
          ...savedForm,
          cvFormData: val,
        })
      );
      this.resumeBuilderService.modifyData(val);
    });

    this.loadDataFromResponse(savedForm.cvFormData);
  }

  loadDataFromResponse(data) {
    Object.keys(data).forEach((x) => {
      const formConfig = data[x];
      const getCon = this.cvForm.get(x) as FormArray;
      formConfig.forEach((y) => {
        getCon.push(this.fb.group(y));
      });
    });
  }

  removeFormControl(controlName, i) {
    if (confirm("Are you sure you want to delete this section?")) {
      let Array = this.cvForm.controls[controlName] as FormArray;
      Array.removeAt(i);
      console.log(this.cvForm.value);
    } else {
      return;
    }
  }

  addFormControl(controlName, formConfig) {
    let Array = this.cvForm.controls[controlName] as FormArray;
    let arraylen = Array.length;
    let newUsergroup: FormGroup = this.fb.group(this.config[formConfig]);
    Array.insert(arraylen, newUsergroup);
  }

  public onSubmit() {
    this.formLoader = true;
    this.resumeBuilderService.modifyData(this.cvForm.value);

    this.coreService
      .updateCvDetails(this.cvForm.value)
      .pipe(
        finalize(() => {
          this.formLoader = false;
        })
      )
      .subscribe(
        () => {
          this.snackbarService.show(
            "CV details saved successfully.",
            "success"
          );
        },
        (err) => {
          this.snackbarService.show(
            "CV details saving failed. Please try again later.",
            "error"
          );
        }
      );
  }

  public resetForm() {
    if (confirm("Are you sure you want to delete all form data?")) {
      this.cvForm.reset();
    } else {
      return;
    }
  }
}
