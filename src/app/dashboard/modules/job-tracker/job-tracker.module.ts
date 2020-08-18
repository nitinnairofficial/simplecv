import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobTrackerRoutingModule } from './job-tracker-routing.module';
import { JobTrackerComponent } from './page/job-tracker/job-tracker.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DragulaModule } from 'ng2-dragula';
import { JobDetailsComponent } from './components/job-details/job-details.component';


@NgModule({
  declarations: [JobTrackerComponent, KanbanBoardComponent, JobDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DragulaModule,
    JobTrackerRoutingModule
  ]
})
export class JobTrackerModule { }
