import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CvRoutingModule } from "./cv-routing.module";
import { EditorComponent } from "./components/editor/editor.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { ShareComponent } from "./components/share/share.component";
import { SharedModule } from "src/app/shared/shared.module";
import { CvBuilderComponent } from "./page/cv/cv-builder.component";
import { CvBuilderService } from "./services/cv/cv-builder.service";

@NgModule({
  declarations: [
    CvBuilderComponent,
    EditorComponent,
    PreviewComponent,
    ShareComponent,
  ],
  imports: [CommonModule, SharedModule, CvRoutingModule],
  providers: [CvBuilderService],
})
export class CvBuilderModule {}
