import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ComponentFactoryResolver,
  OnChanges,
} from '@angular/core';
import { ResumeTemplateDirective } from './resume-template.directive';
import { TEMPLATE_CONFIG } from '../../constants/shared.constants';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.scss'],
})
export class DynamicTemplateComponent implements OnInit, OnChanges {
  @Input() data: any;
  @ViewChild(ResumeTemplateDirective, { static: true })
  resumeTemplate: ResumeTemplateDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    if (this.data && this.data.resumeSettings) {
      const templateName = this.data.resumeSettings.templateName;
      this.createComponent(templateName);
    }
  }

  public ngOnChanges() {
    if (this.data && this.data.resumeSettings) {
      const templateName = this.data.resumeSettings.templateName;
      this.createComponent(templateName);
    }
  }

  public createComponent(compName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TEMPLATE_CONFIG[compName]
    );
    const viewContainerRef = this.resumeTemplate.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DynamicTemplateComponent).data = this.data;
  }
}
