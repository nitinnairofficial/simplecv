import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-stockholm",
  templateUrl: "./stockholm.component.html",
  styleUrls: ["./stockholm.component.scss"],
})
export class StockholmComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {
    this.data = {
      ...this.data.resumeData,
      resumeSettings: this.data.resumeSettings,
    };
  }
}
