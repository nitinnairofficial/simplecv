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
      const userId = params.get("userId");

      this.coreService
        .getCvData(userId)
        .pipe(finalize(() => (this.loader = false)))
        .subscribe(
          (res) => {
            console.log(res);
          },
          (err) => {
            this.router.navigate(["/page-not-found"]);
          }
        );
    });
  }
}
