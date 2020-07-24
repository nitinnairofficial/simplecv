import { Component, OnInit } from "@angular/core";
import { SnackbarService } from "src/app/core/services/snackbar/snackbar.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.scss"],
})
export class SnackbarComponent implements OnInit {
  public showSnackbar = false;
  public snackbarMessage: string;
  private snackbarSubscription: Subscription;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit() {
    this.snackbarSubscription = this.snackbarService.snackbarState.subscribe(
      (res) => {
        this.snackbarMessage = res.message;
        this.showSnackbar = true;
        setTimeout(() => {
          this.showSnackbar = false;
        }, 4000);
      }
    );
  }

  ngOnDestroy() {
    this.snackbarSubscription.unsubscribe();
  }
}
