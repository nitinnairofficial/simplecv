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
  public sendData: any;
  public loader = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coreService: CoreService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.loader = true;
      const uniqueResumeUrl = params.get('resumeId');

      this.coreService
        .getResumeDetails(uniqueResumeUrl)
        .pipe(finalize(() => (this.loader = false)))
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            console.log(err);
            // this.router.navigate(["/page-not-found"]);
          }
        );
    });

    this.sendData = DUMMY_FORM;

    // send beacon

    window.addEventListener('unload', (event) => {
      const data = JSON.stringify({
        totalTimeSpent: '2min',
        resumeDownloaded: true,
        totalShared: 2,
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('http://localhost:8081/api/resume/nitinnair@gmail.com', data);
      } else {
        let xhr;
        xhr = new XMLHttpRequest();
        xhr.open('post', 'http://localhost:8081/api/resume/nitinnair@gmail.com', false);
        xhr.send(data);
      }
    });

    this.getDeviceType();
  }

  public navigateToRoute(route) {
    this.router.navigate([route]);
  }

  public downloadResume() {
    this.snackbarService.show('Resume downloaded successfully', 'success');
  }

  public shareResume() {
    this.snackbarService.show('Resume link copied successfully', 'success');
  }

  public getDeviceType() {
    const getDeviceType = () => {
      const ua = navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return 'tablet';
      }
      if (/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return 'mobile';
      }
      return 'desktop';
    };
    console.log(getDeviceType());
  }
}
