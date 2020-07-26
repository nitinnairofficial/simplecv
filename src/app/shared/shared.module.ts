import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { RouterModule } from "@angular/router";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { DynamicTemplateComponent } from "./components/dynamic-template/dynamic-template.component";
import { cvTemplateDirective } from "./components/dynamic-template/cv-template.directive";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogComponent } from "./components/dialog/dialog.component";
import { DialogRef } from "../core/models/dialog-ref";
import { TemplateListComponent } from "./components/template-list/template-list.component";
import { DialogInsertionDirective } from "./directives/dialog-insertion/dialog-insertion.directive";
import { RioComponent } from "./templates/rio/rio.component";
import { SafePipe } from "./pipes/safe-pipe/safe.pipe";
import { ThemeListComponent } from "./components/theme-list/theme-list.component";
import { BerlinComponent } from "./templates/berlin/berlin.component";
import { TokyoComponent } from "./templates/tokyo/tokyo.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { NairobiComponent } from './templates/nairobi/nairobi.component';
import { MoscowComponent } from './templates/moscow/moscow.component';
import { DenverComponent } from './templates/denver/denver.component';
import { OsloComponent } from './templates/oslo/oslo.component';
import { StockholmComponent } from './templates/stockholm/stockholm.component';
import { HelsinkiComponent } from './templates/helsinki/helsinki.component';

@NgModule({
  declarations: [
    SideNavigationComponent,
    TopNavigationComponent,
    DynamicTemplateComponent,
    cvTemplateDirective,
    DialogComponent,
    TemplateListComponent,
    DialogInsertionDirective,
    RioComponent,
    TokyoComponent,
    BerlinComponent,
    SafePipe,
    ThemeListComponent,
    PageNotFoundComponent,
    SnackbarComponent,
    NairobiComponent,
    MoscowComponent,
    DenverComponent,
    OsloComponent,
    StockholmComponent,
    HelsinkiComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ChartsModule],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    SideNavigationComponent,
    TopNavigationComponent,
    PageNotFoundComponent,
    SnackbarComponent,
    DynamicTemplateComponent,
    cvTemplateDirective,
    TemplateListComponent,
    ThemeListComponent,
    RioComponent,
    BerlinComponent,
    TokyoComponent,
    SafePipe,
  ],
  entryComponents: [DialogComponent, TemplateListComponent],
  providers: [DialogRef],
})
export class SharedModule {}
