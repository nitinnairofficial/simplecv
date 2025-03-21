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
      routeIcon: 'edit',
    },
    {
      routeLink: 'settings',
      routeLabel: 'Settings',
      routeIcon: 'settings',
    },
    {
      routeLink: 'faq',
      routeLabel: 'FAQs',
      routeIcon: 'help',
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
