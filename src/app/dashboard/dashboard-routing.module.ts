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
        redirectTo: 'editor',
      },
      {
        path: 'editor',
        loadChildren: () => import('./modules/resume-builder/resume-builder.module').then((m) => m.ResumeBuilderModule),
      },
      {
        path: 'faq',
        loadChildren: () => import('./modules/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
