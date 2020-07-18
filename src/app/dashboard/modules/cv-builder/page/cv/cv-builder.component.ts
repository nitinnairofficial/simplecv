import { Component, OnInit } from "@angular/core";
import { CvBuilderService } from "../../services/cv/cv-builder.service";

@Component({
  selector: "app-cv-builder",
  templateUrl: "./cv-builder.component.html",
  styleUrls: ["./cv-builder.component.scss"],
})
export class CvBuilderComponent implements OnInit {
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

  constructor(private CvBuilderService: CvBuilderService) {}

  ngOnInit(): void {
    this.CvBuilderService.cvData.subscribe((data) => {});
  }
}
