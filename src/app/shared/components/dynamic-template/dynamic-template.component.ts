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

@Component({
  selector: "app-dynamic-template",
  templateUrl: "./dynamic-template.component.html",
  styleUrls: ["./dynamic-template.component.scss"],
})
export class DynamicTemplateComponent implements OnInit, OnChanges {
  @Input() data: any;
  @ViewChild(cvTemplateDirective, { static: true })
  cvTemplate: cvTemplateDirective;
  public config = {
    tokyo: TokyoComponent,
    berlin: BerlinComponent,
    rio: RioComponent,
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    const templateName = this.data.templateName;
    this.createComponent(templateName);
  }

  public ngOnChanges() {
    const templateName = this.data.templateName;
    this.createComponent(templateName);
  }

  public createComponent(compName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.config[compName]
    );
    const viewContainerRef = this.cvTemplate.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicTemplateComponent>componentRef.instance).data = this.data;
  }
}
