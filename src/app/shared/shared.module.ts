import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { RouterModule } from "@angular/router";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { ModernComponent } from "./templates/modern/modern.component";
import { DynamicTemplateComponent } from "./components/dynamic-template/dynamic-template.component";
import { cvTemplateDirective } from "./components/dynamic-template/cv-template.directive";
import { ClassicComponent } from './templates/classic/classic.component';

@NgModule({
  declarations: [
    SideNavigationComponent,
    TopNavigationComponent,
    ModernComponent,
    DynamicTemplateComponent,
    cvTemplateDirective,
    ClassicComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    RouterModule,
    SideNavigationComponent,
    TopNavigationComponent,
    ModernComponent,
    DynamicTemplateComponent,
    cvTemplateDirective,
    ClassicComponent
  ],
})
export class SharedModule {}
