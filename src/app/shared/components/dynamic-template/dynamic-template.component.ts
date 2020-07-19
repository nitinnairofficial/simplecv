import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ComponentFactoryResolver,
} from "@angular/core";
import { ModernComponent } from "../../templates/modern/modern.component";
import { cvTemplateDirective } from "./cv-template.directive";
import { ClassicComponent } from "../../templates/classic/classic.component";
import { EleganceComponent } from "../../templates/elegance/elegance.component";
import { RioComponent } from "../../templates/rio/rio.component";

@Component({
  selector: "app-dynamic-template",
  templateUrl: "./dynamic-template.component.html",
  styleUrls: ["./dynamic-template.component.scss"],
})
export class DynamicTemplateComponent implements OnInit {
  @Input() data: any;
  @ViewChild(cvTemplateDirective, { static: true })
  cvTemplate: cvTemplateDirective;
  public config = {
    modern: ModernComponent,
    classic: ClassicComponent,
    elegance: EleganceComponent,
    rio: RioComponent,
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.createComponent("rio");
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
