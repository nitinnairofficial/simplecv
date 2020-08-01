import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/authentication/services/authentication/authentication.service";
import { Router } from "@angular/router";

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
  ];

  public translateVal = -15;
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  public logout() {
    this.authenticationService.logout();
  }

  public openMenu() {
    this.translateVal = 0;
  }

  public closeMenu() {
    this.translateVal = -15;
  }
}
