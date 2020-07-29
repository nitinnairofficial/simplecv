import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreService } from "src/app/core/services/core/core.service";
import { DUMMY_FORM } from "src/app/dashboard/modules/cv-builder/constants/cv.constants";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.scss"],
})
export class CvComponent implements OnInit {
  public sendData: any;
  public loader: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coreService: CoreService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   this.loader = true;
    //   const uniqueCvUrl = params.get("cvId");

    //   this.coreService
    //     .getCvDetails(uniqueCvUrl)
    //     .pipe(finalize(() => (this.loader = false)))
    //     .subscribe(
    //       (res) => {
    //         console.log(res);
    //       },
    //       (err) => {
    //         console.log(err);
    //         // this.router.navigate(["/page-not-found"]);
    //       }
    //     );
    // });

    this.sendData = DUMMY_FORM;

    // send beacon

    window.addEventListener("unload", function (event) {
      var data = JSON.stringify({
        totalTimeSpent: "2min",
        resumeDownloaded: true,
        totalShared: 2,
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          "http://localhost:8081/api/resume/nitinnair@gmail.com",
          data
        );
      } else {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(
          "post",
          "http://localhost:8081/api/resume/nitinnair@gmail.com",
          false
        );
        xhr.send(data);
      }
    });
  }

  public navigateToRoute(route) {
    this.router.navigate([route]);
  }

  public downloadCv() {}
}
