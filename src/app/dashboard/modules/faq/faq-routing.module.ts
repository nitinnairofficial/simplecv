import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './page/faq/faq.component';
import { ResumeFaqsComponent } from './components/resume-faqs/resume-faqs.component';

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
    children: [
      {
        path: '',
        redirectTo: 'resume-faqs',
      },
      {
        path: 'resume-faqs',
        component: ResumeFaqsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}
