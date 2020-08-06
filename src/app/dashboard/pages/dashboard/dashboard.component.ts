import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public sideNavigationRoutes = [
    {
      routeLink: "cv",
      routeLabel: "Resume Builder",
      routeIcon: "assets/icons/cv.svg",
    },
    {
      routeLink: "stats",
      routeLabel: "Stats",
      routeIcon: "assets/icons/stats.svg",
    },
    {
      routeLink: "settings",
      routeLabel: "Settings",
      routeIcon: "assets/icons/settings.svg",
    },
    {
      routeLink: "faq",
      routeLabel: "FAQs",
      routeIcon: "assets/icons/faq.svg",
    },
    {
      routeLink: "logout",
      routeLabel: "Logout",
      routeIcon: "assets/icons/logout.svg",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
