import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CvComponent } from "./page/cv/cv.component";
import { EditorComponent } from "./components/editor/editor.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { ShareComponent } from "./components/share/share.component";

const routes: Routes = [
  {
    path: "",
    component: CvComponent,
    children: [
      {
        path: "editor",
        component: EditorComponent,
      },
      {
        path: "preview",
        component: PreviewComponent,
      },
      {
        path: "share",
        component: ShareComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
