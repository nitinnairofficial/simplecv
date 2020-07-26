import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoreService } from "src/app/core/services/core/core.service";
import { finalize } from "rxjs/operators";

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
    this.activatedRoute.paramMap.subscribe((params) => {
      this.loader = true;
      const uniqueCvUrl = params.get("cvId");

      this.coreService
        .getCvDetails(uniqueCvUrl)
        .pipe(finalize(() => (this.loader = false)))
        .subscribe(
          (res) => {
            this.sendData = {
              cvSettings: {
                templateName: "berlin",
              },
            };
          },
          (err) => {
            this.router.navigate(["/page-not-found"]);
          }
        );
    });

    // send beacon

    window.addEventListener("unload", function (event) {
      var data = JSON.stringify({
        totalTimeSpent: "2min",
        resumeDownloaded: true,
        selectedTemplate: 2,
        resumeId: "nitinnair@gmail.com",
        emailId: "nitinnair@gmail.com",
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
}
