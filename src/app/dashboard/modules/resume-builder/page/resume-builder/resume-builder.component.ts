import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.scss'],
})
export class ResumeBuilderComponent implements OnInit {
  public resumeBuilderNavigationRoutes = [
    {
      routeLink: 'editor',
      routeLabel: 'EDITOR',
    },
    {
      routeLink: 'preview',
      routeLabel: 'PREVIEW',
    },
    {
      routeLink: 'share',
      routeLabel: 'SHARE',
    },
  ];

  constructor() {}

  public ngOnInit(): void {}
}
