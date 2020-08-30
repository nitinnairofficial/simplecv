import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/core/services/access/access.service';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
})
export class PageNavigationComponent implements OnInit {
  public pageNavigationList = [
    {
      routeLink: '/',
      routeLabel: 'Home',
      fragmentName: 'home',
    },
    {
      routeLink: '/',
      routeLabel: 'Features',
      fragmentName: 'features',
    },
    {
      routeLink: '/',
      routeLabel: 'How it works',
      fragmentName: 'how-it-works',
    },
  ];
  public isLoggedIn = false;
  constructor(private router: Router, private accessService: AccessService) {}

  public ngOnInit(): void {
    this.isLoggedIn = this.accessService.isLoggedIn();
  }

  public navigateTo(route) {
    this.router.navigate([route]);
  }
}
