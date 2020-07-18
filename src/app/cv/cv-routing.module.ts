import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CvComponent } from "./page/cv/cv.component";

const routes: Routes = [
  {
    path: "",
    component: CvComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
