import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { RouterModule } from "@angular/router";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { ModernComponent } from "./templates/modern/modern.component";
import { DynamicTemplateComponent } from "./components/dynamic-template/dynamic-template.component";
import { cvTemplateDirective } from "./components/dynamic-template/cv-template.directive";
import { ClassicComponent } from "./templates/classic/classic.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DialogRef } from "../core/models/dialog-ref";
import { TemplateListComponent } from "./components/template-list/template-list.component";
import { DialogInsertionDirective } from "./directives/dialog-insertion/dialog-insertion.directive";
import { EleganceComponent } from "./templates/elegance/elegance.component";
import { RioComponent } from "./templates/rio/rio.component";

@NgModule({
  declarations: [
    SideNavigationComponent,
    TopNavigationComponent,
    ModernComponent,
    DynamicTemplateComponent,
    cvTemplateDirective,
    ClassicComponent,
    DialogComponent,
    TemplateListComponent,
    DialogInsertionDirective,
    EleganceComponent,
    RioComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ChartsModule],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    SideNavigationComponent,
    TopNavigationComponent,
    ModernComponent,
    DynamicTemplateComponent,
    cvTemplateDirective,
    ClassicComponent,
    TemplateListComponent,
    EleganceComponent,
    RioComponent,
  ],
  entryComponents: [DialogComponent, TemplateListComponent],
  providers: [DialogRef],
})
export class SharedModule {}
