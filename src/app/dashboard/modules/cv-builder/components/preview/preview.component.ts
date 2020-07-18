import { Component, OnInit } from "@angular/core";
import { CvBuilderService } from '../../services/cv/cv-builder.service';

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
})
export class PreviewComponent implements OnInit {
  public sendData = {};
  constructor(private cvService: CvBuilderService) {}

  ngOnInit(): void {
    this.cvService.cvData.subscribe((data) => {
      this.sendData = data;
    });
  }
}
