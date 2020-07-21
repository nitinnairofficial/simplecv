import { Component, OnInit } from "@angular/core";
import { DialogRef } from "src/app/core/models/dialog-ref";

@Component({
  selector: "app-template-list",
  templateUrl: "./template-list.component.html",
  styleUrls: ["./template-list.component.scss"],
})
export class TemplateListComponent implements OnInit {
  constructor(private dialogRef: DialogRef) {}

  ngOnInit(): void {}

  public selectedTemplate(templateName) {
    this.dialogRef.close(templateName);
  }
}
