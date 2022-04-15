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
      routeLabel: 'Features',
      fragmentName: 'features',
    },
    {
      routeLink: '/',
      routeLabel: 'Templates',
      fragmentName: 'templates',
    },
    {
      routeLink: '/',
      routeLabel: 'FAQs',
      fragmentName: 'faq',
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
