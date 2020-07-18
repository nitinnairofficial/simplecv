import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StatsRoutingModule } from "./stats-routing.module";
import { StatsComponent } from "./page/stats/stats.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule, SharedModule, StatsRoutingModule],
})
export class StatsModule {}
