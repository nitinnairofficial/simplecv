import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './components/editor/editor.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ShareComponent } from './components/share/share.component';
import { ResumeBuilderComponent } from './page/resume-builder/resume-builder.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeBuilderComponent,
    children: [
      {
        path: '',
        redirectTo: 'editor'
      },
      {
        path: 'editor',
        component: EditorComponent,
      },
      {
        path: 'preview',
        component: PreviewComponent,
      },
      {
        path: 'share',
        component: ShareComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeBuilderRoutingModule {}
