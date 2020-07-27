import { Component, OnInit } from "@angular/core";
import { DialogRef } from "src/app/core/models/dialog-ref";

@Component({
  selector: "app-template-list",
  templateUrl: "./template-list.component.html",
  styleUrls: ["./template-list.component.scss"],
})
export class TemplateListComponent implements OnInit {
  public templateList = [
    {
      templateName: "tokyo",
    },
    {
      templateName: "rio",
    },
    {
      templateName: "berlin",
    },
    {
      templateName: "denver",
    },
    {
      templateName: "nairobi",
    },
    {
      templateName: "oslo",
    },
    {
      templateName: "moscow",
    },
    {
      templateName: "stockholm",
    },
    {
      templateName: "helsinki",
    },
  ];
  constructor(private dialogRef: DialogRef) {}

  ngOnInit(): void {}

  public selectedTemplate(templateName) {
    this.dialogRef.close(templateName);
  }
}
