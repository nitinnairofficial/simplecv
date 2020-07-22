import { Component, OnInit } from "@angular/core";
import { DialogRef } from "src/app/core/models/dialog-ref";
import { THEME_CONFIG } from '../../constants/shared.constants';

@Component({
  selector: "app-theme-list",
  templateUrl: "./theme-list.component.html",
  styleUrls: ["./theme-list.component.scss"],
})
export class ThemeListComponent implements OnInit {
  constructor(private dialogRef: DialogRef) {}

  ngOnInit(): void {}

  public selectedTheme(themeName) {
    this.dialogRef.close(THEME_CONFIG[themeName]);
  }
}
