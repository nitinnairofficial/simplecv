import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.scss"],
})
export class CvComponent implements OnInit {
  public cvNavigationRoutes = [
    {
      routeLink: "editor",
      routeLabel: "EDITOR",
    },
    {
      routeLink: "preview",
      routeLabel: "PREVIEW",
    },
    {
      routeLink: "share",
      routeLabel: "SHARE",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
