import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core/core.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { finalize } from 'rxjs/operators';
import { DUMMY_FORM } from 'src/app/dashboard/modules/resume-builder/constants/resume-builder.constants';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public data: any;
  public loader = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coreService: CoreService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
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

  public navigateToRoute(route) {
    this.router.navigate([route]);
  }

  public printResume() {
    window.print();
  }

  public shareResume() {}
}
