import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { RouterModule } from "@angular/router";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { DynamicTemplateComponent } from "./components/dynamic-template/dynamic-template.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DialogRef } from "../core/models/dialog-ref";
import { TemplateListComponent } from "./components/template-list/template-list.component";
import { DialogInsertionDirective } from "./directives/dialog-insertion/dialog-insertion.directive";
import { RioComponent } from "./templates/rio/rio.component";
import { SafePipe } from "./pipes/safe-pipe/safe.pipe";
import { ThemeListComponent } from "./components/theme-list/theme-list.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

import { BerlinComponent } from "./templates/berlin/berlin.component";
import { TokyoComponent } from "./templates/tokyo/tokyo.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { NairobiComponent } from "./templates/nairobi/nairobi.component";
import { DenverComponent } from "./templates/denver/denver.component";
import { OsloComponent } from "./templates/oslo/oslo.component";
import { StockholmComponent } from "./templates/stockholm/stockholm.component";
import { HelsinkiComponent } from "./templates/helsinki/helsinki.component";
import { ResumeTemplateDirective } from "./components/dynamic-template/resume-template.directive";
import { ThemeColorPipe } from "./pipe/theme-color/theme-color.pipe";

@NgModule({
  declarations: [
    SideNavigationComponent,
    TopNavigationComponent,
    DynamicTemplateComponent,
    ResumeTemplateDirective,
    DialogComponent,
    DialogInsertionDirective,
    TemplateListComponent,
    RioComponent,
    TokyoComponent,
    BerlinComponent,
    SafePipe,
    ThemeListComponent,
    PageNotFoundComponent,
    SnackbarComponent,
    NairobiComponent,
    DenverComponent,
    OsloComponent,
    StockholmComponent,
    HelsinkiComponent,
    ThemeColorPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    FormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    SideNavigationComponent,
    TopNavigationComponent,
    PageNotFoundComponent,
    SnackbarComponent,
    DynamicTemplateComponent,
    ResumeTemplateDirective,
    TemplateListComponent,
    ThemeListComponent,
    RioComponent,
    BerlinComponent,
    TokyoComponent,
    SafePipe,
    ThemeColorPipe,
  ],
  entryComponents: [DialogComponent, TemplateListComponent, ThemeListComponent],
  providers: [DialogRef],
})
export class SharedModule {}
