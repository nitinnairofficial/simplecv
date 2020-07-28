import { Component, OnInit } from "@angular/core";
import { CvBuilderService } from "../../services/cv/cv-builder.service";
import { CoreService } from "src/app/core/services/core/core.service";
import { DUMMY_DATA } from "../../constants/cv.constants";

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

  constructor(
    private coreService: CoreService,
    private CvBuilderService: CvBuilderService
  ) {}

  public ngOnInit(): void {
    this.coreService.getCvDetails("").subscribe(
      (res) => {},
      (err) => {}
    );

    this.CvBuilderService.modifyData(DUMMY_DATA);
  }
}
