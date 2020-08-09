import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-denver",
  templateUrl: "./denver.component.html",
  styleUrls: ["./denver.component.scss"],
})
export class DenverComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = {
      ...this.data.resumeData,
      resumeSettings: this.data.resumeSettings,
    };
  }
}
