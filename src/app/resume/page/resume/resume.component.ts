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
  public shareCount = 0;
  public downloadCount = 0;
  public timeSpent = 0;
  public deviceType = null;

  public resumeType = null;
  public resumeId = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coreService: CoreService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    const routeUrl = this.router.url;
    if (routeUrl.includes('/resume')) {
      this.resumeType = 'public';
    } else if (routeUrl.includes('/cv')) {
      this.resumeType = 'private';
    }
    this.activatedRoute.paramMap.subscribe((routeParams) => {
      this.loader = true;
      this.resumeId = routeParams.get('resumeId');

      const params = {
        resumeType: this.resumeType,
        resumeId: this.resumeId,
      };
      this.coreService
        .getResumeDetails(params)
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
    this.deviceType = this.getDeviceType();

    // send beacon
    this.timeSpent = performance.now();
    window.addEventListener('unload', (event) => {
      const data = JSON.stringify({
        totalTimeSpent: this.timeSpent,
        downloadCount: this.downloadCount,
        shareCount: this.shareCount,
        deviceType: this.deviceType,
        resumeId: this.resumeId,
        resumeType: this.resumeType,
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
  }

  public navigateToRoute(route) {
    this.router.navigate([route]);
  }

  public printResume() {
    window.print();
  }

  public shareResume() {
    this.shareCount += 1;
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
