/** Possible overrides for a dialog's position. */
export interface DialogPosition {
  /** Override for the dialog's top position. */
  top?: string;

  /** Override for the dialog's bottom position. */
  bottom?: string;

  /** Override for the dialog's left position. */
  left?: string;

  /** Override for the dialog's right position. */
  right?: string;
}

/**
 * Configuration for opening a modal dialog with the MatDialog service.
 */
export class DialogConfig<D = any> {
  /** Whether the user can use escape or clicking on the backdrop to close the modal. */
  disableOverlayClose ? = false;

  /** Whether the user can close by clicking on the close button. */
  displayCloseButton ? = true;

  /** Width of the dialog. */
  width ? = '';

  /** Height of the dialog. */
  height ? = '';

  /** Whether the dialog has a backdrop. */
  hasBackdrop ? = true;

  /** Position overrides. */
  position?: DialogPosition;

  /** Remove overlay background */
  removeOverlayBackground ? = false;

  /** Custom class for dialog */
  panelClass?: string | string[];

  /** Custom class for overlay */
  overlayPanelClass?: string | string[];

  /** Data being injected into the child component. */
  data?: D | null = null;
}
