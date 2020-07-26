import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FaqRoutingModule } from "./faq-routing.module";
import { FaqComponent } from "./page/faq/faq.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CvFaqComponent } from "./components/cv-faq/cv-faq.component";

@NgModule({
  declarations: [FaqComponent, CvFaqComponent],
  imports: [CommonModule, SharedModule, FaqRoutingModule],
})
export class FaqModule {}
