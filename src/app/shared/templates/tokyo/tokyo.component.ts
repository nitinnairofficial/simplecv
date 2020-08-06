import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tokyo",
  templateUrl: "./tokyo.component.html",
  styleUrls: ["./tokyo.component.scss"],
})
export class TokyoComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = {
      ...this.data.resumeFormData,
      resumeStyles: this.data.resumeStyles,
    };
  }
}
