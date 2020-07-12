import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "cv",
    loadChildren: () => import("./cv/cv.module").then((m) => m.CvModule),
  },
  {
    path: "stats",
    loadChildren: () =>
      import("./stats/stats.module").then((m) => m.StatsModule),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
