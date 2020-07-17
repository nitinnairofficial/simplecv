import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvComponent } from './page/cv/cv.component';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './components/editor/editor.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ShareComponent } from './components/share/share.component';
import { CvService } from './services/cv/cv.service';


@NgModule({
  declarations: [CvComponent, EditorComponent, PreviewComponent, ShareComponent],
  imports: [
    CommonModule,
    SharedModule,
    CvRoutingModule
  ],
  providers: [
    CvService
  ]
})
export class CvModule { }
