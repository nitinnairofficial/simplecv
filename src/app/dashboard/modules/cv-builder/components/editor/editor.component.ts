import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { FORM_CONFIG } from "../../constants/cv.constants";
import { CvBuilderService } from '../../services/cv/cv-builder.service';

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
})
export class EditorComponent implements OnInit {
  public cvForm: FormGroup;
  public config = FORM_CONFIG;

  constructor(private fb: FormBuilder, private CvBuilderService: CvBuilderService) {}

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

    this.addFormControl("aboutSection", "aboutSection");
    this.addFormControl("workExperienceSection", "workExperienceSection");
    this.addFormControl("educationSection", "educationSection");
    this.addFormControl("projectsSection", "projectsSection");
    this.addFormControl("skillsSection", "skillsSection");
    this.addFormControl("languagesSection", "languagesSection");
    this.addFormControl("awardsSection", "awardsSection");

    this.cvForm.valueChanges.subscribe((val) => {
      this.CvBuilderService.modifyData(val);
      console.log(JSON.stringify(val));
    });
  }

  loadDataFromResponse() {
    const data = {
      users: [
        {
          firstName: "Max",
          lastName: "Parker",
        },
        {
          firstName: "Max1",
          lastName: "Parker1",
        },
        {
          firstName: "Max2",
          lastName: "Parker2",
        },
      ],
      work: [
        {
          workType: "Web",
          workTitle: "Frontend",
        },
        {
          workType: "Web1",
          workTitle: "Frontend1",
        },
        {
          workType: "work2",
          workTitle: "Frontend2",
        },
      ],
    };

    const formArray = new FormArray([]);

    data.work.forEach((s) => {
      formArray.push(
        this.fb.group({
          workType: s.workType,
          workTitle: s.workTitle,
        })
      );
    });

    this.cvForm.setControl("work", formArray);
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
    this.CvBuilderService.modifyData(this.cvForm.value);
  }
}
