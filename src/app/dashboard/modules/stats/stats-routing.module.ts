import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StatsComponent } from "./page/stats/stats.component";
import { ResumeStatsComponent } from "./components/resume-stats/resume-stats.component";

const routes: Routes = [
  {
    path: "",
    component: StatsComponent,
    children: [
      {
        path: "",
        redirectTo: "resume-stats",
      },
      {
        path: "resume-stats",
        component: ResumeStatsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsRoutingModule {}
