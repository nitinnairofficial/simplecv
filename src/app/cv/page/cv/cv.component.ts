import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.scss"],
})
export class CvComponent implements OnInit {
  public sendData = {};
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const userId = params.get("userId");
      if (userId == "nitin") {
        this.sendData = {
          aboutSection: [
            {
              firstName: "Nitin",
              lastName: "Nair",
            },
          ],
        };
      } else {
        this.sendData = {
          aboutSection: [
            {
              firstName: "Hello",
              lastName: "World",
            },
          ],
        };
      }
    });
  }
}
