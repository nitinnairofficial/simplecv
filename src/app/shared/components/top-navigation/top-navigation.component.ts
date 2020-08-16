import { Component, OnInit, Input } from "@angular/core";
import { AccessService } from "src/app/core/services/access/access.service";

@Component({
  selector: "app-top-navigation",
  templateUrl: "./top-navigation.component.html",
  styleUrls: ["./top-navigation.component.scss"],
})
export class TopNavigationComponent implements OnInit {
  @Input()
  public topNavigationRoutes = [];

  public ngOnInit() {}
}
