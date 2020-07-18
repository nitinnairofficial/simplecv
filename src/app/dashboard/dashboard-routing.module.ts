import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        redirectTo: "cv"
      },
      {
        path: "cv",
        loadChildren: () =>
          import("./modules/cv/cv.module").then((m) => m.CvModule),
      },
      {
        path: "stats",
        loadChildren: () =>
          import("./modules/stats/stats.module").then((m) => m.StatsModule),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./modules/settings/settings.module").then(
            (m) => m.SettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
