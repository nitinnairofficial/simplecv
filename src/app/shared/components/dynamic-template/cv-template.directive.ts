import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[cv-template]",
})
export class cvTemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
