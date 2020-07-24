import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StatsComponent } from "./page/stats/stats.component";
import { CvStatsComponent } from "./components/cv-stats/cv-stats.component";

const routes: Routes = [
  {
    path: "",
    component: StatsComponent,
    children: [
      {
        path: "",
        redirectTo: "cv-stats",
      },
      {
        path: "cv-stats",
        component: CvStatsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatsRoutingModule {}
