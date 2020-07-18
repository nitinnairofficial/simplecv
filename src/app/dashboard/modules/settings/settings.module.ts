import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./page/settings/settings.component";
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [CommonModule, SharedModule, SettingsRoutingModule],
})
export class SettingsModule {}
