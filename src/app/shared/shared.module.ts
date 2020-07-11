import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { RouterModule } from "@angular/router";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { ModernComponent } from './templates/modern/modern.component';

@NgModule({
  declarations: [SideNavigationComponent, TopNavigationComponent, ModernComponent],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, SideNavigationComponent, TopNavigationComponent, ModernComponent],
})
export class SharedModule {}
