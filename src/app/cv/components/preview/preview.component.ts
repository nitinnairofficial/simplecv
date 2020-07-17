import { Component, OnInit } from "@angular/core";
import { CvService } from "../../services/cv/cv.service";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
})
export class PreviewComponent implements OnInit {
  public sendData = {};
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.cvData.subscribe((data) => {
      this.sendData = data;
    });
  }
}
