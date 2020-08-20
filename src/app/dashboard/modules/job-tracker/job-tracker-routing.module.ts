import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobTrackerComponent } from './page/job-tracker/job-tracker.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';


const routes: Routes = [
  {
    path: '',
    component: JobTrackerComponent,
    children: [
      {
        path: '',
        redirectTo: 'kanban-board',
      },
      {
        path: 'kanban-board',
        component: KanbanBoardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobTrackerRoutingModule { }
