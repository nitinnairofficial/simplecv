import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[resume-template]",
})
export class ResumeTemplateDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
