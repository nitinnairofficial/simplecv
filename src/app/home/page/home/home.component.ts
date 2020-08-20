import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccessService } from 'src/app/core/services/access/access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public isLoggedIn = false;
  constructor(private router: Router, private accessService: AccessService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.accessService.isLoggedIn();
  }

  public navigateToRoute(route) {
    this.router.navigate([route]);
  }
}
