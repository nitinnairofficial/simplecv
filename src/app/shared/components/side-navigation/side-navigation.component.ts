import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/services/authentication/authentication.service';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  public sideNavigationRoutes = [
    {
      routeLink: 'editor',
      routeLabel: 'Editor',
      routeIcon: 'assets/icons/resume.svg',
    },
    {
      routeLink: 'settings',
      routeLabel: 'Settings',
      routeIcon: 'assets/icons/settings.svg',
    },
    {
      routeLink: 'faq',
      routeLabel: 'FAQs',
      routeIcon: 'assets/icons/faq.svg',
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
