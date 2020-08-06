import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ResumeBuilderRoutingModule } from "./resume-builder-routing.module";
import { EditorComponent } from "./components/editor/editor.component";
import { PreviewComponent } from "./components/preview/preview.component";
import { ShareComponent } from "./components/share/share.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ResumeBuilderComponent } from "./page/resume-builder/resume-builder.component";
import { ResumeBuilderService } from "./services/resume-builder/resume-builder.service";

@NgModule({
  declarations: [
    ResumeBuilderComponent,
    EditorComponent,
    PreviewComponent,
    ShareComponent,
  ],
  imports: [CommonModule, SharedModule, ResumeBuilderRoutingModule],
  providers: [ResumeBuilderService],
})
export class ResumeBuilderModule {}
