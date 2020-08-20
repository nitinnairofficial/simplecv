import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './page/resume/resume.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, SharedModule, ResumeRoutingModule],
})
export class ResumeModule {}
