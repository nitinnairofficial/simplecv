import { Component, OnInit } from "@angular/core";
import { CvService } from "../../services/cv/cv.service";

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

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.cvData.subscribe((data) => {
      
    });
  }
}
