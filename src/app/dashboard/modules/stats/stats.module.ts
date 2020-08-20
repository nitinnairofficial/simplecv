import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsRoutingModule } from './stats-routing.module';
import { StatsComponent } from './page/stats/stats.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResumeStatsComponent } from './components/resume-stats/resume-stats.component';

@NgModule({
  declarations: [StatsComponent, ResumeStatsComponent],
  imports: [CommonModule, SharedModule, StatsRoutingModule],
})
export class StatsModule {}
