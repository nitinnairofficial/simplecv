import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ComponentFactoryResolver,
  OnChanges,
} from "@angular/core";
import { cvTemplateDirective } from "./cv-template.directive";
import { RioComponent } from "../../templates/rio/rio.component";
import { BerlinComponent } from "../../templates/berlin/berlin.component";
import { TokyoComponent } from "../../templates/tokyo/tokyo.component";
import { TEMPLATE_CONFIG } from "../../constants/shared.constants";

@Component({
  selector: "app-dynamic-template",
  templateUrl: "./dynamic-template.component.html",
  styleUrls: ["./dynamic-template.component.scss"],
})
export class DynamicTemplateComponent implements OnInit, OnChanges {
  @Input() data: any;
  @ViewChild(cvTemplateDirective, { static: true })
  cvTemplate: cvTemplateDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    if (this.data) {
      const templateName = this.data.cvSettings.templateName;
      this.createComponent(templateName);
    }
  }

  public ngOnChanges() {
    if (this.data) {
      const templateName = this.data.cvSettings.templateName;
      this.createComponent(templateName);
    }
  }

  public createComponent(compName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      TEMPLATE_CONFIG[compName]
    );
    const viewContainerRef = this.cvTemplate.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicTemplateComponent>componentRef.instance).data = this.data;
  }
}
