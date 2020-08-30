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
    const accordion = document.querySelectorAll('.accordion-header');

    accordion.forEach((el) =>
      el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        } else {
          accordion.forEach((el2) => el2.classList.remove('active'));
          el.classList.add('active');
        }
      })
    );

    this.isLoggedIn = this.accessService.isLoggedIn();
  }

  public navigateToRoute(route) {
    this.router.navigate([route]);
  }
}
