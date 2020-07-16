import {
  Component,
  OnInit,
  Type,
  OnDestroy,
  AfterViewInit,
  ComponentRef,
  ViewChild,
  ComponentFactoryResolver,
  ChangeDetectorRef,
} from "@angular/core";
import { Subject } from "rxjs";
import { DialogInsertionDirective } from '../../directives/dialog-insertion/dialog-insertion.directive';
import { DialogRef } from 'src/app/core/models/dialog-ref';
import { DialogConfig } from 'src/app/core/models/dialog-config';


@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly $onClose = new Subject<any>();
  public componentRef: ComponentRef<any>;
  public childComponentType: Type<any>;
  public onClose = this.$onClose.asObservable();

  @ViewChild(DialogInsertionDirective)
  private insertionPoint: DialogInsertionDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef,
    public dialogConfig: DialogConfig
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    /**
     * Since we are changing the view (by adding a child component)
     * but angular thinks it is already done with the view-part.
     *
     * This will result in ExpressionChangedAfterItHasBeenCheckedError.
     * To prevent that, we need to tell angular to re-run change detection,
     * after we have added the component.
     */
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  /** Close the dialog */
  public onOverlayClicked(evt: MouseEvent) {
    if (!this.dialogConfig.disableOverlayClose) {
      this.dialogRef.close();
    }
  }

  public onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  public close() {
    this.$onClose.next();
  }
}
