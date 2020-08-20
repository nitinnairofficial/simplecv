import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './page/faq/faq.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResumeFaqsComponent } from './components/resume-faqs/resume-faqs.component';

@NgModule({
  declarations: [FaqComponent, ResumeFaqsComponent],
  imports: [CommonModule, SharedModule, FaqRoutingModule],
})
export class FaqModule {}
