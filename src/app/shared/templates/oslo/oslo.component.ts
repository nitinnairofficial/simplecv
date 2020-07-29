import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-oslo",
  templateUrl: "./oslo.component.html",
  styleUrls: ["./oslo.component.scss"],
})
export class OsloComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = {
      ...this.data.cvFormData,
      styleSettings: this.data.styleSettings,
    };
  }
}
