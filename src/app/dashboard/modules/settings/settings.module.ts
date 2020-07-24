import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SettingsComponent } from "./page/settings/settings.component";
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';

@NgModule({
  declarations: [SettingsComponent, AccountSettingsComponent],
  imports: [CommonModule, SharedModule, SettingsRoutingModule],
})
export class SettingsModule {}
