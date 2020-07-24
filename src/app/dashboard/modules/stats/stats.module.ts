import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StatsRoutingModule } from "./stats-routing.module";
import { StatsComponent } from "./page/stats/stats.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CvStatsComponent } from './components/cv-stats/cv-stats.component';

@NgModule({
  declarations: [StatsComponent, CvStatsComponent],
  imports: [CommonModule, SharedModule, StatsRoutingModule],
})
export class StatsModule {}
