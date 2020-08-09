import { Component, OnInit, Inject, Optional } from "@angular/core";
import { DialogRef } from "src/app/core/models/dialog-ref";
import { THEME_LIST } from "../../constants/shared.constants";
import { DIALOG_DATA } from "src/app/core/services/dialog/dialog.service";

@Component({
  selector: "app-theme-list",
  templateUrl: "./theme-list.component.html",
  styleUrls: ["./theme-list.component.scss"],
})
export class ThemeListComponent implements OnInit {
  public themeList = THEME_LIST;
  public selectedThemeColor: any;
  constructor(
    private dialogRef: DialogRef,
    @Optional() @Inject(DIALOG_DATA) public data: any = {}
  ) {}

  ngOnInit(): void {
    this.selectedThemeColor = this.data.themeColor;
  }

  public selectedTheme(themeName) {
    this.dialogRef.close(themeName);
  }
}
