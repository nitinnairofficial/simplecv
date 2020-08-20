/** Reference: https://malcoded.com/posts/angular-dynamic-components */

import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,
  InjectionToken,
  Optional,
  Inject,
} from '@angular/core';
import { DialogConfig } from '../../models/dialog-config';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { DialogRef } from '../../models/dialog-ref';
import { DialogInjector } from '../../models/dialog-injector';

/** Injection token that can be used to access the data that was passed in to a dialog. */
export const DIALOG_DATA = new InjectionToken<any>('DialogData');

/** Injection token that can be used to specify default dialog options. */
export const DIALOG_DEFAULT_OPTIONS = new InjectionToken<DialogConfig>(
  'dialog-default-options'
);

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Optional()
    @Inject(DIALOG_DEFAULT_OPTIONS)
    private defaultOptions: DialogConfig
  ) {}

  private appendDialogComponentToBody(config?: DialogConfig) {
    const dialogRef = new DialogRef();
    const map = new WeakMap<any, any>([
      [DialogConfig, config],
      [DialogRef, dialogRef],
      [DIALOG_DATA, config.data],
    ]);

    const sub = dialogRef.afterClosed.subscribe(() => {
      this.removeDialogComponentFromBody();
      sub.unsubscribe();
    });

    // Get the factory of DialogComponent
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      DialogComponent
    );
    // Create an instance of DialogComponent
    const componentRef = componentFactory.create(
      new DialogInjector(this.injector, map)
    );
    // Attach the new component to the angular component tree (which is separate from the DOM)
    this.appRef.attachView(componentRef.hostView);
    // Get the root DOM-element of our DialogComponent and attach it to the HTML-body
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.updateElementSize(domElem, config);

    this.applyOtherConfiguration(domElem, config);

    // to disable htmlbody scrolling
    document.body.classList.add('modal-open');
    document.getElementById('html').classList.add('modal-open');

    this.dialogComponentRef = componentRef;

    this.dialogComponentRef.instance.onClose.subscribe(() => {
      this.removeDialogComponentFromBody();
    });
    return dialogRef;
  }

  /** Remove the component once the dialog is closed */
  private removeDialogComponentFromBody() {
    this.appRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
    document.body.classList.remove('modal-open');
    document.getElementById('html').classList.remove('modal-open');
  }

  private updateElementSize(domElem: HTMLElement, config?: DialogConfig) {
    if (!domElem || !config) {
      return;
    }
    const style = domElem.style;
    style.width = this.coerceCssPixelValue(config.width);
    style.height = this.coerceCssPixelValue(config.height);
  }

  private applyOtherConfiguration(domElem: HTMLElement, config?: DialogConfig) {
    const dialogElem: any = domElem.children && domElem.children[0];
    const overlayElem: any = domElem.children && domElem.children[1];

    const panelClass = config.panelClass;
    if (Array.isArray(panelClass)) {
      panelClass.forEach((cssClass) => {
        dialogElem.classList.add(cssClass);
      });
    } else if (panelClass) {
      dialogElem.classList.add(panelClass);
    }

    const overlayPanelClass = config.overlayPanelClass;
    if (Array.isArray(overlayPanelClass)) {
      overlayPanelClass.forEach((cssClass) => {
        overlayElem.classList.add(cssClass);
      });
    } else if (overlayPanelClass) {
      overlayElem.classList.add(overlayPanelClass);
    }

    if (dialogElem) {
      const dialogDivElemStyle = dialogElem.style;
      const { top = null, bottom = null, left = null, right = null } =
        config.position || {};
      if (top !== null) {
        dialogDivElemStyle.marginTop = this.coerceCssPixelValue(top);
      }
      if (right !== null) {
        dialogDivElemStyle.marginRight = this.coerceCssPixelValue(right);
      }
      if (bottom !== null) {
        dialogDivElemStyle.marginBottom = this.coerceCssPixelValue(bottom);
      }
      if (left !== null) {
        dialogDivElemStyle.marginLeft = this.coerceCssPixelValue(left);
      }
    }

    if (overlayElem && config.removeOverlayBackground) {
      overlayElem.style.background = 'none';
    }
  }

  /** Coerces a value to a CSS pixel value. */
  private coerceCssPixelValue(value: any): string {
    if (value == null) {
      return '';
    }

    return typeof value === 'string' ? value : `${value}px`;
  }

  public open(componentType: Type<any>, config?: DialogConfig) {
    config = applyConfigDefaults(
      config,
      this.defaultOptions || new DialogConfig()
    );
    const dialogRef = this.appendDialogComponentToBody(config);
    this.dialogComponentRef.instance.childComponentType = componentType;
    return dialogRef;
  }
}

/**
 * Applies default options to the dialog config.
 * @param config Config to be modified.
 * @param defaultOptions Default options provided.
 * @returns The new configuration object.
 */
function applyConfigDefaults(
  config?: DialogConfig,
  defaultOptions?: DialogConfig
): DialogConfig {
  return { ...defaultOptions, ...config };
}
