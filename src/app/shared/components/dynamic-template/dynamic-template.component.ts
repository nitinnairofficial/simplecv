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
import { DialogService } from "src/app/core/services/dialog/dialog.service";
import { TemplateListComponent } from "../template-list/template-list.component";

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
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.createComponent("modern");
  }

  public createComponent(compName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this.config[compName]
    );
    const viewContainerRef = this.cvTemplate.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<DynamicTemplateComponent>componentRef.instance).data = {
      firstName: "Max",
      lastName: "Parker",
    };
  }

  public OpenChangeTemplateDialog() {
    this.dialogService.open(TemplateListComponent, {});
  }
}
