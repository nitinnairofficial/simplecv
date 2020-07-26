import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CvFaqComponent } from "./components/cv-faq/cv-faq.component";
import { FaqComponent } from './page/faq/faq.component';

const routes: Routes = [
  {
    path: "",
    component: FaqComponent,
    children: [
      {
        path: "",
        redirectTo: "cv-faqs",
      },
      {
        path: "cv-faqs",
        component: CvFaqComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}
