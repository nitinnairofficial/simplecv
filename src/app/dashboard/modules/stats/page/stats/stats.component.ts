import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
})
export class StatsComponent implements OnInit {
  public statsNavigationRoutes = [
    {
      routeLink: "cv-stats",
      routeLabel: "CV STATS",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
