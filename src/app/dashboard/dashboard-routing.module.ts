import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'resume-builder',
      },
      {
        path: 'resume-builder',
        loadChildren: () =>
          import('./modules/resume-builder/resume-builder.module').then(
            (m) => m.ResumeBuilderModule
          ),
      },
      {
        path: 'stats',
        loadChildren: () =>
          import('./modules/stats/stats.module').then((m) => m.StatsModule),
      },
      {
        path: 'job-tracker',
        loadChildren: () =>
          import('./modules/job-tracker/job-tracker.module').then((m) => m.JobTrackerModule),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./modules/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
