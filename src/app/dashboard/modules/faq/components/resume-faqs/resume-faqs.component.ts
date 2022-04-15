import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-faqs',
  templateUrl: './resume-faqs.component.html',
  styleUrls: ['./resume-faqs.component.scss'],
})
export class ResumeFaqsComponent implements OnInit {
  constructor() {}

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
  }
}
