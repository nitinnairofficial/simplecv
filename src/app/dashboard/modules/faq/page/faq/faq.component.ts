import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  public faqNavigationRoutes = [
    {
      routeLink: 'resume-faqs',
      routeLabel: 'FAQs',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
