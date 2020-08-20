import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-tracker',
  templateUrl: './job-tracker.component.html',
  styleUrls: ['./job-tracker.component.scss'],
})
export class JobTrackerComponent implements OnInit {
  public jobTrackerNavigationRoutes = [
    {
      routeLink: 'kanban-board',
      routeLabel: 'KANBAN BOARD',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
