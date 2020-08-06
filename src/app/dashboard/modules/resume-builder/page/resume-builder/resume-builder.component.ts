import { Component, OnInit } from "@angular/core";
import { CoreService } from "src/app/core/services/core/core.service";

@Component({
  selector: "app-resume-builder",
  templateUrl: "./resume-builder.component.html",
  styleUrls: ["./resume-builder.component.scss"],
})
export class ResumeBuilderComponent implements OnInit {
  public resumeBuilderNavigationRoutes = [
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

  constructor(private coreService: CoreService) {}

  public ngOnInit(): void {
    this.coreService.getResumeDetails("").subscribe(
      (res) => {},
      (err) => {}
    );
  }
}
