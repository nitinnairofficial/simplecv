import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-side-navigation",
  templateUrl: "./side-navigation.component.html",
  styleUrls: ["./side-navigation.component.scss"],
})
export class SideNavigationComponent implements OnInit {
  public sideNavigationRoutes = [
    {
      routeLink: "/home",
      routeLabel: "Home",
      routeIcon: "assets/icons/home.svg",
    },
    {
      routeLink: "cv-builder",
      routeLabel: "CV Builder",
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
