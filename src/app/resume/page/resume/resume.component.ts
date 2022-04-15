import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core/core.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { finalize } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/authentication/services/authentication/authentication.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public data: any;
  public loader = false;
  public isUserLoggedIn = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coreService: CoreService,
    private snackbarService: SnackbarService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.authenticationService.isLoggedIn;
    this.activatedRoute.paramMap.subscribe((routeParams) => {
      this.loader = true;
      const userId = routeParams.get('resumeId');

      this.coreService
        .getResumeDetailsByUserId(userId)
        .pipe(finalize(() => (this.loader = false)))
        .subscribe(
          (res) => {
            this.data = res;
          },
          (err) => {
            this.router.navigate(['/page-not-found']);
          }
        );
    });
  }

  public navigateToPreview() {
    this.router.navigate(['/dashboard/preview']);
  }

  public printResume() {
    window.print();
  }

  public shareResume() {
    const listener = (e: ClipboardEvent) => {
      const url = `https://simplecv.vercel.app${this.router.url}`;
      e.clipboardData.setData('text/plain', url);
      e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);

    this.snackbarService.show('Resume link copied');
  }
}
