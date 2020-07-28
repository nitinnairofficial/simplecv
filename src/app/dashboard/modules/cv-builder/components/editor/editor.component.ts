import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { FORM_CONFIG, INITIAL_FORM } from "../../constants/cv.constants";
import { CvBuilderService } from "../../services/cv/cv-builder.service";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class EditorComponent implements OnInit {
  public cvForm: FormGroup;
  public config = FORM_CONFIG;
  public loader = false;

  constructor(
    private fb: FormBuilder,
    private CvBuilderService: CvBuilderService,
    private snackbarService: SnackbarService
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

    if (localStorage.getItem("CV_FORM") == null) {
      localStorage.setItem("CV_FORM", JSON.stringify(INITIAL_FORM));
    }

    this.cvForm.valueChanges.subscribe((val) => {
      localStorage.setItem("CV_FORM", JSON.stringify(val));
      this.CvBuilderService.modifyData(val);
    });
    const savedForm = JSON.parse(localStorage.getItem("CV_FORM"));
    this.loadDataFromResponse(savedForm);
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
    this.snackbarService.show("CV details saved successfully.", "success");
    this.CvBuilderService.modifyData(this.cvForm.value);
  }

  public resetForm() {
    if (confirm("Are you sure you want to delete all form data?")) {
      this.cvForm.reset();
    } else {
      return;
    }
  }
}
