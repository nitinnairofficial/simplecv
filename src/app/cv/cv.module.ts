import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CvRoutingModule } from "./cv-routing.module";
import { CvComponent } from "./page/cv/cv.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CvComponent],
  imports: [CommonModule, SharedModule, CvRoutingModule],
})
export class CvModule {}
