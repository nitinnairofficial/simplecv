/**
 * This directive will mark the point where the dynamic child component will be inserted.
 */
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDialogInsertion]'
})
export class DialogInsertionDirective {

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) { }

}
