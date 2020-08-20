import { Component, OnInit, OnDestroy } from '@angular/core';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})
export class SnackbarComponent implements OnInit, OnDestroy {
  public showSnackbar = false;
  public snackbarMessage: string;
  public snackbarType: string;
  private snackbarSubscription: Subscription;

  constructor(private snackbarService: SnackbarService) {}

  ngOnInit() {
    this.snackbarSubscription = this.snackbarService.snackbarState.subscribe((res) => {
      this.snackbarMessage = res.message;
      this.snackbarType = res.type;
      this.showSnackbar = true;
      setTimeout(() => {
        this.showSnackbar = false;
      }, 3000);
    });
  }

  ngOnDestroy() {
    this.snackbarSubscription.unsubscribe();
  }
}
